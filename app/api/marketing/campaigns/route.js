import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/shared/supabase/admin";

const MAX_FILE_SIZE = 50 * 1024 * 1024;
const ALLOWED_MEDIA_PREFIXES = ["image/", "video/"];

function isAllowedMedia(file) {
  return Boolean(
    file &&
      ALLOWED_MEDIA_PREFIXES.some((prefix) => file.type?.startsWith(prefix))
  );
}

function sanitizeFileName(name = "asset") {
  return name
    .normalize("NFKD")
    .replace(/[^a-zA-Z0-9._-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "") || "asset";
}

async function requireWorkspaceUser() {
  const cookieStore = await cookies();
  const userId = cookieStore.get("user_id")?.value;
  const adminRole = cookieStore.get("admin_role")?.value;

  if (!userId && !adminRole) {
    return null;
  }

  return { userId: userId || null, adminRole: adminRole || null };
}

async function loadCampaignPortfolio(supabase) {
  const { data: campaigns, error: campaignError } = await supabase
    .from("marketing_campaigns")
    .select(
      "id, organization_id, campaign_name, campaign_type, campaign_status, scheduled_at, launched_at, completed_at, budget, expected_revenue, actual_revenue, campaign_content, performance_metrics, created_at"
    )
    .order("created_at", { ascending: false });

  if (campaignError) {
    throw campaignError;
  }

  const campaignRows = campaigns || [];
  const organizationIds = [
    ...new Set(campaignRows.map((row) => row.organization_id).filter(Boolean)),
  ];
  const campaignIds = campaignRows.map((row) => row.id);

  const [{ data: organizations, error: organizationError }, { data: assets, error: assetError }] =
    await Promise.all([
      organizationIds.length
        ? supabase
            .from("organizations")
            .select("id, name")
            .in("id", organizationIds)
        : Promise.resolve({ data: [], error: null }),
      campaignIds.length
        ? supabase
            .from("creative_assets")
            .select(
              "id, organization_id, campaign_id, asset_type, source_type, name, file_url, image_url, thumbnail_url, file_name, status, storage_path, mime_type, metadata, approval_state, created_at"
            )
            .in("campaign_id", campaignIds)
            .eq("archived", false)
            .order("created_at", { ascending: false })
        : Promise.resolve({ data: [], error: null }),
    ]);

  if (organizationError) {
    throw organizationError;
  }

  if (assetError) {
    throw assetError;
  }

  const organizationMap = new Map(
    (organizations || []).map((organization) => [organization.id, organization.name])
  );

  const assetsByCampaign = new Map();
  for (const asset of assets || []) {
    if (!assetsByCampaign.has(asset.campaign_id)) {
      assetsByCampaign.set(asset.campaign_id, []);
    }
    assetsByCampaign.get(asset.campaign_id).push(asset);
  }

  return campaignRows.map((campaign) => ({
    ...campaign,
    organization_name: organizationMap.get(campaign.organization_id) || "Unknown organization",
    assets: assetsByCampaign.get(campaign.id) || [],
  }));
}

export async function GET() {
  try {
    const user = await requireWorkspaceUser();
    if (!user) {
      return NextResponse.json(
        { success: false, message: "Workspace authentication required." },
        { status: 401 }
      );
    }

    const supabase = getSupabaseAdmin();
    const campaigns = await loadCampaignPortfolio(supabase);

    return NextResponse.json({ success: true, campaigns });
  } catch (error) {
    console.error("Marketing campaign GET failed", error);
    return NextResponse.json(
      { success: false, message: error.message || "Unable to load campaigns." },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const supabase = getSupabaseAdmin();
  let uploadedPath = null;
  let assetId = null;

  try {
    const user = await requireWorkspaceUser();
    if (!user) {
      return NextResponse.json(
        { success: false, message: "Workspace authentication required." },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const campaignId = String(formData.get("campaign_id") || "").trim();
    const role = String(formData.get("role") || "general").trim();
    const file = formData.get("file");

    if (!campaignId) {
      return NextResponse.json(
        { success: false, message: "Campaign is required." },
        { status: 400 }
      );
    }

    if (!isAllowedMedia(file)) {
      return NextResponse.json(
        { success: false, message: "Upload an image or video file." },
        { status: 400 }
      );
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { success: false, message: "Files must be 50 MB or smaller." },
        { status: 400 }
      );
    }

    const { data: campaign, error: campaignError } = await supabase
      .from("marketing_campaigns")
      .select("id, organization_id, campaign_name")
      .eq("id", campaignId)
      .single();

    if (campaignError || !campaign) {
      return NextResponse.json(
        { success: false, message: "Campaign not found." },
        { status: 404 }
      );
    }

    const safeName = sanitizeFileName(file.name);
    uploadedPath = `${campaign.organization_id}/${campaign.id}/${Date.now()}-${safeName}`;
    const fileBuffer = Buffer.from(await file.arrayBuffer());

    const { error: uploadError } = await supabase.storage
      .from("marketing-assets")
      .upload(uploadedPath, fileBuffer, {
        contentType: file.type,
        cacheControl: "3600",
        upsert: false,
      });

    if (uploadError) {
      throw uploadError;
    }

    const { data: publicUrlData } = supabase.storage
      .from("marketing-assets")
      .getPublicUrl(uploadedPath);

    const publicUrl = publicUrlData?.publicUrl;
    if (!publicUrl) {
      throw new Error("Could not create a public media URL.");
    }

    const mediaKind = file.type.startsWith("video/") ? "video" : "image";

    const { data: asset, error: assetError } = await supabase
      .from("creative_assets")
      .insert({
        organization_id: campaign.organization_id,
        campaign_id: campaign.id,
        asset_type: "campaign_media",
        source_type: "upload",
        name: file.name,
        file_url: publicUrl,
        image_url: mediaKind === "image" ? publicUrl : null,
        file_name: file.name,
        status: "active",
        storage_path: uploadedPath,
        mime_type: file.type,
        metadata: {
          campaign_media_role: role || "general",
          original_size_bytes: file.size,
          uploaded_from: "marketing_campaign_workspace",
        },
        approval_state: "not_required",
        created_by: user.userId,
      })
      .select(
        "id, organization_id, campaign_id, asset_type, source_type, name, file_url, image_url, thumbnail_url, file_name, status, storage_path, mime_type, metadata, approval_state, created_at"
      )
      .single();

    if (assetError) {
      throw assetError;
    }

    assetId = asset.id;

    const { error: usageError } = await supabase.from("campaign_asset_usage").insert({
      campaign_id: campaign.id,
      asset_id: asset.id,
      organization_id: campaign.organization_id,
    });

    if (usageError) {
      throw usageError;
    }

    return NextResponse.json({ success: true, asset });
  } catch (error) {
    console.error("Marketing campaign upload failed", error);

    if (assetId) {
      await supabase.from("campaign_asset_usage").delete().eq("asset_id", assetId);
      await supabase.from("creative_assets").delete().eq("id", assetId);
    }

    if (uploadedPath) {
      await supabase.storage.from("marketing-assets").remove([uploadedPath]);
    }

    return NextResponse.json(
      { success: false, message: error.message || "Upload failed." },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const user = await requireWorkspaceUser();
    if (!user) {
      return NextResponse.json(
        { success: false, message: "Workspace authentication required." },
        { status: 401 }
      );
    }

    const assetId = new URL(request.url).searchParams.get("asset_id");
    if (!assetId) {
      return NextResponse.json(
        { success: false, message: "Asset is required." },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();
    const { data: asset, error: assetError } = await supabase
      .from("creative_assets")
      .select("id, storage_path")
      .eq("id", assetId)
      .single();

    if (assetError || !asset) {
      return NextResponse.json(
        { success: false, message: "Asset not found." },
        { status: 404 }
      );
    }

    const { error: usageError } = await supabase
      .from("campaign_asset_usage")
      .delete()
      .eq("asset_id", assetId);

    if (usageError) {
      throw usageError;
    }

    const { error: deleteAssetError } = await supabase
      .from("creative_assets")
      .delete()
      .eq("id", assetId);

    if (deleteAssetError) {
      throw deleteAssetError;
    }

    if (asset.storage_path) {
      const { error: storageError } = await supabase.storage
        .from("marketing-assets")
        .remove([asset.storage_path]);

      if (storageError) {
        console.error("Campaign asset storage cleanup failed", storageError);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Marketing campaign asset DELETE failed", error);
    return NextResponse.json(
      { success: false, message: error.message || "Unable to remove asset." },
      { status: 500 }
    );
  }
}

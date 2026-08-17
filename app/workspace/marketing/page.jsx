"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

const mediaRoles = [
  { value: "hero", label: "Hero / Primary Ad" },
  { value: "feed", label: "Feed Creative" },
  { value: "story", label: "Story / Reel" },
  { value: "proof", label: "Proof / Supporting" },
  { value: "general", label: "General" },
];

function money(value) {
  return new Intl.NumberFormat("en-TH", {
    style: "currency",
    currency: "THB",
    maximumFractionDigits: 0,
  }).format(Number(value || 0));
}

function labelize(value = "") {
  return String(value)
    .replaceAll("_", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function connectionLabel(value) {
  if (value === "facebook_and_instagram_connected") return "Facebook + Instagram connected";
  if (value === "facebook_connected_instagram_not_connected") return "Facebook connected · Instagram missing";
  if (value === "required_before_paid_launch") return "Meta connection required before launch";
  return labelize(value || "not configured");
}

function statusTone(status) {
  if (["published", "active", "live"].includes(status)) return "border-green-500/20 bg-green-500/10 text-green-300";
  if (["queued", "ready"].includes(status)) return "border-cyan-500/20 bg-cyan-500/10 text-cyan-300";
  if (["failed", "blocked"].includes(status)) return "border-red-500/20 bg-red-500/10 text-red-300";
  return "border-amber-500/20 bg-amber-500/10 text-amber-300";
}

function CampaignMedia({ asset, onRemove, removing }) {
  const url = asset.image_url || asset.file_url;
  const isVideo = asset.mime_type?.startsWith("video/");
  const role = asset.metadata?.campaign_media_role || "general";

  return (
    <div className="overflow-hidden rounded-[28px] border border-white/[0.07] bg-black/30">
      <div className="relative aspect-[4/3] bg-white/[0.03]">
        {isVideo ? (
          <video src={url} controls className="h-full w-full object-cover" />
        ) : url ? (
          <Image src={url} alt={asset.name || "Campaign media"} fill sizes="(max-width: 1280px) 100vw, 33vw" className="object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center text-white/30">No preview</div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="truncate text-sm text-white/90">{asset.file_name || asset.name || "Campaign media"}</div>
            <div className="mt-1 text-xs text-white/40">{labelize(role)}</div>
          </div>
          <button
            type="button"
            disabled={removing}
            onClick={() => onRemove(asset)}
            className="rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1.5 text-xs text-red-300 transition hover:bg-red-500/20 disabled:opacity-40"
          >
            {removing ? "Removing…" : "Remove"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function MarketingPage() {
  const [campaigns, setCampaigns] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);
  const [removingId, setRemovingId] = useState(null);
  const [mediaRole, setMediaRole] = useState("hero");
  const fileInputRef = useRef(null);

  async function loadCampaigns(preferredId) {
    try {
      setError("");
      const response = await fetch("/api/marketing/campaigns", { cache: "no-store" });
      const payload = await response.json();

      if (!response.ok || !payload.success) {
        throw new Error(payload.message || "Unable to load campaigns.");
      }

      setCampaigns(payload.campaigns || []);
      setSelectedId((current) => {
        const wanted = preferredId || current;
        if (wanted && payload.campaigns?.some((campaign) => campaign.id === wanted)) return wanted;
        return payload.campaigns?.[0]?.id || null;
      });
    } catch (loadError) {
      setError(loadError.message || "Unable to load campaigns.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadCampaigns();
  }, []);

  const selected = useMemo(
    () => campaigns.find((campaign) => campaign.id === selectedId) || campaigns[0] || null,
    [campaigns, selectedId]
  );

  const portfolio = useMemo(() => {
    const totalBudget = campaigns.reduce((sum, campaign) => sum + Number(campaign.budget || 0), 0);
    const connected = campaigns.filter((campaign) => campaign.campaign_content?.meta_connection === "facebook_and_instagram_connected").length;
    const assets = campaigns.reduce((sum, campaign) => sum + (campaign.assets?.length || 0), 0);
    return { totalBudget, connected, assets };
  }, [campaigns]);

  async function uploadFile(file) {
    if (!selected || !file) return;

    setUploading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("campaign_id", selected.id);
      formData.append("role", mediaRole);
      formData.append("file", file);

      const response = await fetch("/api/marketing/campaigns", {
        method: "POST",
        body: formData,
      });
      const payload = await response.json();

      if (!response.ok || !payload.success) {
        throw new Error(payload.message || "Upload failed.");
      }

      await loadCampaigns(selected.id);
    } catch (uploadError) {
      setError(uploadError.message || "Upload failed.");
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  }

  async function removeAsset(asset) {
    if (!window.confirm(`Remove ${asset.file_name || asset.name || "this asset"} from this campaign?`)) return;

    setRemovingId(asset.id);
    setError("");

    try {
      const response = await fetch(`/api/marketing/campaigns?asset_id=${encodeURIComponent(asset.id)}`, {
        method: "DELETE",
      });
      const payload = await response.json();

      if (!response.ok || !payload.success) {
        throw new Error(payload.message || "Unable to remove asset.");
      }

      await loadCampaigns(selected?.id);
    } catch (removeError) {
      setError(removeError.message || "Unable to remove asset.");
    } finally {
      setRemovingId(null);
    }
  }

  const content = selected?.campaign_content || {};
  const audience = content.audience || {};
  const creative = content.creative_direction || {};
  const copyVariants = content.copy_variants || [];
  const channels = content.channels || [];
  const measurements = content.measurement || [];
  const assets = selected?.assets || [];

  if (loading) {
    return <div className="rounded-[36px] border border-white/[0.06] bg-white/[0.03] p-8 text-white/50">Loading live marketing campaigns…</div>;
  }

  return (
    <div className="space-y-6 pb-10">
      <section className="overflow-hidden rounded-[42px] border border-white/[0.06] bg-gradient-to-br from-[#07111F] via-[#0A1630] to-[#050816] p-6 xl:p-10">
        <div className="flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <div className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs tracking-[0.24em] text-cyan-300">
              LIVE CAMPAIGN CONTROL
            </div>
            <h1 className="mt-5 text-5xl font-extralight tracking-[-0.06em] xl:text-7xl">Marketing Campaigns</h1>
            <p className="mt-4 max-w-3xl text-white/50">
              Real campaigns, real budgets, exact creative assignments and Meta readiness. Upload media directly to the campaign that will use it.
            </p>
          </div>

          <div className="rounded-[28px] border border-amber-500/15 bg-amber-500/[0.07] px-5 py-4 text-sm text-amber-200">
            Paid launch remains controlled. Uploading media does not authorize spend.
          </div>
        </div>
      </section>

      {error ? (
        <div className="rounded-[24px] border border-red-500/20 bg-red-500/10 px-5 py-4 text-red-200">{error}</div>
      ) : null}

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-[30px] border border-white/[0.06] bg-white/[0.03] p-5">
          <div className="text-xs tracking-[0.2em] text-white/35">CAMPAIGNS</div>
          <div className="mt-3 text-5xl font-extralight">{campaigns.length}</div>
        </div>
        <div className="rounded-[30px] border border-white/[0.06] bg-white/[0.03] p-5">
          <div className="text-xs tracking-[0.2em] text-white/35">PLANNED MONTHLY BUDGET</div>
          <div className="mt-3 text-4xl font-extralight">{money(portfolio.totalBudget)}</div>
        </div>
        <div className="rounded-[30px] border border-white/[0.06] bg-white/[0.03] p-5">
          <div className="text-xs tracking-[0.2em] text-white/35">CAMPAIGN MEDIA</div>
          <div className="mt-3 text-5xl font-extralight">{portfolio.assets}</div>
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-[340px_minmax(0,1fr)]">
        <aside className="rounded-[36px] border border-white/[0.06] bg-white/[0.025] p-4">
          <div className="px-3 pb-4 text-xs tracking-[0.22em] text-[#D6A66A]">CAMPAIGN PORTFOLIO</div>
          <div className="space-y-2">
            {campaigns.map((campaign) => {
              const active = campaign.id === selected?.id;
              const campaignContent = campaign.campaign_content || {};
              return (
                <button
                  key={campaign.id}
                  type="button"
                  onClick={() => setSelectedId(campaign.id)}
                  className={`w-full rounded-[24px] border p-4 text-left transition ${
                    active
                      ? "border-cyan-400/30 bg-cyan-400/10"
                      : "border-white/[0.05] bg-black/20 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="text-xs text-white/40">{campaign.organization_name}</div>
                  <div className="mt-2 text-lg font-light leading-tight">{campaign.campaign_name}</div>
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <span className={`rounded-full border px-2.5 py-1 text-[11px] ${statusTone(campaign.campaign_status)}`}>
                      {labelize(campaign.campaign_status)}
                    </span>
                    <span className="text-xs text-white/40">{money(campaign.budget)}</span>
                  </div>
                  <div className="mt-3 text-xs text-white/35">{campaign.assets?.length || 0} media · {labelize(campaignContent.spend_state || "planned")}</div>
                </button>
              );
            })}
          </div>
        </aside>

        {selected ? (
          <div className="space-y-5">
            <section className="rounded-[38px] border border-white/[0.06] bg-white/[0.025] p-6 xl:p-8">
              <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
                <div>
                  <div className="text-xs tracking-[0.22em] text-[#D6A66A]">{selected.organization_name}</div>
                  <h2 className="mt-3 text-4xl font-extralight tracking-[-0.05em] xl:text-6xl">{selected.campaign_name}</h2>
                  <p className="mt-4 max-w-4xl text-lg text-white/55">{content.goal}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className={`rounded-full border px-4 py-2 text-xs ${statusTone(selected.campaign_status)}`}>{labelize(selected.campaign_status)}</span>
                  <span className="rounded-full border border-white/[0.08] bg-black/20 px-4 py-2 text-xs text-white/60">{labelize(content.spend_state || "planned")}</span>
                </div>
              </div>

              <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-[26px] bg-black/20 p-5">
                  <div className="text-xs text-white/35">MONTHLY BUDGET</div>
                  <div className="mt-2 text-3xl font-extralight">{money(content.monthly_budget_thb || selected.budget)}</div>
                </div>
                <div className="rounded-[26px] bg-black/20 p-5">
                  <div className="text-xs text-white/35">DAILY GUIDE</div>
                  <div className="mt-2 text-3xl font-extralight">{content.daily_budget_guide_thb ? money(content.daily_budget_guide_thb) : "—"}</div>
                </div>
                <div className="rounded-[26px] bg-black/20 p-5">
                  <div className="text-xs text-white/35">PRIMARY CTA</div>
                  <div className="mt-2 text-xl font-light">{content.primary_cta || "—"}</div>
                </div>
                <div className="rounded-[26px] bg-black/20 p-5">
                  <div className="text-xs text-white/35">META READINESS</div>
                  <div className="mt-2 text-sm leading-relaxed text-white/80">{connectionLabel(content.meta_connection)}</div>
                </div>
              </div>
            </section>

            <section className="grid gap-5 xl:grid-cols-2">
              <div className="rounded-[34px] border border-white/[0.06] bg-white/[0.025] p-6">
                <div className="text-xs tracking-[0.22em] text-[#D6A66A]">CAMPAIGN MESSAGE</div>
                <div className="mt-4 text-2xl font-extralight leading-snug">{content.core_message || "No core message stored."}</div>
                <div className="mt-6 text-sm text-white/40">Offer</div>
                <div className="mt-2 text-white/75">{content.offer || "—"}</div>
                <div className="mt-6 space-y-3">
                  {copyVariants.map((copy, index) => (
                    <div key={`${selected.id}-copy-${index}`} className="rounded-[22px] border border-white/[0.05] bg-black/20 p-4 text-sm leading-relaxed text-white/65">
                      <span className="mr-2 text-white/30">{index + 1}.</span>{copy}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[34px] border border-white/[0.06] bg-white/[0.025] p-6">
                <div className="text-xs tracking-[0.22em] text-[#D6A66A]">AUDIENCE & DELIVERY</div>
                <div className="mt-4 text-2xl font-extralight">{audience.market || "Market not set"}</div>
                <div className="mt-2 text-sm leading-relaxed text-white/50">{audience.approach || "No targeting approach stored."}</div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {(audience.segments || []).map((segment) => (
                    <span key={segment} className="rounded-full border border-purple-500/15 bg-purple-500/10 px-3 py-2 text-xs text-purple-200">{segment}</span>
                  ))}
                </div>

                <div className="mt-7 text-sm text-white/40">Channels</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {channels.map((channel) => (
                    <span key={channel} className="rounded-full border border-cyan-500/15 bg-cyan-500/10 px-3 py-2 text-xs text-cyan-200">{channel}</span>
                  ))}
                </div>
              </div>
            </section>

            <section className="rounded-[38px] border border-cyan-500/15 bg-cyan-500/[0.04] p-6 xl:p-8">
              <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
                <div>
                  <div className="text-xs tracking-[0.22em] text-cyan-300">CAMPAIGN MEDIA</div>
                  <h3 className="mt-3 text-4xl font-extralight tracking-[-0.04em]">Pictures & Video</h3>
                  <p className="mt-3 max-w-3xl text-white/50">
                    Files uploaded here are stored inside this campaign's own organization/campaign folder and linked directly to this campaign.
                  </p>
                </div>

                <div className="min-w-[230px]">
                  <label className="text-xs text-white/40">Media role</label>
                  <select
                    value={mediaRole}
                    onChange={(event) => setMediaRole(event.target.value)}
                    className="mt-2 w-full rounded-2xl border border-white/[0.08] bg-[#07111F] px-4 py-3 text-sm text-white outline-none"
                  >
                    {mediaRoles.map((role) => (
                      <option key={role.value} value={role.value}>{role.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div
                className="mt-6 rounded-[30px] border border-dashed border-cyan-400/25 bg-black/20 p-8 text-center transition hover:bg-cyan-500/[0.04]"
                onDragOver={(event) => event.preventDefault()}
                onDrop={(event) => {
                  event.preventDefault();
                  const file = event.dataTransfer.files?.[0];
                  if (file) uploadFile(file);
                }}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*,video/*"
                  className="hidden"
                  onChange={(event) => uploadFile(event.target.files?.[0])}
                />
                <div className="text-2xl font-extralight">{uploading ? "Uploading to campaign…" : "Drop a picture/video here"}</div>
                <div className="mt-2 text-sm text-white/40">or choose a file · maximum 50 MB</div>
                <button
                  type="button"
                  disabled={uploading}
                  onClick={() => fileInputRef.current?.click()}
                  className="mt-5 rounded-full bg-white px-5 py-3 text-sm text-black transition hover:bg-white/90 disabled:opacity-50"
                >
                  {uploading ? "Uploading…" : "Choose Media"}
                </button>
              </div>

              {assets.length ? (
                <div className="mt-6 grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
                  {assets.map((asset) => (
                    <CampaignMedia key={asset.id} asset={asset} onRemove={removeAsset} removing={removingId === asset.id} />
                  ))}
                </div>
              ) : (
                <div className="mt-6 rounded-[26px] border border-white/[0.05] bg-black/20 p-6 text-white/40">
                  No media attached yet. Add the real campaign pictures here before creating the Meta ads.
                </div>
              )}
            </section>

            <section className="grid gap-5 xl:grid-cols-2">
              <div className="rounded-[34px] border border-white/[0.06] bg-white/[0.025] p-6">
                <div className="text-xs tracking-[0.22em] text-[#D6A66A]">CREATIVE DIRECTION</div>
                <div className="mt-4 text-white/70">{creative.style || "No creative direction stored."}</div>
                <div className="mt-5 space-y-2">
                  {(creative.content_pillars || []).map((pillar) => (
                    <div key={pillar} className="rounded-[20px] bg-black/20 px-4 py-3 text-sm text-white/55">{pillar}</div>
                  ))}
                </div>
              </div>

              <div className="rounded-[34px] border border-white/[0.06] bg-white/[0.025] p-6">
                <div className="text-xs tracking-[0.22em] text-[#D6A66A]">SUCCESS MEASUREMENT</div>
                <div className="mt-4 space-y-2">
                  {measurements.map((measurement) => (
                    <div key={measurement} className="flex items-center gap-3 rounded-[20px] bg-black/20 px-4 py-3 text-sm text-white/60">
                      <span className="h-2 w-2 rounded-full bg-green-400" />
                      {measurement}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        ) : (
          <div className="rounded-[36px] border border-white/[0.06] bg-white/[0.025] p-8 text-white/50">No campaigns found.</div>
        )}
      </section>
    </div>
  );
}

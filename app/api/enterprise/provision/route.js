import { getSupabaseAdmin } from "@/lib/shared/supabase/admin";

function createSlug(value = "") {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
}

export async function POST(request) {
  try {
    const body = await request.json();

    const leadId = body.leadId;

    if (!leadId) {
      return Response.json(
        {
          success: false,
          message: "leadId required",
        },
        {
          status: 400,
        }
      );
    }

    const supabase =
      getSupabaseAdmin();

    const {
      data: lead,
      error: leadError,
    } = await supabase
      .from("organization_leads")
      .select("*")
      .eq("id", leadId)
      .single();

    if (leadError || !lead) {
      return Response.json(
        {
          success: false,
          message: "Lead not found",
        },
        {
          status: 404,
        }
      );
    }

    const tenantInsert =
      await supabase
        .from("tenants")
        .insert({
          name:
            lead.operating_name ||
            lead.legal_company_name,

          slug: createSlug(
            lead.operating_name ||
              lead.legal_company_name
          ),

          plan: "trial",

          currency:
            lead.currency_code,

          timezone:
            lead.timezone,

          subscription_status:
            "trial",

          setup_step: 1,

          setup_complete: false,
        })
        .select()
        .single();

    if (tenantInsert.error) {
      return Response.json(
        {
          success: false,
          message:
            tenantInsert.error
              .message,
        },
        {
          status: 500,
        }
      );
    }

    const tenant =
      tenantInsert.data;

    await supabase
      .from("tenant_users")
      .insert({
        tenant_id: tenant.id,

        email:
          lead.business_email,

        full_name:
          lead.contact_name,

        role: "owner",

        status: "active",
      });

    await supabase
      .from(
        "tenant_platform_config"
      )
      .insert({
        tenant_id: tenant.id,
      });

    if (
      Array.isArray(
        lead.selected_modules
      )
    ) {
      const modules =
        lead.selected_modules.map(
          (moduleId) => ({
            tenant_id:
              tenant.id,

            module_id:
              moduleId,

            status: "active",
          })
        );

      if (modules.length > 0) {
        await supabase
          .from(
            "tenant_modules"
          )
          .insert(modules);
      }
    }

    await supabase
      .from(
        "tenant_billing_profiles"
      )
      .insert({
        tenant_id: tenant.id,

        billing_cycle:
          lead.billing_cycle,

        currency_code:
          lead.currency_code,

        subtotal:
          lead.subtotal || 0,

        discount_total:
          lead.discount_total ||
          0,

        final_monthly_total:
          lead.final_monthly_total ||
          0,

        final_yearly_total:
          lead.final_yearly_total ||
          0,

        status: "trial",
      });

    await supabase
      .from("organization_leads")
      .update({
        lead_status:
          "provisioned",
      })
      .eq("id", lead.id);

    return Response.json({
      success: true,
      tenant,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message:
          error.message,
      },
      {
        status: 500,
      }
    );
  }
}

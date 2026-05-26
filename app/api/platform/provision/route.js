import { createClient } from "@supabase/supabase-js";



export async function POST(request) {
  try {
    const body = await request.json();

    if (!body.lead_id) {
      return Response.json(
        {
          success: false,
          message: "lead_id required",
        },
        {
          status: 400,
        }
      );
    }

    const {
      data: lead,
      error: leadError,
    } = await supabase
      .from("organization_leads")
      .select("*")
      .eq("id", body.lead_id)
      .single();

    if (leadError || !lead) {
      throw new Error(
        "Lead not found"
      );
    }

    const {
      data: existingTenant,
    } = await supabase
      .from("tenants")
      .select("*")
      .eq(
        "tenant_id",
        lead.organization_id
      )
      .maybeSingle();

    if (existingTenant) {
      return Response.json({
        success: true,
        tenant: existingTenant,
        message:
          "Tenant already provisioned.",
      });
    }

    const tenantInsert =
      await supabase
        .from("tenants")
        .insert({
          tenant_id:
            lead.organization_id,

          name:
            lead.company,

          plan: "starter",

          subscription_status:
            "active",

          setup_complete: true,

          setup_step: 6,
        })
        .select()
        .single();

    if (tenantInsert.error) {
      throw tenantInsert.error;
    }

    const tenant =
      tenantInsert.data;

    const ownerInsert =
      await supabase
        .from("tenant_users")
        .insert({
          tenant_id:
            tenant.id,

          full_name:
            lead.contact,

          email:
            lead.email,

          phone:
            lead.phone,

          role: "owner",

          status: "active",
        })
        .select()
        .single();

    if (ownerInsert.error) {
      throw ownerInsert.error;
    }

    if (
      Array.isArray(
        lead.selected_modules
      )
    ) {
      for (const module of lead.selected_modules) {
        await supabase
          .from(
            "tenant_modules"
          )
          .insert({
            tenant_id:
              tenant.id,

            module_id:
              module.id,

            status:
              "active",
          });
      }
    }

    await supabase
      .from(
        "organization_leads"
      )
      .update({
        status:
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
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}

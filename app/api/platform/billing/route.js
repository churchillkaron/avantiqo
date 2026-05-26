import { createClient } from "@supabase/supabase-js";



export async function GET() {
  try {
    const { data, error } =
      await supabase
        .from("subscriptions")
        .select("*")
        .order("created_at", {
          ascending: false,
        });

    if (error) {
      throw error;
    }

    return Response.json({
      success: true,
      subscriptions: data || [],
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

export async function POST(request) {
  try {
    const body = await request.json();

    const { data: lead, error: leadError } =
      await supabase
        .from("organization_leads")
        .select("*")
        .eq("id", body.lead_id)
        .single();

    if (leadError) {
      throw leadError;
    }
const {
  data: existingSubscription,
} = await supabase
  .from("subscriptions")
  .select("*")
  .eq("lead_id", lead.id)
  .maybeSingle();

if (existingSubscription) {
  return Response.json({
    success: true,
    subscription: existingSubscription,
    message:
      "Billing already exists for this lead.",
  });
}
    const subscriptionPayload = {
      lead_id: lead.id,

      organization_id:
        lead.organization_id || null,

      company:
        lead.company || null,

      email:
        lead.email || null,

      phone:
        lead.phone || null,

      currency:
        lead.currency || "USD",

      billing_cycle:
        lead.billing_cycle || "monthly",

      subtotal:
        Number(lead.subtotal || 0),

      discount_total:
        Number(lead.discount_total || 0),

      final_monthly_total:
        Number(
          lead.final_monthly_total || 0
        ),

      final_yearly_total:
        Number(
          lead.final_yearly_total || 0
        ),

      selected_modules:
        lead.selected_modules || [],

      status: "draft",

      updated_at:
        new Date().toISOString(),
    };

    const {
      data: subscription,
      error: subscriptionError,
    } = await supabase
      .from("subscriptions")
      .insert(subscriptionPayload)
      .select()
      .single();

    if (subscriptionError) {
      throw subscriptionError;
    }

    const invoicePayload = {
      subscription_id:
        subscription.id,

      lead_id:
        lead.id,

      invoice_number:
        `AVQ-${Date.now()}`,

      company:
        lead.company || null,

      email:
        lead.email || null,

      currency:
        lead.currency || "USD",

      amount:
        subscription.billing_cycle ===
        "yearly"
          ? Number(
              subscription.final_yearly_total || 0
            )
          : Number(
              subscription.final_monthly_total || 0
            ),

      status: "draft",

      due_date:
        new Date(
          Date.now() +
            1000 *
              60 *
              60 *
              24 *
              7
        )
          .toISOString()
          .slice(0, 10),
    };

    const {
      data: invoice,
      error: invoiceError,
    } = await supabase
     .from("billing_invoices")
      .insert(invoicePayload)
      .select()
      .single();

    if (invoiceError) {
      throw invoiceError;
    }

    await supabase
      .from("organization_leads")
      .update({
        status: "billing_created",
      })
      .eq("id", lead.id);

    return Response.json({
      success: true,
      subscription,
      invoice,
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
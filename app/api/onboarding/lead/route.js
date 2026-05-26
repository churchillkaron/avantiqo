import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL;

const SUPABASE_SERVICE_ROLE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY;

const RESEND_API_KEY =
  process.env.RESEND_API_KEY;

function getSupabaseAdmin() {
  if (
    !SUPABASE_URL ||
    !SUPABASE_SERVICE_ROLE_KEY
  ) {
    return null;
  }

  return createClient(
    SUPABASE_URL,
    SUPABASE_SERVICE_ROLE_KEY
  );
}

async function sendLeadEmail(payload) {
  if (!RESEND_API_KEY) {
    return { skipped: true };
  }

  const subject = `New Avantiqo setup started: ${
    payload.company || "Unknown Company"
  }`;

  const html = `
    <h2>New Avantiqo organization setup</h2>

    <p>
      <strong>Company:</strong>
      ${payload.company || "-"}
    </p>

    <p>
      <strong>Country:</strong>
      ${payload.country || "-"}
    </p>

    <p>
      <strong>Contact:</strong>
      ${payload.contact || "-"}
    </p>

    <p>
      <strong>Email:</strong>
      ${payload.email || "-"}
    </p>

    <p>
      <strong>Phone:</strong>
      ${payload.phone || "-"}
    </p>

    <p>
      <strong>Industry:</strong>
      ${payload.industry || "-"}
    </p>

    <p>
      <strong>Monthly Value:</strong>
      ${payload.final_monthly_total || 0}
      ${payload.currency || ""}
    </p>
  `;

  const response = await fetch(
    "https://api.resend.com/emails",
    {
      method: "POST",

      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify({
        from:
          "Avantiqo <onboarding@avantigo.ai>",

        to: [
          "patric@pcsphuket.com",
        ],

        subject,

        html,
      }),
    }
  );

  if (!response.ok) {
    return {
      error: await response.text(),
    };
  }

  return { sent: true };
}

export async function POST(request) {
  try {
    const body =
      await request.json();

    const payload = {
        organization_id:
  body.organization_id ||
  crypto.randomUUID(),
  
      status:
        body.lead_status ||
        "started",

      company:
        body.legal_company_name ||
        body.operating_name ||
        null,

      contact:
        body.contact_name ||
        null,

      email:
        body.business_email ||
        null,

      phone:
        body.phone_number ||
        null,

      website:
        body.website || null,

      industry:
        body.industry || null,

      country:
        body.country_name ||
        body.country_code ||
        null,

      city:
        body.state_region ||
        null,

      currency:
        body.currency_code ||
        null,

      locations:
        body.location_count ||
        null,

      employees:
        body.employee_count ||
        null,

      revenue:
        body.revenue_range ||
        null,

      sms_verified:
        body.sms_verified ||
        false,

      email_verified:
        body.email_verified ||
        false,

      selected_modules:
        body.selected_modules ||
        [],

      subtotal:
        body.subtotal || 0,

      discount_total:
        body.discount_total ||
        0,

      final_monthly_total:
        body.final_monthly_total ||
        0,

      final_yearly_total:
        body.final_yearly_total ||
        0,

      billing_cycle:
        body.billing_cycle ||
        "monthly",

      discount_code:
        body.discount_code ||
        null,

      domain_verification:
        body.domain_verification ||
        false,
    };

    const supabase =
      getSupabaseAdmin();

    if (!supabase) {
      return Response.json(
        {
          success: false,

          message:
            "Supabase admin environment variables are missing.",
        },
        {
          status: 500,
        }
      );
    }

    let result;

    if (body.lead_id) {
      result = await supabase
        .from(
          "organization_leads"
        )
        .update(payload)
        .eq("id", body.lead_id)
        .select()
        .single();
    } else {
      result = await supabase
        .from(
          "organization_leads"
        )
        .insert(payload)
        .select()
        .single();
    }

    if (result.error) {
      return Response.json(
        {
          success: false,

          message:
            result.error.message,
        },
        {
          status: 500,
        }
      );
    }

    await sendLeadEmail(payload);

    return Response.json({
      success: true,
      lead: result.data,
    });
  } catch (error) {
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
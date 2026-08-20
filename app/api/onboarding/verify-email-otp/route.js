import { createClient } from "@supabase/supabase-js";

function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return null;
  }

  return createClient(supabaseUrl, serviceRoleKey);
}

export async function POST(request) {
  try {
    const body = await request.json();

    const email =
      typeof body.email === "string"
        ? body.email.trim().toLowerCase()
        : "";

    const token =
      typeof body.token === "string"
        ? body.token.trim()
        : "";

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !/^\d{6}$/.test(token)
    ) {
      return Response.json(
        {
          success: false,
          message: "Valid email and verification code required",
        },
        {
          status: 400,
        }
      );
    }

    const supabase = getSupabaseClient();

    if (!supabase) {
      return Response.json(
        {
          success: false,
          message: "Email verification is temporarily unavailable",
        },
        {
          status: 503,
        }
      );
    }

    const { data, error } =
      await supabase
        .from("email_verifications")
        .select("id, code, expires_at")
        .eq("email", email)
        .eq("verified", false)
        .order("created_at", {
          ascending: false,
        })
        .limit(1);

    if (error || !data || data.length === 0) {
      return Response.json(
        {
          success: false,
          message:
            "No verification records found",
        },
        {
          status: 400,
        }
      );
    }

    const latest = data[0];

    if (latest.code !== token) {
      return Response.json(
        {
          success: false,
          message:
            "Invalid verification code",
        },
        {
          status: 400,
        }
      );
    }

    const expired =
      new Date(latest.expires_at) <
      new Date();

    if (expired) {
      return Response.json(
        {
          success: false,
          message:
            "Verification code expired",
        },
        {
          status: 400,
        }
      );
    }

    const { error: updateError } = await supabase
      .from("email_verifications")
      .update({
        verified: true,
      })
      .eq("id", latest.id);

    if (updateError) {
      console.error("Unable to finalize email verification", {
        code: updateError.code,
      });

      return Response.json(
        {
          success: false,
          message: "Unable to verify code",
        },
        {
          status: 500,
        }
      );
    }

    return Response.json({
      success: true,
    });
  } catch {
    console.error("Email verification check failed");

    return Response.json(
      {
        success: false,
        message: "Unable to verify code",
      },
      {
        status: 500,
      }
    );
  }
}

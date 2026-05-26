import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(request) {
  try {
    const body = await request.json();

    const email =
      body.email?.trim().toLowerCase();

    const token =
      body.token?.trim();

    console.log("VERIFY EMAIL", {
      email,
      token,
    });

    const { data, error } =
      await supabase
        .from("email_verifications")
        .select("*")
        .eq("email", email)
        .eq("verified", false)
        .order("created_at", {
          ascending: false,
        });

    console.log("DB RESULTS", data);
    console.log("DB ERROR", error);

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

    await supabase
      .from("email_verifications")
      .update({
        verified: true,
      })
      .eq("id", latest.id);

    return Response.json({
      success: true,
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

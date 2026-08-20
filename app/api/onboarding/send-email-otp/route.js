import { randomInt } from "node:crypto";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

function generateCode() {
  return randomInt(100000, 1000000).toString();
}

function getEmailServices() {
  const resendKey = process.env.RESEND_API_KEY;
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!resendKey || !supabaseUrl || !serviceRoleKey) {
    return null;
  }

  return {
    resend: new Resend(resendKey),
    supabase: createClient(supabaseUrl, serviceRoleKey),
  };
}

export async function POST(request) {
  try {
    const body = await request.json();

    const email =
      typeof body.email === "string"
        ? body.email.trim().toLowerCase()
        : "";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        {
          success: false,
          message: "Valid email required",
        },
        {
          status: 400,
        }
      );
    }

    const services = getEmailServices();

    if (!services) {
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

    const code = generateCode();

    const expiresAt = new Date(
      Date.now() + 1000 * 60 * 10
    );

    const { error: insertError } =
      await services.supabase
        .from("email_verifications")
        .insert({
          email,
          code,
          verified: false,
          expires_at: expiresAt,
        });

    if (insertError) {
      console.error("Unable to store email verification code", {
        code: insertError.code,
      });

      return Response.json(
        {
          success: false,
          message: "Unable to start email verification",
        },
        {
          status: 500,
        }
      );
    }

    const { error: resendError } =
      await services.resend.emails.send({
        from:
        "Avantiqo <onboarding@resend.dev>",
        to: email,
        subject:
          "Your Avantiqo Verification Code",
        html: `
          <div style="background:#020617;padding:40px;font-family:sans-serif;color:white">
            <h1>Verify Your Email</h1>

            <div style="
              font-size:48px;
              font-weight:bold;
              letter-spacing:10px;
              margin:30px 0;
              color:#d4af37;
            ">
              ${code}
            </div>

            <p>
              This code expires in 10 minutes.
            </p>
          </div>
        `,
      });

    if (resendError) {
      console.error("Unable to deliver email verification code");

      return Response.json(
        {
          success: false,
          message: "Unable to deliver verification code",
        },
        {
          status: 502,
        }
      );
    }

    return Response.json({
      success: true,
    });
  } catch {
    console.error("Email verification request failed");

    return Response.json(
      {
        success: false,
        message: "Unable to send verification code",
      },
      {
        status: 500,
      }
    );
  }
}

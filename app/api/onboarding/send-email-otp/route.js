import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

function generateCode() {
  return Math.floor(
    100000 + Math.random() * 900000
  ).toString();
}

export async function POST(request) {
  try {
    const body = await request.json();

    const email =
      body.email?.trim().toLowerCase();

    console.log("SEND EMAIL OTP", email);

    if (!email) {
      return Response.json(
        {
          success: false,
          message: "Email required",
        },
        {
          status: 400,
        }
      );
    }

    const code = generateCode();

    console.log("GENERATED CODE", code);

    const expiresAt = new Date(
      Date.now() + 1000 * 60 * 10
    );

    const insert =
      await supabase
        .from("email_verifications")
        .insert({
          email,
          code,
          verified: false,
          expires_at: expiresAt,
        })
        .select();

    console.log(
      "INSERT RESULT",
      insert
    );

    if (insert.error) {
      console.error(insert.error);

      return Response.json(
        {
          success: false,
          message:
            insert.error.message,
        },
        {
          status: 500,
        }
      );
    }

    const resendResult =
      await resend.emails.send({
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

    console.log(
      "RESEND RESULT",
      resendResult
    );

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

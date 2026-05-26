import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export async function POST(request) {
  try {
    const body = await request.json();

    let phoneNumber =
      body.phoneNumber?.trim();

    console.log(
      "OTP REQUEST",
      phoneNumber
    );

    if (!phoneNumber) {
      return Response.json(
        {
          success: false,
          message:
            "Phone number required",
        },
        {
          status: 400,
        }
      );
    }

    if (
      !phoneNumber.startsWith("+")
    ) {
      phoneNumber = `+${phoneNumber}`;
    }

    console.log(
      "FINAL PHONE",
      phoneNumber
    );

    const result =
      await client.verify.v2
        .services(
          process.env
            .TWILIO_VERIFY_SERVICE_SID
        )
        .verifications.create({
          to: phoneNumber,
          channel: "sms",
        });

    console.log(
      "TWILIO RESULT",
      result
    );

    return Response.json({
      success: true,
      sid: result.sid,
      status: result.status,
    });
  } catch (error) {
    console.error(
      "TWILIO ERROR"
    );

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
import twilio from "twilio";

function getTwilioConfig() {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const serviceSid = process.env.TWILIO_VERIFY_SERVICE_SID;

  if (!accountSid || !authToken || !serviceSid) {
    return null;
  }

  return {
    client: twilio(accountSid, authToken),
    serviceSid,
  };
}

export async function POST(request) {
  try {
    const body = await request.json();

    let phoneNumber =
      typeof body.phoneNumber === "string"
        ? body.phoneNumber.trim()
        : "";

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

    if (!/^\+[1-9]\d{7,14}$/.test(phoneNumber)) {
      return Response.json(
        {
          success: false,
          message: "Valid international phone number required",
        },
        {
          status: 400,
        }
      );
    }

    const twilioConfig = getTwilioConfig();

    if (!twilioConfig) {
      return Response.json(
        {
          success: false,
          message: "Phone verification is temporarily unavailable",
        },
        {
          status: 503,
        }
      );
    }

    const result =
      await twilioConfig.client.verify.v2
        .services(
          twilioConfig.serviceSid
        )
        .verifications.create({
          to: phoneNumber,
          channel: "sms",
        });

    return Response.json({
      success: true,
      status: result.status,
    });
  } catch (error) {
    console.error("Phone verification request failed", {
      code: error?.code,
      status: error?.status,
    });

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

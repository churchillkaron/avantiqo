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
    const code =
      typeof body.code === "string"
        ? body.code.trim()
        : "";

    if (phoneNumber && !phoneNumber.startsWith("+")) {
      phoneNumber = `+${phoneNumber}`;
    }

    if (
      !phoneNumber ||
      !/^\+[1-9]\d{7,14}$/.test(phoneNumber) ||
      !/^\d{4,10}$/.test(code ?? "")
    ) {
      return Response.json(
        {
          success: false,
          message: "Valid phone number and verification code required",
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
        .verificationChecks.create({
          to: phoneNumber,
          code,
        });

    return Response.json({
      success:
        result.status === "approved",
      status: result.status,
    });
  } catch (error) {
    console.error("Phone verification check failed", {
      code: error?.code,
      status: error?.status,
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
}

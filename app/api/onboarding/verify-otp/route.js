import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export async function POST(request) {
  try {
    const body = await request.json();

    const result =
      await client.verify.v2
        .services(
          process.env.TWILIO_VERIFY_SERVICE_SID
        )
        .verificationChecks.create({
          to: body.phoneNumber,
          code: body.code,
        });

    return Response.json({
      success:
        result.status === "approved",
      status: result.status,
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

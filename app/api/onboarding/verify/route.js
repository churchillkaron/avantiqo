import { verifyCompany } from "@/lib/verification/verifyCompany";

export async function POST(request) {
  try {
    const body = await request.json();

    const result =
      await verifyCompany(body);

    return Response.json({
      success: true,
      verification: result,
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

import { getTenantContext } from "@/lib/platform/tenant/getTenantContext";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const tenantId = searchParams.get("tenantId");
    const userEmail = searchParams.get("userEmail");

    if (!tenantId || !userEmail) {
      return Response.json(
        {
          success: false,
          message: "tenantId and userEmail are required",
        },
        {
          status: 400,
        }
      );
    }

    const context = await getTenantContext({
      tenantId,
      userEmail,
    });

    return Response.json({
      success: true,
      context,
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

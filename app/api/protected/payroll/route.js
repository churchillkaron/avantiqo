import { moduleGuard }
from "@/lib/platform/security/moduleGuard";

export async function GET(request) {
  try {
    const { searchParams } =
      new URL(request.url);

    const tenantId =
      searchParams.get(
        "tenantId"
      );

    const userEmail =
      searchParams.get(
        "userEmail"
      );

    const context =
      await moduleGuard({
        tenantId,
        userEmail,
        moduleId:
          "payroll",
      });

    return Response.json({
      success: true,
      message:
        "Payroll access granted",
      context,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        message:
          error.message,
      },
      {
        status: 403,
      }
    );
  }
}

import { getPlatformModules } from "@/lib/platform/modules/moduleRegistry";

export async function GET() {
  try {
    const modules = await getPlatformModules();

    return Response.json({
      success: true,
      modules,
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

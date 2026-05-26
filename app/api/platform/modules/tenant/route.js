import {
  getTenantModules,
  enableTenantModule,
} from "@/lib/platform/modules/moduleRegistry";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const tenantId = searchParams.get("tenantId");

    if (!tenantId) {
      return Response.json(
        {
          success: false,
          message: "tenantId required",
        },
        {
          status: 400,
        }
      );
    }

    const modules = await getTenantModules(tenantId);

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

export async function POST(request) {
  try {
    const body = await request.json();

    if (!body.tenantId || !body.moduleId) {
      return Response.json(
        {
          success: false,
          message: "tenantId and moduleId required",
        },
        {
          status: 400,
        }
      );
    }

    const module = await enableTenantModule(
      body.tenantId,
      body.moduleId
    );

    return Response.json({
      success: true,
      module,
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

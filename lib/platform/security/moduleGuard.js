import {
  getTenantContext,
  tenantCanAccessModule,
} from "@/lib/platform/tenant/getTenantContext";

export async function moduleGuard({
  tenantId,
  userEmail,
  moduleId,
}) {
  const context =
    await getTenantContext({
      tenantId,
      userEmail,
    });

  const allowed =
    tenantCanAccessModule(
      context,
      moduleId
    );

  if (!allowed) {
    throw new Error(
      `Access denied to module: ${moduleId}`
    );
  }

  return context;
}

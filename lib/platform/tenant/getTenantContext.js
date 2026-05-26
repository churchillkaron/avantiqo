import { getSupabaseAdmin } from "@/lib/shared/supabase/admin";
import { getTenantModules } from "@/lib/platform/modules/moduleRegistry";
import { getPlatformConfig } from "@/lib/platform/core/getPlatformConfig";

export async function getTenantContext({
  tenantId,
  userEmail,
}) {
  const supabase = getSupabaseAdmin();

  if (!tenantId) {
    throw new Error("tenantId is required");
  }

  const {
    data: tenant,
    error: tenantError,
  } = await supabase
    .from("tenants")
    .select("*")
    .eq("id", tenantId)
    .single();

  if (tenantError || !tenant) {
    throw new Error("Tenant not found");
  }

  console.log("TENANT", tenant);
  console.log(
    "TENANT ERROR",
    tenantError
  );

  const {
    data: user,
    error: userError,
  } = await supabase
    .from("tenant_users")
    .select("*")
    .eq("tenant_id", tenantId)
    .eq("email", userEmail)
    .maybeSingle();

  if (userError) {
    throw new Error(userError.message);
  }

  console.log("USER", user);
  console.log(
    "USER ERROR",
    userError
  );

  let modules = [];

  try {
    modules =
      await getTenantModules(
        tenantId
      );

    console.log(
      "MODULES",
      modules
    );
  } catch (error) {
    console.log(
      "MODULE ERROR",
      error
    );
  }

  const moduleIds = modules.map(
    (item) => item.module_id
  );

  const platform =
    await getPlatformConfig(
      tenantId
    );

  return {
    tenant: {
      id: tenant.id,
      name: tenant.name,
      slug: tenant.slug,
      status: tenant.status,
      country_code:
        tenant.country_code,
      currency_code:
        tenant.currency_code,
      timezone:
        tenant.timezone,
    },

    user: user
      ? {
          id: user.id,
          email: user.email,
          full_name:
            user.full_name,
          role: user.role,
          status: user.status,
        }
      : null,

    platform,

    modules,
    moduleIds,

    access: {
      isActiveTenant:
        tenant.status ===
          "active" ||
        tenant.status ===
          "trial",

      isUserActive:
        user?.status ===
        "active",

      isOwner:
        user?.role ===
        "owner",

      isAdmin:
        user?.role ===
          "admin" ||
        user?.role ===
          "owner",
    },
  };
}

export function tenantCanAccessModule(
  context,
  moduleId
) {
  if (
    !context?.access
      ?.isActiveTenant
  ) {
    return false;
  }

  if (
    !context?.access
      ?.isUserActive
  ) {
    return false;
  }

  return context.moduleIds.includes(
    moduleId
  );
}
import { getSupabaseAdmin } from "@/lib/shared/supabase/admin";

export async function getPlatformModules() {
  const supabase = getSupabaseAdmin();

  const { data, error } = await supabase
    .from("platform_modules")
    .select("*")
    .eq("status", "active")
    .order("category", { ascending: true })
    .order("name", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data || [];
}

export async function getTenantModules(tenantId) {
  const supabase = getSupabaseAdmin();

  const { data, error } = await supabase
    .from("tenant_modules")
    .select("*, platform_modules(*)")
    .eq("tenant_id", tenantId)
    .eq("status", "active");

  if (error) {
    throw new Error(error.message);
  }

  return data || [];
}

export async function tenantHasModule(tenantId, moduleId) {
  const modules = await getTenantModules(tenantId);

  return modules.some((item) => item.module_id === moduleId);
}

export async function enableTenantModule(tenantId, moduleId) {
  const supabase = getSupabaseAdmin();

  const { data, error } = await supabase
    .from("tenant_modules")
    .upsert(
      {
        tenant_id: tenantId,
        module_id: moduleId,
        status: "active",
      },
      {
        onConflict: "tenant_id,module_id",
      }
    )
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

import { getSupabaseAdmin } from "@/lib/shared/supabase/admin";

export async function getPlatformConfig(
  tenantId
) {
  const supabase = getSupabaseAdmin();

  const { data, error } =
    await supabase
      .from("tenant_platform_config")
      .select("*")
      .eq("tenant_id", tenantId)
      .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  return (
    data || {
      rbac_enabled: true,
      audit_enabled: true,
      billing_enabled: true,
      notifications_enabled: true,
      localization_enabled: true,
      ai_enabled: true,
    }
  );
}

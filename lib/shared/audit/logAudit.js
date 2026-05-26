import { getSupabaseAdmin } from "@/lib/shared/supabase/admin";

export async function logAudit({
  tenantId,
  actorEmail,
  action,
  entityType,
  entityId,
  beforeData = null,
  afterData = null,
  metadata = {},
}) {
  const supabase = getSupabaseAdmin();

  await supabase.from("tenant_audit_logs").insert({
    tenant_id: tenantId,
    actor_email: actorEmail,
    action,
    entity_type: entityType,
    entity_id: entityId,
    before_data: beforeData,
    after_data: afterData,
    metadata,
  });
}

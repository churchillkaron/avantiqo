export const ROLES = {
  owner: [
    "*",
  ],
  admin: [
    "tenant.read",
    "tenant.update",
    "users.manage",
    "modules.manage",
    "billing.read",
    "audit.read",
  ],
  finance: [
    "finance.read",
    "finance.write",
    "billing.read",
    "audit.read",
  ],
  operations: [
    "operations.read",
    "operations.write",
  ],
  hr: [
    "hr.read",
    "hr.write",
    "payroll.read",
  ],
  marketing: [
    "marketing.read",
    "marketing.write",
  ],
  auditor: [
    "audit.read",
    "tenant.read",
    "finance.read",
  ],
  readonly: [
    "tenant.read",
  ],
};

export function hasPermission(role, permission) {
  const permissions = ROLES[role] || [];

  return permissions.includes("*") || permissions.includes(permission);
}

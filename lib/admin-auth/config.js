export const ADMIN_ROLES = [
  "super_admin",
  "admin",
  "support",
  "finance",
  "sales",
];

export const ADMIN_ROUTE_PERMISSIONS = {
  "/admin/dashboard": [
    "super_admin",
    "admin",
  ],

  "/admin/leads": [
    "super_admin",
    "admin",
    "sales",
  ],

  "/admin/billing": [
    "super_admin",
    "finance",
  ],

  "/admin/tenants": [
    "super_admin",
    "admin",
    "support",
  ],

  "/admin/users": [
    "super_admin",
    "admin",
  ],

  "/admin/modules": [
    "super_admin",
    "admin",
  ],

  "/admin/audit": [
    "super_admin",
  ],
};

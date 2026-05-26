import { NextResponse } from "next/server";

const permissions = {
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

export function proxy(request) {
  const pathname =
    request.nextUrl.pathname;

  if (
    pathname === "/login"
  ) {
    return NextResponse.next();
  }

  if (
    !pathname.startsWith("/admin")
  ) {
    return NextResponse.next();
  }

  const role =
    request.cookies.get(
      "admin_role"
    )?.value;

  if (!role) {
    return NextResponse.redirect(
      new URL(
        "/login",
        request.url
      )
    );
  }

  const allowedRoles =
    permissions[pathname];

  if (
    allowedRoles &&
    !allowedRoles.includes(role)
  ) {
    return NextResponse.redirect(
      new URL(
        "/admin/unauthorized",
        request.url
      )
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/login",
  ],
};

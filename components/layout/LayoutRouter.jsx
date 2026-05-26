"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";

export default function LayoutRouter({
  children,
}) {
  const pathname =
    usePathname();

  const isWorkspace =
    pathname.startsWith(
      "/workspace"
    );

  const isAdmin =
    pathname.startsWith(
      "/admin"
    );

  if (
    isWorkspace ||
    isAdmin
  ) {
    return children;
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

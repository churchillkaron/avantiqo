"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    label: "Dashboard",
    href: "/admin/dashboard",
  },
  {
    label: "Leads",
    href: "/admin/leads",
  },
  {
    label: "Billing",
    href: "/admin/billing",
  },
  {
    label: "Tenants",
    href: "/admin/tenants",
  },
  {
    label: "Users",
    href: "/admin/users",
  },
  {
    label: "Modules",
    href: "/admin/modules",
  },
  {
    label: "Audit",
    href: "/admin/audit",
  },
];

export default function PlatformSidebar() {
  const pathname =
    usePathname();

  return (
    <aside className="fixed left-6 top-20 bottom-6 flex w-[260px] flex-col rounded-r-3xl border border-white/[0.05] bg-black/40 px-6 py-8 backdrop-blur-lg">

      <div className="mb-10">

        <div className="text-2xl font-bold">
          Avantiqo Admin
        </div>

        <div className="mt-2 text-[15px] text-zinc-500">
          SaaS Operations
        </div>

      </div>

      <div className="flex flex-1 flex-col gap-2">

        {items.map((item) => {
          const active =
            pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-2xl px-4 py-3 transition ${
                active
                  ? "bg-gradient-to-r from-[#d7b66a] to-[#7c3aed] font-semibold text-black"
                  : "text-zinc-300 hover:bg-white/5"
              }`}
            >
              {item.label}
            </Link>
          );
        })}

      </div>

    </aside>
  );
}

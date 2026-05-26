"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const sections = [
  {
    title: "COMMAND",
    items: [
      {
        label: "Dashboard",
        href: "/workspace/dashboard",
      },
      {
        label: "AI Intelligence",
        href: "/workspace/ai",
      },
      {
        label: "Analytics",
        href: "/workspace/analytics",
      },
    ],
  },

  {
  title: "OPERATIONS",
  items: [
    {
      label: "POS",
      href: "/workspace/pos",
    },
    {
      label: "Reservations",
      href: "/workspace/reservations",
    },
    {
      label: "Operations",
      href: "/workspace/operations",
    },
    {
      label: "Inventory",
      href: "/workspace/inventory",
    },
    {
      label: "Production",
      href: "/workspace/production",
    },
    {
      label: "Procurement",
      href: "/workspace/procurement",
    },
  ],
},

  {
    title: "FINANCE",
    items: [
      {
        label: "Finance",
        href: "/workspace/finance",
      },
      {
        label: "Accounting",
        href: "/workspace/accounting",
      },
      {
        label: "Payroll",
        href: "/workspace/payroll",
      },
    ],
  },

  {
    title: "PEOPLE",
    items: [
      {
        label: "HR",
        href: "/workspace/hr",
      },
      {
        label: "Projects",
        href: "/workspace/projects",
      },
    ],
  },

  {
    title: "CUSTOMER",
    items: [
      {
        label: "CRM",
        href: "/workspace/crm",
      },
      {
        label: "Customers",
        href: "/workspace/customers",
      },
      {
        label: "Marketing",
        href: "/workspace/marketing",
      },
    ],
  },

  {
    title: "CREATIVE",
    items: [
      {
        label: "Design Studio",
        href: "/workspace/studio",
      },
      {
        label: "Documents",
        href: "/workspace/documents",
      },
    ],
  },

  {
    title: "SYSTEM",
    items: [
      {
        label: "Settings",
        href: "/workspace/settings",
      },
    ],
  },
];

export default function WorkspaceSidebar() {
  const pathname =
    usePathname();

  return (
    <aside className="fixed left-6 top-20 bottom-6 z-40 w-[300px] overflow-hidden rounded-[36px] border border-white/10 bg-black/40 backdrop-blur-3xl">

      <div className="h-full overflow-y-auto p-5">

        <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">

          <div className="mb-12">

            <div className="text-xs tracking-[0.35em] text-[#B58AF8]">
              ENTERPRISE
            </div>

            <div
              className="mt-4 text-3xl"
              style={{
                fontWeight: 250,
                letterSpacing: "-0.05em",
              }}
            >
              Workspace
            </div>

          </div>

          <div className="space-y-8">

            {sections.map((section) => (
              <div key={section.title}>

                <div className="mb-3 px-3 text-[11px] tracking-[0.3em] text-white/30">
                  {section.title}
                </div>

                <div className="flex flex-col gap-2">

                  {section.items.map(
                    (item) => {
                      const active =
                        pathname ===
                        item.href;

                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`rounded-2xl px-5 py-4 transition duration-300 ${
                            active
                              ? "bg-gradient-to-r from-[#D6A66A] to-[#8B5CF6] text-white shadow-[0_0_50px_rgba(139,92,246,0.35)]"
                              : "text-white/60 hover:bg-white/[0.04] hover:text-white"
                          }`}
                        >
                          {item.label}
                        </Link>
                      );
                    }
                  )}

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </aside>
  );
}

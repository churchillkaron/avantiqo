"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/app/providers/I18nProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const sections = [
  {
    title: "navigation.dashboard",
    href: "/workspace",
  },
  {
    title: "navigation.operations",
    href: "/workspace/operations",
  },
  {
    title: "navigation.pos",
    href: "/workspace/pos",
  },
  {
    title: "navigation.kitchen",
    href: "/workspace/kitchen",
  },
  {
    title: "navigation.expo",
    href: "/workspace/expo",
  },
  {
    title: "navigation.reservations",
    href: "/workspace/reservations",
  },
  {
    title: "navigation.inventory",
    href: "/workspace/inventory",
  },
  {
    title: "navigation.dishStock",
    href: "/workspace/dish-stock",
  },
  {
    title: "navigation.ingredientStock",
    href: "/workspace/ingredient-stock",
  },
  {
    title: "navigation.production",
    href: "/workspace/production",
  },
  {
    title: "navigation.procurement",
    href: "/workspace/procurement",
  },
  {
    title: "navigation.finance",
    href: "/workspace/finance",
  },
  {
    title: "navigation.accounting",
    href: "/workspace/accounting",
  },
  {
    title: "navigation.payroll",
    href: "/workspace/payroll",
  },
  {
    title: "navigation.hr",
    href: "/workspace/hr",
  },
  {
    title: "navigation.projects",
    href: "/workspace/projects",
  },
  {
    title: "navigation.crm",
    href: "/workspace/crm",
  },
  {
    title: "navigation.customers",
    href: "/workspace/customers",
  },
  {
    title: "navigation.marketing",
    href: "/workspace/marketing",
  },
  {
    title: "navigation.designStudio",
    href: "/workspace/design-studio",
  },
  {
    title: "navigation.documents",
    href: "/workspace/documents",
  },
  {
    title: "navigation.settings",
    href: "/workspace/settings",
  },
];

export default function WorkspaceSidebar() {
  const pathname = usePathname();
  const { t } = useTranslation();

  return (
    <>

      {/* DESKTOP */}

      <aside className="hidden xl:flex fixed left-0 top-0 z-40 h-screen w-[280px] flex-col border-r border-white/[0.06] bg-[#050816]/90 p-6 backdrop-blur-3xl">

        <div>

          <div className="text-3xl font-extralight tracking-[-0.06em] text-white">
            Vortiqa
          </div>

          <div className="mt-2 text-sm text-white/40">
            Enterprise AI Runtime
          </div>

        </div>

        <div className="mt-8">
          <LanguageSwitcher />
        </div>

        <nav className="mt-8 flex-1 space-y-2 overflow-y-auto pr-2">

          {sections.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center rounded-2xl px-4 py-3 text-sm transition ${
                  active
                    ? "bg-purple-500/20 text-purple-300"
                    : "text-white/60 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                {item.title.includes(".")
                  ? t(item.title)
                  : item.title}
              </Link>
            );
          })}

        </nav>

      </aside>

      {/* MOBILE TOPBAR */}

      <div className="xl:hidden fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] bg-[#050816]/90 backdrop-blur-3xl">

        <div className="flex items-center justify-between px-4 py-4">

          <div>

            <div className="text-2xl font-extralight tracking-[-0.06em] text-white">
              Vortiqa
            </div>

            <div className="text-[11px] text-white/40">
              Enterprise Runtime
            </div>

          </div>

          <LanguageSwitcher />

        </div>

        <div className="overflow-x-auto border-t border-white/[0.05]">

          <div className="flex min-w-max gap-2 px-4 py-3">

            {sections.slice(0, 10).map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-sm transition ${
                    active
                      ? "bg-purple-500/20 text-purple-300"
                      : "bg-white/[0.05] text-white/60"
                  }`}
                >
                  {item.title.includes(".")
                    ? t(item.title)
                    : item.title}
                </Link>
              );
            })}

          </div>

        </div>

      </div>

    </>
  );
}

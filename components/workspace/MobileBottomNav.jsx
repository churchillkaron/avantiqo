"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BellRing,
  ChefHat,
  House,
  MonitorCog,
  Smartphone,
} from "lucide-react";

const items = [
  {
    label: "Home",
    href: "/workspace",
    icon: House,
  },
  {
    label: "Waiter",
    href: "/workspace/waiter",
    icon: Smartphone,
  },
  {
    label: "Kitchen",
    href: "/workspace/kitchen",
    icon: ChefHat,
  },
  {
    label: "Expo",
    href: "/workspace/expo",
    icon: BellRing,
  },
  {
    label: "POS",
    href: "/workspace/pos",
    icon: MonitorCog,
  },
];

export default function MobileBottomNav() {

  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/[0.06] bg-black/90 backdrop-blur-xl xl:hidden">

      <div className="grid grid-cols-5">

        {items.map((item) => {

          const active =
            pathname === item.href;

          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`flex min-h-16 flex-col items-center justify-center gap-1.5 py-2 text-[11px] transition ${
                active
                  ? "text-[#D6A66A]"
                  : "text-white/60"
              }`}
            >
              <Icon aria-hidden="true" size={19} strokeWidth={1.7} />
              {item.label}
            </Link>
          );
        })}

      </div>

    </div>
  );
}

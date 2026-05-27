"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    label: "Home",
    href: "/workspace",
  },
  {
    label: "POS",
    href: "/workspace/pos",
  },
  {
    label: "Kitchen",
    href: "/workspace/kitchen",
  },
  {
    label: "Expo",
    href: "/workspace/expo",
  },
  {
    label: "Finance",
    href: "/workspace/finance",
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

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center py-3 text-xs transition ${
                active
                  ? "text-white"
                  : "text-white/40"
              }`}
            >
              {item.label}
            </Link>
          );
        })}

      </div>

    </div>
  );
}

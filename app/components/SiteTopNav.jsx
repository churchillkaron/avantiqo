import Link from "next/link";
import { useTranslation } from "@/app/providers/I18nProvider";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";

export default function SiteTopNav() {
  const { t } = useTranslation();

  const navItems = [
    {
      label: "Synthetic Intelligence",
      href: "/what-is-synthetic-intelligence",
    },
    {
      label: "Accounting Firms",
      href: "/industries/accounting-firms",
    },
    {
      label: t("topnav.industries"),
      href: "/industries",
    },
    {
      label: t("topnav.modules"),
      href: "/modules",
    },
    {
      label: t("topnav.workspace"),
      href: "/workspace/dashboard",
    },
    {
      label: "Demo",
      href: "/demo",
    },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.05] bg-black/40 backdrop-blur-2xl">
      <div className="mx-auto flex h-[88px] max-w-[1600px] items-center justify-between px-6 md:px-10">

        <Link href="/" className="flex items-center gap-5">

          <img
            src="/avantiqo-logo.png"
            alt="Avantiqo"
            className="h-12 w-auto"
          />

          <div className="flex flex-col justify-center">
            <div className="text-[11px] font-medium tracking-[0.52em] text-[#D6A66A]/90 uppercase">
              Synthetic Intelligence Operating System
            </div>
          </div>

        </Link>

        <nav className="hidden items-center gap-8 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">

          <LanguageSwitcher />

          <Link
            href="/login"
            className="rounded-2xl border border-white/[0.08] bg-white/[0.04] px-5 py-3 text-sm text-white transition hover:bg-white/[0.08]"
          >
            {t("topnav.signIn")}
          </Link>

          <Link
            href="/start"
            className="rounded-2xl bg-gradient-to-r from-[#f7e7b0] via-[#d7b66a] to-[#9d6b2f] px-5 py-3 text-sm font-bold text-black"
          >
            {t("topnav.startSetup")}
          </Link>

        </div>

      </div>
    </header>
  );
}

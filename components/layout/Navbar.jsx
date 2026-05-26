"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { useTranslation } from "@/lib/i18n/useTranslation";
import { supabase } from "@/lib/supabase";

const locales = [
  { code: "en", label: "EN" },
  { code: "th", label: "TH" },
  { code: "ru", label: "RU" },
  { code: "zh", label: "中文" },
];

export default function Navbar() {

  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const {
    locale,
    setLocale,
    t,
  } = useTranslation();

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  useEffect(() => {

    async function loadUser() {

      try {

        const {
          data: { user },
        } = await supabase.auth.getUser();

        setUser(user);

      } catch (err) {
        console.error(err);
      }

    }

    loadUser();

  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-black/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <Link
          href="/"
          className="flex items-center gap-5"
        >

          <Image
            src="/avantiqo-logo.png"
            alt="Avantiqo"
            width={120}
            height={120}
            priority
            className="h-[72px] w-auto object-contain"
          />

          <span className="text-xl font-light tracking-[0.28em] text-white">
            AVANTIQO
          </span>

        </Link>

        <nav className="hidden items-center gap-10 lg:flex">

          <Link
            href="/platform"
            className={`text-sm transition ${
              pathname === "/platform"
                ? "text-white"
                : "text-white/70 hover:text-white"
            }`}
          >
            {t.platform}
          </Link>

          <Link
            href="/industries"
            className={`text-sm transition ${
              pathname === "/industries"
                ? "text-white"
                : "text-white/70 hover:text-white"
            }`}
          >
            {t.industries}
          </Link>

          <Link
            href="/ai"
            className={`text-sm transition ${
              pathname === "/ai"
                ? "text-white"
                : "text-white/70 hover:text-white"
            }`}
          >
            {t.aiRuntime}
          </Link>

          <Link
            href="/demo"
            className={`text-sm transition ${
              pathname === "/demo"
                ? "text-white"
                : "text-white/70 hover:text-white"
            }`}
          >
            {t.demo}
          </Link>

        </nav>

        <div className="flex items-center gap-6">

          <div className="hidden items-center gap-3 lg:flex">

            {locales.map((item) => (

              <button
                key={item.code}
                onClick={() => setLocale(item.code)}
                className={`text-sm transition ${
                  locale === item.code
                    ? "text-[#D6A66A]"
                    : "text-white/40 hover:text-white"
                }`}
              >
                {item.label}
              </button>

            ))}

          </div>

          {user ? (
            <Link
              href="/workspace"
              className="rounded-[14px] border border-white/10 bg-white/[0.05] px-5 py-2 text-sm text-white/80"
            >
              {t.workspace}
            </Link>
          ) : (
            <Link
              href="/login"
              className="rounded-[14px] border border-white/10 bg-white/[0.05] px-5 py-2 text-sm text-white/80"
            >
              {t.login}
            </Link>
          )}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
          >
            ☰
          </button>

          <Link
            href="/demo"
            className="hidden rounded-[14px] bg-gradient-to-r from-[#D6A66A] to-[#8B5CF6] px-5 py-2 text-sm font-medium text-white lg:flex"
          >
            {t.bookDemo}
          </Link>

        </div>

      </div>
    
      {mobileOpen && (
        <div className="border-t border-white/10 bg-black/95 px-6 py-8 lg:hidden">
          <div className="flex flex-col gap-6 text-lg">

            <Link href="/platform" onClick={() => setMobileOpen(false)}>
              {t.platform}
            </Link>

            <Link href="/industries" onClick={() => setMobileOpen(false)}>
              {t.industries}
            </Link>

            <Link href="/ai" onClick={() => setMobileOpen(false)}>
              {t.aiRuntime}
            </Link>

            <Link href="/demo" onClick={() => setMobileOpen(false)}>
              {t.demo}
            </Link>

            <div className="mt-4 flex gap-4">
              {locales.map((item) => (
                <button
                  key={item.code}
                  onClick={() => {
                    setLocale(item.code);
                    setMobileOpen(false);
                  }}
                  className={`text-sm ${
                    locale === item.code
                      ? "text-[#D6A66A]"
                      : "text-white/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

          </div>
        </div>
      )}

</header>
  );
}

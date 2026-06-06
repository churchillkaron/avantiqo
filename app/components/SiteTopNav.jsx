"use client";

import { useState } from "react";
import Link from "next/link";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";

export default function SiteTopNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.05] bg-black/60 backdrop-blur-2xl">

      <div className="mx-auto flex h-[84px] max-w-[1600px] items-center justify-between px-4 md:px-10">

        <Link href="/" className="flex items-center gap-4">

          <img
            src="/avantiqo-logo.png"
            alt="Avantiqo"
            className="h-10 w-auto"
          />

          <div className="hidden md:flex flex-col justify-center">

            <div className="text-[11px] font-medium tracking-[0.52em] text-[#D6A66A]/90 uppercase">
              Enterprise AI Operating System
            </div>

            <div className="mt-2 h-[1px] w-44 bg-gradient-to-r from-[#D6A66A] via-white/40 to-transparent" />

          </div>

        </Link>

        <nav className="hidden xl:flex items-center gap-10">

          <Link href="/what-is-synthetic-intelligence" className="text-[14px] text-zinc-400 hover:text-white">
            Platform
          </Link>

          <Link href="/industries" className="text-[14px] text-zinc-400 hover:text-white">
            Industries
          </Link>

          <Link href="/what-is-synthetic-intelligence" className="text-[14px] text-zinc-400 hover:text-white">
            AI Runtime
          </Link>

          <Link href="/security" className="text-[14px] text-zinc-400 hover:text-white">
            Security
          </Link>

        </nav>

        <div className="hidden md:flex items-center gap-3">

          <LanguageSwitcher />

          <Link
            href="/login"
            className="rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 py-3 text-sm text-white"
          >
            Login
          </Link>

          <Link
            href="/start"
            className="rounded-2xl bg-gradient-to-r from-[#f7e7b0] via-[#d7b66a] to-[#9d6b2f] px-6 py-3 text-sm font-bold tracking-[0.08em] text-black"
          >
            START SETUP
          </Link>

        </div>

        <button
          onClick={() => setOpen(!open)}
          className="xl:hidden text-[#D6A66A] text-3xl"
        >
          ☰
        </button>

      </div>

      {open && (
        <div className="xl:hidden border-t border-white/10 bg-black/95 backdrop-blur-2xl">

          <div className="flex flex-col p-6 space-y-5">

            <Link href="/what-is-synthetic-intelligence">Platform</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/security">Security</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/governance">Governance</Link>
            <Link href="/compliance">Compliance</Link>
            <Link href="/gdpr">GDPR</Link>

            <div className="pt-2">
              <LanguageSwitcher />
            </div>

            <Link href="/login">Login</Link>
            <Link href="/start">Start Setup</Link>

          </div>

        </div>
      )}

    </header>
  );
}

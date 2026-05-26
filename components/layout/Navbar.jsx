"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);

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

        const supabase = createClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL,
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
        );

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

          <Link href="/platform" className="text-sm text-white/70 hover:text-white">
            Platform
          </Link>

          <Link href="/industries" className="text-sm text-white/70 hover:text-white">
            Industries
          </Link>

          <Link href="/ai" className="text-sm text-white/70 hover:text-white">
            AI Runtime
          </Link>

          <Link href="/localization" className="text-sm text-white/70 hover:text-white">
            Localization
          </Link>

          <Link href="/demo" className="text-sm text-white/70 hover:text-white">
            Demo
          </Link>

        </nav>

        <div className="flex items-center gap-4">

          {user ? (
            <Link
              href="/workspace"
              className="rounded-[14px] border border-white/10 bg-white/[0.05] px-5 py-2 text-sm text-white/80"
            >
              Workspace
            </Link>
          ) : (
            <Link
              href="/login"
              className="rounded-[14px] border border-white/10 bg-white/[0.05] px-5 py-2 text-sm text-white/80"
            >
              Login
            </Link>
          )}

          <Link
            href="/demo"
            className="rounded-[14px] bg-gradient-to-r from-[#D6A66A] to-[#8B5CF6] px-5 py-2 text-sm font-medium text-white"
          >
            Book Demo
          </Link>

        </div>

      </div>
    </header>
  );
}

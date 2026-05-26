"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useState,
} from "react";

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Navbar() {
  const [scrolled, setScrolled] =
    useState(false);

  const [user, setUser] =
    useState(null);

  const [profile, setProfile] =
    useState(null);

  const pathname =
    usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(
        window.scrollY > 40
      );
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  useEffect(() => {
    loadUser();
  }, []);

  async function loadUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    setUser(user);

    const {
      data: profileData,
    } = await supabase
      .from("tenant_users")
      .select("*")
      .eq(
        "auth_user_id",
        user.id
      )
      .single();

    setProfile(profileData);
  }

  async function logout() {
    await supabase.auth.signOut();

    window.location.href = "/";
  }

  function getDashboardLink() {
    if (!profile)
      return "/platform";

    if (
      profile.role ===
        "super_admin" ||
      profile.role ===
        "admin"
    ) {
      return "/admin/dashboard";
    }

    if (
      profile.role ===
      "finance"
    ) {
      return "/admin/billing";
    }

    if (
      profile.role ===
      "support"
    ) {
      return "/admin/tenants";
    }

    return "/platform";
  }

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[#02030A]/70 backdrop-blur-3xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link
          href="/"
          className="relative flex items-center"
        >
          <img
            src="/brand/avantiqo-logo1.png"
            alt="Avantiqo"
            className="h-[42px] w-auto object-contain md:h-[70px]"
          />
        </Link>

        <div className="hidden items-center gap-10 lg:flex">

          <Link href="/">
            Home
          </Link>

          <Link href="/platform">
            Architecture
          </Link>

          <Link href="/ai">
            AI
          </Link>

          <Link href="/enterprise">
            Enterprise
          </Link>

          <Link href="/industries">
            Industries
          </Link>

          <Link href="/demo">
            Demo
          </Link>

          <Link href="/contact">
            Contact
          </Link>

        </div>

        <div className="flex items-center gap-3">

          {!user ? (
            <>
              <Link
                href="/login"
                className="hidden rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-2 text-sm text-white/60 backdrop-blur-xl transition duration-300 hover:border-[#8B5CF6]/30 hover:bg-[#8B5CF6]/10 hover:text-white md:block"
              >
                Login
              </Link>

              <Link
                href="/start"
                className="rounded-2xl bg-gradient-to-r from-[#D6A66A] via-[#B98B57] to-[#8B5CF6] px-5 py-2 text-sm font-medium text-white shadow-[0_0_60px_rgba(168,85,247,.22)] transition duration-300 hover:scale-[1.02]"
              >
                Start Setup
              </Link>
            </>
          ) : (
            <>
              <div className="hidden rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-2 text-sm text-white/80 backdrop-blur-xl md:block">
                {profile?.full_name ||
                  user.email}
              </div>

              <Link
                href={getDashboardLink()}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-2 text-sm text-white backdrop-blur-xl transition duration-300 hover:border-[#8B5CF6]/30 hover:bg-[#8B5CF6]/10"
              >
                Dashboard
              </Link>

              <button
                onClick={logout}
                className="rounded-2xl bg-gradient-to-r from-[#D6A66A] via-[#B98B57] to-[#8B5CF6] px-5 py-2 text-sm font-medium text-white shadow-[0_0_60px_rgba(168,85,247,.22)] transition duration-300 hover:scale-[1.02]"
              >
                Logout
              </button>
            </>
          )}

        </div>

      </div>
    </header>
  );
}

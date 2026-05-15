"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[#02030A]/70 backdrop-blur-3xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* LOGO */}
        <a
          href="#studio"
          className="relative flex items-center"
        >
          <img
            src="/brand/avantiqo-logo1.png"
            alt="Avantiqo"
            className="h-[42px] w-auto object-contain md:h-[70px]"
          />
        </a>

        {/* NAVIGATION */}
        <div className="hidden items-center gap-10 lg:flex">

          <a
            href="#platform"
            className="text-sm tracking-wide text-white/55 transition duration-300 hover:text-white"
          >
            Platform
          </a>

          <a
            href="#studio"
            className="text-sm tracking-wide text-white/55 transition duration-300 hover:text-white"
          >
            AI Studio
          </a>

          <a
            href="#enterprise"
            className="text-sm tracking-wide text-white/55 transition duration-300 hover:text-white"
          >
            Enterprise
          </a>

          <a
            href="#infrastructure"
            className="text-sm tracking-wide text-white/55 transition duration-300 hover:text-white"
          >
            Infrastructure
          </a>

          <a
            href="#contact"
            className="text-sm tracking-wide text-white/55 transition duration-300 hover:text-white"
          >
            Contact
          </a>

        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">

          <button className="hidden rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-2 text-sm text-white/60 backdrop-blur-xl transition duration-300 hover:border-[#8B5CF6]/30 hover:bg-[#8B5CF6]/10 hover:text-white md:block">
            Login
          </button>

          <button className="rounded-2xl bg-gradient-to-r from-[#D6A66A] via-[#B98B57] to-[#8B5CF6] px-5 py-2 text-sm font-medium text-white shadow-[0_0_60px_rgba(168,85,247,.22)] transition duration-300 hover:scale-[1.02]">
            Book Demo
          </button>

        </div>

      </div>
    </header>
  );
}
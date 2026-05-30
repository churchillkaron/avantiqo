"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#02030A] px-6 pt-24 pb-14">

      {/* TOP LIGHT LINE */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8B5CF6]/30 to-transparent" />

      {/* LIGHTS */}
      <div className="absolute left-[-10%] top-[-20%] h-[500px] w-[500px] rounded-full bg-[#8B5CF6]/10 blur-[140px]" />

      <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#D6A66A]/10 blur-[160px]" />

      {/* NOISE */}
      <div className="absolute inset-0 opacity-[0.03]" />

      <div className="relative mx-auto max-w-7xl">

        {/* TOP */}
        <div className="grid items-start gap-20 border-b border-white/[0.08] pb-20 md:grid-cols-2 xl:grid-cols-4">

          {/* BRAND */}
          <div>

            <Image
  src="/brand/avantiqo-logo1.png"
  alt="Avantiqo"
  width={300}
  height={100}
  className="h-auto w-[180px] object-contain"
/>

            

          </div>

          {/* PLATFORM */}
          <div>

            <p className="mb-6 text-xs tracking-[0.28em] text-[#B58AF8]">
              PLATFORM
            </p>

            <div className="grid gap-5 text-[15px]">

              <a
                href="/what-is-synthetic-intelligence"
                className="text-white/45 transition duration-300 hover:text-white"
              >
                Platform
              </a>

              <a
                href="/what-is-synthetic-intelligence"
                className="text-white/45 transition duration-300 hover:text-white"
              >
                AI Infrastructure
              </a>

              <a
                href="/what-is-synthetic-intelligence"
                className="text-white/45 transition duration-300 hover:text-white"
              >
                Enterprise
              </a>

              <a
                href="/demo"
                className="text-white/45 transition duration-300 hover:text-white"
              >
                Demo
              </a>

            </div>

          </div>

          {/* COMPLIANCE */}
          <div>

            <p className="mb-6 text-xs tracking-[0.28em] text-[#B58AF8]">
              COMPLIANCE
            </p>

            <div className="grid gap-5 text-[15px]">

              <a
                href="/security"
                className="text-white/45 transition duration-300 hover:text-white"
              >
                Enterprise Security
              </a>

              <a
                href="/privacy"
                className="text-white/45 transition duration-300 hover:text-white"
              >
                Privacy Policy
              </a>

              <a
                href="/gdpr"
                className="text-white/45 transition duration-300 hover:text-white"
              >
                GDPR Compliance
              </a>

              <a
                href="/governance"
                className="text-white/45 transition duration-300 hover:text-white"
              >
                Governance
              </a>

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <p className="mb-6 text-xs tracking-[0.28em] text-[#B58AF8]">
              CONTACT
            </p>

            <div className="grid gap-5 text-[15px]">

              <a
                href="mailto:hello@avantiqo.ai"
                className="text-white/45 transition duration-300 hover:text-white"
              >
                hello@avantiqo.ai
              </a>

              <a
                href="/contact"
                className="text-white/45 transition duration-300 hover:text-white"
              >
                Enterprise Consultation
              </a>

              <a
                href="/terms"
                className="text-white/45 transition duration-300 hover:text-white"
              >
                Terms & Conditions
              </a>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="pt-10">

          <div className="flex flex-col items-center justify-between gap-6 md:gap-8 text-[15px] text-white/30 md:flex-row">

            <p>
              © 2026 Avantiqo. All rights reserved.
            </p>

            <div className="flex items-center gap-6 md:gap-8">

              <a
                href="/privacy"
                className="transition duration-300 hover:text-white/65"
              >
                Privacy
              </a>

              <a
                href="/terms"
                className="transition duration-300 hover:text-white/65"
              >
                Terms
              </a>

              <a
                href="/security"
                className="transition duration-300 hover:text-white/65"
              >
                Security
              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}
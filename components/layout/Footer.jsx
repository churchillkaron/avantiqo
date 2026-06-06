"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#02030A]">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3A2410_0%,#0B0912_35%,#02030A_100%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-6">

        <div className="mb-4">

          <div className="grid gap-6 xl:grid-cols-[0.9fr_1fr_1fr_1fr]">

            <div>

              <Image
                src="/brand/avantiqo-logo1.png"
                alt="Avantiqo"
                width={320}
                height={120}
                className="h-auto w-[180px] object-contain"
              />

              <div className="mt-8 h-px w-32 bg-gradient-to-r from-[#D6A66A] to-transparent" />

              <p className="mt-2 max-w-[260px] text-[14px] leading-5 text-white/55">
                Avantiqo combines Artificial Intelligence and
                Synthetic Intelligence to create organizations
                that understand themselves.
              </p>

              <div className="mt-8 text-sm uppercase tracking-[0.4em] text-[#D6A66A]">
                Enterprise Intelligence Platform
              </div>

            </div>

            <div>

              <div className="mb-8 text-xs uppercase tracking-[0.35em] text-[#D6A66A]">
                Platform
              </div>

              <div className="grid gap-5 text-white/50">

                <a href="/what-is-synthetic-intelligence" className="hover:text-white">
                  Synthetic Intelligence
                </a>

                <a href="/security" className="hover:text-white">
                  Enterprise Security
                </a>

                <a href="/industries" className="hover:text-white">
                  Industries
                </a>

                <a href="/demo" className="hover:text-white">
                  Request Demo
                </a>

              </div>

            </div>

            <div>

              <div className="mb-8 text-xs uppercase tracking-[0.35em] text-[#D6A66A]">
                Industries
              </div>

              <div className="grid gap-5 text-white/50">

                <a href="/industries/accounting-firms" className="hover:text-white">
                  Accounting Firms
                </a>

                <a href="/industries/healthcare" className="hover:text-white">
                  Healthcare
                </a>

                <a href="/industries/hospitality" className="hover:text-white">
                  Hospitality
                </a>

                <a href="/industries/construction" className="hover:text-white">
                  Construction
                </a>

                <a href="/industries/retail-commerce" className="hover:text-white">
                  Retail & Commerce
                </a>

              </div>

            </div>

            <div>

              <div className="mb-8 text-xs uppercase tracking-[0.35em] text-[#D6A66A]">
                Trust
              </div>

              <div className="grid gap-5 text-white/50">

                <a href="/security" className="hover:text-white">
                  Security
                </a>

                <a href="/privacy" className="hover:text-white">
                  Privacy
                </a>

                <a href="/governance" className="hover:text-white">
                  Governance
                </a>

                <a href="/gdpr" className="hover:text-white">
                  Compliance
                </a>

                <a href="mailto:hello@avantiqo.ai" className="hover:text-white">
                  hello@avantiqo.ai
                </a>

              </div>

            </div>

          </div>

        </div>

        <div className="mt-4 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-4 text-sm text-white/35 md:flex-row">

          <div>
            © 2026 Avantiqo. All rights reserved.
          </div>

          <div className="uppercase tracking-[0.25em] text-[#D6A66A]/70">
            Built For Controlled Growth
          </div>

        </div>

      </div>

    </footer>
  );
}

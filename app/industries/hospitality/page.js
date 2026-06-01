"use client";

import Link from "next/link";
import Image from "next/image";
import SiteTopNav from "@/app/components/SiteTopNav";
import Footer from "@/components/layout/Footer";
import { useTranslation } from "@/app/providers/I18nProvider";

export default function HospitalityPage() {
  const { translations } = useTranslation();

  const h = translations.home.hospitality;

  return (
    <>
      <SiteTopNav />

      <main className="min-h-screen overflow-hidden bg-[#02030A] text-white">

      
      <section className="relative min-h-[90vh] overflow-hidden">

        <div className="absolute inset-0">
          <Image
            src="/images/hospitality-hero.png"
            alt="Hospitality Operating System"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#030817]/20 via-[#030817]/50 to-[#030817]" />

        <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-32">

          <div className="mb-8 inline-flex rounded-full border border-[#d4af37]/20 bg-[#d4af37]/10 px-5 py-2 text-xs tracking-[0.35em] uppercase text-[#d4af37]">
            {h.hero.badge}
          </div>

          <h1 className="max-w-6xl text-6xl font-extralight leading-[0.95] md:text-8xl">
            {h.hero.title1}
            <br />
            <span className="bg-gradient-to-r from-[#D6A66A] via-[#E7C38A] to-[#14364D] bg-clip-text text-transparent">
              {h.hero.title2}
            </span>
          </h1>

          <p className="mt-10 max-w-3xl text-xl text-white/75">
            {h.hero.description}
          </p>

          <div className="mt-12 flex flex-wrap gap-4">

            <button className="rounded-2xl bg-[#d4af37] px-8 py-4 font-medium text-black">
              {h.hero.primary}
            </button>

            <button className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl">
              {h.hero.secondary}
            </button>

          </div>

        </div>

      </section>


      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-4 text-xs tracking-[0.3em] uppercase text-[#D6A66A]">
          {h.reality.badge}
        </div>

        <h2 className="text-5xl font-extralight leading-[1.02] tracking-[-0.05em] md:text-7xl font-extralight">
          {h.reality.title1}
          <br />
          <span className="text-white/50">
            {h.reality.title2}
          </span>
        </h2>

        
        <div className="mt-12 rounded-[42px] border border-white/[0.05] bg-[#050714] p-10">

          <div className="grid gap-6 md:grid-cols-5">

            {h.reality.flow.slice(0,5).map((item) => (
              <div
                key={item}
                className="rounded-[28px] border border-white/[0.06] bg-white/[0.02] p-6 text-center"
              >
                <div className="text-xs tracking-[0.3em] uppercase text-[#D6A66A]">
                  {item}
                </div>
              </div>
            ))}

          </div>

          <div className="py-10 text-center text-5xl text-[#D6A66A]">
            ↓
          </div>

          <div className="grid gap-6 md:grid-cols-6">

            {h.reality.flow.slice(5).map((item) => (
              <div
                key={item}
                className="rounded-[28px] border border-white/[0.06] bg-white/[0.02] p-6 text-center"
              >
                <div className="text-xs tracking-[0.3em] uppercase text-white/70">
                  {item}
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-4 text-xs tracking-[0.3em] uppercase text-[#D6A66A]">
          {h.staff.badge}
        </div>

        <h2 className="text-4xl font-extralight">
          {h.staff.title}
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {h.staff.items.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-4 text-xs tracking-[0.3em] uppercase text-[#D6A66A]">
          HOSPITALITY RUNTIME
        </div>

        <h2 className="max-w-6xl text-5xl font-extralight leading-[1.02] tracking-[-0.05em] md:text-7xl">
          One Connected
          <br />
          <span className="text-white/50">
            Hospitality Operation.
          </span>
        </h2>

        <div className="mt-20 rounded-[42px] border border-white/[0.06] bg-[#050714] p-12">

          <div className="grid gap-6 md:grid-cols-7">

            <div className="text-center">Reservations</div>
            <div className="text-center text-[#D6A66A]">→</div>

            <div className="text-center">Tables</div>
            <div className="text-center text-[#D6A66A]">→</div>

            <div className="text-center">POS</div>
            <div className="text-center text-[#D6A66A]">→</div>

            <div className="text-center">Kitchen</div>

          </div>

          <div className="my-10 text-center text-6xl text-[#D6A66A]">
            ↓
          </div>

          <div className="grid gap-6 md:grid-cols-5">

            <div className="text-center">Inventory</div>
            <div className="text-center">Procurement</div>
            <div className="text-center">Accounting</div>
            <div className="text-center">Marketing</div>
            <div className="text-center">Owner</div>

          </div>

        </div>

      </section>


      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-4 text-xs tracking-[0.3em] uppercase text-[#D6A66A]">
          SYNTHETIC INTELLIGENCE
        </div>

        <h2 className="max-w-5xl text-5xl font-extralight leading-[1.02] tracking-[-0.05em] md:text-7xl">
          One Intelligence Layer.
          <br />
          <span className="text-white/50">
            Across The Entire Hospitality Runtime.
          </span>
        </h2>

        <p className="mt-8 max-w-4xl text-lg leading-9 text-white/60">
          Reservations, operations, workforce, accounting,
          marketing and guest reputation continuously feed a
          unified intelligence layer that identifies risks,
          opportunities, trends and recommendations for the
          owner.
        </p>

        <div className="mt-20 rounded-[42px] border border-white/[0.06] bg-[#050714] p-12">

          <div className="grid items-center gap-8 md:grid-cols-7">

            <div className="text-center">
              <div className="text-xs tracking-[0.3em] uppercase text-[#D6A66A]">
                Source
              </div>
              <div className="mt-3 text-xl font-extralight">
                Reservations
              </div>
            </div>

            <div className="text-center text-5xl text-[#D6A66A]">
              →
            </div>

            <div className="text-center">
              <div className="text-xl font-extralight">
                Operations
              </div>
            </div>

            <div className="text-center text-5xl text-[#D6A66A]">
              →
            </div>

            <div className="text-center">
              <div className="text-xl font-extralight">
                Accounting
              </div>
            </div>

            <div className="text-center text-5xl text-[#D6A66A]">
              →
            </div>

            <div className="text-center">
              <div className="text-xl font-extralight">
                Intelligence
              </div>
            </div>

          </div>

          <div className="mt-12 rounded-[32px] border border-[#D6A66A]/20 bg-[#D6A66A]/5 p-10 text-center">

            <div className="mb-4 text-xs tracking-[0.35em] uppercase text-[#D6A66A]">
              Executive Output
            </div>

            <div className="text-4xl font-extralight">
              Risks · Trends · Opportunities · Recommendations
            </div>

          </div>

        </div>

      </section>


      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-4 text-xs tracking-[0.35em] uppercase text-amber-400/70">
          {h.owner.badge}
        </div>

        <h2 className="max-w-5xl text-5xl font-extralight leading-tight md:text-7xl">
          {h.owner.title}
        </h2>

        <p className="mt-8 max-w-3xl text-lg text-white/60">
          {h.owner.description}
        </p>


        <div className="mt-12 rounded-[42px] border border-white/[0.06] bg-[#050714] p-10">

          <div className="grid gap-6 md:grid-cols-4">

            <div className="rounded-3xl border border-[#D6A66A]/20 bg-white/[0.02] p-8">
              <div className="text-xs uppercase tracking-[0.3em] text-[#D6A66A]">
                Revenue
              </div>
              <div className="mt-4 text-4xl font-extralight">
                $248k
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
              <div className="text-xs uppercase tracking-[0.3em] text-[#D6A66A]">
                Labor
              </div>
              <div className="mt-4 text-4xl font-extralight">
                24%
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
              <div className="text-xs uppercase tracking-[0.3em] text-[#D6A66A]">
                Guest Score
              </div>
              <div className="mt-4 text-4xl font-extralight">
                4.8
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
              <div className="text-xs uppercase tracking-[0.3em] text-[#D6A66A]">
                Profitability
              </div>
              <div className="mt-4 text-4xl font-extralight">
                31%
              </div>
            </div>

          </div>

          <div className="mt-10 rounded-[32px] border border-white/10 bg-white/[0.02] p-10">

            <div className="text-xs uppercase tracking-[0.3em] text-[#D6A66A]">
              Executive Intelligence
            </div>

            <div className="mt-4 text-3xl font-extralight">
              One View Across Reservations, Operations,
              Workforce, Accounting, Marketing and Reputation.
            </div>

          </div>

        </div>

      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-12 text-center">

          <div className="mb-4 text-xs tracking-[0.3em] uppercase text-[#D6A66A]">
            {h.cta.badge}
          </div>

          <h2 className="text-5xl font-extralight">
            {h.cta.title}
          </h2>

          <div className="mt-10">
            <Link
              href="/contact"
              className="rounded-2xl bg-white px-6 py-3 text-black"
            >
              {h.hero.primary}
            </Link>
          </div>

        </div>
      </section>

    </main>

      <Footer />
    </>
  );
}


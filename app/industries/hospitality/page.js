"use client";

import Link from "next/link";
import SiteTopNav from "@/app/components/SiteTopNav";
import Footer from "@/components/layout/Footer";
import { useTranslation } from "@/app/providers/I18nProvider";


export default function HospitalityPage() {
  const { translations } = useTranslation();
  const h = translations.home?.hospitality || {};
  const flow = h.flow || [];

  return (
    <>
      <SiteTopNav />

      <main className="min-h-screen bg-[#03050B] text-white">
      <section className="relative min-h-[92vh] overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src="/images/hospitality-hero.png"
            alt="Luxury hospitality operating system"
            className="h-full w-full object-cover opacity-100 brightness-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#03050B]/55 via-[#03050B]/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#03050B]/40 via-transparent to-[#03050B]/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#03050B]/25 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-6 pt-20">
          <div className="mb-8 w-fit rounded-full border border-[#D6A66A]/30 bg-[#D6A66A]/10 px-6 py-2 text-xs font-medium uppercase tracking-[0.45em] text-[#D6A66A]">
            {h.hero?.badge}
          </div>

          <h1 className="max-w-5xl text-[64px] font-light leading-[0.92] tracking-[-0.06em] text-white md:text-[100px]">
            {h.hero?.title1}
            <br />
            <span className="bg-gradient-to-r from-[#D6A66A] to-[#24495C] bg-clip-text text-transparent">
              {h.hero?.title2}
            </span>
          </h1>

          <p className="mt-10 max-w-3xl text-xl leading-9 text-white/85">
            {h.hero?.description}
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/demo"
              className="rounded-2xl bg-[#D6A66A] px-9 py-5 text-sm font-semibold text-black transition hover:bg-[#E8BE83]"
            >
              {h.hero?.primary}
            </Link>

            <Link
              href="/modules"
              className="rounded-2xl border border-white/10 bg-white/[0.06] px-9 py-5 text-sm font-semibold text-white/80 transition hover:bg-white/[0.1]"
            >
              {h.hero?.secondary}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-8 text-sm uppercase tracking-[0.45em] text-[#D6A66A]">
          {h.reality?.badge}
        </p>

        <h2 className="max-w-5xl text-5xl font-light leading-tight tracking-[-0.05em] md:text-7xl">
          {h.reality?.title1}
          <br />
          <span className="text-white/45">{h.reality?.title2}</span>
        </h2>

        <div className="mt-14 max-w-5xl space-y-8 text-xl leading-9 text-white/60">
          {(h.realityContent || []).map((item, index) => (
            <p
              key={item}
              className={
                index === (h.realityContent?.length || 0) - 1
                  ? "text-white"
                  : ""
              }
            >
              {item}
            </p>
          ))}
        </div>
      </section>


      

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="mb-8 text-sm uppercase tracking-[0.45em] text-[#D6A66A]">
            {h.runtime?.badge}
          </p>

          <h2 className="max-w-5xl text-5xl font-light leading-tight tracking-[-0.05em] md:text-7xl">
            {h.runtime?.title1}
            <br />
            <span className="text-white/45">{h.runtime?.title2}</span>
          </h2>

          <div className="mt-20 grid gap-6 md:grid-cols-2">
            <div className="rounded-[36px] border border-white/10 bg-[#070A12] p-10">
              <p className="text-xl leading-9 text-white/65">
                {h.runtimeContent}
              </p>
            </div>

            <div className="rounded-[36px] border border-[#D6A66A]/20 bg-[#D6A66A]/[0.04] p-10">
              <div className="space-y-4">
                {flow.map((item, index) => (
                  <div key={item}>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 text-white/80">
                      {item}
                    </div>
                    {index !== flow.length - 1 && (
                      <div className="py-2 text-center text-[#D6A66A]">↓</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-8 text-sm uppercase tracking-[0.45em] text-[#D6A66A]">
          {h.relationships?.badge}
        </p>

        <h2 className="max-w-5xl text-5xl font-light leading-tight tracking-[-0.05em] md:text-7xl">
          {h.relationships?.title1}
          <br />
          <span className="text-white/45">
            {h.relationships?.title2}
          </span>
        </h2>

        <div className="mt-16 space-y-10 text-3xl font-light leading-tight tracking-[-0.04em] text-white/80 md:text-5xl">
          {(h.relationshipsItems || []).map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>

        <p className="mt-16 max-w-5xl text-xl leading-9 text-white/60">
          {h.relationshipsDescription}
        </p>
      </section>


      <section className="mx-auto max-w-6xl px-6 py-32">
        <div className="mb-8 text-xs uppercase tracking-[0.45em] text-[#D6A66A]">
          {h.intelligence?.badge}
        </div>

        <h2 className="max-w-5xl text-5xl font-light leading-[1.05] tracking-[-0.05em] text-white md:text-7xl">
          {h.intelligence?.title1}
          <br />
          {h.intelligence?.title2}
        </h2>

        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/60">
          {h.intelligenceDescription}
        </p>

        <div className="mt-20">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.02] p-8">
            <div className="text-center text-sm uppercase tracking-[0.35em] text-[#D6A66A]">
              {h.intelligenceChain?.eventLabel}
            </div>

            <div className="mt-4 text-center text-4xl font-light text-white">
              {h.intelligenceChain?.eventTitle}
            </div>
          </div>

          <div className="py-10 text-center text-5xl text-[#D6A66A]">
            ↓
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {(h.intelligenceChain?.cards || []).map((card) => (
              <div
                key={card.label}
                className="rounded-[28px] border border-white/10 bg-white/[0.02] p-7"
              >
                <div className="text-sm uppercase tracking-[0.3em] text-[#D6A66A]">
                  {card.label}
                </div>

                <div className="mt-4 text-center text-2xl font-light text-white">
                  {card.title}
                </div>
              </div>
            ))}
          </div>

          <div className="py-10 text-center text-5xl text-[#D6A66A]">
            ↓
          </div>

          <div className="rounded-[32px] border border-[#D6A66A]/20 bg-[#D6A66A]/5 p-12 text-center">
            <div className="text-center text-sm uppercase tracking-[0.35em] text-[#D6A66A]">
              {h.intelligenceChain?.ownershipLabel}
            </div>

            <div className="mt-6 text-4xl font-light text-white md:text-5xl">
              {h.intelligenceChain?.ownershipTitle}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="mb-8 text-sm uppercase tracking-[0.45em] text-[#D6A66A]">
            {h.synthetic?.badge}
          </p>

          <h2 className="max-w-5xl text-5xl font-light leading-tight tracking-[-0.05em] md:text-7xl">
            {h.synthetic?.title1}
            <br />
            {h.synthetic?.title2}
            <br />
            {h.synthetic?.title3}
            <br />
            <span className="text-[#D6A66A]">{h.syntheticExecute}</span>
          </h2>

          <div className="mt-16 max-w-5xl space-y-8 text-xl leading-9 text-white/60">
            {(h.syntheticContent || []).map((item, index) => (
              <p
                key={item}
                className={
                  index === (h.syntheticContent?.length || 0) - 1
                    ? "text-white"
                    : ""
                }
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-8 text-sm uppercase tracking-[0.45em] text-[#D6A66A]">
          {h.ownership?.badge}
        </p>

        <h2 className="max-w-5xl text-5xl font-light leading-tight tracking-[-0.05em] md:text-7xl">
          {h.ownership?.title1}
          <br />
          <span className="text-white/45">{h.ownership?.title2}</span>
        </h2>

        <div className="mt-14 max-w-5xl space-y-8 text-xl leading-9 text-white/60">
          <p>
            {h.ownershipDescription}
          </p>

          <p>
            {h.ownershipReality}
          </p>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-5">
          {(h.ownershipTypes || []).map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center text-white/85"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-gradient-to-b from-[#03050B] to-[#0B0D16]">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <p className="mb-8 text-sm uppercase tracking-[0.45em] text-[#D6A66A]">
            {h.cta?.badge}
          </p>

          <h2 className="mx-auto max-w-5xl text-5xl font-light leading-tight tracking-[-0.05em] md:text-7xl">
            {h.cta?.title1}
            <br />
            <span className="text-[#D6A66A]">
              {h.cta?.title2}
            </span>
          </h2>

          <p className="mx-auto mt-12 max-w-3xl text-xl leading-9 text-white/60">
            {h.cta?.description}
          </p>

          <div className="mt-12">
            <Link
              href="/demo"
              className="inline-flex rounded-2xl bg-[#D6A66A] px-10 py-5 text-sm font-semibold text-black transition hover:bg-[#E8BE83]"
            >
              {h.cta?.primary}
            </Link>
          </div>
        </div>
      </section>
    </main>

      <Footer />
    </>
  );
}

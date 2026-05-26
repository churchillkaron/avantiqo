"use client";

import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { useTranslation } from "@/lib/i18n/useTranslation";
import { demoTranslations } from "@/lib/i18n/pages/demo";

export default function DemoPage() {
  const { locale } = useTranslation();

  const t =
    demoTranslations[locale] ||
    demoTranslations.en;

  const demoSteps = [
    {
      title: t.step1Title || "Choose Industry",
      image: "/images/demo-industry.png",
    },
    {
      title: t.step2Title || "Explore Runtime",
      image: "/images/demo-runtime.png",
    },
    {
      title: t.step3Title || "See Live Operations",
      image: "/images/demo-live.png",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#04050B] text-white">
      <Navbar />

      <section className="relative px-6 py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#241237_0%,#070B16_40%,#02030A_100%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-5 md:p-10 md:gap-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-6 text-xs tracking-[0.35em] text-[#D6A66A]">
              {t.heroLabel}
            </p>

            <h1 className="whitespace-pre-line text-4xl md:text-6xl font-light leading-[0.92] tracking-[-0.07em] md:text-5xl md:text-[92px]">
              {t.heroTitle}
            </h1>

            <p className="mt-8 max-w-[700px] text-lg leading-8 text-white/60">
              {t.heroDescription}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/platform"
                className="rounded-[20px] bg-gradient-to-r from-[#D6A66A] to-[#8B5CF6] px-8 py-4 text-sm font-medium transition-all duration-500 hover:-translate-y-1"
              >
                {t.bookButton}
              </Link>

              <Link
                href="/ai"
                className="rounded-[20px] border border-white/10 bg-white/[0.04] px-8 py-4 text-sm text-white/70 transition-all duration-500 hover:border-purple-500/30"
              >
                {t.platformButton}
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[24px] md:rounded-[36px] border border-white/10 bg-[#070B16] shadow-[0_0_60px_rgba(120,80,255,0.08)]">
            <Image
              src="/images/demo-hero.png"
              alt="Enterprise Demo"
              width={1600}
              height={1000}
              quality={75}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 md:p-8 md:grid-cols-1 md:grid-cols-3">
            {demoSteps.map((item, index) => (
              <div
                key={`demo-item-${index}`}
                className="overflow-hidden rounded-[24px] md:rounded-[36px] border border-white/10 bg-[#070B16]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1400}
                  height={900}
                  quality={75}
                  className="h-[320px] w-full object-cover"
                />

                <div className="p-4 md:p-8">
                  <h3 className="text-3xl font-light">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

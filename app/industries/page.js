"use client";

import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { useTranslation } from "@/lib/i18n/useTranslation";
import { industriesTranslations } from "@/lib/i18n/pages/industries";

export default function IndustriesPage() {

  const { locale } = useTranslation();

  const t =
    industriesTranslations[locale] ||
    industriesTranslations.en;

  const industries = [
    {
      title: t.accountingTitle,
      description: t.accountingDescription,
      href: "/industries/accounting-firms",
      image: "/images/industry-accounting.png",
    },
    {
      title: t.hotelsTitle,
      description: t.hotelsDescription,
      href: "/industries/hotels",
      image: "/images/industry-hotels.png",
    },
    {
      title: t.restaurantsTitle,
      description: t.restaurantsDescription,
      href: "/industries/restaurants",
      image: "/images/industry-restaurants.png",
    },
    {
      title: t.constructionTitle,
      description: t.constructionDescription,
      href: "/industries/construction",
      image: "/images/industry-construction.png",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#04050B] text-white">
      <Navbar />

      <section className="relative px-6 py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#241237_0%,#070B16_40%,#02030A_100%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-5xl">

            <p className="mb-6 text-xs tracking-[0.35em] text-[#D6A66A]">
              INDUSTRY OPERATING RUNTIMES
            </p>

            <h1 className="whitespace-pre-line text-4xl md:text-6xl font-light leading-[0.92] tracking-[-0.07em] md:text-5xl md:text-[92px]">
              {t.heroTitle}
            </h1>

            <p className="mt-8 max-w-[760px] text-lg leading-8 text-white/60">
              {t.heroDescription}
            </p>

          </div>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-4 md:p-8 md:grid-cols-2">

            {industries.map((industry) => (

              <Link
                key={industry.title}
                href={industry.href}
                className="group overflow-hidden rounded-[24px] md:rounded-[36px] border border-white/10 bg-[#070B16] transition-all duration-500 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_0_60px_rgba(120,80,255,0.12)]"
              >

                <div className="relative overflow-hidden">

                  <Image
                    src={industry.image}
                    alt={industry.title}
                    width={1400}
                    height={900}
                    quality={75}
                    className="h-[240px] md:h-[420px] w-full object-cover transition-all duration-700 group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#04050B] via-transparent to-transparent" />

                </div>

                <div className="p-5 md:p-10">

                  <div className="mb-5 flex items-center gap-3">

                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#D6A66A] to-purple-500" />

                    <div className="text-xs uppercase tracking-[0.3em] text-white/40">
                      Operational Runtime
                    </div>

                  </div>

                  <h2 className="text-4xl font-light tracking-[-0.03em]">
                    {industry.title}
                  </h2>

                  <p className="mt-6 max-w-[580px] text-[16px] leading-8 text-white/60">
                    {industry.description}
                  </p>

                </div>

              </Link>

            ))}

          </div>
        </div>
      </section>

      <section className="border-t border-white/5 px-6 py-20 md:py-32">

        <div className="mx-auto max-w-5xl text-center">

          <p className="mb-6 text-xs tracking-[0.35em] text-[#D6A66A]">
            ENTERPRISE OPERATIONS
          </p>

          <h2 className="whitespace-pre-line text-5xl font-light leading-[1.02] tracking-[-0.05em] md:text-4xl md:text-7xl">
            {t.ctaTitle}
          </h2>

          <p className="mx-auto mt-8 max-w-[760px] text-lg leading-8 text-white/60">
            {t.ctaDescription}
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Link
              href="/demo"
              className="rounded-[20px] bg-gradient-to-r from-[#D6A66A] to-[#8B5CF6] px-8 py-4 text-sm font-medium transition-all duration-500 hover:-translate-y-1"
            >
              {t.demoButton}
            </Link>

            <Link
              href="/platform"
              className="rounded-[20px] border border-white/10 bg-white/[0.04] px-8 py-4 text-sm text-white/70 transition-all duration-500 hover:border-purple-500/30"
            >
              {t.platformButton}
            </Link>

          </div>

        </div>

      </section>

      <Footer />
    </main>
  );
}

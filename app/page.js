"use client";

import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { useTranslation } from "@/lib/i18n/useTranslation";
import { homeTranslations } from "@/lib/i18n/pages/home";

const modules = [
  {
    title: "ENTERPRISE AI",
    description:
      "One intelligent runtime connecting operations, finance, documents and growth.",
    image: "/images/hero-enterprise-ai.png",
    status: "ACTIVE",
  },
];

export default function Home() {

  const { locale } = useTranslation();

  const t =
    homeTranslations[locale] ||
    homeTranslations.en;

  const cards = t.cards || [];

  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-br from-[#050816] via-[#090014] to-[#050816] text-white">

      <Navbar />

      <section className="relative px-6 py-20 md:py-32">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#241237_0%,#090B13_42%,#02030A_100%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 md:gap-20 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">

          <div>

            <p className="mb-6 text-xs tracking-[0.35em] text-[#D6A66A]">
              {t.heroLabel}
            </p>

            <h1 className="max-w-[700px] text-4xl font-light leading-[0.92] tracking-[-0.07em] md:text-[100px]">
              {t.heroTitle}
            </h1>

            <p className="mt-8 max-w-[640px] text-lg leading-8 text-white/60">
              {t.heroDescription}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/platform"
                className="rounded-[20px] bg-gradient-to-r from-[#D6A66A] to-[#8B5CF6] px-8 py-4 text-sm font-medium transition-all duration-500 hover:-translate-y-1"
              >
                Explore Platform
              </Link>

              <Link
                href="/demo"
                className="rounded-[20px] border border-white/10 bg-white/[0.04] px-8 py-4 text-sm text-white/70 transition-all duration-500 hover:border-purple-500/30"
              >
                Book Demo
              </Link>

            </div>

          </div>

          <div className="overflow-hidden rounded-[24px] md:rounded-[36px] border border-white/10 bg-[#070B16]">

            <Image
              src="/images/hero-enterprise-ai.png"
              alt="Enterprise AI"
              width={1600}
              height={1000}
              quality={75}
              priority
              className="h-full w-full object-cover"
            />

          </div>

        </div>

      </section>

      <section className="px-6 pb-20 md:pb-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {cards.map((card, index) => (

              <div
                key={index}
                className="overflow-hidden rounded-[24px] md:rounded-[36px] border border-white/10 bg-[#070B16]"
              >

                <div className="p-5 md:p-10">

                  <div className="mb-4 text-xs tracking-[0.3em] text-[#D6A66A]">
                    MODULE
                  </div>

                  <h3 className="text-2xl font-light">
                    {card.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/60">
                    {card.description}
                  </p>

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

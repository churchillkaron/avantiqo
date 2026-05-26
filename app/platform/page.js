"use client";

import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { useTranslation } from "@/lib/i18n/useTranslation";
import { platformTranslations } from "@/lib/i18n/pages/platform";


  


export default function PlatformPage() {

  const { locale } = useTranslation();

  const t =
    platformTranslations[locale] ||
    platformTranslations.en;

const platformSections = [
    {
      title: t.connectedRuntimeTitle,
      description: t.connectedRuntimeDescription,
      image: "/images/platform-connected-runtime.png",
    },
    {
      title: t.roleTitle,
      description: t.roleDescription,
      image: "/images/platform-role-control.png",
    },
    {
      title: t.eventsTitle,
      description: t.eventsDescription,
      image: "/images/platform-live-events.png",
    },
    {
      title: t.mobileTitle,
      description: t.mobileDescription,
      image: "/images/platform-mobile.png",
    },
    {
      title: t.multiCompanyTitle,
      description: t.multiCompanyDescription,
      image: "/images/platform-multicompany.png",
    },
    {
      title: t.integrationsTitle,
      description: t.integrationsDescription,
      image: "/images/platform-integrations.png",
    },
  ];
  return (
    <main className="min-h-screen overflow-hidden bg-[#04050B] text-white">

      <Navbar />

      {/* HERO */}
      <section className="relative px-6 py-20 md:py-32">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#241237_0%,#070B16_40%,#02030A_100%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-5 md:p-10 md:gap-20 lg:grid-cols-[0.9fr_1.1fr]">

          <div>

            <p className="mb-6 text-xs tracking-[0.35em] text-[#D6A66A]">
              ENTERPRISE OPERATIONAL PLATFORM
            </p>

            <h1 className="text-4xl md:text-6xl font-light leading-[0.92] tracking-[-0.07em] md:text-5xl md:text-[92px]">
              {t.heroTitle}
            </h1>

            <p className="mt-8 max-w-[700px] text-lg leading-8 text-white/60">
              {t.heroDescription}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/demo"
                className="rounded-[20px] bg-gradient-to-r from-[#D6A66A] to-[#8B5CF6] px-8 py-4 text-sm font-medium transition-all duration-500 hover:-translate-y-1"
              >
                {t.demoButton}
              </Link>

              <Link
                href="/industries"
                className="rounded-[20px] border border-white/10 bg-white/[0.04] px-8 py-4 text-sm text-white/70 transition-all duration-500 hover:border-purple-500/30"
              >
                {t.industriesButton}
              </Link>

            </div>

          </div>

          <div className="overflow-hidden rounded-[24px] md:rounded-[36px] border border-white/10 bg-[#070B16] shadow-[0_0_60px_rgba(120,80,255,0.08)]">

            <Image
              src="/images/platform-hero.png"
              alt="Platform Runtime"
              width={1600}
              height={1000}
              quality={75}
              priority
              className="h-full w-full object-cover"
            />

          </div>

        </div>

      </section>

      {/* PLATFORM CORE */}
      <section className="px-6 py-28">

        <div className="mx-auto max-w-6xl text-center">

          <p className="mb-6 text-xs tracking-[0.35em] text-[#B58AF8]">
            {t.coreLabel}
          </p>

          <h2 className="text-5xl font-light leading-[1.02] tracking-[-0.05em] md:text-4xl md:text-7xl">
            {t.coreTitle}
          </h2>

          <p className="mx-auto mt-10 max-w-[900px] text-lg leading-9 text-white/60">
            {t.coreDescription}
          </p>

        </div>

      </section>

      {/* PLATFORM GRID */}
      <section className="px-6 pb-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-4 md:p-8 md:grid-cols-2">

            {platformSections.map((section) => (

              <div
                key={section.title}
                className="overflow-hidden rounded-[24px] md:rounded-[36px] border border-white/10 bg-[#070B16] transition-all duration-500 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_0_60px_rgba(120,80,255,0.10)]"
              >

                <Image
                  src={section.image}
                  alt={section.title}
                  width={1400}
                  height={900}
                  quality={75}
                  className="h-[240px] md:h-[420px] w-full object-cover"
                />

                <div className="p-5 md:p-10">

                  <div className="mb-5 flex items-center gap-3">

                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#D6A66A] to-purple-500" />

                    <div className="text-xs uppercase tracking-[0.3em] text-white/40">
                      {t.runtimeLabel}
                    </div>

                  </div>

                  <h3 className="text-4xl font-light tracking-[-0.03em]">
                    {section.title}
                  </h3>

                  <p className="mt-6 text-[16px] leading-8 text-white/60">
                    {section.description}
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

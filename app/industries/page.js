"use client";

import SiteTopNav from "@/app/components/SiteTopNav";

import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/layout/Footer";
import { useTranslation } from "@/app/providers/I18nProvider";


const industries = [
  {
    key: "professionalServices",
    href: "/industries/accounting-firms",
    image: "/images/industry-accounting.png",
  },
  {
    key: "hospitality",
    href: "/industries/restaurants",
    image: "/images/industry-restaurants.png",
  },
  {
    key: "retail",
    href: "/start",
    image: "/images/retail-commerce.png",
  },
  {
    key: "construction",
    href: "/industries/construction",
    image: "/images/industry-construction.png",
  },
  {
    key: "distribution",
    href: "/start",
    image: "/images/distribution.png",
  },
  {
    key: "enterprise",
    href: "/enterprise",
    image: "/images/enterprise-hero.png",
  },
];


export default function IndustriesPage() {
  const { locale, t, translations } = useTranslation();



  console.log(
    "INDUSTRIES_TEST",
    translations?.home?.industries?.title1,
    translations?.home?.industries?.runtimeLabel,
    translations?.home?.industries?.cta?.badge
  );


  return (
    <>
<SiteTopNav />
<main className="min-h-screen overflow-hidden bg-[#04050B] text-white">

      {/* HERO */}
      <section className="relative px-6 py-32">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#241237_0%,#070B16_40%,#02030A_100%)]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="max-w-5xl">

            <p className="mb-6 text-xs tracking-[0.35em] text-[#D6A66A]">
              {t('home.industries.badge')}
            </p>

            <h1 className="text-6xl font-extralight leading-[1.02] tracking-[-0.06em] md:text-[92px]">
              {t('home.industries.title1')}
              <br />
              {t('home.industries.title2')}
            </h1>

            <p className="mt-8 max-w-[820px] text-[17px] leading-[1.9] text-white/50">
              {t('home.industries.description')}
            </p>

          </div>

        </div>

      </section>

      {/* INDUSTRY GRID */}
      <section className="px-6 pb-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2">

            {industries.map((industry) => (

              <Link
                key={t(`home.industries.groups.${industry.key}.title`)}
                href={industry.href}
                className="group overflow-hidden rounded-[36px] border border-white/[0.05] bg-[#050714] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-[#D6A66A]/20 hover:shadow-[0_0_60px_rgba(120,80,255,0.12)]"
              >

                <div className="relative overflow-hidden">

                  <Image
                    src={industry.image}
                    alt={t(`home.industries.groups.${industry.key}.title`)}
                    width={1400}
                    height={900}
                    quality={75}
                    className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-[1.02] transition-all duration-700 group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#04050B] via-transparent to-transparent" />

                </div>

                <div className="p-6 md:p-10">

                  <div className="mb-5 flex items-center gap-3">

                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#D6A66A] to-[#14364D]" />

                    <div className="text-xs uppercase tracking-[0.3em] text-white/40">
                      {t('home.industries.runtimeLabel')}
                    </div>

                  </div>

                  <h2 className="text-4xl font-extralight tracking-[-0.02em]">
                    {t(`home.industries.groups.${industry.key}.title`)}
                  </h2>

                  <p className="mt-6 max-w-[580px] text-[16px] leading-8 text-white/50">
                    {t(`home.industries.groups.${industry.key}.description`)}
                  </p>

                  <div className="mt-8 flex items-center gap-3 text-sm text-[#D6A66A]">

                    {t('home.industries.exploreIndustry')}

                    <span className="transition-transform duration-500 group-hover:translate-x-2">
                      →
                    </span>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* {t("home.industries.businessFunctions.badge")} */}

      <section className="border-t border-white/5 px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="mb-6 text-xs tracking-[0.35em] text-[#D6A66A]">
              {t("home.industries.businessFunctions.badge")}
            </p>

            <h2 className="text-5xl font-extralight leading-[1.02] tracking-[-0.05em] md:text-7xl">
              {t("home.industries.businessFunctions.title1")}
              <br />
              {t("home.industries.businessFunctions.title2")}
            </h2>

            <p className="mx-auto mt-8 max-w-[820px] text-[17px] leading-[1.9] text-white/50">
              {t("home.industries.businessFunctions.description")}
            </p>

          </div>

          <div className="mt-20 grid max-w-6xl mx-auto gap-8 md:grid-cols-2 xl:grid-cols-3">

            {translations.home.industries.businessFunctions.cards.map((card) => (

              <div
                key={card.title}
                className="rounded-[32px] border border-white/[0.06] bg-white/[0.02] p-8 transition-all duration-300 hover:border-[#D6A66A]/20"
              >

                <p className="mb-6 text-center text-xs tracking-[0.25em] text-[#D6A66A]">
                  {card.title}
                </p>

                <div className="space-y-4">

                  {card.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-white/[0.03] p-4 text-center text-white/75"
                    >
                      {item}
                    </div>
                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* {t("home.industries.intelligenceLayer.badge")} */}

      <section className="border-t border-white/5 px-6 py-20">

        <div className="mx-auto max-w-6xl text-center">

          <p className="mb-6 text-xs tracking-[0.35em] text-[#D6A66A]">
            {t("home.industries.intelligenceLayer.badge")}
          </p>

          <h2 className="text-5xl font-extralight leading-[1.02] tracking-[-0.05em] md:text-7xl">
            {t("home.industries.intelligenceLayer.title1")}
            <br />
            {t("home.industries.intelligenceLayer.title2")}
          </h2>

          <p className="mx-auto mt-8 max-w-[900px] text-[17px] leading-[1.9] text-white/50">
            {t("home.industries.intelligenceLayer.description")}
          </p>

          <div className="mt-20 flex flex-col items-center gap-8 md:flex-row md:justify-center">

            {translations.home.industries.intelligenceLayer.steps.map((step, index) => (
              <div
                key={step.title}
                className="flex items-start gap-8"
              >
                <div className="rounded-[28px] border border-white/[0.06] bg-white/[0.02] px-10 py-8">
                  <p className="h-8 flex items-center justify-center text-xl text-white/90 mb-3 text-center">
                    {step.title}
                  </p>

                  <p className="h-[140px] max-w-[220px] text-sm leading-7 text-white/50 flex items-center justify-center text-center mx-auto">
                    {step.desc}
                  </p>

                </div>

                {index < 3 && (
                  <div className="hidden md:flex items-center justify-center self-center text-[#D6A66A] text-2xl">
                    →
                  </div>
                )}

              </div>
            ))}

          </div>

        </div>

      </section>



      {/* DATA FOUNDATION */}

      <section className="border-t border-white/5 px-6 py-20">

        <div className="mx-auto max-w-6xl text-center">

          <p className="mb-6 text-xs tracking-[0.35em] text-[#D6A66A]">
            {t("home.industries.dataFoundation.badge")}
          </p>

          <h2 className="text-5xl font-extralight leading-[1.02] tracking-[-0.05em] md:text-7xl">
            {t("home.industries.dataFoundation.title1")}
            <br />
            {t("home.industries.dataFoundation.title2")}
          </h2>

          <p className="mx-auto mt-8 max-w-[900px] text-[17px] leading-[1.9] text-white/50">
            {t("home.industries.dataFoundation.description")}
          </p>

          <div className="mt-20 grid gap-6 md:grid-cols-5">

            {translations.home.industries.dataFoundation.entities.map((item) => (

              <div
                key={item.title}
                className="rounded-[28px] border border-white/[0.06] bg-white/[0.02] px-6 py-7"
              >
                <p className="mb-3 text-lg text-white/90">
                  {item.title}
                </p>

                <p className="text-sm leading-7 text-white/50">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="border-t border-white/5 px-6 py-20">

        <div className="mx-auto max-w-5xl text-center">

          <p className="mb-6 text-xs tracking-[0.35em] text-[#D6A66A]">
            {t('home.industries.cta.badge')}
          </p>

          <h2 className="text-5xl font-extralight leading-[1.02] tracking-[-0.05em] md:text-7xl">
            {t('home.industries.cta.title1')}
            <br />
            {t('home.industries.cta.title2')}
            <br />
            {t('home.industries.cta.title3')}
          </h2>

          <p className="mx-auto mt-8 max-w-[820px] text-[17px] leading-[1.9] text-white/50">
            {t('home.industries.cta.description')}
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Link
              href="/demo"
              className="rounded-[22px] bg-gradient-to-r from-[#D6A66A] to-[#14364D] px-6 py-3 md:px-8 md:py-4 text-sm font-extralight transition-all duration-300 ease-out hover:-translate-y-[2px]"
            >
              {t('home.industries.cta.primary')}
            </Link>

            <Link
              href="/what-is-synthetic-intelligence"
              className="rounded-[22px] border border-white/[0.05] bg-white/[0.025] px-6 py-3 md:px-8 md:py-4 text-sm text-white/50 transition-all duration-300 ease-out hover:border-[#D6A66A]/20"
            >
              {t('home.industries.cta.secondary')}
            </Link>

          </div>

        </div>

      </section>

      <Footer />

   
    </main>
    </>
  );
}
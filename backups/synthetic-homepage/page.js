"use client";

import SiteTopNav from "@/app/components/SiteTopNav";

import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/layout/Footer";
import { useTranslation } from "@/app/providers/I18nProvider";

const modules = [
  {
    key: "control",
    image: "/images/live-control-hotel.png",
  },
  {
    key: "finance",
    image: "/images/accounting-thai-office.png",
  },
  {
    key: "staff",
    image: "/images/staff-portal-mobile.png",
  },
  {
    key: "projects",
    image: "/images/projects-construction.png",
  },
  {
    key: "documents",
    image: "/images/documents-flow.png",
  },
  {
    key: "marketing",
    image: "/images/ai-marketing-studio.png",
  },
  {
    key: "inventory",
    image: "/images/inventory-procurement.png",
  },
  {
    key: "enterprise",
    image: "/images/hero-enterprise-ai.png",
  },
];

export default function Home() {

  const { t } = useTranslation();


  return (

    <>
<SiteTopNav />
<main className="min-h-screen overflow-hidden bg-gradient-to-br from-[#050816] via-[#090014] to-[#050816] text-white">


      {/* HERO */}
      <section className="relative px-6 py-32">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#241237_0%,#090B13_42%,#02030A_100%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">

          <div>

            <p className="mb-6 text-xs tracking-[0.35em] text-[#D6A66A]">
              {t("home.hero.badge")}
            </p>

            <h1 className="max-w-[820px] text-6xl font-extralight leading-[1.02] tracking-[-0.06em] md:text-[100px]">

              {t("home.hero.title1")}
              <br />
              {t("home.hero.title2")}

            </h1>

            <p className="mt-8 max-w-[540px] text-[17px] leading-[1.9] text-white/50">
              {t("home.hero.description")}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/demo"
                className="rounded-[22px] bg-gradient-to-r from-[#D6A66A] via-[#C084FC] to-[#7C5CFA] px-6 py-3 md:px-8 md:py-4 text-sm font-extralight transition-all duration-300 ease-out hover:-translate-y-[2px]"
              >
                {t("home.hero.book_demo")}
              </Link>

              <Link
                href="/start"
                className="rounded-[22px] border border-white/[0.05] bg-white/[0.025] px-6 py-3 md:px-8 md:py-4 text-sm text-white/65 transition-all duration-300 ease-out hover:border-purple-500/30"
              >
                {t("home.hero.start_setup")}
              </Link>

            </div>

          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-white/[0.05] bg-[#050714] shadow-[0_0_40px_rgba(120,80,255,0.08)]">

            <div className="absolute inset-0 bg-purple-500/5 blur-3xl pointer-events-none" />

            <Image
              src="/images/hero-chaos-control.png"
              alt="Chaos To Control"
              width={1600}
              height={1000}
              quality={75}
              priority
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02] scale-[1.02]"
            />

          </div>

        </div>

      </section>

      {/* MODULES */}
      <section className="px-6 py-32">

        <div className="mx-auto max-w-7xl">

          <div className="mb-16">

            <p className="mb-6 text-xs tracking-[0.35em] text-[#B58AF8]">
              {t("home.modules.badge")}
            </p>

            <h2 className="max-w-5xl text-5xl font-extralight leading-[1.02] tracking-[-0.05em] md:text-7xl">

              {t("home.modules.title1")}
              {t("home.modules.title2")}
              <br />
              {t("home.modules.title3")}
              {t("home.modules.title4")}

            </h2>

          </div>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2">

            {modules.map((item) => (

              <div
                key={t(`home.cards.${item.key}.title`)}
                className="group relative overflow-hidden rounded-[32px] border border-white/[0.05] bg-[#050714] min-h-[620px] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-purple-500/30 shadow-[0_0_40px_rgba(120,80,255,0.08)]"
              >

                <div className="absolute inset-0 bg-purple-500/5 blur-3xl pointer-events-none" />

                <div className="relative aspect-[16/10] overflow-hidden">

                  <Image
                    src={item.image}
                    alt={t(`home.cards.${item.key}.title`)}
                    fill
                    quality={75}
                    className="object-cover transition-transform duration-700 hover:scale-[1.02] transition duration-700 group-hover:scale-[1.03]"
                 sizes="(max-width: 768px) 100vw, 50vw" />

                </div>

                <div className="relative p-8">

                  <div className="mb-5 flex items-center gap-2 text-[12px] text-emerald-400">

                    <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

                    {t(`home.cards.${item.key}.status`)}

                  </div>

                  <h3 className="text-3xl font-extralight">
                    {t(`home.cards.${item.key}.title`)}
                  </h3>

                  <p className="mt-5 max-w-[540px] text-sm leading-7 text-white/50">
                    {t(`home.cards.${item.key}.description`)}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-32">

        <div className="mx-auto max-w-5xl text-center">

          <p className="mb-6 text-xs tracking-[0.35em] text-[#D6A66A]">
            {t("home.cta.badge")}
          </p>

          <h2 className="text-5xl font-extralight leading-[1.02] tracking-[-0.05em] md:text-7xl">

            {t("home.cta.title1")}
            <br />
            {t("home.cta.title2")}
            <br />
            {t("home.cta.title3")}

          </h2>

          <p className="mx-auto mt-8 max-w-[720px] text-[17px] leading-[1.9] text-white/50">
            {t("home.cta.description")}
          </p>

          <div className="mt-12">

            <Link
              href="/demo"
              className="rounded-[22px] bg-gradient-to-r from-[#D6A66A] via-[#C084FC] to-[#7C5CFA] px-6 py-3 md:px-8 md:py-4 text-sm font-extralight transition-all duration-300 ease-out hover:-translate-y-[2px]"
            >
              {t("home.hero.book_demo")}
            </Link>

          </div>

        </div>

      </section>

      <Footer />
   </main>
    </>
  );
}
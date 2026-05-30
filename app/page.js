"use client";

import SiteTopNav from "@/app/components/SiteTopNav";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import { useTranslation } from "@/app/providers/I18nProvider";

const pillars = ["operations", "accounting", "firms", "execution"];

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <SiteTopNav />

      <main className="min-h-screen overflow-hidden bg-gradient-to-br from-[#050816] via-[#090014] to-[#050816] text-white">
        <section className="relative px-6 py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#241237_0%,#090B13_42%,#02030A_100%)]" />

          <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="mb-6 text-xs tracking-[0.35em] text-[#D6A66A]">
                {t("home.hero.badge")}
              </p>

              <h1 className="max-w-[900px] text-6xl font-extralight leading-[1.02] tracking-[-0.06em] md:text-[92px]">
                {t("home.hero.title1")}
                <br />
                <span className="bg-gradient-to-r from-[#D6A66A] via-[#C084FC] to-[#7C5CFA] bg-clip-text text-transparent">
                  {t("home.hero.title2")}
                </span>
              </h1>

              <p className="mt-8 max-w-[680px] text-[17px] leading-[1.9] text-white/52">
                {t("home.hero.description")}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="/demo" className="rounded-[22px] bg-gradient-to-r from-[#D6A66A] via-[#C084FC] to-[#7C5CFA] px-6 py-3 text-sm font-extralight transition-all duration-300 ease-out hover:-translate-y-[2px] md:px-8 md:py-4">
                  {t("home.hero.book_demo")}
                </Link>

                <Link href="/industries/accounting-firms" className="rounded-[22px] border border-white/[0.07] bg-white/[0.025] px-6 py-3 text-sm text-white/65 transition-all duration-300 ease-out hover:border-purple-500/30 md:px-8 md:py-4">
                  {t("home.hero.start_setup")}
                </Link>
              </div>

              <p className="mt-8 max-w-[700px] text-sm tracking-[0.12em] text-white/35">
                {t("home.hero.trust")}
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[32px] border border-white/[0.05] bg-[#050714] shadow-[0_0_40px_rgba(120,80,255,0.08)]">
              <Image
                src="/images/hero-chaos-control.png"
                alt="Synthetic Intelligence Operating System"
                width={1600}
                height={1000}
                quality={75}
                priority
                className="h-full w-full scale-[1.02] object-cover transition-transform duration-700 hover:scale-[1.04]"
              />

              <div className="absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-black/40 px-5 py-3 backdrop-blur-xl">
                <p className="text-xs tracking-[0.25em] text-[#D6A66A]">
                  {t("home.hero.image_caption")}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-28">
          <div className="mx-auto max-w-7xl">
            <p className="mb-6 text-xs tracking-[0.35em] text-[#B58AF8]">
              {t("home.accounting.badge")}
            </p>

            <h2 className="max-w-6xl text-5xl font-extralight leading-[1.02] tracking-[-0.05em] md:text-7xl">
              {t("home.accounting.title1")}
              <br />
              {t("home.accounting.title2")}
            </h2>

            <p className="mt-8 max-w-[780px] text-[17px] leading-[1.9] text-white/50">
              {t("home.accounting.description")}
            </p>

            <div className="mt-14 grid gap-5 md:grid-cols-4">
              {pillars.map((key) => (
                <div key={key} className="rounded-[28px] border border-white/[0.06] bg-white/[0.025] p-7 shadow-[0_0_30px_rgba(120,80,255,0.06)]">
                  <p className="mb-4 text-xs tracking-[0.22em] text-[#D6A66A]">
                    {t(`home.pillars.${key}.badge`)}
                  </p>
                  <h3 className="text-2xl font-extralight">
                    {t(`home.pillars.${key}.title`)}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/50">
                    {t(`home.pillars.${key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="mb-6 text-xs tracking-[0.35em] text-[#D6A66A]">
                {t("home.synthetic.badge")}
              </p>

              <h2 className="text-5xl font-extralight leading-[1.02] tracking-[-0.05em] md:text-7xl">
                {t("home.synthetic.title1")}
                <br />
                {t("home.synthetic.title2")}
              </h2>
            </div>

            <div className="rounded-[32px] border border-white/[0.06] bg-[#050714] p-8 md:p-10">
              <p className="text-[18px] leading-[2] text-white/55">
                {t("home.synthetic.description")}
              </p>

              <div className="mt-10 rounded-[28px] border border-purple-400/10 bg-purple-500/[0.04] p-7">
                <p className="text-xs tracking-[0.28em] text-[#B58AF8]">
                  {t("home.synthetic.formulaBadge")}
                </p>
                <p className="mt-5 text-2xl font-extralight leading-snug text-white/80">
                  {t("home.synthetic.formula")}
                </p>
              </div>
            </div>
          </div>
        </section>

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
              <span className="bg-gradient-to-r from-[#D6A66A] via-[#C084FC] to-[#7C5CFA] bg-clip-text text-transparent">
                {t("home.cta.title3")}
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-[760px] text-[17px] leading-[1.9] text-white/50">
              {t("home.cta.description")}
            </p>

            <div className="mt-12">
              <Link href="/demo" className="rounded-[22px] bg-gradient-to-r from-[#D6A66A] via-[#C084FC] to-[#7C5CFA] px-6 py-3 text-sm font-extralight transition-all duration-300 ease-out hover:-translate-y-[2px] md:px-8 md:py-4">
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

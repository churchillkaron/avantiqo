"use client";

import SiteTopNav from "@/app/components/SiteTopNav";
import { useTranslation } from "@/app/providers/I18nProvider";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/layout/Footer";

export default function Home() {
const { translations } = useTranslation();
const showcaseSections = translations?.home?.showcaseSections || [];
const whatIsAvantiqo = translations?.home?.whatIsAvantiqo;
const whyAvantiqo = translations?.home?.whyAvantiqo;
const accountingAdvisory = translations?.home?.accountingAdvisory;


  return (
    <>
      <SiteTopNav />

      <main className="min-h-screen overflow-hidden bg-[#02030A] text-white">
        <section className="relative px-6 pb-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#241237_0%,#070B16_42%,#02030A_100%)]" />

          <div className="relative mx-auto max-w-[1800px]">
            <div className="relative min-h-[760px] overflow-hidden rounded-[46px] border border-white/[0.08] bg-[#050714] shadow-[0_0_90px_rgba(214,166,106,0.12)]">
              <Image
                src="/images/hero-hero.png"
                alt=""
                width={2200}
                height={1400}
                quality={80}
                priority
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#02030A]/96 via-[#02030A]/78 to-[#02030A]/18" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(214,166,106,0.18),transparent_28%),radial-gradient(circle_at_70%_10%,rgba(140,107,255,0.2),transparent_32%)]" />

              <div className="relative z-10 flex min-h-[760px] items-center px-8 py-16 md:px-14 lg:px-20">
                <div className="max-w-[880px] rounded-[42px] border border-white/10 bg-black/30 p-8 shadow-[0_35px_140px_rgba(0,0,0,0.65)] backdrop-blur-3xl md:p-12">
                  <p className="mb-7 text-xs uppercase tracking-[0.45em] text-[#D6A66A]">
                    {translations.home.hero.badge}
                  </p>

                  <h1 className="text-5xl font-extralight leading-[1] tracking-[-0.07em] md:text-7xl lg:text-[92px]">
                    {translations.home.hero.title1}
                    <br />
                    <span className="bg-gradient-to-r from-[#D6A66A] via-[#E7C78A] to-[#8C6BFF] bg-clip-text text-transparent">
                      <span className="bg-gradient-to-r from-[#D6A66A] via-[#E7C78A] to-[#8C6BFF] bg-clip-text text-transparent">{translations.home.hero.title2}</span>
                    </span>
                  </h1>

                  <p className="mt-8 max-w-[760px] text-[18px] leading-9 text-white/66">
                    {translations.home.hero.description}
                  </p>

                  <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <Link href="/demo" className="rounded-2xl bg-gradient-to-r from-[#D6A66A] via-[#E7C78A] to-[#C9974D] px-9 py-4 text-center text-sm font-semibold text-black shadow-[0_0_45px_rgba(214,166,106,0.42)] transition hover:brightness-110">
                      {translations.home.hero.book_demo}
                    </Link>

                    <Link href="/industries" className="rounded-2xl border border-white/15 bg-white/[0.04] px-9 py-4 text-center text-sm font-semibold text-white/80 transition hover:border-[#D6A66A]/40 hover:bg-white/[0.08]">
                      {translations.home.hero.start_setup}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-black/40 px-5 py-3 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.25em] text-[#D6A66A]">
                  One platform. Every department. One intelligence layer.
                </p>
              </div>
            </div>
          </div>
        </section>


        <section className="px-6 py-32">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#D6A66A]">
                {whatIsAvantiqo?.eyebrow}
              </p>
              <h2 className="text-5xl font-extralight leading-tight tracking-[-0.06em] md:text-7xl">
                {whatIsAvantiqo?.title1}
                <br />
                <span className="text-white/42">{whatIsAvantiqo?.title2}</span>
              </h2>
            </div>

            <div className="space-y-7 text-xl leading-10 text-white/64">
              {whatIsAvantiqo?.paragraphs?.map((paragraph, index) => (
                <p
                  key={index}
                  className={index === whatIsAvantiqo.paragraphs.length - 1 ? "text-white/86" : ""}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-32 bg-white/[0.018]">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">

            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#D6A66A]">
                {whyAvantiqo?.eyebrow}
              </p>

              <h2 className="text-5xl font-extralight leading-tight tracking-[-0.06em] md:text-7xl">
                {whyAvantiqo?.title1}
                <br />
                {whyAvantiqo?.title2}
                <br />
                <span className="text-white/50">
                  {whyAvantiqo?.title3}
                </span>
              </h2>

              <div className="mt-10 rounded-[34px] border border-white/10 bg-white/[0.045] p-7 shadow-[0_25px_100px_rgba(0,0,0,0.38)] backdrop-blur-2xl">
                <p className="text-lg leading-9 text-white/72">
                  {whyAvantiqo?.intro}
                </p>
              </div>
            </div>

            <div className="rounded-[46px] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.025] p-8 shadow-[0_35px_140px_rgba(0,0,0,0.5)] backdrop-blur-3xl md:p-10">

              <div className="space-y-6 text-lg leading-9 text-white/66">

                {whyAvantiqo?.paragraphs?.map((paragraph, index) => (
                  <p
                    key={index}
                    className={
                      index >= whyAvantiqo.paragraphs.length - 2
                        ? "text-white/86"
                        : ""
                    }
                  >
                    {paragraph}
                  </p>
                ))}

              </div>
            </div>

          </div>
        </section>

        <section className="px-6 py-32 bg-white/[0.018]">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#D6A66A]">
                {accountingAdvisory?.eyebrow}
              </p>

              <h2 className="text-5xl font-extralight leading-tight tracking-[-0.06em] md:text-7xl">
                {accountingAdvisory?.title1}
                <br />
                {accountingAdvisory?.title2}
              </h2>

              <div className="mt-10 rounded-[34px] border border-white/10 bg-white/[0.045] p-7 shadow-[0_25px_100px_rgba(0,0,0,0.38)] backdrop-blur-2xl">
                <p className="text-lg leading-9 text-white/72">
                  {accountingAdvisory?.intro}
                </p>
              </div>
            </div>

            <div className="rounded-[46px] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.025] p-8 shadow-[0_35px_140px_rgba(0,0,0,0.5)] backdrop-blur-3xl md:p-10">

              <div className="space-y-6 text-lg leading-9 text-white/66">

                {accountingAdvisory?.paragraphs?.map((paragraph, index) => (
                  <p
                    key={index}
                    className={
                      index === accountingAdvisory.paragraphs.length - 1
                        ? "text-white/86"
                        : ""
                    }
                  >
                    {paragraph}
                  </p>
                ))}

              </div>
            </div>
          </div>
        </section>


        {showcaseSections.map((section, index) => (
          <section
            key={section.eyebrow}
            className={`px-6 py-32 ${index % 2 === 0 ? "bg-white/[0.018]" : ""}`}
          >
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#D6A66A]">
                  {section.eyebrow}
                </p>
                <h2 className="text-5xl font-extralight leading-tight tracking-[-0.06em] md:text-7xl">
                  {section.title}
                </h2>

                <div className="mt-10 rounded-[34px] border border-white/10 bg-white/[0.045] p-7 shadow-[0_25px_100px_rgba(0,0,0,0.38)] backdrop-blur-2xl">
                  <p className="text-lg leading-9 text-white/72">{section.intro}</p>
                </div>
              </div>

              <div className="rounded-[46px] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.025] p-8 shadow-[0_35px_140px_rgba(0,0,0,0.5)] backdrop-blur-3xl md:p-10">
                <div className="space-y-6 text-lg leading-9 text-white/66">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-2">
                  {section.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-2xl border border-white/10 bg-black/25 p-5 text-white/78"
                    >
                      <div className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-[#D6A66A] to-[#8C6BFF]" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="px-6 py-32 bg-white/[0.018]">
          <div className="mx-auto max-w-7xl">

            <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#D6A66A]">
              {translations.home.industries.badge}
            </p>

            <h2 className="max-w-5xl text-5xl font-extralight leading-tight tracking-[-0.06em] md:text-7xl">
              {translations.home.industries.title1}
              <br />
              {translations.home.industries.title2}
            </h2>

            <p className="mt-8 max-w-4xl text-xl leading-10 text-white/64">
              {translations.home.industries.description}
            </p>

            <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

              {Object.values(
                translations.home.industries.groups
              ).map((industry) => (
                <div
                  key={industry.title}
                  className="rounded-[32px] border border-white/[0.06] bg-white/[0.025] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)]"
                >
                  <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#D6A66A]">
                    {industry.title}
                  </p>

                  <p className="leading-8 text-white/62">
                    {industry.description}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </section>


        <section className="px-6 py-32">
          <div className="mx-auto max-w-7xl rounded-[46px] border border-[#D6A66A]/20 bg-gradient-to-br from-[#120E08] via-[#060713] to-[#120A1E] p-8 text-center shadow-[0_35px_140px_rgba(214,166,106,0.12)] backdrop-blur-3xl md:p-14">
            <p className="mb-8 text-xs uppercase tracking-[0.42em] text-[#D6A66A]">
              {translations.home.accounting.badge}
            </p>

            <h2 className="mx-auto max-w-5xl text-5xl font-extralight leading-tight tracking-[-0.06em] md:text-7xl">
              {translations.home.accounting.title1}
              <br />
              <span className="bg-gradient-to-r from-[#D6A66A] via-[#E7C78A] to-[#8C6BFF] bg-clip-text text-transparent">
                {translations.home.accounting.title2}
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-10 text-white/64">
              {translations.home.accounting.description}
            </p>

            <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/demo" className="rounded-2xl bg-gradient-to-r from-[#D6A66A] via-[#E7C78A] to-[#C9974D] px-10 py-5 text-sm font-semibold text-black shadow-[0_0_45px_rgba(214,166,106,0.42)] transition hover:brightness-110">
                {translations.home.hero.book_demo}
              </Link>

              <Link href="/industries" className="rounded-2xl border border-white/15 bg-white/[0.05] px-10 py-5 text-sm font-semibold text-white/80 transition hover:border-[#D6A66A]/40 hover:bg-white/[0.1]">
                      {translations.home.hero.start_setup}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
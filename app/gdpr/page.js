"use client";

import SiteTopNav from "@/app/components/SiteTopNav";
import Footer from "@/components/layout/Footer";
import { useTranslation } from "@/app/providers/I18nProvider";

export default function GDPRPage() {
  const { translations } = useTranslation();
  const gdpr = translations.gdpr || {};

  const sections = [
    {
      title: gdpr.section_1_title || "GDPR Is Not A Checkbox",
      text: gdpr.section_1_text || "",
    },

    {
      title: gdpr.section_2_title || "What Information Is Stored",
      text: gdpr.section_2_text || "",
    },

    {
      title: gdpr.section_3_title || "Where Information Is Stored",
      text: gdpr.section_3_text || "",
    },

    {
      title: gdpr.section_4_title || "Who Owns The Data",
      text: gdpr.section_4_text || "",
    },

    {
      title: gdpr.section_5_title || "Who Can Access Information",
      text: gdpr.section_5_text || "",
    },

    {
      title: gdpr.section_6_title || "Right Of Access",
      text: gdpr.section_6_text || "",
    },

    {
      title: gdpr.section_7_title || "Right To Rectification",
      text: gdpr.section_7_text || "",
    },

    {
      title: gdpr.section_8_title || "Right To Erasure",
      text: gdpr.section_8_text || "",
    },

    {
      title: gdpr.section_9_title || "Data Portability",
      text: gdpr.section_9_text || "",
    },

    {
      title: gdpr.section_10_title || "Artificial Intelligence And GDPR",
      text: gdpr.section_10_text || "",
    },

    {
      title: gdpr.section_11_title || "Auditability And Accountability",
      text: gdpr.section_11_text || "",
    },

    {
      title: gdpr.section_12_title || "Privacy, Governance And Compliance",
      text: gdpr.section_12_text || "",
    },

    {
      title: gdpr.section_13_title || "The Future Of Data Protection",
      text: gdpr.section_13_text || "",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#02030A] text-white">
      <SiteTopNav />

      <section className="relative px-6 py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#4A2C12_0%,#15110A_30%,#02030A_100%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="rounded-[46px] border border-[#D6A66A]/20 bg-white/[0.03] p-12 backdrop-blur-3xl md:p-16">

            <div className="mb-6 text-xs uppercase tracking-[0.45em] text-[#D6A66A]">
              GDPR & DATA RIGHTS
            </div>

            <h1 className="max-w-5xl text-6xl font-extralight leading-tight tracking-[-0.06em] md:text-8xl">
              GDPR Is Not
              <br />
              <span className="bg-gradient-to-r from-[#D6A66A] via-[#E7C78A] to-[#F7E7B0] bg-clip-text text-transparent">
                A Checkbox.
              </span>
            </h1>

            <p className="mt-8 max-w-4xl text-xl leading-10 text-white/65">
              GDPR is a continuous responsibility built on visibility,
              accountability, governance, privacy and trust.
            </p>

          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl space-y-10">

          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-[38px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl"
            >
              <h2 className="mb-6 text-4xl font-extralight">
                {section.title}
              </h2>

              <p className="whitespace-pre-line text-lg leading-9 text-white/65">
                {section.text}
              </p>
            </div>
          ))}

          <div className="rounded-[42px] border border-[#D6A66A]/20 bg-gradient-to-br from-[#D6A66A]/10 via-transparent to-transparent p-14 text-center backdrop-blur-3xl">

            <h2 className="text-5xl font-extralight leading-tight">
              Privacy Creates Trust.
              <br />
              Governance Creates Accountability.
              <br />
              GDPR Protects Rights.
            </h2>

            <p className="mx-auto mt-8 max-w-4xl text-xl leading-10 text-white/70">
              Data protection is not a compliance exercise.
              It is a responsibility that exists throughout the lifecycle of information.
            </p>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

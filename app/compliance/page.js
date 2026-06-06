"use client";

import SiteTopNav from "@/app/components/SiteTopNav";
import Footer from "@/components/layout/Footer";
import { useTranslation } from "@/app/providers/I18nProvider";

export default function CompliancePage() {
  const { translations } = useTranslation();
  const compliance = translations.compliance || {};
  const { translations } = useTranslation();
  const compliance = translations.compliance || {};
  const { translations } = useTranslation();
  const compliance = translations.compliance || {};

  const sections = [
    {
      title: compliance.section_1_title || "Compliance Is Not A Project",
      text: compliance.section_1_text || "",
    },

    {
      title: compliance.section_2_title || "Why Compliance Matters",
      text: compliance.section_2_text || "",
    },

    {
      title: compliance.section_3_title || "Operational Compliance",
      text: compliance.section_3_text || "",
    },

    {
      title: compliance.section_4_title || "Financial Compliance",
      text: compliance.section_4_text || "",
    },

    {
      title: compliance.section_5_title || "Data Compliance",
      text: compliance.section_5_text || "",
    },

    {
      title: compliance.section_6_title || "Governance And Compliance",
      text: compliance.section_6_text || "",
    },

    {
      title: compliance.section_7_title || "Audit Readiness",
      text: compliance.section_7_text || "",
    },

    {
      title: compliance.section_8_title || "Continuous Monitoring",
      text: compliance.section_8_text || "",
    },

    {
      title: compliance.section_9_title || "Compliance And Synthetic Intelligence",
      text: compliance.section_9_text || "",
    },

    {
      title: compliance.section_10_title || "Enterprise Accountability",
      text: compliance.section_10_text || "",
    },

    {
      title: compliance.section_11_title || "Regulatory Readiness",
      text: compliance.section_11_text || "",
    },

    {
      title: compliance.section_12_title || "Compliance At Scale",
      text: compliance.section_12_text || "",
    },

    {
      title: compliance.section_13_title || "The Future Of Compliance",
      text: compliance.section_13_text || "",
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
              COMPLIANCE & CONTROL
            </div>

            <h1 className="max-w-5xl text-6xl font-extralight leading-tight tracking-[-0.06em] md:text-8xl">
              Compliance Should Not
              <br />
              <span className="bg-gradient-to-r from-[#D6A66A] via-[#E7C78A] to-[#F7E7B0] bg-clip-text text-transparent">
                Happen Once A Year.
              </span>
            </h1>

            <p className="mt-8 max-w-4xl text-xl leading-10 text-white/65">
              Compliance should happen every day through visibility,
              accountability, governance and operational discipline.
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
              Compliance Creates Confidence.
              <br />
              Confidence Creates Trust.
              <br />
              Trust Creates Resilience.
            </h2>

            <p className="mx-auto mt-8 max-w-4xl text-xl leading-10 text-white/70">
              Compliance is not about passing audits.
              Compliance is about operating responsibly every day.
            </p>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

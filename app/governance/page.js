"use client";

import SiteTopNav from "@/app/components/SiteTopNav";
import Footer from "@/components/layout/Footer";
import { useTranslation } from "@/app/providers/I18nProvider";

export default function GovernancePage() {
  const { translations } = useTranslation();
  const governance = translations.governance || {};

  const sections = [
    {
      title: governance.section_1_title || "Governance Is Not Management",
      text: governance.section_1_text || "",
    },

    {
      title: governance.section_2_title || "Why Governance Matters",
      text: governance.section_2_text || "",
    },

    {
      title: governance.section_3_title || "Governance As A Competitive Advantage",
      text: governance.section_3_text || "",
    },

    {
      title: governance.section_4_title || "Decision Governance",
      text: governance.section_4_text || "",
    },

    {
      title: governance.section_5_title || "Approval Workflows",
      text: governance.section_5_text || "",
    },

    {
      title: governance.section_6_title || "Organizational Accountability",
      text: governance.section_6_text || "",
    },

    {
      title: governance.section_7_title || "Auditability And Transparency",
      text: governance.section_7_text || "",
    },

    {
      title: governance.section_8_title || "Governance Across The Entire Organization",
      text: governance.section_8_text || "",
    },

    {
      title: governance.section_9_title || "Governance And Synthetic Intelligence",
      text: governance.section_9_text || "",
    },

    {
      title: governance.section_10_title || "Role-Based Authority",
      text: governance.section_10_text || "",
    },

    {
      title: governance.section_11_title || "Governance And Risk Management",
      text: governance.section_11_text || "",
    },

    {
      title: governance.section_12_title || "Governance And Compliance",
      text: governance.section_12_text || "",
    },

    {
      title: governance.section_13_title || "Governance And Executive Leadership",
      text: governance.section_13_text || "",
    },

    {
      title: governance.section_14_title || "The Future Of Governance",
      text: governance.section_14_text || "",
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
              {governance.hero_label || "GOVERNANCE & ACCOUNTABILITY"}
            </div>

            <h1 className="max-w-5xl text-6xl font-extralight leading-tight tracking-[-0.06em] md:text-8xl">
              Governance Is Not
              <br />
              <span className="bg-gradient-to-r from-[#D6A66A] via-[#E7C78A] to-[#F7E7B0] bg-clip-text text-transparent">
                Management.
              </span>
            </h1>

            <p className="mt-8 max-w-4xl text-xl leading-10 text-white/65">
              Governance creates accountability.
              Accountability creates trust.
              Trust creates confidence.
              Confidence creates better decisions.
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
              Governance Creates Accountability.
              <br />
              Accountability Creates Trust.
              <br />
              Trust Creates Confidence.
            </h2>

            <p className="mx-auto mt-8 max-w-4xl text-xl leading-10 text-white/70">
              Governance is not where organizations slow down.
              Governance is where organizations gain control.
            </p>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

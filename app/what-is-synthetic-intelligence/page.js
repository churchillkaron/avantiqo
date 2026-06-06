"use client";

import Link from "next/link";
import SiteTopNav from "@/app/components/SiteTopNav";
import Footer from "@/components/layout/Footer";
import { useTranslation } from "@/app/providers/I18nProvider";

export default function SyntheticIntelligencePage() {
  const { translations } = useTranslation();
  const si = translations.synthetic_intelligence || {};

  const sections = [
    {
      title: si.section_1_title || "What is Synthetic Intelligence?",
      description: si.section_1_description || "",
    },
    {
      title: si.section_2_title || "Why It Matters",
      description: si.section_2_description || "",
    },
    {
      title: si.section_3_title || "Key Benefits",
      description: si.section_3_description || "",
    },
    {
      title: si.section_4_title || "Artificial Intelligence vs Synthetic Intelligence",
      description: si.section_4_description || "",
    },
  ];

  return (
    <main className="min-h-screen bg-[#02030A] text-white overflow-hidden">
      <SiteTopNav />

      {/* Hero Section */}
      <section className="relative h-[80vh] px-6">
        <div className="absolute inset-0">
          <img
            src="/images/si-runtime.png"
            alt="Synthetic Intelligence Hero"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="w-full h-full object-cover brightness-[0.45]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl text-center flex flex-col justify-center h-full">
          <h1 className="text-6xl font-extralight mb-6 md:text-7xl">
            {si.hero_title || "Centralized Synthetic Intelligence"}
          </h1>
          <p className="mx-auto max-w-4xl text-white/70 text-lg leading-relaxed">
            {si.hero_subtitle || "Harness the power of Synthetic Intelligence to unify data, predict trends, and make informed decisions faster across your enterprise."}
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/demo"
              className="px-6 py-3 bg-gradient-to-r from-[#D6A66A] to-[#C9974D] rounded font-bold text-black shadow-lg hover:shadow-2xl transition-all"
            >
              {si.request_demo || "Request Demo"}
            </Link>
            <Link
              href="/industries"
              className="px-6 py-3 border border-white/20 rounded hover:bg-white/10"
            >
              {si.explore_industries || "Explore Industries"}
            </Link>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl space-y-16">
          {sections.map((sec) => (
            <div key={sec.title} className="backdrop-blur-2xl bg-white/[0.05] border border-white/10 rounded-3xl p-8 shadow-lg transition hover:shadow-2xl">
              <h2 className="text-3xl font-light mb-6">{sec.title}</h2>
              <p className="text-white/70 text-lg leading-relaxed whitespace-pre-line">{sec.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Patch: Combined SI + AA */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center backdrop-blur-3xl bg-white/[0.03] border border-white/10 rounded-3xl p-10 shadow-[0_0_40px_rgba(214,166,106,0.25)]">
          <h2 className="text-4xl font-extralight mb-6">{si.advanced_title || "Advanced Synthetic Intelligence"}</h2>
          <p className="mx-auto max-w-3xl text-white/70 text-lg leading-relaxed">
            SI (Synthetic Intelligence) enables real-time optimization across finance, operations,
            customer management, and compliance. Combined with Avantiqo Analytics,
            executives gain actionable insights instantly.
          </p>
        </div>
      </section><section className="mx-auto max-w-7xl px-6 py-24">

  <div className="mb-16 text-center">
    <div className="mb-4 text-sm uppercase tracking-[0.4em] text-[#D6A66A]">
      {si.enterprise_label || "Enterprise Intelligence Layer"}
    </div>

    <h2 className="text-6xl font-extralight leading-tight">
      Why Avantiqo Combines
      <br />
      Artificial Intelligence And
      <br />
      Synthetic Intelligence
    </h2>
  </div>

  <div className="grid gap-8 lg:grid-cols-2 mb-16">

    <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl">
      <div className="mb-4 text-[#D6A66A] uppercase tracking-[0.25em] text-sm">
        {si.ai_title || "Artificial Intelligence"}
      </div>

      <h3 className="mb-6 text-3xl font-light">
        {si.ai_subtitle || "Creates Outputs"}
      </h3>

      <div className="space-y-4 text-white/70">
        <p>✓ Reports</p>
        <p>✓ Images</p>
        <p>✓ Marketing Campaigns</p>
        <p>✓ Recommendations</p>
        <p>✓ Content Generation</p>
      </div>
    </div>

    <div className="rounded-[32px] border border-[#D6A66A]/20 bg-gradient-to-b from-[#D6A66A]/10 to-transparent p-10 backdrop-blur-xl">
      <div className="mb-4 text-[#D6A66A] uppercase tracking-[0.25em] text-sm">
        {si.si_title || "Synthetic Intelligence"}
      </div>

      <h3 className="mb-6 text-3xl font-light">
        {si.si_subtitle || "Creates Understanding"}
      </h3>

      <div className="space-y-4 text-white/70">
        <p>✓ Organizational Awareness</p>
        <p>✓ Operational Reality</p>
        <p>✓ Customer Behaviour</p>
        <p>✓ Financial Context</p>
        <p>✓ Future Outcomes</p>
      </div>
    </div>

  </div>

  <div className="rounded-[40px] border border-[#D6A66A]/20 bg-gradient-to-br from-[#D6A66A]/10 via-transparent to-transparent p-14 backdrop-blur-xl">

    <div className="space-y-8 text-lg leading-relaxed text-white/70">

      <p>
        Most software companies are building Artificial Intelligence.
        Avantiqo is building Synthetic Intelligence.
      </p>

      <p>
        Artificial Intelligence and Synthetic Intelligence solve different problems.
      </p>

      <p>
        Artificial Intelligence generates outputs.
        Synthetic Intelligence generates understanding.
      </p>

      <p>
        Artificial Intelligence can write reports.
        Synthetic Intelligence understands why those reports matter.
      </p>

      <p>
        Artificial Intelligence can create marketing campaigns.
        Synthetic Intelligence understands customer behavior, operational performance and financial outcomes that determine whether those campaigns will succeed.
      </p>

      <p>
        Artificial Intelligence can generate recommendations.
        Synthetic Intelligence understands the operational reality of the organization and determines which recommendations are relevant.
      </p>

      <p>
        Individually, both technologies are powerful.
        Together, they create an entirely new operational model.
      </p>

      <div className="my-12 rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center">

        <div className="text-3xl font-extralight mb-4">
          AI Executes. SI Understands.
        </div>

        <p className="text-white/60">
          One creates awareness. One creates execution.
        </p>

        <p className="mt-3 text-white/60">
          One understands what is happening.
          One helps the organization respond.
        </p>

      </div>

      <p>
        Synthetic Intelligence continuously understands the organization.
        Artificial Intelligence continuously acts upon that understanding.
      </p>

      <p>
        This combination allows Avantiqo to move beyond traditional software systems,
        creating a platform that can continuously learn, adapt, recommend and improve
        across every department of the organization.
      </p>

    </div>

  </div>

  <div className="mt-16 rounded-[40px] border border-[#D6A66A]/30 bg-gradient-to-br from-[#D6A66A]/10 via-transparent to-transparent p-16 text-center backdrop-blur-xl">

    <div className="mb-4 text-sm uppercase tracking-[0.4em] text-[#D6A66A]">
      {si.vision_label || "Avantiqo Vision"}
    </div>

    <h3 className="mb-8 text-5xl font-extralight leading-tight">
      {si.vision_title || "The Goal Is Not To Automate Work."}
      <br />
      To Automate Work.
    </h3>

    <div className="mx-auto max-w-4xl text-2xl text-white/80 leading-relaxed">
      {si.vision_text || "The goal is to create organizations that understand themselves."}
    </div>

    <div className="mt-8 text-white/50">
      {si.vision_footer || "That is the future Avantiqo is building."}
    </div>

  </div>

</section>

      <Footer />
    </main>
  );
}
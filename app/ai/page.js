"use client";

import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { useTranslation } from "@/lib/i18n/useTranslation";
import { aiTranslations } from "@/lib/i18n/pages/ai";

export default function AIPage() {
  const { locale } = useTranslation();

  const t = aiTranslations[locale] || aiTranslations.en;

  const aiSections = [
    {
      title: t.documentTitle || "AI DOCUMENT ENGINE",
      description:
        t.documentDescription ||
        "Extract invoices, receipts, contracts, payroll documents and operational paperwork automatically.",
      image: "/images/ai-document-engine.png",
    },
    {
      title: t.analysisTitle || "AI OPERATIONAL ANALYSIS",
      description:
        t.analysisDescription ||
        "Detect operational problems, cost anomalies, delays, payroll risks and performance issues live.",
      image: "/images/ai-operational-analysis.png",
    },
    {
      title: t.marketingTitle || "AI MARKETING ENGINE",
      description:
        t.marketingDescription ||
        "Create campaigns, social media content, promotions and publishing workflows connected to operations.",
      image: "/images/ai-marketing-engine.png",
    },
    {
      title: t.workflowTitle || "AI WORKFLOW AUTOMATION",
      description:
        t.workflowDescription ||
        "Route approvals, automate operational tasks, notify teams and reduce manual coordination.",
      image: "/images/ai-workflow-automation.png",
    },
    {
      title: t.memoryTitle || "AI BUSINESS MEMORY",
      description:
        t.memoryDescription ||
        "The runtime learns how the business operates, improving visibility, workflows and operational intelligence.",
      image: "/images/ai-business-memory.png",
    },
    {
      title: t.assistantTitle || "AI ROLE-BASED ASSISTANTS",
      description:
        t.assistantDescription ||
        "Operational assistants built for accounting, hospitality, construction, procurement and finance.",
      image: "/images/ai-role-assistants.png",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#04050B] text-white">
      <Navbar />

      <section className="relative px-6 py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#241237_0%,#070B16_40%,#02030A_100%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-5 md:p-10 md:gap-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-6 text-xs tracking-[0.35em] text-[#D6A66A]">
              {t.heroLabel || "AI RUNTIME"}
            </p>

            <h1 className="whitespace-pre-line text-4xl md:text-6xl font-light leading-[0.92] tracking-[-0.07em] md:text-5xl md:text-[92px]">
              {t.heroTitle || "AI operational intelligence for modern business."}
            </h1>

            <p className="mt-8 max-w-[700px] text-lg leading-8 text-white/60">
              {t.heroDescription ||
                "AI engines connected to operations, finance, documents, marketing, workflows and live business visibility."}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/demo"
                className="rounded-[20px] bg-gradient-to-r from-[#D6A66A] to-[#8B5CF6] px-8 py-4 text-sm font-medium transition-all duration-500 hover:-translate-y-1"
              >
                {t.demoButton || "Book AI Demo"}
              </Link>

              <Link
                href="/platform"
                className="rounded-[20px] border border-white/10 bg-white/[0.04] px-8 py-4 text-sm text-white/70 transition-all duration-500 hover:border-purple-500/30"
              >
                {t.platformButton || "Explore Platform"}
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[24px] md:rounded-[36px] border border-white/10 bg-[#070B16] shadow-[0_0_60px_rgba(120,80,255,0.08)]">
            <Image
              src="/images/ai-hero.png"
              alt={t.runtimeLabel || "AI Runtime"}
              width={1600}
              height={1000}
              quality={75}
              priority
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 md:p-8 md:grid-cols-2">
            {aiSections.map((section, index) => (
              <div
                key={`ai-section-${index}`}
                className="overflow-hidden rounded-[24px] md:rounded-[36px] border border-white/10 bg-[#070B16] transition-all duration-500 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_0_60px_rgba(120,80,255,0.10)]"
              >
                <Image
                  src={section.image}
                  alt={section.title}
                  width={1400}
                  height={900}
                  quality={75}
                  className="h-auto w-full object-contain"
                />

                <div className="bg-[#070B16] p-5 md:p-10">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#D6A66A] to-purple-500" />

                    <div className="text-xs uppercase tracking-[0.3em] text-white/40">
                      {t.runtimeLabel || "AI Runtime"}
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

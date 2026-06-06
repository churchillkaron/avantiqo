"use client";

import Image from "next/image";
import Link from "next/link";
import SiteTopNav from "@/app/components/SiteTopNav";
import Footer from "@/components/layout/Footer";
import { useTranslation } from "@/app/providers/I18nProvider";

export default function AIRuntimePage() {
  const { translations } = useTranslation();
  const h = translations.home?.aiRuntime || {};

  const sections = [
    {
      title: "Centralized AI Operations",
      description: "Monitor and optimize all business workflows in real time. AI Runtime connects finance, customer management, operations, compliance, marketing, and HR into a single intelligence layer, allowing executives and managers to anticipate bottlenecks before they happen."
    },
    {
      title: "Synthetic Intelligence Insights",
      description: "Leverage AI to predict revenue trends, customer behaviors, operational risks, and staffing needs. Automatically generate actionable recommendations for faster decision-making and improved efficiency."
    },
    {
      title: "Integration & Automation",
      description: "Connect all your business systems — ERP, CRM, POS, HR, and marketing — into a unified platform. AI Runtime automatically ingests data from all sources, normalizes it, and surfaces insights without manual intervention."
    },
    {
      title: "Design & Marketing Studio",
      description: "Generate AI-powered campaigns, presentations, reports, and content. Automatically adapt marketing materials based on analytics, trends, and customer data across channels."
    },
    {
      title: "Operational Visibility & Governance",
      description: "Track every workflow, approval, and operational KPI in real time. AI Runtime alerts executives to anomalies, compliance risks, and inefficiencies, helping companies stay proactive instead of reactive."
    },
  ];

  return (
    <main className="min-h-screen bg-[#02030A] text-white overflow-hidden">
      <SiteTopNav />

      {/* Hero */}
      <section className="relative min-h-screen px-6 py-28">
        <div className="absolute inset-0 bg-[url('/images/ai-runtime-hero.png')] bg-cover bg-center opacity-90" />
        <div className="relative mx-auto max-w-7xl flex flex-col items-start gap-8">
          <div className="rounded-[46px] border border-white/10 bg-white/[0.045] p-10 shadow-[0_35px_140px_rgba(0,0,0,0.55)] backdrop-blur-3xl max-w-3xl">
            <p className="mb-6 text-xs uppercase tracking-[0.45em] text-[#D6A66A]">
              {h.hero?.badge || "AI RUNTIME"}
            </p>
            <h1 className="text-5xl font-extralight leading-tight md:text-7xl">
              {h.hero?.title1 || "Control All Operations in One Intelligent Layer."}
            </h1>
            <p className="mt-6 text-lg text-white/70">
              {h.hero?.description || "AI Runtime enables businesses to centralize monitoring, analysis, and decision-making across all departments in real time."}
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="/demo" className="rounded-2xl bg-gradient-to-r from-[#D6A66A] via-[#E7C78A] to-[#C9974D] px-6 py-3 text-black font-semibold shadow-lg hover:brightness-110 transition-all">
                {h.hero?.primary || "Request Demo"}
              </Link>
              <Link href="/explore" className="rounded-2xl border border-white/15 bg-white/[0.03] px-6 py-3 text-white/80 hover:border-[#D6A66A]/40 hover:bg-white/[0.08] transition-all">
                {h.hero?.secondary || "Explore Platform"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      {sections.map((sec, i) => (
        <section key={i} className="px-6 py-28">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-5xl font-extralight mb-6">{sec.title}</h2>
            <p className="text-lg text-white/70 leading-relaxed">{sec.description}</p>
          </div>
        </section>
      ))}

      <Footer />
    </main>
  );
}

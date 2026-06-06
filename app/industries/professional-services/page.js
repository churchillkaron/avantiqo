"use client";

import Image from "next/image";
import Link from "next/link";
import SiteTopNav from "@/app/components/SiteTopNav";
import Footer from "@/components/layout/Footer";
import { useTranslation } from "@/app/providers/I18nProvider";
import { Users, LineChart, Brain, ClipboardType, Palette } from "lucide-react";

export default function ProfessionalServicesPage() {
  const { t } = useTranslation();

  const sections = [
    {
      title: t("Professional Services Challenges"),
      cards: [
        { title: t("Inefficient Operations"), desc: t("Manual processes and fragmented workflows slow down service delivery."), icon: ClipboardType },
        { title: t("Data Silos"), desc: t("Critical insights are scattered across platforms, limiting decision-making."), icon: LineChart },
        { title: t("Client Experience Gaps"), desc: t("Lack of real-time visibility reduces client satisfaction and retention."), icon: Users },
      ],
    },
    {
      title: t("Synthetic Intelligence for Accounting & Law"),
      cards: [
        { title: t("AI Recommendations"), desc: t("Leverage AI to optimize client workflows, approvals, and reporting."), icon: Brain },
        { title: t("Predictive Analytics"), desc: t("Forecast revenue, risk, and operational bottlenecks with precision."), icon: LineChart },
        { title: t("Automated Decision Making"), desc: t("Streamline internal approvals and compliance using AI-driven insights."), icon: Brain },
        { title: t("Client Behavior Insights"), desc: t("Understand client trends, retention, and engagement patterns."), icon: Users },
        { title: t("Operational KPIs"), desc: t("Track firm-wide performance, staff productivity, and client profitability."), icon: LineChart },
      ],
    },

    {
      title: t("Why Accounting Firms Choose Avantiqo"),
      cards: [
        {
          title: t("Client Profitability Intelligence"),
          desc: t("Know exactly which clients generate profit, consume resources, and require intervention before margins decline."),
          icon: LineChart
        },
        {
          title: t("Practice Performance"),
          desc: t("Monitor utilization, realization rates, WIP, recoverability, and team performance across the entire firm."),
          icon: Users
        },
        {
          title: t("Compliance & Audit Readiness"),
          desc: t("Maintain audit trails, approvals, governance, and compliance controls automatically."),
          icon: ClipboardType
        },
        {
          title: t("Advisory Intelligence"),
          desc: t("Move beyond bookkeeping by identifying opportunities, risks, and recommendations for every client."),
          icon: Brain
        }
      ],
    },

    {
      title: t("Why Agencies & Marketing Firms Choose Avantiqo"),
      cards: [
        {
          title: t("Client Intelligence"),
          desc: t("Track clients, campaigns, communication history, profitability, and growth opportunities from a single platform."),
          icon: Users
        },
        {
          title: t("Campaign Performance Intelligence"),
          desc: t("Measure campaign ROI, client results, team output, and marketing performance in real time."),
          icon: LineChart
        },
        {
          title: t("Synthetic Intelligence"),
          desc: t("Predict campaign success, identify client risks, and uncover new revenue opportunities automatically."),
          icon: Brain
        },
        {
          title: t("Agency Operations"),
          desc: t("Manage projects, deliverables, approvals, resources, and reporting without operational blind spots."),
          icon: ClipboardType
        }
      ],
    },

    {
      title: t("Why Consulting & Advisory Firms Choose Avantiqo"),
      cards: [
        {
          title: t("Engagement Intelligence"),
          desc: t("Monitor project profitability, utilization, client outcomes, and advisory performance across the entire firm."),
          icon: LineChart
        },
        {
          title: t("Knowledge Intelligence"),
          desc: t("Transform methodologies, frameworks, reports, and historical engagements into reusable institutional knowledge."),
          icon: Brain
        },
        {
          title: t("Client Portfolio Intelligence"),
          desc: t("Understand client value, growth potential, engagement health, and strategic opportunities."),
          icon: Users
        },
        {
          title: t("Strategic Decision Support"),
          desc: t("Use synthetic intelligence to identify risks, capacity constraints, growth opportunities, and operational improvements."),
          icon: ClipboardType
        }
      ],
    },


    {
      title: t("Why Law Firms Choose Avantiqo"),
      cards: [
        {
          title: t("Matter Intelligence"),
          desc: t("Track profitability, workload, deadlines, and performance across all matters and cases."),
          icon: ClipboardType
        },
        {
          title: t("Knowledge Intelligence"),
          desc: t("Turn previous work, documents, contracts, and case history into searchable institutional knowledge."),
          icon: Brain
        },
        {
          title: t("Client Relationship Intelligence"),
          desc: t("Understand client activity, engagement, growth potential, and risk across the firm."),
          icon: Users
        },
        {
          title: t("Strategic Decision Support"),
          desc: t("Use synthetic intelligence to identify workload bottlenecks, staffing risks, and growth opportunities."),
          icon: LineChart
        }
      ],
    },
    {
      title: t("Professional Services Operating System"),
      cards: [
        { title: t("Client Intelligence"), desc: t("Manage relationships, opportunities, and client health across accounting and law portfolios."), icon: Users },
        { title: t("Project Intelligence"), desc: t("Track audits, cases, engagements, and matters with real-time insights."), icon: ClipboardType },
        { title: t("Resource Intelligence"), desc: t("Monitor staff utilization, capacity, and profitability per client/project."), icon: Users },
        { title: t("Financial Intelligence"), desc: t("WIP, billing, revenue, and profit insights across all clients."), icon: LineChart },
        { title: t("Compliance Intelligence"), desc: t("Audit trail, governance, and risk management baked into every workflow."), icon: LineChart },
        { title: t("Design Studio"), desc: t("Generate professional reports, presentations, and client deliverables."), icon: Palette },
        { title: t("Business Intelligence"), desc: t("Firm KPIs, growth, benchmarking, and forecasting at a glance."), icon: LineChart },
      ],
    },
    {
      title: t("Professional Services Without Blind Spots"),
      cards: [
        { title: t("End-to-End Visibility"), desc: t("Full transparency across clients, projects, and teams for accounting and law firms."), icon: LineChart },
        { title: t("AI-Powered Recommendations"), desc: t("Get actionable insights to make strategic, profitable decisions."), icon: Brain },
        { title: t("Integrated Systems"), desc: t("Connect CRM, ERP, project management, and financial systems seamlessly."), icon: ClipboardType },
      ],
    },
  ];

  return (
    <>
      <SiteTopNav />

      {/* Hero */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6">
        <Image
          src="/images/professional-services-hero.png"
          alt="Professional Services Hero"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="z-10 max-w-5xl bg-white/5 backdrop-blur-3xl p-12 rounded-3xl shadow-lg">
          <h1 className="text-6xl md:text-7xl font-light mb-6">
            {t("Professional Services Powered by Synthetic Intelligence")}
          </h1>
          <p className="text-lg text-white/80 mb-8">
            {t("Turn expertise into actionable intelligence for accounting firms, law firms, and advisory businesses. Control clients, projects, compliance, and financial performance from a single platform.")}
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/demo" className="bg-gradient-to-r from-[#D6A66A] via-[#E7C78A] to-[#C9974D] text-black px-6 py-3 rounded-lg font-semibold shadow-[0_0_30px_rgba(214,166,106,0.35)] hover:brightness-105 transition-all">
              {t("Book Demo")}
            </Link>
            <Link href="/explore" className="border border-white/30 px-6 py-3 rounded-lg hover:bg-white/10 font-semibold">
              {t("Explore Platform")}
            </Link>
          </div>
        </div>
      </section>

      {/* Sections */}
      {sections.map((section, i) => (
        <section key={i} className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12">{section.title}</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {section.cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div key={idx} className="w-full sm:w-[300px] md:w-[320px] bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all flex flex-col items-center text-center shadow-lg">
                  <Icon className="w-8 h-8 mb-3 text-[#D6A66A]" />
                  <h3 className="font-semibold text-xl mb-2">{card.title}</h3>
                  <p className="text-white/70">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </section>
      ))}

      {/* Final CTA Section */}
      <section className="bg-black/20 py-24 text-center">
        <h2 className="text-5xl font-light mb-6">{t("Operate. Control. Advise. Deliver.")}</h2>
        <p className="max-w-3xl mx-auto mb-12 text-lg text-white/70 leading-relaxed">
          {t("Avantiqo connects client management, projects, compliance, finance, and synthetic intelligence into one operating system for professional services businesses.")}
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/demo" className="bg-gradient-to-r from-[#D6A66A] via-[#E7C78A] to-[#C9974D] text-black px-8 py-4 rounded-2xl font-semibold shadow-[0_0_40px_rgba(214,166,106,0.4)] hover:brightness-105 transition-all">
            {t("Book Demo")}
          </Link>
          <Link href="/explore" className="border border-white/30 px-8 py-4 rounded-2xl hover:bg-white/10 font-semibold">
            {t("Explore Platform")}
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

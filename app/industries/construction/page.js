"use client";

import Image from "next/image";
import Link from "next/link";
import SiteTopNav from "@/app/components/SiteTopNav";
import Footer from "@/components/layout/Footer";
import { useTranslation } from "@/app/providers/I18nProvider";

export default function ConstructionIndustryPage() {
  const { translations } = useTranslation();
  const h = translations.home?.construction || {};

  
  const flow = [
    h.flow_step_1,
    h.flow_step_2,
    h.flow_step_3,
    h.flow_step_4,
    h.flow_step_5,
    h.flow_step_6,
    h.flow_step_7,
    h.flow_step_8,
    h.flow_step_9,
    h.flow_step_10,
    h.flow_step_11,
    h.flow_step_12,
    h.flow_step_13,
    h.flow_step_14,
    h.flow_step_15,
    h.flow_step_16,
  ];

  const whyCards = [
    {
      title: h.why_1_title,
      text: h.why_1_text,
    },
    {
      title: h.why_2_title,
      text: h.why_2_text,
    },
    {
      title: h.why_3_title,
      text: h.why_3_text,
    },
    {
      title: h.why_4_title,
      text: h.why_4_text,
    },
  ];

  const differenceCards = [
    {
      title: h.difference_1_title,
      text: h.difference_1_text,
    },
    {
      title: h.difference_2_title,
      text: h.difference_2_text,
    },
    {
      title: h.difference_3_title,
      text: h.difference_3_text,
    },
    {
      title: h.difference_4_title,
      text: h.difference_4_text,
    },
  ];

  const syntheticCards = [
    {
      title: h.si_1_title,
      text: h.si_1_text,
    },
    {
      title: h.si_2_title,
      text: h.si_2_text,
    },
    {
      title: h.si_3_title,
      text: h.si_3_text,
    },
    {
      title: h.si_4_title,
      text: h.si_4_text,
    },
  ];


  const marketingItems = [
    h.marketing_item_1,
    h.marketing_item_2,
    h.marketing_item_3,
    h.marketing_item_4,
    h.marketing_item_5,
    h.marketing_item_6,
    h.marketing_item_7,
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#03050B] text-white">
      <SiteTopNav />

      <section className="relative min-h-screen px-6 py-28">
        <div className="absolute inset-0 bg-[url(/images/construction-hero.png)] bg-cover bg-center brightness-90" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,5,11,0.55)_0%,rgba(3,5,11,0.85)_60%,rgba(3,5,11,1)_100%)]" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center">
          <div className="max-w-4xl rounded-[46px] border border-white/10 bg-black/30 p-8 shadow-[0_35px_140px_rgba(0,0,0,0.65)] backdrop-blur-3xl md:p-12">
            <p className="mb-7 text-xs uppercase tracking-[0.45em] text-[#D6A66A]">CONSTRUCTION OPERATIONS</p>
            <h1 className="text-5xl font-extralight leading-[1] tracking-[-0.06em] md:text-6xl lg:text-[72px]">
              Control Every Project Before<br />
              <span className="bg-gradient-to-r from-[#D6A66A] via-[#E7C78A] to-[#8C6BFF] bg-clip-text text-transparent">Delays Become Losses.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-[18px] leading-8 text-white/62">
              Construction companies do not lose money because they lack work. They lose money because they lose control. Avantiqo connects projects, quotations, procurement, workforce, site reporting, invoices, clients, marketing and synthetic intelligence into one construction operating system.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/demo" className="rounded-2xl bg-gradient-to-r from-[#D6A66A] via-[#E7C78A] to-[#C9974D] px-9 py-4 text-center font-semibold text-black shadow-[0_0_45px_rgba(214,166,106,0.42)] transition hover:brightness-110">Book Demo</Link>
              <Link href="/workspace" className="rounded-2xl border border-white/15 bg-white/[0.04] px-9 py-4 text-center font-semibold text-white/80 transition hover:border-[#D6A66A]/40 hover:bg-white/[0.08]">Explore Platform</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#D6A66A]">
              The Reality
            </p>
            <h2 className="text-5xl font-extralight leading-tight tracking-[-0.06em] md:text-7xl">
              Construction companies are losing money every day.
            </h2>
          </div>
          <div className="space-y-7 text-xl leading-10 text-white/62">
            <p>
              Most construction problems do not appear suddenly. They build slowly through delayed site reports, unclear subcontractor responsibility, procurement mistakes, missing approvals, budget drift and weak communication between site and office.
            </p>
            <p>
              By the time a delay reaches management, the schedule has often already slipped. By the time a cost overrun appears in accounting, the margin may already be gone. By the time the client asks for a report, the reality on site has already changed.
            </p>
            <p className="text-white/86">
              Avantiqo gives construction companies live operational visibility so management can act before the project becomes expensive.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-5xl">
            <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#D6A66A]">
              Why Construction Companies Choose Avantiqo
            </p>
            <h2 className="text-5xl font-extralight leading-tight tracking-[-0.06em] md:text-7xl">
              Avantiqo is built for control, not just project tracking.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[34px] border border-white/10 bg-gradient-to-br from-white/[0.075] to-white/[0.025] p-7 shadow-[0_25px_100px_rgba(0,0,0,0.38)] backdrop-blur-2xl"
              >
                <div className="mb-6 h-1 w-14 rounded-full bg-gradient-to-r from-[#D6A66A] to-[#8C6BFF]" />
                <h3 className="text-2xl font-light tracking-[-0.04em]">{card.title}</h3>
                <p className="mt-5 leading-8 text-white/60">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl rounded-[46px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_35px_140px_rgba(0,0,0,0.5)] backdrop-blur-3xl md:p-12">
          <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#D6A66A]">
            From Lead To Completed Project
          </p>
          <h2 className="max-w-5xl text-5xl font-extralight leading-tight tracking-[-0.06em] md:text-7xl">
            One system. Every step.
          </h2>
          <p className="mt-8 max-w-4xl text-xl leading-10 text-white/62">
            Construction companies normally operate with disconnected systems. Sales manages leads, project teams manage execution, procurement uses spreadsheets, accounting manages invoices and marketing works separately. Avantiqo connects the full lifecycle into one operational flow.
          </p>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
            {flow.map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-black/25 px-4 py-4 text-center text-sm text-white/75"
              >
                <span className="mb-2 block text-xs text-[#D6A66A]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <div className="rounded-[40px] border border-white/10 bg-white/[0.045] p-8 shadow-[0_30px_120px_rgba(0,0,0,0.4)] backdrop-blur-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[#D6A66A]">Client Portal</p>
            <h3 className="mt-5 text-4xl font-light tracking-[-0.05em]">Eliminate endless status meetings.</h3>
            <p className="mt-6 text-lg leading-9 text-white/62">
              Clients can follow progress, approvals, milestones, photos, invoices, change requests and project status in real time. Instead of phone calls, emails and manual reports, the client sees a controlled version of the project from one secure portal.
            </p>
          </div>

          <div className="rounded-[40px] border border-white/10 bg-white/[0.045] p-8 shadow-[0_30px_120px_rgba(0,0,0,0.4)] backdrop-blur-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[#D6A66A]">Contractor Portal</p>
            <h3 className="mt-5 text-4xl font-light tracking-[-0.05em]">Make subcontractor work visible.</h3>
            <p className="mt-6 text-lg leading-9 text-white/62">
              Subcontractors can submit attendance, site updates, documents, photo evidence and completion reports directly from site. Every milestone becomes measurable, every claim becomes auditable and every responsibility becomes visible.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <div className="rounded-[38px] border border-white/10 bg-white/[0.045] p-8 backdrop-blur-2xl">
            <h3 className="text-4xl font-extralight tracking-[-0.06em]">Workforce, payroll & site operations</h3>
            <p className="mt-6 text-lg leading-9 text-white/62">
              Construction companies often manage hundreds of workers across multiple sites. Avantiqo connects attendance, scheduling, task responsibility, payroll approval, contractor oversight and labor cost to the project itself.
            </p>
          </div>

          <div className="rounded-[38px] border border-white/10 bg-white/[0.045] p-8 backdrop-blur-2xl">
            <h3 className="text-4xl font-extralight tracking-[-0.06em]">Procurement, inventory & equipment</h3>
            <p className="mt-6 text-lg leading-9 text-white/62">
              Materials and equipment can destroy margins when visibility is weak. Avantiqo connects purchase requests, supplier orders, inventory, warehouses, deliveries, equipment and project allocation into one procurement engine.
            </p>
          </div>

          <div className="rounded-[38px] border border-white/10 bg-white/[0.045] p-8 backdrop-blur-2xl">
            <h3 className="text-4xl font-extralight tracking-[-0.06em]">Quotations, invoices & billing</h3>
            <p className="mt-6 text-lg leading-9 text-white/62">
              From quotation to progress billing and final invoice, financial activity stays connected to the project. Owners see estimated cost, committed cost, actual cost and billing status in the same operating model.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-5xl">
            <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#D6A66A]">
              Why Avantiqo Is Different
            </p>
            <h2 className="text-5xl font-extralight leading-tight tracking-[-0.06em] md:text-7xl">
              Not another construction tool. A construction operating system.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {differenceCards.map((card) => (
              <div key={card.title} className="rounded-[34px] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-2xl">
                <h3 className="text-2xl font-light tracking-[-0.04em]">{card.title}</h3>
                <p className="mt-5 leading-8 text-white/60">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl rounded-[46px] border border-purple-400/20 bg-gradient-to-br from-[#0B1020] via-[#070A12] to-[#140B1F] p-8 shadow-[0_35px_140px_rgba(0,0,0,0.5)] backdrop-blur-3xl md:p-12">
          <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#D6A66A]">
            Synthetic Intelligence For Construction
          </p>
          <h2 className="max-w-5xl text-5xl font-extralight leading-tight tracking-[-0.06em] md:text-7xl">
            More than AI. A decision layer for the construction company.
          </h2>
          <p className="mt-8 max-w-4xl text-xl leading-10 text-white/62">
            Synthetic intelligence is not just content generation. It means the platform continuously analyzes schedules, procurement, labor, suppliers, budgets, project history and operational risk to recommend what should happen next.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {syntheticCards.map((card) => (
              <div key={card.title} className="rounded-[30px] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-2xl">
                <h3 className="text-2xl font-light tracking-[-0.04em]">{card.title}</h3>
                <p className="mt-5 leading-8 text-white/62">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#D6A66A]">
              Design Studio & Marketing Automation
            </p>
            <h2 className="text-5xl font-extralight leading-tight tracking-[-0.06em] md:text-7xl">
              Turn completed projects into new business.
            </h2>
            <p className="mt-8 text-xl leading-10 text-white/62">
              Most construction companies finish projects and then fail to turn that work into growth. Avantiqo can transform completed projects, photos, reports and project data into marketing assets that help win future clients.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {marketingItems.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-5 text-white/78 backdrop-blur-2xl">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#D6A66A]">
              The Future Construction Company
            </p>
            <h2 className="text-5xl font-extralight leading-tight tracking-[-0.06em] md:text-7xl">
              Less chaos. More control. Better margins.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[34px] border border-red-400/15 bg-red-500/[0.035] p-7">
              <h3 className="text-3xl font-light">Before Avantiqo</h3>
              <div className="mt-6 space-y-3 text-white/62">
                <p>Disconnected systems and spreadsheets.</p>
                <p>Delayed reports and outdated information.</p>
                <p>Budget overruns discovered too late.</p>
                <p>Reactive decisions and lost margin.</p>
              </div>
            </div>

            <div className="rounded-[34px] border border-emerald-400/15 bg-emerald-500/[0.035] p-7">
              <h3 className="text-3xl font-light">After Avantiqo</h3>
              <div className="mt-6 space-y-3 text-white/62">
                <p>Live visibility across all projects.</p>
                <p>Predict problems before they happen.</p>
                <p>Complete control of costs and cash flow.</p>
                <p>Higher margins and faster delivery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-28 text-center">
        <div className="mx-auto max-w-5xl">
          <p className="mb-8 text-xs uppercase tracking-[0.42em] text-[#D6A66A]">
            Construction Without Blind Spots
          </p>
          <h2 className="text-5xl font-extralight leading-tight tracking-[-0.06em] md:text-7xl">
            Run the construction company from one operating system.
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-xl leading-10 text-white/62">
            Connect projects, procurement, workforce, finance, reporting, client visibility, marketing and synthetic intelligence into one construction operating system.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/demo"
              className="rounded-2xl bg-gradient-to-r from-[#D6A66A] via-[#E7C78A] to-[#C9974D] px-10 py-5 text-sm font-semibold text-black shadow-[0_0_45px_rgba(214,166,106,0.42)] transition hover:brightness-110"
            >
              Book Demo
            </Link>
            <Link
              href="/workspace"
              className="rounded-2xl border border-white/15 bg-white/[0.05] px-10 py-5 text-sm font-semibold text-white/80 transition hover:border-[#D6A66A]/40 hover:bg-white/[0.1]"
            >
              Explore Platform
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

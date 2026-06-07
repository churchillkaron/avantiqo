"use client";

import Image from "next/image";
import Link from "next/link";
import SiteTopNav from "@/app/components/SiteTopNav";
import Footer from "@/components/layout/Footer";
import { useTranslation } from "@/app/providers/I18nProvider";

export default function AccountingIndustryPage() {
  const { translations } = useTranslation();
  const a = translations.home?.accountingFirms || {};

  const challenges = a.challenges || [];

  const whyCards = a.whyCards || [];

  const operatingSystem = a.operatingSystem || [];

  const intelligence = a.intelligence || [];

  const roi = a.roi || [];

  const runtimeMetrics = a.runtimeMetrics || [];

  return (
    <main className="min-h-screen overflow-hidden bg-[#03050B] text-white">
      <SiteTopNav />

      <section className="relative min-h-screen px-6 py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,166,106,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(20,54,77,0.35),transparent_36%),linear-gradient(180deg,#050712_0%,#02030A_100%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[42px] border border-white/10 bg-white/[0.045] p-8 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-3xl md:p-12">
            <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#D6A66A]">
              {a.hero?.badge || "Accounting Firms"}
            </p>
            <h1 className="max-w-5xl text-5xl font-extralight leading-[0.98] tracking-[-0.07em] md:text-7xl lg:text-[86px]">
              Accounting Firms Powered by Synthetic Intelligence
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-9 text-white/62">
              Avantiqo helps accounting firms move from bookkeeping and fragmented workflows into a controlled operating system for clients, compliance, advisory, profitability, governance and firm-wide decision making.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/demo"
                className="rounded-2xl bg-gradient-to-r from-[#D6A66A] via-[#E7C78A] to-[#C9974D] px-8 py-4 text-center font-semibold text-black shadow-[0_0_45px_rgba(214,166,106,0.42)] transition hover:brightness-110"
              >
                Book Demo
              </Link>
              <Link
                href="/workspace"
                className="rounded-2xl border border-white/15 bg-white/[0.03] px-8 py-4 text-center font-semibold text-white/78 transition hover:border-[#D6A66A]/40 hover:bg-white/[0.06]"
              >
                Explore Platform
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[42px] border border-white/10 bg-white/[0.035] p-3 shadow-[0_30px_120px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
            <Image
              src="/images/accounting-enterprise-hero.png"
              alt="Accounting firm intelligence platform"
              width={1600}
              height={1000}
              priority
              className="h-[640px] w-full rounded-[32px] object-cover opacity-90"
            />
            <div className="absolute inset-3 rounded-[32px] bg-gradient-to-t from-[#03050B]/85 via-[#03050B]/15 to-transparent" />
            <div className="absolute bottom-10 left-10 right-10 rounded-3xl border border-white/10 bg-black/35 p-6 backdrop-blur-2xl">
              <p className="text-xs uppercase tracking-[0.3em] text-[#D6A66A]">
                Live Firm Runtime
              </p>
              <p className="mt-3 text-2xl font-light">
                Client risk, WIP, compliance, advisory opportunities and profitability connected in one view.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <p className="mb-5 text-xs uppercase tracking-[0.42em] text-[#D6A66A]">
              The Problem
            </p>
            <h2 className="text-5xl font-extralight tracking-[-0.06em] md:text-7xl">
              Traditional Accounting Software Does Not Run the Firm
            </h2>
            <p className="mt-6 text-lg leading-9 text-white/55">
              Accounting firms do not only need ledgers. They need client intelligence, workflow control, compliance visibility, partner dashboards and synthetic intelligence that helps the firm act before problems become expensive.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {challenges.map((card) => (
              <div key={card.title} className="rounded-[32px] border border-white/10 bg-white/[0.045] p-7 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
                <h3 className="text-2xl font-light tracking-[-0.04em]">{card.title}</h3>
                <p className="mt-5 leading-8 text-white/58">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[40px] border border-red-400/15 bg-red-500/[0.035] p-3 backdrop-blur-2xl">
              <Image
                src="/images/accounting-before-chaos.png"
                alt="Accounting firm before Avantiqo"
                width={1200}
                height={800}
                className="h-[420px] w-full rounded-[30px] object-cover"
              />
              <div className="p-7">
                <p className="mb-4 text-xs uppercase tracking-[0.32em] text-red-300">Before</p>
                <h3 className="text-4xl font-extralight tracking-[-0.05em]">Reactive, fragmented and partner-dependent</h3>
                <div className="mt-6 space-y-3 text-white/62">
                  <p>Manual follow-ups across clients and teams.</p>
                  <p>Limited visibility into true client profitability.</p>
                  <p>Compliance risk hidden until deadlines are close.</p>
                  <p>Advisory work depends on individual partner memory.</p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[40px] border border-emerald-400/15 bg-emerald-500/[0.035] p-3 backdrop-blur-2xl">
              <Image
                src="/images/accounting-after-control.png"
                alt="Accounting firm after Avantiqo"
                width={1200}
                height={800}
                className="h-[420px] w-full rounded-[30px] object-cover"
              />
              <div className="p-7">
                <p className="mb-4 text-xs uppercase tracking-[0.32em] text-emerald-300">After</p>
                <h3 className="text-4xl font-extralight tracking-[-0.05em]">Controlled, intelligent and scalable</h3>
                <div className="mt-6 space-y-3 text-white/62">
                  <p>Client status, compliance and exceptions visible in real time.</p>
                  <p>Partners see profitability, workload and advisory opportunities.</p>
                  <p>Synthetic intelligence recommends what needs attention.</p>
                  <p>The firm grows without losing governance and control.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <p className="mb-5 text-xs uppercase tracking-[0.42em] text-[#D6A66A]">
              Why Avantiqo
            </p>
            <h2 className="text-5xl font-extralight tracking-[-0.06em] md:text-7xl">
              Why Accounting Firms Choose Avantiqo
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyCards.map((card) => (
              <div key={card.title} className="rounded-[34px] border border-white/10 bg-gradient-to-br from-white/[0.075] to-white/[0.025] p-7 shadow-[0_25px_90px_rgba(0,0,0,0.38)] backdrop-blur-2xl">
                <div className="mb-6 h-1 w-14 rounded-full bg-gradient-to-r from-[#D6A66A] to-[#14364D]" />
                <h3 className="text-2xl font-light tracking-[-0.04em]">{card.title}</h3>
                <p className="mt-5 leading-8 text-white/58">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <p className="mb-5 text-xs uppercase tracking-[0.42em] text-[#D6A66A]">
              Accounting Operating System
            </p>
            <h2 className="max-w-5xl text-5xl font-extralight tracking-[-0.06em] md:text-7xl">
              One Platform for the Whole Firm
            </h2>
            <p className="mt-7 max-w-3xl text-lg leading-9 text-white/55">
              Avantiqo connects client work, financial control, document readiness, partner visibility and synthetic intelligence so the firm operates as one system instead of many disconnected tools.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {operatingSystem.map((card) => (
              <div key={card.title} className="rounded-[34px] border border-white/10 bg-white/[0.045] p-8 shadow-[0_20px_85px_rgba(0,0,0,0.34)] backdrop-blur-2xl">
                <h3 className="text-3xl font-extralight tracking-[-0.05em]">{card.title}</h3>
                <p className="mt-5 leading-8 text-white/58">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl rounded-[46px] border border-purple-400/20 bg-gradient-to-br from-[#0B1020] via-[#070A12] to-[#120A18] p-8 shadow-[0_35px_140px_rgba(0,0,0,0.5)] backdrop-blur-3xl md:p-12">
          <div className="mb-14">
            <p className="mb-5 text-xs uppercase tracking-[0.42em] text-[#D6A66A]">
              Synthetic Intelligence
            </p>
            <h2 className="max-w-5xl text-5xl font-extralight tracking-[-0.06em] md:text-7xl">
              Not a Chatbot. A Decision Layer for the Accounting Firm.
            </h2>
            <p className="mt-7 max-w-4xl text-lg leading-9 text-white/58">
              Avantiqo synthetic intelligence understands clients, documents, deadlines, financial signals, approval flows, team workload and firm performance. It does not only answer questions. It recommends what the firm should do next.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {intelligence.map((card) => (
              <div key={card.title} className="rounded-[30px] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-2xl">
                <h3 className="text-2xl font-light tracking-[-0.04em]">{card.title}</h3>
                <p className="mt-4 leading-8 text-white/58">{card.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[32px] border border-white/10 bg-black/25 p-7">
            <p className="text-xs uppercase tracking-[0.3em] text-[#D6A66A]">Example Insight</p>
            <p className="mt-4 text-2xl font-light leading-relaxed text-white/85">
              Client ABC has incomplete payroll documents, a filing deadline in 6 days, declining cash flow and a high probability of requiring partner intervention. Recommended action: assign senior review today and prepare advisory cash-flow summary.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <p className="mb-5 text-xs uppercase tracking-[0.42em] text-[#D6A66A]">
              Partner Runtime
            </p>
            <h2 className="max-w-5xl text-5xl font-extralight tracking-[-0.06em] md:text-7xl">
              Live Visibility for Partners and Managers
            </h2>
          </div>

          <div className="rounded-[46px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_30px_130px_rgba(0,0,0,0.45)] backdrop-blur-3xl md:p-12">
            <div className="grid gap-4 md:grid-cols-4">
              {runtimeMetrics.map(([label, value]) => (
                <div key={label} className="rounded-[26px] border border-white/10 bg-black/20 p-6">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/42">{label}</p>
                  <p className="mt-4 text-4xl font-extralight text-white">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-[32px] border border-white/10 bg-black/20 p-7">
                <p className="text-xs uppercase tracking-[0.25em] text-[#D6A66A]">Firm Control</p>
                <h3 className="mt-4 text-3xl font-extralight tracking-[-0.05em]">From operational activity to financial consequence</h3>
                <p className="mt-5 leading-8 text-white/58">
                  Every client task, approval, exception and accounting workflow can be connected to the financial health of the firm. Partners see where work is stuck, where margin is at risk and where the next advisory opportunity exists.
                </p>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-black/20 p-7">
                <p className="text-xs uppercase tracking-[0.25em] text-[#D6A66A]">Governance</p>
                <h3 className="mt-4 text-3xl font-extralight tracking-[-0.05em]">Audit-ready by design</h3>
                <p className="mt-5 leading-8 text-white/58">
                  Avantiqo gives accounting firms structure around approvals, accountability, documentation, compliance checkpoints and management review so the practice can scale with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-5 text-xs uppercase tracking-[0.42em] text-[#D6A66A]">
              Business Case
            </p>
            <h2 className="text-5xl font-extralight tracking-[-0.06em] md:text-7xl">
              Built to Increase Firm Value
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {roi.map((card) => (
              <div key={card.title} className="rounded-[36px] border border-white/10 bg-white/[0.045] p-8 shadow-[0_24px_100px_rgba(0,0,0,0.38)] backdrop-blur-2xl">
                <p className="mb-4 text-xs uppercase tracking-[0.26em] text-emerald-300">{card.label}</p>
                <h3 className="text-4xl font-extralight tracking-[-0.06em]">{card.title}</h3>
                <p className="mt-5 text-lg leading-9 text-white/58">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#D6A66A]">
            Accounting Without Blind Spots
          </p>
          <h2 className="text-5xl font-extralight tracking-[-0.06em] md:text-7xl">
            Turn Your Accounting Firm Into an Intelligent Advisory Business
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/58">
            Avantiqo is built for accounting firms that want more than bookkeeping software. It gives the firm control over clients, work, compliance, profitability and advisory growth through one synthetic intelligence operating system.
          </p>
          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/demo"
              className="rounded-2xl bg-gradient-to-r from-[#D6A66A] via-[#E7C78A] to-[#C9974D] px-9 py-4 font-semibold text-black shadow-[0_0_45px_rgba(214,166,106,0.42)] transition hover:brightness-110"
            >
              Book Demo
            </Link>
            <Link
              href="/professional-services"
              className="rounded-2xl border border-white/15 bg-white/[0.03] px-9 py-4 font-semibold text-white/78 transition hover:border-[#D6A66A]/40 hover:bg-white/[0.06]"
            >
              Explore Professional Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";




const enterpriseCards = [
  {
    title: "Role-Based Permissions",
    description:
      "Every accountant only sees assigned companies, approvals and operational areas.",
  },
  {
    title: "Full Audit Trail",
    description:
      "Every approval, document upload and operational action tracked automatically.",
  },
  {
    title: "Approval Accountability",
    description:
      "Know exactly who approved what, when and from which operational workflow.",
  },
  {
    title: "Multi-Company Runtime",
    description:
      "Manage multiple companies, branches and operational entities from one connected system.",
  },
  {
    title: "Searchable Operational History",
    description:
      "Find invoices, approvals, payroll activity and operational changes instantly.",
  },
  {
    title: "Live Operational Monitoring",
    description:
      "Identify financial and operational issues before they become month-end surprises.",
  },
];

const advisorCards = [
  {
    label: "Advisory",
    title: "Become a Live Business Advisor",
    description:
      "Move from reactive bookkeeping to proactive operational guidance with live client revenue, payroll, procurement and approval visibility.",
    items: [
      "Spot revenue drops early",
      "Monitor payroll pressure",
      "Track procurement issues",
      "Advise clients before month-end",
    ],
  },
  {
    label: "Trust",
    title: "Increase Owner Confidence",
    description:
      "Give business owners transparent access to approvals, documents, expenses and financial activity so trust increases between client and accountant.",
    items: [
      "Live owner visibility",
      "Connected approvals",
      "Searchable documents",
      "Clear responsibility tracking",
    ],
  },
  {
    label: "Risk",
    title: "Reduce Leakage & Mistakes",
    description:
      "See unusual activity, missing invoices, delayed approvals and operational cost problems before they become month-end surprises.",
    items: [
      "Expense visibility",
      "Audit history",
      "Approval controls",
      "Operational anomaly alerts",
    ],
  },
];

const roiCards = [
  {
    label: "Growth",
    title: "Handle More Clients",
    description:
      "Reduce manual accounting workload by connecting invoices, payroll, procurement, approvals and operational activity into one live runtime.",
    items: [
      "AI-assisted invoice extraction",
      "Faster month-end closing",
      "Less manual bookkeeping",
      "More clients without more paperwork",
    ],
  },
  {
    label: "Visibility",
    title: "Discover Problems Earlier",
    description:
      "Monitor client operations in real time instead of waiting for documents and reports at the end of the month.",
    items: [
      "Live revenue visibility",
      "Payroll and procurement tracking",
      "Approval monitoring",
      "Full operational audit trail",
    ],
  },
];

const features = [
  {
    title: "LIVE FINANCIAL VISIBILITY",
    description:
      "Monitor revenue, payroll, procurement, approvals and operational costs in real time across all clients.",
    image: "/images/accounting-live-control.png",
  },
  {
    title: "AI DOCUMENT EXTRACTION",
    description:
      "Invoices, receipts and paperwork automatically extracted and organized into the financial workflow.",
    image: "/images/documents-flow.png",
  },
  {
    title: "MULTI-COMPANY CONTROL",
    description:
      "Accounting firms manage multiple businesses from one connected operational runtime.",
    image: "/images/accounting-multi-company.png",
  },
  {
    title: "LIVE APPROVALS & AUDIT",
    description:
      "Every approval, document and operational change tracked with full audit visibility.",
    image: "/images/accounting-approval-runtime.png",
  },
];

export default function AccountingIndustryPage() {

  return (

    <main className="min-h-screen bg-[#04050B] text-white overflow-hidden">

      <Navbar />

      {/* HERO */}
      <section className="relative px-6 py-32">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#241237_0%,#070B16_40%,#02030A_100%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">

          <div>

            <p className="mb-6 text-xs tracking-[0.35em] text-[#D6A66A]">
              ACCOUNTING FIRMS
            </p>

            <h1 className="text-6xl font-extralight leading-[1.02] tracking-[-0.06em] md:text-[92px]">

              From month-end paperwork
              <br />
              to live operational accounting.

            </h1>

            <p className="mt-8 max-w-[620px] text-[17px] leading-[1.9] text-white/50">

              Avantiqo gives accounting firms real-time visibility into operations,
              approvals, payroll, procurement and financial activity —
              instead of waiting for paperwork 30 days later.

            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/demo"
                className="rounded-[22px] bg-gradient-to-r from-[#D6A66A] via-[#C084FC] to-[#7C5CFA] px-6 py-3 md:px-8 md:py-4 text-sm font-extralight transition-all duration-300 ease-out hover:-translate-y-[2px]"
              >
                Book Accounting Demo
              </Link>

              <Link
                href="/contact"
                className="rounded-[22px] border border-white/[0.05] bg-white/[0.025] px-6 py-3 md:px-8 md:py-4 text-sm text-white/50 transition-all duration-300 ease-out hover:border-purple-500/30"
              >
                Talk To Enterprise Team
              </Link>

            </div>

          </div>

          <div className="relative overflow-hidden rounded-[36px] border border-white/[0.05] bg-[#050714] shadow-[0_0_50px_rgba(120,80,255,0.08)]">

            <Image
              src="/images/accounting-enterprise-hero.png"
              alt="Accounting Runtime"
              width={1600}
              height={1000}
              quality={75}
              priority
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
            />

          </div>

        </div>

      </section>

      {/* BEFORE / AFTER */}
      <section className="px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mb-16">

            <p className="mb-6 text-xs tracking-[0.35em] text-[#B58AF8]">
              BEFORE VS AFTER
            </p>

            <h2 className="max-w-5xl text-5xl font-extralight leading-[1.02] tracking-[-0.05em] md:text-7xl">

              Stop rebuilding businesses
              from paperwork.

            </h2>

          </div>

          <div className="grid gap-6 md:gap-8 lg:grid-cols-2">

            <div className="overflow-hidden rounded-[32px] border border-red-500/10 bg-[#0A0A12]">

              <Image
                src="/images/accounting-before-chaos.png"
                alt="Before"
                width={1200}
                height={800}
                quality={75}
                className="h-[520px] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />

              <div className="p-6 md:p-10">

                <p className="mb-5 text-sm tracking-[0.3em] text-red-400">
                  BEFORE
                </p>

                <h3 className="text-4xl font-extralight">
                  Month-end chaos
                </h3>

                <ul className="mt-8 space-y-4 text-white/50">

                  <li>• Missing invoices and receipts</li>
                  <li>• Manual data entry</li>
                  <li>• Line messages and paperwork</li>
                  <li>• No real-time visibility</li>
                  <li>• Delayed financial oversight</li>
                  <li>• Operational problems discovered too late</li>

                </ul>

              </div>

            </div>

            <div className="overflow-hidden rounded-[32px] border border-emerald-500/10 bg-[#0A0A12]">

              <Image
                src="/images/accounting-after-control.png"
                alt="After"
                width={1200}
                height={800}
                quality={75}
                className="h-[520px] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />

              <div className="p-6 md:p-10">

                <p className="mb-5 text-sm tracking-[0.3em] text-emerald-400">
                  AFTER
                </p>

                <h3 className="text-4xl font-extralight">
                  Live operational control
                </h3>

                <ul className="mt-8 space-y-4 text-white/50">

                  <li>• AI invoice extraction</li>
                  <li>• Real-time operational visibility</li>
                  <li>• Live payroll and procurement tracking</li>
                  <li>• Connected approvals and audit trails</li>
                  <li>• Multi-company dashboard control</li>
                  <li>• Accounting firms handle more clients efficiently</li>

                </ul>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mb-16">

            <p className="mb-6 text-xs tracking-[0.35em] text-[#D6A66A]">
              ACCOUNTING RUNTIME
            </p>

            <h2 className="max-w-5xl text-5xl font-extralight leading-[1.02] tracking-[-0.05em] md:text-7xl">

              Everything connected.
              <br />
              Everything visible.

            </h2>

          </div>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2">

            {features.map((item) => (

              <div
                key={item.title}
                className="overflow-hidden rounded-[32px] border border-white/[0.05] bg-[#050714] shadow-[0_0_40px_rgba(120,80,255,0.05)]"
              >

                <Image
                  src={item.image}
                  alt={item.title}
                  width={1200}
                  height={800}
                  quality={75}
                  className="h-[380px] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                />

                <div className="p-8">

                  <h3 className="text-3xl font-extralight">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-white/50">
                    {item.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ACCOUNTING FIRM BENEFITS */}
      <section className="px-6 py-32 border-t border-white/5">

        <div className="mx-auto max-w-7xl">

          <div className="mb-20">

            <p className="mb-6 text-xs tracking-[0.35em] text-[#D6A66A]">
              ACCOUNTING FIRM BENEFITS
            </p>

            <h2 className="max-w-5xl text-5xl font-extralight leading-[1.02] tracking-[-0.05em] md:text-7xl">
              Scale your accounting firm without scaling operational chaos.
            </h2>

          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

            {roiCards.map((card) => (

              <div
                key={card.title}
                className="rounded-[32px] border border-white/[0.05] bg-[#050714]/90 p-6 md:p-10 transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-purple-500/30"
              >

                <p className="mb-5 text-xs uppercase tracking-[0.25em] text-emerald-400">
                  {card.label}
                </p>

                <h3 className="mb-5 text-4xl font-extralight leading-tight text-white">
                  {card.title}
                </h3>

                <p className="mb-8 text-[17px] leading-8 text-white/50">
                  {card.description}
                </p>

                <div className="flex flex-col gap-4">

                  {card.items.map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-white/80"
                    >

                      <div className="h-2 w-2 rounded-full bg-gradient-to-r from-emerald-400 to-purple-500" />

                      {item}

                    </div>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ACCOUNTING ADVISORY VALUE */}
      <section className="px-6 py-32 border-t border-white/5">

        <div className="mx-auto max-w-7xl">

          <div className="mb-20">

            <p className="mb-6 text-xs tracking-[0.35em] text-[#B58AF8]">
              WHY ACCOUNTING FIRMS CHOOSE AVANTIQO
            </p>

            <h2 className="max-w-5xl text-5xl font-extralight leading-[1.02] tracking-[-0.05em] md:text-7xl">
              Accounting should happen during operations — not weeks later.
            </h2>

            <p className="mt-8 max-w-[820px] text-[17px] leading-[1.9] text-white/50">
              Avantiqo helps accounting firms become live operational intelligence partners,
              not just month-end bookkeeping providers.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

            {advisorCards.map((card) => (

              <div
                key={card.title}
                className="rounded-[32px] border border-white/[0.05] bg-[#050714]/90 p-6 md:p-10 transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-purple-500/30"
              >

                <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#D6A66A]">
                  {card.label}
                </p>

                <h3 className="mb-5 text-3xl font-extralight leading-tight text-white">
                  {card.title}
                </h3>

                <p className="mb-8 text-[16px] leading-8 text-white/50">
                  {card.description}
                </p>

                <div className="flex flex-col gap-4">

                  {card.items.map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-white/80"
                    >

                      <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#D6A66A] to-purple-500" />

                      {item}

                    </div>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ENTERPRISE CONTROL */}
      <section className="px-6 py-32 border-t border-white/5">

        <div className="mx-auto max-w-7xl">

          <div className="mb-20">

            <p className="mb-6 text-xs tracking-[0.35em] text-[#D6A66A]">
              ENTERPRISE CONTROL & COMPLIANCE
            </p>

            <h2 className="max-w-5xl text-5xl font-extralight leading-[1.02] tracking-[-0.05em] md:text-7xl">
              Built for operational trust,
              accountability and visibility.
            </h2>

            <p className="mt-8 max-w-[820px] text-[17px] leading-[1.9] text-white/50">
              Avantiqo provides accounting firms with enterprise-grade operational
              visibility, permission control and audit accountability across all clients.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

            {enterpriseCards.map((card) => (

              <div
                key={card.title}
                className="rounded-[32px] border border-white/[0.05] bg-[#050714]/90 p-6 md:p-10 transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-purple-500/30"
              >

                <div className="mb-6 flex items-center gap-3">

                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#D6A66A] to-purple-500" />

                  <div className="text-xs uppercase tracking-[0.3em] text-white/40">
                    Enterprise Runtime
                  </div>

                </div>

                <h3 className="mb-5 text-3xl font-extralight leading-tight text-white">
                  {card.title}
                </h3>

                <p className="text-[16px] leading-8 text-white/50">
                  {card.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="px-6 py-32">

        <div className="mx-auto max-w-5xl text-center">

          <p className="mb-6 text-xs tracking-[0.35em] text-[#D6A66A]">
            LIVE ACCOUNTING CONTROL
          </p>

          <h2 className="text-5xl font-extralight leading-[1.02] tracking-[-0.05em] md:text-7xl">

            Your accounting firm
            should not discover
            problems 30 days later.

          </h2>

          <p className="mx-auto mt-8 max-w-[820px] text-[17px] leading-[1.9] text-white/50">

            Avantiqo transforms accounting firms into
            real-time operational intelligence partners.

          </p>

          <div className="mt-12">

            <Link
              href="/demo"
              className="rounded-[22px] bg-gradient-to-r from-[#D6A66A] via-[#C084FC] to-[#7C5CFA] px-6 py-3 md:px-8 md:py-4 text-sm font-extralight transition-all duration-300 ease-out hover:-translate-y-[2px]"
            >
              Book Enterprise Demo
            </Link>

          </div>

        </div>

      </section>

      <section className="px-6 pb-24 md:pb-32">

  <div className="mx-auto max-w-7xl">

    <div className="enterprise-runtime-card p-8 md:p-12">

      <div className="mb-10 flex items-center justify-between">

        <div>

          <p className="runtime-label mb-3">
            ENTERPRISE ACCOUNTING RUNTIME
          </p>

          <h2 className="text-3xl md:text-5xl font-extralight tracking-[-0.05em]">
            Live Financial Governance
          </h2>

        </div>

        <div className="hidden md:flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2">

          <div className="h-2 w-2 rounded-full bg-green-400" />

          <span className="text-sm text-white/60">
            SYSTEM ACTIVE
          </span>

        </div>

      </div>

      <div className="mb-10 grid gap-4 md:grid-cols-4">

        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5">
          <p className="runtime-label mb-2">
            Connected Entities
          </p>
          <p className="text-3xl font-extralight text-white">
            12
          </p>
        </div>

        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5">
          <p className="runtime-label mb-2">
            Journal Entries Today
          </p>
          <p className="text-3xl font-extralight text-white">
            284
          </p>
        </div>

        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5">
          <p className="runtime-label mb-2">
            Approval Flows
          </p>
          <p className="text-3xl font-extralight text-white">
            18
          </p>
        </div>

        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5">
          <p className="runtime-label mb-2">
            Governance Integrity
          </p>
          <p className="text-3xl font-extralight text-green-400">
            94%
          </p>
        </div>

      </div>

      <div className="mb-10 rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6">

        <div className="mb-5 flex items-center justify-between">

          <div>

            <p className="runtime-label mb-2">
              Month-End Close Runtime
            </p>

            <h3 className="text-2xl font-extralight text-white">
              Financial Close Progress
            </h3>

          </div>

          <div className="runtime-status-warning runtime-value">
            72% COMPLETE
          </div>

        </div>

        <div className="mb-4 h-2 overflow-hidden rounded-full bg-white/[0.05]">

          <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#C084FC]" />

        </div>

        <div className="grid gap-4 md:grid-cols-3">

          <div className="rounded-2xl border border-white/[0.05] bg-black/20 p-4">
            <p className="runtime-label mb-2">
              Pending Approvals
            </p>
            <p className="text-xl font-light text-white">
              2
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.05] bg-black/20 p-4">
            <p className="runtime-label mb-2">
              Reconciliation Exceptions
            </p>
            <p className="text-xl font-light text-amber-400">
              3
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.05] bg-black/20 p-4">
            <p className="runtime-label mb-2">
              Payroll Variances
            </p>
            <p className="text-xl font-light text-red-400">
              1
            </p>
          </div>

        </div>

      </div>

      <div className="mb-10 flex flex-wrap items-center gap-3">

        <div className="rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-2 text-sm text-white/70">
          Procurement
        </div>

        <div className="text-white/20">
          →
        </div>

        <div className="rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-2 text-sm text-white/70">
          Approval
        </div>

        <div className="text-white/20">
          →
        </div>

        <div className="rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-2 text-sm text-white/70">
          Journal Engine
        </div>

        <div className="text-white/20">
          →
        </div>

        <div className="rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-2 text-sm text-white/70">
          Reconciliation
        </div>

        <div className="text-white/20">
          →
        </div>

        <div className="rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-2 text-sm text-white/70">
          Financial Close
        </div>

      </div>

      <div className="mb-10 grid gap-6 md:grid-cols-2">

        <div className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6">

          <div className="mb-6 flex items-center justify-between">

            <div>

              <p className="runtime-label mb-2">
                Operational Risk Runtime
              </p>

              <h3 className="text-2xl font-extralight text-white">
                Live Exception Monitoring
              </h3>

            </div>

            <div className="runtime-status-warning runtime-value">
              6 ACTIVE
            </div>

          </div>

          <div className="space-y-4">

            <div className="flex items-center justify-between rounded-2xl border border-white/[0.05] bg-black/20 p-4">
              <span className="text-white/70">
                Missing Receipts
              </span>
              <span className="text-amber-400">
                2
              </span>
            </div>

            <div className="flex items-center justify-between rounded-2xl border border-white/[0.05] bg-black/20 p-4">
              <span className="text-white/70">
                Payroll Approval Delayed
              </span>
              <span className="text-red-400">
                1
              </span>
            </div>

            <div className="flex items-center justify-between rounded-2xl border border-white/[0.05] bg-black/20 p-4">
              <span className="text-white/70">
                Procurement Exceptions
              </span>
              <span className="text-amber-400">
                3
              </span>
            </div>

            <div className="flex items-center justify-between rounded-2xl border border-white/[0.05] bg-black/20 p-4">
              <span className="text-white/70">
                Audit Violations
              </span>
              <span className="text-green-400">
                0
              </span>
            </div>

          </div>

        </div>

        <div className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6">

          <div className="mb-6 flex items-center justify-between">

            <div>

              <p className="runtime-label mb-2">
                AI Operational Intelligence
              </p>

              <h3 className="text-2xl font-extralight text-white">
                Live Runtime Detection
              </h3>

            </div>

            <div className="runtime-status-active runtime-value">
              AI ACTIVE
            </div>

          </div>

          <div className="space-y-4">

            <div className="rounded-2xl border border-purple-500/20 bg-purple-500/5 p-4">

              <p className="mb-2 text-sm text-purple-300">
                AI DETECTED
              </p>

              <p className="text-white/80">
                Procurement variance detected in hospitality operations.
              </p>

            </div>

            <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-4">

              <p className="mb-2 text-sm text-indigo-300">
                AI ANALYSIS
              </p>

              <p className="text-white/80">
                Payroll inconsistency identified before financial close.
              </p>

            </div>

            <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-4">

              <p className="mb-2 text-sm text-green-300">
                AI RECOMMENDATION
              </p>

              <p className="text-white/80">
                Reconciliation review recommended for procurement ledger.
              </p>

            </div>

          </div>

        </div>

      </div>

      <div className="mb-10 rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6">

        <div className="mb-6 flex items-center justify-between">

          <div>

            <p className="runtime-label mb-2">
              Governance Timeline
            </p>

            <h3 className="text-2xl font-extralight text-white">
              Continuous Operational Flow
            </h3>

          </div>

          <div className="runtime-status-active runtime-value">
            LIVE
          </div>

        </div>

        <div className="grid gap-4 md:grid-cols-4">

          <div className="rounded-2xl border border-white/[0.05] bg-black/20 p-4">
            <p className="mb-2 text-xs text-white/40">
              08:42
            </p>
            <p className="text-white/75">
              Procurement Approved
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.05] bg-black/20 p-4">
            <p className="mb-2 text-xs text-white/40">
              09:14
            </p>
            <p className="text-white/75">
              Journal Posted
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.05] bg-black/20 p-4">
            <p className="mb-2 text-xs text-white/40">
              09:16
            </p>
            <p className="text-white/75">
              Reconciliation Updated
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.05] bg-black/20 p-4">
            <p className="mb-2 text-xs text-white/40">
              09:22
            </p>
            <p className="text-white/75">
              Payroll Runtime Locked
            </p>
          </div>

        </div>

      </div>

      <div className="mb-10 grid gap-6 md:grid-cols-2">

        <div className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6">

          <div className="mb-6 flex items-center justify-between">

            <div>

              <p className="runtime-label mb-2">
                Approval Accountability
              </p>

              <h3 className="text-2xl font-extralight text-white">
                Human Governance Runtime
              </h3>

            </div>

            <div className="runtime-status-active runtime-value">
              VERIFIED
            </div>

          </div>

          <div className="space-y-4">

            <div className="rounded-2xl border border-white/[0.05] bg-black/20 p-4">

              <p className="mb-2 text-xs tracking-[0.14em] text-white/40 uppercase">
                Approved By
              </p>

              <div className="flex items-center justify-between">

                <p className="text-white/80">
                  P. Vallgarda — CFO Runtime
                </p>

                <span className="text-green-400">
                  ACTIVE
                </span>

              </div>

            </div>

            <div className="rounded-2xl border border-white/[0.05] bg-black/20 p-4">

              <p className="mb-2 text-xs tracking-[0.14em] text-white/40 uppercase">
                Locked By
              </p>

              <div className="flex items-center justify-between">

                <p className="text-white/80">
                  Financial Governance Engine
                </p>

                <span className="text-indigo-400">
                  ENFORCED
                </span>

              </div>

            </div>

            <div className="rounded-2xl border border-white/[0.05] bg-black/20 p-4">

              <p className="mb-2 text-xs tracking-[0.14em] text-white/40 uppercase">
                Reviewed By
              </p>

              <div className="flex items-center justify-between">

                <p className="text-white/80">
                  Operations Control Runtime
                </p>

                <span className="text-purple-400">
                  VERIFIED
                </span>

              </div>

            </div>

          </div>

        </div>

        <div className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6">

          <div className="mb-6 flex items-center justify-between">

            <div>

              <p className="runtime-label mb-2">
                Multi-Entity Operational Runtime
              </p>

              <h3 className="text-2xl font-extralight text-white">
                Cross-Company Oversight
              </h3>

            </div>

            <div className="runtime-status-active runtime-value">
              4 ENTITIES
            </div>

          </div>

          <div className="space-y-4">

            <div className="flex items-center justify-between rounded-2xl border border-white/[0.05] bg-black/20 p-4">

              <div className="flex items-center gap-3">

                <div className="h-2 w-2 rounded-full bg-green-400" />

                <p className="text-white/80">
                  Churchill Phuket
                </p>

              </div>

              <span className="text-green-400">
                ACTIVE
              </span>

            </div>

            <div className="flex items-center justify-between rounded-2xl border border-white/[0.05] bg-black/20 p-4">

              <div className="flex items-center gap-3">

                <div className="h-2 w-2 rounded-full bg-amber-400" />

                <p className="text-white/80">
                  BEA Co., Ltd.
                </p>

              </div>

              <span className="text-amber-400">
                REVIEWING
              </span>

            </div>

            <div className="flex items-center justify-between rounded-2xl border border-white/[0.05] bg-black/20 p-4">

              <div className="flex items-center gap-3">

                <div className="h-2 w-2 rounded-full bg-green-400" />

                <p className="text-white/80">
                  PCS Phuket
                </p>

              </div>

              <span className="text-green-400">
                APPROVED
              </span>

            </div>

            <div className="flex items-center justify-between rounded-2xl border border-white/[0.05] bg-black/20 p-4">

              <div className="flex items-center gap-3">

                <div className="h-2 w-2 rounded-full bg-purple-400" />

                <p className="text-white/80">
                  Cole Ley Entertainment
                </p>

              </div>

              <span className="text-purple-400">
                PENDING CLOSE
              </span>

            </div>

          </div>

        </div>

      </div>

      <div className="mb-10 rounded-3xl border border-white/[0.06] bg-gradient-to-r from-[#0A0F1F] via-[#111827] to-[#0A0F1F] p-6">

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          <div>

            <p className="runtime-label mb-3">
              Immutable Audit Runtime
            </p>

            <h3 className="text-3xl font-extralight text-white">
              Enterprise Audit Traceability
            </h3>

            <p className="mt-3 max-w-2xl text-white/55">
              Every approval, edit, transaction and operational event is permanently tracked across the enterprise runtime architecture.
            </p>

          </div>

          <div className="rounded-3xl border border-green-500/20 bg-green-500/10 px-8 py-6">

            <p className="mb-2 text-xs tracking-[0.16em] text-green-300 uppercase">
              AI Runtime Confidence
            </p>

            <p className="text-5xl font-extralight text-white">
              97.2%
            </p>

            <p className="mt-2 text-sm text-white/50">
              No critical anomalies detected.
            </p>

          </div>

        </div>

      </div>

      <div className="mb-10 rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8">

        <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          <div>

            <p className="runtime-label mb-2">
              Cross-System Synchronization
            </p>

            <h3 className="text-3xl font-extralight text-white">
              Enterprise Operational Nervous System
            </h3>

          </div>

          <div className="rounded-full border border-green-500/20 bg-green-500/10 px-5 py-2 text-sm text-green-300">
            ALL SYSTEMS SYNCHRONIZED
          </div>

        </div>

        <div className="grid gap-4 md:grid-cols-4">

          <div className="rounded-2xl border border-white/[0.05] bg-black/20 p-5">

            <p className="runtime-label mb-3">
              Payroll Runtime
            </p>

            <p className="text-white/80">
              Synced with Operations Control
            </p>

          </div>

          <div className="rounded-2xl border border-white/[0.05] bg-black/20 p-5">

            <p className="runtime-label mb-3">
              Procurement Runtime
            </p>

            <p className="text-white/80">
              Connected to Inventory Ledger
            </p>

          </div>

          <div className="rounded-2xl border border-white/[0.05] bg-black/20 p-5">

            <p className="runtime-label mb-3">
              Financial Runtime
            </p>

            <p className="text-white/80">
              Linked to Live Revenue Streams
            </p>

          </div>

          <div className="rounded-2xl border border-white/[0.05] bg-black/20 p-5">

            <p className="runtime-label mb-3">
              AI Runtime
            </p>

            <p className="text-white/80">
              Monitoring Operational Behavior
            </p>

          </div>

        </div>

      </div>

      <div className="mb-10 grid gap-6 md:grid-cols-2">

        <div className="rounded-3xl border border-white/[0.06] bg-gradient-to-br from-[#0A0F1F] to-[#111827] p-6">

          <div className="mb-6 flex items-center justify-between">

            <div>

              <p className="runtime-label mb-2">
                AI Runtime Decision Layer
              </p>

              <h3 className="text-2xl font-extralight text-white">
                Predictive Operational Intelligence
              </h3>

            </div>

            <div className="runtime-status-active runtime-value">
              LEARNING
            </div>

          </div>

          <div className="space-y-4">

            <div className="rounded-2xl border border-purple-500/20 bg-purple-500/5 p-5">

              <p className="mb-2 text-xs uppercase tracking-[0.14em] text-purple-300">
                AI Recommendation
              </p>

              <p className="text-white/80">
                Delay financial close until procurement reconciliation completes.
              </p>

            </div>

            <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-5">

              <p className="mb-2 text-xs uppercase tracking-[0.14em] text-indigo-300">
                AI Prediction
              </p>

              <p className="text-white/80">
                Procurement shortage risk predicted within 6 operational days.
              </p>

            </div>

            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5">

              <p className="mb-2 text-xs uppercase tracking-[0.14em] text-amber-300">
                AI Detection
              </p>

              <p className="text-white/80">
                Unusual approval behavior detected in hospitality runtime.
              </p>

            </div>

          </div>

        </div>

        <div className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6">

          <div className="mb-6 flex items-center justify-between">

            <div>

              <p className="runtime-label mb-2">
                Live Runtime Event Stream
              </p>

              <h3 className="text-2xl font-extralight text-white">
                Continuous Operational Flow
              </h3>

            </div>

            <div className="runtime-status-active runtime-value">
              LIVE
            </div>

          </div>

          <div className="space-y-3">

            <div className="flex items-center gap-4 rounded-2xl border border-white/[0.05] bg-black/20 p-4">
              <span className="text-xs text-white/35">
                09:22
              </span>
              <span className="text-white/75">
                Payroll runtime locked
              </span>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-white/[0.05] bg-black/20 p-4">
              <span className="text-xs text-white/35">
                09:24
              </span>
              <span className="text-white/75">
                Inventory ledger synchronized
              </span>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-white/[0.05] bg-black/20 p-4">
              <span className="text-xs text-white/35">
                09:26
              </span>
              <span className="text-white/75">
                AI variance detection triggered
              </span>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-white/[0.05] bg-black/20 p-4">
              <span className="text-xs text-white/35">
                09:28
              </span>
              <span className="text-white/75">
                Approval escalation initiated
              </span>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-white/[0.05] bg-black/20 p-4">
              <span className="text-xs text-white/35">
                09:31
              </span>
              <span className="text-white/75">
                Revenue synchronization completed
              </span>
            </div>

          </div>

        </div>

      </div>

      <div className="grid gap-0 md:grid-cols-2">

        <div className="runtime-grid-line border-b md:border-b-0 md:border-r p-6">

          <div className="space-y-6">

            <div className="flex items-center justify-between">
              <span className="runtime-label">
                Canonical Journal Engine
              </span>
              <span className="runtime-status-active runtime-value">
                ENABLED
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="runtime-label">
                3-Way Matching
              </span>
              <span className="runtime-status-active runtime-value">
                ACTIVE
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="runtime-label">
                Audit Chain Integrity
              </span>
              <span className="runtime-status-active runtime-value">
                VERIFIED
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="runtime-label">
                Procurement Governance
              </span>
              <span className="runtime-status-warning runtime-value">
                HIGH
              </span>
            </div>

          </div>

        </div>

        <div className="p-6">

          <div className="space-y-6">

            <div className="flex items-center justify-between">
              <span className="runtime-label">
                Inventory Ledger
              </span>
              <span className="runtime-status-active runtime-value">
                SYNCHRONIZED
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="runtime-label">
                Multi-Entity Consolidation
              </span>
              <span className="runtime-status-active runtime-value">
                READY
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="runtime-label">
                Approval Runtime
              </span>
              <span className="runtime-status-active runtime-value">
                OPERATIONAL
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="runtime-label">
                Period Locking
              </span>
              <span className="runtime-status-active runtime-value">
                ENFORCED
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

<Footer />

    



</main>

  );

}

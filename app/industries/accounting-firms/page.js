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

      <Footer />

    </main>

  );

}

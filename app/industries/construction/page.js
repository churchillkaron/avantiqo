"use client";

import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const constructionFeatures = [
  {
    title: "LIVE PROJECT CONTROL",
    description:
      "Track progress, budgets, approvals, delays, manpower and site performance in real time.",
    image: "/images/construction-live-control.png",
  },
  {
    title: "SITE REPORTING",
    description:
      "Supervisors upload photos, daily reports, issues and progress updates directly from site.",
    image: "/images/construction-site-reporting.png",
  },
  {
    title: "PROCUREMENT & MATERIALS",
    description:
      "Control purchase requests, supplier orders, material delivery and inventory visibility.",
    image: "/images/construction-procurement.png",
  },
  {
    title: "WORKFORCE & PAYROLL",
    description:
      "Monitor attendance, subcontractors, labor cost, payroll approvals and workforce activity.",
    image: "/images/construction-workforce.png",
  },
  {
    title: "MULTI-PROJECT CONTROL",
    description:
      "Manage multiple construction sites, budgets and project teams from one operational runtime.",
    image: "/images/construction-multi-project.png",
  },
  {
    title: "OWNER VISIBILITY",
    description:
      "Project owners and executives see live progress, costs, approvals and risks from anywhere.",
    image: "/images/construction-owner-visibility.png",
  },
];

const constructionBenefits = [
  {
    title: "Reduce Project Delays",
    description:
      "Identify site issues, approval bottlenecks and procurement delays before they impact delivery.",
  },
  {
    title: "Control Budget Overruns",
    description:
      "Track committed costs, supplier spend, labor cost and project financial exposure live.",
  },
  {
    title: "Connect Site & Office",
    description:
      "Bring field updates, project management, approvals and finance into one connected workflow.",
  },
  {
    title: "Improve Contractor Accountability",
    description:
      "Track subcontractor activity, site progress, attendance and task completion with evidence.",
  },
  {
    title: "Faster Approvals",
    description:
      "Move purchase requests, change orders, invoices and project approvals through structured workflows.",
  },
  {
    title: "Real-Time Owner Reporting",
    description:
      "Replace delayed manual reports with live visibility into progress, risks, budget and execution.",
  },
];

export default function ConstructionIndustryPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#04050B] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative px-6 py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#241237_0%,#070B16_40%,#02030A_100%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-6 text-xs tracking-[0.35em] text-[#D6A66A]">
              CONSTRUCTION OPERATIONS
            </p>

            <h1 className="text-6xl font-normal leading-[1.0] tracking-[-0.045em] md:text-[92px]">
              Control every site
              <br />
              before delays
              <br />
              become losses.
            </h1>

            <p className="mt-8 max-w-[620px] text-[17px] leading-[1.9] text-white/50">
              Budgets, procurement, workforce, approvals, site reporting,
              documents and financial visibility connected in one construction
              operational runtime.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/demo"
                className="rounded-[22px] bg-gradient-to-r from-[#C6A062] to-[#7C5CFA] px-6 py-3 md:px-8 md:py-4 text-sm font-normal transition-all duration-300 ease-out hover:-translate-y-[2px]"
              >
                Book Construction Demo
              </Link>

              <Link
                href="/contact"
                className="rounded-[22px] border border-white/[0.06] bg-white/[0.03] px-6 py-3 md:px-8 md:py-4 text-sm text-white/50 transition-all duration-300 ease-out hover:border-purple-500/30"
              >
                Talk To Enterprise Team
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[36px] border border-white/[0.06] bg-[#060816] shadow-[0_0_50px_rgba(120,80,255,0.08)]">
            <Image
              src="/images/construction-hero.png"
              alt="Construction Runtime"
              width={1600}
              height={1000}
              quality={100}
              priority
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>
        </div>
      </section>

      {/* BEFORE AFTER */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <p className="mb-6 text-xs tracking-[0.35em] text-[#B58AF8]">
              BEFORE VS AFTER
            </p>

            <h2 className="max-w-5xl text-5xl font-normal leading-[1.02] tracking-[-0.05em] md:text-7xl">
              Replace disconnected construction management with live project control.
            </h2>
          </div>

          <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[32px] border border-red-500/10 bg-[#0A0A12]">
              <Image
                src="/images/construction-before-chaos.png"
                alt="Before"
                width={1200}
                height={800}
                quality={100}
                className="h-[520px] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />

              <div className="p-6 md:p-10">
                <p className="mb-5 text-sm tracking-[0.3em] text-red-400">
                  BEFORE
                </p>

                <h3 className="text-4xl font-normal">
                  Site and office chaos
                </h3>

                <ul className="mt-8 space-y-4 text-white/50">
                  <li>• Paper site reports and manual updates</li>
                  <li>• Delayed approval workflows</li>
                  <li>• Budget overruns discovered too late</li>
                  <li>• Procurement and material confusion</li>
                  <li>• Disconnected contractors and departments</li>
                  <li>• Owners waiting for delayed reports</li>
                </ul>
              </div>
            </div>

            <div className="overflow-hidden rounded-[32px] border border-emerald-500/10 bg-[#0A0A12]">
              <Image
                src="/images/construction-after-control.png"
                alt="After"
                width={1200}
                height={800}
                quality={100}
                className="h-[520px] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />

              <div className="p-6 md:p-10">
                <p className="mb-5 text-sm tracking-[0.3em] text-emerald-400">
                  AFTER
                </p>

                <h3 className="text-4xl font-normal">
                  Live construction control
                </h3>

                <ul className="mt-8 space-y-4 text-white/50">
                  <li>• Live progress and budget visibility</li>
                  <li>• Site reports uploaded instantly</li>
                  <li>• Procurement and materials connected</li>
                  <li>• Approval workflows tracked clearly</li>
                  <li>• Workforce and subcontractor accountability</li>
                  <li>• Owners see project status from anywhere</li>
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
              CONSTRUCTION RUNTIME
            </p>

            <h2 className="max-w-5xl text-5xl font-normal leading-[1.02] tracking-[-0.05em] md:text-7xl">
              Site, office and finance —
              <br />
              connected live.
            </h2>
          </div>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            {constructionFeatures.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-[32px] border border-white/[0.06] bg-[#060816] shadow-[0_0_40px_rgba(120,80,255,0.05)]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1200}
                  height={800}
                  quality={100}
                  className="h-[380px] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                />

                <div className="p-8">
                  <h3 className="text-3xl font-normal">
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

      {/* BENEFITS */}
      <section className="border-t border-white/5 px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20">
            <p className="mb-6 text-xs tracking-[0.35em] text-[#B58AF8]">
              WHY CONSTRUCTION COMPANIES CHOOSE AVANTIQO
            </p>

            <h2 className="max-w-5xl text-5xl font-normal leading-[1.02] tracking-[-0.05em] md:text-7xl">
              Construction problems become expensive when visibility arrives too late.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {constructionBenefits.map((item) => (
              <div
                key={item.title}
                className="rounded-[32px] border border-white/[0.06] bg-[#060816]/90 p-6 md:p-10 transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-purple-500/30"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#D6A66A] to-purple-500" />

                  <div className="text-xs uppercase tracking-[0.3em] text-white/40">
                    Construction Runtime
                  </div>
                </div>

                <h3 className="mb-5 text-3xl font-normal leading-tight text-white">
                  {item.title}
                </h3>

                <p className="text-[16px] leading-8 text-white/50">
                  {item.description}
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
            LIVE CONSTRUCTION CONTROL
          </p>

          <h2 className="text-5xl font-normal leading-[1.02] tracking-[-0.05em] md:text-7xl">
            One runtime.
            <br />
            Every project.
            <br />
            Real-time site visibility.
          </h2>

          <p className="mx-auto mt-8 max-w-[760px] text-[17px] leading-[1.9] text-white/50">
            Replace delayed site reporting and disconnected workflows with one connected construction operating system.
          </p>

          <div className="mt-12">
            <Link
              href="/demo"
              className="rounded-[22px] bg-gradient-to-r from-[#C6A062] to-[#7C5CFA] px-6 py-3 md:px-8 md:py-4 text-sm font-normal transition-all duration-300 ease-out hover:-translate-y-[2px]"
            >
              Book Construction Demo
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

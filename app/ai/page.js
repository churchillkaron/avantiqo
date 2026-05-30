"use client";

import SiteTopNav from "@/components/SiteTopNav";

import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/layout/Footer";

const aiSystems = [
  {
    title: "AI DOCUMENT ENGINE",
    description:
      "Extract invoices, receipts, contracts, payroll documents and operational paperwork automatically.",
    image: "/images/ai-document-engine.png",
  },
  {
    title: "AI OPERATIONAL ANALYSIS",
    description:
      "Detect operational problems, cost anomalies, delays, payroll risks and performance issues live.",
    image: "/images/ai-operational-analysis.png",
  },
  {
    title: "AI MARKETING ENGINE",
    description:
      "Create campaigns, social media content, promotions and publishing workflows connected to operations.",
    image: "/images/ai-marketing-engine.png",
  },
  {
    title: "AI WORKFLOW AUTOMATION",
    description:
      "Route approvals, automate operational tasks, notify teams and reduce manual coordination.",
    image: "/images/ai-workflow-automation.png",
  },
  {
    title: "AI BUSINESS MEMORY",
    description:
      "The runtime learns how the business operates, improving visibility, workflows and operational intelligence.",
    image: "/images/ai-business-memory.png",
  },
  {
    title: "AI ROLE-BASED ASSISTANTS",
    description:
      "Operational assistants built for accounting, hospitality, construction, procurement and finance.",
    image: "/images/ai-role-assistants.png",
  },
];

export default function AIPage() {
  return (
    <>
<SiteTopNav />
<main className="min-h-screen overflow-hidden bg-[#04050B] text-white">

      {/* HERO */}
      <section className="relative px-6 py-32">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#241237_0%,#070B16_40%,#02030A_100%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">

          <div>

            <p className="mb-6 text-xs tracking-[0.35em] text-[#D6A66A]">
              AVANTIQO AI RUNTIME
            </p>

            <h1 className="text-6xl font-extralight leading-[1.02] tracking-[-0.06em] md:text-[92px]">
              AI that understands
              <br />
              how the business
              <br />
              operates.
            </h1>

            <p className="mt-8 max-w-[680px] text-[17px] leading-[1.9] text-white/50">
              Avantiqo AI connects documents, operations, approvals,
              finance, procurement, payroll, marketing and live business
              visibility into one intelligent operational runtime.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/demo"
                className="rounded-[22px] bg-gradient-to-r from-[#D6A66A] via-[#C084FC] to-[#7C5CFA] px-6 py-3 md:px-8 md:py-4 text-sm font-extralight transition-all duration-300 ease-out hover:-translate-y-[2px]"
              >
                Book AI Modules
              </Link>

              <Link
                href="/industries"
                className="rounded-[22px] border border-white/[0.05] bg-white/[0.025] px-6 py-3 md:px-8 md:py-4 text-sm text-white/50 transition-all duration-300 ease-out hover:border-purple-500/30"
              >
                Explore Industries
              </Link>

            </div>

          </div>

          <div className="relative overflow-hidden rounded-[36px] border border-white/[0.05] bg-[#050714] shadow-[0_0_50px_rgba(120,80,255,0.08)]">

            <Image
              src="/images/ai-hero-runtime.png"
              alt="AI Runtime"
              width={1600}
              height={1000}
              quality={75}
              priority
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
            />

          </div>

        </div>

      </section>

      {/* INTRO */}
      <section className="px-6 py-28">

        <div className="mx-auto max-w-6xl text-center">

          <p className="mb-6 text-xs tracking-[0.35em] text-[#B58AF8]">
            AI OPERATIONAL INTELLIGENCE
          </p>

          <h2 className="text-5xl font-extralight leading-[1.02] tracking-[-0.05em] md:text-7xl">
            More than automation.
            <br />
            Operational intelligence.
          </h2>

          <p className="mx-auto mt-10 max-w-[900px] text-lg leading-9 text-white/50">
            Avantiqo AI is not a chatbot layer. It is a live operational
            intelligence engine connected to documents, approvals,
            accounting, procurement, payroll, hospitality, construction,
            inventory and business operations.
          </p>

        </div>

      </section>

      {/* AI SYSTEMS */}
      <section className="px-6 pb-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-6 md:gap-8 md:grid-cols-2">

            {aiSystems.map((item) => (

              <div
                key={item.title}
                className="overflow-hidden rounded-[36px] border border-white/[0.05] bg-[#050714] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-purple-500/30 hover:shadow-[0_0_60px_rgba(120,80,255,0.10)]"
              >

                <Image
                  src={item.image}
                  alt={item.title}
                  width={1400}
                  height={900}
                  quality={75}
                  className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                />

                <div className="p-6 md:p-10">

                  <div className="mb-5 flex items-center gap-3">

                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#D6A66A] to-purple-500" />

                    <div className="text-xs uppercase tracking-[0.3em] text-white/40">
                      AI Runtime
                    </div>

                  </div>

                  <h3 className="text-4xl font-extralight tracking-[-0.02em]">
                    {item.title}
                  </h3>

                  <p className="mt-6 text-[16px] leading-8 text-white/50">
                    {item.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* AI + HUMAN */}
      <section className="border-t border-white/5 px-6 py-32">

        <div className="mx-auto max-w-5xl text-center">

          <p className="mb-6 text-xs tracking-[0.35em] text-[#D6A66A]">
            HUMAN + AI OPERATIONS
          </p>

          <h2 className="text-5xl font-extralight leading-[1.02] tracking-[-0.05em] md:text-7xl">
            AI does not replace teams.
            <br />
            It removes operational overload.
          </h2>

          <p className="mx-auto mt-10 max-w-[860px] text-lg leading-9 text-white/50">
            Avantiqo AI helps businesses reduce manual paperwork,
            disconnected systems, delayed approvals and operational chaos —
            while keeping people in control of decisions, approvals and
            execution.
          </p>

        </div>

      </section>

      {/* CTA */}
      <section className="px-6 py-32">

        <div className="mx-auto max-w-5xl text-center">

          <p className="mb-6 text-xs tracking-[0.35em] text-[#D6A66A]">
            CONNECTED AI OPERATIONS
          </p>

          <h2 className="text-5xl font-extralight leading-[1.02] tracking-[-0.05em] md:text-7xl">
            One intelligent runtime
            <br />
            connected to the
            <br />
            entire business.
          </h2>

          <p className="mx-auto mt-8 max-w-[820px] text-[17px] leading-[1.9] text-white/50">
            Replace disconnected tools and manual workflows with one AI-powered operational system built for modern businesses.
          </p>

          <div className="mt-12">

            <Link
              href="/demo"
              className="rounded-[22px] bg-gradient-to-r from-[#D6A66A] via-[#C084FC] to-[#7C5CFA] px-6 py-3 md:px-8 md:py-4 text-sm font-extralight transition-all duration-300 ease-out hover:-translate-y-[2px]"
            >
              Book Enterprise Modules
            </Link>

          </div>

        </div>

      </section>

      <Footer />

    </main>
    </>
  );
}

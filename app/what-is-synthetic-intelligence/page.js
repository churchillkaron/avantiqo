"use client";

import Link from "next/link";
import SiteTopNav from "@/app/components/SiteTopNav";
import Footer from "@/components/layout/Footer";

export default function SyntheticIntelligencePage() {
  const sections = [
    {
      title: "What is Synthetic Intelligence?",
      description: `Synthetic Intelligence (SI) is a next-generation intelligence system designed
to analyze, predict, and optimize operational and financial performance across a business
in real time. Unlike traditional AI, SI integrates multiple streams of business data—including
finance, operations, customer management, and human resources—into a single, intelligent layer
that provides actionable insights and predictive recommendations.`,
    },
    {
      title: "Why It Matters",
      description: `SI allows businesses to anticipate bottlenecks, optimize workflows, and improve
decision-making by providing a comprehensive, real-time overview of all critical business
operations. By leveraging SI, executives can make informed decisions proactively, rather than
reacting to problems after they occur, improving efficiency, reducing costs, and increasing growth.`,
    },
    {
      title: "Key Benefits",
      description: `- Real-time insights across departments and functions
- Predictive analytics for operational efficiency
- Centralized intelligence for faster decision-making
- Enhanced visibility for leadership to monitor KPIs
- Automated recommendations to optimize resource allocation`,
    },
    {
      title: "Artificial Intelligence vs Synthetic Intelligence",
      description: `Artificial Intelligence Creates Answers:
AI can generate text, images, reports, and recommendations. However, it does not understand
the organization itself. It can answer questions, but it cannot continuously understand the
relationships between operations, customers, staff, finance, compliance, and performance.

Synthetic Intelligence Creates Understanding:
SI is not designed to generate answers. It creates organizational awareness. Every customer
interaction, operational event, financial transaction, staff activity, project milestone, and
compliance requirement becomes part of a continuously evolving model of the organization.
This allows leadership to understand not only what happened, but why and what is likely to
happen next.

The Digital Twin Of The Organization:
SI produces a living operational model of the business—a digital twin. Instead of viewing
departments separately, the organization is understood as a connected system where decisions,
events, and outcomes influence each other. Leaders can identify risks, opportunities, and
bottlenecks before they appear in reports.`,
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
            Centralized Synthetic Intelligence
          </h1>
          <p className="mx-auto max-w-4xl text-white/70 text-lg leading-relaxed">
            Harness the power of Synthetic Intelligence to unify data, predict trends, and make informed decisions faster across your enterprise.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/demo"
              className="px-6 py-3 bg-gradient-to-r from-[#D6A66A] to-[#C9974D] rounded font-bold text-black shadow-lg hover:shadow-2xl transition-all"
            >
              Request Demo
            </Link>
            <Link
              href="/industries"
              className="px-6 py-3 border border-white/20 rounded hover:bg-white/10"
            >
              Explore Industries
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
          <h2 className="text-4xl font-extralight mb-6">Advanced Synthetic Intelligence</h2>
          <p className="mx-auto max-w-3xl text-white/70 text-lg leading-relaxed">
            SI (Synthetic Intelligence) enables real-time optimization across finance, operations,
            customer management, and compliance. Combined with Avantiqo Analytics,
            executives gain actionable insights instantly.
          </p>
        </div>
      </section><section className="mx-auto max-w-7xl px-6 py-24">

  <div className="mb-16 text-center">
    <div className="mb-4 text-sm uppercase tracking-[0.4em] text-[#D6A66A]">
      Enterprise Intelligence Layer
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
        Artificial Intelligence
      </div>

      <h3 className="mb-6 text-3xl font-light">
        Creates Outputs
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
        Synthetic Intelligence
      </div>

      <h3 className="mb-6 text-3xl font-light">
        Creates Understanding
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
      Avantiqo Vision
    </div>

    <h3 className="mb-8 text-5xl font-extralight leading-tight">
      The Goal Is Not
      <br />
      To Automate Work.
    </h3>

    <div className="mx-auto max-w-4xl text-2xl text-white/80 leading-relaxed">
      The goal is to create organizations
      that understand themselves.
    </div>

    <div className="mt-8 text-white/50">
      That is the future Avantiqo is building.
    </div>

  </div>

</section>

      <Footer />
    </main>
  );
}
"use client";

import SiteTopNav from "@/app/components/SiteTopNav";
import Footer from "@/components/layout/Footer";

export default function CompliancePage() {
  const sections = [
    {
      title: "Compliance Is Not A Project",
      text: `Many organizations treat compliance as an annual exercise.

A report is prepared.

Documentation is reviewed.

Controls are verified.

Auditors arrive.

The process repeats.

Modern organizations require a different approach.

Compliance should not be an event.

Compliance should be part of daily operations.

The objective is not preparing for audits.

The objective is operating correctly every day.`,
    },

    {
      title: "Why Compliance Matters",
      text: `Compliance protects organizations from operational, financial, legal and reputational risks.

As organizations grow, complexity increases.

More employees.

More customers.

More transactions.

More systems.

More obligations.

Without structured compliance processes, risk grows alongside complexity.

Compliance provides the controls required to operate responsibly.`,
    },

    {
      title: "Operational Compliance",
      text: `Operational compliance ensures that processes are executed consistently and according to defined standards.

Policies alone are not enough.

Organizations require visibility, accountability and oversight.

Avantiqo supports operational compliance through workflows, approvals, audit trails and accountability structures that help ensure processes are followed consistently.`,
    },

    {
      title: "Financial Compliance",
      text: `Financial activities require oversight.

Invoices.

Expenses.

Payroll.

Procurement.

Payments.

Approvals.

Financial compliance helps organizations maintain accountability, transparency and control over financial operations.

Avantiqo creates visibility into financial activity while supporting approval processes and auditability.`,
    },

    {
      title: "Data Compliance",
      text: `Organizations are increasingly responsible for protecting information.

Customer data.

Employee data.

Financial data.

Operational data.

Compliance requires organizations to understand what information exists, where it exists, who has access to it and how it is used.

Visibility is the foundation of compliance.`,
    },

    {
      title: "Governance And Compliance",
      text: `Compliance defines requirements.

Governance ensures those requirements are followed.

The two operate together.

Without governance, compliance becomes difficult to maintain.

Without compliance, governance becomes difficult to measure.

Avantiqo connects governance, accountability and compliance into a unified operational framework.`,
    },

    {
      title: "Audit Readiness",
      text: `Organizations should not prepare for audits once a year.

Organizations should remain audit-ready every day.

Approvals.

Decisions.

Transactions.

Operational activity.

Accountability records.

Audit trails.

These should already exist as part of daily operations.

Audit readiness is a by-product of strong operational discipline.`,
    },

    {
      title: "Continuous Monitoring",
      text: `Compliance cannot depend entirely on manual reviews.

Organizations require continuous visibility.

Avantiqo provides centralized monitoring, accountability tracking, workflow oversight and operational visibility that support ongoing compliance activities.

The objective is early detection rather than late discovery.`,
    },

    {
      title: "Compliance And Synthetic Intelligence",
      text: `Synthetic Intelligence continuously analyzes organizational activity.

This creates visibility into operational behavior, process execution and organizational patterns.

Compliance teams gain greater awareness of how the organization actually operates rather than relying solely on periodic reviews.

This helps transform compliance from reactive investigation into proactive oversight.`,
    },

    {
      title: "Enterprise Accountability",
      text: `Compliance depends upon accountability.

Organizations must understand:

Who performed an action.

Who approved it.

When it occurred.

Why it occurred.

How it affected operations.

Avantiqo maintains visibility into these activities through governance structures, auditability and operational intelligence.`,
    },

    {
      title: "Regulatory Readiness",
      text: `Regulations continue to evolve.

Organizations must adapt to changing requirements while maintaining operational efficiency.

The objective is not simply passing audits.

The objective is building resilient operational structures capable of supporting ongoing regulatory obligations.`,
    },

    {
      title: "Compliance At Scale",
      text: `As organizations grow, compliance becomes increasingly complex.

More locations.

More employees.

More departments.

More systems.

More obligations.

Manual processes become difficult to manage.

Avantiqo helps organizations establish consistent controls, visibility and accountability across the entire enterprise.`,
    },

    {
      title: "The Future Of Compliance",
      text: `The future of compliance is not more paperwork.

The future of compliance is operational intelligence.

Organizations should be able to understand compliance risks before they become compliance failures.

Visibility.

Governance.

Accountability.

Intelligence.

These are the foundations of modern compliance.`,
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#02030A] text-white">
      <SiteTopNav />

      <section className="relative px-6 py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#4A2C12_0%,#15110A_30%,#02030A_100%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="rounded-[46px] border border-[#D6A66A]/20 bg-white/[0.03] p-12 backdrop-blur-3xl md:p-16">

            <div className="mb-6 text-xs uppercase tracking-[0.45em] text-[#D6A66A]">
              COMPLIANCE & CONTROL
            </div>

            <h1 className="max-w-5xl text-6xl font-extralight leading-tight tracking-[-0.06em] md:text-8xl">
              Compliance Should Not
              <br />
              <span className="bg-gradient-to-r from-[#D6A66A] via-[#E7C78A] to-[#F7E7B0] bg-clip-text text-transparent">
                Happen Once A Year.
              </span>
            </h1>

            <p className="mt-8 max-w-4xl text-xl leading-10 text-white/65">
              Compliance should happen every day through visibility,
              accountability, governance and operational discipline.
            </p>

          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl space-y-10">

          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-[38px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl"
            >
              <h2 className="mb-6 text-4xl font-extralight">
                {section.title}
              </h2>

              <p className="whitespace-pre-line text-lg leading-9 text-white/65">
                {section.text}
              </p>
            </div>
          ))}

          <div className="rounded-[42px] border border-[#D6A66A]/20 bg-gradient-to-br from-[#D6A66A]/10 via-transparent to-transparent p-14 text-center backdrop-blur-3xl">

            <h2 className="text-5xl font-extralight leading-tight">
              Compliance Creates Confidence.
              <br />
              Confidence Creates Trust.
              <br />
              Trust Creates Resilience.
            </h2>

            <p className="mx-auto mt-8 max-w-4xl text-xl leading-10 text-white/70">
              Compliance is not about passing audits.
              Compliance is about operating responsibly every day.
            </p>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

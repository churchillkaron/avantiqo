"use client";

import SiteTopNav from "@/app/components/SiteTopNav";
import Footer from "@/components/layout/Footer";

export default function GovernancePage() {
  const sections = [
    {
      title: "Governance Is Not Management",
      text: `Management focuses on operating the business.

Governance focuses on controlling how decisions are made.

Organizations rarely fail because information is unavailable.

Organizations fail because decisions are inconsistent, responsibilities are unclear, approvals are bypassed, accountability is missing and visibility is fragmented.

Governance exists to create structure around decision making.

The objective is not bureaucracy.

The objective is accountability.`,
    },

    {
      title: "Why Governance Matters",
      text: `Every organization eventually reaches a point where growth creates complexity.

More employees.
More customers.
More suppliers.
More approvals.
More transactions.
More systems.
More risk.

As complexity increases, informal processes become unreliable.

Organizations require governance to maintain consistency, accountability and control.

Without governance, growth often creates operational chaos.`,
    },

    {
      title: "Governance As A Competitive Advantage",
      text: `Many organizations view governance as a compliance requirement.

Leading organizations view governance as a competitive advantage.

Governance creates:

• Faster decision making

• Clear accountability

• Reduced operational risk

• Improved visibility

• Better resource allocation

• Greater organizational alignment

Governance is not bureaucracy.

Effective governance reduces friction by ensuring decisions are made by the right people at the right time using the right information.`,
    },

    {
      title: "Decision Governance",
      text: `Every important decision should have ownership.

Every approval should have accountability.

Every action should have traceability.

Organizations should be able to answer:

Who made the decision?

Why was the decision made?

Who approved the decision?

What information was used?

What outcome resulted?

Within Avantiqo, decision governance is supported through structured approval workflows, role-based authority, audit trails and accountability frameworks.

Organizations can define who may initiate actions, who may approve them, who must be informed and who remains accountable for outcomes.

This creates consistency across departments while reducing operational risk.

The result is faster decision making with greater transparency and accountability.`,
    },

    {
      title: "Approval Workflows",
      text: `Financial approvals.

Procurement approvals.

Payroll approvals.

Operational approvals.

Customer approvals.

Compliance approvals.

Executive approvals.

The objective is not to slow the organization down.

The objective is to ensure important actions receive appropriate oversight.

Avantiqo supports configurable approval chains across finance, procurement, payroll, operations, compliance and executive management.

Approvals can be routed based on department, responsibility, authority level or organizational structure.

This ensures important actions receive appropriate oversight while maintaining operational efficiency.

The objective is not bureaucracy.

The objective is confidence.`,
    },

    {
      title: "Organizational Accountability",
      text: `Governance requires clear ownership.

Responsibilities should be defined.

Authorities should be understood.

Escalation paths should be visible.

Organizations become more resilient when accountability is clearly established.

Avantiqo creates visibility around ownership, responsibilities and decision authority.

Managers understand who is responsible.

Teams understand who approves.

Leadership understands who remains accountable.

This creates operational clarity across the organization.`,
    },

    {
      title: "Auditability And Transparency",
      text: `Strong governance requires transparency.

Organizations should understand:

What happened.

Who initiated it.

Who approved it.

When it occurred.

Why it occurred.

How it affected operations.

Governance without visibility becomes difficult to enforce.

Avantiqo maintains audit trails, approval history, workflow visibility and accountability records that provide complete transparency into organizational activity.

This allows organizations to understand not only what happened, but also why it happened and who was responsible.`,
    },

    {
      title: "Governance Across The Entire Organization",
      text: `Governance is not limited to leadership.

Finance.
Operations.
Human Resources.
Customer Service.
Compliance.
Marketing.
Technology.
Management.
Executive Leadership.

Every department contributes to accountability.

Every department contributes to governance.`,
    },

    {
      title: "Governance And Synthetic Intelligence",
      text: `Synthetic Intelligence creates organizational awareness.

Governance creates organizational control.

Awareness without control creates risk.

Control without awareness creates inefficiency.

Synthetic Intelligence helps organizations understand:

What is happening.

Why it is happening.

What is likely to happen next.

Governance helps organizations determine:

Who should decide.

Who should approve.

Who is accountable.

How actions should be executed.

Synthetic Intelligence continuously analyzes operational activity, financial performance, customer behavior and organizational processes.

Governance provides the framework that determines how decisions should be made based upon those insights.

Together they create a closed loop between awareness and action.

Organizations can move quickly without sacrificing control.`,
    },

    {
      title: "Role-Based Authority",
      text: `Not every user should have the same authority.

Governance structures support:

• Role-based permissions

• Approval hierarchies

• Department authority

• Management oversight

• Executive controls

Role-based authority allows organizations to align access, approvals and responsibilities with actual organizational structures.

The result is stronger control, clearer accountability and reduced operational risk.`,
    },

    {
      title: "Governance And Risk Management",
      text: `Risk exists in every organization.

Operational risk.

Financial risk.

Compliance risk.

Customer risk.

Technology risk.

Governance creates visibility into these risks.

Avantiqo enables organizations to identify operational, financial, compliance and organizational risks through centralized monitoring, auditability, approval controls and accountability structures.

Governance transforms risk management from reaction into prevention.`,
    },

    {
      title: "Governance And Compliance",
      text: `Compliance defines requirements.

Governance ensures those requirements are followed.

Organizations often focus on compliance outcomes.

Governance focuses on the processes required to achieve those outcomes.

Strong governance simplifies compliance.

Weak governance increases compliance risk.`,
    },

    {
      title: "Governance And Executive Leadership",
      text: `Leadership requires visibility.

Leadership requires accountability.

Leadership requires information.

Executives should be able to understand:

Performance.
Risk.
Approvals.
Responsibilities.
Compliance.
Operations.

Avantiqo consolidates approvals, accountability, performance, risk exposure, compliance obligations and operational activity into a unified view.

Leadership teams gain visibility into both outcomes and the decisions that produced them.

This transforms governance from a reactive activity into a strategic capability.`,
    },

    {
      title: "The Future Of Governance",
      text: `The future of governance is not more bureaucracy.

The future of governance is intelligent accountability.

Organizations should move quickly while maintaining control.

They should innovate while maintaining oversight.

They should scale while maintaining accountability.

This requires governance systems integrated into daily operations.

Avantiqo embeds governance directly into daily operations through workflows, approvals, accountability structures, audit trails and intelligence layers.

Organizations can scale while maintaining control, visibility and trust.

That is the governance model Avantiqo is designed to support.`,
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
              GOVERNANCE & ACCOUNTABILITY
            </div>

            <h1 className="max-w-5xl text-6xl font-extralight leading-tight tracking-[-0.06em] md:text-8xl">
              Governance Is Not
              <br />
              <span className="bg-gradient-to-r from-[#D6A66A] via-[#E7C78A] to-[#F7E7B0] bg-clip-text text-transparent">
                Management.
              </span>
            </h1>

            <p className="mt-8 max-w-4xl text-xl leading-10 text-white/65">
              Governance creates accountability.
              Accountability creates trust.
              Trust creates confidence.
              Confidence creates better decisions.
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
              Governance Creates Accountability.
              <br />
              Accountability Creates Trust.
              <br />
              Trust Creates Confidence.
            </h2>

            <p className="mx-auto mt-8 max-w-4xl text-xl leading-10 text-white/70">
              Governance is not where organizations slow down.
              Governance is where organizations gain control.
            </p>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

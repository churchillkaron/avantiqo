"use client";

import SiteTopNav from "@/app/components/SiteTopNav";
import Footer from "@/components/layout/Footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#02030A] text-white">
      <SiteTopNav />

      <section className="relative px-6 py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#4A2C12_0%,#15110A_30%,#02030A_100%)]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="rounded-[46px] border border-[#D6A66A]/20 bg-white/[0.03] p-10 backdrop-blur-3xl md:p-16">

            <div className="mb-6 text-xs uppercase tracking-[0.45em] text-[#D6A66A]">
              PRIVACY & TRUST
            </div>

            <h1 className="max-w-5xl text-6xl font-extralight leading-tight tracking-[-0.06em] md:text-8xl">
              Privacy Is Not A Feature.
              <br />
              <span className="bg-gradient-to-r from-[#D6A66A] via-[#E7C78A] to-[#F7E7B0] bg-clip-text text-transparent">
                It Is A Foundation.
              </span>
            </h1>

            <p className="mt-8 max-w-4xl text-xl leading-10 text-white/65">
              Trust cannot exist without privacy. Organizations cannot build
              intelligence, governance, compliance, operational visibility or
              enterprise-scale decision making without confidence that their
              information remains protected.
            </p>

          </div>

        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl space-y-10">

          {[
            {
              title: "Privacy By Design",
              text: `Privacy cannot be added after a system is built.

Privacy must be incorporated into architecture, governance, access controls, workflows, intelligence systems and operational processes from the beginning.

At Avantiqo, privacy is not treated as a legal checkbox. Privacy is built into the foundation of the platform itself.

Every workflow.
Every approval.
Every operational process.
Every customer interaction.
Every financial transaction.
Every intelligence layer.

Privacy exists as a fundamental design principle because trust is the foundation of every modern organization.`,
            },

            {
              title: "Privacy Is A Business Requirement",
              text: `Modern organizations generate information continuously.

Every customer interaction.
Every financial transaction.
Every approval.
Every operational event.
Every employee action.
Every project milestone.
Every compliance activity.
Every document.
Every decision.

Together these activities create the operational memory of the organization.

Protecting that information is not simply a regulatory requirement.

It is a business requirement.`,
            },

            {
              title: "Who Owns The Data?",
              text: `Your organization owns its data.

Always.

Avantiqo does not sell customer information.
Avantiqo does not sell employee information.
Avantiqo does not sell operational information.
Avantiqo does not sell financial information.
Avantiqo does not monetize organizational intelligence.

The platform exists to help organizations understand themselves, not to take ownership of the information they generate.`,
            },

            {
              title: "How Avantiqo Does NOT Use Data",
              text: `Avantiqo does not sell customer data.

Avantiqo does not share information between organizations.

Avantiqo does not build advertising profiles.

Avantiqo does not monetize operational activity.

Avantiqo does not use customer information to train public AI systems.

The objective of the platform is to help organizations understand themselves.

Not to exploit the information they generate.`,
            },

            {
              title: "Synthetic Intelligence And Privacy",
              text: `Synthetic Intelligence introduces a fundamentally different approach to intelligence.

Traditional artificial intelligence often attempts to learn from large volumes of public information.

Synthetic Intelligence focuses on understanding organizational reality.

Its purpose is not to profile individuals.

Its purpose is not to create advertising models.

Its purpose is not to exploit user behavior.

Its purpose is organizational awareness.

Not personal surveillance.`,
            },

            {
              title: "Organizational Privacy",
              text: `Organizations require privacy in the same way individuals do.

Business strategies.
Financial performance.
Operational metrics.
Customer relationships.
Supplier relationships.
Internal processes.
Future plans.
Organizational intelligence.

These are critical assets.

Avantiqo treats organizational information with the same seriousness as personal information.

The objective is not simply protecting records.

The objective is protecting the organization itself.`,
            },

            {
              title: "Privacy Across The Entire Organization",
              text: `Privacy cannot be limited to one department.

Privacy must exist across every function.

Finance.
Operations.
Sales.
Marketing.
Human Resources.
Compliance.
Management.
Customer Service.
Leadership.

If privacy exists in one area but fails in another, the organization remains exposed.

For this reason, privacy must be integrated into the operational framework rather than treated as a separate process.`,
            },

            {
              title: "The Risk Of Fragmented Systems",
              text: `Many organizations operate across dozens of disconnected systems.

Accounting software.
CRM systems.
Project management systems.
Payroll systems.
Customer support systems.
Marketing platforms.
Spreadsheets.
Email.
Documents.

Each additional system increases risk.

Information becomes duplicated.

Visibility becomes fragmented.

Control becomes inconsistent.

Privacy becomes difficult to manage.

Avantiqo reduces this complexity by bringing operational intelligence into a unified environment with centralized visibility and governance.`,
            },

            {
              title: "Responsible Intelligence",
              text: `Intelligence systems should strengthen trust.

Not weaken it.

Organizations should never be forced to choose between intelligence and privacy.

Both should exist together.

Responsible intelligence requires:

• Transparency

• Governance

• Accountability

• Access Control

• Auditability

• Privacy

Avantiqo is built around the principle that intelligence becomes more valuable when trust is preserved.`,
            },

            {
              title: "Data Lifecycle Management",
              text: `Privacy extends beyond storage.

Privacy also includes lifecycle management.

Organizations must understand:

Why information is collected.

How it is used.

Who can access it.

How long it is retained.

When it should be archived.

When it should be deleted.

When it should be anonymized.

Privacy requires visibility throughout the entire lifecycle of information.`,
            },

            {
              title: "Privacy And Executive Responsibility",
              text: `Privacy is no longer solely an IT responsibility.

Privacy is a leadership responsibility.

Executives are increasingly expected to understand:

Information risk.

Data governance.

Compliance obligations.

Operational accountability.

Organizational intelligence.

Modern leadership requires visibility into all of these areas.

Avantiqo helps organizations create the structures required to manage privacy at scale.`,
            },

            {
              title: "Privacy And Governance",
              text: `Privacy cannot depend on policy alone.

Privacy requires governance.

Governance requires accountability.

Accountability requires visibility.

Visibility requires technology.

This relationship is why privacy, governance, security, compliance and intelligence are interconnected throughout the Avantiqo platform.

Privacy is not an isolated capability.

Privacy is part of the operating model of the organization itself.`,
            },

            {
              title: "Privacy And Trust",
              text: `Trust is one of the most valuable assets any organization possesses.

Customers trust organizations with information.

Employees trust organizations with information.

Partners trust organizations with information.

Investors trust organizations with information.

Without privacy, trust erodes.

Without trust, adoption declines.

Without adoption, intelligence becomes incomplete.

Protecting information is not only about compliance.

It is about preserving trust.`,
            },

            {
              title: "Data Isolation And Organizational Boundaries",
              text: `Every organization operates within its own controlled environment.

Financial information.
Operational information.
Customer information.
Employee information.
Compliance activities.
Organizational intelligence.

Information belonging to one organization is not shared with another organization.

Isolation is fundamental to enterprise trust.`,
            },


            {
              title: "Data Storage And Infrastructure",
              text: `Organizations entrust Avantiqo with operational, financial, customer and organizational information.

Data is stored within professionally managed cloud infrastructure designed for security, reliability, redundancy and availability.

Information is protected through multiple layers of security controls including authentication, authorization, encrypted communication channels, access restrictions and infrastructure-level safeguards.

Avantiqo continuously evaluates infrastructure, access controls and operational processes to maintain a secure operating environment for customer information.

The objective is not only protecting data from external threats, but also ensuring reliability, availability and continuity of operations.`,
            },

            {
              title: "Data Separation And Isolation",
              text: `Every organization operates within its own logical environment.

Customer records, financial information, operational activity, intelligence models, documents and business processes remain isolated from other organizations using the platform.

One organization cannot access the information of another organization.

This separation is fundamental to the architecture of the platform and supports enterprise privacy, security and trust requirements.

Isolation protects confidentiality while allowing organizations to benefit from centralized operational intelligence.`,
            },

            {
              title: "Access Control And Permissions",
              text: `Not every user should have access to every piece of information.

Avantiqo uses role-based access controls to ensure information is visible only to authorized individuals.

Access can be restricted by:

• Organization

• Department

• Role

• Responsibility

• Workflow

• Approval Authority

This ensures that users receive the visibility required to perform their responsibilities without exposing unnecessary information.`,
            },

            {
              title: "Encryption And Data Protection",
              text: `Avantiqo is designed to support industry-standard security practices for protecting information during storage and transmission.

Security controls are continuously reviewed and improved as the platform evolves.

The objective is to maintain confidentiality, integrity and availability of organizational information while supporting enterprise operational requirements.

Protecting information is not a one-time activity. It is an ongoing operational responsibility.`,
            },

            {
              title: "Platform Administrators And Data Access",
              text: `Avantiqo does not provide unrestricted visibility into customer operations.

Administrative access is controlled, monitored and limited to legitimate operational requirements such as support, maintenance, troubleshooting or security investigations.

Access is governed by internal controls and operational procedures designed to protect customer information.

The principle is simple: access should be justified, controlled and accountable.`,
            },

            {
              title: "Artificial Intelligence And Customer Data",
              text: `Customer information is not used to train public artificial intelligence models.

Organizational information remains associated with the organization that generates it.

The purpose of the platform is to help organizations understand themselves, not to contribute organizational information to generalized public intelligence systems.

Synthetic Intelligence focuses on organizational understanding rather than public model training.`,
            },

            {
              title: "Backup, Resilience And Business Continuity",
              text: `Enterprise systems must remain resilient.

Operational continuity requires reliable storage, redundancy, recovery planning and infrastructure resilience.

Organizations depend upon access to operational, financial and customer information to function effectively.

Avantiqo is designed with continuity and long-term operational reliability in mind to support organizations that depend on the platform for critical business processes.`,
            },

            {
              title: "Data Deletion And Exit Rights",
              text: `Organizations should maintain control over their information throughout its lifecycle.

This includes the ability to manage retention requirements, deletion requests, archival policies and platform exit procedures when appropriate.

Data ownership remains with the organization.

Privacy includes the right to control information not only while it exists, but also when it should no longer exist.`,
            },

            {
              title: "Customer Rights And Transparency",
              text: `Organizations and individuals must maintain control over their information.

• Data access requests

• Data correction requests

• Data portability requirements

• Data retention controls

• Data deletion processes

• Audit visibility

Transparency is essential to maintaining trust.`,
            },

            {
              title: "Global Privacy Standards",
              text: `Privacy expectations continue to evolve around the world.

Avantiqo is designed to support organizations operating under:

• GDPR

• Regional privacy regulations

• Industry-specific requirements

• Internal governance policies

Privacy standards are treated as operational requirements rather than legal afterthoughts.`,
            },

            {
              title: "The Future Of Privacy",
              text: `The future of privacy is not secrecy.

The future of privacy is controlled visibility.

The right people should have access to the right information at the right time for the right reasons.

No more.

No less.

Privacy should not prevent organizations from operating effectively.

Privacy should enable organizations to operate responsibly.`,
            },
          ].map((section) => (
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
              Privacy Creates Trust.
              <br />
              Trust Creates Adoption.
              <br />
              Adoption Creates Intelligence.
            </h2>

            <p className="mx-auto mt-8 max-w-4xl text-xl leading-10 text-white/70">
              Privacy is not where enterprise intelligence begins.
              Privacy is what makes enterprise intelligence possible.
            </p>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

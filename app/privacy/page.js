"use client";

import SiteTopNav from "@/app/components/SiteTopNav";
import Footer from "@/components/layout/Footer";
import { useTranslation } from "@/app/providers/I18nProvider";

export default function PrivacyPage() {
  const { translations } = useTranslation();
  const privacy = translations.privacy || {};

  return (
    <main className="min-h-screen overflow-hidden bg-[#02030A] text-white">
      <SiteTopNav />

      <section className="relative px-6 py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#4A2C12_0%,#15110A_30%,#02030A_100%)]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="rounded-[46px] border border-[#D6A66A]/20 bg-white/[0.03] p-10 backdrop-blur-3xl md:p-16">

            <div className="mb-6 text-xs uppercase tracking-[0.45em] text-[#D6A66A]">
              {privacy.hero_label || "PRIVACY & TRUST"}
            </div>

            <h1 className="max-w-5xl text-6xl font-extralight leading-tight tracking-[-0.06em] md:text-8xl">
              {privacy.hero_title || "Privacy Is Not A Feature."}
              <br />
              <span className="bg-gradient-to-r from-[#D6A66A] via-[#E7C78A] to-[#F7E7B0] bg-clip-text text-transparent">
                {privacy.hero_highlight || "It Is A Foundation."}
              </span>
            </h1>

            <p className="mt-8 max-w-4xl text-xl leading-10 text-white/65">
              {privacy.hero_subtitle || "Trust cannot exist without privacy. Organizations cannot build intelligence, governance, compliance, operational visibility or enterprise-scale decision making without confidence that their information remains protected."}
            </p>

          </div>

        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl space-y-10">

          {[
            {
              title: privacy.section_1_title || "Privacy By Design",
              text: privacy.section_1_text || "",
            },

            {
              title: privacy.section_2_title || "Privacy Is A Business Requirement",
              text: privacy.section_2_text || "",
            },

            {
              title: privacy.section_3_title || "Who Owns The Data?",
              text: privacy.section_3_text || "",
            },

            {
              title: privacy.section_4_title || "How Avantiqo Does NOT Use Data",
              text: privacy.section_4_text || "",
            },

            {
              title: privacy.section_5_title || "Synthetic Intelligence And Privacy",
              text: privacy.section_5_text || "",
            },

            {
              title: privacy.section_6_title || "Organizational Privacy",
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
              title: privacy.section_7_title || "Data Lifecycle Management",
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
              title: privacy.section_8_title || "Privacy And Executive Responsibility",
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
              title: privacy.section_9_title || "Privacy And Governance",
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
              title: privacy.section_10_title || "Privacy And Trust",
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
              title: privacy.section_11_title || "Data Isolation And Organizational Boundaries",
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
              title: privacy.section_12_title || "Data Storage And Infrastructure",
              text: `Organizations entrust Avantiqo with operational, financial, customer and organizational information.

Data is stored within professionally managed cloud infrastructure designed for security, reliability, redundancy and availability.

Information is protected through multiple layers of security controls including authentication, authorization, encrypted communication channels, access restrictions and infrastructure-level safeguards.

Avantiqo continuously evaluates infrastructure, access controls and operational processes to maintain a secure operating environment for customer information.

The objective is not only protecting data from external threats, but also ensuring reliability, availability and continuity of operations.`,
            },

            {
              title: privacy.section_13_title || "Data Separation And Isolation",
              text: `Every organization operates within its own logical environment.

Customer records, financial information, operational activity, intelligence models, documents and business processes remain isolated from other organizations using the platform.

One organization cannot access the information of another organization.

This separation is fundamental to the architecture of the platform and supports enterprise privacy, security and trust requirements.

Isolation protects confidentiality while allowing organizations to benefit from centralized operational intelligence.`,
            },

            {
              title: privacy.section_14_title || "Access Control And Permissions",
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
              title: privacy.section_15_title || "Encryption And Data Protection",
              text: `Avantiqo is designed to support industry-standard security practices for protecting information during storage and transmission.

Security controls are continuously reviewed and improved as the platform evolves.

The objective is to maintain confidentiality, integrity and availability of organizational information while supporting enterprise operational requirements.

Protecting information is not a one-time activity. It is an ongoing operational responsibility.`,
            },

            {
              title: privacy.section_16_title || "Platform Administrators And Data Access",
              text: `Avantiqo does not provide unrestricted visibility into customer operations.

Administrative access is controlled, monitored and limited to legitimate operational requirements such as support, maintenance, troubleshooting or security investigations.

Access is governed by internal controls and operational procedures designed to protect customer information.

The principle is simple: access should be justified, controlled and accountable.`,
            },

            {
              title: privacy.section_17_title || "Artificial Intelligence And Customer Data",
              text: `Customer information is not used to train public artificial intelligence models.

Organizational information remains associated with the organization that generates it.

The purpose of the platform is to help organizations understand themselves, not to contribute organizational information to generalized public intelligence systems.

Synthetic Intelligence focuses on organizational understanding rather than public model training.`,
            },

            {
              title: privacy.section_18_title || "Backup, Resilience And Business Continuity",
              text: `Enterprise systems must remain resilient.

Operational continuity requires reliable storage, redundancy, recovery planning and infrastructure resilience.

Organizations depend upon access to operational, financial and customer information to function effectively.

Avantiqo is designed with continuity and long-term operational reliability in mind to support organizations that depend on the platform for critical business processes.`,
            },

            {
              title: privacy.section_19_title || "Data Deletion And Exit Rights",
              text: `Organizations should maintain control over their information throughout its lifecycle.

This includes the ability to manage retention requirements, deletion requests, archival policies and platform exit procedures when appropriate.

Data ownership remains with the organization.

Privacy includes the right to control information not only while it exists, but also when it should no longer exist.`,
            },

            {
              title: privacy.section_20_title || "Customer Rights And Transparency",
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
              title: privacy.section_21_title || "Global Privacy Standards",
              text: `Privacy expectations continue to evolve around the world.

Avantiqo is designed to support organizations operating under:

• GDPR

• Regional privacy regulations

• Industry-specific requirements

• Internal governance policies

Privacy standards are treated as operational requirements rather than legal afterthoughts.`,
            },

            {
              title: privacy.section_22_title || "The Future Of Privacy",
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

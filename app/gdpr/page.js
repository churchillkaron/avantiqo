"use client";

import SiteTopNav from "@/app/components/SiteTopNav";
import Footer from "@/components/layout/Footer";

export default function GDPRPage() {
  const sections = [
    {
      title: "GDPR Is Not A Checkbox",
      text: `The General Data Protection Regulation (GDPR) is not a one-time compliance exercise.

It is an ongoing responsibility.

Organizations are expected to understand what information they collect, why it is collected, how it is used, who can access it and how it is protected.

GDPR requires visibility, accountability and operational discipline.

These principles are closely aligned with the design philosophy of the Avantiqo platform.`,
    },

    {
      title: "What Information Is Stored",
      text: `Organizations using Avantiqo may choose to store operational, financial, customer, employee and organizational information within the platform.

Examples may include:

• Customer records

• Employee information

• Operational activities

• Financial transactions

• Documents

• Approvals

• Workflow activity

• Organizational intelligence

Organizations remain responsible for determining what information is entered into the platform.

Data ownership remains with the organization.`,
    },

    {
      title: "Where Information Is Stored",
      text: `Information is stored within professionally managed cloud infrastructure designed for reliability, availability and security.

Storage environments are designed to support modern enterprise operational requirements while maintaining separation between organizations.

Infrastructure, security controls and operational procedures are continuously evaluated to support privacy, security and compliance objectives.

The objective is protecting confidentiality, integrity and availability of organizational information.`,
    },

    {
      title: "Who Owns The Data",
      text: `Organizations own their data.

Always.

Avantiqo does not claim ownership of customer information, employee information, operational information, financial records or organizational intelligence.

The platform exists to help organizations manage and understand information.

Ownership remains with the organization that creates it.`,
    },

    {
      title: "Who Can Access Information",
      text: `Access is controlled through role-based permissions and organizational boundaries.

Not every user should have access to every piece of information.

Organizations can define visibility based on:

• Role

• Department

• Responsibility

• Authority level

• Workflow participation

The objective is ensuring information is available to authorized individuals while maintaining privacy and accountability.`,
    },

    {
      title: "Right Of Access",
      text: `GDPR provides individuals with the right to request access to personal information.

Organizations should be able to identify relevant information, review stored records and respond appropriately to legitimate requests.

Visibility and traceability support this process.`,
    },

    {
      title: "Right To Rectification",
      text: `Individuals may request correction of inaccurate information.

Organizations should maintain processes that support data quality, accountability and appropriate record management throughout the lifecycle of information.`,
    },

    {
      title: "Right To Erasure",
      text: `Individuals may request deletion of personal information under certain circumstances.

Organizations should establish appropriate retention, deletion and lifecycle management processes to support applicable obligations and legal requirements.

Privacy includes understanding when information should no longer exist.`,
    },

    {
      title: "Data Portability",
      text: `GDPR includes rights related to data portability.

Organizations should maintain visibility into stored information and understand how information can be exported, reviewed and managed when required.`,
    },

    {
      title: "Artificial Intelligence And GDPR",
      text: `Customer information is not used to train public artificial intelligence models.

Synthetic Intelligence focuses on organizational understanding rather than public model training.

Its purpose is to understand workflows, operational relationships, accountability structures and organizational performance.

The objective is organizational awareness.

Not personal profiling.`,
    },

    {
      title: "Auditability And Accountability",
      text: `Strong GDPR compliance depends upon visibility.

Organizations should understand:

Who accessed information.

When access occurred.

Why access occurred.

What actions were performed.

Auditability supports accountability and strengthens trust throughout the organization.`,
    },

    {
      title: "Privacy, Governance And Compliance",
      text: `GDPR does not operate independently.

Privacy.

Governance.

Security.

Compliance.

Accountability.

These capabilities work together.

Organizations that build strong operational controls often find GDPR obligations easier to manage because visibility and accountability already exist throughout daily operations.`,
    },

    {
      title: "The Future Of Data Protection",
      text: `The future of privacy is not secrecy.

The future of privacy is responsible visibility.

Organizations should understand what information exists, who can access it and why it is being used.

Trust is built when visibility, accountability and privacy operate together.

That is the approach Avantiqo is designed to support.`,
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
              GDPR & DATA RIGHTS
            </div>

            <h1 className="max-w-5xl text-6xl font-extralight leading-tight tracking-[-0.06em] md:text-8xl">
              GDPR Is Not
              <br />
              <span className="bg-gradient-to-r from-[#D6A66A] via-[#E7C78A] to-[#F7E7B0] bg-clip-text text-transparent">
                A Checkbox.
              </span>
            </h1>

            <p className="mt-8 max-w-4xl text-xl leading-10 text-white/65">
              GDPR is a continuous responsibility built on visibility,
              accountability, governance, privacy and trust.
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
              Privacy Creates Trust.
              <br />
              Governance Creates Accountability.
              <br />
              GDPR Protects Rights.
            </h2>

            <p className="mx-auto mt-8 max-w-4xl text-xl leading-10 text-white/70">
              Data protection is not a compliance exercise.
              It is a responsibility that exists throughout the lifecycle of information.
            </p>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

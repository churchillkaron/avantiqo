"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const runtimeGroups = [
  {
    title: "Restaurant Runtime",
    description:
      "Live hospitality operations connected into one synchronized operational system.",
    items: [
      "POS Runtime",
      "Kitchen Runtime",
      "Table Management",
      "Reservations",
      "Live Order Flow",
      "Production Runtime",
      "Inventory Deduction",
      "Waste Monitoring",
      "Shift Runtime",
      "Service Charge Engine",
    ],
  },
  {
    title: "Hotel Runtime",
    description:
      "Operational visibility across hospitality properties and guest systems.",
    items: [
      "Booking Runtime",
      "Guest Operations",
      "Housekeeping Runtime",
      "Room State Engine",
      "Revenue Runtime",
      "Multi-Property Visibility",
      "Procurement Runtime",
      "Staff Coordination",
      "Operational Approvals",
      "Financial Synchronization",
    ],
  },
  {
    title: "Construction Runtime",
    description:
      "Connected site operations, approvals and project execution.",
    items: [
      "Site Runtime",
      "Project Costing",
      "Contractor Runtime",
      "Material Tracking",
      "Progress Runtime",
      "Approval Flow",
      "Budget Variance",
      "Payroll Runtime",
      "Operational Reporting",
      "Risk Monitoring",
    ],
  },
  {
    title: "Accounting Runtime",
    description:
      "Enterprise governance, financial intelligence and audit control.",
    items: [
      "Journal Engine",
      "Payroll Runtime",
      "Procurement Governance",
      "Inventory Ledger",
      "3-Way Matching",
      "Reconciliation Runtime",
      "Financial Close",
      "Audit Chain",
      "Approval Governance",
      "Multi-Entity Consolidation",
    ],
  },
  {
    title: "Growth Runtime",
    description:
      "AI-powered growth, marketing and customer intelligence systems.",
    items: [
      "AI Marketing",
      "Design Studio",
      "Campaign Runtime",
      "CRM Runtime",
      "Customer Intelligence",
      "Meta Publishing",
      "Content Engine",
      "Localization Engine",
      "Lead Runtime",
      "Commercial Visibility",
    ],
  },
  {
    title: "Executive Runtime",
    description:
      "Enterprise visibility, governance and operational intelligence.",
    items: [
      "Live Control Center",
      "Executive Dashboard",
      "AI Runtime",
      "Risk Monitoring",
      "Governance Runtime",
      "Approval Intelligence",
      "Operational Synchronization",
      "Entity Oversight",
      "Behavior Analysis",
      "Predictive Intelligence",
    ],
  },
];

export default function ModulesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#02040A] text-white">

      <Navbar />

      <section className="relative px-6 py-24 md:py-36">

        <div className="absolute left-[-200px] top-[120px] h-[500px] w-[500px] rounded-full bg-purple-700/20 blur-[140px]" />

        <div className="absolute right-[-100px] top-[200px] h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">

          <p className="mb-6 text-xs tracking-[0.28em] text-[#D6A66A]">
            ENTERPRISE OPERATIONAL ARCHITECTURE
          </p>

          <h1 className="max-w-[980px] text-[56px] leading-[1.02] tracking-[-0.06em] md:text-[110px] font-extralight">
            The operational nervous system for modern enterprises.
          </h1>

          <p className="mt-10 max-w-3xl text-[17px] leading-[1.9] text-white/55">
            Avantiqo connects live operations, finance, hospitality,
            construction, accounting, AI intelligence, marketing,
            governance and executive visibility into one synchronized
            enterprise runtime architecture.
          </p>

        </div>

      </section>

      <section className="px-6 pb-24">

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-3">

          {runtimeGroups.map((group) => (

            <RuntimeCard
              key={group.title}
              title={group.title}
              description={group.description}
              items={group.items}
            />

          ))}

        </div>

      </section>

      <section className="px-6 pb-24 md:pb-32">

        <div className="mx-auto max-w-7xl">

          <div className="enterprise-runtime-card p-8 md:p-14">

            <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

              <div>

                <p className="runtime-label mb-3">
                  CONNECTED ENTERPRISE FLOW
                </p>

                <h2 className="max-w-5xl text-4xl md:text-6xl font-extralight tracking-[-0.05em]">
                  Live operational intelligence synchronized across every runtime.
                </h2>

              </div>

              <div className="runtime-status-active runtime-value">
                ALL SYSTEMS ACTIVE
              </div>

            </div>

            <div className="flex flex-wrap items-center gap-4">

              <FlowItem label="POS Runtime" />
              <Arrow />

              <FlowItem label="Kitchen Runtime" />
              <Arrow />

              <FlowItem label="Inventory Runtime" />
              <Arrow />

              <FlowItem label="Accounting Runtime" />
              <Arrow />

              <FlowItem label="AI Runtime" />
              <Arrow />

              <FlowItem label="Executive Visibility" />

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}

function RuntimeCard({
  title,
  description,
  items,
}) {
  return (
    <div className="enterprise-runtime-card p-6 md:p-8">

      <p className="runtime-label mb-4">
        ENTERPRISE RUNTIME
      </p>

      <h3 className="text-3xl font-extralight tracking-[-0.04em]">
        {title}
      </h3>

      <p className="mt-4 text-white/55 leading-8">
        {description}
      </p>

      <div className="mt-8 grid gap-3">

        {items.map((item) => (

          <div
            key={item}
            className="rounded-2xl border border-white/[0.05] bg-black/20 px-4 py-3 text-white/75"
          >
            {item}
          </div>

        ))}

      </div>

    </div>
  );
}

function FlowItem({
  label,
}) {
  return (
    <div className="rounded-full border border-white/[0.06] bg-white/[0.03] px-6 py-3 text-white/75">
      {label}
    </div>
  );
}

function Arrow() {
  return (
    <div className="text-white/20">
      →
    </div>
  );
}

"use client";
import Image from "next/image"
export default function SecurityGovernance() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      {/* BACKGROUND */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B5CF6]/10 blur-[140px] md:h-[1100px] md:w-[1100px] md:blur-[220px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mx-auto mb-16 max-w-5xl text-center md:mb-24">
          <p className="mb-6 text-xs tracking-[0.28em] text-[#B58AF8]">
            SECURITY & GOVERNANCE
          </p>

          <h2
            className="text-5xl text-white sm:text-6xl md:text-[76px]"
            style={{
              lineHeight: 1,
              fontWeight: 300,
              letterSpacing: "-0.05em",
            }}
          >
            Enterprise security
            <br />

            <span className="bg-gradient-to-r from-[#E7C38A] via-white to-[#8B5CF6] bg-clip-text text-transparent">
              built into operations.
            </span>
          </h2>

          <p
            className="mx-auto mt-8 max-w-4xl text-white/55 md:mt-10"
            style={{
              fontSize: "20px",
              lineHeight: 1.9,
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            Avantiqo provides enterprise-grade permissions,
            operational governance, approval control,
            audit visibility and AI accountability across
            the entire organization infrastructure.
          </p>
        </div>

        {/* IMAGE */}
        <div className="overflow-hidden rounded-[28px] border border-white/[0.05] bg-white/[0.025] p-4 backdrop-blur-3xl md:rounded-[42px] md:p-8">
         <Image
  src="/showcase/security-governance.png"
  alt="Security governance"
  width={1600}
  height={900}
  className="w-full rounded-[24px] border border-white/[0.05]"
/>
        </div>

        {/* CARDS */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4 md:mt-14 md:gap-6">
          {[
            {
              title: "Role Permissions",
              text: "Control access across departments, managers, finance teams, operations and ownership levels.",
            },
            {
              title: "Approval Chains",
              text: "Purchases, payroll, invoices and operational workflows require controlled approval logic.",
            },
            {
              title: "Audit Visibility",
              text: "Every operational action, financial change and approval event is fully traceable.",
            },
            {
              title: "Enterprise Isolation",
              text: "Multi-company and multi-location environments remain securely separated and protected.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[26px] border border-white/[0.05] bg-white/[0.025] p-6 backdrop-blur-3xl md:rounded-[30px] md:p-8"
            >
              <h4
                className="text-2xl text-white md:text-[28px]"
                style={{
                  lineHeight: 1.15,
                  fontWeight: 300,
                  letterSpacing: "-0.03em",
                }}
              >
                {item.title}
              </h4>

              <p
                className="mt-4 text-white/45 md:mt-5"
                style={{
                  fontSize: "16px",
                  lineHeight: 1.9,
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
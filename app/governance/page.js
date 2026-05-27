"use client";

export default function GovernancePage() {
  return (
    <main className="min-h-screen bg-[#02030A] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-24 pt-40 md:pb-32 md:pt-52">

        {/* GLOW */}
        <div className="absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B5CF6]/10 blur-[220px]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="max-w-5xl">

            <p className="mb-8 text-xs tracking-[0.35em] text-[#B58AF8]">
              OPERATIONAL GOVERNANCE
            </p>

            <h1
              className="text-5xl text-white sm:text-6xl md:text-[96px]"
              style={{
                lineHeight: 0.95,
                fontWeight: 300,
                letterSpacing: "-0.06em",
              }}
            >
              Enterprise operational
              <br />

              <span className="bg-gradient-to-r from-[#E7C38A] via-white to-[#8B5CF6] bg-clip-text text-transparent">
                governance and accountability.
              </span>

            </h1>

            <p
              className="mt-10 max-w-3xl text-white/55"
              style={{
                fontSize: "22px",
                lineHeight: 1.9,
                fontWeight: 400,
                letterSpacing: "-0.01em",
              }}
            >
              Avantiqo is designed with enterprise-grade
              governance systems supporting operational oversight,
              approval structures, organizational accountability,
              audit visibility and multi-location control.
            </p>

          </div>

        </div>

      </section>

      {/* GOVERNANCE CONTENT */}
      <section className="relative overflow-hidden px-6 pb-24 md:pb-36">

        <div className="mx-auto grid max-w-7xl gap-6 md:gap-8 lg:grid-cols-[280px_1fr]">

          {/* SIDEBAR */}
          <div className="h-fit rounded-[34px] border border-white/[0.06] bg-white/[0.03] p-8 backdrop-blur-3xl lg:sticky lg:top-32">

            <p className="mb-8 text-xs tracking-[0.35em] text-[#B58AF8]">
              GOVERNANCE INDEX
            </p>

            <div className="space-y-5 text-white/50">

              {[
                "Operational Oversight",
                "Approval Structures",
                "Audit Visibility",
                "Organizational Accountability",
                "Financial Governance",
                "Workforce Governance",
                "AI Governance",
                "Multi-Location Control",
                "Infrastructure Policies",
                "Enterprise Compliance",
              ].map((item) => (
                <div
                  key={item}
                  className="cursor-pointer transition duration-300 hover:text-white"
                >
                  {item}
                </div>
              ))}

            </div>

          </div>

          {/* CONTENT */}
          <div className="space-y-8">

            {[
              {
                title: "Operational Oversight",
                text: "Avantiqo includes operational oversight systems designed to support enterprise visibility, infrastructure accountability and organizational management across connected operational environments. Governance functionality may include workflow visibility, operational status monitoring, management reporting and infrastructure coordination designed for scalable business operations.",
              },
              {
                title: "Approval Structures",
                text: "Organizations may configure approval workflows and authorization structures for financial activity, operational procedures, procurement actions, workforce management and enterprise infrastructure changes. Approval systems are intended to support operational accountability, governance integrity and organizational oversight procedures.",
              },
              {
                title: "Audit Visibility",
                text: "Operational activity, infrastructure actions, workflow events and approval processes may be recorded through platform audit systems designed to support enterprise accountability and governance visibility. Audit visibility functionality assists organizations in reviewing operational activity, workflow integrity and organizational infrastructure usage.",
              },
              {
                title: "Organizational Accountability",
                text: "Avantiqo governance systems are designed to support organizational accountability through permissions, operational logging, approval visibility and infrastructure role structures. Organizations remain responsible for implementing appropriate internal governance procedures and operational management practices within their business environments.",
              },
              {
                title: "Financial Governance",
                text: "Financial infrastructure functionality may include approval chains, accounting visibility, procurement governance, payroll oversight and operational financial monitoring systems intended to support enterprise-grade financial accountability and infrastructure control standards.",
              },
              {
                title: "Workforce Governance",
                text: "Workforce governance functionality may include operational permissions, attendance visibility, approval systems, scheduling oversight, performance tracking and organizational management structures intended to support operational accountability within workforce environments.",
              },
              {
                title: "AI Governance",
                text: "AI systems within Avantiqo are designed to operate within controlled enterprise environments and governance structures. AI recommendations, automation workflows, forecasting systems and optimization engines remain connected to operational oversight procedures, infrastructure permissions and organizational accountability standards.",
              },
              {
                title: "Multi-Location Control",
                text: "Organizations operating across multiple locations may configure operational visibility structures, reporting layers, management permissions and infrastructure governance controls according to organizational requirements and enterprise operational structures.",
              },
              {
                title: "Infrastructure Policies",
                text: "Organizations utilizing Avantiqo infrastructure remain responsible for implementing internal operational policies, governance procedures and organizational management standards appropriate for their industries, workforce environments and compliance obligations.",
              },
              {
                title: "Enterprise Compliance",
                text: "Avantiqo infrastructure is designed to support enterprise operational governance, organizational accountability and scalable compliance environments. Organizations remain responsible for ensuring operational usage aligns with applicable legal requirements, industry standards and organizational governance obligations.",
              },
            ].map((section) => (
              <div
                key={section.title}
                className="overflow-hidden rounded-[34px] border border-white/[0.06] bg-white/[0.03] p-6 md:p-10 backdrop-blur-3xl"
              >

                <div className="mb-8 h-[1px] w-20 bg-gradient-to-r from-[#8B5CF6] to-transparent" />

                <h2
                  className="text-white"
                  style={{
                    fontSize: "42px",
                    lineHeight: 1.05,
                    fontWeight: 300,
                    letterSpacing: "-0.04em",
                  }}
                >
                  {section.title}
                </h2>

                <p
                  className="mt-8 max-w-4xl text-white/50"
                  style={{
                    fontSize: "18px",
                    lineHeight: 2,
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {section.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}
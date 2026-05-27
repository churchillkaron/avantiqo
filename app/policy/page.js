"use client";

export default function PolicyPage() {
  return (
    <main className="min-h-screen bg-[#02030A] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-24 pt-40 md:pb-32 md:pt-52">

        {/* GLOW */}
        <div className="absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B5CF6]/10 blur-[220px]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="max-w-5xl">

            <p className="mb-8 text-xs tracking-[0.35em] text-[#B58AF8]">
              LEGAL & COMPLIANCE
            </p>

            <h1
              className="text-5xl text-white sm:text-6xl md:text-[96px]"
              style={{
                lineHeight: 0.95,
                fontWeight: 300,
                letterSpacing: "-0.06em",
              }}
            >
              Enterprise trust,
              <br />

              <span className="bg-gradient-to-r from-[#E7C38A] via-white to-[#8B5CF6] bg-clip-text text-transparent">
                security and governance.
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
              operational governance, organizational security,
              AI infrastructure integrity and scalable compliance
              systems for modern business environments.
            </p>

          </div>

        </div>

      </section>

      {/* POLICY CONTENT */}
      <section className="relative overflow-hidden px-6 pb-24 md:pb-36">

        <div className="mx-auto grid max-w-7xl gap-6 md:gap-8 lg:grid-cols-[280px_1fr]">

          {/* SIDEBAR */}
          <div className="h-fit rounded-[34px] border border-white/[0.05] bg-white/[0.025] p-8 backdrop-blur-3xl lg:sticky lg:top-32">

            <p className="mb-8 text-xs tracking-[0.35em] text-[#B58AF8]">
              POLICY INDEX
            </p>

            <div className="space-y-5 text-white/50">

              {[
                "Privacy Policy",
                "Terms of Service",
                "Operational Governance",
                "Enterprise Security",
                "AI Infrastructure",
                "Data Handling",
                "Authorized Access",
                "Compliance Standards",
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
                title: "Privacy Policy",
                text: "Avantiqo processes organizational and operational data exclusively for authorized platform functionality, enterprise workflows and infrastructure operations. Data visibility is restricted according to organizational permissions, governance structures and operational access controls.",
              },
              {
                title: "Terms of Service",
                text: "Platform access is provided exclusively for authorized business operations, enterprise workflows and approved organizational usage. Users are responsible for maintaining infrastructure integrity, organizational compliance and operational accountability within connected systems.",
              },
              {
                title: "Operational Governance",
                text: "Avantiqo includes approval systems, audit visibility, operational logging and role-based authorization across connected enterprise infrastructure. Governance functionality is designed to maintain operational transparency and organizational accountability.",
              },
              {
                title: "Enterprise Security",
                text: "Enterprise infrastructure security includes role permissions, organizational isolation, encrypted communication layers and operational access governance across all connected systems and platform environments.",
              },
              {
                title: "AI Infrastructure",
                text: "AI systems operate within controlled enterprise workflows designed for forecasting, optimization, automation and operational intelligence. AI recommendations remain connected to governance controls and organizational oversight.",
              },
              {
                title: "Data Handling",
                text: "Operational, financial and organizational information is processed exclusively for platform functionality, workflow execution, infrastructure optimization and enterprise system synchronization.",
              },
              {
                title: "Authorized Access",
                text: "Access to enterprise infrastructure is restricted through organizational permissions, role visibility and operational governance systems. Unauthorized access attempts may result in infrastructure restrictions or account suspension.",
              },
              {
                title: "Compliance Standards",
                text: "Avantiqo infrastructure is designed to support enterprise operational standards, organizational governance requirements and scalable compliance environments across multi-location operations.",
              },
            ].map((section) => (
              <div
                key={section.title}
                className="overflow-hidden rounded-[34px] border border-white/[0.05] bg-white/[0.025] p-6 md:p-10 backdrop-blur-3xl"
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
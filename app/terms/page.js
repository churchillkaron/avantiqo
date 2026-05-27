"use client";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#02030A] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-24 pt-40 md:pb-32 md:pt-52">

        {/* GLOW */}
        <div className="absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B5CF6]/10 blur-[220px]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="max-w-5xl">

            <p className="mb-8 text-xs tracking-[0.35em] text-[#B58AF8]">
              TERMS OF SERVICE
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
                platform terms and governance.
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
              These Terms of Service govern access to
              Avantiqo operational infrastructure,
              enterprise systems, AI functionality,
              organizational workflows and connected
              platform environments.
            </p>

          </div>

        </div>

      </section>

      {/* TERMS CONTENT */}
      <section className="relative overflow-hidden px-6 pb-24 md:pb-36">

        <div className="mx-auto grid max-w-7xl gap-6 md:gap-8 lg:grid-cols-[280px_1fr]">

          {/* SIDEBAR */}
          <div className="h-fit rounded-[34px] border border-white/[0.05] bg-white/[0.025] p-8 backdrop-blur-3xl lg:sticky lg:top-32">

            <p className="mb-8 text-xs tracking-[0.35em] text-[#B58AF8]">
              TERMS INDEX
            </p>

            <div className="space-y-5 text-white/50">

              {[
                "Platform Usage",
                "Enterprise Access",
                "Organizational Responsibilities",
                "Operational Governance",
                "AI Infrastructure",
                "Security Requirements",
                "Data Visibility",
                "Service Availability",
                "Infrastructure Restrictions",
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
                title: "Platform Usage",
                text: "Avantiqo provides enterprise operational infrastructure designed for organizational management, workflow orchestration, AI automation, financial visibility, workforce operations and scalable business environments. Platform access is intended exclusively for authorized operational and enterprise use. Users may not utilize the platform for unlawful activities, unauthorized access attempts, infrastructure disruption or activities intended to compromise operational integrity.",
              },
              {
                title: "Enterprise Access",
                text: "Access to enterprise infrastructure is controlled through organizational permissions, role-based authorization systems and operational governance layers. Organizations are responsible for maintaining accurate user access structures, internal authorization policies and operational accountability for connected personnel within the platform environment.",
              },
              {
                title: "Organizational Responsibilities",
                text: "Organizations utilizing Avantiqo infrastructure are responsible for maintaining operational accuracy, lawful data handling practices, financial compliance obligations and appropriate internal governance procedures. Platform users must ensure that operational information, workforce data, financial records and organizational workflows remain aligned with applicable legal and organizational standards.",
              },
              {
                title: "Operational Governance",
                text: "Avantiqo includes approval systems, audit visibility, infrastructure logging and operational oversight functionality designed to support organizational governance. Organizations remain responsible for implementing internal operational procedures, approval hierarchies and management oversight structures appropriate for their operational environments.",
              },
              {
                title: "AI Infrastructure",
                text: "AI functionality within Avantiqo may include forecasting systems, operational recommendations, workflow automation, optimization engines and infrastructure intelligence. AI-generated recommendations are intended to support operational decision-making processes and should be reviewed within the context of organizational oversight and enterprise governance procedures.",
              },
              {
                title: "Security Requirements",
                text: "Organizations are responsible for maintaining appropriate credential security, access controls and infrastructure protection practices within their operational environments. Unauthorized credential sharing, access misuse, security circumvention or operational abuse may result in infrastructure restrictions or account suspension.",
              },
              {
                title: "Data Visibility",
                text: "Operational and organizational data visibility is controlled through enterprise permissions, role-based access systems and infrastructure governance layers. Avantiqo processes organizational information exclusively for platform functionality, infrastructure operations and authorized workflow execution.",
              },
              {
                title: "Service Availability",
                text: "Avantiqo continuously develops and maintains enterprise operational infrastructure; however, uninterrupted service availability cannot be guaranteed in all circumstances. Infrastructure maintenance, system upgrades, operational incidents or third-party service interruptions may affect temporary platform availability.",
              },
              {
                title: "Infrastructure Restrictions",
                text: "Users may not attempt to reverse engineer, disrupt, overload, compromise or improperly access any component of the Avantiqo platform, enterprise systems, operational infrastructure or connected services. Unauthorized infrastructure manipulation, exploitation attempts or security violations are strictly prohibited.",
              },
              {
                title: "Compliance Standards",
                text: "Organizations are responsible for ensuring that their operational usage of Avantiqo aligns with applicable laws, industry regulations, employment standards, financial requirements and organizational compliance obligations within their jurisdictions and operational environments.",
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
"use client";

export default function GDPRPage() {
  return (
    <main className="min-h-screen bg-[#02030A] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-24 pt-40 md:pb-32 md:pt-52">

        {/* GLOW */}
        <div className="absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B5CF6]/10 blur-[220px]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="max-w-5xl">

            <p className="mb-8 text-xs tracking-[0.35em] text-[#B58AF8]">
              GDPR COMPLIANCE
            </p>

            <h1
              className="text-5xl text-white sm:text-4xl md:text-6xl md:text-[96px]"
              style={{
                lineHeight: 0.95,
                fontWeight: 300,
                letterSpacing: "-0.06em",
              }}
            >
              Enterprise data
              <br />

              <span className="bg-gradient-to-r from-[#E7C38A] via-white to-[#8B5CF6] bg-clip-text text-transparent">
                privacy and information governance.
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
              data handling, organizational privacy controls,
              infrastructure governance and operational
              access management aligned with modern
              GDPR principles and compliance practices.
            </p>

          </div>

        </div>

      </section>

      {/* GDPR CONTENT */}
      <section className="relative overflow-hidden px-6 pb-24 md:pb-36">

        <div className="mx-auto grid max-w-7xl gap-4 md:p-8 lg:grid-cols-[280px_1fr]">

          {/* SIDEBAR */}
          <div className="h-fit rounded-[34px] border border-white/10 bg-white/[0.03] p-4 md:p-8 backdrop-blur-3xl lg:sticky lg:top-32">

            <p className="mb-8 text-xs tracking-[0.35em] text-[#B58AF8]">
              GDPR INDEX
            </p>

            <div className="space-y-5 text-white/50">

              {[
                "Data Collection",
                "Infrastructure Storage",
                "Access Controls",
                "Organizational Visibility",
                "AI Processing",
                "Data Retention",
                "User Rights",
                "Security Measures",
                "Third-Party Services",
                "Compliance Governance",
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
                title: "Data Collection",
                text: "Avantiqo collects and processes organizational, operational and infrastructure-related information necessary for enterprise workflows, platform functionality, AI systems and connected operational services. This may include user account information, workforce records, operational workflows, financial activity, inventory information, organizational structures and platform interaction data required to operate enterprise infrastructure environments.",
              },
              {
                title: "Infrastructure Storage",
                text: "Organizational information is stored within secured cloud infrastructure environments utilizing enterprise-grade database architecture, access isolation and operational security controls. Data is stored within controlled infrastructure systems designed to restrict unauthorized access, maintain operational integrity and support organizational governance requirements. Access to infrastructure environments is limited to authorized systems, authenticated organizational users and approved administrative processes.",
              },
              {
                title: "Access Controls",
                text: "Platform visibility is managed through role-based authorization systems, organizational permissions and operational governance layers. Organizations control user access according to operational responsibilities, approval structures and internal governance procedures. Access to financial systems, workforce infrastructure, operational workflows and enterprise intelligence environments may be restricted according to organizational role structures.",
              },
              {
                title: "Organizational Visibility",
                text: "Operational information remains visible only within authorized organizational environments and infrastructure permissions. Multi-location organizations may configure visibility structures, reporting access, management permissions and operational oversight layers according to internal governance requirements and organizational responsibilities.",
              },
              {
                title: "AI Processing",
                text: "AI systems within Avantiqo may process operational data for forecasting, optimization, automation, recommendation generation and infrastructure intelligence functionality. AI processing is designed to operate within controlled organizational environments and enterprise governance structures. AI-generated outputs are intended to support operational workflows and enterprise decision-making processes.",
              },
              {
                title: "Data Retention",
                text: "Organizational information is retained only for operational functionality, infrastructure continuity, enterprise reporting, compliance requirements and authorized workflow execution. Organizations may request modification or deletion of certain information where legally and operationally appropriate. Some infrastructure records, audit logs or financial records may require retention for compliance, governance or operational accountability purposes.",
              },
              {
                title: "User Rights",
                text: "Organizations and authorized users may request access to applicable information associated with their operational environments, subject to organizational permissions, governance procedures and applicable legal requirements. Users may request corrections to inaccurate information or request deletion of eligible personal data in accordance with operational obligations and compliance standards.",
              },
              {
                title: "Security Measures",
                text: "Avantiqo maintains infrastructure security measures including encrypted communication layers, authentication systems, organizational isolation controls, role permissions, operational logging and infrastructure monitoring processes designed to support enterprise-grade security environments and operational protection standards.",
              },
              {
                title: "Third-Party Services",
                text: "Certain platform functionality may rely on approved third-party infrastructure providers, cloud systems, communication services or operational integrations necessary for enterprise functionality. Third-party services are selected according to infrastructure reliability, operational security and enterprise platform requirements.",
              },
              {
                title: "Compliance Governance",
                text: "Avantiqo infrastructure is designed to support organizational governance, operational accountability and modern data handling practices aligned with GDPR principles and enterprise compliance environments. Organizations remain responsible for implementing internal compliance procedures appropriate for their jurisdictions, workforce structures and operational environments.",
              },
            ].map((section) => (
              <div
                key={section.title}
                className="overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.03] p-5 md:p-10 backdrop-blur-3xl"
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
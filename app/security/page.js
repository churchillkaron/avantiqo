"use client";

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-[#02030A] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-24 pt-40 md:pb-32 md:pt-52">

        {/* GLOW */}
        <div className="absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B5CF6]/10 blur-[220px]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="max-w-5xl">

            <p className="mb-8 text-xs tracking-[0.35em] text-[#B58AF8]">
              ENTERPRISE SECURITY
            </p>

            <h1
              className="text-5xl text-white sm:text-6xl md:text-[96px]"
              style={{
                lineHeight: 0.95,
                fontWeight: 300,
                letterSpacing: "-0.06em",
              }}
            >
              Enterprise infrastructure
              <br />

              <span className="bg-gradient-to-r from-[#E7C38A] via-white to-[#8B5CF6] bg-clip-text text-transparent">
                security and operational protection.
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
              security architecture, operational governance,
              organizational access controls and infrastructure
              protection systems for scalable operational environments.
            </p>

          </div>

        </div>

      </section>

      {/* SECURITY CONTENT */}
      <section className="relative overflow-hidden px-6 pb-24 md:pb-36">

        <div className="mx-auto grid max-w-7xl gap-6 md:gap-8 lg:grid-cols-[280px_1fr]">

          {/* SIDEBAR */}
          <div className="h-fit rounded-[34px] border border-white/[0.05] bg-white/[0.025] p-8 backdrop-blur-3xl lg:sticky lg:top-32">

            <p className="mb-8 text-xs tracking-[0.35em] text-[#B58AF8]">
              SECURITY INDEX
            </p>

            <div className="space-y-5 text-white/50">

              {[
                "Infrastructure Security",
                "Authentication Systems",
                "Role Permissions",
                "Organizational Isolation",
                "Encryption",
                "Audit Logging",
                "AI Infrastructure Security",
                "Operational Monitoring",
                "Incident Response",
                "Security Governance",
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
                title: "Infrastructure Security",
                text: "Avantiqo infrastructure is designed with enterprise-grade operational security architecture intended to support scalable business environments, organizational governance and infrastructure protection. Platform systems operate within secured cloud infrastructure environments with controlled access management, infrastructure monitoring and operational protection procedures.",
              },
              {
                title: "Authentication Systems",
                text: "Access to platform infrastructure is controlled through authenticated access systems, organizational authorization structures and role-based operational permissions. Authentication procedures are designed to restrict unauthorized infrastructure access and maintain operational accountability across connected enterprise environments.",
              },
              {
                title: "Role Permissions",
                text: "Platform access visibility is managed through organizational role permissions and operational governance systems. Organizations may define infrastructure visibility, approval access, financial permissions, workforce access and operational management layers according to internal governance structures and operational responsibilities.",
              },
              {
                title: "Organizational Isolation",
                text: "Organizational environments are logically separated within platform infrastructure to support operational privacy, enterprise governance and infrastructure isolation. Access to organizational systems, operational workflows and enterprise information is restricted according to authenticated permissions and authorized infrastructure visibility.",
              },
              {
                title: "Encryption",
                text: "Avantiqo utilizes encrypted communication layers and secured infrastructure channels designed to support enterprise operational protection standards. Sensitive platform communications and infrastructure interactions are transmitted through secured network environments intended to reduce unauthorized visibility and infrastructure interception risks.",
              },
              {
                title: "Audit Logging",
                text: "Operational actions, approvals, infrastructure events and enterprise workflow activity may be recorded within platform audit systems to support organizational governance, operational visibility and infrastructure accountability. Audit functionality is intended to assist organizations in monitoring enterprise operational activity and workflow integrity.",
              },
              {
                title: "AI Infrastructure Security",
                text: "AI systems operate within controlled infrastructure environments designed to support enterprise governance, operational accountability and organizational oversight. AI-generated recommendations, forecasting systems and automation functionality remain connected to platform permissions, operational visibility and infrastructure governance layers.",
              },
              {
                title: "Operational Monitoring",
                text: "Platform infrastructure may utilize operational monitoring systems, infrastructure visibility processes and anomaly detection functionality intended to support platform reliability, operational continuity and infrastructure protection standards. Monitoring procedures are designed to assist with infrastructure stability and operational integrity.",
              },
              {
                title: "Incident Response",
                text: "Avantiqo maintains operational procedures intended to respond to infrastructure incidents, security events, operational disruptions or unauthorized activity affecting platform environments. Response procedures may include access restrictions, infrastructure review, operational mitigation measures and organizational communication where appropriate.",
              },
              {
                title: "Security Governance",
                text: "Organizations utilizing Avantiqo infrastructure remain responsible for maintaining appropriate internal security procedures, access management practices and organizational governance standards within their operational environments. Platform security functionality is designed to support enterprise operational protection and organizational infrastructure governance.",
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
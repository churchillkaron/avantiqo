"use client";

import SiteTopNav from "@/components/SiteTopNav";

import Image from "next/image";

export default function EnterprisePage() {
  return (
    <>
<SiteTopNav />
<main className="min-h-screen bg-[#02030A] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-24 pt-40 md:pb-32 md:pt-52">

        {/* GLOW */}
        <div className="absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B5CF6]/10 blur-[200px]" />

        <div className="relative mx-auto max-w-7xl">

          {/* TOP GRID */}
          <div className="grid items-center gap-20 lg:grid-cols-[1fr_0.85fr]">

            {/* LEFT */}
            <div className="max-w-5xl">

              <p className="mb-8 text-xs tracking-[0.35em] text-[#B58AF8]">
                ENTERPRISE INFRASTRUCTURE
              </p>

              <h1
                className="text-5xl text-white sm:text-6xl md:text-[96px]"
                style={{
                  lineHeight: 0.95,
                  fontWeight: 300,
                  letterSpacing: "-0.06em",
                }}
              >
                Enterprise-grade
                <br />

                <span className="bg-gradient-to-r from-[#E7C38A] via-white to-[#8B5CF6] bg-clip-text text-transparent">
                  operational infrastructure.
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
                Avantiqo is designed for multi-location organizations,
                enterprise operations and scalable business environments
                requiring governance, permissions, audit visibility,
                operational synchronization and AI infrastructure.
              </p>

            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">

              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-tr from-[#8B5CF6]/20 via-transparent to-[#D6A66A]/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-[40px] border border-white/[0.05] bg-white/[0.025] p-4 backdrop-blur-3xl">

                <Image
                  src="/showcase/enterprise-office.png"
                  alt="Enterprise infrastructure"
                  width={1200}
                  height={900}
                  className="w-full rounded-[28px] object-cover transition-transform duration-700 hover:scale-[1.02]"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ENTERPRISE FEATURES */}
      <section className="relative overflow-hidden px-6 py-24 md:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="mb-20 max-w-3xl">

            <p className="mb-6 text-xs tracking-[0.35em] text-[#B58AF8]">
              ENTERPRISE CAPABILITIES
            </p>

            <h2
              className="text-4xl md:text-[72px]"
              style={{
                lineHeight: 0.95,
                fontWeight: 300,
                letterSpacing: "-0.05em",
              }}
            >
              Built for scale,
              governance and
              operational control.
            </h2>

          </div>

          <div className="grid gap-6 md:gap-8 lg:grid-cols-2">

            {[
              {
                title: "Role Permissions",
                text: "Enterprise access control across finance, operations, payroll, management and ownership.",
              },
              {
                title: "Audit Visibility",
                text: "Every operational action, approval and financial event remains fully traceable.",
              },
              {
                title: "Multi-Location Sync",
                text: "Operations, workforce and financial systems synchronized across all locations.",
              },
              {
                title: "Cloud Infrastructure",
                text: "Scalable enterprise architecture built for modern operational environments.",
              },
              {
                title: "Approval Systems",
                text: "Purchases, payroll and operational workflows controlled through approval chains.",
              },
              {
                title: "Enterprise Security",
                text: "Infrastructure isolation, permissions and operational governance built directly into the platform.",
              },
              {
                title: "Operational Intelligence",
                text: "AI-driven visibility across workflows, finance, staffing and operational performance.",
              },
              {
                title: "Scalable Architecture",
                text: "Designed for enterprise groups, hospitality chains and multi-company organizations.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-[34px] border border-white/[0.05] bg-white/[0.025] p-6 md:p-10 backdrop-blur-3xl transition duration-500 hover:border-white/20 hover:bg-white/[0.05]"
              >

                <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/0 via-transparent to-[#D6A66A]/0 opacity-0 transition duration-500 group-hover:opacity-100 group-hover:from-[#8B5CF6]/5 group-hover:to-[#D6A66A]/5" />

                <div className="relative">

                  <h3
                    className="text-white"
                    style={{
                      fontSize: "32px",
                      lineHeight: 1.05,
                      fontWeight: 300,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="mt-5 max-w-xl text-white/45"
                    style={{
                      fontSize: "17px",
                      lineHeight: 1.9,
                      fontWeight: 400,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.text}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

    </main>
    </>
  );
}


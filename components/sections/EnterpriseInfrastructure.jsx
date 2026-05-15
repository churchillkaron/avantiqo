"use client";
import Image from "next/image"
export default function EnterpriseInfrastructure() {
  return (
    <section
      id="infrastructure"
      className="relative overflow-hidden py-28 md:py-40"
    >
      {/* BACKGROUND */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B5CF6]/10 blur-[140px] md:h-[900px] md:w-[900px] md:blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mb-16 max-w-5xl md:mb-24">
          <p className="mb-6 text-xs tracking-[0.35em] text-[#B58AF8] md:mb-8">
            ENTERPRISE INFRASTRUCTURE
          </p>

          <h2
            className="text-5xl text-white sm:text-6xl md:text-7xl"
            style={{
              fontWeight: 300,
              lineHeight: 1.02,
              letterSpacing: "-0.04em",
            }}
          >
            Built for scale.
            <br />

            <span className="bg-gradient-to-r from-[#E7C38A] via-white to-[#8B5CF6] bg-clip-text text-transparent">
              Powered by intelligence.
            </span>
          </h2>

          <p
            className="mt-8 max-w-4xl text-white/50 md:mt-10"
            style={{
              fontSize: "18px",
              lineHeight: 1.9,
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            Avantiqo synchronizes operations,
            finance, AI workflows, workforce,
            mobile infrastructure and enterprise
            systems through one unified cloud architecture
            designed for scalable modern organizations.
          </p>
        </div>

        {/* MAIN VISUAL */}
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-3xl md:rounded-[42px] md:p-8">
          <div className="relative overflow-hidden rounded-[24px] border border-white/10 md:rounded-[32px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#8B5CF6]/10 via-transparent to-[#D6A66A]/10" />

            <Image
              src="/showcase/enterprise-infrastructure.png"
              alt="Enterprise Infrastructure"
              loading="lazy"
              className="relative z-10 h-auto w-full object-cover"
            />
          </div>
        </div>

        {/* FEATURES */}
        <div className="mt-10 grid gap-5 md:mt-14 md:gap-6 lg:grid-cols-2">
          {[
            {
              title: "Multi-Location Sync",
              text: "Real-time operational visibility across locations, brands and enterprise structures.",
            },
            {
              title: "API & Integrations",
              text: "Connect POS, ERP, accounting, HR, logistics and external enterprise systems.",
            },
            {
              title: "Enterprise Security",
              text: "Role permissions, audit logs, approvals and operational governance built into every layer.",
            },
            {
              title: "Cloud AI Infrastructure",
              text: "Unified AI orchestration across finance, workforce, operations and marketing systems.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[26px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-3xl md:rounded-[32px] md:p-10"
            >
              <h3
                className="text-2xl text-white md:text-[34px]"
                style={{
                  lineHeight: 1.05,
                  fontWeight: 300,
                  letterSpacing: "-0.03em",
                }}
              >
                {item.title}
              </h3>

              <p
                className="mt-4 max-w-full text-white/50 md:mt-5 md:max-w-[92%]"
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
          ))}
        </div>
      </div>
    </section>
  )
}
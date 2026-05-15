"use client";

import Image from "next/image"

export default function EnterpriseIntelligence() {
  return (
  <section
  id="enterprise"
  className="relative overflow-hidden py-40"
>

      {/* BACKGROUND */}
      <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B5CF6]/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <div className="mb-24 max-w-5xl">

          <p className="mb-8 text-xs tracking-[0.35em] text-[#B58AF8]">
            ENTERPRISE INTELLIGENCE
          </p>

          <h2
            className="text-5xl text-white md:text-7xl"
            style={{
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            One unified
            <br />

            <span className="bg-gradient-to-r from-[#E7C38A] via-white to-[#8B5CF6] bg-clip-text text-transparent">
              intelligence layer
            </span>

            <br />
            for the enterprise.

          </h2>

          <p
            className="mt-10 max-w-4xl text-white/50"
            style={{
              fontSize: "18px",
              lineHeight: 1.9,
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            Avantiqo connects operations, finance,
            marketing, AI automation, production,
            analytics and workforce intelligence into
            one synchronized operational infrastructure
            designed for modern scalable organizations.
          </p>

        </div>

        {/* MAIN DASHBOARD */}
        <div className="overflow-hidden rounded-[42px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl">

          {/* TOP */}
          <div className="flex items-center justify-between border-b border-white/5 px-10 py-7">

            <div>

              <p className="text-xs tracking-[0.35em] text-[#B58AF8]">
                LIVE ENTERPRISE CONTROL
              </p>

              <h3
                className="mt-4 text-white"
                style={{
                  fontSize: "42px",
                  lineHeight: 1.08,
                  fontWeight: 300,
                  letterSpacing: "-0.03em",
                }}
              >
                Real-time business intelligence
              </h3>

            </div>

            <div className="rounded-2xl border border-[#8B5CF6]/20 bg-[#8B5CF6]/10 px-5 py-3 text-sm text-[#DCCBFF]">
              LIVE AI
            </div>

          </div>

          {/* IMAGE */}
          <div className="p-8">

            <div className="relative overflow-hidden rounded-[32px] border border-white/10">

              <div className="absolute inset-0 bg-gradient-to-tr from-[#8B5CF6]/10 via-transparent to-[#D6A66A]/10" />

              <Image
                src="/showcase/enterprise-dashboard.png"
                className="relative z-10 w-full object-cover"
              />

            </div>

          </div>

        </div>

        {/* METRICS */}
        <div className="mt-12 grid gap-6 md:grid-cols-4">

          {[
            {
              title: "24/7",
              text: "Live AI Intelligence",
            },
            {
              title: "99.9%",
              text: "Infrastructure Uptime",
            },
            {
              title: "12K+",
              text: "AI Decisions Daily",
            },
            {
              title: "Multi",
              text: "Location Visibility",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-3xl"
            >

              <h4
                className="text-white"
                style={{
                  fontSize: "52px",
                  lineHeight: 1.05,
                  fontWeight: 300,
                  letterSpacing: "-0.03em",
                }}
              >
                {item.title}
              </h4>

              <p
                className="mt-4 text-white/45"
                style={{
                  fontSize: "16px",
                  lineHeight: 1.8,
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
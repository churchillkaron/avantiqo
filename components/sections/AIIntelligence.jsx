"use client";

import Image from "next/image"


export default function AIIntelligence() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08),transparent_65%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
        {/* LEFT */}
        <div>
          <p className="mb-6 text-xs tracking-[0.35em] text-[#B58AF8] md:mb-8">
            AI INTELLIGENCE LAYER
          </p>

          <h2
            className="max-w-3xl text-5xl text-white sm:text-6xl md:text-7xl"
            style={{
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            AI that
            <br />

            <span
              className="bg-gradient-to-r from-[#E7C38A] via-white to-[#8B5CF6] bg-clip-text text-transparent"
              style={{
                fontWeight: 300,
              }}
            >
              understands
            </span>

            <br />
            your business.
          </h2>

          <p
            className="mt-8 max-w-2xl text-white/50 md:mt-10"
            style={{
              fontSize: "18px",
              lineHeight: 1.9,
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            Avantiqo continuously analyzes operations,
            sales, production, finance, staffing and
            customer activity in real time — transforming
            raw business data into intelligent actions,
            predictions and automated operational decisions.
          </p>

          <p
            className="mt-6 max-w-2xl text-white/50 md:mt-8"
            style={{
              fontSize: "18px",
              lineHeight: 1.9,
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            From revenue forecasting and inventory
            optimization to staffing insights,
            anomaly detection and AI-driven workflow
            automation, the platform operates as a live
            intelligence engine across the entire organization.
          </p>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <div className="absolute -left-10 top-20 h-52 w-52 rounded-full bg-[#8B5CF6]/10 blur-[100px] md:h-72 md:w-72 md:blur-[120px]" />

          <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-[#D6A66A]/10 blur-[100px] md:h-72 md:w-72 md:blur-[120px]" />

          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            {[
              {
                label: "OPERATIONS",
                title: "Kitchen delays detected",
                text: "AI identified abnormal production timing during peak hours and recommended workflow adjustments automatically.",
              },
              {
                label: "INVENTORY",
                title: "Low stock prediction",
                text: "Avantiqo predicts inventory shortages before they impact production and operational flow.",
              },
              {
                label: "PAYROLL AI",
                title: "Performance anomalies",
                text: "AI detected unusual payroll variance and operational inconsistencies across departments.",
              },
              {
                label: "MARKETING AI",
                title: "Campaign optimization",
                text: "AI-generated campaigns improved customer engagement and conversion performance in real time.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[26px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-3xl md:rounded-[30px] md:p-8"
              >
                <p className="text-xs tracking-[0.35em] text-[#B58AF8]">
                  {item.label}
                </p>

                <h4
                  className="mt-4 text-2xl text-white md:text-[28px]"
                  style={{
                    lineHeight: 1.15,
                    fontWeight: 300,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {item.title}
                </h4>

                <p
                  className="mt-4 text-white/45 md:mt-5"
                  style={{
                    fontSize: "15px",
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
      </div>
    </section>
  )
}
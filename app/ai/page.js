"use client";

import Image from "next/image";

export default function AIPage() {
  return (
    <main className="min-h-screen bg-[#02030A] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-24 pt-40 md:pb-32 md:pt-52">

        {/* GLOW */}
        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B5CF6]/10 blur-[180px]" />

        <div className="relative mx-auto max-w-7xl">

          {/* HERO GRID */}
          <div className="grid items-center gap-20 lg:grid-cols-[1fr_0.8fr]">

            {/* LEFT */}
            <div className="max-w-5xl">

              <p className="mb-8 text-xs tracking-[0.35em] text-[#B58AF8]">
                AI INTELLIGENCE INFRASTRUCTURE
              </p>

              <h1
                className="text-5xl text-white sm:text-6xl md:text-[96px]"
                style={{
                  lineHeight: 0.95,
                  fontWeight: 300,
                  letterSpacing: "-0.06em",
                }}
              >
                AI that operates
                <br />

                <span className="bg-gradient-to-r from-[#E7C38A] via-white to-[#8B5CF6] bg-clip-text text-transparent">
                  across the entire enterprise.
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
                Avantiqo continuously analyzes operational,
                financial, workforce and customer data
                to automate decisions, detect anomalies,
                optimize performance and generate
                intelligent enterprise actions in real time.
              </p>

            </div>

            {/* RIGHT AI IMAGE */}
            <div className="relative">

              {/* OUTER GLOW */}
              <div className="absolute inset-0 rounded-[42px] bg-gradient-to-tr from-[#8B5CF6]/20 via-transparent to-[#D6A66A]/20 blur-3xl" />

              {/* FRAME */}
              <div className="relative overflow-hidden rounded-[42px] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-3xl">

                {/* INNER FRAME */}
                <div className="overflow-hidden rounded-[30px] border border-white/10">

                  <Image
                    src="/showcase/ai-command-center.png"
                    alt="AI Operational Intelligence"
                    width={1200}
                    height={900}
                    className="w-full object-cover"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* AI SYSTEMS */}
      <section className="relative overflow-hidden px-6 pt-10 pb-24 md:pt-16 md:pb-36">

        <div className="mx-auto max-w-7xl">

          {/* SECTION HEADER */}
          <div className="mb-20 max-w-5xl">

            <p className="mb-6 text-xs tracking-[0.35em] text-[#B58AF8]">
              AI SYSTEMS
            </p>

            <h2
              className="text-5xl text-white md:text-7xl"
              style={{
                lineHeight: 1,
                fontWeight: 300,
                letterSpacing: "-0.05em",
              }}
            >
              Intelligent automation
              <br />

              <span className="bg-gradient-to-r from-[#E7C38A] via-white to-[#8B5CF6] bg-clip-text text-transparent">
                embedded into operations.
              </span>

            </h2>

          </div>

          {/* GRID */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {[
              {
                title: "Operational AI",
                text: "Detect delays, inefficiencies and operational anomalies automatically across workflows.",
              },
              {
                title: "Finance AI",
                text: "Analyze revenue, cost structures, payroll and accounting activity in real time.",
              },
              {
                title: "Marketing AI",
                text: "Generate campaigns, optimize engagement and automate publishing workflows.",
              },
              {
                title: "Workforce AI",
                text: "Track performance, scheduling, staff optimization and operational accountability.",
              },
              {
                title: "Forecasting AI",
                text: "Predict operational trends, inventory demand and financial performance.",
              },
              {
                title: "Anomaly Detection",
                text: "Identify unusual activity, margin pressure and operational risk automatically.",
              },
              {
                title: "Enterprise Intelligence",
                text: "Connect multi-location operational data into one unified intelligence layer.",
              },
              {
                title: "Automation Engine",
                text: "Trigger workflows, approvals and AI-driven operational actions automatically.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-3xl transition duration-500 hover:border-white/20 hover:bg-white/[0.05]"
              >

                {/* HOVER GLOW */}
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
                    className="mt-5 text-white/45"
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

              </div>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}
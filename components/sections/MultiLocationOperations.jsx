"use client";
import Image from "next/image"
export default function MultiLocationOperations() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      {/* BACKGROUND */}
      <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B5CF6]/10 blur-[140px] md:h-[1000px] md:w-[1000px] md:blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mx-auto mb-16 max-w-5xl text-center md:mb-24">
          <p className="mb-6 text-xs tracking-[0.28em] text-[#B58AF8]">
            MULTI-LOCATION OPERATIONS
          </p>

          <h2
            className="text-5xl text-white sm:text-6xl md:text-[76px]"
            style={{
              lineHeight: 1,
              fontWeight: 300,
              letterSpacing: "-0.05em",
            }}
          >
            One AI system.
            <br />

            <span className="bg-gradient-to-r from-[#E7C38A] via-white to-[#8B5CF6] bg-clip-text text-transparent">
              Unlimited locations.
            </span>
          </h2>

          <p
            className="mx-auto mt-8 max-w-4xl text-white/55 md:mt-10"
            style={{
              fontSize: "20px",
              lineHeight: 1.9,
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            Avantiqo synchronizes finance, operations, workforce,
            inventory, marketing and AI automation across every
            restaurant, hotel, beach club and venue through one
            centralized operational intelligence platform.
          </p>
        </div>

        {/* MAIN IMAGE */}
        <div className="overflow-hidden rounded-[28px] border border-white/[0.05] bg-white/[0.025] p-4 backdrop-blur-3xl md:rounded-[42px] md:p-8">
         <Image
  src="/showcase/multi-location-command-center.png"
  alt="Multi-location operations"
  width={1600}
  height={900}
  className="w-full rounded-[24px]"
/>
        </div>

        {/* FEATURE GRID */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4 md:mt-14 md:gap-6">
          {[
            {
              title: "Live branch control",
              text: "Monitor every venue, restaurant and operation in real time from one unified dashboard.",
            },
            {
              title: "AI operational alerts",
              text: "Receive instant notifications for cost spikes, labor issues, stock risks and operational anomalies.",
            },
            {
              title: "Centralized intelligence",
              text: "Finance, workforce, production and marketing systems synchronize automatically across all locations.",
            },
            {
              title: "Enterprise scalability",
              text: "Built for hospitality groups, franchise operations and multi-location enterprise infrastructure.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[26px] border border-white/[0.05] bg-white/[0.025] p-6 backdrop-blur-3xl md:rounded-[30px] md:p-8"
            >
              <h4
                className="text-2xl text-white md:text-[28px]"
                style={{
                  lineHeight: 1.15,
                  fontWeight: 300,
                  letterSpacing: "-0.03em",
                }}
              >
                {item.title}
              </h4>

              <p
                className="mt-4 text-white/45 md:mt-5"
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
          ))}
        </div>

        {/* METRICS */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 md:mt-12 md:gap-6">
          {[
            {
              title: "24/7",
              text: "Global Operational Visibility",
            },
            {
              title: "AI",
              text: "Centralized Decision Engine",
            },
            {
              title: "Live",
              text: "Multi-Location Synchronization",
            },
            {
              title: "∞",
              text: "Scalable Enterprise Infrastructure",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[26px] border border-white/[0.05] bg-white/[0.025] p-6 backdrop-blur-3xl md:rounded-[30px] md:p-8"
            >
              <h4
                className="text-4xl text-white md:text-[52px]"
                style={{
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
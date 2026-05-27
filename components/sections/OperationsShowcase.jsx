"use client";
import Image from "next/image"
export default function OperationsShowcase() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      {/* BACKGROUND */}
      <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D6A66A]/5 blur-[140px] md:h-[900px] md:w-[900px] md:blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mb-16 max-w-5xl md:mb-28">
          <p className="mb-6 text-xs tracking-[0.28em] text-[#B58AF8] md:mb-8">
            REAL OPERATIONAL CONTROL
          </p>

          <h2
            className="text-5xl text-white sm:text-6xl md:text-7xl"
            style={{
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Built for
            <br />

            <span className="bg-gradient-to-r from-[#E7C38A] via-white to-[#8B5CF6] bg-clip-text text-transparent">
              real operations.
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
            Avantiqo is designed for businesses that require
            precision, speed and real-time operational visibility.
            From point-of-sale and live kitchen coordination to
            production control, inventory validation and financial
            closing, every workflow is connected through one
            intelligent operational infrastructure.
          </p>
        </div>

        {/* POS */}
        <div className="mb-10 overflow-hidden rounded-[28px] border border-white/[0.05] bg-white/[0.025] backdrop-blur-3xl md:mb-16 md:rounded-[40px]">
          <div className="grid items-center gap-6 md:gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
            <div className="p-6 md:p-12">
              <p className="mb-5 text-xs tracking-[0.28em] text-[#B58AF8]">
                POINT OF SALE
              </p>

              <h3
                className="text-4xl text-white sm:text-5xl md:text-[56px]"
                style={{
                  lineHeight: 1.05,
                  fontWeight: 300,
                  letterSpacing: "-0.03em",
                }}
              >
                Real-time operational control.
              </h3>

              <p
                className="mt-6 text-white/50 md:mt-8"
                style={{
                  fontSize: "18px",
                  lineHeight: 1.9,
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                }}
              >
                Manage orders, tables, workflows and live
                service execution through a premium
                operational interface designed for
                high-performance hospitality environments.
              </p>
            </div>

            <div className="p-4 md:p-8">
              <Image
  src="/showcase/avantiqo-pos.png"
  alt="Avantiqo POS"
  width={1600}
  height={900}
  className="w-full rounded-[32px] border border-white/[0.05]"
/>
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 md:gap-6 md:p-10">
          {/* KITCHEN */}
          <div className="overflow-hidden rounded-[28px] border border-white/[0.05] bg-white/[0.025] backdrop-blur-3xl md:rounded-[36px]">
           <Image
  src="/showcase/avantiqo-kitchen.png"
  alt="Kitchen flow"
  width={1600}
  height={900}
  className="w-full"
/>

            <div className="p-6 md:p-6 md:p-10">
              <p className="mb-4 text-xs tracking-[0.28em] text-[#B58AF8]">
                KITCHEN FLOW
              </p>

              <h3
                className="text-3xl text-white sm:text-4xl md:text-[44px]"
                style={{
                  lineHeight: 1.08,
                  fontWeight: 300,
                  letterSpacing: "-0.03em",
                }}
              >
                Live kitchen coordination.
              </h3>

              <p
                className="mt-5 text-white/50 md:mt-6"
                style={{
                  fontSize: "17px",
                  lineHeight: 1.9,
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                }}
              >
                Monitor stations, tickets and production
                flow in real time with intelligent kitchen
                management systems built for operational
                efficiency.
              </p>
            </div>
          </div>

          {/* PRODUCTION */}
          <div className="overflow-hidden rounded-[28px] border border-white/[0.05] bg-white/[0.025] backdrop-blur-3xl md:rounded-[36px]">
            <Image
  src="/showcase/avantiqo-production.png"
  alt="Production intelligence"
  width={1600}
  height={900}
  className="w-full"
/>

            <div className="p-6 md:p-6 md:p-10">
              <p className="mb-4 text-xs tracking-[0.28em] text-[#B58AF8]">
                PRODUCTION ENGINE
              </p>

              <h3
                className="text-3xl text-white sm:text-4xl md:text-[44px]"
                style={{
                  lineHeight: 1.08,
                  fontWeight: 300,
                  letterSpacing: "-0.03em",
                }}
              >
                Production intelligence.
              </h3>

              <p
                className="mt-5 text-white/50 md:mt-6"
                style={{
                  fontSize: "17px",
                  lineHeight: 1.9,
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                }}
              >
                Validate recipes, monitor ingredient logic,
                calculate profitability and control
                production through connected operational
                intelligence.
              </p>
            </div>
          </div>
        </div>

        {/* SHIFT CLOSE */}
        <div className="mt-10 overflow-hidden rounded-[28px] border border-white/[0.05] bg-white/[0.025] backdrop-blur-3xl md:mt-16 md:rounded-[40px]">
          <div className="grid items-center gap-6 md:gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
            <div className="p-4 md:p-8">
            <Image
  src="/showcase/avantiqo-closeshift.png"
  alt="Financial close"
  width={1600}
  height={900}
  className="w-full"
/>
            </div>

            <div className="p-6 md:p-12">
              <p className="mb-5 text-xs tracking-[0.28em] text-[#B58AF8]">
                FINANCIAL CLOSE
              </p>

              <h3
                className="text-4xl text-white sm:text-5xl md:text-[56px]"
                style={{
                  lineHeight: 1.05,
                  fontWeight: 300,
                  letterSpacing: "-0.03em",
                }}
              >
                End-of-day financial control.
              </h3>

              <p
                className="mt-6 text-white/50 md:mt-8"
                style={{
                  fontSize: "18px",
                  lineHeight: 1.9,
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                }}
              >
                Automate cash reconciliation, revenue
                tracking, reporting and operational
                financial closing through intelligent
                real-time accounting logic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
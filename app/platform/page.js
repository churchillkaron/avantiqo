"use client";
import Image from "next/image"
export default function PlatformPage() {
  return (
    <main className="min-h-[650vh] bg-[#02030A] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-24 pt-10 md:pb-32 md:pt-52">

<div className="-mt-24 overflow-hidden rounded-[42px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-3xl">

  <Image
    src="/showcase/platform-overview.png"
    alt="Avantiqo enterprise operating system"
    width={1600}
    height={900}
    className="w-full rounded-[30px] border border-white/10"
  />


</div>
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B5CF6]/10 blur-[140px] md:h-[1100px] md:w-[1100px] md:blur-[220px]" />

        <div className="relative mt-18 mx-auto max-w-7xl">

          <div className="max-w-5xl">

            <p className="mb-8 text-xs tracking-[0.35em] text-[#B58AF8]">
              THE AI ENTERPRISE OPERATING SYSTEM
            </p>

            <h1
              className="text-5xl text-white sm:text-6xl md:text-[96px]"
              style={{
                lineHeight: 0.95,
                fontWeight: 300,
                letterSpacing: "-0.06em",
              }}
            >
              One unified
              <br />

              <span className="bg-gradient-to-r from-[#E7C38A] via-white to-[#8B5CF6] bg-clip-text text-transparent">
                operational intelligence layer.
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
              Avantiqo connects operations, finance,
              workforce, AI automation, production,
              analytics and enterprise infrastructure
              into one scalable platform designed
              for modern organizations.
            </p>

          </div>

        </div>

      </section>

      {/* PLATFORM ARCHITECTURE */}
      <section className="relative overflow-hidden px-6 py-24 md:py-2">

        <div className="mx-auto max-w-7xl">

          <div className="mb-20 max-w-4xl">

            <p className="mb-6 text-xs tracking-[0.35em] text-[#B58AF8]">
              PLATFORM ARCHITECTURE
            </p>

            <h2
              className="text-5xl text-white md:text-7xl"
              style={{
                lineHeight: 1,
                fontWeight: 300,
                letterSpacing: "-0.05em",
              }}
            >
              Every operational layer
              <br />

              <span className="bg-gradient-to-r from-[#E7C38A] via-white to-[#8B5CF6] bg-clip-text text-transparent">
                connected through AI.
              </span>

            </h2>

          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {[
              {
                title: "Operations",
                text: "POS, service flow, kitchen coordination, production management and operational execution synchronized in real time.",
              },
              {
                title: "Finance",
                text: "Accounting, payroll, procurement, invoice control and financial intelligence connected into one infrastructure.",
              },
              {
                title: "AI Intelligence",
                text: "Live anomaly detection, forecasting, automation, optimization and enterprise intelligence workflows.",
              },
              {
                title: "Workforce",
                text: "Staff management, performance tracking, scheduling, approvals and AI challenge systems.",
              },
              {
                title: "Marketing",
                text: "AI campaign generation, publishing, customer engagement and growth automation connected directly to operations.",
              },
              {
                title: "Enterprise Infrastructure",
                text: "Permissions, governance, audit visibility, multi-location synchronization and cloud architecture.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-3xl"
              >

                <h3
                  className="text-white"
                  style={{
                    fontSize: "34px",
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
            ))}

          </div>

        </div>

      </section>

      {/* LIVE OPERATION FLOW */}
<section className="relative overflow-hidden px-6 py-24 md:py-36">

  <div className="mx-auto max-w-7xl">

    <div className="mb-20 max-w-5xl">

      <p className="mb-6 text-xs tracking-[0.35em] text-[#B58AF8]">
        LIVE OPERATION FLOW
      </p>

      <h2
        className="text-5xl text-white md:text-7xl"
        style={{
          lineHeight: 1,
          fontWeight: 300,
          letterSpacing: "-0.05em",
        }}
      >
        Real operational
        <br />

        <span className="bg-gradient-to-r from-[#E7C38A] via-white to-[#8B5CF6] bg-clip-text text-transparent">
          intelligence pipelines.
        </span>

      </h2>

      <p
        className="mt-10 max-w-3xl text-white/50"
        style={{
          fontSize: "20px",
          lineHeight: 1.9,
        }}
      >
        Every transaction, workflow, approval,
        production movement and financial event
        synchronizes through one connected AI infrastructure.
      </p>

    </div>

    <div className="relative overflow-hidden rounded-[42px] border border-white/10 bg-white/[0.03] p-8 md:p-14 backdrop-blur-3xl">

      <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 via-transparent to-[#D6A66A]/5" />

      <div className="relative z-10 grid gap-6 xl:grid-cols-5">

        {[
          {
            number: "01",
            title: "Orders",
            text: "Transactions, sales activity and customer operations captured live across locations.",
          },
          {
            number: "02",
            title: "Production",
            text: "Kitchen, manufacturing and operational workflows synchronized instantly.",
          },
          {
            number: "03",
            title: "Inventory",
            text: "Live stock movement, costing and supply chain visibility connected automatically.",
          },
          {
            number: "04",
            title: "Finance",
            text: "Revenue, accounting, payroll and approvals processed through unified infrastructure.",
          },
          {
            number: "05",
            title: "AI Layer",
            text: "Forecasting, anomaly detection and optimization generated continuously in real time.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#060816] p-8"
          >

            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />

            <div className="relative z-10">

              <p className="mb-6 text-xs tracking-[0.35em] text-[#B58AF8]">
                {item.number}
              </p>

              <h3
                className="text-white"
                style={{
                  fontSize: "34px",
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
                  fontSize: "15px",
                  lineHeight: 1.9,
                }}
              >
                {item.text}
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>

  </div>

</section>
{/* MODULE SYSTEMS */}
<section className="relative overflow-hidden px-6 py-24 md:py-2">

  <div className="mx-auto max-w-7xl">

    <div className="mb-20 max-w-5xl">

      <p className="mb-6 text-xs tracking-[0.35em] text-[#B58AF8]">
        ENTERPRISE MODULE SYSTEMS
      </p>

      <h2
        className="text-5xl text-white md:text-7xl"
        style={{
          lineHeight: 1,
          fontWeight: 300,
          letterSpacing: "-0.05em",
        }}
      >
        Built as a
        <br />

        <span className="bg-gradient-to-r from-[#E7C38A] via-white to-[#8B5CF6] bg-clip-text text-transparent">
          complete operational ecosystem.
        </span>

      </h2>

    </div>

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {[
        "POS & Operations",
        "Payroll Engine",
        "AI Marketing",
        "Inventory Control",
        "Accounting",
        "Procurement",
        "Production Systems",
        "Multi-Location Control",
      ].map((item) => (
        <div
          key={item}
          className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-3xl transition duration-500 hover:border-[#8B5CF6]/30 hover:bg-white/[0.05]"
        >

          <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 via-transparent to-[#D6A66A]/5 opacity-0 transition duration-500 group-hover:opacity-100" />

          <div className="relative z-10">

            <div className="mb-8 h-[1px] w-16 bg-gradient-to-r from-[#8B5CF6] to-transparent" />

            <h3
              className="text-white"
              style={{
                fontSize: "32px",
                lineHeight: 1.05,
                fontWeight: 300,
                letterSpacing: "-0.03em",
              }}
            >
              {item}
            </h3>

          </div>

        </div>
      ))}

    </div>

  </div>

</section>
{/* FINAL CTA */}
<section className="relative overflow-hidden px-6 pb-32 pt-24 md:pb-40 md:pt-32">

  <div className="absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B5CF6]/10 blur-[220px]" />

  <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[42px] border border-white/10 bg-white/[0.03] px-8 py-20 text-center backdrop-blur-3xl md:px-20 md:py-28">

    <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 via-transparent to-[#D6A66A]/5" />

    <div className="relative z-10">

      <p className="mb-8 text-xs tracking-[0.35em] text-[#B58AF8]">
        ENTERPRISE TRANSFORMATION
      </p>

      <h2
        className="text-5xl text-white md:text-7xl"
        style={{
          lineHeight: 0.95,
          fontWeight: 300,
          letterSpacing: "-0.05em",
        }}
      >
        Build the future
        <br />

        <span className="bg-gradient-to-r from-[#E7C38A] via-white to-[#8B5CF6] bg-clip-text text-transparent">
          of enterprise operations.
        </span>

      </h2>

      <p
        className="mx-auto mt-10 max-w-3xl text-white/50"
        style={{
          fontSize: "20px",
          lineHeight: 1.9,
        }}
      >
        Avantiqo transforms fragmented operational systems
        into one intelligent enterprise infrastructure
        designed for modern scalable organizations.
      </p>

      <div className="mt-14 flex flex-col items-center justify-center gap-0 sm:flex-row">

        <button className="rounded-full bg-gradient-to-r from-[#D6A66A] to-[#8B5CF6] px-10 py-5 text-lg font-medium text-white shadow-[0_20px_80px_rgba(139,92,246,0.35)] transition-all duration-300 hover:scale-[1.03]">
          Book Enterprise Demo
        </button>

        <button className="rounded-full border border-white/10 bg-white/[0.03] px-10 py-5 text-lg font-medium text-white backdrop-blur-3xl transition-all duration-300 hover:bg-white/[0.06]">
          Contact Enterprise Sales
        </button>

      </div>

    </div>

  </div>

</section>
    </main>
  )
}

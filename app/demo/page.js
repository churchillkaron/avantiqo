"use client";

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-[#02030A] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-24 pt-40 md:pb-32 md:pt-52">

        {/* GLOW */}
        <div className="absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B5CF6]/10 blur-[220px]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="max-w-5xl">

            <p className="mb-8 text-xs tracking-[0.35em] text-[#B58AF8]">
              PLATFORM DEMONSTRATION
            </p>

            <h1
              className="text-5xl text-white sm:text-6xl md:text-[96px]"
              style={{
                lineHeight: 0.95,
                fontWeight: 300,
                letterSpacing: "-0.06em",
              }}
            >
              Experience the
              <br />

              <span className="bg-gradient-to-r from-[#E7C38A] via-white to-[#8B5CF6] bg-clip-text text-transparent">
                operational intelligence platform.
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
              Explore the workflows, enterprise systems,
              AI automation infrastructure and operational
              intelligence powering modern scalable organizations.
            </p>

            {/* BUTTONS */}
            <div className="mt-14 flex flex-col gap-4 sm:flex-row">

              <button className="rounded-full bg-gradient-to-r from-[#C6A062] to-[#7C5CFA] px-10 py-5 text-lg font-normal text-white shadow-[0_20px_80px_rgba(139,92,246,0.35)] transition duration-300 hover:scale-[1.02]">
                Book Enterprise Demo
              </button>

              <button className="rounded-full border border-white/[0.06] bg-white/[0.03] px-10 py-5 text-lg font-normal text-white backdrop-blur-3xl transition duration-300 hover:bg-white/[0.06]">
                Contact Sales
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* PLATFORM WALKTHROUGH */}
      <section className="relative overflow-hidden px-6 pt-10 pb-24 md:pt-16 md:pb-36">

        <div className="mx-auto max-w-7xl">

          {/* HEADER */}
          <div className="mb-20 max-w-4xl">

            <p className="mb-6 text-xs tracking-[0.35em] text-[#B58AF8]">
              LIVE PLATFORM MODULES
            </p>

            <h2
              className="text-5xl text-white md:text-7xl"
              style={{
                lineHeight: 0.98,
                fontWeight: 300,
                letterSpacing: "-0.05em",
              }}
            >
              Connected systems.
              <br />

              <span className="bg-gradient-to-r from-[#E7C38A] via-white to-[#8B5CF6] bg-clip-text text-transparent">
                Unified operational workflows.
              </span>

            </h2>

          </div>

          {/* GRID */}
          <div className="grid gap-6 md:gap-8 lg:grid-cols-2">

            {[
              {
                title: "Operations Dashboard",
                text: "Real-time operational visibility across departments, production and service workflows.",
                image: "/demo/control-dashboard.png",
              },
              {
                title: "Finance Infrastructure",
                text: "Unified accounting, payroll, procurement and approval systems.",
                image: "/demo/finance-dashboard.png",
              },
              {
                title: "AI Marketing Engine",
                text: "Campaign generation, automation and customer engagement infrastructure.",
                image: "/demo/marketing-engine.png",
              },
              {
                title: "Enterprise Intelligence",
                text: "Operational forecasting, anomaly detection and AI optimization workflows.",
                image: "/demo/enterprise-intelligence.png",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-[34px] border border-white/[0.06] bg-white/[0.03] backdrop-blur-3xl"
              >

                {/* IMAGE */}
                <div className="relative h-[340px] overflow-hidden">

                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#02030A]/10 via-[#02030A]/20 to-[#02030A]/90" />

                  {/* GLOW */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 via-transparent to-[#D6A66A]/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                </div>

                {/* CONTENT */}
                <div className="relative p-8">

                  <div className="mb-8 h-[1px] w-16 bg-gradient-to-r from-[#8B5CF6] to-transparent" />

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
                    className="mt-5 max-w-xl text-white/45"
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

      {/* WORKFLOW */}
      <section className="relative overflow-hidden px-6 pb-24 md:pb-36">

        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] border border-white/[0.06] bg-white/[0.03] p-6 md:p-10 backdrop-blur-3xl md:p-16">

          <div className="mb-14 max-w-4xl">

            <p className="mb-6 text-xs tracking-[0.35em] text-[#B58AF8]">
              CONNECTED WORKFLOWS
            </p>

            <h2
              className="text-4xl md:text-[72px]"
              style={{
                lineHeight: 0.98,
                fontWeight: 300,
                letterSpacing: "-0.05em",
              }}
            >
              Every system connected
              through one operational layer.
            </h2>

          </div>

          <div className="grid gap-6 md:grid-cols-5">

            {[
              "Operations",
              "Production",
              "Payroll",
              "Finance",
              "Executive AI",
            ].map((step, index) => (
              <div
                key={step}
                className="relative overflow-hidden rounded-[28px] border border-white/[0.06] bg-[#02030A]/80 p-8"
              >

                <div className="mb-8 text-sm text-[#B58AF8]">
                  0{index + 1}
                </div>

                <h3
                  className="text-white"
                  style={{
                    fontSize: "28px",
                    lineHeight: 1.05,
                    fontWeight: 300,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {step}
                </h3>

              </div>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}
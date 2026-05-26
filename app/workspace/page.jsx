export default function WorkspacePage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0">

        <div className="absolute left-[-10%] top-[0%] h-[700px] w-[700px] rounded-full bg-[#8B5CF6]/20 blur-[180px]" />

        <div className="absolute bottom-[-10%] right-[-10%] h-[900px] w-[900px] rounded-full bg-[#D6A66A]/10 blur-[220px]" />

      </div>

      <div className="relative z-10">

        {/* HEADER */}
        <div className="mb-10 flex items-end justify-between">

          <div>

            <div className="mb-4 text-xs tracking-[0.35em] text-[#B58AF8]">
              ENTERPRISE COMMAND CENTER
            </div>

            <h1
              className="text-4xl md:text-7xl"
              style={{
                lineHeight: 0.9,
                fontWeight: 250,
                letterSpacing: "-0.07em",
              }}
            >
              Operational
              <br />

              <span className="bg-gradient-to-r from-[#E7C38A] via-white to-[#8B5CF6] bg-clip-text text-transparent">
                intelligence dashboard.
              </span>

            </h1>

          </div>

          <div className="hidden xl:flex items-center gap-4">

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] px-8 py-5 backdrop-blur-3xl">

              <div className="text-xs tracking-[0.25em] text-white/40">
                SYSTEM STATUS
              </div>

              <div className="mt-3 flex items-center gap-3">

                <div className="h-3 w-3 rounded-full bg-green-400 shadow-[0_0_25px_rgba(74,222,128,0.8)]" />

                <div className="text-white/80">
                  ALL SYSTEMS OPERATIONAL
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* KPI GRID */}
        <div className="grid gap-6 xl:grid-cols-4">

          {[
            {
              label: "Revenue Today",
              value: "$184,250",
            },
            {
              label: "Reservations",
              value: "428",
            },
            {
              label: "Active Staff",
              value: "96",
            },
            {
              label: "AI Alerts",
              value: "12",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.03] p-4 md:p-8 backdrop-blur-3xl"
            >

              <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 via-transparent to-[#D6A66A]/10" />

              <div className="relative z-10">

                <div className="text-sm tracking-[0.2em] text-white/40">
                  {item.label}
                </div>

                <div
                  className="mt-8 text-5xl"
                  style={{
                    fontWeight: 250,
                    letterSpacing: "-0.06em",
                  }}
                >
                  {item.value}
                </div>

              </div>

            </div>
          ))}

        </div>

        {/* MAIN GRID */}
        <div className="mt-6 grid gap-6 xl:grid-cols-1 md:grid-cols-3">

          {/* LEFT */}
          <div className="xl:col-span-2 space-y-6">

            {/* LIVE OPERATIONS */}
            <div className="relative overflow-hidden rounded-[38px] border border-white/10 bg-white/[0.03] p-5 md:p-10 backdrop-blur-3xl">

              <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 via-transparent to-[#D6A66A]/10" />

              <div className="relative z-10">

                <div className="mb-8 flex items-center justify-between">

                  <div>

                    <div className="text-xs tracking-[0.3em] text-[#B58AF8]">
                      LIVE OPERATIONS
                    </div>

                    <h2
                      className="mt-4 text-5xl"
                      style={{
                        fontWeight: 250,
                        letterSpacing: "-0.05em",
                      }}
                    >
                      Enterprise activity.
                    </h2>

                  </div>

                  <div className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm text-white/60">
                    LIVE
                  </div>

                </div>

                <div className="grid gap-5 md:grid-cols-1 md:grid-cols-3">

                  {[
                    "POS Transactions",
                    "Kitchen Activity",
                    "Reservations",
                    "Inventory Movement",
                    "Payroll Events",
                    "AI Automation",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[26px] border border-white/10 bg-black/30 p-6"
                    >

                      <div className="mb-5 h-[1px] w-14 bg-gradient-to-r from-[#8B5CF6] to-transparent" />

                      <div
                        className="text-2xl"
                        style={{
                          fontWeight: 250,
                          letterSpacing: "-0.03em",
                        }}
                      >
                        {item}
                      </div>

                    </div>
                  ))}

                </div>

              </div>

            </div>

            {/* AI INTELLIGENCE */}
            <div className="relative overflow-hidden rounded-[38px] border border-white/10 bg-white/[0.03] p-5 md:p-10 backdrop-blur-3xl">

              <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 via-transparent to-[#D6A66A]/10" />

              <div className="relative z-10">

                <div className="text-xs tracking-[0.3em] text-[#B58AF8]">
                  AI INTELLIGENCE
                </div>

                <h2
                  className="mt-4 text-5xl"
                  style={{
                    fontWeight: 250,
                    letterSpacing: "-0.05em",
                  }}
                >
                  Executive AI layer.
                </h2>

                <div className="mt-10 grid gap-5">

                  {[
                    "Revenue anomaly detected in evening service.",
                    "Reservation forecasting indicates +18% weekend increase.",
                    "AI optimization recommends inventory reorder adjustments.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[24px] border border-white/10 bg-black/30 p-6 text-white/70"
                    >
                      {item}
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            {/* ACTIVITY */}
            <div className="relative overflow-hidden rounded-[38px] border border-white/10 bg-white/[0.03] p-4 md:p-8 backdrop-blur-3xl">

              <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 via-transparent to-[#D6A66A]/10" />

              <div className="relative z-10">

                <div className="text-xs tracking-[0.3em] text-[#B58AF8]">
                  ACTIVITY
                </div>

                <h2
                  className="mt-4 text-4xl"
                  style={{
                    fontWeight: 250,
                    letterSpacing: "-0.05em",
                  }}
                >
                  Live feed.
                </h2>

                <div className="mt-8 space-y-4">

                  {[
                    "New reservation confirmed.",
                    "Inventory synced successfully.",
                    "Payroll batch approved.",
                    "AI campaign published.",
                    "Production cycle completed.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[22px] border border-white/10 bg-black/30 p-5 text-white/60"
                    >
                      {item}
                    </div>
                  ))}

                </div>

              </div>

            </div>

            {/* SYSTEMS */}
            <div className="relative overflow-hidden rounded-[38px] border border-white/10 bg-white/[0.03] p-4 md:p-8 backdrop-blur-3xl">

              <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 via-transparent to-[#D6A66A]/10" />

              <div className="relative z-10">

                <div className="text-xs tracking-[0.3em] text-[#B58AF8]">
                  SYSTEMS
                </div>

                <h2
                  className="mt-4 text-4xl"
                  style={{
                    fontWeight: 250,
                    letterSpacing: "-0.05em",
                  }}
                >
                  Infrastructure.
                </h2>

                <div className="mt-8 space-y-4">

                  {[
                    "Finance Engine",
                    "AI Infrastructure",
                    "Reservations",
                    "Production",
                    "CRM Systems",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-[22px] border border-white/10 bg-black/30 px-5 py-4"
                    >

                      <div className="text-white/70">
                        {item}
                      </div>

                      <div className="h-3 w-3 rounded-full bg-green-400 shadow-[0_0_20px_rgba(74,222,128,0.8)]" />

                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}

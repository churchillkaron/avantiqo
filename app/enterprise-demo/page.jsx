"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const sidebar = [
  "Executive Runtime",
  "POS Runtime",
  "Kitchen Runtime",
  "Inventory Runtime",
  "Accounting Runtime",
  "Payroll Runtime",
  "AI Runtime",
  "Marketing Runtime",
];

const orders = [
  {
    table: "Table 12",
    item: "Wagyu Burger",
    status: "PREPARING",
  },
  {
    table: "Table 8",
    item: "Sea Bass",
    status: "READY",
  },
  {
    table: "Table 4",
    item: "Signature Pasta",
    status: "SERVED",
  },
];

const aiAlerts = [
  "AI detected unusual inventory variance",
  "Payroll anomaly identified before close",
  "Revenue synchronization completed",
  "Kitchen efficiency increased by 8%",
];

export default function EnterpriseDemoPage() {

  return (
    <main className="min-h-screen overflow-hidden bg-[#02040A] text-white">

      <Navbar />

      <section className="relative px-6 py-16">

        <div className="absolute left-[-200px] top-[120px] h-[500px] w-[500px] rounded-full bg-purple-700/20 blur-[140px]" />

        <div className="absolute right-[-100px] top-[200px] h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <p className="mb-4 text-xs tracking-[0.28em] text-[#D6A66A]">
                LIVE ENTERPRISE DEMO ENVIRONMENT
              </p>

              <h1 className="max-w-5xl text-[52px] leading-[1.02] tracking-[-0.06em] md:text-[96px] font-extralight">
                Experience the operational nervous system live.
              </h1>

            </div>

            <div className="rounded-full border border-green-500/20 bg-green-500/10 px-5 py-3 text-sm text-green-300">
              DEMO RUNTIME ACTIVE
            </div>

          </div>

          <div className="grid gap-6 xl:grid-cols-[280px_1fr]">

            <div className="enterprise-runtime-card p-5">

              <p className="runtime-label mb-6">
                ENTERPRISE RUNTIMES
              </p>

              <div className="space-y-3">

                {sidebar.map((item) => (

                  <div
                    key={item}
                    className="flex items-center justify-between rounded-2xl border border-white/[0.05] bg-black/20 px-4 py-3"
                  >

                    <span className="text-white/75">
                      {item}
                    </span>

                    <div className="h-2 w-2 rounded-full bg-green-400" />

                  </div>

                ))}

              </div>

            </div>

            <div className="space-y-6">

              <div className="grid gap-6 md:grid-cols-4">

                <MetricCard
                  title="Live Revenue"
                  value="$48,284"
                  status="LIVE"
                />

                <MetricCard
                  title="Kitchen Orders"
                  value="42"
                  status="ACTIVE"
                />

                <MetricCard
                  title="Inventory Health"
                  value="97.2%"
                  status="STABLE"
                />

                <MetricCard
                  title="AI Runtime"
                  value="3 Alerts"
                  status="LEARNING"
                />

              </div>

              <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">

                <div className="enterprise-runtime-card p-8">

                  <div className="mb-8 flex items-center justify-between">

                    <div>

                      <p className="runtime-label mb-2">
                        LIVE POS + KITCHEN FLOW
                      </p>

                      <h2 className="text-3xl font-extralight tracking-[-0.04em]">
                        Operational Runtime Synchronization
                      </h2>

                    </div>

                    <div className="runtime-status-active runtime-value">
                      LIVE
                    </div>

                  </div>

                  <div className="space-y-4">

                    {orders.map((order) => (

                      <div
                        key={order.table}
                        className="rounded-3xl border border-white/[0.05] bg-black/20 p-5"
                      >

                        <div className="mb-4 flex items-center justify-between">

                          <p className="text-lg text-white">
                            {order.table}
                          </p>

                          <div className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs text-purple-200">
                            {order.status}
                          </div>

                        </div>

                        <p className="text-white/65">
                          {order.item}
                        </p>

                      </div>

                    ))}

                  </div>

                </div>

                <div className="enterprise-runtime-card p-8">

                  <div className="mb-8 flex items-center justify-between">

                    <div>

                      <p className="runtime-label mb-2">
                        AI EVENT STREAM
                      </p>

                      <h2 className="text-3xl font-extralight tracking-[-0.04em]">
                        Operational Intelligence
                      </h2>

                    </div>

                    <div className="runtime-status-active runtime-value">
                      AI ACTIVE
                    </div>

                  </div>

                  <div className="space-y-4">

                    {aiAlerts.map((alert) => (

                      <div
                        key={alert}
                        className="rounded-2xl border border-purple-500/20 bg-purple-500/5 p-4"
                      >

                        <p className="text-white/75">
                          {alert}
                        </p>

                      </div>

                    ))}

                  </div>

                </div>

              </div>

              <div className="enterprise-runtime-card p-8">

                <div className="mb-8 flex items-center justify-between">

                  <div>

                    <p className="runtime-label mb-2">
                      ENTERPRISE FLOW
                    </p>

                    <h2 className="text-3xl font-extralight tracking-[-0.04em]">
                      Connected Operational Runtime
                    </h2>

                  </div>

                  <div className="runtime-status-active runtime-value">
                    SYNCHRONIZED
                  </div>

                </div>

                <div className="flex flex-wrap items-center gap-4">

                  <Flow label="POS Runtime" />
                  <Arrow />

                  <Flow label="Kitchen Runtime" />
                  <Arrow />

                  <Flow label="Inventory Runtime" />
                  <Arrow />

                  <Flow label="Accounting Runtime" />
                  <Arrow />

                  <Flow label="AI Runtime" />
                  <Arrow />

                  <Flow label="Executive Visibility" />

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}

function MetricCard({
  title,
  value,
  status,
}) {
  return (
    <div className="enterprise-runtime-card p-6">

      <div className="mb-5 flex items-center justify-between">

        <p className="runtime-label">
          {title}
        </p>

        <div className="rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-xs text-white/50">
          {status}
        </div>

      </div>

      <h3 className="text-4xl font-extralight tracking-[-0.05em]">
        {value}
      </h3>

    </div>
  );
}

function Flow({
  label,
}) {
  return (
    <div className="rounded-full border border-white/[0.06] bg-white/[0.03] px-5 py-3 text-white/75">
      {label}
    </div>
  );
}

function Arrow() {
  return (
    <div className="text-white/20">
      →
    </div>
  );
}

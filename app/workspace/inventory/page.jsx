"use client";

import {
  useDemoStore,
} from "../runtime/demoStore";

export default function InventoryPage() {

  const {
    inventory,
    aiEvents,
  } = useDemoStore();

  return (
    <main className="min-h-screen bg-[#02040A] p-8 text-white">

      <div className="mb-10 flex items-end justify-between">

        <div>

          <p className="mb-3 text-xs tracking-[0.24em] text-[#D6A66A]">
            INVENTORY RUNTIME
          </p>

          <h1 className="text-6xl font-extralight tracking-[-0.06em]">
            Live Inventory Ledger
          </h1>

        </div>

        <div className="rounded-full border border-green-500/20 bg-green-500/10 px-5 py-3 text-sm text-green-300">
          SYNCHRONIZED
        </div>

      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_420px]">

        <div className="space-y-4">

          {Object.entries(
            inventory
          ).map(
            ([item, amount]) => (

              <div
                key={item}
                className="flex items-center justify-between rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6"
              >

                <div>

                  <p className="text-2xl capitalize text-white/80">
                    {item}
                  </p>

                  <p className="mt-2 text-sm text-white/40">
                    Runtime synchronized
                  </p>

                </div>

                <div
                  className={`text-5xl font-extralight ${
                    amount < 10
                      ? "text-amber-400"
                      : "text-green-400"
                  }`}
                >
                  {amount}
                </div>

              </div>

            )
          )}

        </div>

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <div className="mb-8 flex items-center justify-between">

            <div>

              <p className="mb-2 text-xs tracking-[0.22em] text-[#D6A66A]">
                AI INVENTORY EVENTS
              </p>

              <h2 className="text-3xl font-extralight">
                Runtime Intelligence
              </h2>

            </div>

            <div className="rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
              AI ACTIVE
            </div>

          </div>

          <div className="space-y-3">

            {aiEvents.map(
              (
                event,
                index
              ) => (

                <div
                  key={index}
                  className="rounded-2xl border border-purple-500/20 bg-purple-500/5 p-4 text-white/70"
                >
                  {event}
                </div>

              )
            )}

          </div>

        </div>

      </div>

    </main>
  );
}

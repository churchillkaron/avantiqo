"use client";

import {
  useDemoStore,
} from "../runtime/demoStore";

export default function ExpoPage() {

  const {
    expoTickets,
    markServed,
  } = useDemoStore();

  return (
    <main className="min-h-screen bg-[#02040A] p-8 text-white">

      <p className="mb-3 text-xs tracking-[0.24em] text-[#D6A66A]">
        EXPO RUNTIME
      </p>

      <h1 className="mb-10 text-6xl font-extralight tracking-[-0.06em]">
        Ready To Serve
      </h1>

      {expoTickets.length === 0 && (

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-10 text-white/40">
          No ready orders in Expo Runtime.
        </div>

      )}

      <div className="grid gap-6 md:grid-cols-2">

        {expoTickets.map((ticket) => (

          <div
            key={ticket.id}
            className="rounded-3xl border border-green-500/20 bg-green-500/10 p-8"
          >

            <div className="mb-6 flex items-center justify-between">

              <h2 className="text-5xl font-extralight">
                {ticket.table}
              </h2>

              <div className="rounded-full bg-green-500/20 px-4 py-2 text-sm text-green-300">
                READY
              </div>

            </div>

            <p className="mb-6 text-2xl text-white/80">
              {ticket.item}
            </p>

            <button
              onClick={() =>
                markServed(
                  ticket.id
                )
              }
              className="rounded-2xl bg-gradient-to-r from-[#D6A66A] via-[#C084FC] to-[#7C5CFA] px-5 py-3"
            >
              Mark Served
            </button>

          </div>

        ))}

      </div>

    </main>
  );
}

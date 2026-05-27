"use client";

import Link from "next/link";

import {
  useDemoStore,
} from "../runtime/demoStore";

export default function KitchenPage() {

  const {
    kitchenTickets,
    markReady,
    startCooking,
  } = useDemoStore();

  return (
    <main className="min-h-screen bg-[#02040A] p-8 text-white">

      <div className="mb-10 flex items-center justify-between">

        <div>

          <p className="mb-3 text-xs tracking-[0.24em] text-[#D6A66A]">
            KITCHEN RUNTIME
          </p>

          <h1 className="text-6xl font-extralight tracking-[-0.06em]">
            Live Kitchen Queue
          </h1>

        </div>

        <Link
          href="/workspace/expo"
          className="rounded-2xl border border-white/10 px-5 py-3 text-white/70"
        >
          Expo Runtime
        </Link>

      </div>

      {kitchenTickets.length === 0 && (

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-10 text-white/40">
          No active kitchen tickets.
        </div>

      )}

      <div className="grid gap-6 md:grid-cols-3">

        {kitchenTickets.map((ticket) => (

          <div
            key={ticket.id}
            className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6"
          >

            <div className="mb-6 flex items-center justify-between">

              <h2 className="text-5xl font-extralight">
                {ticket.table}
              </h2>

              <div className="text-right">

                <div className="text-amber-400">
                  {ticket.status}
                </div>

                <div className="mt-2 text-sm text-white/35">
                  {formatTimer(ticket.createdAt)}
                </div>

              </div>

            </div>

            <p className="mb-8 text-2xl text-white/80">
              {ticket.item}
            </p>

            {ticket.status === "NEW" && (

              <button
                onClick={() =>
                  startCooking(
                    ticket.id
                  )
                }
                className="rounded-xl border border-amber-500/20 bg-amber-500/10 px-4 py-3 text-amber-300"
              >
                START COOKING
              </button>

            )}

            {ticket.status === "COOKING" && (

              <button
                onClick={() =>
                  markReady(
                    ticket.id
                  )
                }
                className="rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-green-300"
              >
                READY
              </button>

            )}

          </div>

        ))}

      </div>

    </main>
  );
}


function formatTimer(
  timestamp
) {
  const seconds =
    Math.floor(
      (Date.now() - timestamp) /
      1000
    );

  const minutes =
    String(
      Math.floor(
        seconds / 60
      )
    ).padStart(2, "0");

  const remaining =
    String(
      seconds % 60
    ).padStart(2, "0");

  return `${minutes}:${remaining}`;
}

"use client";

import { useState } from "react";

import Link from "next/link";

import {
  useDemoStore,
} from "../runtime/demoStore";

const menu = [
  {
    name: "Wagyu Burger",
    price: 420,
  },
  {
    name: "Sea Bass",
    price: 620,
  },
  {
    name: "Signature Pasta",
    price: 360,
  },
  {
    name: "Wine",
    price: 290,
  },
];

export default function POSPage() {

  const {
    tables,
    addOrder,
    sendToKitchen,
  } = useDemoStore();

  const [
    selectedTable,
    setSelectedTable,
  ] = useState(null);

  return (
    <main className="min-h-screen bg-[#02040A] p-8 text-white">

      <div className="mb-10 flex items-center justify-between">

        <div>

          <p className="mb-3 text-xs tracking-[0.24em] text-[#D6A66A]">
            POS RUNTIME
          </p>

          <h1 className="text-6xl font-extralight tracking-[-0.06em]">
            Restaurant POS
          </h1>

        </div>

        <div className="flex gap-3">

          <Link
            href="/workspace/kitchen"
            className="rounded-2xl border border-white/10 px-5 py-3 text-white/70"
          >
            Kitchen
          </Link>

          <Link
            href="/workspace/expo"
            className="rounded-2xl border border-white/10 px-5 py-3 text-white/70"
          >
            Expo
          </Link>

        </div>

      </div>

      <div className="grid gap-6 xl:grid-cols-[420px_1fr]">

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="mb-6 text-xs tracking-[0.22em] text-[#D6A66A]">
            TABLES
          </p>

          <div className="grid grid-cols-2 gap-4">

            {tables.map((table) => (

              <button
                key={table.id}
                onClick={() =>
                  setSelectedTable(
                    table.id
                  )
                }
                className={`rounded-3xl border p-6 transition-all duration-300 ${
                  selectedTable ===
                  table.id
                    ? "border-purple-500/30 bg-purple-500/10"
                    : "border-white/[0.05] bg-black/20"
                }`}
              >

                <div className="mb-4 flex items-center justify-between">

                  <h2 className="text-4xl font-extralight">
                    {table.id}
                  </h2>

                  <div className="h-3 w-3 rounded-full bg-green-400" />

                </div>

                <p className="text-sm text-white/40">
                  {table.status}
                </p>

              </button>

            ))}

          </div>

        </div>

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          {!selectedTable && (

            <div className="flex h-full items-center justify-center rounded-3xl border border-dashed border-white/10 text-white/30">

              Select a table to begin order flow.

            </div>

          )}

          {selectedTable && (

            <>

              <div className="mb-8 flex items-center justify-between">

                <div>

                  <p className="mb-2 text-xs tracking-[0.22em] text-[#D6A66A]">
                    ACTIVE TABLE
                  </p>

                  <h2 className="text-5xl font-extralight">
                    {selectedTable}
                  </h2>

                </div>

                <button
                  onClick={() =>
                    sendToKitchen(
                      selectedTable
                    )
                  }
                  className="rounded-2xl bg-gradient-to-r from-[#D6A66A] via-[#C084FC] to-[#7C5CFA] px-6 py-4"
                >
                  SEND ORDER
                </button>

              </div>

              <div className="grid gap-4 md:grid-cols-2">

                {menu.map((item) => (

                  <button
                    key={item.name}
                    onClick={() =>
                      addOrder(
                        selectedTable,
                        item
                      )
                    }
                    className="rounded-3xl border border-white/[0.05] bg-black/20 p-5 text-left transition-all duration-300 hover:border-purple-500/30 hover:bg-purple-500/10"
                  >

                    <p className="text-2xl text-white/80">
                      {item.name}
                    </p>

                    <p className="mt-3 text-white/40">
                      ฿{item.price}
                    </p>

                  </button>

                ))}

              </div>

              <div className="mt-8 space-y-3">

                {tables
                  .find(
                    (table) =>
                      table.id ===
                      selectedTable
                  )
                  ?.orders.map(
                    (
                      order,
                      index
                    ) => (

                      <div
                        key={index}
                        className="flex items-center justify-between rounded-2xl border border-white/[0.05] bg-black/20 p-4"
                      >

                        <span className="text-white/75">
                          {order.name}
                        </span>

                        <span className="text-white/40">
                          ฿{order.price}
                        </span>

                      </div>

                    )
                  )}

              </div>

            </>

          )}

        </div>

      </div>

    </main>
  );
}

"use client";

import { useTranslation } from "@/app/providers/I18nProvider";

export default function KitchenPage() {

  const { t } = useTranslation();

  const orders = [
    {
      table: "T1",
      items: ["2 Wagyu Burgers", "1 Truffle Fries"],
      status: "NEW",
      time: "04:32",
    },
    {
      table: "T7",
      items: ["2 Ribeye Steak", "1 Caesar Salad"],
      status: "COOKING",
      time: "08:11",
    },
    {
      table: "T12",
      items: ["1 Salmon", "2 Wine"],
      status: "READY",
      time: "11:24",
    },
  ];


    return (
    <div className="space-y-6">

      <div className="rounded-[32px] border border-orange-500/10 bg-gradient-to-br from-[#1A0E05] to-[#050816] p-6 xl:p-10">

        <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">

          <div>

            <p className="mb-3 text-xs tracking-[0.3em] text-[#D6A66A]">
              {t("kitchen.hero.badge")}
            </p>

            <h1 className="text-3xl font-extralight tracking-[-0.05em] xl:text-7xl">
              {t("kitchen.hero.title")}
            </h1>

            <p className="mt-4 max-w-3xl text-white/50">
              {t("kitchen.hero.description")}
            </p>

          </div>

          <div className="rounded-3xl border border-green-500/20 bg-green-500/10 px-6 py-5">

            <div className="text-sm text-green-300">
              {t("kitchen.hero.statusLabel")}
            </div>

            <div className="mt-2 text-3xl font-extralight text-white">
              {t("kitchen.status.active")}
            </div>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-4">

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("kitchen.cards.new.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-cyan-300">
            6
          </div>

          <p className="mt-3 text-sm text-cyan-300">
            {t("kitchen.cards.new.description")}
          </p>

        </div>

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("kitchen.cards.cooking.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-amber-300">
            12
          </div>

          <p className="mt-3 text-sm text-amber-300">
            {t("kitchen.cards.cooking.description")}
          </p>

        </div>

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("kitchen.cards.ready.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-green-400">
            4
          </div>

          <p className="mt-3 text-sm text-green-300">
            {t("kitchen.cards.ready.description")}
          </p>

        </div>

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("kitchen.cards.ticket.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-purple-300">
            8m
          </div>

          <p className="mt-3 text-sm text-purple-300">
            {t("kitchen.cards.ticket.description")}
          </p>

        </div>

      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">

        {orders.map((order) => (
          <div
            key={order.table}
            className="rounded-[32px] border border-white/[0.05] bg-white/[0.03] p-6"
          >

            <div className="mb-6 flex items-center justify-between">

              <div>

                <p className="mb-2 text-xs tracking-[0.24em] text-[#D6A66A]">
                  {t("kitchen.runtime.badge")}
                </p>

                <h2 className="text-4xl font-extralight">
                  {order.table}
                </h2>

              </div>

              <div
                className={`rounded-full px-4 py-2 text-sm ${
                  order.status === "NEW"
                    ? "bg-cyan-500/10 text-cyan-300"
                    : order.status === "COOKING"
                    ? "bg-amber-500/10 text-amber-300"
                    : "bg-green-500/10 text-green-300"
                }`}
              >
                {order.status}
              </div>

            </div>

            <div className="space-y-3">

              {order.items.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/[0.05] bg-black/20 p-4"
                >

                  <p className="text-xl font-extralight">
                    {item}
                  </p>

                  <p className="mt-2 text-sm text-white/40">
                    {t("kitchen.cards.ticket.description")}
                  </p>

                </div>
              ))}

            </div>

            <div className="mt-6 rounded-2xl bg-black/20 p-4">

              <div className="flex items-center justify-between">

                <span className="text-white/50">
                  {t("kitchen.runtime.ticket")}
                </span>

                <span className="text-2xl font-extralight text-white">
                  {order.time}
                </span>

              </div>

            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">

              {order.status === "NEW" && (
                <>
                  <div className="rounded-2xl border border-amber-500/20 bg-amber-500/10 p-4 text-center">

                    <div className="text-lg font-extralight text-amber-300">
                      {t("kitchen.actions.start")}
                    </div>

                    <p className="mt-2 text-xs text-white/40">
                      Begin {t("kitchen.cards.cooking.title")}
                    </p>

                  </div>

                  <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-center">

                    <div className="text-lg font-extralight text-red-300">
                      {t("kitchen.actions.hold")}
                    </div>

                    <p className="mt-2 text-xs text-white/40">
                      {t("kitchen.actions.pause")}
                    </p>

                  </div>
                </>
              )}

              {order.status === "COOKING" && (
                <>
                  <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-4 text-center">

                    <div className="text-lg font-extralight text-green-300">
                      {t("kitchen.actions.ready")}
                    </div>

                    <p className="mt-2 text-xs text-white/40">
                      {t("kitchen.actions.expo")}
                    </p>

                  </div>

                  <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-center">

                    <div className="text-lg font-extralight text-red-300">
                      {t("kitchen.actions.issue")}
                    </div>

                    <p className="mt-2 text-xs text-white/40">
                      {t("kitchen.actions.problem")}
                    </p>

                  </div>
                </>
              )}

              {order.status === "READY" && (
                <>
                  <div className="rounded-2xl border border-purple-500/20 bg-purple-500/10 p-4 text-center">

                    <div className="text-lg font-extralight text-purple-300">
                      {t("kitchen.actions.expoReady")}
                    </div>

                    <p className="mt-2 text-xs text-white/40">
                      {t("kitchen.actions.await")}
                    </p>

                  </div>

                  <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-4 text-center">

                    <div className="text-lg font-extralight text-green-300">
                      {t("kitchen.actions.complete")}
                    </div>

                    <p className="mt-2 text-xs text-white/40">
                      {t("kitchen.actions.closed")}
                    </p>

                  </div>
                </>
              )}

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

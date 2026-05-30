"use client";

import { useTranslation } from "@/app/providers/I18nProvider";

export default function ExpoPage() {

  const { t } = useTranslation();

  const expoOrders = [
    {
      table: "T1",
      source: t("expo.sources.kitchen"),
      items: [
        "2 Wagyu Burger",
        "1 Truffle Fries",
      ],
      status: t("expo.status.readyForService"),
      runner: "Alex",
      time: "8m",
    },
    {
      table: "T4",
      source: t("expo.sources.bar"),
      items: [
        "2 Cocktails",
        "1 Red Wine",
      ],
      status: t("expo.status.waitingRunner"),
      runner: "Mia",
      time: "4m",
    },
    {
      table: "VIP",
      source: t("expo.sources.kitchenBar"),
      items: [
        "4 Wagyu Burger",
        "Champagne",
      ],
      status: t("expo.status.serving"),
      runner: "Daniel",
      time: "12m",
    },
  ];


    return (
    <div className="space-y-6">

      <div className="rounded-[32px] border border-cyan-500/10 bg-gradient-to-br from-[#07111F] to-[#050816] p-6 xl:p-10">

        <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">

          <div>

            <p className="mb-3 text-xs tracking-[0.3em] text-[#D6A66A]">
              {t("expo.hero.badge")}
            </p>

            <h1 className="text-3xl font-extralight tracking-[-0.05em] xl:text-7xl">
              {t("expo.hero.title")}
            </h1>

            <p className="mt-4 max-w-3xl text-white/50">
              {t("expo.hero.description")}
            </p>

          </div>

          <div className="rounded-3xl border border-green-500/20 bg-green-500/10 px-6 py-5">

            <div className="text-sm text-green-300">
              {t("expo.runtime.badge")}
            </div>

            <div className="mt-2 text-3xl font-extralight text-white">
              {t("expo.runtime.active")}
            </div>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-4">

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("expo.cards.waiting.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-cyan-300">
            8
          </div>

          <p className="mt-3 text-sm text-cyan-300">
            {t("expo.cards.waiting.description")}
          </p>

        </div>

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("expo.cards.ready.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-green-400">
            5
          </div>

          <p className="mt-3 text-sm text-green-300">
            {t("expo.cards.ready.description")}
          </p>

        </div>

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("expo.cards.runners.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-purple-300">
            3
          </div>

          <p className="mt-3 text-sm text-purple-300">
            {t("expo.cards.runners.description")}
          </p>

        </div>

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("expo.cards.dispatch.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-amber-300">
            2m
          </div>

          <p className="mt-3 text-sm text-amber-300">
            {t("expo.cards.dispatch.description")}
          </p>

        </div>

      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">

        {expoOrders.map((order) => (
          <div
            key={order.table}
            className="rounded-[32px] border border-white/[0.05] bg-white/[0.03] p-6"
          >

            <div className="mb-6 flex items-center justify-between">

              <div>

                <p className="mb-2 text-xs tracking-[0.24em] text-[#D6A66A]">
                  {t("expo.order.badge")}
                </p>

                <h2 className="text-4xl font-extralight">
                  {order.table}
                </h2>

              </div>

              <div className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                {order.source}
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
                    {t("expo.order.ready")}
                  </p>

                </div>
              ))}

            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">

              <div className="rounded-2xl bg-black/20 p-4">

                <p className="text-sm text-white/40">
                  {t("expo.order.runner")}
                </p>

                <div className="mt-2 text-2xl font-extralight">
                  {order.runner}
                </div>

              </div>

              <div className="rounded-2xl bg-black/20 p-4">

                <p className="text-sm text-white/40">
                  {t("expo.order.runtime")}
                </p>

                <div className="mt-2 text-2xl font-extralight text-green-400">
                  {order.time}
                </div>

              </div>

            </div>

            <div className="mt-6 rounded-2xl border border-green-500/20 bg-green-500/10 p-4">

              <div className="text-center">

                <div className="text-lg font-extralight text-green-300">
                  {order.status}
                </div>

                <p className="mt-2 text-xs text-white/40">
                  {t("expo.order.sync")}
                </p>

              </div>

            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">

              <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-4 text-center">

                <div className="text-lg font-extralight text-cyan-300">
                  {t("expo.actions.callRunner")}
                </div>

                <p className="mt-2 text-xs text-white/40">
                  {t("expo.actions.dispatch")}
                </p>

              </div>

              <div className="rounded-2xl border border-purple-500/20 bg-purple-500/10 p-4 text-center">

                <div className="text-lg font-extralight text-purple-300">
                  {t("expo.actions.served")}
                </div>

                <p className="mt-2 text-xs text-white/40">
                  {t("expo.actions.close")}
                </p>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

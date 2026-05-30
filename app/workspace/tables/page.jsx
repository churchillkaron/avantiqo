"use client";

import { useTranslation } from "@/app/providers/I18nProvider";

export default function TablesPage() {

  const { t } = useTranslation();

  const tables = [
    {
      table: "T1",
      status: t("tables.status.dining"),
      guests: 4,
      total: "฿1,276",
      orders: [
        "2 Wagyu Burger",
        "1 Red Wine",
      ],
    },
    {
      table: "T2",
      status: t("tables.status.waitingFood"),
      guests: 2,
      total: "฿840",
      orders: [
        "2 Truffle Fries",
        "2 Cocktails",
      ],
    },
    {
      table: "T3",
      status: t("tables.status.payment"),
      guests: 3,
      total: "฿2,140",
      orders: [
        "Steak",
        "Wine Pairing",
        "Desserts",
      ],
    },
    {
      table: "VIP",
      status: t("tables.status.highValue"),
      guests: 6,
      total: "฿8,420",
      orders: [
        "Premium Wagyu Set",
        "Champagne",
      ],
    },
  ];


    return (
    <div className="space-y-6">

      <div className="rounded-[32px] border border-blue-500/10 bg-gradient-to-br from-[#08101D] to-[#050816] p-6 xl:p-10">

        <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">

          <div>

            <p className="mb-3 text-xs tracking-[0.3em] text-[#D6A66A]">
              {t("tables.hero.badge")}
            </p>

            <h1 className="text-3xl font-extralight tracking-[-0.05em] xl:text-7xl">
              {t("tables.hero.title")}
            </h1>

            <p className="mt-4 max-w-3xl text-white/50">
              {t("tables.hero.description")}
            </p>

          </div>

          <div className="rounded-3xl border border-green-500/20 bg-green-500/10 px-6 py-5">

            <div className="text-sm text-green-300">
              {t("tables.floor.badge")}
            </div>

            <div className="mt-2 text-3xl font-extralight text-white">
              {t("tables.floor.active")}
            </div>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-4">

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("tables.cards.activeTables.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-green-400">
            14
          </div>

          <p className="mt-3 text-sm text-green-300">
            {t("tables.cards.activeTables.description")}
          </p>

        </div>

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("tables.cards.guests.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-cyan-300">
            48
          </div>

          <p className="mt-3 text-sm text-cyan-300">
            {t("tables.cards.guests.description")}
          </p>

        </div>

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("tables.cards.avgTicket.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-purple-300">
            ฿1.8K
          </div>

          <p className="mt-3 text-sm text-purple-300">
            {t("tables.cards.avgTicket.description")}
          </p>

        </div>

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("tables.cards.paymentQueue.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-amber-300">
            3
          </div>

          <p className="mt-3 text-sm text-amber-300">
            {t("tables.cards.paymentQueue.description")}
          </p>

        </div>

      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">

        {tables.map((table) => (
          <div
            key={table.table}
            className="rounded-[32px] border border-white/[0.05] bg-white/[0.03] p-6"
          >

            <div className="mb-6 flex items-center justify-between">

              <div>

                <p className="mb-2 text-xs tracking-[0.24em] text-[#D6A66A]">
                  {t("tables.table.badge")}
                </p>

                <h2 className="text-4xl font-extralight">
                  {table.table}
                </h2>

              </div>

              <div className="rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-300">
                {table.status}
              </div>

            </div>

            <div className="mb-6 grid grid-cols-2 gap-4">

              <div className="rounded-2xl bg-black/20 p-4">

                <p className="text-sm text-white/40">
                  {t("tables.table.guests")}
                </p>

                <div className="mt-2 text-3xl font-extralight">
                  {table.guests}
                </div>

              </div>

              <div className="rounded-2xl bg-black/20 p-4">

                <p className="text-sm text-white/40">
                  {t("tables.table.total")}
                </p>

                <div className="mt-2 text-3xl font-extralight text-green-400">
                  {table.total}
                </div>

              </div>

            </div>

            <div className="space-y-3">

              {table.orders.map((order) => (
                <div
                  key={order}
                  className="rounded-2xl border border-white/[0.05] bg-black/20 p-4"
                >

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-xl font-extralight">
                        {order}
                      </p>

                      <p className="mt-2 text-sm text-white/40">
                        {t("tables.table.runtime")}
                      </p>

                    </div>

                    <div className="rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
                      {t("tables.table.live")}
                    </div>

                  </div>

                </div>
              ))}

            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">

              <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-4 text-center">

                <div className="text-lg font-extralight text-cyan-300">
                  {t("tables.actions.viewFlow")}
                </div>

                <p className="mt-2 text-xs text-white/40">
                  {t("tables.actions.kitchenBar")}
                </p>

              </div>

              <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-4 text-center">

                <div className="text-lg font-extralight text-green-300">
                  {t("tables.actions.payment")}
                </div>

                <p className="mt-2 text-xs text-white/40">
                  {t("tables.actions.settle")}
                </p>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

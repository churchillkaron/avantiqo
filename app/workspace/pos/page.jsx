"use client";

import { useTranslation } from "@/app/providers/I18nProvider";

export default function POSPage() {

  const { t } = useTranslation();

  const tables = [
    "T1",
    "T2",
    "T3",
    "T4",
    "T5",
    "VIP",
  ];

  const categories = [
    t("pos.categories.burgers"),
    t("pos.categories.starters"),
    t("pos.categories.drinks"),
    t("pos.categories.desserts"),
  ];

  const dishes = [
    {
      name: t("pos.dishes.wagyu"),
      price: "฿420",
      status: t("pos.status.highDemand"),
    },
    {
      name: t("pos.dishes.fries"),
      price: "฿180",
      status: t("pos.status.liveCooking"),
    },
    {
      name: t("pos.dishes.wine"),
      price: "฿320",
      status: t("pos.status.barRouting"),
    },
    {
      name: t("pos.dishes.salad"),
      price: "฿240",
      status: t("pos.status.freshPrep"),
    },
  ];

  return (
    <div className="space-y-6">

      <div className="rounded-[32px] border border-white/[0.06] bg-gradient-to-br from-[#12091F] to-[#050816] p-6 xl:p-10">

        <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">

          <div>

            <p className="mb-3 text-xs tracking-[0.3em] text-[#D6A66A]">
              {t("pos.hero.badge")}
            </p>

            <h1 className="text-3xl font-extralight tracking-[-0.05em] xl:text-7xl">
              {t("pos.hero.title")}
            </h1>

            <p className="mt-4 max-w-3xl text-white/50">
              {t("pos.hero.description")}
            </p>

          </div>

          <div className="rounded-3xl border border-green-500/20 bg-green-500/10 px-6 py-5">

            <div className="text-sm text-green-300">
              {t("pos.hero.statusLabel")}
            </div>

            <div className="mt-2 text-3xl font-extralight text-white">
              {t("pos.status.live")}
            </div>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1.2fr_0.8fr]">

        <div className="space-y-5">

          <div className="rounded-[32px] border border-white/[0.05] bg-white/[0.03] p-6">

            <div className="mb-5 flex items-center justify-between">

              <div>

                <p className="mb-2 text-xs tracking-[0.24em] text-[#D6A66A]">
                  {t("pos.tables.badge")}
                </p>

                <h2 className="text-3xl font-extralight">
                  {t("pos.tables.title")}
                </h2>

              </div>

              <div className="rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-300">
                {t("pos.tables.active")}
              </div>

            </div>

            <div className="grid grid-cols-2 gap-4 xl:grid-cols-3">

              {tables.map((table) => (
                <div
                  key={table}
                  className="rounded-3xl border border-purple-500/20 bg-purple-500/10 p-5 transition hover:border-purple-400/40"
                >

                  <div className="text-3xl font-extralight">
                    {table}
                  </div>

                  <div className="mt-3 text-sm text-white/50">
                    {t("pos.tables.runtime")}
                  </div>

                </div>
              ))}

            </div>

          </div>

          <div className="rounded-[32px] border border-white/[0.05] bg-white/[0.03] p-6">

            <div className="mb-5 flex items-center justify-between">

              <div>

                <p className="mb-2 text-xs tracking-[0.24em] text-[#D6A66A]">
                  {t("pos.menu.badge")}
                </p>

                <h2 className="text-3xl font-extralight">
                  {t("pos.menu.title")}
                </h2>

              </div>

              <div className="rounded-full bg-amber-500/10 px-4 py-2 text-sm text-amber-300">
                {t("pos.menu.aiPricing")}
              </div>

            </div>

            <div className="mb-6 flex flex-wrap gap-3">

              {categories.map((category) => (
                <div
                  key={category}
                  className="rounded-full border border-white/[0.06] bg-black/20 px-4 py-2 text-sm text-white/70"
                >
                  {category}
                </div>
              ))}

            </div>

            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">

              {dishes.map((dish) => (
                <div
                  key={dish.name}
                  className="rounded-3xl border border-white/[0.05] bg-black/20 p-5"
                >

                  <div className="flex items-start justify-between">

                    <div>

                      <p className="text-2xl font-extralight">
                        {dish.name}
                      </p>

                      <p className="mt-3 text-white/40">
                        {t("pos.menu.runtime")}
                      </p>

                    </div>

                    <div className="text-right">

                      <div className="text-2xl font-extralight text-green-400">
                        {dish.price}
                      </div>

                      <div className="mt-2 text-xs text-purple-300">
                        {dish.status}
                      </div>

                    </div>

                  </div>

                  <div className="mt-5 rounded-2xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-center text-sm text-green-300">

                    {t("pos.menu.add")}

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

        <div className="space-y-5">

          <div className="rounded-[32px] border border-green-500/20 bg-green-500/10 p-6">

            <div className="mb-5 flex items-center justify-between">

              <div>

                <p className="mb-2 text-xs tracking-[0.24em] text-[#D6A66A]">
                  {t("pos.order.badge")}
                </p>

                <h2 className="text-3xl font-extralight">
                  Table T1
                </h2>

              </div>

              <div className="rounded-full bg-black/20 px-4 py-2 text-sm text-green-300">
                {t("pos.status.live")}
              </div>

            </div>

            <div className="space-y-4">

              <div className="rounded-2xl bg-black/20 p-4">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-xl font-extralight">
                      2 Wagyu Burger
                    </p>

                    <p className="mt-2 text-sm text-white/40">
                      {t("pos.order.kitchenRouting")}
                    </p>

                  </div>

                  <div className="text-xl text-green-400">
                    ฿840
                  </div>

                </div>

              </div>

              <div className="rounded-2xl bg-black/20 p-4">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-xl font-extralight">
                      1 Red Wine
                    </p>

                    <p className="mt-2 text-sm text-white/40">
                      {t("pos.order.barRouting")}
                    </p>

                  </div>

                  <div className="text-xl text-purple-300">
                    ฿320
                  </div>

                </div>

              </div>

            </div>

            <div className="mt-6 space-y-3">

              <div className="flex items-center justify-between text-white/70">

                <span>{t("pos.order.subtotal")}</span>
                <span>฿1,160</span>

              </div>

              <div className="flex items-center justify-between text-white/70">

                <span>{t("pos.order.serviceCharge")}</span>
                <span>฿116</span>

              </div>

              <div className="h-px bg-white/[0.08]" />

              <div className="flex items-center justify-between">

                <span className="text-xl">
                  {t("pos.order.total")}
                </span>

                <span className="text-4xl font-extralight text-green-400">
                  ฿1,276
                </span>

              </div>

            </div>

            <div className="mt-8 rounded-3xl border border-green-500/20 bg-black/20 p-5 text-center">

              <div className="text-2xl font-extralight text-green-300">
                {t("pos.order.send")}
              </div>

              <p className="mt-2 text-sm text-white/40">
                {t("pos.order.routing")}
              </p>

            </div>

          </div>

          <div className="rounded-[32px] border border-purple-500/20 bg-purple-500/10 p-6">

            <div className="mb-5 flex items-center justify-between">

              <div>

                <p className="mb-2 text-xs tracking-[0.24em] text-[#D6A66A]">
                  {t("pos.status.live")} RUNTIME
                </p>

                <h2 className="text-3xl font-extralight">
                  {t("pos.runtime.title")}
                </h2>

              </div>

              <div className="rounded-full bg-black/20 px-4 py-2 text-sm text-purple-300">
                {t("pos.status.active")}
              </div>

            </div>

            <div className="space-y-4">

              <div className="rounded-2xl bg-black/20 p-4">

                <p className="text-xl font-extralight">
                  {t("pos.runtime.kitchenTitle")}
                </p>

                <p className="mt-2 text-white/50">
                  {t("pos.runtime.kitchenDescription")}
                </p>

              </div>

              <div className="rounded-2xl bg-black/20 p-4">

                <p className="text-xl font-extralight">
                  {t("pos.runtime.inventoryTitle")}
                </p>

                <p className="mt-2 text-white/50">
                  {t("pos.runtime.inventoryDescription")}
                </p>

              </div>

              <div className="rounded-2xl bg-black/20 p-4">

                <p className="text-xl font-extralight">
                  {t("pos.runtime.profitTitle")}
                </p>

                <p className="mt-2 text-white/50">
                  {t("pos.runtime.profitDescription")}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

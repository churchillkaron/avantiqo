"use client";

import { useTranslation } from "@/app/providers/I18nProvider";

export default function InventoryPage() {

  const { t } = useTranslation();

  const dishStock = [
    {
      name: t("inventory.batch.wagyu"),
      stock: "42",
      status: t("inventory.status.good"),
      type: t("inventory.batch.type"),
    },
    {
      name: t("inventory.batch.buns"),
      stock: "68",
      status: t("inventory.status.stable"),
      type: t("inventory.batch.type"),
    },
    {
      name: t("inventory.batch.sauce"),
      stock: "12L",
      status: t("inventory.status.low"),
      type: t("inventory.batch.type"),
    },
    {
      name: t("inventory.batch.fries"),
      stock: "24",
      status: t("inventory.status.good"),
      type: t("inventory.batch.type"),
    },
  ];

  const ingredientStock = [
    {
      name: t("inventory.ingredients.tomatoes"),
      stock: "18.4kg",
      usage: "42g / burger",
      status: t("inventory.status.low"),
    },
    {
      name: t("inventory.ingredients.lettuce"),
      stock: "9.2kg",
      usage: "28g / burger",
      status: t("inventory.status.good"),
    },
    {
      name: t("inventory.ingredients.potatoes"),
      stock: "42kg",
      usage: "180g / fries",
      status: t("inventory.status.good"),
    },
    {
      name: t("inventory.ingredients.cheese"),
      stock: "6.4kg",
      usage: "22g / burger",
      status: t("inventory.status.warning"),
    },
  ];

  return (
    <div className="space-y-6">

      <div className="rounded-[32px] border border-emerald-500/10 bg-gradient-to-br from-[#07140D] to-[#050816] p-6 xl:p-10">

        <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">

          <div>

            <p className="mb-3 text-xs tracking-[0.3em] text-[#D6A66A]">
              {t("inventory.hero.badge")}
            </p>

            <h1 className="text-3xl font-extralight tracking-[-0.05em] xl:text-7xl">
              {t("inventory.hero.title")}
            </h1>

            <p className="mt-4 max-w-3xl text-white/50">
              {t("inventory.hero.description")}
            </p>

          </div>

          <div className="rounded-3xl border border-green-500/20 bg-green-500/10 px-6 py-5">

            <div className="text-sm text-green-300">
              {t("inventory.hero.statusLabel")}
            </div>

            <div className="mt-2 text-3xl font-extralight text-white">
              {t("inventory.hero.status")}
            </div>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-4">

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("inventory.cards.ingredients.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-green-400">
            482
          </div>

          <p className="mt-3 text-sm text-green-300">
            {t("inventory.cards.ingredients.description")}
          </p>

        </div>

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("inventory.cards.batch.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-cyan-300">
            28
          </div>

          <p className="mt-3 text-sm text-cyan-300">
            {t("inventory.cards.batch.description")}
          </p>

        </div>

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("inventory.cards.risk.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-amber-300">
            3
          </div>

          <p className="mt-3 text-sm text-amber-300">
            {t("inventory.cards.risk.description")}
          </p>

        </div>

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("inventory.cards.procurement.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-purple-300">
            {t("inventory.status.live")}
          </div>

          <p className="mt-3 text-sm text-purple-300">
            {t("inventory.cards.procurement.description")}
          </p>

        </div>

      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">

        <div className="rounded-[32px] border border-cyan-500/10 bg-cyan-500/5 p-6">

          <div className="mb-6 flex items-center justify-between">

            <div>

              <p className="mb-2 text-xs tracking-[0.24em] text-[#D6A66A]">
                {t("inventory.batch.badge")}
              </p>

              <h2 className="text-4xl font-extralight">
                {t("inventory.batch.title")}
              </h2>

            </div>

            <div className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
              {t("inventory.status.live")}
            </div>

          </div>

          <div className="space-y-4">

            {dishStock.map((item) => (
              <div
                key={item.name}
                className="rounded-3xl border border-white/[0.05] bg-black/20 p-5"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-2xl font-extralight">
                      {item.name}
                    </p>

                    <p className="mt-2 text-white/50">
                      {item.type}
                    </p>

                  </div>

                  <div className="text-right">

                    <div className="text-3xl font-extralight text-cyan-300">
                      {item.stock}
                    </div>

                    <div className="mt-2 text-sm text-white/40">
                      {item.status}
                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

        <div className="rounded-[32px] border border-green-500/10 bg-green-500/5 p-6">

          <div className="mb-6 flex items-center justify-between">

            <div>

              <p className="mb-2 text-xs tracking-[0.24em] text-[#D6A66A]">
                {t("inventory.ingredients.badge")}
              </p>

              <h2 className="text-4xl font-extralight">
                {t("inventory.ingredients.title")}
              </h2>

            </div>

            <div className="rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-300">
              {t("inventory.status.live")}
            </div>

          </div>

          <div className="space-y-4">

            {ingredientStock.map((item) => (
              <div
                key={item.name}
                className="rounded-3xl border border-white/[0.05] bg-black/20 p-5"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-2xl font-extralight">
                      {item.name}
                    </p>

                    <p className="mt-2 text-white/50">
                      {t("inventory.ingredients.usage")}: {item.usage}
                    </p>

                  </div>

                  <div className="text-right">

                    <div className="text-3xl font-extralight text-green-400">
                      {item.stock}
                    </div>

                    <div className="mt-2 text-sm text-white/40">
                      {item.status}
                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

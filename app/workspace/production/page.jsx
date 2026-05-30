"use client";

import { useTranslation } from "@/app/providers/I18nProvider";

export default function ProductionPage() {

  const { t } = useTranslation();

  const batchProduction = [
    {
      name: t("production.batch.wagyu"),
      produced: "120",
      remaining: "42",
      status: t("production.status.active"),
    },
    {
      name: t("production.batch.buns"),
      produced: "200",
      remaining: "68",
      status: t("production.status.good"),
    },
    {
      name: t("production.batch.sauce"),
      produced: "18L",
      remaining: "12L",
      status: t("production.status.low"),
    },
  ];

  const liveConsumption = [
    {
      ingredient: t("production.ingredients.tomatoes"),
      impact: "-42g",
      source: t("production.consumption.burger"),
    },
    {
      ingredient: t("production.ingredients.potatoes"),
      impact: "-180g",
      source: t("production.consumption.fries"),
    },
    {
      ingredient: t("production.ingredients.lettuce"),
      impact: "-28g",
      source: t("production.consumption.assembly"),
    },
  ];

  return (
    <div className="space-y-6">

      <div className="rounded-[32px] border border-orange-500/10 bg-gradient-to-br from-[#1A1105] to-[#050816] p-6 xl:p-10">

        <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">

          <div>

            <p className="mb-3 text-xs tracking-[0.3em] text-[#D6A66A]">
              {t("production.hero.badge")}
            </p>

            <h1 className="text-3xl font-extralight tracking-[-0.05em] xl:text-7xl">
              {t("production.hero.title")}
            </h1>

            <p className="mt-4 max-w-3xl text-white/50">
              {t("production.hero.description")}
            </p>

          </div>

          <div className="rounded-3xl border border-green-500/20 bg-green-500/10 px-6 py-5">

            <div className="text-sm text-green-300">
              {t("production.hero.statusLabel")}
            </div>

            <div className="mt-2 text-3xl font-extralight text-white">
              {t("production.hero.status")}
            </div>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">

        <div className="rounded-[32px] border border-cyan-500/10 bg-cyan-500/5 p-6">

          <div className="mb-6 flex items-center justify-between">

            <div>

              <p className="mb-2 text-xs tracking-[0.24em] text-[#D6A66A]">
                {t("production.sections.batch.badge")}
              </p>

              <h2 className="text-4xl font-extralight">
                {t("production.sections.batch.title")}
              </h2>

            </div>

            <div className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
              {t("production.status.live")}
            </div>

          </div>

          <div className="space-y-4">

            {batchProduction.map((item) => (
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
                      {t("production.sections.batch.produced")}: {item.produced}
                    </p>

                  </div>

                  <div className="text-right">

                    <div className="text-3xl font-extralight text-cyan-300">
                      {item.remaining}
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
                {t("production.sections.consumption.badge")}
              </p>

              <h2 className="text-4xl font-extralight">
                {t("production.sections.consumption.title")}
              </h2>

            </div>

            <div className="rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-300">
              {t("production.status.live")}
            </div>

          </div>

          <div className="space-y-4">

            {liveConsumption.map((item) => (
              <div
                key={item.ingredient}
                className="rounded-3xl border border-white/[0.05] bg-black/20 p-5"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-2xl font-extralight">
                      {item.ingredient}
                    </p>

                    <p className="mt-2 text-white/50">
                      {item.source}
                    </p>

                  </div>

                  <div className="text-right">

                    <div className="text-3xl font-extralight text-green-400">
                      {item.impact}
                    </div>

                    <div className="mt-2 text-sm text-white/40">
                      {t("production.status.live")} DEDUCTION
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

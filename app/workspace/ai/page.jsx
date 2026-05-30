"use client";

import { useTranslation } from "@/app/providers/I18nProvider";




export default function AIPage() {

  const { t } = useTranslation();

  const signals = [
    {
      title: t("ai.signals.inventory.title"),
      description: t("ai.signals.inventory.description"),
      recommendation: t("ai.signals.inventory.recommendation"),
      color: "red",
    },
    {
      title: t("ai.signals.fryer.title"),
      description: t("ai.signals.fryer.description"),
      recommendation: t("ai.signals.fryer.recommendation"),
      color: "amber",
    },
    {
      title: t("ai.signals.profit.title"),
      description: t("ai.signals.profit.description"),
      recommendation: t("ai.signals.profit.recommendation"),
      color: "green",
    },
  ];

  

  const commands = [
    t("ai.commands.staffing"),
    t("ai.commands.forecast"),
    t("ai.commands.inventory"),
    t("ai.commands.payroll"),
    t("ai.commands.marketing"),
  ];

  

  

  return (
    <div className="space-y-6">

      <div className="rounded-[32px] border border-purple-500/10 bg-gradient-to-br from-[#14091F] to-[#050816] p-6 xl:p-10">

        <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">

          <div>

            <p className="mb-3 text-xs tracking-[0.3em] text-[#D6A66A]">
              {t("ai.hero.badge")}
            </p>

            <h1 className="text-3xl font-extralight tracking-[-0.05em] xl:text-7xl">
              {t("ai.hero.title")}
            </h1>

            <p className="mt-4 max-w-3xl text-white/50">
              {t("ai.hero.description")}
            </p>

          </div>

          <div className="rounded-3xl border border-purple-500/20 bg-purple-500/10 px-6 py-5">

            <div className="text-sm text-purple-300">
              {t("ai.hero.statusLabel")}
            </div>

            <div className="mt-2 text-3xl font-extralight text-white">
              {t("ai.status.learning")}
            </div>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-4">

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("ai.cards.predictions.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-purple-400">
            {t("ai.metrics.predictions")}
          </div>

          <p className="mt-3 text-sm text-purple-300">
            {t("ai.cards.predictions.description")}
          </p>

        </div>

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("ai.cards.accuracy.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-green-400">
            {t("ai.metrics.accuracy")}
          </div>

          <p className="mt-3 text-sm text-green-300">
            {t("ai.cards.accuracy.description")}
          </p>

        </div>

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("ai.cards.procurement.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-amber-300">
            {t("ai.metrics.procurement")}
          </div>

          <p className="mt-3 text-sm text-amber-300">
            {t("ai.cards.procurement.description")}
          </p>

        </div>

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("ai.cards.waste.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-emerald-400">
            {t("ai.metrics.waste")}
          </div>

          <p className="mt-3 text-sm text-emerald-300">
            {t("ai.cards.waste.description")}
          </p>

        </div>

      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">

        <div className="rounded-[32px] border border-white/[0.05] bg-white/[0.03] p-6">

          <div className="mb-6 flex items-center justify-between">

            <div>

              <p className="mb-2 text-xs tracking-[0.24em] text-[#D6A66A]">
                {t("ai.runtime.badge")}
              </p>

              <h2 className="text-4xl font-extralight">
                {t("ai.runtime.title")}
              </h2>

            </div>

            <div className="rounded-full bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
              {t("ai.status.live")}
            </div>

          </div>

          
<div className="space-y-4">

            {signals.map((signal) => (
              <div
                key={signal.title}
                className={`rounded-3xl p-5 ${
                  signal.color === "red"
                    ? "border border-red-500/20 bg-red-500/10"
                    : signal.color === "amber"
                    ? "border border-amber-500/20 bg-amber-500/10"
                    : "border border-green-500/20 bg-green-500/10"
                }`}
              >

                <p className="text-2xl font-extralight">
                  {signal.title}
                </p>

                <p className="mt-3 text-white/70">
                  {signal.description}
                </p>

                <div
                  className={`mt-5 rounded-2xl bg-black/20 p-4 text-sm ${
                    signal.color === "red"
                      ? "text-red-300"
                      : signal.color === "amber"
                      ? "text-amber-300"
                      : "text-green-300"
                  }`}
                >
                  {signal.recommendation}
                </div>

              </div>
            ))}

          </div>

        </div>

        <div className="rounded-[32px] border border-white/[0.05] bg-white/[0.03] p-6">

          <div className="mb-6 flex items-center justify-between">

            <div>

              <p className="mb-2 text-xs tracking-[0.24em] text-[#D6A66A]">
                {t("ai.learning.badge")}
              </p>

              <h2 className="text-4xl font-extralight">
                {t("ai.learning.title")}
              </h2>

            </div>

            <div className="rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-300">
              LEARNING
            </div>

          </div>

          <div className="space-y-4">

            <div className="rounded-3xl border border-white/[0.05] bg-black/20 p-5">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-2xl font-extralight">
                    {t("ai.learning.customer.title")}
                  </p>

                  <p className="mt-2 text-white/50">
                    {t("ai.learning.customer.description")}
                  </p>

                </div>

                <div className="text-3xl font-extralight text-purple-300">
                  {t("ai.metrics.behavior")}
                </div>

              </div>

            </div>

            <div className="rounded-3xl border border-white/[0.05] bg-black/20 p-5">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-2xl font-extralight">
                    {t("ai.learning.signals.title")}
                  </p>

                  <p className="mt-2 text-white/50">
                    {t("ai.learning.signals.description")}
                  </p>

                </div>

                <div className="text-3xl font-extralight text-green-400">
                  {t("ai.status.live")}
                </div>

              </div>

            </div>

            <div className="rounded-3xl border border-white/[0.05] bg-black/20 p-5">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-2xl font-extralight">
                    {t("ai.learning.forecast.title")}
                  </p>

                  <p className="mt-2 text-white/50">
                    {t("ai.learning.forecast.description")}
                  </p>

                </div>

                <div className="text-3xl font-extralight text-amber-300">
                  {t("ai.metrics.forecast")}
                </div>

              </div>

            </div>

            <div className="rounded-3xl border border-purple-500/20 bg-purple-500/10 p-5">

              <p className="text-2xl font-extralight">
                {t("ai.learning.autonomous.title")}
              </p>

              <p className="mt-3 text-white/70">
                {t("ai.learning.autonomous.description")}
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

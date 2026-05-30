"use client";

import { useTranslation } from "@/app/providers/I18nProvider";

export default function DashboardPage() {

  const { t } = useTranslation();

  return (
    <div className="space-y-6">

      <div className="rounded-[32px] border border-white/[0.06] bg-gradient-to-br from-[#12091F] to-[#050816] p-6 xl:p-10">

        <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">

          <div>

            <p className="mb-3 text-xs tracking-[0.3em] text-[#D6A66A]">
              {t("dashboard.hero.badge")}
            </p>

            <h1 className="text-3xl font-extralight tracking-[-0.05em] xl:text-7xl">
              {t("dashboard.hero.title")}
            </h1>

            <p className="mt-4 max-w-2xl text-white/50">
              {t("dashboard.hero.description")}
            </p>

          </div>

          <div className="rounded-3xl border border-green-500/20 bg-green-500/10 px-6 py-5">

            <div className="text-sm text-green-300">
              {t("dashboard.hero.statusLabel")}
            </div>

            <div className="mt-2 text-3xl font-extralight text-white">
              {t("dashboard.hero.status")}
            </div>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-4">

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("dashboard.cards.revenue.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-green-400">
            ฿428K
          </div>

          <p className="mt-3 text-sm text-green-300">
            {t("dashboard.cards.revenue.description")}
          </p>

        </div>

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("dashboard.cards.profit.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-emerald-400">
            ฿201K
          </div>

          <p className="mt-3 text-sm text-emerald-300">
            {t("dashboard.cards.profit.description")}
          </p>

        </div>

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("dashboard.cards.kitchen.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-amber-300">
            92%
          </div>

          <p className="mt-3 text-sm text-amber-300">
            {t("dashboard.cards.kitchen.description")}
          </p>

        </div>

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("dashboard.cards.forecast.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-purple-400">
            HIGH
          </div>

          <p className="mt-3 text-sm text-purple-300">
            {t("dashboard.cards.forecast.description")}
          </p>

        </div>

      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">

        <div className="rounded-[32px] border border-white/[0.05] bg-white/[0.03] p-6">

          <div className="mb-6 flex items-center justify-between">

            <div>

              <p className="mb-2 text-xs tracking-[0.24em] text-[#D6A66A]">
                {t("dashboard.locations.badge")}
              </p>

              <h2 className="text-4xl font-extralight">
                {t("dashboard.locations.title")}
              </h2>

            </div>

            <div className="rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-300">
              {t("dashboard.status.live")}
            </div>

          </div>

          <div className="space-y-4">

            <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-5">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-2xl font-extralight">
                    Churchill
                  </p>

                  <p className="mt-2 text-white/50">
                    {t("dashboard.locations.churchill")}
                  </p>

                </div>

                <div className="text-right">

                  <div className="text-3xl font-extralight text-green-400">
                    ฿182K
                  </div>

                  <div className="text-sm text-white/40">
                    {t("dashboard.locations.today")}
                  </div>

                </div>

              </div>

            </div>

            <div className="rounded-3xl border border-purple-500/20 bg-purple-500/10 p-5">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-2xl font-extralight">
                    Mongos
                  </p>

                  <p className="mt-2 text-white/50">
                    {t("dashboard.locations.mongos")}
                  </p>

                </div>

                <div className="text-right">

                  <div className="text-3xl font-extralight text-purple-300">
                    ฿96K
                  </div>

                  <div className="text-sm text-white/40">
                    {t("dashboard.locations.today")}
                  </div>

                </div>

              </div>

            </div>

            <div className="rounded-3xl border border-amber-500/20 bg-amber-500/10 p-5">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-2xl font-extralight">
                    Yona
                  </p>

                  <p className="mt-2 text-white/50">
                    {t("dashboard.locations.yona")}
                  </p>

                </div>

                <div className="text-right">

                  <div className="text-3xl font-extralight text-amber-300">
                    ฿150K
                  </div>

                  <div className="text-sm text-white/40">
                    {t("dashboard.locations.today")}
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        <div className="rounded-[32px] border border-white/[0.05] bg-white/[0.03] p-6">

          <div className="mb-6 flex items-center justify-between">

            <div>

              <p className="mb-2 text-xs tracking-[0.24em] text-[#D6A66A]">
                {t("dashboard.ai.badge")}
              </p>

              <h2 className="text-4xl font-extralight">
                {t("dashboard.ai.title")}
              </h2>

            </div>

            <div className="rounded-full bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
              {t("dashboard.ai.active")}
            </div>

          </div>

          <div className="space-y-4">

            <div className="rounded-3xl border border-red-500/20 bg-red-500/10 p-5">

              <p className="text-xl font-extralight">
                {t("dashboard.ai.tomato.title")}
              </p>

              <p className="mt-3 text-white/70">
                {t("dashboard.ai.tomato.description")}
              </p>

            </div>

            <div className="rounded-3xl border border-amber-500/20 bg-amber-500/10 p-5">

              <p className="text-xl font-extralight">
                {t("dashboard.ai.fryer.title")}
              </p>

              <p className="mt-3 text-white/70">
                {t("dashboard.ai.fryer.description")}
              </p>

            </div>

            <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-5">

              <p className="text-xl font-extralight">
                {t("dashboard.ai.profit.title")}
              </p>

              <p className="mt-3 text-white/70">
                {t("dashboard.ai.profit.description")}
              </p>

            </div>

            <div className="rounded-3xl border border-purple-500/20 bg-purple-500/10 p-5">

              <p className="text-xl font-extralight">
                {t("dashboard.ai.procurement.title")}
              </p>

              <p className="mt-3 text-white/70">
                {t("dashboard.ai.procurement.description")}
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

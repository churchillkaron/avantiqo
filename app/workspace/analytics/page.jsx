"use client";

import { useTranslation } from "@/app/providers/I18nProvider";

export default function AnalyticsPage() {

  const { t } = useTranslation();

  return (
    <div className="space-y-6">

      <div className="rounded-[32px] border border-cyan-500/10 bg-gradient-to-br from-[#07111F] to-[#050816] p-6 xl:p-10">

        <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">

          <div>

            <p className="mb-3 text-xs tracking-[0.3em] text-[#D6A66A]">
              {t("analytics.hero.badge")}
            </p>

            <h1 className="text-3xl font-extralight tracking-[-0.05em] xl:text-7xl">
              {t("analytics.hero.title")}
            </h1>

            <p className="mt-4 max-w-3xl text-white/50">
              {t("analytics.hero.description")}
            </p>

          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 px-6 py-5">

            <div className="text-sm text-cyan-300">
              {t("analytics.hero.statusLabel")}
            </div>

            <div className="mt-2 text-3xl font-extralight text-white">
              {t("analytics.status.processing")}
            </div>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-4">

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("analytics.cards.orders.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-cyan-300">
            12.4K
          </div>

          <p className="mt-3 text-sm text-cyan-300">
            {t("analytics.cards.orders.description")}
          </p>

        </div>

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("analytics.cards.profitability.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-green-400">
            96%
          </div>

          <p className="mt-3 text-sm text-green-300">
            {t("analytics.cards.profitability.description")}
          </p>

        </div>

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("analytics.cards.production.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-amber-300">
            89%
          </div>

          <p className="mt-3 text-sm text-amber-300">
            {t("analytics.cards.production.description")}
          </p>

        </div>

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("analytics.cards.signals.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-purple-400">
            {t("analytics.status.live")}
          </div>

          <p className="mt-3 text-sm text-purple-300">
            {t("analytics.cards.signals.description")}
          </p>

        </div>

      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">

        <div className="rounded-[32px] border border-white/[0.05] bg-white/[0.03] p-6">

          <div className="mb-6 flex items-center justify-between">

            <div>

              <p className="mb-2 text-xs tracking-[0.24em] text-[#D6A66A]">
                {t("analytics.performance.badge")}
              </p>

              <h2 className="text-4xl font-extralight">
                {t("analytics.performance.title")}
              </h2>

            </div>

            <div className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
              {t("analytics.status.live")}
            </div>

          </div>

          <div className="space-y-4">

            <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-5">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-2xl font-extralight">
                    {t("analytics.performance.dish.title")}
                  </p>

                  <p className="mt-2 text-white/50">
                    {t("analytics.performance.dish.description")}
                  </p>

                </div>

                <div className="text-right">

                  <div className="text-3xl font-extralight text-green-400">
                    Wagyu
                  </div>

                  <div className="text-sm text-white/40">
                    +18%
                  </div>

                </div>

              </div>

            </div>

            <div className="rounded-3xl border border-amber-500/20 bg-amber-500/10 p-5">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-2xl font-extralight">
                    {t("analytics.performance.kitchen.title")}
                  </p>

                  <p className="mt-2 text-white/50">
                    {t("analytics.performance.kitchen.description")}
                  </p>

                </div>

                <div className="text-right">

                  <div className="text-3xl font-extralight text-amber-300">
                    7.2m
                  </div>

                  <div className="text-sm text-white/40">
                    {t("analytics.performance.kitchen.metric")}
                  </div>

                </div>

              </div>

            </div>

            <div className="rounded-3xl border border-purple-500/20 bg-purple-500/10 p-5">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-2xl font-extralight">
                    {t("analytics.performance.procurement.title")}
                  </p>

                  <p className="mt-2 text-white/50">
                    {t("analytics.performance.procurement.description")}
                  </p>

                </div>

                <div className="text-right">

                  <div className="text-3xl font-extralight text-purple-300">
                    ฿42K
                  </div>

                  <div className="text-sm text-white/40">
                    {t("analytics.performance.procurement.metric")}
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
                {t("analytics.status.live")} ANALYTICS FEED
              </p>

              <h2 className="text-4xl font-extralight">
                {t("analytics.feed.title")}
              </h2>

            </div>

            <div className="rounded-full bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
              {t("analytics.status.streaming")}
            </div>

          </div>

          <div className="space-y-4">

            <div className="rounded-3xl border border-white/[0.05] bg-black/20 p-5">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-xl font-extralight">
                    {t("analytics.feed.profit.title")}
                  </p>

                  <p className="mt-2 text-white/50">
                    {t("analytics.feed.profit.description")}
                  </p>

                </div>

                <div className="text-green-400">
                  +18%
                </div>

              </div>

            </div>

            <div className="rounded-3xl border border-red-500/20 bg-red-500/10 p-5">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-xl font-extralight">
                    {t("analytics.feed.inventory.title")}
                  </p>

                  <p className="mt-2 text-white/50">
                    {t("analytics.feed.inventory.description")}
                  </p>

                </div>

                <div className="text-red-300">
                  {t("analytics.status.alert")}
                </div>

              </div>

            </div>

            <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-5">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-xl font-extralight">
                    {t("analytics.feed.labor.title")}
                  </p>

                  <p className="mt-2 text-white/50">
                    {t("analytics.feed.labor.description")}
                  </p>

                </div>

                <div className="text-cyan-300">
                  {t("analytics.status.stable")}
                </div>

              </div>

            </div>

            <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-5">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-xl font-extralight">
                    {t("analytics.feed.ai.title")}
                  </p>

                  <p className="mt-2 text-white/50">
                    {t("analytics.feed.ai.description")}
                  </p>

                </div>

                <div className="text-green-300">
                  {t("analytics.status.updated")}
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

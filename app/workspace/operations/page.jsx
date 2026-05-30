"use client";

import { useTranslation } from "@/app/providers/I18nProvider";

export default function OperationsPage() {

  const { t } = useTranslation();

  const flows = [
    {
      title: t("operations.flows.posKitchen.title"),
      description: t("operations.flows.posKitchen.description"),
      status: t("operations.status.active"),
      color: "cyan",
    },
    {
      title: t("operations.flows.kitchenExpo.title"),
      description: t("operations.flows.kitchenExpo.description"),
      status: t("operations.status.synced"),
      color: "amber",
    },
    {
      title: t("operations.flows.expoTables.title"),
      description: t("operations.flows.expoTables.description"),
      status: t("operations.status.live"),
      color: "green",
    },
    {
      title: t("operations.flows.tablesPayment.title"),
      description: t("operations.flows.tablesPayment.description"),
      status: t("operations.status.processing"),
      color: "purple",
    },
  ];

  const alerts = [
    t("operations.alerts.inventory"),
    t("operations.alerts.wagyu"),
    t("operations.alerts.fryer"),
    t("operations.alerts.invoice"),
  ];

  return (
    <div className="space-y-6">

      <div className="rounded-[32px] border border-white/[0.06] bg-gradient-to-br from-[#12091F] to-[#050816] p-6 xl:p-10">

        <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">

          <div>

            <p className="mb-3 text-xs tracking-[0.3em] text-[#D6A66A]">
              {t("operations.hero.badge")}
            </p>

            <h1 className="text-3xl font-extralight tracking-[-0.05em] xl:text-7xl">
              {t("operations.hero.title")}
            </h1>

            <p className="mt-4 max-w-3xl text-white/50">
              {t("operations.hero.description")}
            </p>

          </div>

          <div className="rounded-3xl border border-green-500/20 bg-green-500/10 px-6 py-5">

            <div className="text-sm text-green-300">
              {t("operations.hero.statusLabel")}
            </div>

            <div className="mt-2 text-3xl font-extralight text-white">
              {t("operations.status.synchronized")}
            </div>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-5">

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("operations.cards.orders.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-cyan-300">
            42
          </div>

          <p className="mt-3 text-sm text-cyan-300">
            {t("operations.cards.orders.description")}
          </p>

        </div>

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("operations.cards.kitchen.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-amber-300">
            84%
          </div>

          <p className="mt-3 text-sm text-amber-300">
            {t("operations.cards.kitchen.description")}
          </p>

        </div>

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("operations.cards.inventory.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-green-400">
            GOOD
          </div>

          <p className="mt-3 text-sm text-green-300">
            {t("operations.cards.inventory.description")}
          </p>

        </div>

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("operations.cards.procurement.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-purple-300">
            {t("operations.status.live")}
          </div>

          <p className="mt-3 text-sm text-purple-300">
            {t("operations.cards.procurement.description")}
          </p>

        </div>

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("operations.cards.profit.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-emerald-400">
            ฿201K
          </div>

          <p className="mt-3 text-sm text-emerald-300">
            {t("operations.cards.profit.description")}
          </p>

        </div>

      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">

        <div className="rounded-[32px] border border-white/[0.05] bg-white/[0.03] p-6">

          <div className="mb-6 flex items-center justify-between">

            <div>

              <p className="mb-2 text-xs tracking-[0.24em] text-[#D6A66A]">
                {t("operations.runtime.badge")}
              </p>

              <h2 className="text-4xl font-extralight">
                {t("operations.runtime.title")}
              </h2>

            </div>

            <div className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
              {t("operations.status.live")}
            </div>

          </div>

          <div className="space-y-4">

            {flows.map((flow) => (
              <div
                key={flow.title}
                className="rounded-3xl border border-white/[0.05] bg-black/20 p-5"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-2xl font-extralight">
                      {flow.title}
                    </p>

                    <p className="mt-2 text-white/50">
                      {flow.description}
                    </p>

                  </div>

                  <div
                    className={`rounded-full px-4 py-2 text-sm ${
                      flow.color === "cyan"
                        ? "bg-cyan-500/10 text-cyan-300"
                        : flow.color === "amber"
                        ? "bg-amber-500/10 text-amber-300"
                        : flow.color === "green"
                        ? "bg-green-500/10 text-green-300"
                        : "bg-purple-500/10 text-purple-300"
                    }`}
                  >
                    {flow.status}
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

        <div className="rounded-[32px] border border-white/[0.05] bg-white/[0.03] p-6">

          <div className="mb-6 flex items-center justify-between">

            <div>

              <p className="mb-2 text-xs tracking-[0.24em] text-[#D6A66A]">
                {t("operations.ai.badge")}
              </p>

              <h2 className="text-4xl font-extralight">
                {t("operations.ai.title")}
              </h2>

            </div>

            <div className="rounded-full bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
              {t("operations.status.aiActive")}
            </div>

          </div>

          <div className="space-y-4">

            {alerts.map((alert) => (
              <div
                key={alert}
                className="rounded-3xl border border-purple-500/20 bg-purple-500/10 p-5"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-xl font-extralight">
                      {alert}
                    </p>

                    <p className="mt-2 text-white/50">
                      {t("operations.ai.description")}
                    </p>

                  </div>

                  <div className="rounded-full bg-black/20 px-3 py-1 text-xs text-purple-300">
                    {t("operations.status.live")}
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

      <div className="rounded-[32px] border border-green-500/20 bg-green-500/10 p-6 xl:p-8">

        <div className="mb-8 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">

          <div>

            <p className="mb-2 text-xs tracking-[0.24em] text-[#D6A66A]">
              {t("operations.sync.badge")}
            </p>

            <h2 className="text-4xl font-extralight">
              {t("operations.sync.title")}
            </h2>

          </div>

          <div className="rounded-full bg-black/20 px-5 py-3 text-sm text-green-300">
            {t("operations.status.connected")}
          </div>

        </div>

        <div className="grid grid-cols-1 gap-5 xl:grid-cols-4">

          <div className="rounded-3xl bg-black/20 p-5">

            <p className="text-xl font-extralight">
              {t("operations.modules.production.title")}
            </p>

            <p className="mt-3 text-white/50">
              {t("operations.modules.production.description")}
            </p>

          </div>

          <div className="rounded-3xl bg-black/20 p-5">

            <p className="text-xl font-extralight">
              {t("operations.modules.inventory.title")}
            </p>

            <p className="mt-3 text-white/50">
              {t("operations.modules.inventory.description")}
            </p>

          </div>

          <div className="rounded-3xl bg-black/20 p-5">

            <p className="text-xl font-extralight">
              {t("operations.modules.procurement.title")}
            </p>

            <p className="mt-3 text-white/50">
              {t("operations.modules.procurement.description")}
            </p>

          </div>

          <div className="rounded-3xl bg-black/20 p-5">

            <p className="text-xl font-extralight">
              {t("operations.modules.accounting.title")}
            </p>

            <p className="mt-3 text-white/50">
              {t("operations.modules.accounting.description")}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

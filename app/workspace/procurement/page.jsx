"use client";

import { useTranslation } from "@/app/providers/I18nProvider";

export default function ProcurementPage() {

  const { t } = useTranslation();

  const purchaseOrders = [
    {
      supplier: t("procurement.suppliers.farm"),
      item: t("procurement.items.tomatoes"),
      status: t("procurement.status.delivered"),
      amount: "฿4,800",
    },
    {
      supplier: t("procurement.suppliers.wagyu"),
      item: t("procurement.items.wagyu"),
      status: t("procurement.status.transit"),
      amount: "฿18,200",
    },
    {
      supplier: t("procurement.suppliers.ocean"),
      item: t("procurement.items.wine"),
      status: t("procurement.status.approval"),
      amount: "฿12,400",
    },
  ];

  const invoiceFlow = [
    {
      step: t("procurement.flow.upload"),
      status: t("procurement.status.complete"),
    },
    {
      step: t("procurement.flow.ocr"),
      status: t("procurement.status.complete"),
    },
    {
      step: t("procurement.flow.inventory"),
      status: t("procurement.status.active"),
    },
    {
      step: t("procurement.flow.accounting"),
      status: t("procurement.status.processing"),
    },
  ];

  return (
    <div className="space-y-6">

      <div className="rounded-[32px] border border-cyan-500/10 bg-gradient-to-br from-[#07111F] to-[#050816] p-6 xl:p-10">

        <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">

          <div>

            <p className="mb-3 text-xs tracking-[0.3em] text-[#D6A66A]">
              {t("procurement.hero.badge")}
            </p>

            <h1 className="text-3xl font-extralight tracking-[-0.05em] xl:text-7xl">
              {t("procurement.hero.title")}
            </h1>

            <p className="mt-4 max-w-3xl text-white/50">
              {t("procurement.hero.description")}
            </p>

          </div>

          <div className="rounded-3xl border border-green-500/20 bg-green-500/10 px-6 py-5">

            <div className="text-sm text-green-300">
              {t("procurement.hero.statusLabel")}
            </div>

            <div className="mt-2 text-3xl font-extralight text-white">
              {t("procurement.hero.status")}
            </div>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-4">

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("procurement.cards.orders.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-cyan-300">
            18
          </div>

          <p className="mt-3 text-sm text-cyan-300">
            {t("procurement.cards.orders.description")}
          </p>

        </div>

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("procurement.cards.deliveries.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-green-400">
            12
          </div>

          <p className="mt-3 text-sm text-green-300">
            {t("procurement.cards.deliveries.description")}
          </p>

        </div>

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("procurement.cards.invoice.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-purple-300">
            AI
          </div>

          <p className="mt-3 text-sm text-purple-300">
            {t("procurement.cards.invoice.description")}
          </p>

        </div>

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("procurement.cards.suppliers.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-amber-300">
            {t("procurement.status.live")}
          </div>

          <p className="mt-3 text-sm text-amber-300">
            {t("procurement.cards.suppliers.description")}
          </p>

        </div>

      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">

        <div className="rounded-[32px] border border-cyan-500/10 bg-cyan-500/5 p-6">

          <div className="mb-6 flex items-center justify-between">

            <div>

              <p className="mb-2 text-xs tracking-[0.24em] text-[#D6A66A]">
                {t("procurement.sections.procurement.badge")}
              </p>

              <h2 className="text-4xl font-extralight">
                {t("procurement.sections.procurement.title")}
              </h2>

            </div>

            <div className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
              {t("procurement.status.live")}
            </div>

          </div>

          <div className="space-y-4">

            {purchaseOrders.map((order) => (
              <div
                key={order.supplier}
                className="rounded-3xl border border-white/[0.05] bg-black/20 p-5"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-2xl font-extralight">
                      {order.supplier}
                    </p>

                    <p className="mt-2 text-white/50">
                      {order.item}
                    </p>

                  </div>

                  <div className="text-right">

                    <div className="text-2xl font-extralight text-green-400">
                      {order.amount}
                    </div>

                    <div className="mt-2 text-sm text-white/40">
                      {order.status}
                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

        <div className="rounded-[32px] border border-purple-500/10 bg-purple-500/5 p-6">

          <div className="mb-6 flex items-center justify-between">

            <div>

              <p className="mb-2 text-xs tracking-[0.24em] text-[#D6A66A]">
                {t("procurement.sections.invoice.badge")}
              </p>

              <h2 className="text-4xl font-extralight">
                {t("procurement.sections.invoice.title")}
              </h2>

            </div>

            <div className="rounded-full bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
              AI {t("procurement.hero.status")}
            </div>

          </div>

          <div className="space-y-4">

            {invoiceFlow.map((step) => (
              <div
                key={step.step}
                className="rounded-3xl border border-white/[0.05] bg-black/20 p-5"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-2xl font-extralight">
                      {step.step}
                    </p>

                    <p className="mt-2 text-white/50">
                      {t("procurement.sections.invoice.description")}
                    </p>

                  </div>

                  <div className="rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-300">
                    {step.status}
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

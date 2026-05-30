"use client";

import { useTranslation } from "@/app/providers/I18nProvider";

export default function FinancePage() {

  const { t } = useTranslation();

  const financeCards = [
    {
      title: t("finance.cards.revenue.title"),
      value: "฿428K",
      color: "green",
    },
    {
      title: t("finance.cards.profit.title"),
      value: "฿201K",
      color: "cyan",
    },
    {
      title: t("finance.cards.labor.title"),
      value: "18%",
      color: "amber",
    },
    {
      title: t("finance.cards.food.title"),
      value: "26%",
      color: "purple",
    },
  ];

  const transactions = [
    {
      title: t("finance.transactions.sales.title"),
      amount: "+฿42,800",
      status: t("finance.status.live"),
    },
    {
      title: t("finance.transactions.invoice.title"),
      amount: "-฿18,200",
      status: t("finance.status.synced"),
    },
    {
      title: t("finance.transactions.payroll.title"),
      amount: "-฿42,000",
      status: t("finance.status.processing"),
    },
  ];

  return (
    <div className="space-y-6">

      <div className="rounded-[32px] border border-emerald-500/10 bg-gradient-to-br from-[#07140D] to-[#050816] p-6 xl:p-10">

        <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">

          <div>

            <p className="mb-3 text-xs tracking-[0.3em] text-[#D6A66A]">
              {t("finance.hero.badge")}
            </p>

            <h1 className="text-3xl font-extralight tracking-[-0.05em] xl:text-7xl">
              {t("finance.hero.title")}
            </h1>

            <p className="mt-4 max-w-3xl text-white/50">
              {t("finance.hero.description")}
            </p>

          </div>

          <div className="rounded-3xl border border-green-500/20 bg-green-500/10 px-6 py-5">

            <div className="text-sm text-green-300">
              {t("finance.hero.statusLabel")}
            </div>

            <div className="mt-2 text-3xl font-extralight text-white">
              {t("finance.hero.status")}
            </div>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-4">

        {financeCards.map((card) => (
          <div
            key={card.title}
            className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6"
          >

            <p className="text-sm text-white/40">
              {card.title}
            </p>

            <div
              className={`mt-4 text-5xl font-extralight ${
                card.color === "green"
                  ? "text-green-400"
                  : card.color === "cyan"
                  ? "text-cyan-300"
                  : card.color === "amber"
                  ? "text-amber-300"
                  : "text-purple-300"
              }`}
            >
              {card.value}
            </div>

            <p className="mt-3 text-sm text-white/40">
              {t("finance.cards.runtime")}
            </p>

          </div>
        ))}

      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">

        <div className="rounded-[32px] border border-green-500/10 bg-green-500/5 p-6">

          <div className="mb-6 flex items-center justify-between">

            <div>

              <p className="mb-2 text-xs tracking-[0.24em] text-[#D6A66A]">
                {t("finance.transactions.badge")}
              </p>

              <h2 className="text-4xl font-extralight">
                {t("finance.transactions.title")}
              </h2>

            </div>

            <div className="rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-300">
              {t("finance.status.live")}
            </div>

          </div>

          <div className="space-y-4">

            {transactions.map((tx) => (
              <div
                key={tx.title}
                className="rounded-3xl border border-white/[0.05] bg-black/20 p-5"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-2xl font-extralight">
                      {tx.title}
                    </p>

                    <p className="mt-2 text-white/50">
                      {t("finance.transactions.description")}
                    </p>

                  </div>

                  <div className="text-right">

                    <div className="text-2xl font-extralight text-green-400">
                      {tx.amount}
                    </div>

                    <div className="mt-2 text-sm text-white/40">
                      {tx.status}
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
                {t("finance.ai.badge")}
              </p>

              <h2 className="text-4xl font-extralight">
                {t("finance.ai.title")}
              </h2>

            </div>

            <div className="rounded-full bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
              {t("finance.ai.active")}
            </div>

          </div>

          <div className="space-y-4">

            <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-5">

              <p className="text-2xl font-extralight">
                {t("finance.ai.insights.margin.title")}
              </p>

              <p className="mt-3 text-white/50">
                {t("finance.ai.insights.margin.description")}
              </p>

            </div>

            <div className="rounded-3xl border border-amber-500/20 bg-amber-500/10 p-5">

              <p className="text-2xl font-extralight">
                {t("finance.ai.insights.labor.title")}
              </p>

              <p className="mt-3 text-white/50">
                {t("finance.ai.insights.labor.description")}
              </p>

            </div>

            <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-5">

              <p className="text-2xl font-extralight">
                {t("finance.ai.insights.procurement.title")}
              </p>

              <p className="mt-3 text-white/50">
                {t("finance.ai.insights.procurement.description")}
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

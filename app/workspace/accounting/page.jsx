"use client";

import { useTranslation } from "@/app/providers/I18nProvider";

export default function AccountingPage() {

  const { t } = useTranslation();

  const entries = [
    {
      title: t("accounting.entries.items.invoicePosted.title"),
      account: t("accounting.entries.items.invoicePosted.account"),
      amount: "-฿18,200",
      status: t("accounting.status.posted"),
    },
    {
      title: t("accounting.entries.items.revenue.title"),
      account: t("accounting.entries.items.revenue.account"),
      amount: "+฿42,800",
      status: t("accounting.status.synced"),
    },
    {
      title: t("accounting.entries.items.payroll.title"),
      account: t("accounting.entries.items.payroll.account"),
      amount: "-฿42,000",
      status: t("accounting.status.processing"),
    },
  ];

  const approvals = [
    {
      title: t("accounting.approvals.items.ocr.title"),
      status: t("accounting.status.approved"),
    },
    {
      title: t("accounting.approvals.items.match.title"),
      status: t("accounting.status.matched"),
    },
    {
      title: t("accounting.approvals.items.journal.title"),
      status: t("accounting.status.ready"),
    },
  ];

  return (
    <div className="space-y-6">

      <div className="rounded-[32px] border border-cyan-500/10 bg-gradient-to-br from-[#07111F] to-[#050816] p-6 xl:p-10">

        <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">

          <div>

            <p className="mb-3 text-xs tracking-[0.3em] text-[#D6A66A]">
              {t("accounting.hero.badge")}
            </p>

            <h1 className="text-3xl font-extralight tracking-[-0.05em] xl:text-7xl">
              {t("accounting.hero.title")}
            </h1>

            <p className="mt-4 max-w-3xl text-white/50">
              {t("accounting.hero.description")}
            </p>

          </div>

          <div className="rounded-3xl border border-green-500/20 bg-green-500/10 px-6 py-5">

            <div className="text-sm text-green-300">
              {t("accounting.hero.statusLabel")}
            </div>

            <div className="mt-2 text-3xl font-extralight text-white">
              {t("accounting.hero.status")}
            </div>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-4">

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("accounting.metrics.entries.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-cyan-300">
            428
          </div>

          <p className="mt-3 text-sm text-cyan-300">
            {t("accounting.metrics.entries.description")}
          </p>

        </div>

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("accounting.metrics.payables.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-amber-300">
            ฿84K
          </div>

          <p className="mt-3 text-sm text-amber-300">
            {t("accounting.metrics.payables.description")}
          </p>

        </div>

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("accounting.metrics.cashflow.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-green-400">
            {t("accounting.metrics.cashflow.value")}
          </div>

          <p className="mt-3 text-sm text-green-300">
            {t("accounting.metrics.cashflow.description")}
          </p>

        </div>

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("accounting.metrics.audit.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-purple-300">
            {t("accounting.metrics.audit.value")}
          </div>

          <p className="mt-3 text-sm text-purple-300">
            {t("accounting.metrics.audit.description")}
          </p>

        </div>

      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">

        <div className="rounded-[32px] border border-cyan-500/10 bg-cyan-500/5 p-6">

          <div className="mb-6 flex items-center justify-between">

            <div>

              <p className="mb-2 text-xs tracking-[0.24em] text-[#D6A66A]">
                {t("accounting.entries.badge")}
              </p>

              <h2 className="text-4xl font-extralight">
                {t("accounting.entries.title")}
              </h2>

            </div>

            <div className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
              {t("accounting.metrics.audit.value")}
            </div>

          </div>

          <div className="space-y-4">

            {entries.map((entry) => (
              <div
                key={entry.title}
                className="rounded-3xl border border-white/[0.05] bg-black/20 p-5"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-2xl font-extralight">
                      {entry.title}
                    </p>

                    <p className="mt-2 text-white/50">
                      {entry.account}
                    </p>

                  </div>

                  <div className="text-right">

                    <div className="text-2xl font-extralight text-green-400">
                      {entry.amount}
                    </div>

                    <div className="mt-2 text-sm text-white/40">
                      {entry.status}
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
                {t("accounting.approvals.badge")}
              </p>

              <h2 className="text-4xl font-extralight">
                {t("accounting.approvals.title")}
              </h2>

            </div>

            <div className="rounded-full bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
              {t("accounting.approvals.active")}
            </div>

          </div>

          <div className="space-y-4">

            {approvals.map((approval) => (
              <div
                key={approval.title}
                className="rounded-3xl border border-white/[0.05] bg-black/20 p-5"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-2xl font-extralight">
                      {approval.title}
                    </p>

                    <p className="mt-2 text-white/50">
                      {t("accounting.approvals.description")}
                    </p>

                  </div>

                  <div className="rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-300">
                    {approval.status}
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

"use client";

import { useTranslation } from "@/app/providers/I18nProvider";

export default function PayrollPage() {

  const { t } = useTranslation();

  const staff = [
    {
      name: "Alex",
      role: t("payroll.roles.kitchen"),
      performance: "92%",
      payout: "฿28,400",
      status: t("payroll.status.approved"),
    },
    {
      name: "Mia",
      role: t("payroll.roles.service"),
      performance: "88%",
      payout: "฿24,800",
      status: t("payroll.status.pending"),
    },
    {
      name: "Daniel",
      role: t("payroll.roles.bar"),
      performance: "95%",
      payout: "฿31,200",
      status: t("payroll.status.approved"),
    },
  ];

  const payrollFlow = [
    t("payroll.flow.attendance"),
    t("payroll.flow.performance"),
    t("payroll.flow.serviceCharge"),
    t("payroll.flow.approval"),
    t("payroll.flow.accounting"),
  ];

  return (
    <div className="space-y-6">

      <div className="rounded-[32px] border border-amber-500/10 bg-gradient-to-br from-[#1A1205] to-[#050816] p-6 xl:p-10">

        <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">

          <div>

            <p className="mb-3 text-xs tracking-[0.3em] text-[#D6A66A]">
              {t("payroll.hero.badge")}
            </p>

            <h1 className="text-3xl font-extralight tracking-[-0.05em] xl:text-7xl">
              {t("payroll.hero.title")}
            </h1>

            <p className="mt-4 max-w-3xl text-white/50">
              {t("payroll.hero.description")}
            </p>

          </div>

          <div className="rounded-3xl border border-green-500/20 bg-green-500/10 px-6 py-5">

            <div className="text-sm text-green-300">
              {t("payroll.hero.statusLabel")}
            </div>

            <div className="mt-2 text-3xl font-extralight text-white">
              {t("payroll.status.processing")}
            </div>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-4">

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("payroll.cards.staff.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-cyan-300">
            48
          </div>

          <p className="mt-3 text-sm text-cyan-300">
            {t("payroll.cards.staff.description")}
          </p>

        </div>

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("payroll.cards.service.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-green-400">
            ฿128K
          </div>

          <p className="mt-3 text-sm text-green-300">
            {t("payroll.cards.service.description")}
          </p>

        </div>

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("payroll.cards.performance.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-purple-300">
            91%
          </div>

          <p className="mt-3 text-sm text-purple-300">
            {t("payroll.cards.performance.description")}
          </p>

        </div>

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("payroll.cards.approval.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-amber-300">
            {t("payroll.status.live")}
          </div>

          <p className="mt-3 text-sm text-amber-300">
            {t("payroll.cards.approval.description")}
          </p>

        </div>

      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">

        <div className="rounded-[32px] border border-green-500/10 bg-green-500/5 p-6">

          <div className="mb-6 flex items-center justify-between">

            <div>

              <p className="mb-2 text-xs tracking-[0.24em] text-[#D6A66A]">
                {t("payroll.runtime.badge")}
              </p>

              <h2 className="text-4xl font-extralight">
                {t("payroll.cards.staff.title")}
              </h2>

            </div>

            <div className="rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-300">
              {t("payroll.status.live")}
            </div>

          </div>

          <div className="space-y-4">

            {staff.map((person) => (
              <div
                key={person.name}
                className="rounded-3xl border border-white/[0.05] bg-black/20 p-5"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-2xl font-extralight">
                      {person.name}
                    </p>

                    <p className="mt-2 text-white/50">
                      {person.role}
                    </p>

                  </div>

                  <div className="text-right">

                    <div className="text-2xl font-extralight text-green-400">
                      {person.payout}
                    </div>

                    <div className="mt-2 text-sm text-white/40">
                      {person.performance}
                    </div>

                  </div>

                </div>

                <div className="mt-4 rounded-2xl bg-green-500/10 px-4 py-3 text-center text-sm text-green-300">
                  {person.status}
                </div>

              </div>
            ))}

          </div>

        </div>

        <div className="rounded-[32px] border border-purple-500/10 bg-purple-500/5 p-6">

          <div className="mb-6 flex items-center justify-between">

            <div>

              <p className="mb-2 text-xs tracking-[0.24em] text-[#D6A66A]">
                {t("payroll.flowSection.badge")}
              </p>

              <h2 className="text-4xl font-extralight">
                {t("payroll.flowSection.title")}
              </h2>

            </div>

            <div className="rounded-full bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
              {t("payroll.flowSection.active")}
            </div>

          </div>

          <div className="space-y-4">

            {payrollFlow.map((step) => (
              <div
                key={step}
                className="rounded-3xl border border-white/[0.05] bg-black/20 p-5"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-2xl font-extralight">
                      {step}
                    </p>

                    <p className="mt-2 text-white/50">
                      {t("payroll.flowSection.processing")}
                    </p>

                  </div>

                  <div className="rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-300">
                    {t("payroll.status.active")}
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

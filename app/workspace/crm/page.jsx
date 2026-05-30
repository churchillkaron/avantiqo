"use client";

import { useTranslation } from "@/app/providers/I18nProvider";

export default function CRMPage() {

  const { t } = useTranslation();

  const pipeline = [
    {
      stage: t("crm.pipeline.leads"),
      count: 42,
      color: "cyan",
    },
    {
      stage: t("crm.pipeline.vip"),
      count: 18,
      color: "purple",
    },
    {
      stage: t("crm.pipeline.events"),
      count: 7,
      color: "amber",
    },
    {
      stage: t("crm.pipeline.returning"),
      count: 126,
      color: "green",
    },
  ];

  const interactions = [
    {
      customer: "Michael Carter",
      action: t("crm.interactions.vipReservation"),
      value: "฿12,800 forecast",
    },
    {
      customer: "Sophia Lee",
      action: t("crm.interactions.loyaltyOffer"),
      value: "+22% retention probability",
    },
    {
      customer: "Yona Events",
      action: t("crm.interactions.eventProposal"),
      value: "฿180K opportunity",
    },
  ];

  return (
    <div className="space-y-6">

      <div className="overflow-hidden rounded-[40px] border border-white/[0.06] bg-gradient-to-br from-[#0B1020] to-[#050816]">

        <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr]">

          <div className="p-6 xl:p-12">

            <div className="mb-4 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs tracking-[0.24em] text-cyan-300">
              {t("crm.hero.badge")}
            </div>

            <h1 className="text-4xl font-extralight leading-none tracking-[-0.06em] xl:text-8xl">
              {t("crm.hero.title1")}
              <br />
              {t("crm.hero.title2")}
            </h1>

            <p className="mt-6 max-w-2xl text-white/50">
              {t("crm.hero.description")}
            </p>

          </div>

          <div className="border-t border-white/[0.05] bg-black/20 p-6 xl:border-l xl:border-t-0 xl:p-12">

            <div className="text-xs tracking-[0.24em] text-[#D6A66A]">
              {t("crm.value.badge")}
            </div>

            <div className="mt-4 text-6xl font-extralight text-green-400">
              ฿2.4M
            </div>

            <div className="mt-3 text-white/50">
              {t("crm.value.description")}
            </div>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-4">

        {pipeline.map((item) => (
          <div
            key={item.stage}
            className="rounded-[32px] border border-white/[0.05] bg-white/[0.03] p-6"
          >

            <div className="text-sm text-white/40">
              {item.stage}
            </div>

            <div
              className={`mt-4 text-6xl font-extralight ${
                item.color === "cyan"
                  ? "text-cyan-300"
                  : item.color === "purple"
                  ? "text-purple-300"
                  : item.color === "amber"
                  ? "text-amber-300"
                  : "text-green-400"
              }`}
            >
              {item.count}
            </div>

            <div className="mt-4 text-white/40">
              {t("crm.pipeline.description")}
            </div>

          </div>
        ))}

      </div>

      <div className="rounded-[40px] border border-cyan-500/10 bg-cyan-500/5 p-6 xl:p-8">

        <div className="mb-8 flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">

          <div>

            <p className="text-xs tracking-[0.24em] text-[#D6A66A]">
              {t("crm.runtime.badge")}
            </p>

            <h2 className="mt-3 text-5xl font-extralight tracking-[-0.05em]">
              {t("crm.runtime.title")}
            </h2>

          </div>

          <div className="rounded-full bg-cyan-500/10 px-5 py-3 text-sm text-cyan-300">
            {t("crm.status.live")}
          </div>

        </div>

        <div className="space-y-5">

          {interactions.map((item) => (
            <div
              key={item.customer}
              className="rounded-[32px] border border-white/[0.05] bg-black/20 p-6"
            >

              <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">

                <div>

                  <div className="text-3xl font-extralight">
                    {item.customer}
                  </div>

                  <div className="mt-3 text-white/50">
                    {item.action}
                  </div>

                </div>

                <div className="rounded-3xl bg-cyan-500/10 px-6 py-5 text-cyan-300">
                  {item.value}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

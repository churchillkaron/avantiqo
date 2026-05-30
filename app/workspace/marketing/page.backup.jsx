"use client";

import { useTranslation } from "@/app/providers/I18nProvider";



export default function MarketingPage() {

  const { t } = useTranslation();

  const campaigns = [
    {
      name: t("marketing.campaigns.wagyu.name"),
      platform: t("marketing.campaigns.wagyu.platform"),
      status: t("marketing.status.queued"),
      reach: "42K",
    },
    {
      name: t("marketing.campaigns.vip.name"),
      platform: t("marketing.campaigns.vip.platform"),
      status: t("marketing.status.published"),
      reach: "128K",
    },
    {
      name: t("marketing.campaigns.beach.name"),
      platform: t("marketing.campaigns.beach.platform"),
      status: t("marketing.status.optimizing"),
      reach: "340K",
    },
  ];

  const queue = [
    {
      time: "18:00",
      content: t("marketing.queue.cocktail"),
      status: t("marketing.status.ready"),
    },
    {
      time: "19:30",
      content: t("marketing.queue.wagyu"),
      status: t("marketing.status.processing"),
    },
    {
      time: "21:00",
      content: t("marketing.queue.dj"),
      status: t("marketing.status.scheduled"),
    },
  ];

  const campaigns = [
    {
      name: t("marketing.campaigns.wagyu.name"),
      platform: t("marketing.campaigns.wagyu.platform"),
      status: t("marketing.status.queued"),
      reach: "42K",
    },
    {
      name: t("marketing.campaigns.vip.name"),
      platform: t("marketing.campaigns.vip.platform"),
      status: t("marketing.status.published"),
      reach: "128K",
    },
    {
      name: t("marketing.campaigns.beach.name"),
      platform: t("marketing.campaigns.beach.platform"),
      status: t("marketing.status.optimizing"),
      reach: "340K",
    },
  ];

  const queue = [
    {
      time: "18:00",
      content: t("marketing.queue.cocktail"),
      status: t("marketing.status.ready"),
    },
    {
      time: "19:30",
      content: t("marketing.queue.wagyu"),
      status: t("marketing.status.processing"),
    },
    {
      time: "21:00",
      content: t("marketing.queue.dj"),
      status: t("marketing.status.scheduled"),
    },
  ];

  return (
    <div className="space-y-6">

      <div className="overflow-hidden rounded-[42px] border border-white/[0.06] bg-gradient-to-br from-[#07111F] via-[#0A1630] to-[#050816]">

        <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr]">

          <div className="p-6 xl:p-12">

            <div className="mb-4 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs tracking-[0.24em] text-cyan-300">
              AI MARKETING OPERATING SYSTEM
            </div>

            <h1 className="text-4xl font-extralight leading-none tracking-[-0.06em] xl:text-8xl">
              Marketing
              <br />
              Runtime Engine
            </h1>

            <p className="mt-6 max-w-3xl text-white/50">
              AI-generated campaigns synchronized directly
              into Meta publishing, customer intelligence,
              revenue forecasting, and engagement analytics.
            </p>

          </div>

          <div className="border-t border-white/[0.05] bg-black/20 p-6 xl:border-l xl:border-t-0 xl:p-12">

            <div className="text-xs tracking-[0.24em] text-[#D6A66A]">
              AI PERFORMANCE
            </div>

            <div className="mt-4 text-7xl font-extralight text-green-400">
              +38%
            </div>

            <div className="mt-4 text-white/50">
              Average engagement increase
              from AI campaign optimization.
            </div>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-4">

        <div className="rounded-[32px] border border-white/[0.05] bg-white/[0.03] p-6">

          <div className="text-sm text-white/40">
            Active Campaigns
          </div>

          <div className="mt-4 text-6xl font-extralight text-cyan-300">
            18
          </div>

          <div className="mt-4 text-white/40">
            AI synchronized
          </div>

        </div>

        <div className="rounded-[32px] border border-white/[0.05] bg-white/[0.03] p-6">

          <div className="text-sm text-white/40">
            Publishing Queue
          </div>

          <div className="mt-4 text-6xl font-extralight text-purple-300">
            24
          </div>

          <div className="mt-4 text-white/40">
            Meta runtime active
          </div>

        </div>

        <div className="rounded-[32px] border border-white/[0.05] bg-white/[0.03] p-6">

          <div className="text-sm text-white/40">
            AI Generated Assets
          </div>

          <div className="mt-4 text-6xl font-extralight text-green-400">
            482
          </div>

          <div className="mt-4 text-white/40">
            Images + video runtime
          </div>

        </div>

        <div className="rounded-[32px] border border-white/[0.05] bg-white/[0.03] p-6">

          <div className="text-sm text-white/40">
            Engagement Runtime
          </div>

          <div className="mt-4 text-6xl font-extralight text-amber-300">
            {t("marketing.status.live")}
          </div>

          <div className="mt-4 text-white/40">
            AI optimization active
          </div>

        </div>

      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1fr_0.8fr]">

        <div className="rounded-[40px] border border-cyan-500/10 bg-cyan-500/5 p-6">

          <div className="mb-8 flex items-center justify-between">

            <div>

              <div className="text-xs tracking-[0.24em] text-[#D6A66A]">
                {t("marketing.sections.campaigns.badge")}
              </div>

              <div className="mt-3 text-5xl font-extralight tracking-[-0.05em]">
                {t("marketing.sections.campaigns.title")}
              </div>

            </div>

            <div className="rounded-full bg-cyan-500/10 px-5 py-3 text-sm text-cyan-300">
              {t("marketing.status.live")}
            </div>

          </div>

          <div className="space-y-5">

            {campaigns.map((campaign) => (
              <div
                key={campaign.name}
                className="overflow-hidden rounded-[32px] border border-white/[0.05] bg-black/20"
              >

                <div className="h-52 bg-gradient-to-br from-[#1B2B52] via-[#2A1648] to-[#111827]" />

                <div className="p-6">

                  <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">

                    <div>

                      <div className="text-3xl font-extralight">
                        {campaign.name}
                      </div>

                      <div className="mt-3 text-white/50">
                        {campaign.platform}
                      </div>

                    </div>

                    <div className="flex gap-4">

                      <div className="rounded-3xl bg-black/20 px-5 py-4">

                        <div className="text-xs text-white/40">
                          {t("marketing.labels.reach")}
                        </div>

                        <div className="mt-2 text-3xl font-extralight text-green-400">
                          {campaign.reach}
                        </div>

                      </div>

                      <div className="rounded-3xl border border-purple-500/20 bg-purple-500/10 px-5 py-4 text-sm text-purple-300">
                        {campaign.status}
                      </div>

                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

        <div className="space-y-5">

          <div className="rounded-[40px] border border-purple-500/10 bg-purple-500/5 p-6">

            <div className="mb-6">

              <div className="text-xs tracking-[0.24em] text-[#D6A66A]">
                {t("marketing.sections.queue.badge")}
              </div>

              <div className="mt-3 text-5xl font-extralight tracking-[-0.05em]">
                {t("marketing.sections.queue.title")}
              </div>

            </div>

            <div className="space-y-4">

              {queue.map((item) => (
                <div
                  key={item.content}
                  className="rounded-3xl border border-white/[0.05] bg-black/20 p-5"
                >

                  <div className="flex items-center justify-between">

                    <div>

                      <div className="text-2xl font-extralight">
                        {item.content}
                      </div>

                      <div className="mt-2 text-white/40">
                        {t("marketing.labels.scheduled")}: {item.time}
                      </div>

                    </div>

                    <div className="rounded-full bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
                      {item.status}
                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>

          <div className="rounded-[40px] border border-green-500/10 bg-green-500/5 p-6">

            <div className="text-xs tracking-[0.24em] text-[#D6A66A]">
              {t("marketing.sections.optimization.badge")}
            </div>

            <div className="mt-4 text-6xl font-extralight text-green-400">
              {t("marketing.status.active")}
            </div>

            <div className="mt-4 text-white/50">
              {t("marketing.sections.optimization.description")}
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

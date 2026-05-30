"use client";

import { useTranslation } from "@/app/providers/I18nProvider";

export default function HRPage() {

  const { t } = useTranslation();

  const staff = [
    {
      name: "Alex",
      role: t("hr.roles.kitchen"),
      mood: t("hr.moods.focused"),
      energy: 92,
      risk: t("hr.risk.low"),
    },
    {
      name: "Mia",
      role: t("hr.roles.floor"),
      mood: t("hr.moods.overloaded"),
      energy: 61,
      risk: t("hr.risk.medium"),
    },
    {
      name: "Daniel",
      role: t("hr.roles.bar"),
      mood: t("hr.moods.performance"),
      energy: 96,
      risk: t("hr.risk.low"),
    },
  ];

  const aiSignals = [
    {
      title: t("hr.ai.burnout.title"),
      text: t("hr.ai.burnout.description"),
    },
    {
      title: t("hr.ai.performance.title"),
      text: t("hr.ai.performance.description"),
    },
    {
      title: t("hr.ai.training.title"),
      text: t("hr.ai.training.description"),
    },
  ];

  return (
    <div className="space-y-6">

      <div className="rounded-[36px] border border-white/[0.06] bg-gradient-to-br from-[#140C1F] to-[#050816] p-6 xl:p-10">

        <div className="flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">

          <div>

            <div className="mb-4 inline-flex rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-xs tracking-[0.24em] text-purple-300">
              {t("hr.hero.badge")}
            </div>

            <h1 className="max-w-4xl text-4xl font-extralight leading-none tracking-[-0.06em] xl:text-8xl">
              {t("hr.hero.title1")}
              <br />
              {t("hr.hero.title2")}
            </h1>

          </div>

          <div className="max-w-md rounded-3xl border border-white/[0.05] bg-black/20 p-6">

            <div className="text-sm text-white/40">
              {t("hr.hero.description")}
            </div>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1.2fr_0.8fr]">

        <div className="rounded-[36px] border border-white/[0.05] bg-white/[0.03] p-6">

          <div className="mb-8 flex items-center justify-between">

            <div>

              <p className="text-xs tracking-[0.24em] text-[#D6A66A]">
                {t("hr.staff.badge")}
              </p>

              <h2 className="mt-3 text-5xl font-extralight tracking-[-0.05em]">
                {t("hr.staff.title")}
              </h2>

            </div>

            <div className="rounded-full bg-green-500/10 px-5 py-3 text-sm text-green-300">
              {t("hr.status.live")}
            </div>

          </div>

          <div className="space-y-5">

            {staff.map((person) => (
              <div
                key={person.name}
                className="rounded-[30px] border border-white/[0.05] bg-black/20 p-6"
              >

                <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">

                  <div>

                    <div className="text-3xl font-extralight">
                      {person.name}
                    </div>

                    <div className="mt-2 text-white/40">
                      {person.role}
                    </div>

                  </div>

                  <div className="flex flex-wrap gap-3">

                    <div className="rounded-2xl bg-white/[0.04] px-4 py-3">

                      <div className="text-xs text-white/40">
                        {t("hr.staff.mood")}
                      </div>

                      <div className="mt-2 text-sm text-purple-300">
                        {person.mood}
                      </div>

                    </div>

                    <div className="rounded-2xl bg-white/[0.04] px-4 py-3">

                      <div className="text-xs text-white/40">
                        {t("hr.staff.energy")}
                      </div>

                      <div className="mt-2 text-sm text-green-300">
                        {person.energy}%
                      </div>

                    </div>

                    <div className="rounded-2xl bg-white/[0.04] px-4 py-3">

                      <div className="text-xs text-white/40">
                        {t("hr.staff.risk")}
                      </div>

                      <div className="mt-2 text-sm text-amber-300">
                        {person.risk}
                      </div>

                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

        <div className="space-y-5">

          <div className="rounded-[36px] border border-purple-500/10 bg-purple-500/5 p-6">

            <div className="mb-6">

              <p className="text-xs tracking-[0.24em] text-[#D6A66A]">
                {t("hr.ai.badge")}
              </p>

              <h2 className="mt-3 text-4xl font-extralight tracking-[-0.05em]">
                {t("hr.ai.title")}
              </h2>

            </div>

            <div className="space-y-4">

              {aiSignals.map((signal) => (
                <div
                  key={signal.title}
                  className="rounded-3xl border border-white/[0.05] bg-black/20 p-5"
                >

                  <div className="text-xl font-extralight">
                    {signal.title}
                  </div>

                  <div className="mt-3 text-white/50">
                    {signal.text}
                  </div>

                </div>
              ))}

            </div>

          </div>

          <div className="rounded-[36px] border border-green-500/10 bg-green-500/5 p-6">

            <div className="text-xs tracking-[0.24em] text-[#D6A66A]">
              {t("hr.payroll.badge")}
            </div>

            <div className="mt-4 text-5xl font-extralight tracking-[-0.05em] text-green-400">
              {t("hr.status.live")}
            </div>

            <div className="mt-4 text-white/50">
              {t("hr.payroll.description")}
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

"use client";

import { useTranslation } from "@/app/providers/I18nProvider";

export default function SettingsPage() {

  const { t } = useTranslation();

  const settings = [
    {
      title: t("settings.items.organization.title"),
      desc: t("settings.items.organization.desc"),
    },
    {
      title: t("settings.items.ai.title"),
      desc: t("settings.items.ai.desc"),
    },
    {
      title: t("settings.items.meta.title"),
      desc: t("settings.items.meta.desc"),
    },
    {
      title: t("settings.items.security.title"),
      desc: t("settings.items.security.desc"),
    },
  ];


    return (
    <div className="space-y-6">

      <div className="overflow-hidden rounded-[42px] border border-white/[0.06] bg-gradient-to-br from-[#140B24] via-[#0B1324] to-[#050816]">

        <div className="flex flex-col gap-8 p-6 xl:flex-row xl:items-end xl:justify-between xl:p-12">

          <div>

            <div className="mb-4 inline-flex rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-xs tracking-[0.24em] text-purple-300">
              {t("settings.hero.badge")}
            </div>

            <h1 className="text-5xl font-extralight leading-none tracking-[-0.07em] xl:text-[7rem]">
              {t("settings.hero.title1")}
              <br />
              {t("settings.hero.title2")}
            </h1>

            <p className="mt-6 max-w-3xl text-lg text-white/50">
              {t("settings.hero.description")}
            </p>

          </div>

          <div className="rounded-[32px] border border-white/[0.05] bg-black/20 p-6 backdrop-blur-xl">

            <div className="text-xs tracking-[0.22em] text-[#D6A66A]">
              {t("settings.status.badge")}
            </div>

            <div className="mt-4 text-6xl font-extralight text-green-400">
              {t("settings.status.stable")}
            </div>

            <div className="mt-3 text-white/40">
              {t("settings.status.description")}
            </div>

          </div>

        </div>

      </div>

      <div className="space-y-5">

        {settings.map((setting) => (
          <div
            key={setting.title}
            className="rounded-[36px] border border-white/[0.05] bg-white/[0.03] p-6"
          >

            <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">

              <div>

                <div className="text-4xl font-extralight tracking-[-0.05em]">
                  {setting.title}
                </div>

                <div className="mt-3 text-white/40">
                  {setting.desc}
                </div>

              </div>

              <div className="flex items-center gap-3">

                <div className="rounded-2xl bg-black/20 px-5 py-4 text-sm text-white/70">
                  {t("settings.actions.configure")}
                </div>

                <div className="rounded-2xl bg-purple-500/10 px-5 py-4 text-sm text-purple-300">
                  {t("settings.actions.aiAssisted")}
                </div>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

"use client";

import { useTranslation } from "@/app/providers/I18nProvider";

export default function DesignStudioPage() {

  const { t } = useTranslation();

  const engines = [
    {
      name: t("designStudio.engines.fullAi.name"),
      description: t("designStudio.engines.fullAi.description"),
      color: "cyan",
    },
    {
      name: t("designStudio.engines.enhance.name"),
      description: t("designStudio.engines.enhance.description"),
      color: "green",
    },
    {
      name: t("designStudio.engines.composite.name"),
      description: t("designStudio.engines.composite.description"),
      color: "purple",
    },
    {
      name: t("designStudio.engines.video.name"),
      description: t("designStudio.engines.video.description"),
      color: "amber",
    },
  ];


    return (
    <div className="space-y-6">

      <div className="overflow-hidden rounded-[42px] border border-white/[0.06] bg-gradient-to-br from-[#050816] via-[#0A0E1A] to-[#140B24]">

        <div className="flex flex-col gap-8 p-6 xl:flex-row xl:items-end xl:justify-between xl:p-12">

          <div>

            <div className="mb-4 inline-flex rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-xs tracking-[0.24em] text-purple-300">
              {t("designStudio.hero.badge")}
            </div>

            <h1 className="text-5xl font-extralight leading-none tracking-[-0.07em] xl:text-[8rem]">
              {t("designStudio.hero.title1")}
              <br />
              {t("designStudio.hero.title2")}
            </h1>

            <p className="mt-6 max-w-3xl text-lg text-white/50">
              {t("designStudio.hero.description")}
            </p>

          </div>

          <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">

            {engines.map((engine) => (
              <div
                key={engine.name}
                className="rounded-3xl border border-white/[0.05] bg-black/20 p-4 backdrop-blur-xl"
              >

                <div
                  className={`inline-flex rounded-full px-3 py-1 text-[10px] tracking-[0.2em] ${
                    engine.color === "cyan"
                      ? "bg-cyan-500/10 text-cyan-300"
                      : engine.color === "green"
                      ? "bg-green-500/10 text-green-300"
                      : engine.color === "purple"
                      ? "bg-purple-500/10 text-purple-300"
                      : "bg-amber-500/10 text-amber-300"
                  }`}
                >
                  {t("designStudio.labels.engine")}
                </div>

                <div className="mt-4 text-2xl font-extralight tracking-[-0.04em]">
                  {engine.name}
                </div>

                <div className="mt-2 text-xs text-white/40">
                  {engine.description}
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1fr_390px]">

        <div className="space-y-5">

          <div className="overflow-hidden rounded-[36px] border border-white/[0.05] bg-black">
            <img
              src="/ads/enhance-wagyu.jpg"
              className="h-[260px] w-full object-cover xl:h-[320px]"
            />
          </div>

          <div className="overflow-hidden rounded-[36px] border border-white/[0.05] bg-black">
            <img
              src="/ads/pestcontrol-video.jpg"
              className="h-[260px] w-full object-cover xl:h-[320px]"
            />
          </div>

          <div className="overflow-hidden rounded-[36px] border border-white/[0.05] bg-black">
            <img
              src="/ads/beachclub-horizontal.jpg"
              className="h-[260px] w-full object-cover xl:h-[320px]"
            />
          </div>

        </div>

        <div className="overflow-hidden rounded-[36px] border border-white/[0.05] bg-[#07060A]">

          <div className="relative min-h-[920px] bg-gradient-to-b from-[#211207] via-[#09070A] to-black">

            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover opacity-90"
              src="/ads/beachclub-reel.mp4"
            />

            <img
              src="/ads/beachclub-vertical.jpg"
              className="absolute inset-0 h-full w-full object-cover opacity-100"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-black/90" />

            <div className="absolute left-5 top-5 rounded-full border border-[#D6A66A]/20 bg-black/35 px-4 py-2 text-xs tracking-[0.22em] text-[#D6A66A] backdrop-blur-xl">
              {t("designStudio.preview.badge")}
            </div>

            <div className="absolute right-5 top-5 rounded-full border border-red-400/20 bg-red-500/15 px-4 py-2 text-xs text-red-200 backdrop-blur-xl">
              9:16
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-5">

              <div className="rounded-[30px] border border-[#D6A66A]/20 bg-black/55 p-5 backdrop-blur-2xl">

                <div className="text-xs tracking-[0.22em] text-[#D6A66A]">
                  {t("designStudio.reel.badge")}
                </div>

                <div className="mt-4 text-5xl font-extralight leading-none tracking-[-0.06em] text-white">
                  {t("designStudio.reel.title1")}
                  <br />
                  {t("designStudio.reel.title2")}
                </div>

                <div className="mt-4 text-sm text-white/60">
                  {t("designStudio.reel.description")}
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">

                  <div className="rounded-2xl bg-white/10 px-4 py-3 text-center text-sm text-white">
                    {t("designStudio.reel.story")}
                  </div>

                  <div className="rounded-2xl bg-[#D6A66A]/20 px-4 py-3 text-center text-sm text-[#D6A66A]">
                    {t("designStudio.reel.videoEngine")}
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

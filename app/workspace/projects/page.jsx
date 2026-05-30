"use client";

import { useTranslation } from "@/app/providers/I18nProvider";

export default function ProjectsPage() {

  const { t } = useTranslation();

  const projects = [
    {
      title: "Churchill Phuket",
      phase: t("projects.phases.operationalDeployment"),
      progress: "82%",
      status: t("projects.status.liveBuild"),
    },
    {
      title: "Yona Runtime",
      phase: t("projects.phases.aiSynchronization"),
      progress: "64%",
      status: t("projects.status.integration"),
    },
    {
      title: "Mongos Expansion",
      phase: t("projects.phases.inventoryArchitecture"),
      progress: "47%",
      status: t("projects.status.planning"),
    },
  ];

  const rolloutFlow = [
    t("projects.layers.pos"),
    t("projects.layers.kitchen"),
    t("projects.layers.inventory"),
    t("projects.layers.payroll"),
    t("projects.layers.ai"),
    t("projects.layers.accounting"),
  ];

  return (
    <div className="space-y-6">

      <div className="overflow-hidden rounded-[40px] border border-white/[0.06] bg-gradient-to-br from-[#09111D] to-[#050816]">

        <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr]">

          <div className="p-6 xl:p-12">

            <div className="mb-4 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs tracking-[0.24em] text-cyan-300">
              {t("projects.hero.badge")}
            </div>

            <h1 className="text-4xl font-extralight leading-none tracking-[-0.06em] xl:text-8xl">
              {t("projects.hero.title1")}
              <br />
              {t("projects.hero.title2")}
            </h1>

            <p className="mt-6 max-w-2xl text-white/50">
              {t("projects.hero.description")}
            </p>

          </div>

          <div className="border-t border-white/[0.05] bg-black/20 p-6 xl:border-l xl:border-t-0 xl:p-12">

            <div className="text-xs tracking-[0.24em] text-[#D6A66A]">
              {t("projects.global.badge")}
            </div>

            <div className="mt-4 text-6xl font-extralight text-green-400">
              3
            </div>

            <div className="mt-3 text-white/50">
              {t("projects.global.description")}
            </div>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1fr_0.8fr]">

        <div className="space-y-5">

          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-[36px] border border-white/[0.05] bg-white/[0.03] p-6"
            >

              <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">

                <div>

                  <div className="text-4xl font-extralight tracking-[-0.04em]">
                    {project.title}
                  </div>

                  <div className="mt-3 text-white/50">
                    {project.phase}
                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <div className="rounded-3xl bg-black/20 px-6 py-5">

                    <div className="text-xs text-white/40">
                      {t("projects.labels.progress")}
                    </div>

                    <div className="mt-2 text-3xl font-extralight text-cyan-300">
                      {project.progress}
                    </div>

                  </div>

                  <div className="rounded-3xl border border-green-500/20 bg-green-500/10 px-5 py-4 text-sm text-green-300">
                    {project.status}
                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

        <div className="rounded-[36px] border border-cyan-500/10 bg-cyan-500/5 p-6">

          <div className="mb-6">

            <p className="text-xs tracking-[0.24em] text-[#D6A66A]">
              {t("projects.stack.badge")}
            </p>

            <h2 className="mt-3 text-5xl font-extralight tracking-[-0.05em]">
              {t("projects.stack.title")}
            </h2>

          </div>

          <div className="space-y-4">

            {rolloutFlow.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-5 rounded-3xl border border-white/[0.05] bg-black/20 p-5"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                  {index + 1}
                </div>

                <div>

                  <div className="text-2xl font-extralight">
                    {item}
                  </div>

                  <div className="mt-1 text-white/40">
                    {t("projects.stack.description")}
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

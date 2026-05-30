"use client";

import { useTranslation } from "@/app/providers/I18nProvider";

export default function DocumentsPage() {

  const { t } = useTranslation();

  const docs = [
    {
      title: "Supplier Invoice",
      type: t("documents.types.procurement"),
      status: t("documents.status.synced"),
    },
    {
      title: "Payroll Approval",
      type: t("documents.types.hr"),
      status: t("documents.status.pending"),
    },
    {
      title: "Kitchen Production Report",
      type: t("documents.types.operations"),
      status: t("documents.status.approved"),
    },
    {
      title: "Meta Campaign Contract",
      type: t("documents.types.marketing"),
      status: t("documents.status.archived"),
    },
  ];


    return (
    <div className="space-y-6">

      <div className="overflow-hidden rounded-[42px] border border-white/[0.06] bg-gradient-to-br from-[#07111F] via-[#0B1324] to-[#050816]">

        <div className="flex flex-col gap-8 p-6 xl:flex-row xl:items-end xl:justify-between xl:p-12">

          <div>

            <div className="mb-4 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs tracking-[0.24em] text-cyan-300">
              {t("documents.hero.badge")}
            </div>

            <h1 className="text-5xl font-extralight leading-none tracking-[-0.07em] xl:text-[7rem]">
              {t("documents.hero.title1")}
              <br />
              {t("documents.hero.title2")}
            </h1>

            <p className="mt-6 max-w-3xl text-lg text-white/50">
              {t("documents.hero.description")}
            </p>

          </div>

          <div className="rounded-[32px] border border-white/[0.05] bg-black/20 p-6 backdrop-blur-xl">

            <div className="text-xs tracking-[0.22em] text-[#D6A66A]">
              {t("documents.storage.badge")}
            </div>

            <div className="mt-4 text-6xl font-extralight text-green-400">
              {t("documents.storage.live")}
            </div>

            <div className="mt-3 text-white/40">
              {t("documents.storage.description")}
            </div>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">

        {docs.map((doc) => (
          <div
            key={doc.title}
            className="rounded-[36px] border border-white/[0.05] bg-white/[0.03] p-6"
          >

            <div className="flex items-start justify-between">

              <div>

                <div className="text-3xl font-extralight tracking-[-0.04em]">
                  {doc.title}
                </div>

                <div className="mt-3 text-white/40">
                  {doc.type}
                </div>

              </div>

              <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                {doc.status}
              </div>

            </div>

            <div className="mt-8 flex items-center gap-3">

              <div className="rounded-2xl bg-black/20 px-4 py-3 text-sm text-white/70">
                {t("documents.actions.open")}
              </div>

              <div className="rounded-2xl bg-black/20 px-4 py-3 text-sm text-white/70">
                {t("documents.actions.download")}
              </div>

              <div className="rounded-2xl bg-black/20 px-4 py-3 text-sm text-white/70">
                {t("documents.actions.analyze")}
              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

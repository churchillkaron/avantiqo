"use client";

import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslation } from "@/app/providers/I18nProvider";

export default function WorkspaceTopNav() {

  const { t } = useTranslation();

  return (
    <div className="mb-6 rounded-[32px] border border-white/[0.06] bg-white/[0.04] p-4 backdrop-blur-2xl xl:p-5">

      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">

        <div>

          <div className="text-xs uppercase tracking-[0.28em] text-[#d7b66a]">
            {t("workspace.activeProvider")}
          </div>

          <div className="mt-2 text-2xl font-extralight tracking-[-0.04em] text-white">
            {t("workspace.runtime")}
          </div>

        </div>

        <div className="flex flex-wrap items-center gap-3">

          <Link
            href="/start"
            className="rounded-2xl bg-white/[0.05] px-4 py-3 text-sm text-white/70"
          >
            {t("workspace.start")}
          </Link>

          <Link
            href="/login"
            className="rounded-2xl bg-white/[0.05] px-4 py-3 text-sm text-white/70"
          >
            {t("workspace.login")}
          </Link>

          <Link
            href="/modules"
            className="rounded-2xl bg-white/[0.05] px-4 py-3 text-sm text-white/70"
          >
            {t("workspace.modules")}
          </Link>

          <Link
            href="/workspace/design-studio"
            className="rounded-2xl bg-purple-500/15 px-4 py-3 text-sm text-purple-300"
          >
            {t("workspace.designStudio")}
          </Link>

          <LanguageSwitcher />

        </div>

      </div>

    </div>
  );
}

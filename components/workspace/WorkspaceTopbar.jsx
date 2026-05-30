"use client";

import LanguageSwitcher from "@/app/components/LanguageSwitcher";
import { useTranslation } from "@/app/providers/I18nProvider";

export default function WorkspaceTopbar() {

  const { t } = useTranslation();

  return (
    <header className="sticky top-25 z-50 mb-8">

      <div className="relative overflow-hidden rounded-[34px] border border-white/[0.05] bg-white/[0.025] px-8 py-5 backdrop-blur-3xl">

        <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/10 via-transparent to-[#D6A66A]/10" />

        <div className="relative z-10 flex items-center justify-between gap-6">

          {/* LEFT */}
          <div className="flex items-center gap-5">

            <div>

              <div className="text-xs tracking-[0.3em] text-[#B58AF8]">
                {t("workspace.activeOrganization")}
              </div>

              <div
                className="mt-2 text-2xl"
                style={{
                  fontWeight: 250,
                  letterSpacing: "-0.04em",
                }}
              >
                {t("workspace.enterprise")}
              </div>

            </div>

          </div>

          {/* CENTER */}
          <div className="hidden flex-1 xl:flex justify-center px-10">

            <div className="w-full max-w-2xl rounded-[24px] border border-white/[0.05] bg-black/30 px-6 py-4 backdrop-blur-3xl">

              <div className="text-white/35">
                {t("workspace.search")}
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            <LanguageSwitcher />

            <button className="rounded-[22px] border border-white/[0.05] bg-white/[0.025] px-6 py-3 text-white/65 backdrop-blur-3xl transition hover:bg-white/[0.06]">
              {t("workspace.aiCommand")}
            </button>

            <button className="rounded-[22px] border border-white/[0.05] bg-white/[0.025] px-6 py-3 text-white/65 backdrop-blur-3xl transition hover:bg-white/[0.06]">
              {t("workspace.notifications")}
            </button>

            <div className="flex items-center gap-4 rounded-[24px] border border-white/[0.05] bg-black/30 px-6 py-3 backdrop-blur-3xl">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-[#D6A66A] via-[#C084FC] to-[#7C5CFA] text-[15px] font-extralight text-white">
                PV
              </div>

              <div className="hidden xl:block">

                <div className="text-[15px] text-white">
                  Patric Vallgaarda
                </div>

                <div className="text-xs text-white/40">
                  {t("workspace.superAdmin")}
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}

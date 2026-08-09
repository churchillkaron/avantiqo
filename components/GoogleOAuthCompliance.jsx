"use client";

import { usePathname } from "next/navigation";

const GOOGLE_DATA_ITEMS = [
  "Google Account email address, used to identify the Google account that authorized a connection.",
  "Google Business Profile data, including business locations, reviews and review replies, when an organization connects Google Business Profile.",
  "Google Ads account, campaign, budget, asset, performance and spend data, when an organization connects Google Ads.",
];

export default function GoogleOAuthCompliance({ position }) {
  const pathname = usePathname();

  if (position === "before" && pathname === "/") {
    return (
      <section className="relative z-50 border-b border-white/[0.06] bg-[#080706] px-6 py-5 text-white sm:px-10 lg:px-14">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-5xl">
            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#D6A66A]">
              About Avantiqo
            </p>
            <p className="mt-2 text-[13px] leading-6 text-white/58 sm:text-[14px]">
              <strong className="font-medium text-white/88">Avantiqo is a multi-tenant business management platform</strong> that helps organizations manage finance, operations, supply chain, commercial activities, people, projects, marketing, documents, compliance and connected business services from one system. Authorized organization administrators can connect their own Google Business Profile and Google Ads accounts so Avantiqo can provide the connected review, campaign, reporting, spend reconciliation and optimization features they choose to use.
            </p>
          </div>

          <nav className="flex shrink-0 flex-wrap gap-3 text-[9px] uppercase tracking-[0.18em]">
            <a
              href="/policy"
              className="rounded-full border border-[#D6A66A]/30 px-4 py-2.5 text-[#E5C17B] transition hover:border-[#D6A66A]/60 hover:bg-[#D6A66A]/10"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="rounded-full border border-white/10 px-4 py-2.5 text-white/55 transition hover:border-white/25 hover:text-white"
            >
              Terms of Service
            </a>
          </nav>
        </div>
      </section>
    );
  }

  if (position === "after" && pathname === "/policy") {
    return (
      <section className="border-t border-white/[0.06] bg-[#050507] px-6 py-20 text-white md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.32em] text-[#D6A66A]">
            Google API User Data
          </p>
          <h2 className="mt-5 text-4xl font-light tracking-[-0.04em] text-white/92 md:text-5xl">
            How Avantiqo uses Google user data
          </h2>
          <p className="mt-6 max-w-4xl text-base leading-8 text-white/55">
            Avantiqo accesses Google user data only after an authorized user explicitly connects a Google service. Access is limited to the organization and features selected by that user. Avantiqo requests only the Google permissions required to provide those connected features.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {GOOGLE_DATA_ITEMS.map((item) => (
              <div key={item} className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 text-sm leading-7 text-white/50">
                {item}
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-6 rounded-[28px] border border-[#D6A66A]/18 bg-[#D6A66A]/[0.035] p-7 md:p-9">
            <div>
              <h3 className="text-xl font-medium text-white/88">Use</h3>
              <p className="mt-2 text-sm leading-7 text-white/52">
                Google user data is used only to provide or improve user-facing Avantiqo features requested by the connected organization, including business-profile management, review workflows, Google Ads campaign management, reporting, spend reconciliation and approved optimization. Avantiqo does not use Google user data for unrelated advertising or to build general-purpose advertising profiles.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-white/88">Storage and security</h3>
              <p className="mt-2 text-sm leading-7 text-white/52">
                Authorization credentials and connected-service records are stored with organization-scoped access controls. Avantiqo applies access restrictions so one customer organization cannot access another organization&apos;s connected Google data.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-white/88">Sharing and transfers</h3>
              <p className="mt-2 text-sm leading-7 text-white/52">
                Avantiqo does not sell Google user data. Google user data is not transferred to third parties except when necessary to provide the user-requested Avantiqo feature, comply with law, protect security, or with the user&apos;s explicit consent. Any processing remains subject to applicable Google API Services User Data Policy requirements.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-white/88">Retention, deletion and revocation</h3>
              <p className="mt-2 text-sm leading-7 text-white/52">
                Connected Google data is retained only for as long as needed to provide the organization&apos;s enabled features, meet legitimate legal or accounting obligations, and maintain required audit records. An authorized organization administrator can disconnect a Google integration to stop future access. Users can also revoke Avantiqo&apos;s Google access from their Google Account permissions. Requests concerning deletion of stored personal data can be made through Avantiqo support.
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm leading-7 text-white/42">
            Avantiqo&apos;s use and transfer of information received from Google APIs adheres to the Google API Services User Data Policy, including applicable Limited Use requirements.
          </p>
        </div>
      </section>
    );
  }

  return null;
}

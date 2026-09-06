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
      <section className="relative z-50 border-b border-black/[0.06] bg-[#F7F6F3] px-5 py-4 text-[#191919] sm:px-7 lg:px-10">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-5xl">
            <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#9A744B]">About Avantiqo</p>
            <p className="mt-1.5 text-[11px] leading-5 text-[#6C6963] sm:text-[12px]">
              <strong className="font-semibold text-[#332F2A]">Avantiqo is a Business Operating System for organizations.</strong> It helps businesses manage finance, operations, supply chain, commercial activity, people, projects, documents, analytics, compliance and connected business services from one governed workspace. Authorized organization administrators can connect their own Google Business Profile and Google Ads accounts so Avantiqo can provide the review, campaign, reporting, spend-reconciliation and approved optimization features they choose to use.
            </p>
          </div>
          <nav className="flex shrink-0 flex-wrap gap-2 text-[8px] font-semibold uppercase tracking-[0.12em]">
            <a href="/policy" className="rounded-xl bg-[#171716] px-3.5 py-2.5 text-white">Privacy Policy</a>
            <a href="/terms" className="rounded-xl border border-black/[0.09] bg-white px-3.5 py-2.5 text-[#5E5952]">Terms of Service</a>
          </nav>
        </div>
      </section>
    );
  }

  if (position === "after" && pathname === "/policy") {
    return (
      <section className="border-t border-black/[0.06] bg-[#F7F6F3] px-5 py-20 text-[#191919] sm:px-7 md:py-24 lg:px-10">
        <div className="mx-auto max-w-[1120px]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9A744B]">Google API User Data</p>
          <h2 className="mt-4 text-[34px] font-medium tracking-[-0.04em] text-[#1B1A18] md:text-[46px]">How Avantiqo uses Google user data</h2>
          <p className="mt-5 max-w-4xl text-[14px] leading-7 text-[#6C6963]">Avantiqo accesses Google user data only after an authorized user explicitly connects a Google service. Access is limited to the organization and features selected by that user. Avantiqo requests only the Google permissions required to provide those connected features.</p>

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {GOOGLE_DATA_ITEMS.map((item) => (
              <div key={item} className="rounded-[18px] border border-black/[0.075] bg-white p-5 text-[11px] leading-6 text-[#6F6A63]">{item}</div>
            ))}
          </div>

          <div className="mt-5 space-y-6 rounded-[20px] border border-[#D6A66A]/20 bg-[#FBF7F0] p-5 md:p-7">
            <div><h3 className="text-[15px] font-semibold text-[#332F2A]">Use</h3><p className="mt-2 text-[11px] leading-6 text-[#6F6A63]">Google user data is used only to provide or improve user-facing Avantiqo features requested by the connected organization, including business-profile management, review workflows, Google Ads campaign management, reporting, spend reconciliation and approved optimization. Avantiqo does not use Google user data for unrelated advertising or to build general-purpose advertising profiles.</p></div>
            <div><h3 className="text-[15px] font-semibold text-[#332F2A]">Storage and security</h3><p className="mt-2 text-[11px] leading-6 text-[#6F6A63]">Authorization credentials and connected-service records are stored with organization-scoped access controls. Avantiqo applies access restrictions so one customer organization cannot access another organization&apos;s connected Google data.</p></div>
            <div><h3 className="text-[15px] font-semibold text-[#332F2A]">Sharing and transfers</h3><p className="mt-2 text-[11px] leading-6 text-[#6F6A63]">Avantiqo does not sell Google user data. Google user data is not transferred to third parties except when necessary to provide the user-requested Avantiqo feature, comply with law, protect security, or with the user&apos;s explicit consent. Any processing remains subject to applicable Google API Services User Data Policy requirements.</p></div>
            <div><h3 className="text-[15px] font-semibold text-[#332F2A]">Retention, deletion and revocation</h3><p className="mt-2 text-[11px] leading-6 text-[#6F6A63]">Connected Google data is retained only for as long as needed to provide the organization&apos;s enabled features, meet legitimate legal or accounting obligations, and maintain required audit records. An authorized organization administrator can disconnect a Google integration to stop future access. Users can also revoke Avantiqo&apos;s Google access from their Google Account permissions. Requests concerning deletion of stored personal data can be made through Avantiqo support.</p></div>
          </div>

          <p className="mt-6 text-[11px] leading-6 text-[#817C74]">Avantiqo&apos;s use and transfer of information received from Google APIs adheres to the Google API Services User Data Policy, including applicable Limited Use requirements.</p>
        </div>
      </section>
    );
  }

  return null;
}

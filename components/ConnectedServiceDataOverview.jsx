const providers = [
  { name: "Google", status: "Available where enabled", purpose: "Google Business Profile, reviews, Google Ads, reporting, campaign management and approved optimization.", data: "Authorized business locations, reviews, review replies, Google Ads accounts, campaigns, budgets, assets, performance metrics, spend data and the Google account identity used to authorize the connection." },
  { name: "Meta · Facebook · Instagram", status: "Available where enabled", purpose: "Connect business pages and advertising accounts for publishing, campaign management, audience workflows, reporting and approved optimization.", data: "Authorized business pages, Instagram professional accounts, ad accounts, campaigns, creatives, publishing status, performance metrics and the account identity used to authorize the connection." },
  { name: "WhatsApp Business", status: "Available where enabled", purpose: "Support customer communication, service workflows, approved messaging, notifications and operational conversations.", data: "Authorized business account details, approved phone numbers, conversation metadata, message status and message content required for the customer-requested communication workflow." },
  { name: "LINE", status: "Available where enabled", purpose: "Support customer communication, notifications, campaigns, service requests and approved messaging through connected LINE business channels.", data: "Authorized channel information, user or conversation identifiers, message status and message content required for enabled customer communication workflows." },
  { name: "Microsoft 365", status: "Available where enabled", purpose: "Connect approved Microsoft business services for email, calendar, documents, collaboration and organization workflows.", data: "Only the Microsoft account, mailbox, calendar, document or collaboration data required by the specific feature the organization has chosen to enable." },
  { name: "Payments & Banking", status: "Provider dependent", purpose: "Support approved payment collection, payouts, bank reconciliation, transaction matching and financial control through connected providers.", data: "Authorized account identifiers, transaction references, payment status, settlement information and financial data required for the enabled payment or reconciliation workflow." },
  { name: "Websites · Portals · APIs", status: "Organization controlled", purpose: "Connect websites, forms, customer portals, mobile apps, kiosks, external systems, webhooks and APIs to Avantiqo workflows.", data: "Only the business, customer, request, booking, order, document, event or workflow data explicitly submitted or authorized through the connected channel." },
  { name: "Other Business Providers", status: "Added as approved services", purpose: "Avantiqo can support additional accounting, logistics, hospitality, service, document, automation and specialist providers as organizations enable them.", data: "The minimum provider-specific data required to deliver the feature selected by the customer, subject to that provider's own authorization and Avantiqo's organization-level controls." },
];

export default function ConnectedServiceDataOverview() {
  return (
    <section id="connected-service-data" className="border-b border-black/[0.06] bg-[#F7F6F3] text-[#191919]">
      <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-7 lg:px-10 lg:py-24">
        <div className="max-w-4xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9A744B]">Connected service data</p>
          <h2 className="mt-3 text-[32px] font-medium leading-[1.05] tracking-[-0.045em] text-[#1B1A18] sm:text-[40px] lg:text-[48px]">How Avantiqo uses data from connected business services.</h2>
          <p className="mt-5 text-[14px] leading-7 text-[#6C6963] sm:text-[15px]">Avantiqo connects external services only when an authorized customer user chooses to connect them. The customer authenticates directly with the provider and grants the permissions needed for the selected feature. Avantiqo does not require customers to share their external-service passwords.</p>
          <p className="mt-3 text-[13px] leading-6 text-[#817C74]">The exact data accessed depends on the provider and the feature the organization enables. Avantiqo is designed to use the minimum data required for that workflow, keep it attached to the correct organization and allow authorized administrators to disconnect services when required.</p>
        </div>

        <div className="mt-10 grid overflow-hidden rounded-[22px] border border-black/[0.075] bg-white lg:grid-cols-2">
          {providers.map((provider, index) => (
            <article key={provider.name} className={`p-5 sm:p-6 ${index < providers.length - 2 ? "border-b border-black/[0.06]" : ""} ${index % 2 === 0 ? "lg:border-r lg:border-black/[0.06]" : ""}`}>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-[16px] font-semibold tracking-[-0.02em] text-[#332F2A]">{provider.name}</h3>
                <span className="rounded-full border border-black/[0.07] bg-[#FBFAF8] px-2.5 py-1 text-[7px] font-semibold uppercase tracking-[0.1em] text-[#8A847C]">{provider.status}</span>
              </div>
              <p className="mt-4 text-[11px] leading-5 text-[#6F6A63]">{provider.purpose}</p>
              <div className="mt-4 rounded-xl border border-[#D6A66A]/18 bg-[#FBF7F0] p-4">
                <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-[#9A744B]">Data used for this feature</p>
                <p className="mt-2 text-[10px] leading-5 text-[#77716A]">{provider.data}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-4 rounded-[20px] border border-black/[0.075] bg-white p-5 sm:p-6">
          <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#9A744B]">Customer control</p>
          <div className="mt-4 grid gap-5 text-[10px] leading-5 text-[#6F6A63] md:grid-cols-3">
            <p><strong className="font-semibold text-[#3E3933]">Authorization:</strong> external access begins only after an authorized customer user connects the service through the provider&apos;s own authorization flow.</p>
            <p><strong className="font-semibold text-[#3E3933]">Use:</strong> connected data is used to provide the business feature selected by the customer, such as communication, publishing, reporting, reconciliation or approved execution.</p>
            <p><strong className="font-semibold text-[#3E3933]">Revocation:</strong> authorized administrators can disconnect integrations in Avantiqo and, where supported, revoke access directly with the external provider.</p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2.5">
          <a href="/policy" className="rounded-xl bg-[#171716] px-4 py-2.5 text-[9px] font-semibold text-white">Read Privacy Policy</a>
          <a href="/terms" className="rounded-xl border border-black/[0.09] bg-white px-4 py-2.5 text-[9px] font-semibold text-[#5E5952]">Read Terms of Service</a>
        </div>
      </div>
    </section>
  );
}

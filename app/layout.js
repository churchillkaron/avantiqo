import "./globals.css";
import { I18nProvider } from "./providers/I18nProvider";
import { Manrope, Inter } from "next/font/google";
import GoogleOAuthCompliance from "@/components/GoogleOAuthCompliance";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title: "Avantiqo | Multi-tenant Business Management Platform",
  description:
    "Avantiqo is a multi-tenant business management platform for finance, operations, supply chain, commercial activities, people, projects, marketing, documents, compliance and connected business services. Authorized organizations can connect their own Google Business Profile and Google Ads accounts for review, campaign, reporting and spend-management features.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <I18nProvider>
          <section className="relative z-[100] border-b border-white/[0.08] bg-[#080706] px-6 py-5 text-white sm:px-10 lg:px-14">
            <div className="mx-auto flex max-w-[1500px] flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-5xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D6A66A]">
                  Avantiqo · Multi-tenant Business Management Platform
                </p>
                <p className="mt-2 text-[13px] leading-6 text-white/60 sm:text-[14px]">
                  Avantiqo helps organizations manage finance, operations, supply chain, commercial activities, people, projects, marketing, documents, compliance and connected business services from one platform. Authorized organization administrators can connect their own Google Business Profile and Google Ads accounts so Avantiqo can provide review management, advertising campaign management, reporting, spend reconciliation and approved optimization features.
                </p>
              </div>

              <nav className="flex shrink-0 flex-wrap gap-3 text-[9px] uppercase tracking-[0.18em]">
                <a
                  href="/policy"
                  className="rounded-full border border-[#D6A66A]/35 px-4 py-2.5 text-[#E5C17B] transition hover:border-[#D6A66A]/65 hover:bg-[#D6A66A]/10"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="rounded-full border border-white/10 px-4 py-2.5 text-white/60 transition hover:border-white/25 hover:text-white"
                >
                  Terms of Service
                </a>
              </nav>
            </div>
          </section>

          {children}
          <GoogleOAuthCompliance position="after" />
        </I18nProvider>
      </body>
    </html>
  );
}

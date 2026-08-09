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
  title: "Avantiqo | Business Operating System",
  description:
    "Avantiqo is a multi-tenant Business Operating System for finance, operations, commercial activity, supply chain, people, projects, marketing, documents, analytics, customers, administration, AI automation and connected business services. Organizations control their own users, permissions, approvals and external integrations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <I18nProvider>
          {children}
          <GoogleOAuthCompliance position="after" />
        </I18nProvider>
      </body>
    </html>
  );
}

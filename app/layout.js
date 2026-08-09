import "./globals.css";
import { I18nProvider } from "./providers/I18nProvider";
import { Manrope, Inter } from "next/font/google";
import GoogleOAuthCompliance from "@/components/GoogleOAuthCompliance";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300","400","500","600"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300","400","500","600"],
  display: "swap",
});

export const metadata = {
  title: "Avantiqo",
  description:
    "Avantiqo is a multi-tenant business management platform connecting finance, operations, supply chain, commercial activities, people, projects, marketing, documents, compliance and approved business services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <I18nProvider>
          <GoogleOAuthCompliance position="before" />
          {children}
          <GoogleOAuthCompliance position="after" />
        </I18nProvider>
      </body>
    </html>
  );
}

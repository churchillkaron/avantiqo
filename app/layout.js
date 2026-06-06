import "./globals.css";
import { I18nProvider } from "./providers/I18nProvider";
import { Manrope, Inter } from "next/font/google";

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
  description: "Enterprise AI Operating System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}

import "./globals.css";
import { I18nProvider } from "./providers/I18nProvider";

export const metadata = {
  title: "Avantiqo",
  description: "Enterprise AI Operating System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <I18nProvider>
          {children}
        </I18nProvider>

      </body>
    </html>
  );
}

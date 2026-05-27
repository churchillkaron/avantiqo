import "./globals.css";

import { Inter, Space_Grotesk } from "next/font/google";

import Navbar from "@/components/layout/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata = {
  title: "Avantiqo",
  description: "AI Enterprise Operating System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} bg-[#03030A] text-white`}
      >
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}

function ConditionalLayout({ children }) {
  if (
    typeof window !== "undefined" &&
    (
      window.location.pathname.startsWith("/workspace") ||
      window.location.pathname.startsWith("/admin")
    )
  ) {
    return children;
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

import "./globals.css";

import { Inter, Outfit } from "next/font/google";

import Navbar from "@/components/layout/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "Avantiqo",
  description: "AI Enterprise Operating System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} bg-[#02040A] text-white`}
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

import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
})

export const metadata = {
  metadataBase: new URL("https://avantiqo.ai"),

  title: "Avantiqo — AI Enterprise Operating System",

  description:
    "AI-powered enterprise operating system connecting operations, finance, workforce, marketing, automation and business intelligence into one scalable platform.",

  keywords: [
    "AI operating system",
    "enterprise AI",
    "business automation",
    "hospitality software",
    "restaurant operating system",
    "AI payroll",
    "AI finance",
    "AI marketing",
    "enterprise infrastructure",
    "AI workforce management",
    "enterprise automation platform",
    "hospitality AI infrastructure",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Avantiqo — AI Enterprise Operating System",

    description:
      "Unified AI infrastructure for operations, finance, workforce, marketing and enterprise intelligence.",

    url: "https://avantiqo.ai",

    siteName: "Avantiqo",

    images: [
      {
        url: "/seo/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Avantiqo AI Enterprise Operating System",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Avantiqo — AI Enterprise Operating System",

    description:
      "Unified AI infrastructure for modern scalable organizations.",

    images: ["/seo/og-cover.jpg"],
  },

}

export const viewport = {
  themeColor: "#02030A",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
     <body className="bg-[#02030A] font-sans text-white antialiased">

  <Navbar />

  {children}

  <Footer />

</body>
    </html>
  )
}
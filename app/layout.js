import "./globals.css";

import Navbar from "@/components/layout/Navbar";

export const metadata = {
  title: "Avantiqo",
  description:
    "AI Enterprise Operating System",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className="bg-[#03030A] text-white">

        <ConditionalLayout>
          {children}
        </ConditionalLayout>

      </body>
    </html>
  );
}

function ConditionalLayout({
  children,
}) {
  if (
    typeof window !==
      "undefined" &&
    (
      window.location.pathname.startsWith(
        "/workspace"
      ) ||
      window.location.pathname.startsWith(
        "/admin"
      )
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
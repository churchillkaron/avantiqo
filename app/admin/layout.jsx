import PlatformSidebar from "@/components/platform/PlatformSidebar";

export default function PlatformLayout({
  children,
}) {
  return (
    <div className="min-h-screen bg-[#050407] text-white">

      <PlatformSidebar />

      <main className="ml-[260px] min-h-screen px-10 pt-14 pb-12">
        {children}
      </main>

    </div>
  );
}

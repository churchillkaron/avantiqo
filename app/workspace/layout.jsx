import WorkspaceSidebar from "@/components/workspace/WorkspaceSidebar";
import WorkspaceTopbar from "@/components/workspace/WorkspaceTopbar";

export default function WorkspaceLayout({
  children,
}) {
  return (
    <div className="min-h-screen bg-[#02040A] text-white">

      <WorkspaceSidebar />

      <main className="min-h-screen px-4 pb-28 pt-6 xl:ml-[320px] xl:px-10 xl:pb-10 xl:pt-25">

        <WorkspaceTopbar />

        {children}

      </main>

    </div>
  );
}

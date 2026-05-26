import WorkspaceSidebar from "@/components/workspace/WorkspaceSidebar";
import WorkspaceTopbar from "@/components/workspace/WorkspaceTopbar";

export default function WorkspaceLayout({
  children,
}) {
  return (
    <div className="min-h-screen bg-[#03030A] text-white">

      <WorkspaceSidebar />

      <main className="ml-[320px] min-h-screen px-10 pb-10 pt-25">

        <WorkspaceTopbar />

        {children}

      </main>

    </div>
  );
}

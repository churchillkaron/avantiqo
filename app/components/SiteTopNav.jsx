import Link from "next/link";

export default function SiteTopNav() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.05] bg-black/50 backdrop-blur-2xl">
      <div className="mx-auto flex h-[84px] max-w-[1600px] items-center justify-between px-6 md:px-10">

        <Link href="/" className="flex items-center gap-5">

          <img
            src="/avantiqo-logo.png"
            alt="Avantiqo"
            className="h-11 w-auto"
          />

          <div className="flex flex-col justify-center">

            <div className="text-[11px] font-medium tracking-[0.52em] text-[#D6A66A]/90 uppercase">
              Enterprise AI Operating System
            </div>

            <div className="mt-2 h-[1px] w-44 bg-gradient-to-r from-[#D6A66A] via-white/40 to-transparent" />

          </div>

        </Link>

        <nav className="hidden items-center gap-10 xl:flex">

          <Link
            href="/what-is-synthetic-intelligence"
            className="text-[14px] text-zinc-400 transition hover:text-white"
          >
            Platform
          </Link>

          <Link
            href="/industries"
            className="text-[14px] text-zinc-400 transition hover:text-white"
          >
            Industries
          </Link>

          <Link
            href="/what-is-synthetic-intelligence"
            className="text-[14px] text-zinc-400 transition hover:text-white"
          >
            AI Runtime
          </Link>

          <Link
            href="/security"
            className="text-[14px] text-zinc-400 transition hover:text-white"
          >
            Security
          </Link>

        </nav>

        <div className="flex items-center gap-3">

          <Link
            href="/login"
            className="rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 py-3 text-sm text-white transition hover:bg-white/[0.06]"
          >
            Login
          </Link>

          <Link
            href="/start"
            className="rounded-2xl bg-gradient-to-r from-[#f7e7b0] via-[#d7b66a] to-[#9d6b2f] px-6 py-3 text-sm font-bold tracking-[0.08em] text-black transition hover:scale-[1.02]"
          >
            START SETUP
          </Link>

        </div>

      </div>
    </header>
  );
}

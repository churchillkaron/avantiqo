export default function SetupCompleteModal({
  open,
  onClose,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md p-6">

      <div className="w-full max-w-2xl overflow-hidden rounded-[32px] border border-[#d7b66a]/20 bg-[#060816]/95 shadow-2xl shadow-black/60">

        <div className="relative p-10">

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#d7b66a]/10 via-transparent to-[#7c3aed]/10" />

          <div className="relative z-10">

            <div className="mb-6 flex items-center justify-center">

              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500/10 text-5xl text-emerald-300">
                ✓
              </div>

            </div>

            <div className="text-center">

              <div className="text-4xl font-bold text-white">
                Organization Infrastructure Initialized
              </div>

              <div className="mt-5 text-lg leading-relaxed text-zinc-400">

                Your organization workspace,
                verification status,
                selected modules,
                and onboarding configuration
                have been successfully registered.

              </div>

            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">

              <button
                onClick={onClose}
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white transition hover:bg-white/10"
              >
                Continue Setup
              </button>

              <button
                className="rounded-2xl bg-gradient-to-r from-[#d7b66a] to-[#7c3aed] px-6 py-4 font-semibold text-black transition hover:opacity-90"
              >
                Open Platform
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

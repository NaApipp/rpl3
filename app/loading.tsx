"use client"


export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-white/70 backdrop-blur">
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 rounded-full border-4 border-black/10 border-t-black/70 animate-spin motion-reduce:animate-none" />
        <p className="text-sm font-medium text-black/60">Sabar Lagi Loading…</p>
      </div>
    </div>

  );
}

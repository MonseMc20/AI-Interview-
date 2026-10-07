import type { View } from "../types";

export default function HomeScreen({ onNav }: { onNav: (v: View) => void }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex items-center justify-between px-8 py-5">
        <span className="font-display text-xl font-bold tracking-tight">
          prep<span className="text-[#4ade80]">.</span>ai
        </span>
        <div className="flex items-center gap-3">
          <button className="text-sm text-[#8a8a8a] hover:text-[#0a0a0a] transition-colors px-4 py-2">Log in</button>
          <button className="text-sm bg-[#0a0a0a] text-white px-4 py-2 hover:bg-[#333] transition-colors">Sign up</button>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 pb-24">
        <span className="font-mono text-xs text-[#4ade80] tracking-[0.2em] uppercase mb-10">
          AI-Powered Interview Preparation
        </span>
        <h1 className="font-display text-[clamp(3rem,8vw,7rem)] font-black leading-[0.92] tracking-tight mb-8 max-w-3xl">
          Land the job<br />
          <em className="font-light not-italic text-[#8a8a8a]">you deserve.</em>
        </h1>
        <p className="text-[#8a8a8a] text-lg max-w-md leading-relaxed mb-12 font-light">
          Practice interviews, analyze your CV, and get a full readiness report —
          all powered by AI that knows what hiring teams look for.
        </p>
        <button
          onClick={() => onNav("select")}
          className="bg-[#0a0a0a] text-white text-sm font-medium px-10 py-4 hover:bg-[#333] active:scale-[0.98] transition-all"
        >
          Try it
        </button>
      </main>

      <footer className="text-center pb-8">
        <span className="font-mono text-xs text-[#d4d4d4]">prep.ai — 2026</span>
      </footer>
    </div>
  );
}

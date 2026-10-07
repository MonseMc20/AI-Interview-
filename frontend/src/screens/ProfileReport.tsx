import type { View } from "../types";
import { STRENGTHS, FOCUS_AREAS, RECOMMENDATIONS } from "../constants/report";
import TopBar from "../components/layout/TopBar";
import ScoreRing from "../components/ui/ScoreRing";
import Section from "../components/ui/Section";

const ROW = "flex items-start gap-3 py-2.5 border-b border-[#f0f0f0] last:border-0";

export default function ProfileReport({ onNav }: { onNav: (v: View) => void }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar view="profile" onNav={onNav} title="Profile Report" />
      <main className="pt-20 pb-16 px-5 md:px-8 max-w-2xl mx-auto w-full">
        <div className="mb-10">
          <p className="font-mono text-xs text-[#8a8a8a] tracking-[0.15em] uppercase mb-2">Readiness report</p>
          <h2 className="font-display text-3xl font-black">Your results</h2>
        </div>

        <div className="border border-[#e5e5e5] p-6 mb-6">
          <p className="font-mono text-[10px] text-[#8a8a8a] tracking-widest uppercase mb-5">Overall scores</p>
          <div className="flex justify-around gap-4">
            <ScoreRing score={78} label="Interview" />
            <ScoreRing score={83} label="CV" />
            <ScoreRing score={80} label="Combined" />
          </div>
        </div>

        <Section label="Strengths" accent>
          {STRENGTHS.map((s, i) => (
            <div key={i} className={ROW}>
              <span className="w-4 h-4 bg-[#4ade80] flex items-center justify-center shrink-0 mt-0.5">
                <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                  <polyline points="1.5,5.5 4,8 8.5,2" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-sm text-[#0a0a0a]">{s}</span>
            </div>
          ))}
        </Section>

        <Section label="Focus areas">
          {FOCUS_AREAS.map((f, i) => (
            <div key={i} className={ROW}>
              <span className="w-4 h-4 border border-[#e5e5e5] flex items-center justify-center shrink-0 mt-0.5">
                <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                  <line x1="2" y1="5" x2="8" y2="5" stroke="#8a8a8a" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
              <span className="text-sm text-[#8a8a8a]">{f}</span>
            </div>
          ))}
        </Section>

        <Section label="Recommendations">
          {RECOMMENDATIONS.map((r, i) => (
            <div key={i} className={ROW}>
              <span className="font-mono text-[10px] text-[#d4d4d4] mt-0.5 shrink-0 w-4">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-sm text-[#0a0a0a]">{r}</span>
            </div>
          ))}
        </Section>

        <div className="mt-8 flex gap-3">
          <button onClick={() => onNav("interview")} className="flex-1 border border-[#0a0a0a] text-[#0a0a0a] text-sm font-medium py-3 hover:bg-[#0a0a0a] hover:text-white transition-colors">
            Practice interview
          </button>
          <button onClick={() => onNav("cv")} className="flex-1 bg-[#0a0a0a] text-white text-sm font-medium py-3 hover:bg-[#333] transition-colors">
            Improve CV
          </button>
        </div>
      </main>
    </div>
  );
}

import { useState } from "react";
import type { View } from "../types";
import { MODULE_CARDS } from "../constants/modules";
import TopBar from "../components/layout/TopBar";

export default function SelectScreen({ onNav }: { onNav: (v: View) => void }) {
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar view="select" onNav={onNav} />
      <main className="flex-1 flex flex-col items-center justify-center px-6 pt-14">
        <div className="w-full max-w-2xl">
          <p className="font-mono text-xs text-[#8a8a8a] tracking-[0.15em] uppercase mb-8">Choose a module</p>
          <div className="divide-y divide-[#e5e5e5] border-t border-b border-[#e5e5e5]">
            {MODULE_CARDS.map((card) => (
              <button
                key={card.view}
                onClick={() => onNav(card.view)}
                onMouseEnter={() => setHovered(card.view)}
                onMouseLeave={() => setHovered(null)}
                className="w-full text-left flex items-start gap-6 py-7 px-0 group transition-colors"
              >
                <span className="font-mono text-xs text-[#d4d4d4] pt-1 shrink-0 w-6">{card.num}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-display text-2xl font-black tracking-tight group-hover:text-[#0a0a0a] transition-colors">
                      {card.label}
                    </span>
                    <span className={`font-mono text-xs text-[#4ade80] tracking-widest transition-opacity duration-150 ${hovered === card.view ? "opacity-100" : "opacity-0"}`}>
                      →
                    </span>
                  </div>
                  <p className={`text-sm text-[#8a8a8a] leading-relaxed mt-2 transition-all duration-200 ${hovered === card.view ? "max-h-20 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
                    {card.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

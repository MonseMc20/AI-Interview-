import { useState, useRef } from "react";
import type { View } from "../types";
import { AI_CV_OPENERS } from "../constants/chat";
import { now, pickRandom } from "../utils/time";
import TopBar from "../components/layout/TopBar";
import ChatScreen from "../components/chat/ChatScreen";

export default function CVScreen({ onNav }: { onNav: (v: View) => void }) {
  const [uploaded, setUploaded] = useState(false);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  if (uploaded) {
    return (
      <ChatScreen
        view="cv"
        onNav={onNav}
        title="CV Analysis"
        initialMessages={[
          { role: "ai", text: pickRandom(AI_CV_OPENERS), time: now() },
          {
            role: "ai",
            text: "Ask me anything about your CV — structure, wording, skills section, or how to tailor it for a specific job.",
            time: now(),
          },
        ]}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar view="cv" onNav={onNav} title="CV Analysis" />
      <main className="flex-1 flex flex-col items-center justify-center px-6 pt-14">
        <div className="w-full max-w-sm">
          <p className="font-mono text-xs text-[#8a8a8a] tracking-[0.15em] uppercase mb-6">Upload your document</p>
          <div
            onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={(e) => { e.preventDefault(); setDragging(false); setUploaded(true); }}
            onClick={() => inputRef.current?.click()}
            className={`border-2 border-dashed cursor-pointer flex flex-col items-center justify-center py-16 px-8 text-center transition-colors ${
              dragging ? "border-[#4ade80] bg-[#f0fdf4]" : "border-[#e5e5e5] hover:border-[#0a0a0a]"
            }`}
          >
            <svg className="mb-4 text-[#d4d4d4]" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="12" y1="18" x2="12" y2="12" />
              <line x1="9" y1="15" x2="15" y2="15" />
            </svg>
            <p className="text-sm text-[#0a0a0a] font-medium mb-1">Drop your CV here</p>
            <p className="text-xs text-[#8a8a8a]">PDF, DOCX, or TXT · up to 5MB</p>
            <input ref={inputRef} type="file" accept=".pdf,.docx,.doc,.txt" className="hidden" onChange={() => setUploaded(true)} />
          </div>
          <button
            onClick={() => inputRef.current?.click()}
            className="w-full mt-4 bg-[#0a0a0a] text-white text-sm font-medium py-3 hover:bg-[#333] transition-colors"
          >
            Browse files
          </button>
        </div>
      </main>
    </div>
  );
}

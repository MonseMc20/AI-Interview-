interface Props {
  value: string;
  onChange: (v: string) => void;
  onSend: () => void;
  voiceActive: boolean;
  onToggleVoice: () => void;
}

export default function ChatInput({ value, onChange, onSend, voiceActive, onToggleVoice }: Props) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#e5e5e5] px-4 py-3">
      <div className="max-w-xl mx-auto flex items-center gap-2">
        <button
          onClick={onToggleVoice}
          className={`w-9 h-9 flex items-center justify-center shrink-0 border transition-colors ${
            voiceActive ? "border-[#4ade80] bg-[#f0fdf4]" : "border-[#e5e5e5] hover:border-[#0a0a0a]"
          }`}
          aria-label="Voice input"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={voiceActive ? "#4ade80" : "#8a8a8a"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="2" width="6" height="12" rx="3" />
            <path d="M5 10a7 7 0 0 0 14 0" />
            <line x1="12" y1="19" x2="12" y2="23" />
            <line x1="8" y1="23" x2="16" y2="23" />
          </svg>
        </button>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSend()}
          placeholder="Type your answer…"
          className="flex-1 border border-[#e5e5e5] px-3 py-2.5 text-sm text-[#0a0a0a] placeholder:text-[#d4d4d4] focus:outline-none focus:border-[#0a0a0a] transition-colors"
        />
        <button
          onClick={onSend}
          disabled={!value.trim()}
          className="w-9 h-9 flex items-center justify-center bg-[#0a0a0a] text-white disabled:opacity-30 hover:bg-[#333] transition-colors shrink-0"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </div>
    </div>
  );
}

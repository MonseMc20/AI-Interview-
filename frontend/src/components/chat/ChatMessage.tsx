import type { Message } from "../../types";

export default function ChatMessage({ msg }: { msg: Message }) {
  const isUser = msg.role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} gap-2 items-end`}>
      {!isUser && (
        <div className="w-6 h-6 bg-[#0a0a0a] rounded-full flex items-center justify-center shrink-0 mb-1">
          <span className="text-[#4ade80] text-[9px] font-mono font-bold">AI</span>
        </div>
      )}
      <div
        className={`max-w-[78%] px-4 py-3 text-sm leading-relaxed ${
          isUser ? "bg-[#0a0a0a] text-white" : "bg-[#f0f0f0] text-[#0a0a0a]"
        }`}
      >
        {msg.text}
        <div className={`text-[10px] mt-1.5 font-mono ${isUser ? "text-[#8a8a8a]" : "text-[#a3a3a3]"}`}>
          {msg.time}
        </div>
      </div>
    </div>
  );
}

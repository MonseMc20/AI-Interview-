import { useState, useRef, useEffect } from "react";
import type { Message, View } from "../../types";
import { AI_REPLIES } from "../../constants/chat";
import { now, pickRandom } from "../../utils/time";
import TopBar from "../layout/TopBar";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

interface Props {
  view: View;
  onNav: (v: View) => void;
  initialMessages: Message[];
  title: string;
}

export default function ChatScreen({ view, onNav, initialMessages, title }: Props) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [voiceActive, setVoiceActive] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function send() {
    const text = input.trim();
    if (!text) return;
    const userMsg: Message = { role: "user", text, time: now() };
    const aiReply: Message = { role: "ai", text: pickRandom(AI_REPLIES), time: now() };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTimeout(() => setMessages((m) => [...m, aiReply]), 1000);
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar view={view} onNav={onNav} title={title} />
      <div className="flex-1 overflow-y-auto pt-14 pb-[72px] px-4 md:px-6">
        <div className="max-w-xl mx-auto py-6 flex flex-col gap-4">
          {messages.map((msg, i) => (
            <ChatMessage key={i} msg={msg} />
          ))}
          <div ref={bottomRef} />
        </div>
      </div>
      <ChatInput
        value={input}
        onChange={setInput}
        onSend={send}
        voiceActive={voiceActive}
        onToggleVoice={() => setVoiceActive(!voiceActive)}
      />
    </div>
  );
}

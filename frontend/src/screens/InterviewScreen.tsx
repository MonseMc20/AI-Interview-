import { useState } from "react";
import type { InterviewConfig, Message, View } from "../types";
import { AI_INTERVIEW_OPENERS } from "../constants/chat";
import { now, pickRandom } from "../utils/time";
import TopBar from "../components/layout/TopBar";
import ChatScreen from "../components/chat/ChatScreen";
import InterviewSetupModal from "../components/interview/InterviewSetupModal";

export default function InterviewScreen({ onNav }: { onNav: (v: View) => void }) {
  const [config, setConfig] = useState<InterviewConfig | null>(null);

  if (!config) {
    return (
      <>
        <div className="min-h-screen flex flex-col bg-white">
          <TopBar view="interview" onNav={onNav} title="Interview" />
        </div>
        <InterviewSetupModal onStart={setConfig} />
      </>
    );
  }

  const initialMessages: Message[] = [
    {
      role: "ai",
      text: `Hi! I'll be your interviewer today. This is a ${config.difficulty} ${config.type} interview for a ${config.position} role in ${config.career}.`,
      time: now(),
    },
    { role: "ai", text: pickRandom(AI_INTERVIEW_OPENERS), time: now() },
  ];

  return (
    <ChatScreen
      view="interview"
      onNav={onNav}
      initialMessages={initialMessages}
      title={`${config.position} · ${config.type}`}
    />
  );
}

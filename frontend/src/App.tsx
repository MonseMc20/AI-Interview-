import { useState } from "react";
import type { View } from "./types";
import HomeScreen from "./screens/HomeScreen";
import SelectScreen from "./screens/SelectScreen";
import InterviewScreen from "./screens/InterviewScreen";
import CVScreen from "./screens/CVScreen";
import ProfileReport from "./screens/ProfileReport";

export default function App() {
  const [view, setView] = useState<View>("home");
  const nav = (v: View) => setView(v);

  switch (view) {
    case "home":
      return <HomeScreen onNav={nav} />;
    case "select":
      return <SelectScreen onNav={nav} />;
    case "interview":
      return <InterviewScreen onNav={nav} />;
    case "cv":
      return <CVScreen onNav={nav} />;
    case "profile":
      return <ProfileReport onNav={nav} />;
  }
}

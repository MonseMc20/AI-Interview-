export type View = "home" | "select" | "interview" | "cv" | "profile";

export interface Message {
  role: "user" | "ai";
  text: string;
  time: string;
}

export interface InterviewConfig {
  position: string;
  career: string;
  difficulty: string;
  type: string;
  description: string;
}

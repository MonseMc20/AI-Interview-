import { useState } from "react";
import type { InterviewConfig } from "../../types";
import Field from "../ui/Field";
import SelectField from "../ui/SelectField";

export default function InterviewSetupModal({ onStart }: { onStart: (cfg: InterviewConfig) => void }) {
  const [form, setForm] = useState<InterviewConfig>({
    position: "",
    career: "",
    difficulty: "",
    type: "",
    description: "",
  });

  const valid = form.position && form.career && form.difficulty && form.type;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[2px] px-4">
      <div className="bg-white w-full max-w-md shadow-2xl">
        <div className="border-b border-[#e5e5e5] px-6 py-5 flex items-center justify-between">
          <span className="font-display text-lg font-black">Set up your interview</span>
          <span className="font-mono text-xs text-[#8a8a8a]">prep.ai</span>
        </div>
        <div className="px-6 py-5 flex flex-col gap-4">
          <Field label="Job position" placeholder="e.g. Senior Product Designer" value={form.position} onChange={(v) => setForm({ ...form, position: v })} />
          <Field label="Career / industry" placeholder="e.g. UX Design, Software Engineering" value={form.career} onChange={(v) => setForm({ ...form, career: v })} />
          <div className="flex gap-3">
            <SelectField label="Difficulty" options={["Junior", "Mid-level", "Senior", "Executive"]} value={form.difficulty} onChange={(v) => setForm({ ...form, difficulty: v })} />
            <SelectField label="Interview type" options={["Behavioral", "Technical", "Case study", "Mixed"]} value={form.type} onChange={(v) => setForm({ ...form, type: v })} />
          </div>
          <div>
            <label className="block font-mono text-[10px] text-[#8a8a8a] tracking-widest uppercase mb-1.5">
              Description <span className="text-[#d4d4d4]">(optional)</span>
            </label>
            <textarea
              rows={3}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              placeholder="Describe the role, team, or department you're preparing for…"
              className="w-full border border-[#e5e5e5] px-3 py-2.5 text-sm text-[#0a0a0a] placeholder:text-[#d4d4d4] resize-none focus:outline-none focus:border-[#0a0a0a] transition-colors"
            />
          </div>
        </div>
        <div className="px-6 pb-6">
          <button
            disabled={!valid}
            onClick={() => onStart(form)}
            className="w-full bg-[#0a0a0a] text-white text-sm font-medium py-3.5 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#333] transition-colors active:scale-[0.99]"
          >
            Start interview
          </button>
        </div>
      </div>
    </div>
  );
}

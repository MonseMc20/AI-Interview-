import type { ReactNode } from "react";

interface Props {
  label: string;
  children: ReactNode;
  accent?: boolean;
}

export default function Section({ label, children, accent }: Props) {
  return (
    <div className="border border-[#e5e5e5] p-5 mb-4">
      <p className="font-mono text-[10px] text-[#8a8a8a] tracking-widest uppercase mb-4 flex items-center gap-2">
        {accent && <span className="inline-block w-2 h-2 bg-[#4ade80]" />}
        {label}
      </p>
      {children}
    </div>
  );
}

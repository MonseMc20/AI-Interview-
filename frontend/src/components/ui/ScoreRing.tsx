interface Props {
  score: number;
  label: string;
}

export default function ScoreRing({ score, label }: Props) {
  const r = 28;
  const circ = 2 * Math.PI * r;
  const dash = (score / 100) * circ;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-20 h-20">
        <svg width="80" height="80" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r={r} fill="none" stroke="#e5e5e5" strokeWidth="4" />
          <circle
            cx="40"
            cy="40"
            r={r}
            fill="none"
            stroke="#4ade80"
            strokeWidth="4"
            strokeDasharray={`${dash} ${circ}`}
            strokeLinecap="round"
            transform="rotate(-90 40 40)"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-display font-black text-lg">
          {score}
        </span>
      </div>
      <span className="font-mono text-[10px] text-[#8a8a8a] tracking-widest uppercase">{label}</span>
    </div>
  );
}

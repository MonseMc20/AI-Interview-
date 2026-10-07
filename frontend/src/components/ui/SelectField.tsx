interface Props {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}

export default function SelectField({ label, options, value, onChange }: Props) {
  return (
    <div className="flex-1">
      <label className="block font-mono text-[10px] text-[#8a8a8a] tracking-widest uppercase mb-1.5">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-[#e5e5e5] px-3 py-2.5 text-sm text-[#0a0a0a] bg-white focus:outline-none focus:border-[#0a0a0a] transition-colors appearance-none cursor-pointer"
      >
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

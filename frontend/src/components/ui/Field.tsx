interface Props {
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
}

export default function Field({ label, placeholder, value, onChange }: Props) {
  return (
    <div>
      <label className="block font-mono text-[10px] text-[#8a8a8a] tracking-widest uppercase mb-1.5">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full border border-[#e5e5e5] px-3 py-2.5 text-sm text-[#0a0a0a] placeholder:text-[#d4d4d4] focus:outline-none focus:border-[#0a0a0a] transition-colors"
      />
    </div>
  );
}

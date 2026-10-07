import { useState } from "react";
import type { View } from "../../types";
import { NAV_ITEMS } from "../../constants/navigation";

interface Props {
  current: View;
  onNav: (v: View) => void;
}

export default function BurgerMenu({ current, onNav }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative z-50">
      <button
        onClick={() => setOpen(!open)}
        className="w-9 h-9 flex flex-col justify-center gap-[6px] items-center group"
        aria-label="Menu"
      >
        <span className={`block w-5 h-px bg-[#0a0a0a] transition-all duration-200 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
        <span className={`block w-5 h-px bg-[#0a0a0a] transition-all duration-200 ${open ? "opacity-0" : ""}`} />
        <span className={`block w-5 h-px bg-[#0a0a0a] transition-all duration-200 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-11 z-50 w-52 bg-white border border-[#e5e5e5] shadow-sm py-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.view}
                onClick={() => {
                  onNav(item.view);
                  setOpen(false);
                }}
                className={`w-full text-left px-5 py-3 text-sm transition-colors ${
                  current === item.view
                    ? "text-[#0a0a0a] font-medium bg-[#f7f7f7]"
                    : "text-[#8a8a8a] hover:text-[#0a0a0a] hover:bg-[#f7f7f7]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

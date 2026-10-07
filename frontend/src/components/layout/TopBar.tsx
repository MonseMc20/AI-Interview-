import type { View } from "../../types";
import BurgerMenu from "./BurgerMenu";

interface Props {
  view: View;
  onNav: (v: View) => void;
  title?: string;
}

export default function TopBar({ view, onNav, title }: Props) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 h-14 border-b border-[#e5e5e5] bg-white/95 backdrop-blur-sm flex items-center px-5">
      <BurgerMenu current={view} onNav={onNav} />
      {title && (
        <span className="absolute left-1/2 -translate-x-1/2 text-sm font-medium tracking-wide text-[#0a0a0a]">
          {title}
        </span>
      )}
    </header>
  );
}

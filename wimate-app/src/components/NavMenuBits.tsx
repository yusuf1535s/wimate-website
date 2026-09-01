import { ChevronDown } from "lucide-react";
import type { NavBadge } from "../data/content";

export function NavBadgePill({ badge }: { badge?: NavBadge }) {
  if (!badge) return null;
  const isNew = badge === "New";
  return (
    <span
      className={`ml-auto inline-flex items-center rounded-full px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider ${
        isNew
          ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
          : "bg-wimate-50 text-wimate-700 ring-1 ring-wimate-500/30"
      }`}
    >
      {badge}
    </span>
  );
}

export function MegaArrow({ className = "" }: { className?: string }) {
  return <ChevronDown className={`h-3.5 w-3.5 ${className}`} />;
}

"use client";

import { cn } from "@/lib/cn";

interface ChipProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export function Chip({ label, active, onClick }: ChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "glass rounded-full border px-5 py-2 font-body text-sm transition-all",
        active
          ? "border-neon-gold text-ink shadow-glow-gold"
          : "border-glass-border text-ink-soft hover:text-ink"
      )}
    >
      {label}
    </button>
  );
}

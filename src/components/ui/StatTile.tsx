import { GlassCard } from "./GlassCard";
import type { StatItem } from "@/lib/types";

export function StatTile({ value, label }: StatItem) {
  return (
    <GlassCard className="px-4 py-4 text-left">
      <b className="block bg-grad-accent bg-clip-text font-display text-2xl text-transparent [font-variant-numeric:tabular-nums]">
        {value}
      </b>
      <span className="text-xs text-ink-dim">{label}</span>
    </GlassCard>
  );
}

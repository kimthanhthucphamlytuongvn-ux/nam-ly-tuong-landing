"use client";

import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { MushroomIcon } from "../icons/MushroomIcon";
import { LeafIcon } from "../icons/LeafIcon";
import type { Product } from "@/lib/types";

const icons = {
  mushroom: MushroomIcon,
  leaf: LeafIcon,
};

export function ProductCard({ product }: { product: Product }) {
  const Icon = icons[product.icon];

  return (
    <motion.div
      layout
      className="motion-reveal"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      whileHover={{ y: -4 }}
    >
      <GlassCard className="flex h-full flex-col overflow-hidden transition-shadow duration-300 hover:shadow-glow-gold">
        <div className="flex aspect-[4/3] items-center justify-center border-b border-glass-border bg-bg-1 [background-image:radial-gradient(120%_120%_at_30%_20%,rgba(233,183,92,0.16),transparent_60%)]">
          <Icon className="h-[44%] w-[44%] text-neon-gold opacity-90" />
        </div>
        <div className="flex flex-1 flex-col gap-1.5 p-[18px] pb-5">
          <span className="font-body text-[0.68rem] font-bold uppercase tracking-[0.1em] text-neon-bronze">
            {product.categoryLabel}
            {product.ocop && (
              <span className="ml-2 rounded-md bg-neon-gold-soft px-[0.55em] py-[0.2em] text-[0.62rem] font-bold tracking-[0.06em] text-[#2A1E06]">
                OCOP
              </span>
            )}
          </span>
          <h4 className="font-display text-[1.06rem] font-normal text-ink">{product.name}</h4>
          <p className="flex-1 text-[0.86rem] text-ink-dim">{product.desc}</p>
          <div className="mt-2.5 flex items-center justify-between">
            <span className="font-display text-[1.05rem] italic text-neon-gold [font-variant-numeric:tabular-nums]">
              {product.price}
            </span>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

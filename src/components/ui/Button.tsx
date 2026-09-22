"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "outline";

interface ButtonProps {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
  target?: string;
  rel?: string;
}

const base =
  "inline-flex items-center gap-2 whitespace-nowrap rounded-full px-7 py-3.5 font-body text-base tracking-wide transition-colors";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-neon-gold to-[#F4D48A] text-[#1B1404] font-bold shadow-glow-gold hover:shadow-glow-gold-strong",
  outline:
    "glass text-ink border border-glass-border hover:border-neon-gold hover:shadow-glow-gold",
};

/**
 * All buttons on the page (hotline CTAs, "Xem sản phẩm", filter/offer
 * links). Framer Motion drives the hover/tap micro-interaction; color,
 * glow and border transitions stay in Tailwind/CSS since they're cheaper
 * there and don't need JS.
 */
export function Button({
  href,
  variant = "primary",
  className,
  children,
  target,
  rel,
}: ButtonProps) {
  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      className={cn(base, variants[variant], className)}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {children}
    </motion.a>
  );
}

"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Distance (px) the element travels up while fading in. */
  y?: number;
}

/**
 * Scroll-triggered fade + rise-in, replacing the vanilla-JS
 * IntersectionObserver reveal from the static prototype.
 * `viewport={{ once: true }}` mirrors the old `io.unobserve()` — each
 * element animates in once, the first time it enters view.
 */
export function Reveal({ children, className, delay = 0, y = 22 }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

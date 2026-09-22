"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

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
 *
 * Reduced motion is handled in CSS (`.motion-reveal` in globals.css), not
 * with `useReducedMotion()` here: that hook only resolves the real value
 * on the client, so a server render (which always shows the pre-animation
 * `initial` state) and the client's first paint disagree — that
 * reproducibly threw a React hydration mismatch, and worse, "won't be
 * patched up" per React's own warning, i.e. real reduced-motion visitors
 * could get stuck at `opacity:0`. A CSS media query can't disagree with
 * itself between server and client, so it can't reproduce that failure.
 */
export function Reveal({ children, className, delay = 0, y = 22 }: RevealProps) {
  return (
    <motion.div
      className={cn("motion-reveal", className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

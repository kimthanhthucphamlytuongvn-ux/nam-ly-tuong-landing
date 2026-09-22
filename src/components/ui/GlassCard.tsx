import type { ElementType, ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface GlassCardProps<T extends ElementType> {
  as?: T;
  className?: string;
  children: ReactNode;
}

/**
 * Shared "glass" surface: translucent blurred panel with a thin neon
 * gradient ring (defined once as `.glass` in globals.css, since the
 * border-gradient mask trick isn't expressible cleanly as Tailwind
 * utilities). Used by every card-like block across the page.
 */
export function GlassCard<T extends ElementType = "div">({
  as,
  className,
  children,
  ...rest
}: GlassCardProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof GlassCardProps<T>>) {
  const Component = as || "div";
  return (
    <Component className={cn("glass", className)} {...rest}>
      {children}
    </Component>
  );
}

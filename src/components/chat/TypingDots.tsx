const DOTS = [0, 1, 2];

/**
 * Three-dot "assistant is typing" indicator, shown while the stream has
 * been requested but no token has arrived yet. Pure CSS animation (not
 * Framer Motion) so it costs nothing to keep mounted/unmounted rapidly as
 * chunks start arriving, and `prefers-reduced-motion` already disables it
 * globally via the app-wide animation-duration override in globals.css.
 */
export function TypingDots() {
  return (
    <span className="inline-flex items-center gap-1" aria-label="Trợ lý đang trả lời">
      {DOTS.map((i) => (
        <span
          key={i}
          className="h-[6px] w-[6px] animate-bounce rounded-full bg-neon-gold"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </span>
  );
}

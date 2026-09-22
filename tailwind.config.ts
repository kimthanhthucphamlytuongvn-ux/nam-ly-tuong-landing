import type { Config } from "tailwindcss";

/**
 * All color/shadow/radius tokens are aliased to CSS custom properties
 * defined once in `src/app/globals.css` (`:root`). Keep that file as the
 * single source of truth for the design system; this file only exposes
 * those tokens as Tailwind utilities (bg-ink, text-neon-gold, shadow-glow-gold, ...).
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-1": "var(--bg-1)",
        "bg-2": "var(--bg-2)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        "ink-dim": "var(--ink-dim)",
        glass: "var(--glass)",
        "glass-strong": "var(--glass-strong)",
        "glass-border": "var(--glass-border)",
        "neon-gold": "var(--neon-gold)",
        "neon-gold-soft": "var(--neon-gold-soft)",
        "neon-bronze": "var(--neon-bronze)",
        "neon-bronze-soft": "var(--neon-bronze-soft)",
      },
      fontFamily: {
        display: ["var(--font-tinos)", "Times New Roman", "Times", "Georgia", "serif"],
        body: ["var(--font-tinos)", "Times New Roman", "Times", "Georgia", "serif"],
      },
      borderRadius: {
        lg: "26px",
        md: "18px",
        sm: "12px",
      },
      boxShadow: {
        "glow-gold":
          "0 0 1px rgba(233,183,92,.9), 0 0 46px -6px rgba(233,183,92,.55), 0 0 110px -24px rgba(233,183,92,.4)",
        "glow-gold-strong":
          "0 0 1px rgba(233,183,92,1), 0 0 70px -6px rgba(233,183,92,.75)",
      },
      backgroundImage: {
        "grad-accent": "linear-gradient(120deg, var(--neon-bronze), var(--neon-gold))",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(30px,-24px) scale(1.08)" },
        },
      },
      animation: {
        drift: "drift 26s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

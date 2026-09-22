/**
 * Fixed, decorative ambient neon blobs behind the whole page.
 * z-[-1] keeps them behind normal in-flow content (a plain z-0 fixed
 * element would otherwise paint *above* static content — see the
 * CSS stacking-order note in the README).
 */
export function AmbientGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <span className="ambient-blob left-[-120px] top-[-180px] h-[560px] w-[560px] animate-drift bg-neon-green opacity-[0.55]" />
      <span
        className="ambient-blob right-[-200px] top-[20%] h-[520px] w-[520px] animate-drift bg-neon-gold opacity-[0.55]"
        style={{ animationDelay: "-6s" }}
      />
      <span
        className="ambient-blob bottom-[-260px] left-[20%] h-[600px] w-[600px] animate-drift bg-neon-green opacity-[0.35]"
        style={{ animationDelay: "-13s" }}
      />
    </div>
  );
}

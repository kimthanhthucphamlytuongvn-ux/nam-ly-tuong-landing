import type { SVGProps } from "react";

export function LeafIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <path
        fill="currentColor"
        d="M56 8C30 8 10 26 10 48c0 3.3 2.7 6 6 6 22 0 40-20 40-46Z"
      />
      <path
        stroke="var(--bg)"
        strokeWidth={2}
        fill="none"
        opacity={0.55}
        d="M18 46C30 34 42 22 54 12"
      />
    </svg>
  );
}

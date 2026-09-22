import type { SVGProps } from "react";

export function MushroomIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <path
        fill="currentColor"
        d="M32 6C15 6 8 20 8 28c0 3 2 5 5 5h38c3 0 5-2 5-5 0-8-7-22-24-22Z"
      />
      <path
        fill="currentColor"
        opacity={0.55}
        d="M25 33h14l-2 20a5 5 0 0 1-5 5h0a5 5 0 0 1-5-5l-2-20Z"
      />
    </svg>
  );
}

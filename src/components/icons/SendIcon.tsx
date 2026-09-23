import type { SVGProps } from "react";

export function SendIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M4 12 20 4l-4.5 16-4-6.5L4 12Z"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M11.5 13.5 20 4" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
    </svg>
  );
}

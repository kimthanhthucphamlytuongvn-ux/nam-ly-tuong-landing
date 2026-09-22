import type { SVGProps } from "react";

export function BadgeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path fill="currentColor" d="M12 1 3 5v6c0 5.2 3.8 9.9 9 11 5.2-1.1 9-5.8 9-11V5l-9-4Z" />
      <path
        d="M8.5 12.5l2.3 2.3L16 9.6"
        stroke="#06100B"
        strokeWidth={1.8}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

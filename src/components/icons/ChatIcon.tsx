import type { SVGProps } from "react";

export function ChatIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        d="M4 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H10l-4.4 3.3A1 1 0 0 1 4 18.5V16a3 3 0 0 1-.9-.1A3 3 0 0 1 3 13V5Z"
        opacity={0.95}
      />
      <circle cx="8.5" cy="9.5" r="1.15" fill="var(--bg)" />
      <circle cx="12" cy="9.5" r="1.15" fill="var(--bg)" />
      <circle cx="15.5" cy="9.5" r="1.15" fill="var(--bg)" />
    </svg>
  );
}

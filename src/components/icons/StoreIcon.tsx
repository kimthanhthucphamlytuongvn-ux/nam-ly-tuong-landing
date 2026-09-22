import type { SVGProps } from "react";

export function StoreIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        d="M3 9l1.5-5h15L21 9v2a2.5 2.5 0 0 1-4.5 1.5A2.5 2.5 0 0 1 12 12a2.5 2.5 0 0 1-4.5.5A2.5 2.5 0 0 1 3 11V9Z"
      />
      <path
        fill="currentColor"
        opacity={0.6}
        d="M4 12.8V21h16v-8.2c-.7.4-1.6.7-2.5.7-1 0-1.9-.3-2.6-.9-.7.6-1.6.9-2.6.9s-1.9-.3-2.6-.9c-.7.6-1.6.9-2.6.9-.9 0-1.8-.3-2.5-.7Z"
      />
    </svg>
  );
}

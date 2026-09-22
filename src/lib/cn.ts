/**
 * Minimal className combiner (filters out falsy values, joins with a
 * space). Intentionally dependency-free — swap for `clsx` + `tailwind-merge`
 * if the project's class lists grow complex enough to need conflict
 * resolution.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

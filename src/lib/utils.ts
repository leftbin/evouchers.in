import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: (string | undefined | null | false)[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Formats a number in the Indian numbering system (lakhs/crores).
 * Example: 123456 -> "1,23,456"
 */
export function formatINR(amount: number): string {
  const str = Math.abs(amount).toFixed(0);
  const lastThree = str.slice(-3);
  const rest = str.slice(0, -3);
  const formatted = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",") +
    (rest ? "," : "") +
    lastThree;
  return amount < 0 ? `-₹${formatted}` : `₹${formatted}`;
}

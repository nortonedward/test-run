import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind classes with clsx. Use for conditional classes to prevent conflicts.
 */
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

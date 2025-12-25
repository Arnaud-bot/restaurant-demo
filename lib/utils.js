// Utility function for merging Tailwind CSS classes
// Combines clsx (conditional class names) with twMerge (Tailwind class conflict resolution)

// clsx: Conditionally joins classNames together
// Example: clsx('foo', { bar: true }) => 'foo bar'
import { clsx } from "clsx"

// twMerge: Intelligently merges Tailwind CSS classes
// Resolves conflicts (e.g., 'p-2 p-4' becomes 'p-4')
import { twMerge } from "tailwind-merge"
 
// cn (className) - Utility function for combining class names
// This is a common pattern in React/Next.js projects using Tailwind
// 
// Usage examples:
// cn('px-2 py-1', 'bg-red-500') => 'px-2 py-1 bg-red-500'
// cn('p-2', 'p-4') => 'p-4' (twMerge resolves conflict)
// cn('foo', condition && 'bar') => 'foo bar' or 'foo' (clsx handles conditionals)
//
// Parameters: ...inputs - Any number of class name strings, objects, or arrays
// Returns: Merged and deduplicated class name string
export function cn(...inputs) {
  // First clsx combines all inputs, then twMerge resolves Tailwind conflicts
  return twMerge(clsx(inputs))
}

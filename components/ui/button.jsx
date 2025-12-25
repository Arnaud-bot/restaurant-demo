import * as React from "react"
// Radix UI Slot - allows button to render as different element (e.g., Link)
import { Slot } from "@radix-ui/react-slot"
// CVA (Class Variance Authority) - type-safe variant system for Tailwind
// Allows creating components with multiple style variants
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

// Button Variants Configuration
// cva() creates a function that returns class names based on variant props
// Base classes: Applied to all button variants
// Variants: Different style options (variant and size)
const buttonVariants = cva(
  // Base Classes - common styles for all buttons
  // inline-flex: Makes button inline flex container
  // focus-visible: Accessibility - shows focus ring when keyboard navigating
  // disabled: Styles for disabled state
  "inline-flex items-center justify-center whitespace-nowrap text-base font-semibold ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50",
  {
    // Variant Definitions
    variants: {
      // Color/Theme Variants
      variant: {
        default: "text-white bg-green hover:bg-green-hover",  // Primary green button
        orange: "text-white bg-orange hover:bg-orange-hover",  // Orange accent button
        input: "bg-white/5 border border-white/10 text-white",  // Input-style button (transparent)
      },
      // Size Variants
      size: {
        default: "w-[170px] h-[62px] px-6",  // Standard button size
        sm: "w-[150px] h-[58px] px-6"  // Small button size
      },
    },
    // Default Variants - used when no variant/size prop is provided
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

// Button Component
// React.forwardRef: Allows parent components to access button's DOM element via ref
// This is useful for focus management, animations, or third-party library integration
const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  // asChild: When true, renders as Slot (can become any element like Link)
  // When false, renders as standard <button> element
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      // cn() merges base classes, variant classes, and custom className prop
      // buttonVariants() returns appropriate classes based on variant and size props
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}  // Forward ref to underlying element
      {...props}  // Spread remaining props (onClick, children, etc.)
    />)
  );
})
// displayName: Helps with React DevTools debugging
Button.displayName = "Button"

export { Button, buttonVariants }

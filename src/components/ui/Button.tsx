import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50",
          {
            // Variants
            "bg-white text-black hover:bg-gray-200": variant === "primary",
            "bg-black text-white border border-white/20 hover:bg-white/10": variant === "secondary",
            "border border-white/30 text-white hover:bg-white hover:text-black": variant === "outline",
            "text-white hover:bg-white/10": variant === "ghost",
            
            // Sizes
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
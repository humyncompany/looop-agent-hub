"use client";

import { cn } from "@/lib/utils/cn";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-looop-blue/50 disabled:opacity-50 disabled:pointer-events-none",
          {
            "bg-looop-blue text-white hover:bg-looop-blue/90":
              variant === "primary",
            "bg-looop-navy text-white hover:bg-looop-navy/90":
              variant === "secondary",
            "bg-transparent text-looop-navy hover:bg-looop-navy/5":
              variant === "ghost",
            "bg-status-offline text-white hover:bg-status-offline/90":
              variant === "danger",
          },
          {
            "px-3 py-1.5 text-sm": size === "sm",
            "px-4 py-2 text-sm": size === "md",
            "px-6 py-3 text-base": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };

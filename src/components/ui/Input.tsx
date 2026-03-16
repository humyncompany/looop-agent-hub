"use client";

import { cn } from "@/lib/utils/cn";
import { type InputHTMLAttributes, forwardRef } from "react";

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "w-full rounded-lg border border-looop-sand/50 bg-white px-4 py-2.5 text-sm text-looop-navy placeholder:text-looop-sand transition-colors focus:border-looop-blue focus:outline-none focus:ring-2 focus:ring-looop-blue/20",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

export { Input };

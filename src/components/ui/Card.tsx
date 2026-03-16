import { cn } from "@/lib/utils/cn";
import { type HTMLAttributes, forwardRef } from "react";

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border border-looop-sand/30 bg-white p-6 shadow-sm transition-shadow hover:shadow-md",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

export { Card };

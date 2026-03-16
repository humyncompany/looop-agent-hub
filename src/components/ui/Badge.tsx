import { cn } from "@/lib/utils/cn";

interface BadgeProps {
  variant?: "default" | "online" | "degraded" | "offline" | "sandbox";
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant = "default", children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold",
        {
          "bg-looop-navy/10 text-looop-navy": variant === "default",
          "bg-status-online/10 text-status-online": variant === "online",
          "bg-status-degraded/10 text-status-degraded": variant === "degraded",
          "bg-status-offline/10 text-status-offline": variant === "offline",
          "bg-looop-teal/10 text-looop-teal": variant === "sandbox",
        },
        className
      )}
    >
      {children}
    </span>
  );
}

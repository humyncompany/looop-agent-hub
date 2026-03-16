import { cn } from "@/lib/utils/cn";
import type { AgentStatus } from "@/lib/constants";

interface AgentStatusDotProps {
  status: AgentStatus;
  size?: "sm" | "md";
}

export function AgentStatusDot({ status, size = "md" }: AgentStatusDotProps) {
  return (
    <span
      className={cn("inline-block rounded-full", {
        "h-2.5 w-2.5": size === "sm",
        "h-3 w-3": size === "md",
        "bg-status-online animate-pulse-online": status === "online",
        "bg-status-degraded": status === "degraded",
        "bg-status-offline": status === "offline",
      })}
      title={status === "online" ? "Online" : status === "degraded" ? "Verstoord" : "Offline"}
    />
  );
}

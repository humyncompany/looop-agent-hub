"use client";

import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { AgentStatusDot } from "@/components/agents/AgentStatusDot";
import type { MockAgent } from "@/lib/mock-data";
import { useState } from "react";

interface AgentCardProps {
  agent: MockAgent;
}

function timeAgo(dateStr: string | null): string {
  if (!dateStr) return "Nooit";
  const diff = Date.now() - new Date(dateStr).getTime();
  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return "Zojuist";
  if (minutes < 60) return `${minutes}m geleden`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}u geleden`;
  return `${Math.floor(hours / 24)}d geleden`;
}

export function AgentCard({ agent }: AgentCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Card className="relative flex flex-col gap-4 cursor-pointer group">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{agent.icon}</span>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-looop-navy group-hover:text-looop-blue transition-colors">
                {agent.name}
              </h3>
              <AgentStatusDot status={agent.status} />
            </div>
            <p className="text-xs text-looop-navy/50 mt-0.5">
              Laatste heartbeat: {timeAgo(agent.last_heartbeat)}
            </p>
          </div>
        </div>

        {/* Favorite toggle */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          className="text-lg hover:scale-110 transition-transform"
          aria-label={isFavorite ? "Verwijder uit favorieten" : "Voeg toe aan favorieten"}
        >
          {isFavorite ? "★" : "☆"}
        </button>
      </div>

      {/* Description */}
      <p className="text-sm text-looop-navy/70 leading-relaxed line-clamp-2">
        {agent.description}
      </p>

      {/* Footer */}
      <div className="flex items-center gap-2 mt-auto">
        <Badge
          variant={
            agent.status === "online"
              ? "online"
              : agent.status === "degraded"
              ? "degraded"
              : "offline"
          }
        >
          {agent.status === "online"
            ? "Live"
            : agent.status === "degraded"
            ? "Verstoord"
            : "Offline"}
        </Badge>
        {agent.sandbox_enabled && <Badge variant="sandbox">Sandbox</Badge>}
        {agent.make_scenario_id && (
          <Badge>Make #{agent.make_scenario_id}</Badge>
        )}
      </div>
    </Card>
  );
}

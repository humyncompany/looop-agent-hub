"use client";

import { Input } from "@/components/ui/Input";
import type { AgentStatus } from "@/lib/constants";

interface AgentFilterProps {
  search: string;
  onSearchChange: (value: string) => void;
  statusFilter: AgentStatus | "all";
  onStatusFilterChange: (value: AgentStatus | "all") => void;
  showFavoritesOnly: boolean;
  onFavoritesToggle: () => void;
}

export function AgentFilter({
  search,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
}: AgentFilterProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <div className="flex-1">
        <Input
          placeholder="Zoek agent..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <select
        value={statusFilter}
        onChange={(e) =>
          onStatusFilterChange(e.target.value as AgentStatus | "all")
        }
        className="rounded-lg border border-looop-sand/50 bg-white px-4 py-2.5 text-sm text-looop-navy focus:border-looop-blue focus:outline-none focus:ring-2 focus:ring-looop-blue/20"
      >
        <option value="all">Alle statussen</option>
        <option value="online">Online</option>
        <option value="degraded">Verstoord</option>
        <option value="offline">Offline</option>
      </select>
    </div>
  );
}

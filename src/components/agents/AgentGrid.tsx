"use client";

import { useState } from "react";
import { AgentCard } from "@/components/agents/AgentCard";
import { AgentFilter } from "@/components/agents/AgentFilter";
import { mockAgents } from "@/lib/mock-data";
import type { AgentStatus } from "@/lib/constants";

export function AgentGrid() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<AgentStatus | "all">("all");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const filteredAgents = mockAgents.filter((agent) => {
    const matchesSearch =
      agent.name.toLowerCase().includes(search.toLowerCase()) ||
      agent.description.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || agent.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <AgentFilter
        search={search}
        onSearchChange={setSearch}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
        showFavoritesOnly={showFavoritesOnly}
        onFavoritesToggle={() => setShowFavoritesOnly(!showFavoritesOnly)}
      />

      {filteredAgents.length === 0 ? (
        <div className="text-center py-12 text-looop-navy/50">
          <p className="text-lg">Geen agents gevonden</p>
          <p className="text-sm mt-1">Pas je filters aan of zoek op een andere term</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredAgents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      )}
    </div>
  );
}

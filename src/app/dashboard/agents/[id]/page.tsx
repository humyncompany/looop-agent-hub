import { Topbar } from "@/components/layout/Topbar";
import { Badge } from "@/components/ui/Badge";
import { AgentStatusDot } from "@/components/agents/AgentStatusDot";
import { mockAgents } from "@/lib/mock-data";
import { notFound } from "next/navigation";

interface AgentDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function AgentDetailPage({ params }: AgentDetailPageProps) {
  const { id } = await params;
  const agent = mockAgents.find((a) => a.id === id);

  if (!agent) {
    notFound();
  }

  return (
    <>
      <Topbar title={agent.name} />
      <div className="p-6 space-y-6">
        {/* Agent header */}
        <div className="rounded-xl border border-looop-sand/20 bg-white p-6">
          <div className="flex items-start gap-4">
            <span className="text-4xl">{agent.icon}</span>
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold text-looop-navy">
                  {agent.name}
                </h2>
                <AgentStatusDot status={agent.status} />
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
                {agent.sandbox_enabled && (
                  <Badge variant="sandbox">Sandbox</Badge>
                )}
              </div>
              <p className="text-sm text-looop-navy/60 mt-2">
                {agent.description}
              </p>
            </div>
          </div>

          {/* Agent details table */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-xs text-looop-navy/40">Make Scenario</p>
              <p className="text-sm font-bold text-looop-navy mt-0.5">
                {agent.make_scenario_id
                  ? `#${agent.make_scenario_id}`
                  : "Niet gekoppeld"}
              </p>
            </div>
            <div>
              <p className="text-xs text-looop-navy/40">Laatste heartbeat</p>
              <p className="text-sm font-bold text-looop-navy mt-0.5">
                {agent.last_heartbeat
                  ? new Date(agent.last_heartbeat).toLocaleString("nl-NL")
                  : "Nooit"}
              </p>
            </div>
            <div>
              <p className="text-xs text-looop-navy/40">Sandbox</p>
              <p className="text-sm font-bold text-looop-navy mt-0.5">
                {agent.sandbox_enabled ? "Aan" : "Uit"}
              </p>
            </div>
            <div>
              <p className="text-xs text-looop-navy/40">Runs vandaag</p>
              <p className="text-sm font-bold text-looop-navy mt-0.5">—</p>
            </div>
          </div>
        </div>

        {/* Run history placeholder */}
        <div className="rounded-xl border border-looop-sand/20 bg-white p-6">
          <h3 className="font-bold text-looop-navy mb-4">Run History</h3>
          <div className="text-center py-8 text-looop-navy/40">
            <p>Nog geen runs geregistreerd</p>
            <p className="text-xs mt-1 text-looop-teal">
              Run history wordt beschikbaar in Fase 5
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

import { Topbar } from "@/components/layout/Topbar";
import { AgentGrid } from "@/components/agents/AgentGrid";

export default function DashboardPage() {
  return (
    <>
      <Topbar title="Agent Overzicht" />
      <div className="p-6">
        {/* Stats summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="rounded-xl bg-white border border-looop-sand/20 p-4">
            <p className="text-sm text-looop-navy/50">Totaal agents</p>
            <p className="text-2xl font-bold text-looop-navy mt-1">7</p>
          </div>
          <div className="rounded-xl bg-white border border-looop-sand/20 p-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-status-online animate-pulse-online" />
              <p className="text-sm text-looop-navy/50">Online</p>
            </div>
            <p className="text-2xl font-bold text-status-online mt-1">5</p>
          </div>
          <div className="rounded-xl bg-white border border-looop-sand/20 p-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-status-offline" />
              <p className="text-sm text-looop-navy/50">Aandacht nodig</p>
            </div>
            <p className="text-2xl font-bold text-status-offline mt-1">2</p>
          </div>
        </div>

        <AgentGrid />
      </div>
    </>
  );
}

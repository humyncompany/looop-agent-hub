import type { AgentStatus } from "@/lib/constants";

export interface MockAgent {
  id: string;
  name: string;
  description: string;
  icon: string;
  status: AgentStatus;
  last_heartbeat: string | null;
  make_scenario_id: string | null;
  sandbox_enabled: boolean;
}

export interface MockUser {
  id: string;
  email: string;
  full_name: string;
  role: "admin" | "employee";
}

export const mockAgents: MockAgent[] = [
  {
    id: "1",
    name: "Offerte Agent",
    description:
      "Genereert automatisch branded Looop Renewables offertes vanuit leveranciersspecificaties via email. Inclusief PDF met productspecs, branding en disclaimer.",
    icon: "📄",
    status: "online",
    last_heartbeat: new Date(Date.now() - 2 * 60 * 1000).toISOString(),
    make_scenario_id: "4788093",
    sandbox_enabled: false,
  },
  {
    id: "2",
    name: "Inbox Orchestrator",
    description:
      "Monitort de inbox en routeert inkomende emails naar de juiste agent op basis van onderwerp-tags en inhoud.",
    icon: "📬",
    status: "online",
    last_heartbeat: new Date(Date.now() - 3 * 60 * 1000).toISOString(),
    make_scenario_id: "4736454",
    sandbox_enabled: false,
  },
  {
    id: "3",
    name: "ISCC Adviseur",
    description:
      "Beantwoordt vragen over ISCC-certificering (EU, PLUS, CORSIA) op basis van 60+ officiele ISCC-systeemdocumenten. Vervangt externe consultants (€152,50/uur).",
    icon: "📋",
    status: "online",
    last_heartbeat: new Date(Date.now() - 1 * 60 * 1000).toISOString(),
    make_scenario_id: null,
    sandbox_enabled: false,
  },
  {
    id: "4",
    name: "Newsletter Agent",
    description:
      "Verzamelt dagelijks biogas, biomassa en feedstock nieuws en genereert een beknopte Market Update voor het Looop-team.",
    icon: "📰",
    status: "degraded",
    last_heartbeat: new Date(Date.now() - 45 * 60 * 1000).toISOString(),
    make_scenario_id: "4847210",
    sandbox_enabled: false,
  },
  {
    id: "5",
    name: "Document Parser",
    description:
      "Extraheert productspecificaties uit PDF's, afbeeldingen en gescande documenten voor automatische verwerking.",
    icon: "🔍",
    status: "offline",
    last_heartbeat: null,
    make_scenario_id: null,
    sandbox_enabled: true,
  },
  {
    id: "6",
    name: "Price Monitor",
    description:
      "Monitort marktprijzen voor UCO, tallow, poultry fat en biomassa. Stuurt alerts bij significante prijswijzigingen.",
    icon: "📊",
    status: "offline",
    last_heartbeat: null,
    make_scenario_id: null,
    sandbox_enabled: true,
  },
];

export const mockUser: MockUser = {
  id: "mock-user-1",
  email: "bart@looop.company",
  full_name: "Bart Oosterbosch",
  role: "admin",
};

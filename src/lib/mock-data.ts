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
    id: "3",
    name: "Newsletter Agent",
    description:
      "Verzamelt dagelijks biogas, biomassa en feedstock nieuws en genereert een beknopte Market Update voor het Looop-team.",
    icon: "📰",
    status: "online",
    last_heartbeat: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
    make_scenario_id: "4847210",
    sandbox_enabled: false,
  },
  {
    id: "4",
    name: "Market Price Tracker",
    description:
      "Monitort realtime marktprijzen voor UCO, tallow, poultry fat en biomassa pellets. Vergelijkt met concurrenten en stuurt alerts bij significante prijswijzigingen.",
    icon: "📊",
    status: "offline",
    last_heartbeat: null,
    make_scenario_id: null,
    sandbox_enabled: true,
  },
  {
    id: "5",
    name: "Supplier Screener",
    description:
      "Controleert automatisch of nieuwe leveranciers ISCC-gecertificeerd zijn, verifieert bedrijfsgegevens en compliance-documenten voor due diligence.",
    icon: "🔎",
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

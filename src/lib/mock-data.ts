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
      "Genereert automatisch branded Looop Renewables offertes vanuit leveranciersspecificaties via email.",
    icon: "📄",
    status: "online",
    last_heartbeat: new Date(Date.now() - 2 * 60 * 1000).toISOString(),
    make_scenario_id: "4736454",
    sandbox_enabled: false,
  },
  {
    id: "2",
    name: "Email Classifier",
    description:
      "Classificeert inkomende emails op basis van onderwerp en routeert ze naar de juiste agent.",
    icon: "📬",
    status: "degraded",
    last_heartbeat: new Date(Date.now() - 8 * 60 * 1000).toISOString(),
    make_scenario_id: null,
    sandbox_enabled: false,
  },
  {
    id: "3",
    name: "Document Parser",
    description:
      "Extraheert productspecificaties uit PDF's, afbeeldingen en gescande documenten.",
    icon: "🔍",
    status: "offline",
    last_heartbeat: null,
    make_scenario_id: null,
    sandbox_enabled: true,
  },
  {
    id: "4",
    name: "Price Monitor",
    description:
      "Monitort marktprijzen voor biomassa, UCO en tallow en stuurt alerts bij significante wijzigingen.",
    icon: "📊",
    status: "online",
    last_heartbeat: new Date(Date.now() - 1 * 60 * 1000).toISOString(),
    make_scenario_id: null,
    sandbox_enabled: false,
  },
  {
    id: "6",
    name: "ISCC Adviseur",
    description:
      "Beantwoordt vragen over ISCC-certificering (EU, PLUS, CORSIA) op basis van officiele ISCC-systeemdocumenten.",
    icon: "📋",
    status: "online",
    last_heartbeat: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
    make_scenario_id: null,
    sandbox_enabled: false,
  },
  {
    id: "7",
    name: "Newsletter Agent",
    description:
      "Verzamelt dagelijks biogas, biomassa en feedstock nieuws en genereert een beknopte Market Update voor het team.",
    icon: "📰",
    status: "online",
    last_heartbeat: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
    make_scenario_id: null,
    sandbox_enabled: false,
  },
];

export const mockUser: MockUser = {
  id: "mock-user-1",
  email: "bart@looop.company",
  full_name: "Bart Oosterbosch",
  role: "admin",
};

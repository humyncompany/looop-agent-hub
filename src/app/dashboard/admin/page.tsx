import { Topbar } from "@/components/layout/Topbar";

export default function AdminPage() {
  return (
    <>
      <Topbar title="Admin Panel" />
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              icon: "👥",
              title: "Gebruikers",
              desc: "Beheer medewerkers, rollen en uitnodigingen",
              phase: "Fase 7",
            },
            {
              icon: "⚡",
              title: "Agents",
              desc: "Configureer agents, secrets en scenario koppelingen",
              phase: "Fase 7",
            },
            {
              icon: "💬",
              title: "Feedback",
              desc: "Bekijk en triage alle ingediende feedback",
              phase: "Fase 7",
            },
            {
              icon: "📋",
              title: "Audit Log",
              desc: "Alle admin acties chronologisch bekijken",
              phase: "Fase 7",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-looop-sand/20 bg-white p-6"
            >
              <span className="text-3xl">{item.icon}</span>
              <h3 className="font-bold text-looop-navy mt-3">{item.title}</h3>
              <p className="text-sm text-looop-navy/50 mt-1">{item.desc}</p>
              <p className="text-xs text-looop-teal mt-3">{item.phase}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

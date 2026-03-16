import { Topbar } from "@/components/layout/Topbar";

const mockNewsletters = [
  {
    id: "1",
    date: "16 maart 2026",
    title: "UCO-prijzen stijgen door EU-importbeperkingen",
    summary:
      "Europese UCO-prijzen bereiken nieuw hoogtepunt na aanscherping importregels. RED III-implementatie drijft vraag naar gecertificeerde feedstocks omhoog.",
    topStories: [
      "EU verscherpt controle op UCO-importen uit Azie — fraudepreventie centraal",
      "Fastmarkets: UCO CIF ARA stijgt naar $1.180/ton (+4% week-over-week)",
      "Shell breidt SAF-productie uit met nieuwe HVO-lijn in Rotterdam",
    ],
    status: "latest" as const,
  },
  {
    id: "2",
    date: "15 maart 2026",
    title: "Biomethaan-investeringen bereiken recordhoogte in Europa",
    summary:
      "World Biogas Association meldt 340 nieuwe biomethaan-projecten in Q1 2026. Nederland en Duitsland leiden de groei.",
    topStories: [
      "WBA: 340 nieuwe biomethaan-projecten in Europa dit kwartaal",
      "Tallow-prijzen dalen licht door seizoenseffect",
      "ETS-prijs stabiliseert rond EUR 68 na volatiele week",
    ],
    status: "read" as const,
  },
  {
    id: "3",
    date: "14 maart 2026",
    title: "ISCC publiceert update voor RED III-compliance",
    summary:
      "ISCC heeft nieuwe systeemdocumenten gepubliceerd die aansluiten op RED III-vereisten. Certificeringshouders moeten voor Q3 2026 updaten.",
    topStories: [
      "ISCC EU v4.2 documenten beschikbaar — RED III-alignment",
      "Poultry fat spread versus sojaolie bereikt 3-maands laagterecord",
      "Brazilie opent UCO-import specifiek voor SAF-productie",
    ],
    status: "read" as const,
  },
];

export default function NewsletterPage() {
  return (
    <>
      <Topbar title="Market Updates" />
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-looop-navy/50">
              Dagelijkse samenvatting van biogas, biomassa en feedstock nieuws
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-status-online animate-pulse-online" />
            <span className="text-xs text-looop-navy/50">Automatisch — elke werkdag 08:00</span>
          </div>
        </div>

        {/* Newsletter cards */}
        <div className="space-y-4">
          {mockNewsletters.map((nl) => (
            <div
              key={nl.id}
              className="rounded-xl border border-looop-sand/20 bg-white p-6 hover:border-looop-teal/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-looop-navy">{nl.title}</h3>
                    {nl.status === "latest" && (
                      <span className="rounded-full bg-looop-teal/10 px-2.5 py-0.5 text-xs font-bold text-looop-teal">
                        Nieuw
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-looop-navy/40">{nl.date}</p>
                </div>
              </div>
              <p className="text-sm text-looop-navy/70 mb-4">{nl.summary}</p>
              <div className="space-y-1.5">
                {nl.topStories.map((story, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-looop-teal mt-0.5 text-xs">●</span>
                    <p className="text-sm text-looop-navy/60">{story}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Coming soon notice */}
        <div className="rounded-xl border border-dashed border-looop-sand/40 p-6 text-center">
          <p className="text-sm text-looop-navy/40">
            Live nieuwsfeeds worden gekoppeld zodra de Newsletter Agent actief is
          </p>
          <p className="text-xs text-looop-teal mt-1">
            Bronnen: Bioenergy Insight, Biomass Magazine, Biofuels Digest, Argus Media, Fastmarkets
          </p>
        </div>
      </div>
    </>
  );
}

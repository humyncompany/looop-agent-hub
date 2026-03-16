"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils/cn";

interface Step {
  id: number;
  label: string;
  title: string;
  content: React.ReactNode;
}

export default function WelcomeMaxPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [showContent, setShowContent] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [showMatches, setShowMatches] = useState(false);

  const welcomeText = "Welkom, Max.";

  // Typing animation for intro
  useEffect(() => {
    if (currentStep !== 0) return;
    setIsVisible(true);
    let i = 0;
    const timer = setInterval(() => {
      if (i <= welcomeText.length) {
        setTypedText(welcomeText.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowContent(true), 500);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [currentStep]);

  const steps: Step[] = [
    {
      id: 0,
      label: "Intro",
      title: "",
      content: (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8">
          {/* Animated Humon glyph */}
          <div className={cn(
            "relative w-20 h-20 transition-all duration-1000",
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          )}>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-looop-navy via-looop-blue to-looop-teal rotate-6 animate-pulse-online" />
            <div className="absolute inset-0.5 rounded-2xl bg-surface flex items-center justify-center">
              <span className="text-3xl font-bold bg-gradient-to-r from-looop-navy to-looop-teal bg-clip-text text-transparent">H</span>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-looop-navy tracking-tight">
            {typedText}
            <span className="animate-pulse">|</span>
          </h1>
          {showContent && (
            <div className="space-y-4 animate-fade-in">
              <p className="text-xl text-looop-navy/60 max-w-md">
                Dit is wat we aan het bouwen zijn.
              </p>
              <p className="text-sm text-looop-navy/40">
                Druk op <kbd className="px-2 py-0.5 bg-looop-navy/10 rounded text-looop-navy font-mono text-xs">→</kbd> of klik Volgende
              </p>
            </div>
          )}
        </div>
      ),
    },
    {
      id: 1,
      label: "Humon",
      title: "Wat is Humon?",
      content: (
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-looop-navy">
              Humon <span className="text-looop-blue">AI Automation</span>
            </h2>
            <p className="text-lg text-looop-navy/70 leading-relaxed">
              Wij bouwen <strong>multi-agent systemen</strong> die repetitieve, data-intensieve
              werkprocessen automatiseren voor bedrijven.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: "🧠",
                title: "AI Agents",
                desc: "Autonome AI workers die specifieke taken uitvoeren — 24/7, zonder fouten",
              },
              {
                icon: "🔗",
                title: "Multi-Agent",
                desc: "Agents werken samen als team. Output van de ene is input voor de andere",
              },
              {
                icon: "🏭",
                title: "Agent Factory",
                desc: "Gestandaardiseerde architectuur om snel nieuwe agents te deployen",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-looop-sand/30 bg-white p-5 space-y-2"
              >
                <span className="text-2xl">{item.icon}</span>
                <h3 className="font-bold text-looop-navy">{item.title}</h3>
                <p className="text-sm text-looop-navy/60">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-looop-navy p-6 text-white">
            <p className="text-sm text-white/60 mb-2">Guiding Philosophy</p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                "First Principles denken",
                "Snelheid als competitief voordeel",
                "Talent density > teamgrootte",
                "Verticale integratie",
              ].map((p) => (
                <div key={p} className="flex items-center gap-2">
                  <span className="text-looop-teal">→</span> {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      label: "Probleem",
      title: "Het probleem dat we oplossen",
      content: (
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-looop-navy">
              Bedrijven verspillen <span className="text-status-offline">40%</span> van hun tijd
            </h2>
            <p className="text-lg text-looop-navy/70">
              aan repetitieve, data-intensieve taken die een AI agent in seconden kan doen.
            </p>
          </div>

          <div className="space-y-3">
            {[
              { task: "Offertes handmatig opmaken uit leveranciersspecs", time: "45 min", ai: "30 sec" },
              { task: "Emails classificeren en routeren", time: "Doorlopend", ai: "Realtime" },
              { task: "Marktprijzen monitoren en alerts sturen", time: "2 uur/dag", ai: "Continu" },
              { task: "Documenten parsen en data extracten", time: "30 min/stuk", ai: "10 sec" },
            ].map((item) => (
              <div
                key={item.task}
                className="flex items-center justify-between rounded-xl border border-looop-sand/30 bg-white p-4"
              >
                <span className="text-sm text-looop-navy flex-1">{item.task}</span>
                <div className="flex items-center gap-6 text-sm">
                  <span className="text-status-offline line-through">{item.time}</span>
                  <span className="text-looop-teal font-bold">{item.ai}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 3,
      label: "Live Case",
      title: "Looop Renewables — eerste klant",
      content: (
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="flex items-center gap-4">
            <span className="px-4 py-2 rounded-xl bg-looop-teal/10 border border-looop-teal/20 text-xl font-bold text-looop-teal">
              Looop Renewables
            </span>
            <span className="text-looop-navy/30 text-2xl">×</span>
            <span className="px-4 py-2 rounded-xl bg-looop-navy/5 border border-looop-navy/10 text-xl font-bold text-looop-navy">
              Humon
            </span>
          </div>

          <p className="text-lg text-looop-navy/70">
            Looop Renewables is een internationaal handelsbedrijf in hernieuwbare grondstoffen.
            Ze zijn onze <strong>eerste live klant en testcase</strong>.
          </p>

          <div className="rounded-xl border-2 border-looop-blue/20 bg-looop-blue/5 p-6 space-y-4">
            <h3 className="font-bold text-looop-navy text-lg">
              Eerste agent: Offerte Agent
            </h3>
            <div className="flex items-center gap-2 text-sm text-looop-navy/70">
              <span className="px-2 py-1 bg-looop-navy text-white rounded text-xs font-bold">
                Email [OFFERTE]
              </span>
              <span className="text-looop-navy/30">→</span>
              <span className="px-2 py-1 bg-looop-blue text-white rounded text-xs font-bold">
                Make.com
              </span>
              <span className="text-looop-navy/30">→</span>
              <span className="px-2 py-1 bg-looop-teal text-white rounded text-xs font-bold">
                AI Agent
              </span>
              <span className="text-looop-navy/30">→</span>
              <span className="px-2 py-1 bg-looop-orange text-white rounded text-xs font-bold">
                Gmail Draft
              </span>
            </div>
            <p className="text-sm text-looop-navy/60">
              Leverancier stuurt specs (PDF, foto, email) → agent genereert automatisch
              een complete, branded Looop offerte → klaar als Gmail draft.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="rounded-xl bg-white border border-looop-sand/20 p-4">
              <p className="text-3xl font-bold text-looop-blue">30s</p>
              <p className="text-xs text-looop-navy/50 mt-1">Per offerte (was 45 min)</p>
            </div>
            <div className="rounded-xl bg-white border border-looop-sand/20 p-4">
              <p className="text-3xl font-bold text-looop-teal">24/7</p>
              <p className="text-xs text-looop-navy/50 mt-1">Altijd beschikbaar</p>
            </div>
            <div className="rounded-xl bg-white border border-looop-sand/20 p-4">
              <p className="text-3xl font-bold text-looop-orange">0</p>
              <p className="text-xs text-looop-navy/50 mt-1">Handmatige fouten</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      label: "Tech",
      title: "Hoe het werkt — de stack",
      content: (
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-looop-navy">
            Gebouwd voor <span className="text-looop-teal">schaal</span>
          </h2>

          <div className="space-y-3">
            {[
              {
                layer: "Frontend",
                tech: "Next.js 14 + TypeScript + Tailwind",
                desc: "Agent Hub dashboard — dit kijk je nu naar",
                color: "bg-looop-blue",
              },
              {
                layer: "Auth & Database",
                tech: "Supabase (Postgres + Auth + Realtime)",
                desc: "RLS op alle tabellen, domein whitelist, realtime agent status",
                color: "bg-looop-navy",
              },
              {
                layer: "Orchestration",
                tech: "Make.com",
                desc: "Automation backbone — triggers, routing, webhooks",
                color: "bg-looop-teal",
              },
              {
                layer: "AI Processing",
                tech: "Claude API + MindStudio",
                desc: "Agent logic, NLP, document parsing, data extraction",
                color: "bg-looop-orange",
              },
              {
                layer: "Monitoring",
                tech: "Heartbeat API + Audit Log",
                desc: "Realtime status, error tracking, volledige traceability",
                color: "bg-status-online",
              },
            ].map((item) => (
              <div
                key={item.layer}
                className="flex items-start gap-4 rounded-xl border border-looop-sand/30 bg-white p-4"
              >
                <div className={cn("w-1 h-full min-h-[3rem] rounded-full", item.color)} />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-looop-navy">{item.layer}</h3>
                    <span className="text-xs text-looop-navy/40 font-mono">{item.tech}</span>
                  </div>
                  <p className="text-sm text-looop-navy/60 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-looop-navy/5 p-4 text-sm text-looop-navy/60">
            <strong className="text-looop-navy">Architectuurprincipe:</strong> Elke agent volgt
            dezelfde standaard: <code className="text-looop-blue">trigger → verwerking → output</code>.
            Dit maakt het een factory — nieuwe agents deployen we in uren, niet weken.
          </div>
        </div>
      ),
    },
    {
      id: 5,
      label: "Roadmap",
      title: "Waar gaan we naartoe",
      content: (
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-looop-navy">
            Van <span className="text-looop-blue">1 agent</span> naar{" "}
            <span className="text-looop-orange">een platform</span>
          </h2>

          <div className="space-y-4">
            {[
              {
                phase: "Nu",
                status: "online" as const,
                title: "Offerte Agent + Agent Hub",
                items: ["Branded offerte generatie", "Dashboard met realtime monitoring", "Looop als eerste klant"],
              },
              {
                phase: "Q2 2026",
                status: "degraded" as const,
                title: "Multi-Agent Systeem",
                items: ["Email Classifier", "Document Parser", "Price Monitor", "Agents werken samen als team"],
              },
              {
                phase: "Q3 2026",
                status: "offline" as const,
                title: "Humon Platform",
                items: ["Instagram/YouTube scrapers", "Agent Factory — nieuwe agents in uren", "Eerste externe klanten", "Self-service agent configuratie"],
              },
            ].map((phase) => (
              <div
                key={phase.phase}
                className="rounded-xl border border-looop-sand/30 bg-white p-5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={cn("h-3 w-3 rounded-full", {
                      "bg-status-online animate-pulse-online": phase.status === "online",
                      "bg-status-degraded": phase.status === "degraded",
                      "bg-looop-navy/20": phase.status === "offline",
                    })}
                  />
                  <span className="text-xs font-bold text-looop-navy/40 uppercase tracking-wider">
                    {phase.phase}
                  </span>
                  <h3 className="font-bold text-looop-navy">{phase.title}</h3>
                </div>
                <div className="grid grid-cols-2 gap-1 ml-6">
                  {phase.items.map((item) => (
                    <p key={item} className="text-sm text-looop-navy/60 flex items-center gap-1.5">
                      <span className="text-looop-teal text-xs">●</span> {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 6,
      label: "Jouw Skills",
      title: "Wat breng jij mee?",
      content: (() => {
        const allSkills = [
          { id: "react", label: "React / Next.js", icon: "⚛️", category: "frontend" },
          { id: "typescript", label: "TypeScript", icon: "🔷", category: "frontend" },
          { id: "node", label: "Node.js", icon: "🟢", category: "backend" },
          { id: "python", label: "Python", icon: "🐍", category: "backend" },
          { id: "databases", label: "Databases / SQL", icon: "🗄️", category: "backend" },
          { id: "api", label: "API Design", icon: "🔌", category: "backend" },
          { id: "devops", label: "DevOps / CI/CD", icon: "🚀", category: "infra" },
          { id: "cloud", label: "Cloud (AWS/GCP)", icon: "☁️", category: "infra" },
          { id: "ai", label: "AI / ML", icon: "🤖", category: "ai" },
          { id: "scraping", label: "Web Scraping", icon: "🕷️", category: "ai" },
          { id: "mobile", label: "Mobile Dev", icon: "📱", category: "frontend" },
          { id: "security", label: "Security", icon: "🔒", category: "infra" },
          { id: "architecture", label: "System Architecture", icon: "🏗️", category: "infra" },
          { id: "automation", label: "Automation", icon: "⚡", category: "ai" },
        ];

        function toggleSkill(id: string) {
          setSelectedSkills((prev) =>
            prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
          );
          setShowMatches(false);
        }

        return (
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold text-looop-navy">
                Max, selecteer jouw <span className="text-looop-blue">skills</span>
              </h2>
              <p className="text-looop-navy/50 text-sm">
                Klik alles aan waar je ervaring mee hebt
              </p>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {allSkills.map((skill) => {
                const isSelected = selectedSkills.includes(skill.id);
                return (
                  <button
                    key={skill.id}
                    onClick={() => toggleSkill(skill.id)}
                    className={cn(
                      "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 border",
                      isSelected
                        ? "bg-looop-blue text-white border-looop-blue scale-105 shadow-md"
                        : "bg-white text-looop-navy/70 border-looop-sand/30 hover:border-looop-blue/40 hover:bg-looop-blue/5"
                    )}
                  >
                    <span>{skill.icon}</span>
                    <span>{skill.label}</span>
                  </button>
                );
              })}
            </div>

            {selectedSkills.length > 0 && (
              <div className="text-center animate-fade-in">
                <p className="text-sm text-looop-navy/40 mb-3">
                  {selectedSkills.length} skill{selectedSkills.length !== 1 ? "s" : ""} geselecteerd
                </p>
                <button
                  onClick={() => {
                    setShowMatches(true);
                    setTimeout(() => goNext(), 800);
                  }}
                  className="inline-flex items-center gap-2 rounded-xl bg-looop-teal px-6 py-3 text-white font-bold hover:bg-looop-teal/90 transition-colors"
                >
                  Bekijk je match met Humon →
                </button>
              </div>
            )}
          </div>
        );
      })(),
    },
    {
      id: 7,
      label: "Match",
      title: "Jouw skills × Humon",
      content: (() => {
        const skillToHumon: Record<string, { area: string; need: string; color: string }[]> = {
          react: [
            { area: "Agent Hub Dashboard", need: "Frontend bouwen voor agent monitoring & controle", color: "bg-looop-blue" },
          ],
          typescript: [
            { area: "Platform Architectuur", need: "Type-safe codebase voor schaalbaar multi-agent systeem", color: "bg-looop-navy" },
          ],
          node: [
            { area: "Agent Runtime", need: "Backend services die agents orchestreren", color: "bg-looop-teal" },
          ],
          python: [
            { area: "AI Agent Logic", need: "Agent brains, NLP pipelines, data processing", color: "bg-looop-orange" },
          ],
          databases: [
            { area: "Data Layer", need: "Supabase schema's, RLS policies, audit trails", color: "bg-looop-navy" },
          ],
          api: [
            { area: "Agent API's", need: "Heartbeat endpoints, webhooks, inter-agent communicatie", color: "bg-looop-blue" },
          ],
          devops: [
            { area: "Deployment Pipeline", need: "CI/CD, monitoring, zero-downtime deploys", color: "bg-looop-teal" },
          ],
          cloud: [
            { area: "Infrastructure", need: "Schaalbare hosting voor multi-tenant agent platform", color: "bg-status-online" },
          ],
          ai: [
            { area: "Agent Intelligence", need: "Claude API integratie, prompt engineering, agent memory", color: "bg-looop-orange" },
          ],
          scraping: [
            { area: "Data Agents", need: "Instagram scraper, YouTube analyzer, price monitor", color: "bg-looop-teal" },
          ],
          mobile: [
            { area: "Mobile Agent Hub", need: "Agents monitoren en aansturen vanaf je telefoon", color: "bg-looop-blue" },
          ],
          security: [
            { area: "Platform Security", need: "Auth, RLS, domein whitelist, API key management", color: "bg-status-offline" },
          ],
          architecture: [
            { area: "Agent Factory", need: "Gestandaardiseerde architectuur voor rapid agent deployment", color: "bg-looop-navy" },
          ],
          automation: [
            { area: "Workflow Engine", need: "Make.com integratie, trigger systemen, agent chaining", color: "bg-looop-orange" },
          ],
        };

        const matches = selectedSkills.flatMap((s) => skillToHumon[s] || []);
        const matchPercentage = Math.min(Math.round((selectedSkills.length / 6) * 100), 100);

        return (
          <div className="max-w-2xl mx-auto space-y-8">
            {/* Match score */}
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-looop-navy">
                {matchPercentage >= 80 ? "Perfect match." : matchPercentage >= 50 ? "Sterke match." : "Goede basis."}
              </h2>
              <div className="flex items-center justify-center gap-4">
                <div className="w-48 h-3 bg-looop-navy/10 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-looop-blue to-looop-teal transition-all duration-1000"
                    style={{ width: `${matchPercentage}%` }}
                  />
                </div>
                <span className="text-2xl font-bold text-looop-teal">{matchPercentage}%</span>
              </div>
            </div>

            {/* Visual connections */}
            <div className="space-y-2">
              <p className="text-xs font-bold text-looop-navy/40 uppercase tracking-wider mb-3">
                Jouw skills → waar Humon ze nodig heeft
              </p>
              {matches.map((match, i) => (
                <div
                  key={`${match.area}-${i}`}
                  className="flex items-center gap-3 rounded-xl border border-looop-sand/20 bg-white p-4 animate-fade-in"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className={cn("w-1.5 h-10 rounded-full", match.color)} />
                  <div className="flex-1">
                    <h3 className="font-bold text-looop-navy text-sm">{match.area}</h3>
                    <p className="text-xs text-looop-navy/50">{match.need}</p>
                  </div>
                  <span className="text-looop-teal text-lg">✓</span>
                </div>
              ))}
            </div>

            {matches.length === 0 && (
              <p className="text-center text-looop-navy/40 text-sm">
                Ga terug en selecteer je skills om de match te zien
              </p>
            )}
          </div>
        );
      })(),
    },
    {
      id: 8,
      label: "Co-founder",
      title: "",
      content: (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8 max-w-lg mx-auto">
          <h2 className="text-4xl font-bold text-looop-navy">
            En hier kom jij in beeld, Max.
          </h2>
          <p className="text-lg text-looop-navy/60 leading-relaxed">
            We zoeken iemand die dit mee kan bouwen. Niet als developer —
            als <strong className="text-looop-blue">co-founder</strong>.
          </p>

          <div className="grid grid-cols-1 gap-3 w-full text-left">
            {[
              "Full-stack development van het Humon platform",
              "Agent architectuur ontwerpen en implementeren",
              "Schaalbare infra voor multi-agent systemen",
              "Samen de technische visie bepalen",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-looop-blue/20 bg-looop-blue/5 p-3"
              >
                <span className="text-looop-blue">→</span>
                <span className="text-sm text-looop-navy">{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 space-y-3">
            <button
              onClick={() => router.push("/dashboard")}
              className="inline-flex items-center gap-2 rounded-xl bg-looop-blue px-8 py-3 text-white font-bold hover:bg-looop-blue/90 transition-colors"
            >
              Bekijk het dashboard →
            </button>
            <p className="text-xs text-looop-navy/40">
              Alles wat je ziet is gebouwd in één sessie met Claude Code
            </p>
          </div>
        </div>
      ),
    },
  ];

  const currentStepData = steps[currentStep];

  function goNext() {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  }

  function goPrev() {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  }

  // Keyboard navigation
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      {/* Gradient accent bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-looop-navy via-looop-blue via-looop-teal to-looop-orange z-50" />

      {/* Step indicator */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1">
        {steps.map((step, i) => (
          <button
            key={step.id}
            onClick={() => setCurrentStep(i)}
            className={cn(
              "transition-all duration-300",
              i === currentStep
                ? "h-2 w-8 rounded-full bg-looop-blue"
                : i < currentStep
                ? "h-2 w-2 rounded-full bg-looop-teal"
                : "h-2 w-2 rounded-full bg-looop-navy/15"
            )}
          />
        ))}
      </div>

      {/* Step label */}
      {currentStepData.title && (
        <div className="fixed top-10 left-1/2 -translate-x-1/2 z-40">
          <p className="text-xs font-bold text-looop-navy/40 uppercase tracking-wider">
            {currentStepData.title}
          </p>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 flex items-center justify-center p-8 pt-20">
        <div key={currentStep} className="animate-fade-in w-full">
          {currentStepData.content}
        </div>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between p-6 bg-gradient-to-t from-surface via-surface to-transparent">
        <button
          onClick={goPrev}
          disabled={currentStep === 0}
          className={cn(
            "rounded-lg px-4 py-2 text-sm font-bold transition-colors",
            currentStep === 0
              ? "text-looop-navy/20 cursor-not-allowed"
              : "text-looop-navy/60 hover:text-looop-navy hover:bg-looop-navy/5"
          )}
        >
          ← Vorige
        </button>

        <span className="text-xs text-looop-navy/30">
          {currentStep + 1} / {steps.length}
        </span>

        <button
          onClick={goNext}
          disabled={currentStep === steps.length - 1}
          className={cn(
            "rounded-lg px-4 py-2 text-sm font-bold transition-colors",
            currentStep === steps.length - 1
              ? "text-looop-navy/20 cursor-not-allowed"
              : "bg-looop-blue text-white hover:bg-looop-blue/90"
          )}
        >
          Volgende →
        </button>
      </div>
    </div>
  );
}

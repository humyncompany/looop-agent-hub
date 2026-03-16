"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils/cn";
import Image from "next/image";

interface Step {
  id: number;
  label: string;
  title: string;
  content: React.ReactNode;
}

export default function WelcomeDemoPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [showContent, setShowContent] = useState(false);

  const welcomeText = "Looop Renewables";

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
    }, 80);
    return () => clearInterval(timer);
  }, [currentStep]);

  const steps: Step[] = [
    {
      id: 0,
      label: "Intro",
      title: "",
      content: (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8">
          <div
            className={cn(
              "relative transition-all duration-1000",
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            )}
          >
            <Image
              src="/images/looop-logo.png"
              alt="Looop Renewables"
              width={80}
              height={80}
              className="mx-auto"
            />
          </div>
          <h1 className="text-5xl font-bold text-looop-navy tracking-tight">
            {typedText}
            <span className="animate-pulse">|</span>
          </h1>
          {showContent && (
            <div className="space-y-4 animate-fade-in">
              <p className="text-xl text-looop-navy/60 max-w-md">
                AI Agent Hub — Intelligente automatisering voor ons team
              </p>
              <p className="text-sm text-looop-navy/40">
                Druk op{" "}
                <kbd className="px-2 py-0.5 bg-looop-navy/10 rounded text-looop-navy font-mono text-xs">
                  &rarr;
                </kbd>{" "}
                of klik Volgende
              </p>
            </div>
          )}
        </div>
      ),
    },
    {
      id: 1,
      label: "Uitdaging",
      title: "De uitdaging",
      content: (
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-looop-navy">
              Waar gaat ons team{" "}
              <span className="text-status-offline">tijd aan kwijt?</span>
            </h2>
            <p className="text-lg text-looop-navy/70">
              Repetitieve, data-intensieve taken die een AI agent in seconden
              kan doen.
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                task: "Offertes handmatig opmaken uit leveranciersspecs",
                time: "45 min per stuk",
                ai: "30 seconden",
              },
              {
                task: "ISCC-certificeringsvragen beantwoorden",
                time: "Consultant inhuren",
                ai: "Direct antwoord",
              },
              {
                task: "Marktnieuws bijhouden en samenvatten",
                time: "1 uur per dag",
                ai: "Automatisch",
              },
              {
                task: "Marktprijzen monitoren en vergelijken",
                time: "2 uur per dag",
                ai: "Continu",
              },
              {
                task: "Leveranciers screenen op compliance",
                time: "30 min per leverancier",
                ai: "2 minuten",
              },
            ].map((item) => (
              <div
                key={item.task}
                className="flex items-center justify-between rounded-xl border border-looop-sand/30 bg-white p-4"
              >
                <span className="text-sm text-looop-navy flex-1">
                  {item.task}
                </span>
                <div className="flex items-center gap-6 text-sm">
                  <span className="text-status-offline line-through">
                    {item.time}
                  </span>
                  <span className="text-looop-teal font-bold">{item.ai}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 2,
      label: "Oplossing",
      title: "De oplossing",
      content: (
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-looop-navy">
              AI Agents die{" "}
              <span className="text-looop-blue">voor ons werken</span>
            </h2>
            <p className="text-lg text-looop-navy/70 leading-relaxed">
              Elk agent is een digitale medewerker die{" "}
              <strong>24/7 beschikbaar</strong> is, geen fouten maakt, en in
              seconden doet waar wij minuten tot uren over doen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: "🤖",
                title: "Autonoom",
                desc: "Agents werken zelfstandig — geen handmatige tussenkomst nodig",
              },
              {
                icon: "⚡",
                title: "Razendsnel",
                desc: "Taken die 45 minuten kosten worden in 30 seconden afgerond",
              },
              {
                icon: "🔒",
                title: "Betrouwbaar",
                desc: "Consistente output, geen menselijke fouten, volledige traceability",
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
        </div>
      ),
    },
    {
      id: 3,
      label: "Agents",
      title: "Onze agents",
      content: (
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-looop-navy text-center">
            5 agents voor Looop Renewables
          </h2>

          <div className="space-y-3">
            {[
              {
                name: "Offerte Agent",
                icon: "📄",
                status: "Live",
                statusColor: "bg-status-online",
                desc: "Leverancier stuurt specs (PDF, foto, email) → agent genereert automatisch een complete, branded Looop offerte → klaar als Gmail draft.",
                flow: [
                  "Email [OFFERTE]",
                  "Make.com",
                  "AI Agent",
                  "Gmail Draft",
                ],
              },
              {
                name: "ISCC Adviseur",
                icon: "📋",
                status: "Live",
                statusColor: "bg-status-online",
                desc: "Beantwoordt elke ISCC-certificeringsvraag op basis van 60+ officiele documenten. Vervangt externe consultants (€152,50/uur).",
                flow: ["Vraag stellen", "AI Analyse", "Direct antwoord"],
              },
              {
                name: "Newsletter Agent",
                icon: "📰",
                status: "Live",
                statusColor: "bg-status-online",
                desc: "Verzamelt dagelijks biogas, biomassa en feedstock nieuws uit 10+ bronnen en genereert een samenvatting voor het team.",
                flow: ["RSS Feeds", "AI Samenvatting", "Market Update"],
              },
              {
                name: "Market Price Tracker",
                icon: "📊",
                status: "In ontwikkeling",
                statusColor: "bg-status-degraded",
                desc: "Monitort realtime marktprijzen voor UCO, tallow, poultry fat en biomassa. Vergelijkt met concurrenten en stuurt alerts bij prijswijzigingen.",
                flow: [
                  "Marktdata",
                  "Prijsanalyse",
                  "Alerts & Dashboard",
                ],
              },
              {
                name: "Supplier Screener",
                icon: "🔎",
                status: "In ontwikkeling",
                statusColor: "bg-status-degraded",
                desc: "Controleert automatisch of leveranciers ISCC-gecertificeerd zijn en verifieert compliance-documenten voor due diligence.",
                flow: [
                  "Leveranciersdata",
                  "ISCC Check",
                  "Compliance Rapport",
                ],
              },
            ].map((agent) => (
              <div
                key={agent.name}
                className="rounded-xl border border-looop-sand/30 bg-white p-5 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{agent.icon}</span>
                    <h3 className="font-bold text-looop-navy text-lg">
                      {agent.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "h-2 w-2 rounded-full",
                        agent.statusColor
                      )}
                    />
                    <span className="text-xs font-bold text-looop-navy/50">
                      {agent.status}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-looop-navy/60">{agent.desc}</p>
                <div className="flex items-center gap-2 text-xs">
                  {agent.flow.map((step, i) => (
                    <span key={step} className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-looop-navy/5 rounded font-medium text-looop-navy/70">
                        {step}
                      </span>
                      {i < agent.flow.length - 1 && (
                        <span className="text-looop-navy/30">&rarr;</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 4,
      label: "Kosten",
      title: "Wat kost het per actie",
      content: (
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-looop-navy">
              Kosten per actie vs.{" "}
              <span className="text-status-offline">huidige kosten</span>
            </h2>
            <p className="text-sm text-looop-navy/50">
              Gebaseerd op medewerkerkosten van ~&euro;35/uur (incl.
              werkgeverslasten)
            </p>
          </div>

          {/* Per-agent cost table */}
          <div className="space-y-3">
            {[
              {
                agent: "Offerte Agent",
                icon: "📄",
                costPerAction: "~€0,08",
                currentCost: "€26,25",
                currentBasis: "45 min medewerker",
                saving: "€26,17",
                volume: "~20 offertes/maand",
                monthlySaving: "€523",
              },
              {
                agent: "ISCC Adviseur",
                icon: "📋",
                costPerAction: "~€0,05",
                currentCost: "€152,50",
                currentBasis: "1 uur extern consultant",
                saving: "€152,45",
                volume: "~10 vragen/maand",
                monthlySaving: "€1.524",
              },
              {
                agent: "Newsletter Agent",
                icon: "📰",
                costPerAction: "~€0,10",
                currentCost: "€35,00",
                currentBasis: "1 uur research/dag",
                saving: "€34,90",
                volume: "22 werkdagen/maand",
                monthlySaving: "€768",
              },
              {
                agent: "Market Price Tracker",
                icon: "📊",
                costPerAction: "~€0,15",
                currentCost: "€70,00",
                currentBasis: "2 uur monitoring/dag",
                saving: "€69,85",
                volume: "22 werkdagen/maand",
                monthlySaving: "€1.537",
              },
              {
                agent: "Supplier Screener",
                icon: "🔎",
                costPerAction: "~€0,20",
                currentCost: "€17,50",
                currentBasis: "30 min per leverancier",
                saving: "€17,30",
                volume: "~15 checks/maand",
                monthlySaving: "€260",
              },
            ].map((row) => (
              <div
                key={row.agent}
                className="rounded-xl border border-looop-sand/30 bg-white p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{row.icon}</span>
                    <h3 className="font-bold text-looop-navy">{row.agent}</h3>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-status-offline line-through">
                      {row.currentCost}
                    </span>
                    <span className="text-looop-teal font-bold text-lg">
                      {row.costPerAction}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-looop-navy/50">
                  <span>
                    Was: {row.currentBasis} &middot; Nu: AI in seconden
                  </span>
                  <span>
                    {row.volume} ={" "}
                    <strong className="text-looop-teal">
                      {row.monthlySaving} bespaard/maand
                    </strong>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom line */}
          <div className="rounded-xl bg-looop-navy p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-white/60">
                  Vaste kosten (tools & hosting)
                </p>
                <p className="text-2xl font-bold">~&euro;50-80/maand</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-white/60">
                  Geschatte besparing per maand
                </p>
                <p className="text-2xl font-bold text-looop-teal">
                  ~&euro;4.600/maand
                </p>
              </div>
            </div>
            <div className="border-t border-white/20 pt-3 flex items-center justify-between">
              <span className="text-sm text-white/60">
                Return on Investment
              </span>
              <span className="text-xl font-bold text-looop-teal">
                57x &mdash; terugverdiend in &lt;1 week
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      label: "Roadmap",
      title: "Wat komt er nog",
      content: (
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-looop-navy">
            Van <span className="text-looop-blue">3 agents</span> naar{" "}
            <span className="text-looop-orange">een volledig systeem</span>
          </h2>

          <div className="space-y-4">
            {[
              {
                phase: "Nu",
                status: "online" as const,
                title: "3 live agents + dashboard",
                items: [
                  "Offerte Agent — branded offertes in 30 sec",
                  "ISCC Adviseur — certificeringsvragen direct beantwoord",
                  "Newsletter Agent — dagelijkse marktupdate",
                  "Live dashboard met monitoring",
                ],
              },
              {
                phase: "Q2 2026",
                status: "degraded" as const,
                title: "Uitbreiding + optimalisatie",
                items: [
                  "Market Price Tracker — realtime prijsmonitoring",
                  "Supplier Screener — automatische compliance checks",
                  "Agents werken samen als team",
                  "Automatische rapportages",
                ],
              },
              {
                phase: "Q3 2026",
                status: "offline" as const,
                title: "Volledig geautomatiseerd",
                items: [
                  "Contract Analyzer — automatische contractreview",
                  "Logistics Tracker — shipment monitoring",
                  "Self-service: team kan agents zelf configureren",
                  "Volledige integratie met bestaande systemen",
                ],
              },
            ].map((phase) => (
              <div
                key={phase.phase}
                className="rounded-xl border border-looop-sand/30 bg-white p-5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={cn("h-3 w-3 rounded-full", {
                      "bg-status-online animate-pulse-online":
                        phase.status === "online",
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
                    <p
                      key={item}
                      className="text-sm text-looop-navy/60 flex items-center gap-1.5"
                    >
                      <span className="text-looop-teal text-xs">●</span>{" "}
                      {item}
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
      label: "Dashboard",
      title: "",
      content: (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8 max-w-lg mx-auto">
          <Image
            src="/images/looop-logo-tagline.png"
            alt="Looop Renewables"
            width={200}
            height={67}
          />
          <h2 className="text-4xl font-bold text-looop-navy">
            Klaar om te zien?
          </h2>
          <p className="text-lg text-looop-navy/60 leading-relaxed">
            Het Agent Hub dashboard is live. Alle agents zijn bereikbaar,
            inclusief de ISCC Adviseur die je direct vragen kunt stellen.
          </p>

          <div className="grid grid-cols-3 gap-4 w-full">
            <div className="rounded-xl bg-white border border-looop-sand/20 p-4 text-center">
              <p className="text-3xl font-bold text-looop-blue">5</p>
              <p className="text-xs text-looop-navy/50 mt-1">Agents</p>
            </div>
            <div className="rounded-xl bg-white border border-looop-sand/20 p-4 text-center">
              <p className="text-3xl font-bold text-looop-teal">3</p>
              <p className="text-xs text-looop-navy/50 mt-1">Live</p>
            </div>
            <div className="rounded-xl bg-white border border-looop-sand/20 p-4 text-center">
              <p className="text-3xl font-bold text-looop-orange">~€65</p>
              <p className="text-xs text-looop-navy/50 mt-1">Per maand</p>
            </div>
          </div>

          <div className="pt-4 space-y-3">
            <button
              onClick={() => router.push("/dashboard")}
              className="inline-flex items-center gap-2 rounded-xl bg-looop-blue px-8 py-3 text-white font-bold hover:bg-looop-blue/90 transition-colors"
            >
              Bekijk het dashboard &rarr;
            </button>
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
          &larr; Vorige
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
          Volgende &rarr;
        </button>
      </div>
    </div>
  );
}

import { Topbar } from "@/components/layout/Topbar";

export default function FeedbackPage() {
  return (
    <>
      <Topbar title="Feedback" />
      <div className="p-6">
        <div className="rounded-xl border border-looop-sand/20 bg-white p-12 text-center">
          <span className="text-4xl">💬</span>
          <h2 className="text-lg font-bold text-looop-navy mt-4">
            Feedback module
          </h2>
          <p className="text-sm text-looop-navy/50 mt-2">
            Hier kun je straks fouten melden, suggesties doen en complimenten
            geven over de agents.
          </p>
          <p className="text-xs text-looop-teal mt-4">Komt in Fase 6</p>
        </div>
      </div>
    </>
  );
}

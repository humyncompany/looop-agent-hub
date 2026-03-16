import { NextResponse } from "next/server";
import { z } from "zod";

const chatSchema = z.object({
  message: z.string().min(1, "Bericht mag niet leeg zijn"),
  thread_id: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = chatSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Ongeldig verzoek", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const apiKey = process.env.MINDSTUDIO_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "MindStudio API key niet geconfigureerd" },
        { status: 500 }
      );
    }

    const response = await fetch(
      "https://v1.mindstudio-api.com/developer/v2/agents/run",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          agentId: "9079e7fe-1a26-40eb-88b7-3c64c2fe7b91",
          variables: {
            message: parsed.data.message,
          },
          ...(parsed.data.thread_id && { threadId: parsed.data.thread_id }),
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("MindStudio API error:", response.status, errorText);
      return NextResponse.json(
        { error: "Fout bij het benaderen van de ISCC agent" },
        { status: 502 }
      );
    }

    const data = await response.json();

    return NextResponse.json({
      answer: data.result || data.output || "Geen antwoord ontvangen.",
      thread_id: data.threadId || parsed.data.thread_id,
    });
  } catch {
    return NextResponse.json(
      { error: "Er ging iets mis. Probeer het opnieuw." },
      { status: 500 }
    );
  }
}

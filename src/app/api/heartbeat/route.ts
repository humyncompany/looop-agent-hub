import { NextResponse } from "next/server";
import { z } from "zod";

const heartbeatSchema = z.object({
  agent_id: z.string().uuid(),
  secret: z.string().min(1),
  status: z.enum(["online", "degraded"]).optional().default("online"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = heartbeatSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid payload", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    // TODO: Verify secret against agent's heartbeat_secret in Supabase
    // TODO: Update agent status and last_heartbeat in Supabase
    // For now, just acknowledge the heartbeat

    return NextResponse.json({
      ok: true,
      agent_id: parsed.data.agent_id,
      status: parsed.data.status,
      received_at: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON" },
      { status: 400 }
    );
  }
}

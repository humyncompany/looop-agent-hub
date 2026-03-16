import { NextResponse } from "next/server";

const SITE_PASSWORD = process.env.SITE_PASSWORD || "looop2026";

export async function POST(request: Request) {
  const body = await request.json();

  if (body.password === SITE_PASSWORD) {
    const response = NextResponse.json({ success: true });
    response.cookies.set("looop-auth", SITE_PASSWORD, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30, // 30 dagen geldig
      path: "/",
    });
    return response;
  }

  return NextResponse.json({ error: "Invalid password" }, { status: 401 });
}

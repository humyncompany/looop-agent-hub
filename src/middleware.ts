import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SITE_PASSWORD = process.env.SITE_PASSWORD || "looop2026";

export function middleware(request: NextRequest) {
  // Check if user has authenticated via cookie
  const authCookie = request.cookies.get("looop-auth");

  // Allow the login page itself
  if (request.nextUrl.pathname === "/login") {
    return NextResponse.next();
  }

  // Allow the login API route
  if (request.nextUrl.pathname === "/api/login") {
    return NextResponse.next();
  }

  // Allow static assets and images
  if (
    request.nextUrl.pathname.startsWith("/_next") ||
    request.nextUrl.pathname.startsWith("/images") ||
    request.nextUrl.pathname.endsWith(".ico")
  ) {
    return NextResponse.next();
  }

  // If not authenticated, redirect to login
  if (authCookie?.value !== SITE_PASSWORD) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

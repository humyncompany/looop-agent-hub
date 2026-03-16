"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/dashboard");
      router.refresh();
    } else {
      setError(true);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface p-4">
      {/* Gradient accent bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-looop-navy via-looop-blue via-looop-teal to-looop-orange" />

      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/images/looop-logo-tagline.png"
            alt="Looop Renewables — Moving Circularity Forward"
            width={240}
            height={80}
            priority
          />
          <div className="text-center">
            <h1 className="text-2xl font-bold text-looop-navy">Agent Hub</h1>
            <p className="text-sm text-looop-navy/60 mt-1">
              Voer het wachtwoord in om toegang te krijgen
            </p>
          </div>
        </div>

        {/* Login card */}
        <div className="rounded-2xl border border-looop-sand/30 bg-white p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-bold text-looop-navy mb-1.5"
              >
                Wachtwoord
              </label>
              <input
                id="password"
                type="password"
                placeholder="Voer wachtwoord in"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                className={`w-full rounded-xl border px-4 py-3 text-sm text-looop-navy bg-white outline-none transition-colors ${
                  error
                    ? "border-status-offline focus:border-status-offline"
                    : "border-looop-sand/30 focus:border-looop-blue"
                }`}
                autoFocus
              />
              {error && (
                <p className="mt-2 text-xs text-status-offline">
                  Onjuist wachtwoord. Probeer opnieuw.
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading || !password}
              className="w-full rounded-xl bg-looop-blue px-4 py-3 text-sm font-bold text-white hover:bg-looop-blue/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Bezig..." : "Inloggen"}
            </button>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-looop-navy/40">
          Alleen voor intern gebruik — Looop Renewables
        </p>
      </div>
    </div>
  );
}

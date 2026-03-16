"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { loginSchema } from "@/lib/schemas/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const result = loginSchema.safeParse({ email });
    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }

    setIsLoading(true);

    // Mock: simulate magic link send (Supabase wordt later gekoppeld)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSent(true);
    setIsLoading(false);

    // In mock mode: direct doorsturen naar dashboard
    setTimeout(() => {
      router.push("/dashboard");
    }, 1500);
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
              Log in met je Looop email
            </p>
          </div>
        </div>

        {/* Login card */}
        <div className="rounded-2xl border border-looop-sand/30 bg-white p-8 shadow-sm">
          {isSent ? (
            <div className="text-center space-y-3">
              <span className="text-4xl">✉️</span>
              <h2 className="text-lg font-bold text-looop-navy">
                Check je inbox
              </h2>
              <p className="text-sm text-looop-navy/60">
                We hebben een magic link gestuurd naar{" "}
                <strong>{email}</strong>
              </p>
              <p className="text-xs text-looop-teal">
                Je wordt automatisch doorgestuurd...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-looop-navy mb-1.5"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="naam@looop.company"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  autoFocus
                />
                {error && (
                  <p className="mt-1.5 text-sm text-status-offline">{error}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? "Bezig..." : "Verstuur magic link"}
              </Button>
            </form>
          )}
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-looop-navy/40">
          Alleen @looop.company emailadressen hebben toegang.
          <br />
          Neem contact op met een admin als je geen uitnodiging hebt ontvangen.
        </p>
      </div>
    </div>
  );
}

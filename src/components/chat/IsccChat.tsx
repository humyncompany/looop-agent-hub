"use client";

import { useState, useRef, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export function IsccChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [threadId, setThreadId] = useState<string | undefined>();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  async function handleSend() {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/iscc-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, thread_id: threadId }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Er ging iets mis");
      }

      if (data.thread_id) {
        setThreadId(data.thread_id);
      }

      const assistantMsg: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: data.answer,
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      const errorMsg: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          err instanceof Error
            ? err.message
            : "Er ging iets mis. Probeer het opnieuw.",
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex h-[calc(100vh-64px)] flex-col">
      {/* Messages area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-6 py-6">
        {messages.length === 0 ? (
          <div className="flex h-full items-center justify-center">
            <div className="text-center max-w-md">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-lg font-bold text-looop-navy mb-2">
                ISCC Certificeringsadviseur
              </h3>
              <p className="text-sm text-looop-navy/50 mb-6">
                Stel vragen over ISCC EU, ISCC PLUS of ISCC CORSIA certificering.
                De agent beantwoordt op basis van officiele ISCC-systeemdocumenten.
              </p>
              <div className="space-y-2">
                {[
                  "Wat zijn de vereisten voor UCO-handel onder ISCC EU?",
                  "Hoe werkt het massabalanssysteem?",
                  "Welke GHG-berekening is nodig voor poultry fat?",
                ].map((q) => (
                  <button
                    key={q}
                    onClick={() => {
                      setInput(q);
                    }}
                    className="block w-full rounded-lg border border-looop-sand/30 bg-white px-4 py-2.5 text-left text-sm text-looop-navy/70 hover:border-looop-teal/50 hover:text-looop-navy transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-3xl space-y-4">
            {messages.map((msg) => (
              <ChatMessage key={msg.id} role={msg.role} content={msg.content} />
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md border border-looop-sand/30 bg-white px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-looop-teal animate-bounce [animation-delay:0ms]" />
                    <span className="h-2 w-2 rounded-full bg-looop-teal animate-bounce [animation-delay:150ms]" />
                    <span className="h-2 w-2 rounded-full bg-looop-teal animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Input area */}
      <div className="border-t border-looop-sand/20 bg-surface px-6 py-4">
        <div className="mx-auto max-w-3xl">
          <ChatInput
            value={input}
            onChange={setInput}
            onSend={handleSend}
            disabled={loading}
          />
          <p className="mt-2 text-center text-xs text-looop-navy/30">
            Antwoorden zijn gebaseerd op officiele ISCC-documenten. Verifieer
            belangrijke beslissingen altijd met een gecertificeerde auditor.
          </p>
        </div>
      </div>
    </div>
  );
}

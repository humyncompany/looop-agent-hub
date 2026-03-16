"use client";

import { useRef, type KeyboardEvent } from "react";
import { cn } from "@/lib/utils/cn";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  disabled?: boolean;
}

export function ChatInput({ value, onChange, onSend, disabled }: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (value.trim() && !disabled) {
        onSend();
      }
    }
  }

  function handleInput() {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = Math.min(textarea.scrollHeight, 160) + "px";
    }
  }

  return (
    <div className="flex items-end gap-3 rounded-xl border border-looop-sand/30 bg-white p-3">
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          handleInput();
        }}
        onKeyDown={handleKeyDown}
        placeholder="Stel een vraag over ISCC-certificering..."
        disabled={disabled}
        rows={1}
        className="flex-1 resize-none bg-transparent text-sm text-looop-navy placeholder:text-looop-sand outline-none"
      />
      <button
        onClick={onSend}
        disabled={disabled || !value.trim()}
        className={cn(
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors",
          value.trim() && !disabled
            ? "bg-looop-teal text-white hover:bg-looop-teal/90"
            : "bg-looop-sand/20 text-looop-sand cursor-not-allowed"
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4"
        >
          <path d="M3.105 2.288a.75.75 0 0 0-.826.95l1.414 4.926A1.5 1.5 0 0 0 5.135 9.25h6.115a.75.75 0 0 1 0 1.5H5.135a1.5 1.5 0 0 0-1.442 1.086l-1.414 4.926a.75.75 0 0 0 .826.95l14.095-5.635a.75.75 0 0 0 0-1.392L3.105 2.288Z" />
        </svg>
      </button>
    </div>
  );
}

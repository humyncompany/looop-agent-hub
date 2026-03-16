"use client";

interface TopbarProps {
  title: string;
}

export function Topbar({ title }: TopbarProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-looop-sand/20 bg-surface/80 backdrop-blur-sm px-6">
      <h1 className="text-xl font-bold text-looop-navy">{title}</h1>

      {/* Notification bell (placeholder) */}
      <button className="relative flex h-10 w-10 items-center justify-center rounded-lg text-looop-navy/60 hover:bg-looop-navy/5 transition-colors">
        <span className="text-xl">🔔</span>
        {/* Unread count badge */}
        <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-looop-orange text-[10px] font-bold text-white">
          2
        </span>
      </button>
    </header>
  );
}

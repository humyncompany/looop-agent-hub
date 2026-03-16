"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/cn";

const navItems = [
  { href: "/dashboard", label: "Agents", icon: "⚡" },
  { href: "/dashboard/iscc", label: "ISCC Adviseur", icon: "📋" },
  { href: "/dashboard/newsletter", label: "Market Updates", icon: "📰" },
  { href: "/dashboard/feedback", label: "Feedback", icon: "💬" },
  { href: "/dashboard/admin", label: "Admin", icon: "⚙️" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col bg-looop-navy text-white">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-6 border-b border-white/10">
        <Image
          src="/images/looop-logo.png"
          alt="Looop Renewables"
          width={120}
          height={32}
          className="brightness-0 invert"
        />
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const isActive =
            item.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-bold transition-colors",
                isActive
                  ? "bg-white/15 text-white"
                  : "text-white/60 hover:bg-white/5 hover:text-white"
              )}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* User section */}
      <div className="border-t border-white/10 px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-looop-blue text-xs font-bold">
            BO
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold truncate">Bart Oosterbosch</p>
            <p className="text-xs text-white/50 truncate">Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

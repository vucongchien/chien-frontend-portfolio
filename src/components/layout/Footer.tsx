"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Diamond from "@/components/ui/Diamond";
import { cn } from "@/lib/utils";

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isNotes = pathname === "/notes" || pathname.startsWith("/notes/");

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left — name */}
          <div className="flex items-center gap-2">
            <Diamond size="sm" color="indigo" />
            <span className="text-sm font-semibold text-slate-800 tracking-[0.01em]">
              Vũ Công Chiến
            </span>
          </div>

          {/* Right — Home & Notes navigation with active state */}
          <nav
            aria-label="Footer navigation"
            className="flex items-center gap-6 text-sm tracking-[0.02em]"
          >
            <Link
              href="/"
              className={cn(
                "transition-colors",
                isHome
                  ? "text-slate-900 font-semibold cursor-default"
                  : "text-slate-400 hover:text-slate-800"
              )}
              aria-current={isHome ? "page" : undefined}
            >
              Home
            </Link>
            <Link
              href="/notes"
              className={cn(
                "transition-colors",
                isNotes
                  ? "text-slate-900 font-semibold cursor-default"
                  : "text-slate-400 hover:text-slate-800"
              )}
              aria-current={isNotes ? "page" : undefined}
            >
              Notes
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import ChangelogTimeline from "@/features/changelog/components/ChangelogTimeline";

export const metadata: Metadata = {
  title: "Changelog · Vũ Công Chiến",
  description: "Changelog updates and release notes.",
};

export default function ChangelogPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 relative overflow-hidden">
      {/* Background subtle decorations */}
      <div className="absolute top-16 right-16 w-3 h-3 bg-indigo-500 rotate-45 opacity-15 pointer-events-none" />
      <div className="absolute top-28 right-28 w-2 h-2 bg-indigo-400 rotate-45 opacity-20 pointer-events-none" />
      <div className="absolute bottom-28 left-16 w-3 h-3 bg-amber-500 rotate-45 opacity-15 pointer-events-none" />
      <div className="absolute bottom-40 left-24 w-1.5 h-1.5 bg-indigo-600 rotate-45 opacity-20 pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 py-16 sm:py-24 relative z-10">
        {/* Page Header */}
        <header className="mb-14 sm:mb-20">
          <p className="text-indigo-400 font-mono text-sm tracking-widest mb-3">
            {"// "}changelog
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Changelog
          </h1>
        </header>

        {/* Timeline Section */}
        <ChangelogTimeline />
      </div>
    </main>
  );
}

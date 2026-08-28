import type { Metadata } from "next";
import { changelogData } from "@/data/changelog";

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
            {'// '}changelog
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Changelog
          </h1>
        </header>

        {/* Timeline Section */}
        <div className="relative">
          {/* Vertical timeline connector line (desktop) */}
          <div className="hidden sm:block absolute left-[150px] top-6 bottom-6 w-px bg-indigo-200/70" />

          <div className="space-y-12 sm:space-y-16">
            {changelogData.map((item) => (
              <section
                key={item.version}
                className="relative grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-4 sm:gap-10 items-start"
              >
                {/* Timeline node dot (desktop) */}
                <div className="hidden sm:flex absolute left-[150px] -translate-x-1/2 top-2 h-3.5 w-3.5 items-center justify-center rounded-full bg-white border-2 border-indigo-600 z-10">
                  <div className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                </div>

                {/* Left Column: Version & Date */}
                <div className="sm:pr-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {item.version}
                  </h2>
                  <time className="text-xs sm:text-sm text-slate-400 mt-1 block font-mono">
                    {item.releaseDate}
                  </time>
                </div>

                {/* Right Column: Clean Content Card */}
                <div className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-7 shadow-xs">
                  <ul className="space-y-3">
                    {item.changes.map((change, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                        <span>{change}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

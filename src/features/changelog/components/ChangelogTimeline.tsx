import { getChangelog } from "@/server/modules/changelog/changelog.service";

export default function ChangelogTimeline() {
  const changelog = getChangelog();

  return (
    <div className="relative">
      {/* Vertical timeline connector line (desktop) */}
      <div className="hidden sm:block absolute left-[150px] top-6 bottom-6 w-px bg-indigo-200/70" />

      <div className="space-y-12 sm:space-y-16">
        {changelog.map((item) => (
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
                {item.changes.map((change) => (
                  <li
                    key={`${item.version}-${change}`}
                    className="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed"
                  >
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
  );
}

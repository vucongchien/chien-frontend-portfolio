"use client";

import { useState } from "react";
import { buildInfo, formatRelativeTime } from "@/lib/version";
import ReleaseHistoryModal from "./ReleaseHistoryModal";

export default function DeployStatusBadge() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        title="Bấm để xem lịch sử deploy và commit"
        className="group inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-slate-200/80 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-800/90 shadow-2xs hover:shadow-xs transition-all text-xs cursor-pointer"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>

        <span className="font-semibold text-slate-700 dark:text-slate-200">
          v{buildInfo.version}
        </span>

        <span className="text-slate-300 dark:text-slate-700">•</span>

        <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          #{buildInfo.latestCommit.hash}
        </span>

        <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>

        <span className="hidden sm:inline text-[11px] text-slate-400">
          {formatRelativeTime(buildInfo.buildTime)}
        </span>
      </button>

      <ReleaseHistoryModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

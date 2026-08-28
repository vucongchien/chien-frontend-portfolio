"use client";

import { useEffect } from "react";
import { buildInfo, formatRelativeTime, formatFullDateTime } from "@/lib/version";

interface ReleaseHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReleaseHistoryModal({ isOpen, onClose }: ReleaseHistoryModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const repoUrl = "https://github.com/vucongchien/chien-frontend-portfolio";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="release-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h2 id="release-modal-title" className="text-base font-semibold text-slate-900 dark:text-white">
                Thông tin Phiên bản & Triển khai
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Lịch sử thay đổi và thông số bản build hiện tại
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Đóng"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Current Build Telemetry Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
              <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider block">Phiên bản</span>
              <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 mt-0.5 block">
                v{buildInfo.version}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
              <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider block">Trạng thái</span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 capitalize">
                  {buildInfo.environment}
                </span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
              <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider block">Commit SHA</span>
              <a
                href={`${repoUrl}/commit/${buildInfo.latestCommit.hash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mt-0.5 block truncate"
              >
                #{buildInfo.latestCommit.hash} ↗
              </a>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
              <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider block">Build Time</span>
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300 mt-0.5 block truncate" title={formatFullDateTime(buildInfo.buildTime)}>
                {formatRelativeTime(buildInfo.buildTime)}
              </span>
            </div>
          </div>

          {/* Commit Changelog Timeline */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Lịch sử thay đổi gần đây ({buildInfo.recentCommits.length} commits)
              </h3>
              <a
                href={`${repoUrl}/commits/main`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
              >
                Xem trên GitHub ↗
              </a>
            </div>

            <div className="space-y-2.5">
              {buildInfo.recentCommits.map((commit, idx) => (
                <div
                  key={commit.hash + idx}
                  className="group p-3 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/70 hover:border-indigo-200 dark:hover:border-indigo-800/50 hover:shadow-sm transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-snug break-words">
                        {commit.message}
                      </p>
                      <div className="flex items-center gap-2 mt-1.5 text-xs text-slate-400">
                        <span className="font-medium text-slate-600 dark:text-slate-400">{commit.author}</span>
                        <span>•</span>
                        <span title={formatFullDateTime(commit.date)}>{formatRelativeTime(commit.date)}</span>
                      </div>
                    </div>

                    <a
                      href={`${repoUrl}/commit/${commit.hash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-[11px] font-mono font-medium text-slate-600 dark:text-slate-300 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950/60 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
                    >
                      {commit.hash}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-400" />
            <span>Built at {formatFullDateTime(buildInfo.buildTime)}</span>
          </div>
          <button
            onClick={onClose}
            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { cn } from "@/lib/utils";

interface BlogFilterBarProps {
  tags: { tag: string; count: number }[];
  selectedTag: string;
  onSelectTag: (tag: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalPosts: number;
}

export default function BlogFilterBar({
  tags,
  selectedTag,
  onSelectTag,
  searchQuery,
  onSearchChange,
  totalPosts,
}: BlogFilterBarProps) {
  return (
    <div className="space-y-3 mb-8">
      {/* Search Input */}
      <div className="relative max-w-xl">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.75}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Tìm bài viết theo tiêu đề, nội dung hoặc #tag..."
          className="w-full pl-10 pr-16 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-300 transition-all"
        />

        <div className="absolute inset-y-0 right-0 pr-3 flex items-center gap-1.5">
          {searchQuery ? (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              className="text-xs font-mono text-slate-400 hover:text-slate-700 transition-colors p-1 rounded"
              aria-label="Xóa tìm kiếm"
            >
              ✕
            </button>
          ) : (
            <kbd className="hidden sm:inline-flex items-center text-[10px] font-mono text-slate-400 bg-slate-50 border border-slate-200 px-1.5 py-0.5 rounded select-none leading-none">
              ⌘K
            </kbd>
          )}
        </div>
      </div>

      {/* Tag Pills — overflow hidden with mask fade */}
      <div className="relative">
        <div className="flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-0.5">
          <button
            type="button"
            onClick={() => onSelectTag("all")}
            className={cn(
              "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 shrink-0 cursor-pointer border whitespace-nowrap",
              selectedTag === "all"
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900"
            )}
          >
            Tất cả
            <span
              className={cn(
                "text-[10px] tabular-nums",
                selectedTag === "all" ? "text-slate-300" : "text-slate-400"
              )}
            >
              {totalPosts}
            </span>
          </button>

          {tags.map(({ tag, count }) => {
            const isSelected = selectedTag.toLowerCase() === tag.toLowerCase();
            return (
              <button
                key={tag}
                type="button"
                onClick={() => onSelectTag(tag)}
                className={cn(
                  "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 shrink-0 cursor-pointer border whitespace-nowrap",
                  isSelected
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900"
                )}
              >
                #{tag}
                <span
                  className={cn(
                    "text-[10px] tabular-nums",
                    isSelected ? "text-slate-300" : "text-slate-400"
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right fade-out mask to signal overflow */}
        <div
          className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-slate-50/60 to-transparent pointer-events-none"
          aria-hidden
        />
      </div>
    </div>
  );
}

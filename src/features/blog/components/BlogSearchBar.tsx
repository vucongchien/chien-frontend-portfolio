"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface BlogSearchBarProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
}

export default function BlogSearchBar({
  value,
  onChange,
  className,
  placeholder = "Tìm kiếm bài viết theo tiêu đề, chủ đề...",
}: BlogSearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  // Phím tắt: Bấm Ctrl+K, Cmd+K hoặc "/" để tự động focus vào ô tìm kiếm
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.key === "/" || ((e.metaKey || e.ctrlKey) && e.key === "k")) &&
        document.activeElement !== inputRef.current &&
        !["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName || "")
      ) {
        e.preventDefault();
        inputRef.current?.focus();
      }

      if (e.key === "Escape" && document.activeElement === inputRef.current) {
        inputRef.current?.blur();
      }
    };

    globalThis.addEventListener("keydown", handleKeyDown);
    return () => globalThis.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className={cn("relative w-full max-w-2xl mx-auto", className)}>
      {/* Search Icon */}
      <div className="absolute inset-y-0 left-0 pl-4.5 flex items-center pointer-events-none text-slate-400">
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
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
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Tìm kiếm bài viết"
        className="w-full pl-12 sm:pl-13 pr-20 py-3.5 sm:py-4 rounded-2xl border border-slate-200 bg-white text-slate-900 text-sm sm:text-base placeholder:text-slate-400 focus:outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200/80 transition-all duration-200 shadow-xs"
      />

      {/* Right Action: Clear button or Keyboard Shortcut */}
      <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center gap-1.5">
        {value ? (
          <button
            type="button"
            onClick={() => {
              onChange("");
              inputRef.current?.focus();
            }}
            className="p-1.5 text-slate-400 hover:text-slate-800 text-sm transition-colors rounded-md cursor-pointer"
            aria-label="Xóa tìm kiếm"
          >
            ✕
          </button>
        ) : (
          <kbd className="hidden sm:inline-flex items-center gap-1 text-xs font-mono text-slate-400 bg-slate-100/90 border border-slate-200 px-2 py-1 rounded-md select-none">
            ⌘K
          </kbd>
        )}
      </div>
    </div>
  );
}

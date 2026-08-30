"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface BlogShareDropdownProps {
  title: string;
  className?: string;
}

function getShareUrl(): string {
  if (globalThis.location !== undefined) {
    return globalThis.location.href;
  }
  return "";
}

export default function BlogShareDropdown({
  title,
  className,
}: BlogShareDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Đóng dropdown khi click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleCopyLink = async () => {
    const url = getShareUrl();
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setIsOpen(false);
      }, 1500);
    } catch {
      // Fallback
    }
  };

  const handleShareZalo = () => {
    const url = encodeURIComponent(getShareUrl());
    globalThis.open(`https://zalo.me/share?url=${url}`, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  const handleShareLinkedIn = () => {
    const url = encodeURIComponent(getShareUrl());
    globalThis.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      "_blank",
      "noopener,noreferrer"
    );
    setIsOpen(false);
  };

  const handleDownloadPdf = () => {
    setIsOpen(false);
    setTimeout(() => {
      globalThis.print();
    }, 100);
  };

  return (
    <div ref={menuRef} className={cn("relative inline-block text-left", className)}>
      {/* Nút trigger Share */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Chia sẻ bài viết"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-700 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer"
      >
        <svg
          className="w-3.5 h-3.5 text-slate-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
          />
        </svg>
        <span>Chia sẻ</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          role="menu"
          aria-label={`Chia sẻ: ${title}`}
          className="absolute right-0 mt-2 w-48 rounded-xl bg-white border border-slate-200/90 shadow-md py-1.5 z-30 animate-in fade-in zoom-in-95 duration-100"
        >
          {/* 1. Copy link */}
          <button
            type="button"
            role="menuitem"
            onClick={handleCopyLink}
            className="w-full flex items-center gap-2.5 px-3.5 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors cursor-pointer text-left"
          >
            <span className="text-sm" aria-hidden="true">
              🔗
            </span>
            <span>{copied ? "Đã sao chép link!" : "Sao chép liên kết"}</span>
          </button>

          {/* 2. Share Zalo */}
          <button
            type="button"
            role="menuitem"
            onClick={handleShareZalo}
            className="w-full flex items-center gap-2.5 px-3.5 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors cursor-pointer text-left"
          >
            <span className="text-sm font-bold text-blue-600" aria-hidden="true">
              Z
            </span>
            <span>Chia sẻ qua Zalo</span>
          </button>

          {/* 3. Share LinkedIn */}
          <button
            type="button"
            role="menuitem"
            onClick={handleShareLinkedIn}
            className="w-full flex items-center gap-2.5 px-3.5 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors cursor-pointer text-left"
          >
            <span className="text-sm font-bold text-blue-700" aria-hidden="true">
              in
            </span>
            <span>Chia sẻ qua LinkedIn</span>
          </button>

          <div className="my-1 border-t border-slate-100" />

          {/* 4. Tải / In PDF */}
          <button
            type="button"
            role="menuitem"
            onClick={handleDownloadPdf}
            className="w-full flex items-center gap-2.5 px-3.5 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors cursor-pointer text-left"
          >
            <span className="text-sm" aria-hidden="true">
              📄
            </span>
            <span>Tải / In PDF</span>
          </button>
        </div>
      )}
    </div>
  );
}

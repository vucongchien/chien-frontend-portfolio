"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface NoteShareDropdownProps {
  title: string;
  className?: string;
}

function getShareUrl(): string {
  if (globalThis.location !== undefined) {
    return globalThis.location.href;
  }
  return "";
}

export default function NoteShareDropdown({
  title,
  className,
}: NoteShareDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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
      // Clipboard write failed
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
      {/* Nút trigger Share — Tối giản theo ảnh 3 */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Chia sẻ bài viết"
        className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer"
      >
        <svg
          className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900 transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.75}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
          />
        </svg>
        <span>Share</span>
      </button>

      {/* Dropdown Menu — Clean Minimal */}
      {isOpen && (
        <div
          role="menu"
          aria-label={`Chia sẻ: ${title}`}
          className="absolute left-0 mt-2 w-44 rounded-lg bg-white border border-slate-200/90 shadow-sm py-1 z-30 animate-in fade-in zoom-in-95 duration-100"
        >
          {/* 1. Copy link */}
          <button
            type="button"
            role="menuitem"
            onClick={handleCopyLink}
            className="w-full flex items-center gap-2 px-3 py-2 text-xs text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors cursor-pointer text-left"
          >
            <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
            </svg>
            <span>{copied ? "Đã sao chép!" : "Sao chép liên kết"}</span>
          </button>

          {/* 2. Share Zalo */}
          <button
            type="button"
            role="menuitem"
            onClick={handleShareZalo}
            className="w-full flex items-center gap-2 px-3 py-2 text-xs text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors cursor-pointer text-left"
          >
            <span className="w-3.5 text-center text-xs font-bold text-blue-600 font-sans" aria-hidden="true">Z</span>
            <span>Chia sẻ qua Zalo</span>
          </button>

          {/* 3. Share LinkedIn */}
          <button
            type="button"
            role="menuitem"
            onClick={handleShareLinkedIn}
            className="w-full flex items-center gap-2 px-3 py-2 text-xs text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors cursor-pointer text-left"
          >
            <span className="w-3.5 text-center text-xs font-bold text-blue-700 font-sans" aria-hidden="true">in</span>
            <span>Chia sẻ qua LinkedIn</span>
          </button>

          <div className="my-1 border-t border-slate-100" />

          {/* 4. In / Tải PDF */}
          <button
            type="button"
            role="menuitem"
            onClick={handleDownloadPdf}
            className="w-full flex items-center gap-2 px-3 py-2 text-xs text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors cursor-pointer text-left"
          >
            <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24-1.04-.37-2.126-.37-3.239A8.96 8.96 0 0112 1.631c3.239 0 6.136 1.705 7.747 4.29a8.965 8.965 0 011.623 5.097c0 1.113-.13 2.199-.37 3.24M12 14.25v7.5m-3-3l3 3 3-3" />
            </svg>
            <span>In / Lưu PDF</span>
          </button>
        </div>
      )}
    </div>
  );
}

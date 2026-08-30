"use client";

import { useState } from "react";
import Link from "next/link";
import type { NotePost } from "@/types";
import NoteShareDropdown from "./NoteShareDropdown";

interface NoteBottomActionProps {
  note: NotePost;
  previous?: NotePost;
  next?: NotePost;
}

export default function NoteBottomAction({
  note,
  previous,
  next,
}: NoteBottomActionProps) {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes((prev) => Math.max(0, prev - 1));
      setIsLiked(false);
    } else {
      setLikes((prev) => prev + 1);
      setIsLiked(true);
    }
  };

  return (
    <footer className="mt-14 pt-6">
      {/* ─── Top Interaction Row (Share & Likes) ─── */}
      <div className="flex items-center justify-between text-xs text-slate-500 pb-5 tracking-[0.035em]">
        {/* Left: Share Button */}
        <div className="flex items-center gap-2">
          <NoteShareDropdown title={note.title} />
        </div>

        {/* Right: Likes Button */}
        <button
          type="button"
          onClick={handleLike}
          className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer"
          aria-label={isLiked ? "Unlike bài viết" : "Like bài viết"}
        >
          <svg
            className={`w-4 h-4 transition-transform group-hover:scale-110 ${
              isLiked ? "fill-rose-500 text-rose-500" : "text-slate-400 group-hover:text-rose-500"
            }`}
            fill={isLiked ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.75}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <span className="font-mono tracking-[0.04em]">{likes} Likes</span>
        </button>
      </div>

      {/* ─── Horizontal Divider Line ─── */}
      <div className="border-t border-slate-200/80" />

      {/* ─── Bottom Navigation Row (← Previous | Next →) ─── */}
      <nav
        aria-label="Notes navigation"
        className="flex items-center justify-between gap-6 py-6 text-xs sm:text-sm text-slate-600 tracking-[0.025em]"
      >
        {/* Previous Post */}
        {previous ? (
          <Link
            href={`/notes/${previous.slug}`}
            className="group flex items-center gap-1.5 hover:text-slate-900 transition-colors max-w-[45%]"
          >
            <span className="shrink-0 group-hover:-translate-x-0.5 transition-transform">←</span>
            <span className="truncate">{previous.title}</span>
          </Link>
        ) : (
          <div aria-hidden="true" className="w-1" />
        )}

        {/* Next Post */}
        {next ? (
          <Link
            href={`/notes/${next.slug}`}
            className="group flex items-center gap-1.5 hover:text-slate-900 transition-colors max-w-[45%] text-right ml-auto"
          >
            <span className="truncate">{next.title}</span>
            <span className="shrink-0 group-hover:translate-x-0.5 transition-transform">→</span>
          </Link>
        ) : (
          <div aria-hidden="true" className="w-1" />
        )}
      </nav>
    </footer>
  );
}

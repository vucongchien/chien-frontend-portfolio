"use client";

import { useState, useMemo } from "react";
import type { NotePost } from "@/types";
import NoteCard from "./NoteCard";

interface NoteFeedProps {
  allNotes: NotePost[];
}

export default function NoteFeed({ allNotes }: NoteFeedProps) {
  const [query, setQuery] = useState("");

  const filteredNotes = useMemo(() => {
    const trimmedQuery = query.trim().toLowerCase();
    if (!trimmedQuery) {
      return allNotes;
    }

    return allNotes.filter(
      (note) =>
        note.title.toLowerCase().includes(trimmedQuery) ||
        note.excerpt.toLowerCase().includes(trimmedQuery) ||
        note.tags.some((t) => t.toLowerCase().includes(trimmedQuery))
    );
  }, [allNotes, query]);

  if (allNotes.length === 0) {
    return (
      <div className="py-16 text-center space-y-2">
        <p className="text-base sm:text-lg font-serif font-bold text-slate-900">
          No notes published yet
        </p>
        <p className="text-xs sm:text-sm text-slate-400 font-light max-w-sm mx-auto leading-relaxed">
          Engineering notes on system architecture, AI agents, and software development will be shared here soon.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Search Input (Subtle, borderless bottom hairline) */}
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search notes..."
          aria-label="Search notes"
          className="w-full text-sm text-slate-900 placeholder:text-slate-400 bg-transparent border-b border-slate-200/80 pb-2.5 focus:outline-none focus:border-slate-400 transition-colors tracking-[0.02em]"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="absolute right-0 top-1 text-slate-400 hover:text-slate-700 cursor-pointer p-1 transition-colors"
            aria-label="Clear search"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {filteredNotes.length === 0 ? (
        <div className="py-10 text-center text-slate-400 text-sm tracking-[0.02em]">
          No notes found matching &ldquo;{query}&rdquo;.
        </div>
      ) : (
        <div className="space-y-7 sm:space-y-8">
          {query.trim() && (
            <p className="text-xs text-slate-400 tracking-[0.035em]">
              Found {filteredNotes.length} note{filteredNotes.length > 1 ? "s" : ""} for &ldquo;{query}&rdquo;
            </p>
          )}
          {filteredNotes.map((note) => (
            <NoteCard key={note.slug} note={note} />
          ))}
        </div>
      )}
    </div>
  );
}

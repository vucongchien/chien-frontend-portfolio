import Link from "next/link";
import type { NotePost } from "@/types";
import { cn, formatDate } from "@/lib/utils";

interface NoteCardProps {
  note: NotePost;
  className?: string;
}

/**
 * Minimalist List Item — Pure Typography & Dynamic Optical Tracking.
 */
export default function NoteCard({ note, className }: NoteCardProps) {
  const formattedDate = formatDate(note.publishedAt);

  return (
    <article className={cn("group block", className)}>
      <Link href={`/notes/${note.slug}`} className="block focus:outline-none">
        <h2 className="text-base sm:text-lg font-normal sm:font-medium text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug tracking-[0.01em]">
          {note.title}
        </h2>
        <time
          dateTime={note.publishedAt}
          className="block text-xs sm:text-sm text-slate-400 mt-1 tracking-[0.035em]"
        >
          {formattedDate}
        </time>
      </Link>
    </article>
  );
}

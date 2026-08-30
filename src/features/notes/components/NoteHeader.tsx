import type { NotePost } from "@/types";
import { formatDate } from "@/lib/utils";

interface NoteHeaderProps {
  note: NotePost;
}

export default function NoteHeader({ note }: NoteHeaderProps) {
  const formattedDate = formatDate(note.publishedAt);

  return (
    <header className="mb-8 sm:mb-10">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight tracking-[-0.01em]">
        {note.title}
      </h1>

      {/* Date */}
      <time
        dateTime={note.publishedAt}
        className="block text-xs sm:text-sm text-slate-400 mt-2 tracking-[0.035em]"
      >
        {formattedDate}
      </time>
    </header>
  );
}

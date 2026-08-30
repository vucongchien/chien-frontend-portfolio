import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllNotes,
  getNoteBySlug,
  getAdjacentNotes,
} from "@/server/modules/notes/notes.service";
import ReadingProgressBar from "@/features/notes/components/ReadingProgressBar";
import NoteHeader from "@/features/notes/components/NoteHeader";
import NoteContent from "@/features/notes/components/NoteContent";
import NoteBottomAction from "@/features/notes/components/NoteBottomAction";
import Footer from "@/components/layout/Footer";

interface NotesDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const notes = getAllNotes();
  return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({
  params,
}: NotesDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    return { title: "Note Not Found · Vũ Công Chiến" };
  }

  return {
    title: `${note.title} · Vũ Công Chiến`,
    description: note.excerpt || note.title,
    openGraph: {
      title: note.title,
      description: note.excerpt || note.title,
      type: "article",
      publishedTime: note.publishedAt,
      authors: [note.author.name],
      tags: note.tags,
    },
  };
}

export default async function NotesDetailPage({ params }: NotesDetailPageProps) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    notFound();
  }

  const { previous, next } = getAdjacentNotes(slug);

  return (
    <div className="relative min-h-screen bg-white flex flex-col">
      <ReadingProgressBar />

      <main className="relative z-10 flex-1 w-full max-w-2xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <article className="w-full">
          {/* Note Title + Date Header (Ảnh 2) */}
          <NoteHeader note={note} />

          {/* Note Content (Ảnh 2) */}
          <NoteContent htmlContent={note.htmlContent} />

          {/* Note Bottom Action: Share + Likes + Navigation (Ảnh 3) */}
          <NoteBottomAction note={note} previous={previous} next={next} />
        </article>
      </main>

      <Footer />
    </div>
  );
}

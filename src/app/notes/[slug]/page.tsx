import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllNotes,
  getNoteBySlug,
  getAdjacentNotes,
} from "@/server/modules/notes/notes.service";
import { getNoteLikes } from "@/server/modules/notes/likes.service";
import ReadingProgressBar from "@/features/notes/components/ReadingProgressBar";
import NoteHeader from "@/features/notes/components/NoteHeader";
import NoteContent from "@/features/notes/components/NoteContent";
import NoteBottomAction from "@/features/notes/components/NoteBottomAction";
import Footer from "@/components/layout/Footer";

import { siteConfig } from "@/config/site";

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
    title: note.title,
    description: note.excerpt || note.title,
    alternates: {
      canonical: `/notes/${note.slug}`,
    },
    openGraph: {
      title: note.title,
      description: note.excerpt || note.title,
      type: "article",
      publishedTime: note.publishedAt,
      authors: [note.author.name],
      tags: note.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: note.title,
      description: note.excerpt || note.title,
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
  const initialLikes = await getNoteLikes(slug);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: note.title,
    description: note.excerpt || note.title,
    datePublished: note.publishedAt,
    dateModified: note.publishedAt,
    author: {
      "@type": "Person",
      name: note.author.name,
      url: siteConfig.author.github,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    keywords: note.tags,
  };

  return (
    <div className="relative min-h-screen bg-white flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <ReadingProgressBar />

      <main className="relative z-10 flex-1 w-full max-w-2xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <article className="w-full">
          {/* Note Title + Date Header (Ảnh 2) */}
          <NoteHeader note={note} />

          {/* Note Content (Ảnh 2) */}
          <NoteContent htmlContent={note.htmlContent} />

          {/* Note Bottom Action: Share + Likes + Navigation (Ảnh 3) */}
          <NoteBottomAction
            note={note}
            previous={previous}
            next={next}
            initialLikes={initialLikes}
          />
        </article>
      </main>

      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import { getAllNotes } from "@/server/modules/notes/notes.service";
import NoteFeed from "@/features/notes/components/NoteFeed";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Notes · Vũ Công Chiến",
  description:
    "I'm starting to write some of my thoughts on working in tech down in writing. Click through below to read the full notes.",
  openGraph: {
    title: "Notes · Vũ Công Chiến",
    description: "Thoughts on tech, software architecture, and frontend engineering.",
    type: "website",
  },
};

export default function NotesPage() {
  const allNotes = getAllNotes();

  return (
    <div className="relative min-h-screen bg-white flex flex-col">
      <main className="relative z-10 flex-1 max-w-2xl w-full mx-auto px-4 sm:px-6 py-16 sm:py-24">
        {/* Intro paragraph at the top exactly matching the screenshot */}
        <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-12 sm:mb-14">
          I&apos;m starting to write some of my thoughts on working in tech down
          in writing. Click through below to read the full notes.
        </p>

        {/* Notes Feed */}
        <NoteFeed allNotes={allNotes} />
      </main>

      <Footer />
    </div>
  );
}

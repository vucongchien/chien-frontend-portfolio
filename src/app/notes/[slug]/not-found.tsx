import Link from "next/link";
import Footer from "@/components/layout/Footer";

export default function NotesNotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <main className="flex-1 max-w-2xl w-full mx-auto px-4 sm:px-6 py-24 sm:py-32 flex flex-col justify-center">
        <div className="space-y-4">
          <p className="text-xs text-slate-400 font-mono tracking-[0.05em]">
            <span aria-hidden="true">{"// "}</span>
            404 NOT FOUND
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-[-0.01em]">
            Note Not Found
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed tracking-[0.02em] max-w-md">
            The note you are looking for might have been renamed, moved, or has not been published yet.
          </p>
          <div className="pt-4">
            <Link
              href="/notes"
              className="inline-flex items-center gap-1.5 text-sm text-indigo-600 hover:text-indigo-800 transition-colors font-medium tracking-[0.02em]"
            >
              <span>← Back to Notes</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

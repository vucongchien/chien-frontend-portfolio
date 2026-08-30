import Link from "next/link";
import type { BlogPost } from "@/types";
import Diamond from "@/components/ui/Diamond";

interface BlogPaginationNavProps {
  previous?: BlogPost;
  next?: BlogPost;
}

export default function BlogPaginationNav({
  previous,
  next,
}: BlogPaginationNavProps) {
  if (!previous && !next) {
    return null;
  }

  return (
    <nav
      aria-label="Blog post navigation"
      className="mt-16 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
      {/* Previous Post */}
      {previous ? (
        <Link
          href={`/blog/${previous.slug}`}
          className="group p-5 rounded-xl border border-slate-200 bg-white hover:border-indigo-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
        >
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 group-hover:text-indigo-600 mb-2">
            <span>←</span>
            <span>{"// "}Bài trước</span>
          </div>
          <div className="font-serif font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
            {previous.title}
          </div>
        </Link>
      ) : (
        <div className="hidden sm:block" />
      )}

      {/* Next Post */}
      {next && (
        <Link
          href={`/blog/${next.slug}`}
          className="group p-5 rounded-xl border border-slate-200 bg-white hover:border-indigo-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between sm:text-right sm:items-end"
        >
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 group-hover:text-indigo-600 mb-2">
            <span>{"// "}Bài tiếp theo</span>
            <Diamond size="xs" color="indigo" />
            <span>→</span>
          </div>
          <div className="font-serif font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
            {next.title}
          </div>
        </Link>
      )}
    </nav>
  );
}

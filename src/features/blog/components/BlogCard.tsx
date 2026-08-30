import Link from "next/link";
import type { BlogPost } from "@/types";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

/**
 * Minimalist List Item — Title + Date + Arrow.
 * Hover: Sáng viền và đổi màu chữ, không đổi màu background.
 */
export default function BlogCard({ post, className }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group w-full flex items-center justify-between gap-4 p-4 sm:p-5 bg-white rounded-xl border border-slate-200/80 hover:border-slate-400 transition-colors duration-150",
        className
      )}
    >
      {/* Title */}
      <h3 className="text-sm sm:text-base font-semibold text-slate-900 leading-snug tracking-tight truncate group-hover:text-indigo-600 transition-colors duration-150 min-w-0">
        {post.title}
      </h3>

      {/* Right: Date + Subtle Arrow */}
      <div className="flex items-center gap-3 shrink-0 text-xs text-slate-400 font-mono">
        <time dateTime={post.publishedAt} className="hidden sm:inline-block">
          {new Date(post.publishedAt).toLocaleDateString("vi-VN", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </time>
        <span
          className="text-slate-300 transition-all duration-150 group-hover:text-indigo-600 group-hover:translate-x-0.5"
          aria-hidden="true"
        >
          →
        </span>
      </div>
    </Link>
  );
}

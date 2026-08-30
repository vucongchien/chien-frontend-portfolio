import type { BlogPost } from "@/types";
import BlogShareDropdown from "./BlogShareDropdown";

interface BlogPostHeaderProps {
  post: BlogPost;
}

export default function BlogPostHeader({ post }: BlogPostHeaderProps) {
  const readingTimeText = post.readingTime
    ? `${post.readingTime} phút đọc`
    : "3 phút đọc";

  return (
    <header className="mb-8 sm:mb-10">
      {/* Title */}
      <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight tracking-tight">
        {post.title}
      </h1>

      {/* Meta Bar: Author · Date · Reading Time (Left) & Share Dropdown (Right) */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 border-t border-slate-200/80 pt-5">
        {/* Left: Author, Date, Reading Time */}
        <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap">
          <span className="font-medium text-slate-700">{post.author.name}</span>
          <span>·</span>
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString("vi-VN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span>·</span>
          <span className="inline-flex items-center gap-1 text-slate-500 font-mono">
            <span>⏱</span>
            <span>{readingTimeText}</span>
          </span>
        </div>

        {/* Right: Share Dropdown Button */}
        <BlogShareDropdown title={post.title} />
      </div>
    </header>
  );
}

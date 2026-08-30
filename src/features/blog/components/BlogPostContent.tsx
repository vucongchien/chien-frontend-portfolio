"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface BlogPostContentProps {
  htmlContent: string;
  className?: string;
}

export default function BlogPostContent({
  htmlContent,
  className,
}: BlogPostContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  // Đảm bảo các thẻ H2, H3 trong HTML được gán ID tương ứng với TOC
  useEffect(() => {
    if (!contentRef.current) {
      return;
    }

    const headings = contentRef.current.querySelectorAll("h2, h3");
    headings.forEach((heading) => {
      if (!heading.id) {
        const text = heading.textContent || "";
        const cleanText = text.replaceAll(/[*_`]/gu, "");
        const id = cleanText
          .toLowerCase()
          .replaceAll(/[^\w\s\u00C0-\u024F\u1EA0-\u1EF9-]/gu, "")
          .replaceAll(/\s+/gu, "-");
        heading.id = id;
      }
    });
  }, []);

  return (
    <div
      ref={contentRef}
      className={cn(
        "prose prose-slate max-w-none text-slate-700 leading-relaxed",
        // Headings styling
        "[&>h2]:text-xl sm:[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mt-10 [&>h2]:mb-5 [&>h2]:pb-2 [&>h2]:border-b [&>h2]:border-slate-200/80 [&>h2]:scroll-mt-24",
        "[&>h3]:text-lg sm:[&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-slate-800 [&>h3]:mt-7 [&>h3]:mb-3 [&>h3]:scroll-mt-24",
        // Paragraphs styling
        "[&>p]:text-sm sm:[&>p]:text-base [&>p]:mb-5 [&>p]:leading-relaxed text-slate-600",
        // Strong & Emphasis
        "[&_strong]:text-slate-900 [&_strong]:font-semibold",
        // Blockquotes
        "[&>blockquote]:border-l [&>blockquote]:border-slate-300 [&>blockquote]:bg-slate-50/80 [&>blockquote]:px-4 [&>blockquote]:py-3 [&>blockquote]:rounded-r-lg [&>blockquote]:my-6 [&>blockquote]:italic [&>blockquote]:text-slate-700",
        // Code styling
        "[&>pre]:bg-slate-900 [&>pre]:text-slate-100 [&>pre]:p-4 [&>pre]:rounded-xl [&>pre]:my-6 [&>pre]:overflow-x-auto [&>pre]:border [&>pre]:border-slate-800 [&>pre]:shadow-xs [&>pre]:font-mono [&>pre]:text-xs sm:[&>pre]:text-sm",
        "[&:not(pre)>code]:bg-slate-100 [&:not(pre)>code]:text-indigo-600 [&:not(pre)>code]:px-1.5 [&:not(pre)>code]:py-0.5 [&:not(pre)>code]:rounded [&:not(pre)>code]:font-mono [&:not(pre)>code]:text-xs [&:not(pre)>code]:font-medium",
        // Lists
        "[&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-5 [&>ul]:space-y-1.5 [&>ul>li]:text-slate-600 text-sm sm:text-base",
        "[&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:mb-5 [&>ol]:space-y-1.5 [&>ol>li]:text-slate-600 text-sm sm:text-base",
        // Horizontal Rule
        "[&>hr]:my-8 [&>hr]:border-slate-200/80",
        className
      )}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}

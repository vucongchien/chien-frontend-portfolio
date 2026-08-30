import { cn } from "@/lib/utils";

interface NoteContentProps {
  htmlContent: string;
  className?: string;
}

/**
 * NoteContent — Render nội dung bài Note theo chuẩn Dynamic Optical Tracking & Vertical Rhythm:
 * - Chữ càng nhỏ tracking càng thưa: Micro 0.05em, Caption 0.035em, Body 0.02em, Heading 0.005em.
 * - Nét chữ thanh thoát, mỏng nhẹ, độ tương phản dịu mắt.
 */
export default function NoteContent({
  htmlContent,
  className,
}: NoteContentProps) {
  return (
    <div
      className={cn(
        "prose prose-slate max-w-none text-slate-600 text-base sm:text-[17px] leading-relaxed tracking-[0.02em] font-normal",
        // First child reset
        "[&>*:first-child]:mt-0",
        // Uniform clean Section Titles (H1, H2, H3, H4, H5, H6) — optical tracking 0.005em
        "[&>:is(h1,h2,h3,h4,h5,h6)]:text-base sm:[&>:is(h1,h2,h3,h4,h5,h6)]:text-lg [&>:is(h1,h2,h3,h4,h5,h6)]:font-semibold [&>:is(h1,h2,h3,h4,h5,h6)]:text-slate-900 [&>:is(h1,h2,h3,h4,h5,h6)]:mt-7 [&>:is(h1,h2,h3,h4,h5,h6)]:mb-2 [&>:is(h1,h2,h3,h4,h5,h6)]:tracking-[0.005em]",
        // Adjacent headings
        "[&>:is(h1,h2,h3,h4)+:is(h1,h2,h3,h4,h5,h6)]:mt-1 [&>:is(h1,h2,h3,h4)+:is(h1,h2,h3,h4,h5,h6)]:mb-2",
        // Paragraphs styling — tracking 0.02em
        "[&>p]:mb-4.5 [&>p]:leading-relaxed text-slate-600 tracking-[0.02em]",
        // Strong & Emphasis
        "[&_strong]:text-slate-900 [&_strong]:font-semibold",
        // Blockquotes — tracking 0.02em
        "[&>blockquote]:border-l-2 [&>blockquote]:border-slate-300 [&>blockquote]:pl-4 [&>blockquote]:py-1 [&>blockquote]:my-5 [&>blockquote]:italic [&>blockquote]:text-slate-700 [&>blockquote]:tracking-[0.02em]",
        // Code styling — monospace with micro tracking 0.04em
        "[&>pre]:bg-slate-900 [&>pre]:text-slate-100 [&>pre]:p-4 [&>pre]:rounded-xl [&>pre]:my-5 [&>pre]:overflow-x-auto [&>pre]:border [&>pre]:border-slate-800 [&>pre]:font-mono [&>pre]:text-xs sm:[&>pre]:text-sm [&>pre]:tracking-[0.04em]",
        "[&:not(pre)>code]:bg-slate-100 [&:not(pre)>code]:text-slate-800 [&:not(pre)>code]:px-1.5 [&:not(pre)>code]:py-0.5 [&:not(pre)>code]:rounded [&:not(pre)>code]:font-mono [&:not(pre)>code]:text-xs [&:not(pre)>code]:font-medium [&:not(pre)>code]:tracking-[0.04em]",
        // Lists
        "[&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-5 [&>ul]:space-y-1.5 text-slate-600 tracking-[0.02em]",
        "[&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:mb-5 [&>ol]:space-y-1.5 text-slate-600 tracking-[0.02em]",
        // Horizontal Rule
        "[&>hr]:my-6 [&>hr]:border-slate-200/80",
        className
      )}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}

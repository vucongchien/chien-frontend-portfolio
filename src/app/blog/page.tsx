import type { Metadata } from "next";
import { getAllPosts } from "@/server/modules/blog/blog.service";
import BlogFeed from "@/features/blog/components/BlogFeed";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Blog · Vũ Công Chiến",
  description:
    "Ghi chép thực chiến về kiến trúc phần mềm, kỹ thuật Frontend và những công nghệ đáng chú ý.",
  openGraph: {
    title: "Blog · Vũ Công Chiến",
    description: "Kiến trúc Frontend, System Thinking và AI Agent.",
    type: "website",
  },
};

const CATEGORIES = ["New Technology", "Frontend", "Architecture"];

export default function BlogPage() {
  const allPosts = getAllPosts();

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Dot pattern background */}
      <div
        className="fixed inset-0 pointer-events-none select-none"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          opacity: 0.35,
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none select-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #ffffff 60%, transparent 100%)",
        }}
      />

      <main className="relative z-10 flex-1 max-w-5xl w-full mx-auto px-4 sm:px-8 py-14 sm:py-20">
        {/* Page heading — Căn giữa hoàn toàn, không sub/eyebrow thừa */}
        <header className="mb-8 sm:mb-10 text-center max-w-2xl mx-auto space-y-3">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-[1.05]">
            Blog
          </h1>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Ghi chép thực chiến về kiến trúc phần mềm, kỹ thuật Frontend và
            những công nghệ đáng chú ý.
          </p>
        </header>

        {/* Blog Feed tích hợp Search Bar + Filter Tabs + Danh sách dọc từ trên xuống dưới */}
        <BlogFeed allPosts={allPosts} categories={CATEGORIES} />
      </main>

      <Footer />
    </div>
  );
}

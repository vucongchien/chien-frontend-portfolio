import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllPosts,
  getPostBySlug,
} from "@/server/modules/blog/blog.service";
import ReadingProgressBar from "@/features/blog/components/ReadingProgressBar";
import BlogPostHeader from "@/features/blog/components/BlogPostHeader";
import BlogPostContent from "@/features/blog/components/BlogPostContent";
import TableOfContents from "@/features/blog/components/TableOfContents";
import Footer from "@/components/layout/Footer";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Bài viết không tìm thấy · Vũ Công Chiến" };
  }

  return {
    title: `${post.title} · Vũ Công Chiến`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="relative min-h-screen flex flex-col">
      <ReadingProgressBar />

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
            "radial-gradient(ellipse 90% 70% at 50% 10%, #ffffff 55%, transparent 100%)",
        }}
      />

      {/*
        Layout 3 Cột Cân Xứng (Symmetrical 3-Column Grid):
        - Cột 1 (Trái): 1fr (Spacer cân đối)
        - Cột 2 (Giữa): min(820px, 100%) -> Bài viết nằm CHÍNH GIỮA TUYỆT ĐỐI màn hình
        - Cột 3 (Phải): 1fr -> Toàn bộ không gian còn lại dành cho Mục lục, cách xa bài viết và sát về phía phải
      */}
      <main className="relative z-10 flex-1 w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="w-full xl:grid xl:items-start xl:gap-6 xl:[grid-template-columns:1fr_min(820px,100%)_1fr]">
          {/* Cột trái (Spacer cân bằng thị giác) */}
          <div aria-hidden="true" className="hidden xl:block" />

          {/* Cột giữa (Content bài viết - CHÍNH GIỮA màn hình) */}
          <article className="w-full max-w-[820px] mx-auto">
            <BlogPostHeader post={post} />
            <BlogPostContent htmlContent={post.htmlContent} />
          </article>

          {/* Cột phải (Mục lục TOC — Chiếm không gian còn lại bên phải, sát phải, cách xa bài viết) */}
          {post.toc.length > 0 && (
            <aside className="hidden xl:flex justify-end sticky top-24 self-start pl-6 2xl:pl-10">
              <TableOfContents items={post.toc} />
            </aside>
          )}
        </div>

        {/* Mobile TOC Drawer Trigger */}
        {post.toc.length > 0 && (
          <div className="xl:hidden">
            <TableOfContents items={post.toc} />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

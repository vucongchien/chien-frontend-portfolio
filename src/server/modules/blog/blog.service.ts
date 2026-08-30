import { marked } from "marked";
import { blogPostsData } from "./blog.data";
import type { BlogPost, BlogTocItem } from "@/types";

/**
 * Tính toán thời gian đọc ước tính dựa trên số lượng từ trong nội dung Markdown (trung bình 200 từ/phút).
 */
export function calculateReadingTime(content: string): number {
  if (!content || !content.trim()) {
    return 1;
  }
  const words = content.trim().split(/\s+/u).length;
  return Math.max(1, Math.ceil(words / 200));
}

/**
 * Trích xuất danh sách Heading (H2, H3) từ Markdown để tự động tạo Mục Lục (Table of Contents).
 */
export function extractHeadings(markdown: string): BlogTocItem[] {
  if (!markdown) {
    return [];
  }

  const headingRegex = /^(?<level>#{2,3})\s+(?<text>.+)$/gmu;
  const toc: BlogTocItem[] = [];
  let match: RegExpExecArray | null = headingRegex.exec(markdown);

  while (match !== null) {
    const rawLevel = match.groups?.level || match[1] || "##";
    const rawText = (match.groups?.text || match[2] || "").trim();
    // Loại bỏ markdown format cơ bản trong heading nếu có (bold, italic, code)
    const cleanText = rawText.replaceAll(/[*_`]/gu, "");
    const id = cleanText
      .toLowerCase()
      .replaceAll(/[^\w\s\u00C0-\u024F\u1EA0-\u1EF9-]/gu, "")
      .replaceAll(/\s+/gu, "-");

    toc.push({
      id,
      text: cleanText,
      level: rawLevel.length,
    });

    match = headingRegex.exec(markdown);
  }

  return toc;
}

/**
 * Chuyển đổi nội dung Markdown sang HTML an toàn.
 */
export function parseMarkdownToHtml(markdown: string): string {
  if (!markdown) {
    return "";
  }
  // Marked.parse trả về string khi không dùng async extensions
  const parsed = marked.parse(markdown);
  return typeof parsed === "string" ? parsed : "";
}

/**
 * Lấy toàn bộ danh sách bài viết blog đã được bổ sung readingTime và sắp xếp theo ngày mới nhất.
 */
export function getAllPosts(): BlogPost[] {
  const posts: BlogPost[] = [];
  for (const item of blogPostsData) {
    posts.push({
      ...item,
      readingTime: calculateReadingTime(item.content),
    });
  }

  return posts.toSorted(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

/**
 * Lấy bài viết nổi bật (featured post). Nếu không có bài nào đánh dấu featured, lấy bài viết mới nhất.
 */
export function getFeaturedPost(): BlogPost | undefined {
  const posts = getAllPosts();
  return posts.find((p) => p.featured) || posts[0];
}

/**
 * Lấy chi tiết bài viết theo slug, kèm theo HTML content đã render và Mục lục (TOC).
 */
export function getPostBySlug(
  slug: string
): (BlogPost & { htmlContent: string; toc: BlogTocItem[] }) | undefined {
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    return undefined;
  }

  const htmlContent = parseMarkdownToHtml(post.content);
  const toc = extractHeadings(post.content);

  return {
    ...post,
    htmlContent,
    toc,
  };
}

/**
 * Lấy danh sách toàn bộ các thẻ tag kèm số lượng bài viết tương ứng.
 */
export function getAllTags(): { tag: string; count: number }[] {
  const posts = getAllPosts();
  const tagMap = new Map<string, number>();

  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
    });
  });

  return [...tagMap.entries()].map(([tag, count]) => ({
    tag,
    count,
  }));
}

/**
 * Lọc bài viết theo thẻ Tag cụ thể.
 */
export function getPostsByTag(tag: string): BlogPost[] {
  if (!tag || tag.toLowerCase() === "all") {
    return getAllPosts();
  }
  return getAllPosts().filter((post) =>
    post.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}

/**
 * Tìm kiếm bài viết theo từ khóa (tiêu đề, tóm tắt trích đoạn, tag).
 */
export function searchPosts(query: string): BlogPost[] {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) {
    return getAllPosts();
  }

  return getAllPosts().filter((post) => {
    const inTitle = post.title.toLowerCase().includes(trimmed);
    const inExcerpt = post.excerpt.toLowerCase().includes(trimmed);
    const inTags = post.tags.some((t) => t.toLowerCase().includes(trimmed));
    return inTitle || inExcerpt || inTags;
  });
}

/**
 * Lấy bài viết liền kề (bài trước và bài tiếp theo) để hỗ trợ điều hướng bài đọc.
 */
export function getAdjacentPosts(
  slug: string
): { previous?: BlogPost; next?: BlogPost } {
  const posts = getAllPosts();
  const currentIndex = posts.findIndex((p) => p.slug === slug);

  if (currentIndex === -1) {
    return {};
  }

  const previous = currentIndex > 0 ? posts[currentIndex - 1] : undefined;
  const next =
    currentIndex < posts.length - 1 ? posts[currentIndex + 1] : undefined;

  return { previous, next };
}

/**
 * Lấy danh sách bài viết nhóm theo category (tag đầu tiên).
 * Dùng cho layout phân section theo chủ đề với horizontal scroll.
 */
export function getPostsGroupedByCategory(): {
  category: string;
  posts: BlogPost[];
}[] {
  const posts = getAllPosts();
  const categoryOrder = ["New Technology", "Frontend", "Architecture"];
  const map = new Map<string, BlogPost[]>();

  for (const post of posts) {
    const cat = post.tags[0] || "Khác";
    const existing = map.get(cat) || [];
    map.set(cat, [...existing, post]);
  }

  return categoryOrder
    .filter((cat) => map.has(cat))
    .map((cat) => ({ category: cat, posts: map.get(cat) ?? [] }));
}

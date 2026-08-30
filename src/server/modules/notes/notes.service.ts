import { marked } from "marked";
import { notesData } from "./notes.data";
import type { NotePost, NoteTocItem } from "@/types";

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
export function extractHeadings(markdown: string): NoteTocItem[] {
  if (!markdown) {
    return [];
  }

  const headingRegex = /^(?<level>#{2,3})\s+(?<text>.+)$/gmu;
  const toc: NoteTocItem[] = [];
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
 * Lấy toàn bộ danh sách bài ghi chép đã được bổ sung readingTime và sắp xếp theo ngày mới nhất.
 */
export function getAllNotes(): NotePost[] {
  const notes: NotePost[] = [];
  for (const item of notesData) {
    notes.push({
      ...item,
      readingTime: calculateReadingTime(item.content),
    });
  }

  return notes.toSorted(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

/**
 * Lấy bài ghi chép nổi bật (featured note). Nếu không có bài nào đánh dấu featured, lấy bài mới nhất.
 */
export function getFeaturedNote(): NotePost | undefined {
  const notes = getAllNotes();
  return notes.find((p) => p.featured) || notes[0];
}

/**
 * Lấy chi tiết bài ghi chép theo slug, kèm theo HTML content đã render và Mục lục (TOC).
 */
export function getNoteBySlug(
  slug: string
): (NotePost & { htmlContent: string; toc: NoteTocItem[] }) | undefined {
  const notes = getAllNotes();
  const note = notes.find((p) => p.slug === slug);
  if (!note) {
    return undefined;
  }

  const htmlContent = parseMarkdownToHtml(note.content);
  const toc = extractHeadings(note.content);

  return {
    ...note,
    htmlContent,
    toc,
  };
}

/**
 * Lấy danh sách toàn bộ các thẻ tag kèm số lượng bài ghi chép tương ứng.
 */
export function getAllTags(): { tag: string; count: number }[] {
  const notes = getAllNotes();
  const tagMap = new Map<string, number>();

  notes.forEach((note) => {
    note.tags.forEach((tag) => {
      tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
    });
  });

  return [...tagMap.entries()].map(([tag, count]) => ({
    tag,
    count,
  }));
}

/**
 * Lọc bài ghi chép theo thẻ Tag cụ thể.
 */
export function getNotesByTag(tag: string): NotePost[] {
  if (!tag || tag.toLowerCase() === "all") {
    return getAllNotes();
  }
  return getAllNotes().filter((note) =>
    note.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}

/**
 * Tìm kiếm bài ghi chép theo từ khóa (tiêu đề, tóm tắt trích đoạn, tag).
 */
export function searchNotes(query: string): NotePost[] {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) {
    return getAllNotes();
  }

  return getAllNotes().filter((note) => {
    const inTitle = note.title.toLowerCase().includes(trimmed);
    const inExcerpt = note.excerpt.toLowerCase().includes(trimmed);
    const inTags = note.tags.some((t) => t.toLowerCase().includes(trimmed));
    return inTitle || inExcerpt || inTags;
  });
}

/**
 * Lấy bài ghi chép liền kề (bài trước và bài tiếp theo) để hỗ trợ điều hướng bài đọc.
 */
export function getAdjacentNotes(
  slug: string
): { previous?: NotePost; next?: NotePost } {
  const notes = getAllNotes();
  const currentIndex = notes.findIndex((p) => p.slug === slug);

  if (currentIndex === -1) {
    return {};
  }

  const previous = currentIndex > 0 ? notes[currentIndex - 1] : undefined;
  const next =
    currentIndex < notes.length - 1 ? notes[currentIndex + 1] : undefined;

  return { previous, next };
}

/**
 * Lấy danh sách bài ghi chép nhóm theo category (tag đầu tiên).
 * Dùng cho layout phân section theo chủ đề với horizontal scroll.
 */
export function getNotesGroupedByCategory(): {
  category: string;
  notes: NotePost[];
}[] {
  const all = getAllNotes();
  const categoryOrder = ["New Technology", "Frontend", "Architecture"];
  const map = new Map<string, NotePost[]>();

  for (const item of all) {
    const cat = item.tags[0] || "Khác";
    const existing = map.get(cat) || [];
    map.set(cat, [...existing, item]);
  }

  return categoryOrder
    .filter((cat) => map.has(cat))
    .map((cat) => ({ category: cat, notes: map.get(cat) ?? [] }));
}

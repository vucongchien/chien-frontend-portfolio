import { describe, it, expect } from "vitest";
import {
  calculateReadingTime,
  extractHeadings,
  parseMarkdownToHtml,
  getAllNotes,
  getFeaturedNote,
  getNoteBySlug,
  getAllTags,
  getNotesByTag,
  searchNotes,
  getAdjacentNotes,
} from "./notes.service";

describe("Notes Service — Business Logic Unit Tests", () => {
  describe("calculateReadingTime", () => {
    it("should return 1 minute for short or empty text", () => {
      expect(calculateReadingTime("")).toBe(1);
      expect(calculateReadingTime("   ")).toBe(1);
      expect(calculateReadingTime("Hello world from testing")).toBe(1);
    });

    it("should calculate approx 200 words per minute", () => {
      const words450 = Array.from({ length: 450 }, () => "word").join(" ");
      // 450 words / 200 wpm = 2.25 -> ceil = 3
      expect(calculateReadingTime(words450)).toBe(3);
    });
  });

  describe("extractHeadings", () => {
    it("should extract H2 and H3 headings correctly with clean IDs", () => {
      const markdown = `
# Title (H1 - should be ignored)
## 1. Introduction & Overview
Some text...
### 1.1 Deep Dive
More text...
## 2. Conclusion
`;
      const headings = extractHeadings(markdown);
      expect(headings).toHaveLength(3);
      expect(headings[0]).toEqual({
        id: "1-introduction-overview",
        text: "1. Introduction & Overview",
        level: 2,
      });
      expect(headings[1]).toEqual({
        id: "11-deep-dive",
        text: "1.1 Deep Dive",
        level: 3,
      });
      expect(headings[2]).toEqual({
        id: "2-conclusion",
        text: "2. Conclusion",
        level: 2,
      });
    });

    it("should return empty array for markdown without H2/H3", () => {
      expect(extractHeadings("Just simple paragraph")).toEqual([]);
    });
  });

  describe("parseMarkdownToHtml", () => {
    it("should parse standard markdown to html", () => {
      const html = parseMarkdownToHtml("## Hello **World**");
      expect(html).toContain("<h2");
      expect(html).toContain("<strong>World</strong>");
    });
  });

  describe("getAllNotes", () => {
    it("should return all notes sorted by publishedAt descending", () => {
      const notes = getAllNotes();
      expect(notes.length).toBeGreaterThan(0);

      for (let i = 0; i < notes.length - 1; i++) {
        const dateA = new Date(notes[i].publishedAt).getTime();
        const dateB = new Date(notes[i + 1].publishedAt).getTime();
        expect(dateA).toBeGreaterThanOrEqual(dateB);
      }
    });

    it("should include computed readingTime on each note", () => {
      const notes = getAllNotes();
      notes.forEach((item) => {
        expect(item.readingTime).toBeDefined();
        expect(item.readingTime).toBeGreaterThanOrEqual(1);
      });
    });
  });

  describe("getFeaturedNote", () => {
    it("should return the featured note if available", () => {
      const featured = getFeaturedNote();
      expect(featured).toBeDefined();
      expect(featured?.slug).toBe("system-thinking-in-frontend-architecture");
    });
  });

  describe("getNoteBySlug", () => {
    it("should return note with htmlContent and toc for valid slug", () => {
      const note = getNoteBySlug("system-thinking-in-frontend-architecture");
      expect(note).toBeDefined();
      expect(note?.title).toBe(
        "Tư Duy Hệ Thống Trong Kiến Trúc Frontend Hiện Đại"
      );
      expect(note?.htmlContent).toContain("<h2");
      expect(note?.toc.length).toBeGreaterThan(0);
    });

    it("should return undefined for invalid slug", () => {
      const note = getNoteBySlug("non-existent-slug-xyz");
      expect(note).toBeUndefined();
    });
  });

  describe("getAllTags", () => {
    it("should aggregate all tags with their counts", () => {
      const tags = getAllTags();
      expect(tags.length).toBeGreaterThan(0);
      const architectureTag = tags.find((t) => t.tag === "Architecture");
      expect(architectureTag).toBeDefined();
      expect(architectureTag?.count).toBeGreaterThanOrEqual(1);
    });
  });

  describe("getNotesByTag", () => {
    it("should filter notes by specific tag case-insensitively", () => {
      const architectureNotes = getNotesByTag("architecture");
      expect(architectureNotes.length).toBeGreaterThan(0);
      architectureNotes.forEach((item) => {
        expect(
          item.tags.some((t) => t.toLowerCase() === "architecture")
        ).toBe(true);
      });
    });

    it("should return all notes when tag is 'all' or empty", () => {
      expect(getNotesByTag("all").length).toBe(getAllNotes().length);
      expect(getNotesByTag("").length).toBe(getAllNotes().length);
    });
  });

  describe("searchNotes", () => {
    it("should search notes by matching title, excerpt or tags", () => {
      const searchResult = searchNotes("Idempotency");
      expect(searchResult.length).toBeGreaterThanOrEqual(1);
    });

    it("should search notes by tag", () => {
      const searchResult = searchNotes("Architecture");
      expect(searchResult.length).toBeGreaterThanOrEqual(1);
    });

    it("should return all notes when query is empty", () => {
      expect(searchNotes("").length).toBe(getAllNotes().length);
      expect(searchNotes("   ").length).toBe(getAllNotes().length);
    });
  });

  describe("getAdjacentNotes", () => {
    it("should return previous and next notes correctly", () => {
      const all = getAllNotes();
      if (all.length >= 3) {
        const middleSlug = all[1].slug;
        const { previous, next } = getAdjacentNotes(middleSlug);
        expect(previous?.slug).toBe(all[0].slug);
        expect(next?.slug).toBe(all[2].slug);
      }
    });

    it("should return empty object for invalid slug", () => {
      const result = getAdjacentNotes("invalid-slug");
      expect(result.previous).toBeUndefined();
      expect(result.next).toBeUndefined();
    });
  });
});

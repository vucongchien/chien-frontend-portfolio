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

  describe("Empty state handling", () => {
    it("getAllNotes should return empty array without crashing", () => {
      const notes = getAllNotes();
      expect(Array.isArray(notes)).toBe(true);
    });

    it("getFeaturedNote should return undefined when no notes exist", () => {
      const featured = getFeaturedNote();
      expect(featured).toBeUndefined();
    });

    it("getNoteBySlug should return undefined for any slug when empty", () => {
      expect(getNoteBySlug("non-existent")).toBeUndefined();
    });

    it("getAllTags should return empty array when no notes exist", () => {
      const tags = getAllTags();
      expect(tags).toEqual([]);
    });

    it("getNotesByTag should return empty array when no notes exist", () => {
      expect(getNotesByTag("architecture")).toEqual([]);
    });

    it("searchNotes should return empty array when no notes exist", () => {
      expect(searchNotes("architecture")).toEqual([]);
    });

    it("getAdjacentNotes should return undefined for previous and next", () => {
      const { previous, next } = getAdjacentNotes("any-slug");
      expect(previous).toBeUndefined();
      expect(next).toBeUndefined();
    });
  });
});

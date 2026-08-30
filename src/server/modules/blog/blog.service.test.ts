import { describe, it, expect } from "vitest";
import {
  calculateReadingTime,
  extractHeadings,
  parseMarkdownToHtml,
  getAllPosts,
  getFeaturedPost,
  getPostBySlug,
  getAllTags,
  getPostsByTag,
  searchPosts,
  getAdjacentPosts,
} from "./blog.service";

describe("Blog Service — Business Logic Unit Tests", () => {
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

  describe("getAllPosts", () => {
    it("should return all posts sorted by publishedAt descending", () => {
      const posts = getAllPosts();
      expect(posts.length).toBeGreaterThan(0);

      for (let i = 0; i < posts.length - 1; i++) {
        const dateA = new Date(posts[i].publishedAt).getTime();
        const dateB = new Date(posts[i + 1].publishedAt).getTime();
        expect(dateA).toBeGreaterThanOrEqual(dateB);
      }
    });

    it("should include computed readingTime on each post", () => {
      const posts = getAllPosts();
      posts.forEach((post) => {
        expect(post.readingTime).toBeDefined();
        expect(post.readingTime).toBeGreaterThanOrEqual(1);
      });
    });
  });

  describe("getFeaturedPost", () => {
    it("should return the featured post if available", () => {
      const featured = getFeaturedPost();
      expect(featured).toBeDefined();
      expect(featured?.slug).toBe("system-thinking-in-frontend-architecture");
    });
  });

  describe("getPostBySlug", () => {
    it("should return post with htmlContent and toc for valid slug", () => {
      const post = getPostBySlug("system-thinking-in-frontend-architecture");
      expect(post).toBeDefined();
      expect(post?.title).toBe(
        "Tư Duy Hệ Thống Trong Kiến Trúc Frontend Hiện Đại"
      );
      expect(post?.htmlContent).toContain("<h2");
      expect(post?.toc.length).toBeGreaterThan(0);
    });

    it("should return undefined for invalid slug", () => {
      const post = getPostBySlug("non-existent-slug-xyz");
      expect(post).toBeUndefined();
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

  describe("getPostsByTag", () => {
    it("should filter posts by specific tag case-insensitively", () => {
      const architecturePosts = getPostsByTag("architecture");
      expect(architecturePosts.length).toBeGreaterThan(0);
      architecturePosts.forEach((post) => {
        expect(
          post.tags.some((t) => t.toLowerCase() === "architecture")
        ).toBe(true);
      });
    });

    it("should return all posts when tag is 'all' or empty", () => {
      expect(getPostsByTag("all").length).toBe(getAllPosts().length);
      expect(getPostsByTag("").length).toBe(getAllPosts().length);
    });
  });

  describe("searchPosts", () => {
    it("should search posts by matching title, excerpt or tags", () => {
      // Search by keyword present in AI agent post title
      const searchResult = searchPosts("Idempotency");
      expect(searchResult.length).toBeGreaterThanOrEqual(1);
    });

    it("should search posts by tag", () => {
      const searchResult = searchPosts("Architecture");
      expect(searchResult.length).toBeGreaterThanOrEqual(1);
    });

    it("should return all posts when query is empty", () => {
      expect(searchPosts("").length).toBe(getAllPosts().length);
      expect(searchPosts("   ").length).toBe(getAllPosts().length);
    });
  });

  describe("getAdjacentPosts", () => {
    it("should return previous and next posts correctly", () => {
      const all = getAllPosts();
      if (all.length >= 3) {
        const middleSlug = all[1].slug;
        const { previous, next } = getAdjacentPosts(middleSlug);
        expect(previous?.slug).toBe(all[0].slug);
        expect(next?.slug).toBe(all[2].slug);
      }
    });

    it("should return empty object for invalid slug", () => {
      const result = getAdjacentPosts("invalid-slug");
      expect(result.previous).toBeUndefined();
      expect(result.next).toBeUndefined();
    });
  });
});

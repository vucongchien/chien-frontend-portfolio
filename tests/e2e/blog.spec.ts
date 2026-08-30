import { test, expect } from "@playwright/test";

test.describe("Blog Feature E2E User Flow", () => {
  test("duyệt danh sách bài viết tại /blog và lọc theo tab chủ đề", async ({
    page,
  }) => {
    // 1. Tải trang /blog
    await page.goto("/blog");
    await expect(page.locator("h1:has-text('Blog')")).toBeVisible();

    // 2. Kiểm tra các Filter Tabs
    await expect(page.getByRole("button", { name: "All" })).toBeVisible();
    await expect(page.getByRole("button", { name: "New Technology" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Frontend" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Architecture" })).toBeVisible();

    // 3. Kiểm tra danh sách bài viết hiển thị phẳng từ trên xuống dưới
    const postLinks = page.locator("a[href^='/blog/']");
    const count = await postLinks.count();
    expect(count).toBeGreaterThanOrEqual(15);

    // 4. Click lọc tab Frontend
    await page.getByRole("button", { name: "Frontend" }).click();
    await expect(
      page.locator("h3:has-text('Design System & W3C Token Standard')")
    ).toBeVisible();
  });

  test("tìm kiếm bài viết nhanh bằng thanh tìm kiếm", async ({ page }) => {
    await page.goto("/blog");

    // 1. Gõ tìm kiếm từ khóa "AI Agent"
    const searchInput = page.locator("input[aria-label='Tìm kiếm bài viết']");
    await expect(searchInput).toBeVisible();
    await searchInput.fill("AI Agent");

    // 2. Kiểm tra kết quả tìm kiếm hiển thị bài viết liên quan
    await expect(page.locator("text=Tìm thấy")).toBeVisible();
    await expect(
      page.locator("h3:has-text('Xây Dựng AI Agent Đáng Tin Cậy')")
    ).toBeVisible();

    // 3. Xóa từ khóa tìm kiếm
    const clearBtn = page.locator("button[aria-label='Xóa tìm kiếm']");
    await clearBtn.click();
    await expect(searchInput).toHaveValue("");
  });

  test("đọc chi tiết bài viết và tương tác với Mục lục (TOC)", async ({
    page,
  }) => {
    // 1. Điều hướng thẳng vào bài viết System Thinking
    await page.goto("/blog/system-thinking-in-frontend-architecture");
    await page.waitForLoadState("domcontentloaded");

    // 2. Kiểm tra Tiêu đề bài viết
    await expect(
      page.locator("h1:has-text('Tư Duy Hệ Thống Trong Kiến Trúc Frontend Hiện Đại')")
    ).toBeVisible();

    // 3. Kiểm tra thông tin tác giả
    await expect(page.locator("text=Vũ Công Chiến").first()).toBeVisible();

    // 4. Kiểm tra Mục lục bài viết (Table of Contents)
    const toc = page.locator("nav[aria-label='Mục lục']");
    if (await toc.isVisible()) {
      await expect(toc.locator("text=1. Mở đầu")).toBeVisible();
    }
  });

  test("hiển thị trang 404 thân thiện khi truy cập bài viết không tồn tại", async ({
    page,
  }) => {
    const response = await page.goto("/blog/invalid-slug-12345");
    expect(response?.status()).toBe(404);
    await expect(page.locator("text=Bài viết không tồn tại")).toBeVisible();
  });
});

import { test, expect } from "@playwright/test";

test.describe("Notes Feature E2E User Flow", () => {
  test("duyệt danh sách bài viết tại /notes", async ({ page }) => {
    // 1. Tải trang /notes
    await page.goto("/notes");
    await expect(
      page.locator("text=I'm starting to write some of my thoughts")
    ).toBeVisible();

    // 2. Kiểm tra danh sách bài viết hiển thị thuần typography
    const postLinks = page.locator("a[href^='/notes/']");
    const count = await postLinks.count();
    expect(count).toBeGreaterThanOrEqual(15);

    // 3. Kiểm tra bài viết hiển thị tiêu đề và ngày tháng
    await expect(
      page.locator("h2:has-text('Tư Duy Hệ Thống Trong Kiến Trúc Frontend Hiện Đại')")
    ).toBeVisible();
  });

  test("tìm kiếm bài viết nhanh bằng thanh tìm kiếm", async ({ page }) => {
    await page.goto("/notes");

    // 1. Gõ tìm kiếm từ khóa "AI Agent"
    const searchInput = page.locator("input[aria-label='Tìm kiếm bài viết']");
    await expect(searchInput).toBeVisible();
    await searchInput.fill("AI Agent");

    // 2. Kiểm tra kết quả tìm kiếm hiển thị bài viết liên quan
    await expect(page.locator("text=Tìm thấy")).toBeVisible();
    await expect(
      page.locator("h2:has-text('Xây Dựng AI Agent Đáng Tin Cậy')")
    ).toBeVisible();

    // 3. Xóa từ khóa tìm kiếm
    const clearBtn = page.locator("button[aria-label='Xóa tìm kiếm']");
    await clearBtn.click();
    await expect(searchInput).toHaveValue("");
  });

  test("đọc chi tiết bài viết, tương tác Like và điều hướng bài đọc", async ({
    page,
  }) => {
    // 1. Điều hướng thẳng vào bài viết System Thinking
    await page.goto("/notes/system-thinking-in-frontend-architecture");
    await page.waitForLoadState("domcontentloaded");

    // 2. Kiểm tra Tiêu đề bài viết
    await expect(
      page.locator("h1:has-text('Tư Duy Hệ Thống Trong Kiến Trúc Frontend Hiện Đại')")
    ).toBeVisible();

    // 3. Kiểm tra nút Likes hoạt động
    const likeBtn = page.locator("button[aria-label='Like bài viết']");
    await expect(likeBtn).toBeVisible();
    await expect(likeBtn).toContainText("0 Likes");
    await likeBtn.click();
    await expect(page.locator("button[aria-label='Unlike bài viết']")).toContainText("1 Likes");

    // 4. Kiểm tra nút Share
    await expect(page.locator("button[aria-label='Chia sẻ bài viết']")).toBeVisible();
  });

  test("hiển thị trang 404 thân thiện khi truy cập bài viết không tồn tại", async ({
    page,
  }) => {
    const response = await page.goto("/notes/invalid-slug-12345");
    expect(response?.status()).toBe(404);
    await expect(page.locator("text=Ghi chép không tồn tại")).toBeVisible();
  });
});

import { test, expect } from "@playwright/test";

test.describe("Notes Feature E2E User Flow", () => {
  test("duyệt danh sách bài viết tại /notes", async ({ page }) => {
    // 1. Tải trang /notes
    await page.goto("/notes");
    await expect(
      page.locator("text=I'm starting to write some of my thoughts")
    ).toBeVisible();

    // 2. Kiểm tra trạng thái hiển thị (Empty State hoặc Feed danh sách)
    const emptyState = page.locator("text=Chưa có bài viết nào");
    const postLinks = page.locator("a[href^='/notes/']");

    if (await emptyState.isVisible()) {
      await expect(emptyState).toBeVisible();
    } else {
      const count = await postLinks.count();
      expect(count).toBeGreaterThanOrEqual(1);
    }
  });

  test("hiển thị trang 404 thân thiện khi truy cập bài viết không tồn tại", async ({
    page,
  }) => {
    const response = await page.goto("/notes/invalid-slug-12345");
    expect(response?.status()).toBe(404);
    await expect(page.locator("text=Ghi chép không tồn tại")).toBeVisible();
  });
});

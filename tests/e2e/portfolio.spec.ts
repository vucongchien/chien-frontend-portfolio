import { test, expect } from "@playwright/test";

test.describe("Portfolio & Changelog E2E User Flow", () => {
  test("duyệt trang chủ và chuyển sang trang Changelog thành công", async ({ page }) => {
    // 1. Tải trang chủ
    await page.goto("/");
    await expect(page.locator("text=Vũ Công Chiến").first()).toBeVisible();

    // 2. Click vào liên kết Changelog ở Footer
    const changelogLink = page.locator("footer a:has-text('Changelog')");
    await expect(changelogLink).toBeVisible();
    await changelogLink.click();

    // 3. Kiểm tra đã chuyển hướng sang trang /changelog
    await expect(page).toHaveURL(/.*\/changelog/);
    await expect(page.locator("h1:has-text('Changelog')")).toBeVisible();

    // 4. Kiểm tra render các version milestones
    await expect(page.locator("text=v0.1.0")).toBeVisible();
    await expect(page.locator("text=v0.0.1")).toBeVisible();
  });
});

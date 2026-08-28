import { test, expect } from "@playwright/test";

test.describe("Portfolio E2E User Flow", () => {
  test("trang chủ tải thành công và hiển thị các section chính", async ({ page }) => {
    await page.goto("/");

    // 1. Kiểm tra tiêu đề trang
    await expect(page).toHaveTitle(/Vũ Công Chiến|Portfolio/i);

    // 2. Kiểm tra phần Hero và thông tin cá nhân
    await expect(page.locator("text=Vũ Công Chiến")).toBeVisible();

    // 3. Kiểm tra Deploy Badge hiển thị ở Footer
    const deployBadge = page.locator("button[title*='deploy và commit']");
    await expect(deployBadge).toBeVisible();

    // 4. Click mở Modal Release History
    await deployBadge.click();
    const modal = page.locator("role=dialog");
    await expect(modal).toBeVisible();
    await expect(page.locator("text=Thông tin Phiên bản & Triển khai")).toBeVisible();

    // 5. Đóng modal bằng phím Escape
    await page.keyboard.press("Escape");
    await expect(modal).not.toBeVisible();
  });
});

import { test, expect } from "@playwright/test";

test.describe("Portfolio E2E User Flow", () => {
  test("duyệt trang chủ và kiểm tra các section chính", async ({ page }) => {
    // 1. Tải trang chủ
    await page.goto("/");
    await expect(page.locator("text=Vũ Công Chiến").first()).toBeVisible();

    // 2. Kiểm tra các liên kết navigation ở footer
    const notesNav = page.locator("footer a:has-text('Notes')");
    await expect(notesNav).toBeVisible();
    await notesNav.click();

    // 3. Kiểm tra chuyển hướng sang trang /notes
    await expect(page).toHaveURL(/\/notes/u);
  });

  test("tương tác với các section và danh sách liên hệ của Portfolio 2026", async ({ page }) => {
    await page.goto("/");

    // 1. Kiểm tra các section chính hiển thị
    await expect(page.locator("h2:has-text('ABOUT')")).toBeVisible();
    await expect(page.locator("h2:has-text('EXPERIENCE')")).toBeVisible();
    await expect(page.locator("h2:has-text('PROJECTS')")).toBeVisible();
    await expect(page.locator("h2:has-text('CERTIFICATIONS & ACTIVITIES')")).toBeVisible();

    // 2. Kiểm tra nút View Projects cuộn tới mục #projects
    const viewProjectsBtn = page.locator("a[aria-label='Scroll down to view projects']");
    await expect(viewProjectsBtn).toBeVisible();

    // 3. Kiểm tra danh sách dự án hiển thị
    await expect(page.locator("h3:has-text('E-commerce AI Agent')")).toBeVisible();
    await expect(page.locator("h3:has-text('Interactive Novel')")).toBeVisible();

    // 4. Kiểm tra các link liên hệ
    const emailLink = page.locator("a[aria-label='gmail']");
    await expect(emailLink).toBeVisible();
  });
});


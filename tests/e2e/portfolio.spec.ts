import { test, expect } from "@playwright/test";

test.describe("Portfolio E2E User Flow", () => {
  test("duyệt trang chủ và kiểm tra các section chính", async ({ page }) => {
    // 1. Tải trang chủ
    await page.goto("/");
    await expect(page.locator("text=Vũ Công Chiến").first()).toBeVisible();

    // 2. Kiểm tra các liên kết navigation ở footer
    const contactNav = page.locator("footer a:has-text('Contact')");
    await expect(contactNav).toBeVisible();
    await contactNav.click();

    // 3. Kiểm tra section Contact xuất hiện
    await expect(page.locator("#contact")).toBeVisible();
  });

  test("tương tác với Contact form, gõ tin nhắn và Clear", async ({ page }) => {
    await page.goto("/#contact");
    const contactSection = page.locator("#contact");
    await expect(contactSection).toBeVisible();

    // Kiểm tra input placeholder
    const input = contactSection.locator('input[placeholder="Say hello..."]');
    await expect(input).toBeVisible();

    // 1. Gõ tin nhắn vào input
    await input.fill("Hello Chien! I would like to collaborate.");
    await expect(input).toHaveValue("Hello Chien! I would like to collaborate.");

    // 2. Click nút Clear
    const clearBtn = contactSection.locator("button[aria-label='Clear message']");
    await expect(clearBtn).toBeVisible();
    await clearBtn.click();
    await expect(input).toHaveValue("");

    // 3. Kiểm tra các pill mạng xã hội ở hàng dưới
    await expect(contactSection.locator("a:has-text('Gmail')")).toBeVisible();
    await expect(contactSection.locator("a:has-text('GitHub')")).toBeVisible();
    await expect(contactSection.locator("a:has-text('Facebook')")).toBeVisible();
  });
});


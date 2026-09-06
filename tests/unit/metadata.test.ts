import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { siteConfig } from "@/config/site";
import renderRootOpenGraphImage, {
  alt,
  size,
  contentType,
  runtime,
} from "@/app/opengraph-image";

describe("SEO & OpenGraph Configuration", () => {
  it("siteConfig should contain valid and consistent metadata", () => {
    expect(siteConfig.name).toBe("Vũ Công Chiến");
    expect(siteConfig.title).toContain("Vũ Công Chiến");
    expect(siteConfig.url).toBe("https://chien-frontend-portfolio.vercel.app");
    expect(siteConfig.author.name).toBe("Vũ Công Chiến");
    expect(siteConfig.author.role).toBe("Software Engineer");
    expect(siteConfig.author.email).toContain("@");

    // Đảm bảo không còn cụm từ cũ 'Minimalist Editorial'
    expect(siteConfig.title.toLowerCase()).not.toContain("minimalist editorial");
    expect(siteConfig.description.toLowerCase()).not.toContain("minimalist editorial");
  });

  it("opengraph-image should export valid dimensions and Node.js runtime", () => {
    expect(runtime).toBe("nodejs");
    expect(contentType).toBe("image/png");
    expect(size.width).toBe(1200);
    expect(size.height).toBe(630);
    expect(alt).toContain("Vũ Công Chiến");
  });

  it("RootOpenGraphImage should render a valid ImageResponse buffer", async () => {
    const response = renderRootOpenGraphImage();
    expect(response).toBeDefined();
    expect(response.status).toBe(200);

    const arrayBuffer = await response.arrayBuffer();
    expect(arrayBuffer.byteLength).toBeGreaterThan(1000);

    // Lưu ảnh kết xuất thực tế vào thư mục brain để kiểm tra trực quan
    const artifactDir =
      "C:/Users/123ch/.gemini/antigravity/brain/caea6569-e871-4fa8-86ad-e41b8dbb58dd";
    if (fs.existsSync(artifactDir)) {
      const previewPath = path.join(artifactDir, "actual_og_preview.png");
      fs.writeFileSync(previewPath, Buffer.from(arrayBuffer));
    }
  });
});

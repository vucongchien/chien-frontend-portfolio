export interface ChangelogItem {
  version: string;
  releaseDate: string;
  changes: string[];
}

export const changelogData: ChangelogItem[] = [
  {
    version: "v0.1.0",
    releaseDate: "13 Tháng 04, 2026",
    changes: [
      "Thiết lập hệ thống CI/CD tự động kiểm tra mã nguồn với GitHub Actions và Oxlint.",
      "Nâng cấp Next.js 16 (Turbopack) và TypeScript 5.9 tối ưu hiệu năng biên dịch.",
      "Xây dựng trang Changelog độc lập theo phong cách Minimalist.",
      "Tích hợp hệ thống kiểm thử tự động End-to-End với Playwright.",
      "Tối ưu hóa khả năng hiển thị Responsive trên thiết bị di động.",
    ],
  },
  {
    version: "v0.0.1",
    releaseDate: "14 Tháng 03, 2026",
    changes: [
      "Khởi tạo dự án Portfolio cá nhân với Next.js và Tailwind CSS.",
      "Thiết kế phần Hero tương tác và giới thiệu bản thân.",
      "Showcase danh sách dự án tiêu biểu và danh mục kỹ năng.",
      "Tích hợp thanh chỉ số cuộn trang (Scroll Indicator) và phần liên hệ.",
    ],
  },
];

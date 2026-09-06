/* eslint-disable new-cap */
import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import { MicrosoftClarity } from "@/components/analytics/MicrosoftClarity";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const lora = Lora({
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vucongchien.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vu Cong Chien · Software Engineer",
    template: "%s · Vu Cong Chien",
  },
  description: "Personal portfolio and engineering showcase of Vu Cong Chien (Software Engineer)",
  openGraph: {
    title: "Vu Cong Chien · Software Engineer",
    description: "Personal portfolio and engineering showcase of Vu Cong Chien (Software Engineer)",
    url: siteUrl,
    siteName: "Vu Cong Chien Portfolio",
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vu Cong Chien · Software Engineer",
    description: "Personal portfolio and engineering showcase of Vu Cong Chien (Software Engineer)",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.variable} antialiased`}>
        {children}
        <MicrosoftClarity />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}


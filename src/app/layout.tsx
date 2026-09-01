/* eslint-disable new-cap */
import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vu Cong Chien · Software Engineer",
  description: "Personal portfolio and engineering showcase of Vu Cong Chien (Software Engineer)",
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
      </body>
    </html>
  );
}

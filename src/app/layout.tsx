import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
  display: 'swap',
})
export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Trang web portfolio của tôi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

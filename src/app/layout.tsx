import type { Metadata } from "next";
import { Tinos } from "next/font/google";
import { AmbientGlow } from "@/components/ui/AmbientGlow";
import { ChatWidget } from "@/components/chat/ChatWidget";
import "./globals.css";

/**
 * The brief calls for Times New Roman. That's a Microsoft system font —
 * devices without it (many phones, Macs, Linux) silently fall back to a
 * different serif. "Tinos" is Google's free, metric-compatible clone of
 * Times New Roman, self-hosted at build time via next/font (no external
 * request, no layout shift), so the page reads as Times New Roman
 * everywhere. next/font/google needs a static weight/style array (not a
 * "vietnamese" subset selection) — Vietnamese glyphs still render via the
 * font's own coverage.
 */
const tinos = Tinos({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-tinos",
});

export const metadata: Metadata = {
  title: "Nấm Lý Tưởng — Sống khỏe mỗi ngày",
  description:
    "Nấm tươi, nấm khô và thực phẩm chế biến từ nấm có nguồn gốc rõ ràng — 22 sản phẩm đạt chuẩn OCOP 3–4 sao, chứng nhận HACCP.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={tinos.variable} data-scroll-behavior="smooth">
      <body className="font-body text-base leading-relaxed antialiased">
        <AmbientGlow />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}

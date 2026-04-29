import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// PROTO専用のメタデータ設定
export const metadata: Metadata = {
  title: {
    default: "PROTO | 仙川のホームページ制作・写真・動画撮影",
    template: "%s | PROTO"
  },
  description: "テレビ局出身の技術者が、論理的なSEO戦略と圧倒的な視覚表現で「選ばれる」サイトを構築。仙川エリアを中心に、HP制作からプロによる撮影まで一貫サポート。",
  keywords: ["仙川", "ホームページ制作", "出張撮影", "動画制作", "PROTO", "調布市", "個人事業主"],
  // SNSでシェアされた時の見え方（OGP）
  openGraph: {
    title: "PROTO | 仙川の制作・撮影スタジオ",
    description: "テレビ局の技術を、あなたのビジネスに。論理的な戦略で成果を最大化します。",
    url: "https://proto-official.com", // 後でご自身のドメインに書き換えてください
    siteName: "PROTO",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PROTO | 仙川のホームページ制作・撮影",
    description: "テレビ局出身の視覚表現力 × 論理的なSEO戦略",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // langを"ja"に変更
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
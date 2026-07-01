import type { Metadata } from "next";
import { Inter, Noto_Sans_JP, Geist_Mono } from "next/font/google";
import "./globals.css";

// 英字タイトル用：洗練された力強さを出す
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
  weight: ['900'], // タイトル用に極太を指定
});

// 日本語本文用：誠実で読みやすい標準的なゴシック
const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  display: 'swap',
  weight: ['400', '700', '900'],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

// PROTO専用のメタデータ設定
export const metadata: Metadata = {
  title: {
    default: "PROTO | 調布・仙川エリアの撮影・動画編集",
    template: "%s | PROTO"
  },
  description: "テレビ局出身の技術者が、撮影から動画編集まで一貫対応。調布・仙川エリアを中心に、企業のPR動画から結婚式・イベント・家族撮影まで承ります。編集のみのご依頼も歓迎です。",
  keywords: ["仙川", "出張撮影", "動画編集", "PR動画制作", "PROTO", "調布市", "結婚式 撮影", "動画編集 フリーランス"],
  
  verification: {
    google: "eu6zDE4BF-cGlA51JSfS9ONFf4_mnRTpGiSw-80OL1c",
  },

  openGraph: {
    title: "PROTO | 仙川の撮影・動画編集",
    description: "テレビ局出身の技術力で、あなたの一瞬とビジネスの魅力を形にします。",
    url: "https://proto-visual.com",
    siteName: "PROTO",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PROTO | 仙川の撮影・動画編集",
    description: "テレビ局出身の視覚表現力 × 動画編集力。撮影のみ・編集のみのご依頼も歓迎。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      // クラス名に新しいフォント変数を適用
      className={`${inter.variable} ${notoSansJP.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#F8FAFC] text-[#1A202C] font-sans">
        {children}
      </body>
    </html>
  );
}
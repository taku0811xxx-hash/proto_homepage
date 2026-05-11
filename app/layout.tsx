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
    default: "PROTO | 調布・仙川エリアの写真・動画撮影、魅力を伝えるホームページ制作",
    template: "%s | PROTO"
  },
  description: "テレビ局出身の技術者が、論理的なSEO戦略と圧倒的な視覚表現で「選ばれる」サイトを構築。調布・仙川エリアを中心に、HP制作からプロによる撮影まで一貫サポート。",
  keywords: ["仙川", "ホームページ制作", "出張撮影", "動画制作", "PROTO", "調布市", "個人事業主"],
  
  verification: {
    google: "eu6zDE4BF-cGlA51JSfS9ONFf4_mnRTpGiSw-80OL1c",
  },

  openGraph: {
    title: "PROTO | 仙川の制作・撮影スタジオ",
    description: "テレビ局の技術を、あなたのビジネスに。論理的な戦略で成果を最大化します。",
    url: "https://proto-visual.com",
    siteName: "PROTO",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PROTO | 仙川 of ホームページ制作・撮影",
    description: "テレビ局出身の視覚表現力 × 論理的なSEO戦略",
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
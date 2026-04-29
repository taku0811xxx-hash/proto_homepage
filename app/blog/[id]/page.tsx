import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { posts } from '../data';

const siteUrl = "https://proto-visual.com";

// 1. ビルド時に全ての記事ページを生成し、404を防ぐロジック
export async function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id,
  }));
}

// 2. SEO用メタデータの動的生成
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const post = posts.find((p) => p.id === id);
  if (!post) return {};

  const description = post.content.substring(0, 120).replace(/\n/g, '') + '...';

  return {
    title: `${post.title} | PROTO.`,
    description: description,
    openGraph: {
      title: post.title,
      description: description,
      type: 'article',
      url: `${siteUrl}/blog/${post.id}`,
      siteName: 'PROTO.',
    },
  };
}

// 3. メインコンポーネント（非同期でparamsを受け取る）
export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = posts.find((p) => p.id === id);

  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "datePublished": post.date.replace(/\./g, '-'),
    "author": { 
      "@type": "Person", 
      "name": "Proto", 
      "url": siteUrl 
    },
    "description": post.content.substring(0, 160).replace(/\n/g, ''),
  };

  return (
    <main className="min-h-screen bg-[#fafafa] text-[#333333] pt-32 md:pt-40 pb-40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-6 md:px-0">
        {/* ナビゲーション */}
        <Link href="/blog" className="group text-[#999] hover:text-[#007AFF] text-[10px] font-bold uppercase tracking-[0.2em] mb-16 inline-flex items-center transition-colors">
          <span className="mr-2 transition-transform group-hover:-translate-x-1">←</span> Back to Blog List
        </Link>
        
        <article>
          {/* ヘッダー */}
          <header className="mb-16 border-b border-black/5 pb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[#007AFF] font-black text-[10px] tracking-[0.3em] uppercase border border-[#007AFF]/20 px-2 py-1">
                {post.cat}
              </span>
              <time className="text-[#999] font-bold text-[10px] tracking-widest uppercase">
                {post.date}
              </time>
            </div>
            <h1 className="text-3xl md:text-[44px] font-black tracking-tight leading-[1.2] text-[#1a1a1a]">
              {post.title}
            </h1>
          </header>

          {/* 本文エリア */}
          <div className="blog-content">
            <div className="text-[#333333] leading-[2.2] text-[16px] md:text-[18px] font-medium whitespace-pre-wrap break-words tracking-wide [font-feature-settings:'palt']">
              {post.content}
            </div>
          </div>
        </article>

        {/* フッター */}
        <div className="mt-32 pt-12 border-t border-black/5 flex flex-col items-center gap-8">
          <p className="text-[10px] font-bold tracking-[0.2em] text-[#999] uppercase">Continue Reading</p>
          <Link href="/blog" className="bg-[#1a1a1a] text-white px-10 py-4 text-[11px] font-black uppercase tracking-[0.3em] hover:bg-[#007AFF] transition-all duration-300 shadow-xl shadow-black/5">
            View All Insights
          </Link>
        </div>
      </div>
    </main>
  );
}
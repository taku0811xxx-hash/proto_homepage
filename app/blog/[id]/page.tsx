'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { posts } from '../data';

export default function BlogDetailPage() {
  const params = useParams();
  const post = posts.find((p) => p.id === params.id);

  if (!post) return <div className="bg-[#fafafa] min-h-screen p-20 text-[#1a1a1a]">Post not found.</div>;

  return (
    <main className="min-h-screen bg-[#fafafa] text-[#333333] pt-32 md:pt-40 pb-40">
      <div className="max-w-3xl mx-auto px-6 md:px-0">
        
        {/* ナビゲーション */}
        <Link href="/blog" className="group text-[#999] hover:text-[#007AFF] text-[10px] font-bold uppercase tracking-[0.2em] mb-16 inline-flex items-center transition-colors">
          <span className="mr-2 transition-transform group-hover:-translate-x-1">←</span> Back to Blog List
        </Link>
        
        <article>
          {/* 記事ヘッダー */}
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
            {/* Reactで文字列内の「■ 見出し」を自動で装飾するのは少し工夫が必要ですが、
              まずはCSS（whitespace-pre-wrap）で読みやすく整えます。
            */}
            <div className="text-[#333333] leading-[2.1] text-[16px] md:text-[18px] font-medium whitespace-pre-wrap break-words italic-none">
              {post.content}
            </div>
          </div>
        </article>

        {/* 記事フッター */}
        <div className="mt-32 pt-12 border-t border-black/5 flex justify-center">
          <Link href="/blog" className="bg-[#1a1a1a] text-white px-10 py-4 text-[11px] font-black uppercase tracking-[0.3em] hover:bg-[#007AFF] transition-all duration-300 shadow-xl shadow-black/5">
            View All Insights
          </Link>
        </div>
      </div>

      <style jsx global>{`
        /* 長文読解のための微調整 */
        .blog-content {
          font-feature-settings: "palt"; /* 文字詰めをして読みやすく */
          letter-spacing: 0.03em;
        }
        
        /* 段落間の余白（data.tsで空行を入れている前提） */
        .blog-content div {
          margin-bottom: 2em;
        }

        /* 2000文字の文章で強調したい部分（■など）の色を変える設定例 */
        /* ※より高度にやるならMarkdownパーサーが必要ですが、まずは色味の調整のみ */
      `}</style>
    </main>
  );
}
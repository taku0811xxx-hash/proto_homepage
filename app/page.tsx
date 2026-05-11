'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// 分割したコンポーネントをインポート
import Hero from './components/Hero';
import Services from './components/Services';
import Templates from './components/Templates';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

export default function ProtoOfficialPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-[#F8FAFC] text-[#1A202C] font-sans selection:bg-[#007AFF] selection:text-white leading-relaxed overflow-x-hidden">

      {/* 1. オープニング演出 */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ y: 0 }}
            exit={{ y: "-100%", transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-white"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="text-4xl md:text-6xl font-black italic tracking-tighter text-[#1A202C]"
            >
              PROTO<span className="text-[#007AFF]">.</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={!loading ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: "circOut", delay: 0.2 }}
        className="fixed top-0 w-full z-[100] flex justify-between items-center px-6 md:px-12 py-6 bg-white/80 backdrop-blur-md border-b border-slate-200"
      >
        <div className="text-2xl font-black tracking-tighter italic text-[#1A202C]">PROTO.</div>
        <div className="hidden lg:flex gap-8 text-[11px] font-bold tracking-[0.1em] uppercase text-[#4A5568] items-center">
          <a href="#visual" className="hover:text-[#007AFF] transition-colors">Visual</a>
          <a href="#web" className="hover:text-[#007AFF] transition-colors">Web</a>
          <a href="#models" className="hover:text-[#007AFF] transition-colors">Templates</a>
          <Link href="/blog" className="hover:text-[#007AFF] transition-colors">Blog</Link>
          <a href="#profile" className="hover:text-[#007AFF] transition-colors">Profile</a>
          <a href="#pricing" className="hover:text-[#007AFF] transition-colors">Pricing</a>
          <a href="#contact" className="bg-[#007AFF] text-white px-8 py-3 rounded-full hover:bg-[#1A202C] transition-all duration-300 shadow-lg shadow-[#007AFF]/20">Contact</a>
        </div>
      </motion.nav>

      {!loading && (
        <div className="relative z-10 pt-20">
          <Hero />
          <Services />
          <Templates />

          {/* 7. Profile Section - 親しみやすいホワイトレイアウト */}
          <section id="profile" className="py-32 px-8 md:px-24 bg-white border-y border-slate-100">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
              
              {/* Profile Image Area */}
              <div className="w-full md:w-80 aspect-[4/5] bg-slate-50 rounded-[40px] border border-slate-200 flex items-center justify-center relative overflow-hidden group shadow-sm">
                <span className="text-slate-200 font-black text-[12rem] absolute -bottom-10 -right-5 italic select-none group-hover:text-[#007AFF]/10 transition-colors duration-700">P</span>
                <div className="relative z-10 text-center">
                   <div className="w-12 h-1 bg-[#007AFF] mx-auto mb-6 rounded-full" />
                   <p className="font-bold tracking-widest text-xs text-[#4A5568] uppercase">Owner / Engineer</p>
                </div>
              </div>

              <div className="w-full md:flex-1">
                <div className="inline-block px-4 py-1 rounded-full bg-[#007AFF]/5 border border-[#007AFF]/10 text-[#007AFF] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
                  Founder Profile
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight text-[#1A202C]">
                  あなたの「想い」を、<br />
                  <span className="relative inline-block text-[#007AFF]">
                    一番近くで形にする。
                    <motion.span 
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="absolute bottom-1 left-0 h-3 bg-[#007AFF]/10 -z-10"
                    />
                  </span>
                </h2>
                <div className="space-y-6 text-[#4A5568] text-base md:text-lg leading-relaxed font-medium">
                  <p>1995年生まれ。理系大学院で培った論理的な思考と、テレビ局での5年間にわたる報道技術職の経験。一分一秒を争う現場で磨いた「伝える」ための技術が、私のクリエイティブの核です。</p>
                  <p>現在は「Proto」として、最新のWeb技術（Next.js）とプロの視覚表現（写真・動画撮影）を掛け合わせ、個人事業主や店舗オーナー様の挑戦に伴走しています。</p>
                  <p>「何から手をつければいいか分からない」という方もご安心ください。難しい言葉は使わず、あなたのビジネスの魅力を引き出すための最善の戦略を、一緒に、論理的に構築します。</p>
                </div>
              </div>
            </div>
          </section>

          {/* 8. Blog Section */}
          <section id="blog" className="py-32 px-8 md:px-24">
            <div className="max-w-7xl mx-auto">
              <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                  <div className="inline-block px-4 py-1 rounded-full bg-[#007AFF]/5 border border-[#007AFF]/10 text-[#007AFF] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Latest Insight</div>
                  <h2 className="text-5xl md:text-7xl font-black tracking-tighter italic uppercase text-[#1A202C]">Blog.</h2>
                </div>
                <Link href="/blog" className="text-[#A0AEC0] hover:text-[#007AFF] text-[10px] font-bold uppercase tracking-widest pb-2 border-b border-slate-200 hover:border-[#007AFF] transition-all">
                  View All Articles →
                </Link>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { id: 'sengawa-seo-2026', date: '2026.05.11', cat: 'SEO', title: '仙川周辺でホームページ制作を検討中の方へ。集客できるサイトの条件' },
                  { id: 'visual-strategy', date: '2026.04.28', cat: 'Visual', title: 'プロフィール写真一枚で成約率は変わる。TV局で学んだ視覚戦略' },
                  { id: 'nextjs-logic', date: '2026.04.15', cat: 'Web', title: 'なぜNext.jsなのか？個人事業主が最新技術を導入すべき理由' },
                ].map((post, i) => (
                  <Link href={`/blog/${post.id}`} key={i}>
                    <motion.article 
                      whileHover={{ y: -10 }} 
                      className="group cursor-pointer bg-white border border-slate-100 p-10 rounded-[32px] h-full transition-all shadow-sm hover:shadow-xl hover:shadow-slate-200/50"
                    >
                      <div className="text-[10px] font-bold text-[#A0AEC0] mb-6 tracking-widest uppercase">
                        {post.date} / <span className="text-[#007AFF]">{post.cat}</span>
                      </div>
                      <h3 className="text-xl font-bold leading-snug group-hover:text-[#007AFF] transition-colors mb-10 text-[#1A202C]">{post.title}</h3>
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#CBD5E0] group-hover:text-[#007AFF] transition-colors">
                        Read Story <span className="text-lg leading-none">+</span>
                      </div>
                    </motion.article>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* 9. FAQ Section */}
          <section id="faq" className="py-32 px-8 md:px-24 bg-white border-y border-slate-100 mx-4 md:mx-12 rounded-[60px] shadow-sm">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter italic uppercase mb-20 text-center text-[#1A202C]">FAQ.</h2>
              <div className="space-y-6">
                {[
                  { q: '撮影とWeb制作をセットでお願いできますか？', a: 'もちろん可能です。ビジュアルとWebサイトを一貫して制作することで、ブランドの統一感が高まります。セット割引もございますので、ぜひご相談ください。' },
                  { q: '制作後の修正はどの程度可能ですか？', a: '月額管理プラン（任意）をご利用の場合、テキスト修正や写真の差し替えは月1回まで無償で承ります。運用中の「ちょっと変えたい」に迅速に対応します。' },
                  { q: '支払い方法を教えてください？', a: '銀行振込のほか、クレジットカード決済にも対応しております。制作費の着手金として50%、納品後に残りの50%をいただく形が一般的ですが、柔軟に調整可能です。' },
                  { q: 'なぜこの価格で高品質なサイトが作れるのですか？', a: '独自開発のテンプレートをベースに制作工程を徹底的に効率化しているからです。浮いたコストをお客様に還元しつつ、最新技術（Next.js）を提供します。' },
                ].map((item, i) => (
                  <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-md transition-all duration-300">
                    <h3 className="text-lg md:text-xl font-bold mb-4 flex gap-4 text-[#1A202C]"><span className="text-[#007AFF]">Q.</span>{item.q}</h3>
                    <p className="text-[#4A5568] text-sm md:text-base leading-relaxed pl-8 border-l-2 border-[#007AFF]/30">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Pricing />
          <Contact />
        </div>
      )}

      <footer className="py-20 text-center text-[10px] text-[#A0AEC0] font-bold tracking-[0.3em] uppercase italic">
        © 2026 PROTO - VISUAL & DIGITAL STUDIO / Tokyo
      </footer>

      <style jsx global>{` 
        html { scroll-behavior: smooth; overflow-x: hidden; } 
        body { margin: 0; background-color: #F8FAFC; color: #1A202C; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #F8FAFC; }
        ::-webkit-scrollbar-thumb { background: #CBD5E0; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #007AFF; }
      `}</style>
    </main>
  );
}
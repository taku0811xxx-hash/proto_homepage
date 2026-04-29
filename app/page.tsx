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
    // 表示時間を 2000ms → 800ms に短縮
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-[#050505] text-[#F5F5F5] font-sans selection:bg-[#007AFF] selection:text-white leading-relaxed">

      {/* 1. オープニング演出 */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ y: 0 }}
            // 速度を duration: 0.9 → 0.5 に加速
            exit={{ y: "-100%", transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="text-4xl md:text-6xl font-black italic tracking-tighter text-white"
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
        // ナビゲーションの登場も少し早める
        transition={{ duration: 0.6, ease: "circOut", delay: 0.2 }}
        className="fixed top-0 w-full z-[100] flex justify-between items-center px-8 py-8 mix-blend-difference"
      >
        <div className="text-2xl font-black tracking-tighter italic text-white">PROTO.</div>
        <div className="hidden md:flex gap-10 text-[11px] font-bold tracking-[0.2em] uppercase text-white">
          <a href="#visual" className="hover:text-[#007AFF] transition">Visual</a>
          <a href="#web" className="hover:text-[#007AFF] transition">Web</a>
          <a href="#models" className="hover:text-[#007AFF] transition">Templates</a>
          <Link href="/blog" className="hover:text-[#007AFF] transition">Blog</Link>
          <a href="#profile" className="hover:text-[#007AFF] transition">Profile</a>
          <a href="#pricing" className="hover:text-[#007AFF] transition">Pricing</a>
          <a href="#contact" className="bg-white text-black px-6 py-2 hover:bg-[#007AFF] hover:text-white transition">Contact</a>
        </div>
      </motion.nav>

      {/* 3. 各セクション（ローディング完了後にマウント） */}
      {!loading && (
        <>
          <Hero />

          <Services />

          <Templates />

          {/* 7. Profile Section */}
          <section id="profile" className="py-40 px-8 md:px-24 bg-[#050505] border-y border-white/10 text-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
              <div className="w-full md:w-1/3 aspect-[4/5] bg-[#111111] border border-white/10 flex items-center justify-center relative overflow-hidden group">
                <span className="text-[#1a1a1a] font-black text-9xl italic group-hover:text-[#007AFF] transition-colors duration-700">P</span>
              </div>
              <div className="w-full md:w-2/3">
                <span className="text-[#007AFF] font-bold text-xs tracking-[0.4em] uppercase mb-4 block">Founder Profile</span>
                <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">
                  伝える、の<br />
                  <span className="text-[#007AFF]">現場で生きてきた。</span>
                </h2>
                <div className="space-y-6 text-[#BBBBBB] text-base md:text-lg leading-relaxed font-medium">
                  <p>1995年生まれ。理系大学・大学院を卒業後、テレビ局にて5年間、報道技術職として現場の最前線で「伝える」技術を磨いてきました。一分一秒を争う極限状態での映像制作経験が、私のクリエイティブの原点です。</p>
                  <p>現在はフリーランスとして、テレビ局仕込みの「圧倒的な視覚表現力」と、論理的な分析力を武器に、WEB制作と写真・動画撮影を行っています。</p>
                  <p>単なる「綺麗」なものを作るのではなく、なぜそのデザインなのか、どうすれば認知が広がるのか。お客様のサービスが「選ばれる」ための戦略を共に構築します。</p>
                </div>
              </div>
            </div>
          </section>

          {/* 8. Blog Section */}
          <section id="blog" className="py-40 px-8 md:px-24 bg-[#050505] text-white">
            <div className="max-w-7xl mx-auto">
              <div className="mb-20 flex justify-between items-end">
                <div>
                  <span className="text-[#007AFF] font-bold text-xs tracking-[0.4em] uppercase mb-4 block">Latest Articles</span>
                  <h2 className="text-6xl md:text-8xl font-black tracking-tighter italic uppercase">Blog.</h2>
                </div>
                <Link href="/blog" className="text-[#666] hover:text-[#007AFF] text-xs font-bold uppercase tracking-widest pb-2 border-b border-white/10 hover:border-[#007AFF] transition-all hidden md:block">
                  View All Posts →
                </Link>
              </div>
              <div className="grid md:grid-cols-3 gap-12">
                {[
                  { id: 'sengawa-seo-2026', date: '2026.04.28', cat: 'SEO', title: '仙川周辺でホームページ制作を検討中の方へ。集客できるサイトの条件' },
                  { id: 'visual-strategy', date: '2026.04.20', cat: 'Visual', title: 'プロフィール写真一枚で成約率は変わる。TV局で学んだ視覚戦略' },
                  { id: 'nextjs-logic', date: '2026.04.15', cat: 'Web', title: 'なぜNext.jsなのか？個人事業主が最新技術を導入すべき理由' },
                ].map((post, i) => (
                  <Link href={`/blog/${post.id}`} key={i}>
                    <motion.article whileHover={{ x: 10 }} className="group cursor-pointer border-b border-white/10 pb-8 h-full">
                      <div className="text-[10px] font-bold text-[#666] mb-4 tracking-widest">{post.date} / <span className="text-[#007AFF]">{post.cat}</span></div>
                      <h3 className="text-xl font-bold leading-tight group-hover:text-[#007AFF] transition mb-6">{post.title}</h3>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#444] group-hover:text-[#007AFF] transition">Read More +</span>
                    </motion.article>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* 9. FAQ Section */}
          <section id="faq" className="py-40 px-8 md:px-24 bg-[#080808] text-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter italic uppercase mb-20 text-center">FAQ.</h2>
              <div className="space-y-12">
                {[
                  { q: '撮影とWeb制作をセットでお願いできますか？', a: 'はい、可能です。ビジュアルとWebサイトを一貫して制作することで、より強固なブランドイメージを構築できるため、セットでのご依頼を強く推奨しております。' },
                  { q: '制作後の修正は可能ですか？', a: '月額管理プランをご契約いただいている場合、月1回までのテキストや写真の差し替え修正を無償で承っております。大幅なレイアウト変更については別途お見積りとなります。' },
                  { q: '支払い方法を教えてください。', a: '銀行振込にて承っております。制作費の着手金として50%、納品後に残りの50%をお支払いいただく形が一般的ですが、ご希望があれば柔軟に対応いたします。' },
                  { q: 'なぜ制作費が30,000円と安いのですか？', a: '独自にカスタマイズした高品質なテンプレートをベースに制作工程を徹底的に効率化しているため、品質を落とさずにこの価格を実現しています。' },
                ].map((item, i) => (
                  <div key={i} className="border-b border-white/10 pb-8">
                    <h3 className="text-lg md:text-xl font-bold mb-4 flex gap-4"><span className="text-[#007AFF]">Q.</span>{item.q}</h3>
                    <p className="text-[#BBBBBB] text-sm md:text-base leading-loose font-medium pl-8 border-l-2 border-[#007AFF]/30">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Pricing />
          <Contact />
        </>
      )}

      <footer className="py-12 border-t border-white/10 text-center text-[10px] text-[#666] font-bold tracking-widest uppercase italic">
        © 2026 PROTO - VISUAL & DIGITAL STUDIO / Tokyo
      </footer>

      <style jsx global>{` 
        html { scroll-behavior: smooth; overflow-x: hidden; } 
        body { margin: 0; background-color: #050505; }
        ::placeholder { color: #444 !important; }
      `}</style>
    </main>
  );
}
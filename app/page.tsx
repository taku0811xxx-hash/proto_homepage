'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// 分割したコンポーネントをインポート
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
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
    <main className="bg-[#F8FAFC] text-[#1A202C] font-sans selection:bg-[#C1692B] selection:text-white leading-relaxed overflow-x-hidden">

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
              className="font-display text-5xl md:text-7xl tracking-wide text-[#1A202C]"
            >
              PROTO<span className="text-[#C1692B]">.</span>
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
        <div className="font-display text-3xl tracking-wide text-[#1A202C]">PROTO</div>
        <div className="hidden lg:flex gap-8 text-[11px] font-bold tracking-[0.1em] uppercase text-[#4A5568] items-center">
          <a href="#visual" className="hover:text-[#C1692B] transition-colors">撮影</a>
          <a href="#edit" className="hover:text-[#C1692B] transition-colors">動画編集</a>
          <a href="#works" className="hover:text-[#C1692B] transition-colors">作品集</a>
          <Link href="/blog" className="hover:text-[#C1692B] transition-colors">ブログ</Link>
          <a href="#profile" className="hover:text-[#C1692B] transition-colors">プロフィール</a>
          <a href="#pricing" className="hover:text-[#C1692B] transition-colors">料金表</a>
          <a href="#contact" className="bg-[#C1692B] text-white px-8 py-3 rounded-full hover:bg-[#1A202C] transition-all duration-300 shadow-lg shadow-[#C1692B]/20">お問い合わせ</a>
        </div>
      </motion.nav>

      {!loading && (
        <div className="relative z-10 pt-20">
          <Hero />
          <Services />
          <Portfolio />

          {/* 7. Profile Section */}
          <section id="profile" className="py-32 px-8 md:px-24 bg-white border-y border-slate-100">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
              
              {/* Profile Image Area */}
              <div className="w-full md:w-80 aspect-[4/5] bg-slate-50 rounded-[40px] border border-slate-200 flex items-center justify-center relative overflow-hidden group shadow-sm">
                <span className="text-slate-200 font-black text-[12rem] absolute -bottom-10 -right-5 italic select-none group-hover:text-[#C1692B]/10 transition-colors duration-700">P</span>
                <div className="relative z-10 text-center">
                   <div className="w-12 h-1 bg-[#C1692B] mx-auto mb-6 rounded-full" />
                   <p className="font-bold tracking-widest text-xs text-[#4A5568] uppercase">Photographer / Editor</p>
                </div>
              </div>

              <div className="w-full md:flex-1">
                <div className="inline-block px-4 py-1 rounded-full bg-[#C1692B]/5 border border-[#C1692B]/10 text-[#C1692B] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
                  Founder Profile
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight text-[#1A202C]">
                  あなたの「一瞬」を、<br />
                  <span className="relative inline-block text-[#C1692B]">
                    一番近くで形にする。
                    <motion.span 
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="absolute bottom-1 left-0 h-3 bg-[#C1692B]/10 -z-10"
                    />
                  </span>
                </h2>
                <div className="space-y-6 text-[#4A5568] text-base md:text-lg leading-relaxed font-medium">
                  <p>1995年生まれ。テレビ局での5年間にわたる報道技術職の経験で、一分一秒を争う現場で「伝える」ための撮影・編集技術を磨きました。</p>
                  <p>現在は「PROTO」として調布・仙川エリアを拠点に、企業のPR動画から結婚式・イベント・家族撮影まで、撮影と編集をワンストップで対応しています。ココナラでは65件以上のご依頼をいただいてきました。</p>
                  <p>撮影のみ、編集のみのご依頼も歓迎です。「何から相談すればいいか分からない」という方もご安心ください。まずはお気軽にご相談ください。</p>
                </div>
              </div>
            </div>
          </section>

          <Testimonials />

          {/* 8. Blog Section */}
          <section id="blog" className="py-32 px-8 md:px-24">
            <div className="max-w-7xl mx-auto">
              <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                  <div className="inline-block px-4 py-1 rounded-full bg-[#C1692B]/5 border border-[#C1692B]/10 text-[#C1692B] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Latest Insight</div>
                  <h2 className="font-display text-6xl md:text-8xl tracking-wide uppercase text-[#1A202C]">Blog.</h2>
                </div>
                <Link href="/blog" className="text-[#A0AEC0] hover:text-[#C1692B] text-[10px] font-bold uppercase tracking-widest pb-2 border-b border-slate-200 hover:border-[#C1692B] transition-all">
                  View All Articles →
                </Link>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {/* 注意: 下記3件はトップページ表示用のプレビューです。/blog/[id] の実ページ(app/blog/data.ts)も
                    同じidで用意しないとリンク先が404になります。data.tsは今回未編集のため、後で合わせて更新してください。 */}
                {[
                  { id: 'sengawa-shooting-2026', date: '2026.05.11', cat: 'Shooting', title: '仙川・調布で出張撮影を頼むなら知っておきたい3つのポイント' },
                  { id: 'video-editing-request', date: '2026.04.28', cat: 'Editing', title: '動画編集だけ依頼したい人へ。素材の送り方と料金の目安' },
                  { id: 'pr-video-tv-technique', date: '2026.04.15', cat: 'PR Video', title: 'テレビ局の現場で学んだ「伝わるPR動画」のつくり方' },
                ].map((post, i) => (
                  <Link href={`/blog/${post.id}`} key={i}>
                    <motion.article 
                      whileHover={{ y: -10 }} 
                      className="group cursor-pointer bg-white border border-slate-100 p-10 rounded-[32px] h-full transition-all shadow-sm hover:shadow-xl hover:shadow-slate-200/50"
                    >
                      <div className="text-[10px] font-bold text-[#A0AEC0] mb-6 tracking-widest uppercase">
                        {post.date} / <span className="text-[#C1692B]">{post.cat}</span>
                      </div>
                      <h3 className="text-xl font-bold leading-snug group-hover:text-[#C1692B] transition-colors mb-10 text-[#1A202C]">{post.title}</h3>
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#CBD5E0] group-hover:text-[#C1692B] transition-colors">
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
              <h2 className="font-display text-6xl md:text-7xl tracking-wide uppercase mb-20 text-center text-[#1A202C]">FAQ.</h2>
              <div className="space-y-6">
                {[
                  { q: '撮影なしで動画編集だけお願いできますか?', a: 'もちろん可能です。撮影済みの素材データをお送りいただくだけで、テロップ・BGM・カット編集まで対応します。' },
                  { q: '撮影と編集をセットでお願いできますか?', a: 'はい、企業様には特に撮影+編集のワンストッププランが人気です。企画から納品まで一貫して対応するため、意図のズレが出にくいメリットがあります。' },
                  { q: '対応エリアはどこまでですか?', a: '調布・仙川を拠点に、都内は交通費無料で対応しています。都外への出張も可能で、その場合は実費を別途ご請求します。' },
                  { q: '納品後の修正はどの程度可能ですか?', a: '動画編集の修正は2回まで無料で対応します。3回目以降は1回¥3,000で承ります。' },
                ].map((item, i) => (
                  <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-md transition-all duration-300">
                    <h3 className="text-lg md:text-xl font-bold mb-4 flex gap-4 text-[#1A202C]"><span className="text-[#C1692B]">Q.</span>{item.q}</h3>
                    <p className="text-[#4A5568] text-sm md:text-base leading-relaxed pl-8 border-l-2 border-[#C1692B]/30">{item.a}</p>
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
        ::-webkit-scrollbar-thumb:hover { background: #C1692B; }
      `}</style>
    </main>
  );
}

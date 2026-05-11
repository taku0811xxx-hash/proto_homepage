'use client';

import { motion, Variants, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const totalPhotos = 17;
const visualImages = Array.from({ length: totalPhotos }, (_, i) => `/images/visual/photo${i + 1}.JPG`);

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  }
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const fadeVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1.0, ease: "easeInOut" } },
  exit: { opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }
};

export default function Services() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % visualImages.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [visualImages.length]);

  return (
    <section className="bg-[#F8FAFC] text-[#1A202C]">
      
      {/* 01. 写真・動画撮影セクション */}
      <section id="visual" className="py-40 px-8 md:px-24 border-t border-slate-200 overflow-hidden bg-white">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={containerVariants} 
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center"
        >
          <motion.div variants={fadeInUp}>
            <div className="inline-flex items-center gap-4 mb-8">
              <span className="bg-[#007AFF] text-white font-black text-sm px-4 py-1 rounded-sm tracking-tighter uppercase">Service 01</span>
              <span className="text-[#1A202C] font-black text-2xl md:text-3xl tracking-tighter border-b-4 border-[#007AFF] pb-1">
                写真・動画撮影
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-none text-[#1A202C]">
              一瞬を<br />
              <span>永遠の資産に</span>
            </h2>
            <p className="text-[#4A5568] text-lg leading-relaxed mb-10 font-medium max-w-xl">
              テレビ局の報道現場で培った「一瞬を逃さない」撮影技術。映画のような質感で、信頼感を高めるポートレートからPR動画まで記録します。
            </p>
            <div className="grid grid-cols-1 gap-6 text-[#1A202C] mb-12">
              {[
                { title: "家族・ライフイベント", tags: "七五三 / 記念撮影 / イベント" },
                { title: "ビジネス・プロフィール", tags: "ポートレート / コーポレート" },
                { title: "ブランド・映像制作", tags: "PR動画制作 / WEB素材撮影" },
              ].map((item, i) => (
                <div key={i} className="border-l-4 border-slate-100 pl-6 group hover:border-[#007AFF] transition-all duration-300">
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <span className="text-[10px] font-bold text-[#A0AEC0] uppercase tracking-[0.2em]">{item.tags}</span>
                </div>
              ))}
            </div>

            {/* リンク先を #pricing に修正 */}
            <Link 
              href="#pricing" 
              className="inline-flex items-center justify-center bg-[#1A202C] text-white px-10 py-5 text-[11px] font-black uppercase tracking-widest hover:bg-[#007AFF] transition-all duration-500 rounded-sm shadow-xl shadow-slate-200"
            >
              撮影メニューと料金を見る →
            </Link>
          </motion.div>

          <motion.div variants={fadeInUp} className="relative aspect-video bg-slate-100 rounded-xl overflow-hidden shadow-2xl group border border-slate-200">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute inset-0"
              >
                <Image
                  src={visualImages[currentImageIndex]}
                  alt={`Visual Sample`}
                  fill
                  className="object-cover"
                  priority={currentImageIndex === 0}
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A202C]/10 to-transparent"></div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </section>

      {/* 02. ホームページ制作セクション */}
      <section id="web" className="py-40 px-8 md:px-24 bg-[#F8FAFC]">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={containerVariants} 
          className="max-w-7xl mx-auto flex flex-col gap-12"
        >
          <div className="grid md:grid-cols-2 gap-20 items-center mb-10">
            <motion.div variants={fadeInUp} className="order-2 md:order-1 relative aspect-video bg-slate-200 rounded-xl overflow-hidden shadow-2xl group border border-slate-200">
              <Image 
                src="/images/web/web-hero.JPG"
                alt="Web Development"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-bl from-[#007AFF]/10 to-transparent"></div>
            </motion.div>

            <motion.div variants={fadeInUp} className="order-1 md:order-2">
              <div className="inline-flex items-center gap-4 mb-8">
                <span className="bg-[#007AFF] text-white font-black text-sm px-4 py-1 rounded-sm tracking-tighter uppercase">Service 02</span>
                <span className="text-[#1A202C] font-black text-2xl md:text-3xl tracking-tighter border-b-4 border-[#007AFF] pb-1">
                  ホームページ制作
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-none text-[#1A202C]">
                思考を<br />
                <span>構造へ落とし込む</span>
              </h2>
              <p className="text-[#4A5568] text-lg leading-relaxed mb-10 font-medium">
                理系的な論理構造と、報道現場で培った「伝える力」を掛け合わせ、集客のインフラとして機能するサイトを構築します。
              </p>
              
              {/* リンク先を #pricing に修正 */}
              <Link 
                href="#pricing" 
                className="inline-flex items-center justify-center bg-[#007AFF] text-white px-10 py-5 text-[11px] font-black uppercase tracking-widest hover:bg-[#1A202C] transition-all duration-500 rounded-sm shadow-xl shadow-[#007AFF]/20"
              >
                制作プランと料金を見る →
              </Link>
            </motion.div>
          </div>

          {/* 強みのカード部分（省略せず維持） */}
          <div className="grid md:grid-cols-3 gap-8 pt-10">
            {[
              {
                title: "完全丸投げOKの文章作成",
                highlight: "取材から執筆まで代行",
                desc: "基本情報さえいただければ、プロの視点で魅力的なキャッチコピーや紹介文をすべて構築。オーナー様の手を止めることなく、高品質なコンテンツを完成させます。"
              },
              {
                title: "逆取材スタイルの強み発見",
                highlight: "報道現場の取材力を応用",
                desc: "テレビ局の報道現場で培った独自のヒアリング技術を用い、ご自身では気づけなかった「本当の強み」を第三者の視点で深掘りし、強力な言語化を行います。"
              },
              {
                title: "戦略的SEO・論理的設計",
                highlight: "Next.jsによる圧倒的な高速化",
                desc: "理系的なアプローチでサイトの「性能」を追求。Next.jsを用いた高速表示と、最適化された論理的構造により、成果を出し続ける集客の土台を作ります。"
              }
            ].map((card, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="bg-white p-10 border border-slate-200 hover:border-[#007AFF]/50 transition-all duration-500 group relative overflow-hidden shadow-sm hover:shadow-md"
              >
                <div className="relative z-10">
                  <span className="text-[#007AFF] font-bold text-[10px] tracking-widest uppercase mb-4 block">{card.highlight}</span>
                  <h3 className="text-2xl font-black mb-6 text-[#1A202C] leading-tight">{card.title}</h3>
                  <div className="w-8 h-[2px] bg-[#007AFF] mb-6 group-hover:w-full transition-all duration-700"></div>
                  <p className="text-[#4A5568] text-[15px] leading-loose font-medium">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 03. セットプラン */}
      <section id="branding" className="py-40 px-8 md:px-24 bg-[#C0CDDC] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/10 text-[20vw] font-black italic whitespace-nowrap select-none pointer-events-none uppercase">
          Complete
        </div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center text-[#1A202C] relative z-10"
        >
          <span className="text-black font-bold text-[10px] tracking-[0.5em] uppercase mb-8 inline-block bg-white px-4 py-1 rounded-sm shadow-xl">Best Choice for Business</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[1.3]">
            表現と機能を<br />
            ひとつに
          </h2>
          
          <div className="bg-white/10 p-8 md:p-12 backdrop-blur-xl border border-white/20 text-left rounded-sm shadow-2xl mt-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6 border-b border-white/20 pb-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold italic uppercase tracking-tighter text-[#1A202C]">撮影 + Web 制作セット</h3>
              <div className="text-xs font-bold tracking-widest bg-white text-[#007AFF] px-4 py-2 uppercase rounded-sm">推奨プラン</div>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              <p className="text-black/90 text-sm leading-loose font-medium">
                撮影とサイト制作を一貫して行うことで、デザインと素材の「ズレ」をゼロにします。一貫したトーン＆マナーで、あなたのビジネスに圧倒的な信頼感をもたらす最強の選択肢です。
              </p>
              <ul className="space-y-3">
                {[
                  "プロによる素材撮影一式",
                  "全ページ文章作成（丸投げOK）",
                  "Next.js 高速サイト構築",
                  "ドメイン・保守管理サポート"
                ].map((list, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#1A202C]">
                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {list}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 text-center">
              {/* リンク先を #pricing に修正 */}
              <Link 
                href="#pricing" 
                className="inline-block bg-white text-[#007AFF] px-12 py-5 text-xs font-black uppercase tracking-[0.3em] hover:bg-[#1A202C] hover:text-white transition-all duration-300 rounded-sm shadow-xl"
              >
                セットプランの価格を確認する
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </section>
  );
}
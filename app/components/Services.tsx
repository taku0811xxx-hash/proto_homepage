'use client';

import { motion, Variants, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

/**
 * 17枚の写真スライドショー設定
 * public/images/visual/ フォルダ内に
 * photo1.JPG 〜 photo17.JPG を配置してください。
 */
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
  animate: { 
    opacity: 1, 
    transition: { duration: 1.0, ease: "easeInOut" }
  },
  exit: { 
    opacity: 0, 
    transition: { duration: 0.8, ease: "easeInOut" } 
  }
};

export default function Services() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 2.5秒ごとに写真を切り替えるロジック
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % visualImages.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [visualImages.length]);

  return (
    <section className="bg-[#050505] text-white">
      
      {/* 01. Visual Production (撮影セクション) */}
      <section id="visual" className="py-40 px-8 md:px-24 border-t border-white/10 overflow-hidden">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={containerVariants} 
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center"
        >
          <motion.div variants={fadeInUp}>
            <span className="text-[#007AFF] font-bold text-xs tracking-[0.4em] uppercase mb-6 block">Service 01 / Visual</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none">
              一瞬を、<br />
              <span className="text-[#007AFF]">永遠の資産に。</span>
            </h2>
            <p className="text-[#BBBBBB] text-lg leading-relaxed mb-10 font-medium">
              テレビ局の報道現場で培った「一瞬を逃さない」撮影技術。映画のような質感で、家族の記憶からビジネスの信頼感を高めるポートレート、高品位なPR動画まで、プロの機材と視点で記録します。
            </p>
            <div className="grid grid-cols-1 gap-6 text-white">
              {[
                { title: "家族・ライフイベント", tags: "七五三 / 記念撮影 / イベント" },
                { title: "ビジネス・プロフィール", tags: "ポートレート / コーポレート / ブランディング" },
                { title: "ブランド・映像制作", tags: "PR動画制作 / WEB素材撮影" },
              ].map((item, i) => (
                <div key={i} className="border-l border-[#007AFF]/30 pl-6 group hover:border-[#007AFF] transition-colors">
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <span className="text-[10px] font-bold text-[#666] uppercase tracking-[0.2em]">{item.tags}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* スライドショー表示エリア */}
          <motion.div variants={fadeInUp} className="relative aspect-video bg-[#111] border border-white/10 overflow-hidden rounded-sm shadow-xl group">
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
                  alt={`PROTO. Visual Sample ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                  priority={currentImageIndex === 0}
                  sizes="(max-w-7xl) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </motion.div>
            </AnimatePresence>
            <div className="absolute bottom-4 left-4 z-20 flex gap-2 items-center bg-black/40 backdrop-blur-md px-3 py-1 rounded-full">
              <span className="text-[10px] font-mono text-white/70">
                {String(currentImageIndex + 1).padStart(2, '0')} / {String(visualImages.length).padStart(2, '0')}
              </span>
            </div>
            <span className="absolute bottom-4 right-4 text-[#F5F5F5]/30 font-black text-6xl italic group-hover:text-[#007AFF]/50 transition-colors duration-700 select-none z-10">PHOTO</span>
          </motion.div>
        </motion.div>
      </section>

      {/* 02. Web Development (Web制作セクション) */}
      <section id="web" className="py-40 px-8 md:px-24 bg-[#080808]">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={containerVariants} 
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center"
        >
          <motion.div variants={fadeInUp} className="order-2 md:order-1 relative aspect-video bg-[#111] border border-white/10 flex items-center justify-center overflow-hidden group">
            <span className="text-[#1a1a1a] font-black text-7xl md:text-9xl italic group-hover:text-[#007AFF]/20 transition-colors duration-700 select-none">WEB</span>
            <div className="absolute inset-0 bg-gradient-to-bl from-[#007AFF]/5 to-transparent"></div>
          </motion.div>
          <motion.div variants={fadeInUp} className="order-1 md:order-2">
            <span className="text-[#007AFF] font-bold text-xs tracking-[0.4em] uppercase mb-6 block">Service 02 / Web</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none">
              思考を、<br />
              <span className="text-[#007AFF]">構造へ落とし込む。</span>
            </h2>
            <p className="text-[#BBBBBB] text-lg leading-relaxed mb-10 font-medium">
              文章作成まで「丸投げ」でOK。テレビ局仕込みの取材力を活かし、あなたも気づかなかったお店の魅力を論理的に言語化。Next.jsを用いた超高速なサイト構築で、集客の土台を作ります。
            </p>
            <div className="grid grid-cols-1 gap-8">
              {[
                { title: "【完全丸投げOK】文章作成の代行", desc: "基本情報からキャッチコピーや紹介文をすべて構築。忙しいオーナーの手を止めることはありません。" },
                { title: "【逆取材スタイル】強みの発見", desc: "報道現場で培った取材力を活かし、お店の本当の価値を深掘り。第三者視点での納得感を生み出します。" },
                { title: "戦略的SEO・論理的設計", desc: "単なるデザインではなく、Next.jsによる高速表示と最新のSEO指標に基づいた構造を構築します。" }
              ].map((card, i) => (
                <div key={i} className="group cursor-default">
                  <h3 className="text-lg font-bold mb-2 flex items-center gap-3 text-white">
                    <span className="w-1 h-1 bg-[#007AFF]"></span>{card.title}
                  </h3>
                  <p className="text-[#999] text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 03. Total Branding (セット販売セクション) */}
      <section id="branding" className="py-40 px-8 md:px-24 bg-[#007AFF] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 text-[20vw] font-black italic whitespace-nowrap select-none pointer-events-none uppercase">
          Complete
        </div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center text-white relative z-10"
        >
          <span className="text-black font-bold text-[10px] tracking-[0.5em] uppercase mb-8 inline-block bg-white px-4 py-1">Best Choice for Business</span>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
            表現と機能を、<br />
            ひとつに。
          </h2>
          <p className="text-white/90 text-xl md:text-2xl leading-relaxed mb-12 font-bold">
            写真がない、素材がない。そんな方のための「全部入り」プラン。<br />
            撮影とWeb制作を同時進行し、ブランドの熱量を100%再現します。
          </p>
          
          <div className="bg-black/20 p-8 md:p-12 backdrop-blur-xl border border-white/30 text-left rounded-sm shadow-2xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6 border-b border-white/20 pb-8 text-white">
              <h3 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter">Visual + Web Bundle</h3>
              <div className="text-xs font-bold tracking-widest bg-white text-[#007AFF] px-4 py-2 uppercase">推奨プラン</div>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-4 text-sm leading-loose text-white/80 font-medium">
                <p>撮影とサイト制作を一貫して行うことで、デザインと素材の「ズレ」をゼロにします。</p>
                <p>一貫したトーン＆マナーで、圧倒的な信頼感をもたらす最強の選択肢です。</p>
              </div>
              <ul className="space-y-3">
                {["プロによる素材撮影一式", "全ページ文章作成（丸投げOK）", "Next.js 高速サイト構築", "ドメイン・保守管理サポート"].map((list, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-white">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {list}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

    </section>
  );
}
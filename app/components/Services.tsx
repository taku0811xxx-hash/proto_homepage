'use client';

import { motion, Variants, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

/**
 * 資産読み込み設定
 * 撮影用：public/images/visual/photo1.JPG 〜 photo17.JPG (計17枚)
 * WEB用：public/images/web/web-hero.JPG
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

  // 2.5秒ごとに撮影セクションのスライドショーを更新
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % visualImages.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [visualImages.length]);

  return (
    <section className="bg-[#050505] text-white">
      
      {/* 01. 写真・動画撮影セクション */}
      <section id="visual" className="py-40 px-8 md:px-24 border-t border-white/10 overflow-hidden">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={containerVariants} 
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center"
        >
          <motion.div variants={fadeInUp}>
            {/* わかりやすい枠付きタイトル */}
            <div className="inline-flex items-center gap-4 mb-8">
              <span className="bg-[#007AFF] text-white font-black text-sm px-4 py-1 rounded-sm tracking-tighter uppercase">Service 01</span>
              <span className="text-white font-black text-2xl md:text-3xl tracking-tighter border-b-4 border-[#007AFF] pb-1">
                写真・動画撮影
              </span>
            </div>
            
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
            <span className="absolute bottom-4 right-4 text-[#F5F5F5]/30 font-black text-6xl italic group-hover:text-[#007AFF]/50 transition-colors duration-700 select-none z-10">PHOTO</span>
          </motion.div>
        </motion.div>
      </section>

      {/* 02. ホームページ制作セクション */}
      <section id="web" className="py-40 px-8 md:px-24 bg-[#080808]">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={containerVariants} 
          className="max-w-7xl mx-auto flex flex-col gap-20"
        >
          <div className="grid md:grid-cols-2 gap-20 items-center">
            {/* Web制作 イメージ画像エリア */}
            <motion.div variants={fadeInUp} className="order-2 md:order-1 relative aspect-video bg-[#111] border border-white/10 overflow-hidden rounded-sm shadow-xl group">
              <Image 
                src="/images/web/web-hero.JPG"
                alt="Web Development Concept"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-w-7xl) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-bl from-[#007AFF]/20 to-transparent"></div>
              <span className="absolute bottom-4 left-4 text-[#F5F5F5]/30 font-black text-6xl italic group-hover:text-[#007AFF]/50 transition-colors duration-700 select-none z-10">WEB</span>
            </motion.div>

            <motion.div variants={fadeInUp} className="order-1 md:order-2">
              {/* 枠付きタイトル */}
              <div className="inline-flex items-center gap-4 mb-8">
                <span className="bg-[#007AFF] text-white font-black text-sm px-4 py-1 rounded-sm tracking-tighter uppercase">Service 02</span>
                <span className="text-white font-black text-2xl md:text-3xl tracking-tighter border-b-4 border-[#007AFF] pb-1">
                  ホームページ制作
                </span>
              </div>

              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none">
                思考を、<br />
                <span className="text-[#007AFF]">構造へ落とし込む。</span>
              </h2>
              <p className="text-[#BBBBBB] text-lg leading-relaxed mb-10 font-medium">
                ホームページ制作は「作る」ことがゴールではありません。Protoは、理系的な論理構造と、報道現場で培った「伝える力」を掛け合わせ、集客のインフラとして機能するサイトを構築します。
              </p>
            </motion.div>
          </div>

          {/* 強みの3カラム詳細カード（文章増量版） */}
          <div className="grid md:grid-cols-3 gap-8 pt-10">
            {[
              {
                title: "完全丸投げOKの文章作成",
                highlight: "取材から執筆まで代行",
                desc: "「何を書けばいいかわからない」という悩みは不要です。基本情報さえいただければ、プロの視点で魅力的なキャッチコピーや紹介文をすべて構築。オーナー様の手を止めることなく、高品質なコンテンツを完成させます。"
              },
              {
                title: "逆取材スタイルの強み発見",
                highlight: "報道現場の取材力を応用",
                desc: "テレビ局の報道現場で培った独自のヒアリング技術を用います。ご自身では気づけなかった「本当の強み」を第三者の視点で深掘りし、顧客が思わず納得してしまうような強力な言語化・差別化を行います。"
              },
              {
                title: "戦略的SEO・論理的設計",
                highlight: "Next.jsによる圧倒的な高速化",
                desc: "単なるデザインの美しさだけでなく、理系的なアプローチでサイトの「性能」を追求。Next.jsを用いた高速表示と、検索エンジンに最適化された論理的構造により、中長期的に成果を出し続ける集客の土台を作ります。"
              }
            ].map((card, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="bg-[#111] p-10 border border-white/5 hover:border-[#007AFF]/50 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#007AFF]/5 -translate-y-12 translate-x-12 rounded-full group-hover:bg-[#007AFF]/20 transition-colors"></div>
                <div className="relative z-10">
                  <span className="text-[#007AFF] font-bold text-[10px] tracking-widest uppercase mb-4 block">{card.highlight}</span>
                  <h3 className="text-2xl font-black mb-6 text-white leading-tight">{card.title}</h3>
                  <div className="w-8 h-[2px] bg-[#007AFF] mb-6 group-hover:w-full transition-all duration-700"></div>
                  <p className="text-[#999] text-[15px] leading-loose font-medium">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 03. セットプラン (トータルブランディング) */}
      <section id="branding" className="py-40 px-8 md:px-24 bg-[#007AFF] relative overflow-hidden">
        {/* 背景の巨大テキスト */}
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
              <h3 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter">撮影 + Web 制作セット</h3>
              <div className="text-xs font-bold tracking-widest bg-white text-[#007AFF] px-4 py-2 uppercase">推奨プラン</div>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-4 text-sm leading-loose text-white/80 font-medium">
                <p>撮影とサイト制作を一貫して行うことで、デザインと素材の「ズレ」をゼロにします。</p>
                <p>一貫したトーン＆マナーで、あなたのビジネスに圧倒的な信頼感をもたらす最強の選択肢です。</p>
              </div>
              <ul className="space-y-3">
                {[
                  "プロによる素材撮影一式",
                  "全ページ文章作成（丸投げOK）",
                  "Next.js 高速サイト構築",
                  "ドメイン・保守管理サポート"
                ].map((list, i) => (
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
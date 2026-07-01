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
                { title: "結婚式・イベント", tags: "前撮り / 挙式・披露宴 / パーティー" },
                { title: "家族・ライフイベント", tags: "七五三 / 記念撮影 / 出張撮影" },
                { title: "企業・ブランド撮影", tags: "PR動画 / ポートレート / 商品撮影" },
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

      {/* 02. 動画編集セクション */}
      <section id="edit" className="py-40 px-8 md:px-24 bg-[#F8FAFC]">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={containerVariants} 
          className="max-w-7xl mx-auto flex flex-col gap-12"
        >
          <div className="grid md:grid-cols-2 gap-20 items-center mb-10">
            <motion.div variants={fadeInUp} className="order-2 md:order-1 relative aspect-video bg-slate-200 rounded-xl overflow-hidden shadow-2xl group border border-slate-200 flex items-center justify-center">
              {/* 編集事例の動画/画像を差し込み予定。現状はプレースホルダー */}
              <span className="text-slate-300 font-black text-6xl italic uppercase select-none">EDIT</span>
            </motion.div>

            <motion.div variants={fadeInUp} className="order-1 md:order-2">
              <div className="inline-flex items-center gap-4 mb-8">
                <span className="bg-[#007AFF] text-white font-black text-sm px-4 py-1 rounded-sm tracking-tighter uppercase">Service 02</span>
                <span className="text-[#1A202C] font-black text-2xl md:text-3xl tracking-tighter border-b-4 border-[#007AFF] pb-1">
                  動画編集
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-none text-[#1A202C]">
                素材を<br />
                <span>伝わる映像に</span>
              </h2>
              <p className="text-[#4A5568] text-lg leading-relaxed mb-10 font-medium">
                撮影済みの素材をお送りいただくだけで、テロップ・BGM・カット編集まで一貫対応。ココナラでの実績65件以上、撮影なしの編集単体のご依頼も歓迎です。
              </p>
              
              <Link 
                href="#pricing" 
                className="inline-flex items-center justify-center bg-[#007AFF] text-white px-10 py-5 text-[11px] font-black uppercase tracking-widest hover:bg-[#1A202C] transition-all duration-500 rounded-sm shadow-xl shadow-[#007AFF]/20"
              >
                編集プランと料金を見る →
              </Link>
            </motion.div>
          </div>

          {/* 強みのカード部分 */}
          <div className="grid md:grid-cols-3 gap-8 pt-10">
            {[
              {
                title: "編集のみの依頼もOK",
                highlight: "撮影データを送るだけ",
                desc: "ご自身やチームで撮影した素材でも大丈夫。データをお送りいただくだけで、テロップ・BGM・カット編集まで仕上げます。"
              },
              {
                title: "ショート・ロング両対応",
                highlight: "縦型SNS動画から横型PR動画まで",
                desc: "60秒以内の縦型ショート動画から、5分前後の横型ロング動画まで、用途に合わせた編集メニューをご用意しています。"
              },
              {
                title: "ココナラ実績65件以上",
                highlight: "報道現場で磨いた伝える技術",
                desc: "テレビ局の報道技術職で培った「伝わる編集」の考え方をベースに、ココナラで65件以上のご依頼を承ってきました。"
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

      {/* 03. ワンストッププラン（企業向け） */}
      <section id="onestop" className="py-40 px-8 md:px-24 bg-[#C0CDDC] relative overflow-hidden">
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
            撮影も編集も<br />
            丸ごとお任せ
          </h2>
          
          <div className="bg-white/10 p-8 md:p-12 backdrop-blur-xl border border-white/20 text-left rounded-sm shadow-2xl mt-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6 border-b border-white/20 pb-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold italic uppercase tracking-tighter text-[#1A202C]">撮影 + 編集 ワンストップ</h3>
              <div className="text-xs font-bold tracking-widest bg-white text-[#007AFF] px-4 py-2 uppercase rounded-sm">企業様に人気</div>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              <p className="text-black/90 text-sm leading-loose font-medium">
                企画・撮影・編集を同じ担当者が一貫して行うことで、意図のズレをゼロに。PR動画・商品紹介・イベント記録など、企画から納品まで丸投げでご依頼いただけます。
              </p>
              <ul className="space-y-3">
                {[
                  "ヒアリング・企画から対応",
                  "プロによる撮影一式",
                  "テロップ・BGM込みの編集",
                  "修正2回まで無料"
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
              <Link 
                href="#pricing" 
                className="inline-block bg-white text-[#007AFF] px-12 py-5 text-xs font-black uppercase tracking-[0.3em] hover:bg-[#1A202C] hover:text-white transition-all duration-300 rounded-sm shadow-xl"
              >
                ワンストッププランを確認する
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </section>
  );
}
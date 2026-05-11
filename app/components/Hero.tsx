'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-white overflow-hidden flex flex-col md:flex-row">
      
      {/* 01. 左側：写真・動画撮影 */}
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={containerVariants}
        className="relative flex-1 h-1/2 md:h-full border-b md:border-b-0 md:border-r border-slate-100 group overflow-hidden bg-white"
      >
        {/* 背景画像：public/images/hero/visual-bg.JPG を想定 */}
        <Image 
          src="/images/hero/visual-bg.JPG" 
          alt="写真・動画撮影 背景"
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
          sizes="50vw"
          priority
        />
        {/* 白ベースのオーバーレイ：画像を見せつつ文字を読みやすく */}
        <div className="absolute inset-0 bg-white/80 md:bg-white/85 backdrop-blur-[2px] transition-colors duration-700 group-hover:bg-white/70"></div>
        
        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-12 lg:pl-24 lg:pr-32">
          <motion.div variants={fadeInUp}>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-[#007AFF]"></span>
              <span className="text-[#007AFF] font-bold text-sm tracking-widest uppercase">Service 01</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-[#1A202C] mb-6">
              写真・動画撮影<br />
            </h2>
            
            <p className="max-w-xs md:max-w-sm text-sm md:text-base text-[#4A5568] leading-relaxed mb-10 font-medium">
              テレビ局の報道現場で磨いた確かな技術。家族の記念日からビジネスPRまで、価値ある一瞬を記録します
            </p>
            
            <Link 
              href="#visual" 
              className="inline-flex items-center justify-center bg-[#1A202C] text-white px-8 py-4 text-xs font-black hover:bg-[#007AFF] transition-all duration-300 rounded-sm shadow-xl shadow-slate-200"
            >
              撮影メニューを見る
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* 02. 右側：ホームページ制作 */}
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={containerVariants}
        className="relative flex-1 h-1/2 md:h-full group overflow-hidden bg-[#F8FAFC]"
      >
        {/* 背景画像：public/images/hero/web-bg.JPG を想定 */}
        <Image 
          src="/images/hero/web-bg.JPG" 
          alt="ホームページ制作 背景"
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
          sizes="50vw"
          priority
        />
        {/* 右側は少し青みがかった白で変化をつける */}
        <div className="absolute inset-0 bg-[#F8FAFC]/80 md:bg-[#F8FAFC]/85 backdrop-blur-[2px] transition-colors duration-700 group-hover:bg-[#F8FAFC]/70"></div>
        
        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-12 lg:pr-24 lg:pl-32">
          <motion.div variants={fadeInUp}>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-[#007AFF]"></span>
              <span className="text-[#007AFF] font-bold text-sm tracking-widest uppercase">Service 02</span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-[#1A202C] mb-6">
              HP・サイト制作
            </h2>
            
            <p className="max-w-xs md:max-w-sm text-sm md:text-base text-[#4A5568] leading-relaxed mb-10 font-medium">
              理系的な論理設計で「集客」を最大化。文章作成からNext.js実装まで、丸投げでの依頼も可能です。
            </p>
            
            <Link 
              href="#web" 
              className="inline-flex items-center justify-center bg-[#007AFF] text-white px-8 py-4 text-xs font-black hover:bg-[#1A202C] transition-all duration-300 rounded-sm shadow-xl shadow-[#007AFF]/10"
            >
              制作の詳細を見る
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* 中央のキャッチコピー */}
      <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex-col items-center">
        <div className="bg-white/90 backdrop-blur-md border border-[#007AFF]/30 px-5 py-2.5 shadow-sm rounded-sm">
          <p className="text-[#1A202C] text-[10px] font-bold tracking-[0.4em] whitespace-nowrap uppercase">
            表現と技術を、ひとつに。
          </p>
        </div>
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#007AFF] to-transparent mt-4 animate-pulse"></div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
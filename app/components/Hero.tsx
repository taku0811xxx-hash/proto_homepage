'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

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
    <section className="relative h-screen w-full bg-[#050505] overflow-hidden flex flex-col md:flex-row">
      
      {/* 01. 左側：写真・動画撮影 */}
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={containerVariants}
        className="relative flex-1 h-1/2 md:h-full border-b md:border-b-0 md:border-r border-white/10 group overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black to-[#0a0a0a]"></div>
        
        {/* コンテンツを左側に寄せる（lg:pr-32で中央との余白を確保） */}
        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-12 lg:pl-24 lg:pr-32">
          <motion.div variants={fadeInUp}>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-[#007AFF]"></span>
              <span className="text-[#007AFF] font-bold text-sm tracking-widest uppercase">Service 01</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white mb-6">
              写真・動画<br />
              <span className="text-[#007AFF]">撮影</span>
            </h2>
            
            <p className="max-w-xs md:max-w-sm text-sm md:text-base text-[#BBBBBB] leading-relaxed mb-10 font-medium">
              テレビ局の報道現場で磨いた確かな技術。家族の記念日からビジネスPRまで、価値ある一瞬を記録します。
            </p>
            
            <Link 
              href="#visual" 
              className="inline-flex items-center justify-center bg-white text-black px-8 py-4 text-xs font-black hover:bg-[#007AFF] hover:text-white transition-all duration-300"
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
        className="relative flex-1 h-1/2 md:h-full group overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-bl from-black to-[#080808]"></div>
        
        {/* コンテンツを右側に寄せる（lg:pl-32で中央との余白を確保） */}
        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-12 lg:pr-24 lg:pl-32">
          <motion.div variants={fadeInUp}>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-[#007AFF]"></span>
              <span className="text-[#007AFF] font-bold text-sm tracking-widest uppercase">Service 02</span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white mb-6">
              HP・サイト<br />
              <span className="text-[#007AFF]">制作</span>
            </h2>
            
            <p className="max-w-xs md:max-w-sm text-sm md:text-base text-[#BBBBBB] leading-relaxed mb-10 font-medium">
              理系的な論理設計で「集客」を最大化。文章作成からNext.js実装まで、丸投げでの依頼も可能です。
            </p>
            
            <Link 
              href="#web" 
              className="inline-flex items-center justify-center bg-[#007AFF] text-white px-8 py-4 text-xs font-black hover:bg-white hover:text-black transition-all duration-300"
            >
              制作の詳細を見る
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* 中央のキャッチコピー（重なり防止のためサイズと位置を微調整） */}
      <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex-col items-center">
        <div className="bg-black/80 backdrop-blur-md border border-[#007AFF]/50 px-5 py-2.5 shadow-[0_0_20px_rgba(0,122,255,0.2)]">
          <p className="text-white text-[10px] font-bold tracking-[0.4em] whitespace-nowrap uppercase">
            表現と技術を、ひとつに。
          </p>
        </div>
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#007AFF] to-transparent mt-4 animate-pulse"></div>
      </div>

      {/* 背景の共通装飾ブラー（視認性を下げないよう薄く調整） */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
'use client';

import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  }
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center px-8 md:px-24 overflow-hidden bg-[#050505]">
      {/* 背後の大きな飾り英語（視認性よりもデザインとして配置） */}
      <div className="absolute top-[20%] left-[5%] select-none pointer-events-none opacity-[0.03]">
        <span className="text-[25vw] font-black italic uppercase leading-none tracking-tighter text-white">
          Logic.
        </span>
      </div>

      <motion.div initial="hidden" animate="visible" variants={containerVariants} className="z-10 mt-20">
        <motion.div variants={fadeInUp} className="mb-6">
          <span className="text-[#007AFF] font-bold text-sm tracking-[0.4em] uppercase block mb-2">Visual & Digital Studio</span>
          <h1 className="text-5xl md:text-8xl font-black leading-[1.1] tracking-tight text-white">
            ビジネスを、<br />
            <span className="text-[#007AFF]">「視覚」で加速させる。</span>
          </h1>
        </motion.div>

        <motion.p variants={fadeInUp} className="max-w-2xl text-base md:text-xl text-[#BBBBBB] leading-loose font-medium mb-12">
          テレビ局出身の確かな視覚表現と、論理的なSEO戦略。<br className="hidden md:block" />
          単なる制作にとどまらない、成果に直結するデジタル基盤を構築します。
        </motion.p>

        <motion.div variants={fadeInUp}>
          <a 
            href="#contact" 
            className="inline-block bg-[#007AFF] text-white px-10 py-5 text-sm font-black uppercase tracking-widest hover:bg-white hover:text-[#007AFF] transition-all duration-300 shadow-2xl shadow-blue-900/20"
          >
            Start a Project
          </a>
        </motion.div>
      </motion.div>

      {/* 背景の装飾ブラー */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} 
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} 
        className="absolute top-1/2 right-[-10%] w-[60vw] h-[60vw] bg-blue-600/10 rounded-full blur-[120px]" 
      />
    </section>
  );
}
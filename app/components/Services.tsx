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

export default function Services() {
  return (
    <>
      {/* Visual Section */}
      <section id="visual" className="py-40 px-8 md:px-24 bg-[#080808] border-t border-white/10 text-white">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants} className="max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="mb-24">
            <span className="text-[#007AFF] font-bold text-xs tracking-[0.4em] uppercase mb-4 block">Section 01 / 撮影</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
              心に響く、<br />
              <span className="text-[#007AFF]">映像と写真の表現力。</span>
              <span className="block text-sm md:text-xl font-bold text-[#666] mt-4 italic uppercase tracking-[0.2em]">Visual Production</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "家族・ライフイベント", desc: "七五三やお誕生日会など、家族のたいせつな思い出を記録。映画のワンシーンのように美しく、いつまでも色褪せない記憶を残します。", tags: "記念撮影 / キッズ / イベント" },
              { title: "ビジネス・プロフィール", desc: "会社プロフィール写真や活動風景を撮影。個人の信頼を視覚化し、ビジネスチャンスを広げる第一印象を構築します。", tags: "ポートレート / コーポレート / ブランディング" },
              { title: "ブランド・WEB素材", desc: "ホームページ用の素材撮影。TV局品質の映像制作も含め、ブランドの魅力を最大化するビジュアルを提供します。", tags: "WEB素材 / PR動画制作" },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} whileHover={{ y: -10 }} className="group border-l border-white/10 pl-8 hover:border-[#007AFF] transition-colors">
                <h3 className="text-xl font-bold mb-6 tracking-tight">{item.title}</h3>
                <p className="text-[#BBBBBB] text-sm md:text-base leading-loose font-medium mb-4">{item.desc}</p>
                <span className="text-[10px] font-bold text-[#666666] uppercase tracking-widest">{item.tags}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Web Section */}
      <section id="web" className="py-40 px-8 md:px-24 bg-[#050505] text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="mb-24">
            <span className="text-[#007AFF] font-bold text-xs tracking-[0.4em] uppercase mb-4 block">Section 02 / 制作</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
              「見られる」から<br />
              <span className="text-[#007AFF]">「選ばれる」サイトへ。</span>
              <span className="block text-sm md:text-xl font-bold text-[#666] mt-4 italic uppercase tracking-[0.2em]">Web Development</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              { title: "戦略的SEO・論理的設計", desc: "単なるデザインではなく、検索エンジンに評価される構造をNext.jsで構築。Googleの最新指標を網羅し、持続的に集客できる土台を作ります。" },
              { title: "スピード納品と表示速度", desc: "実績あるテンプレートを活用し、高品質を「安く、早く」提供。超高速な表示速度でユーザー離脱を防ぎ、成約率（コンバージョン）を最大化します。" }
            ].map((card, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="p-12 border border-white/10 bg-[#0A0A0A] hover:border-[#007AFF]/50 transition-all">
                <h3 className="text-2xl font-bold mb-6 border-b border-[#007AFF] pb-4 tracking-tight">{card.title}</h3>
                <p className="text-[#BBBBBB] text-base leading-loose font-medium">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
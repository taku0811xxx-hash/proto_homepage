'use client';

import { motion, Variants } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-40 px-8 md:px-24 bg-[#080808] border-y border-white/10 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter italic uppercase mb-4">Pricing.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {/* 撮影プラン */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="p-10 bg-[#0F0F0F] border border-white/10 flex flex-col">
            <h3 className="text-xl font-bold mb-10 italic uppercase border-b border-white/10 pb-4">VISUAL / 撮影</h3>
            <div className="space-y-8 flex-grow">
              <div className="flex justify-between items-baseline border-b border-white/5 pb-4">
                <span className="text-sm font-bold text-[#DDD]">写真撮影</span>
                <span className="text-2xl font-black italic">¥15,000<span className="text-xs ml-2 text-[#666]">/ 1h</span></span>
              </div>
              <div className="flex justify-between items-baseline border-b border-white/5 pb-4">
                <span className="text-sm font-bold text-[#DDD]">動画撮影</span>
                <span className="text-2xl font-black italic">¥20,000<span className="text-xs ml-2 text-[#666]">/ 1h</span></span>
              </div>
              <div className="text-[11px] space-y-3 text-[#777] font-medium italic leading-relaxed">
                <p>● 撮影データはすべてレタッチ後に納品</p>
                <p>● 交通費は仙川駅起点で実費精算</p>
                <p>● 延長30分につき各料金の50%加算</p>
              </div>
            </div>
          </motion.div>

          {/* Web制作プラン */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }} variants={fadeInUp} className="p-10 bg-[#0F0F0F] border border-white/10 flex flex-col">
            <h3 className="text-xl font-bold mb-10 italic uppercase border-b border-white/10 pb-4">WEB DEV / 制作</h3>
            <div className="space-y-8 flex-grow">
              <div className="flex justify-between items-baseline border-b border-white/5 pb-4">
                <span className="text-sm font-bold text-[#DDD]">基本制作費</span>
                <span className="text-3xl font-black italic tracking-tighter">¥30,000<span className="text-xs ml-2 text-[#666]">/ 1P</span></span>
              </div>
              <div className="flex justify-between items-baseline border-b border-white/5 pb-4">
                <span className="text-sm font-bold text-[#DDD]">月額管理費</span>
                <span className="text-2xl font-black italic tracking-tighter">¥3,000<span className="text-xs ml-2 text-[#666]">/ 月</span></span>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5">
                <p className="text-[10px] font-bold text-[#007AFF] uppercase mb-3">管理費に含まれる内容:</p>
                <ul className="text-[11px] space-y-2 text-[#777] font-medium italic leading-relaxed">
                  <li>● 独自ドメイン / サーバー維持管理</li>
                  <li>● セキュリティパッチの定期適用</li>
                  <li>● 月1回までのテキスト・写真更新</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Hybrid / セットプラン */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} variants={fadeInUp} className="p-10 bg-[#0F0F0F] border border-[#007AFF] relative scale-105 z-10 flex flex-col shadow-2xl shadow-blue-900/10">
            <div className="absolute top-0 right-0 bg-[#007AFF] text-white text-[10px] font-black px-5 py-1.5 uppercase tracking-widest">Recommended</div>
            <h3 className="text-xl font-bold mb-10 italic uppercase border-b border-[#007AFF]/30 pb-4">Hybrid / セット</h3>
            <div className="flex-grow">
              <p className="text-xs font-bold text-[#007AFF] italic tracking-widest mb-6 uppercase text-center border border-[#007AFF]/50 py-2">Web制作 ＋ 撮影</p>
              <p className="text-[#BBBBBB] text-xs leading-loose font-medium mb-8">
                サイト公開に必要な素材撮影をセットで行います。ブランドイメージを論理的に一貫させ、最も効果的なサイト構成を実現します。
              </p>
              <div className="text-center pb-6">
                <span className="text-4xl font-black italic tracking-tighter text-white uppercase">Ask</span>
                <p className="text-[10px] text-[#666] mt-2 font-bold uppercase tracking-[0.2em]">内容によりお見積り</p>
              </div>
            </div>
            <a href="#contact" className="w-full bg-[#007AFF] text-white text-center py-5 text-[11px] font-black uppercase tracking-widest hover:bg-[#005ecb] transition-colors shadow-lg">お問い合わせ</a>
          </motion.div>
        </div>

        {/* 追加オプション */}
        <div className="mt-12 grid md:grid-cols-1 gap-8">
          <div className="p-8 bg-white text-black rounded-sm shadow-xl flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex-grow">
              <h4 className="text-sm font-black uppercase italic mb-4 border-b border-black/10 pb-2 inline-block">Additional Options</h4>
              <div className="grid md:grid-cols-3 gap-8">
                <p className="flex justify-between text-[11px] font-bold border-b border-black/5 pb-2"><span>独自ドメイン取得代行</span> <span>FREE</span></p>
                <p className="flex justify-between text-[11px] font-bold border-b border-black/5 pb-2"><span>ページ追加 (1P毎)</span> <span>¥10,000〜</span></p>
                <p className="flex justify-between text-[11px] font-bold border-b border-black/5 pb-2"><span>ロゴ・バナー制作</span> <span>¥5,000〜</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
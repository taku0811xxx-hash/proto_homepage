'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

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
    // IDを "pricing" で維持。背景を白、テキストをダークグレーに変更
    <section id="pricing" className="py-40 px-8 md:px-24 bg-white border-y border-slate-100 text-[#1A202C]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-[#C1692B]/5 border border-[#C1692B]/10 text-[#C1692B] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
            Service Price
          </div>
          <h2 className="font-display text-7xl md:text-9xl tracking-wide uppercase text-[#1A202C]">
            Pricing<span className="text-[#C1692B]">.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {/* 撮影プラン */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="p-10 bg-white border border-slate-200 flex flex-col shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-xl font-bold mb-10 italic uppercase border-b border-slate-100 pb-4 text-[#1A202C]">撮影プラン</h3>
            <div className="space-y-8 flex-grow">
              <div className="flex justify-between items-baseline border-b border-slate-50 pb-4">
                <span className="text-sm font-bold text-[#4A5568]">写真撮影</span>
                <span className="text-2xl font-black italic">¥12,000<span className="text-xs ml-2 text-[#A0AEC0]">/ 1h</span></span>
              </div>
              <div className="flex justify-between items-baseline border-b border-slate-50 pb-4">
                <span className="text-sm font-bold text-[#4A5568]">動画撮影のみ</span>
                <span className="text-2xl font-black italic">¥15,000<span className="text-xs ml-2 text-[#A0AEC0]">/ 1h</span></span>
              </div>
              <div className="flex justify-between items-baseline border-b border-slate-50 pb-4">
                <span className="text-sm font-bold text-[#4A5568]">写真+動画セット</span>
                <span className="text-2xl font-black italic">¥22,000<span className="text-xs ml-2 text-[#A0AEC0]">/ 1h</span></span>
              </div>
              <div className="text-[11px] space-y-3 text-[#718096] font-medium italic leading-relaxed">
                <p>● 価格はすべて税込表示です</p>
                <p>● 都内交通費無料、都外は実費精算</p>
                <p>● 納品データ数・レタッチ枚数は要相談</p>
              </div>
            </div>
          </motion.div>

          {/* 編集プラン */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }} variants={fadeInUp} className="p-10 bg-white border border-slate-200 flex flex-col shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-xl font-bold mb-10 italic uppercase border-b border-slate-100 pb-4 text-[#1A202C]">動画編集</h3>
            <div className="space-y-8 flex-grow">
              <div className="flex justify-between items-baseline border-b border-slate-50 pb-4">
                <span className="text-sm font-bold text-[#4A5568]">ショート動画</span>
                <span className="text-2xl font-black italic tracking-tighter">¥8,000<span className="text-xs ml-2 text-[#A0AEC0]">/ 本</span></span>
              </div>
              <div className="flex justify-between items-baseline border-b border-slate-50 pb-4">
                <span className="text-sm font-bold text-[#4A5568]">ロング動画</span>
                <span className="text-2xl font-black italic tracking-tighter">¥15,000<span className="text-xs ml-2 text-[#A0AEC0]">/ 本</span></span>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-50">
                <ul className="text-[11px] space-y-2 text-[#718096] font-medium italic leading-relaxed">
                  <li>● ショート:縦型60秒以内・テロップ/BGM/カット込み</li>
                  <li>● ロング:横型5分前後・5分超は+¥2,000/分</li>
                  <li>● 修正は2回まで無料、以降1回¥3,000</li>
                  <li>● 撮影なしの編集単体依頼も歓迎</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* ワンストッププラン */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} variants={fadeInUp} className="p-10 bg-[#F8FAFC] border-2 border-[#C1692B] relative scale-105 z-10 flex flex-col shadow-2xl shadow-blue-500/10">
            <div className="absolute top-0 right-0 bg-[#C1692B] text-white text-[10px] font-black px-5 py-1.5 uppercase tracking-widest">Recommended</div>
            <h3 className="text-xl font-bold mb-10 italic uppercase border-b border-[#C1692B]/20 pb-4 text-[#1A202C]">ワンストップ</h3>
            <div className="flex-grow">
              <p className="text-xs font-bold text-[#C1692B] italic tracking-widest mb-6 uppercase text-center border border-[#C1692B]/30 py-2">撮影 ＋ 編集</p>
              <p className="text-[#4A5568] text-xs leading-loose font-medium mb-8">
                企業のPR動画・商品紹介・イベント記録など、企画から撮影・編集まで丸投げでご依頼いただけます。
              </p>
              <div className="text-center pb-6">
                <span className="text-4xl font-black italic tracking-tighter text-[#1A202C] uppercase">Ask</span>
                <p className="text-[10px] text-[#A0AEC0] mt-2 font-bold uppercase tracking-[0.2em]">内容によりお見積り</p>
              </div>
            </div>
            <Link href="#contact" className="w-full bg-[#1A202C] text-white text-center py-5 text-[11px] font-black uppercase tracking-widest hover:bg-[#C1692B] transition-all shadow-lg rounded-sm">お問い合わせ</Link>
          </motion.div>
        </div>

        {/* 補足事項 */}
        <div className="mt-16 grid md:grid-cols-1 gap-8">
          <div className="p-10 bg-[#F8FAFC] text-[#1A202C] rounded-sm border border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 shadow-sm">
            <div className="flex-grow w-full">
              <h4 className="text-[10px] font-black uppercase italic mb-6 border-b border-slate-200 pb-2 inline-block tracking-widest">Notes</h4>
              <p className="text-xs font-bold text-[#4A5568] leading-relaxed">
                複数本・継続依頼の場合は別途ご相談ください。ご依頼内容によって価格は上下する場合がございます。まずはお気軽にお問い合わせください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
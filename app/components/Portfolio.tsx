'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

type Category = 'corporate' | 'personal';

// 作品が揃ったら、この配列に実際の動画URL・サムネイル・キャプションを追加してください
const works: Record<Category, { title: string; desc: string }[]> = {
  corporate: [
    { title: '準備中', desc: '企業PR・商品紹介の制作事例をここに追加予定です。' },
    { title: '準備中', desc: '' },
    { title: '準備中', desc: '' },
  ],
  personal: [
    { title: '準備中', desc: '結婚式・イベント・家族撮影の制作事例をここに追加予定です。' },
    { title: '準備中', desc: '' },
    { title: '準備中', desc: '' },
  ],
};

export default function Portfolio() {
  const [tab, setTab] = useState<Category>('corporate');

  return (
    <section id="works" className="py-32 px-8 md:px-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-[#C1692B]/5 border border-[#C1692B]/10 text-[#C1692B] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
            Portfolio
          </div>
          <h2 className="font-display text-6xl md:text-7xl tracking-wide uppercase text-[#1A202C]">
            Works<span className="text-[#C1692B]">.</span>
          </h2>
        </div>

        {/* タブ切り替え */}
        <div className="flex justify-center gap-4 mb-16">
          {[
            { key: 'corporate' as Category, label: '企業PR' },
            { key: 'personal' as Category, label: 'イベント・個人' },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => setTab(item.key)}
              className={`px-8 py-3 text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 ${
                tab === item.key
                  ? 'bg-[#C1692B] text-white shadow-lg shadow-[#C1692B]/20'
                  : 'bg-white text-[#4A5568] border border-slate-200 hover:border-[#C1692B]/40'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {works[tab].map((work, i) => (
            <motion.div
              key={`${tab}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-slate-100 rounded-[24px] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-video bg-slate-50 flex items-center justify-center border-b border-slate-100">
                <span className="text-slate-300 font-black text-sm uppercase tracking-widest">{work.title}</span>
              </div>
              {work.desc && (
                <p className="text-[#4A5568] text-xs leading-relaxed p-6">{work.desc}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

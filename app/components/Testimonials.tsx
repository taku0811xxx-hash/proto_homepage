'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// public/images/reviews/ に個人情報を隠したスクリーンショットを配置し、下記に追加してください
const reviews: { image: string; alt: string }[] = [
  // { image: '/images/reviews/review1.jpg', alt: 'ココナラでのお客様評価1' },
  // { image: '/images/reviews/review2.jpg', alt: 'ココナラでのお客様評価2' },
];

export default function Testimonials() {
  return (
    <section id="voice" className="py-32 px-8 md:px-24 bg-white border-y border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-[#007AFF]/5 border border-[#007AFF]/10 text-[#007AFF] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
            Client Voice
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter italic uppercase text-[#1A202C]">
            お客様の声<span className="text-[#007AFF]">.</span>
          </h2>
          <p className="text-[#4A5568] text-sm mt-6 font-medium">
            ココナラでのご依頼実績65件以上。いただいた評価の一部をご紹介します。
          </p>
        </div>

        {reviews.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-[24px] overflow-hidden border border-slate-100 shadow-sm"
              >
                <Image src={review.image} alt={review.alt} width={400} height={400} className="w-full h-auto" />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-50 rounded-[24px] border border-slate-100">
            <p className="text-slate-300 font-black text-sm uppercase tracking-widest">
              評価スクリーンショット準備中
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

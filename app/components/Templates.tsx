'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const templates = [
  { id: 'CAFE', title: '店舗・飲食店向け', url: 'https://cafe-template-gamma.vercel.app', desc: '世界観を大切にする brand設計。メニューの魅力を最大化し、SNS連携を強化。', image: '/images/templates/cafe.jpg' },
  { id: 'GYM', title: 'ジム・パーソナル向け', url: 'https://gym-template-wine.vercel.app', desc: '入会意欲を刺激する力強いデザイン。ベネフィットを直感的に伝え、体験予約を促進。', image: '/images/templates/gym.jpg' },
  { id: 'YOGA', title: 'ヨガ・ピラティス向け', url: 'https://yoga-template-three.vercel.app', desc: '心身の調和を表現。レッスンスケジュールや講師紹介をスマートに構成。', image: '/images/templates/yoga.jpg' },
  { id: 'RESTAURANT', title: 'レストラン・カフェ向け', url: 'https://restaurant-template-roan.vercel.app', desc: '料理の質感を伝えるビジュアル重視の設計。WEB予約へのスムーズな導線を構築。', image: '/images/templates/restaurant.jpg' },
  { id: 'BEAUTY', title: 'サロン・美容室向け', url: 'https://beauty-template-alpha.vercel.app', desc: '清潔感とトレンド感を両立。スタイリストの技術とお店の雰囲気を視覚的に演出。', image: '/images/templates/beauty.jpg' },
  { id: 'SEITAI', title: '整体・接骨院向け', url: 'https://seitai-template.vercel.app', desc: '信頼と安心を提供。症状別の案内や通いやすさを論理的に伝えるページ構成。', image: '/images/templates/seitai.jpg' },
  { id: 'LEGAL', title: '士業・コンサルタント向け', url: 'https://legal-template-coral.vercel.app', desc: '専門性を可視化。信頼感を第一に、相談のハードルを下げる問い合わせ重視の設計。', image: '/images/templates/legal.jpg' },
  { id: 'FREELANCE', title: 'クリエイター・個人向け', url: 'https://freelance-template-ten.vercel.app', desc: '個の魅力を最大化。実績（Portfolio）を効果的に並べ、選ばれるためのブランドを構築。', image: '/images/templates/freelance.jpg' },
];

export default function Templates() {
  return (
    <section id="models" className="py-32 px-8 md:px-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto text-white">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1 rounded-full bg-[#007AFF]/5 border border-[#007AFF]/10 text-[#007AFF] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
            Design Models
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter italic uppercase text-[#1A202C]">
            Select Template<span className="text-[#007AFF]">.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 text-left">
          {templates.map((model, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -8 }} 
              className="group bg-white rounded-[40px] p-5 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* スクリーンショット画像エリア */}
              <div className="aspect-video bg-slate-50 rounded-[32px] border border-slate-100 relative overflow-hidden mb-8">
                <Image 
                  src={model.image} 
                  alt={model.title}
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105 transition-transform"
                />
                
                {/* 重ねるレイヤー */}
                <a 
                  href={model.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10 flex items-center justify-center bg-[#1A202C]/5 group-hover:bg-transparent transition-colors duration-500"
                >
                  <span className="text-[#1A202C] font-black text-6xl italic opacity-20 group-hover:opacity-0 transition-opacity uppercase tracking-tighter select-none">
                    {model.id}
                  </span>
                </a>
              </div>

              <div className="px-4 pb-4">
                <h3 className="text-2xl font-bold mb-3 text-[#1A202C] italic tracking-tight">{model.title}</h3>
                <p className="text-[#4A5568] text-sm leading-relaxed font-medium">{model.desc}</p>
                <a 
                  href={model.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#007AFF] text-xs font-bold mt-6 inline-flex items-center gap-2 uppercase tracking-widest hover:underline"
                >
                  View Live Demo <span>→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
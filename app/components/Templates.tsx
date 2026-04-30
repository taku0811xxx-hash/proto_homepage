'use client';

import { motion } from 'framer-motion';

const templates = [
  { id: 'CAFE', title: '店舗・飲食店向け', url: 'https://cafe-template-gamma.vercel.app', desc: '世界観を大切にするブランド設計。メニューの魅力を最大化し、SNS連携を強化。' },
  { id: 'GYM', title: 'ジム・パーソナル向け', url: 'https://gym-template-wine.vercel.app', desc: '入会意欲を刺激する力強いデザイン。ベネフィットを直感的に伝え、体験予約を促進。' },
  { id: 'YOGA', title: 'ヨガ・ピラティス向け', url: 'https://yoga-template-three.vercel.app', desc: '心身の調和を表現。レッスンスケジュールや講師紹介をスマートに構成。' },
  { id: 'RESTAURANT', title: 'レストラン・カフェ向け', url: 'https://restaurant-template-roan.vercel.app', desc: '料理の質感を伝えるビジュアル重視の設計。WEB予約へのスムーズな導線を構築。' },
  { id: 'BEAUTY', title: 'サロン・美容室向け', url: 'https://beauty-template-alpha.vercel.app', desc: '清潔感とトレンド感を両立。スタイリストの技術とお店の雰囲気を視覚的に演出。' },
  { id: 'SEITAI', title: '整体・接骨院向け', url: 'https://seitai-template.vercel.app', desc: '信頼と安心を提供。症状別の案内や通いやすさを論理的に伝えるページ構成。' },
  { id: 'LEGAL', title: '士業・コンサルタント向け', url: 'https://legal-template-coral.vercel.app', desc: '専門性を可視化。信頼感を第一に、相談のハードルを下げる問い合わせ重視の設計。' },
  { id: 'FREELANCE', title: 'クリエイター・個人向け', url: 'https://freelance-template-ten.vercel.app', desc: '個の魅力を最大化。実績（Portfolio）を効果的に並べ、選ばれるためのブランドを構築。' },
];

export default function Templates() {
  return (
    <section id="models" className="py-40 px-8 md:px-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto text-white">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter italic uppercase mb-20 text-center">Select　Template.</h2>
        <div className="grid md:grid-cols-2 gap-12 text-left">
          {templates.map((model, i) => (
            <motion.div 
              key={i} 
              whileHover={{ scale: 1.02 }} 
              className="group block"
            >
              {/* サイト埋め込みエリア */}
              <div className="aspect-video bg-[#111111] border border-white/10 relative overflow-hidden mb-6">
                {/* iframe: 実際のサイトを読み込む */}
                <iframe 
                  src={model.url} 
                  className="w-[1280px] h-[720px] origin-top-left border-none opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ 
                    transform: 'scale(0.5)', // 枠に合わせて縮小表示（親がaspect-videoなので調整）
                    width: '200%', 
                    height: '200%',
                    pointerEvents: 'none' // 枠内での誤操作を防ぐ
                  }}
                  loading="lazy"
                />
                
                {/* 重ねるレイヤー：IDを表示しつつ、クリックを検知させる */}
                <a 
                  href={model.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 group-hover:bg-transparent transition-colors duration-500"
                >
                  <span className="text-white font-black text-6xl italic opacity-100 group-hover:opacity-0 transition-opacity uppercase tracking-tighter shadow-2xl">
                    {model.id}
                  </span>
                </a>
              </div>

              <h3 className="text-2xl font-bold mb-3 italic tracking-tight">{model.title}</h3>
              <p className="text-[#888888] text-sm leading-relaxed font-medium">{model.desc}</p>
              <a 
                href={model.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#007AFF] text-xs font-bold mt-4 inline-block uppercase tracking-widest hover:underline"
              >
                View Live Demo →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
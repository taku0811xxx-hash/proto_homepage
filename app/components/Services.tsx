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
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="mb-16">
            <span className="text-[#007AFF] font-bold text-xs tracking-[0.4em] uppercase mb-4 block">Section 02 / 制作</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
              素材を渡す、あとは丸投げ。<br />
              <span className="text-[#007AFF]">お店の真価を言語化します。</span>
            </h2>
          </motion.div>

          {/* リード文の追加 */}
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="max-w-3xl text-[#BBBBBB] text-lg md:text-xl leading-relaxed font-medium mb-24">
            ホームページを作りたいけれど、文章を考える時間がない。自分の店の強みがどこにあるのか、客観的にわからない。そんな悩みは、すべてPROTO.に預けてください。用意していただくのは最低限の情報と写真素材だけ。テレビ局仕込みの「プロの視点」でストーリーを紡ぎ出します。
          </motion.p>

          {/* 3つのコア・バリューの追加 */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[
              { 
                title: "【完全丸投げOK】文章作成の全自動化", 
                desc: "基本情報さえあれば、キャッチコピーから紹介文まで全て作成。理系的な情報の整理術を駆使し、ターゲットの心に刺さる論理的な文章を構築。忙しいあなたの手を止めることはありません。" 
              },
              { 
                title: "【逆取材スタイル】気づかなかった強みの発見", 
                desc: "積極的に質問・取材をさせていただきます。テレビ局で5年間、多様な現場を取材してきた経験を活かし、オーナー様自身も気づいていない「本当の価値」を深掘りします。" 
              },
              { 
                title: "【報道品質の視点】信頼を勝ち取る見せ方", 
                desc: "単に綺麗な言葉を並べるのではありません。報道現場で培った「何が事実で、どこが魅力か」を見極める視点。取材で得たエピソードを反映し、一見さんを常連に変える納得感を生み出します。" 
              }
            ].map((value, i) => (
              <motion.div key={i} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 border border-white/5 bg-[#080808] hover:bg-[#0A0A0A] transition-all">
                <h3 className="text-[#007AFF] text-sm font-black mb-4 tracking-tighter uppercase">{`Value 0${i + 1}`}</h3>
                <h4 className="text-lg font-bold mb-4 tracking-tight leading-snug">{value.title}</h4>
                <p className="text-[#999999] text-sm leading-loose">{value.desc}</p>
              </motion.div>
            ))}
          </div>

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
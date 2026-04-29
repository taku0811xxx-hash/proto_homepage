'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

export default function ProtoOfficialPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // 型エラー回避のための定義
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

  return (
    <main className="bg-[#050505] text-[#F5F5F5] font-sans selection:bg-[#007AFF] selection:text-white leading-relaxed">
      
      {/* 1. オープニング演出 */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ y: 0 }}
            exit={{ y: "-100%", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              className="text-4xl md:text-6xl font-black italic tracking-tighter text-white"
            >
              PROTO<span className="text-[#007AFF]">.</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={!loading ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: "circOut" }}
        className="fixed top-0 w-full z-[100] flex justify-between items-center px-8 py-8 mix-blend-difference"
      >
        <div className="text-2xl font-black tracking-tighter italic text-white">PROTO.</div>
        <div className="hidden md:flex gap-10 text-[11px] font-bold tracking-[0.2em] uppercase text-white">
          <a href="#visual" className="hover:text-[#007AFF] transition">Visual</a>
          <a href="#web" className="hover:text-[#007AFF] transition">Web</a>
          <a href="#models" className="hover:text-[#007AFF] transition">Templates</a>
          <a href="#profile" className="hover:text-[#007AFF] transition">Profile</a>
          <a href="#pricing" className="hover:text-[#007AFF] transition">Pricing</a>
          <a href="#contact" className="bg-white text-black px-6 py-2 hover:bg-[#007AFF] hover:text-white transition">Contact</a>
        </div>
      </motion.nav>

      {/* 3. Hero Section */}
      <section className="relative h-screen flex flex-col justify-center px-8 md:px-24 overflow-hidden">
        {!loading && (
          <motion.div initial="hidden" animate="visible" variants={containerVariants} className="z-10">
            <motion.h1 variants={fadeInUp} className="text-[10vw] font-black leading-[0.85] tracking-tighter uppercase italic mb-8 text-white">
              Logic<br />for<br /><span className="text-[#007AFF]">Growth.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="max-w-xl text-lg md:text-xl text-[#CCCCCC] leading-relaxed font-medium">
              テレビ局の視覚表現と、論理的なSEO戦略。<br />
              「見られる」だけでなく「選ばれる」ためのデジタル基盤を構築。
            </motion.p>
          </motion.div>
        )}
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/2 right-[-10%] w-[60vw] h-[60vw] bg-blue-600/10 rounded-full blur-[120px]" />
      </section>

      {/* 4. Visual Section */}
      <section id="visual" className="py-40 px-8 md:px-24 bg-[#080808] border-t border-white/10 text-white">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants} className="max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="mb-24">
            <span className="text-[#007AFF] font-bold text-xs tracking-[0.4em] uppercase mb-4 block">Section 01</span>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter italic uppercase">Visual<br />Production.</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Family & Life", desc: "七五三やお誕生日会など、家族のたいせつな思い出を記録。映画のワンシーンのように美しく、いつまでも色褪せない記憶を記録します。", tags: "Memorial / Kids / Event" },
              { title: "Business Profile", desc: "会社プロフィール写真や活動風景を撮影。個人の信頼を視覚化し、ビジネスチャンスを広げる第一印象を構築します。", tags: "Portrait / Corporate / Branding" },
              { title: "Brand & HP Visual", desc: "ホームページ用の素材撮影。TV局品質の映像制作も含め、ブランドの魅力を最大化するビジュアルを提供します。", tags: "Web Material / PR Video" },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} whileHover={{ y: -10 }} className="group border-l border-white/10 pl-8 hover:border-[#007AFF] transition-colors">
                <h3 className="text-2xl font-bold mb-6 uppercase italic tracking-tight">{item.title}</h3>
                <p className="text-[#BBBBBB] text-sm md:text-base leading-loose font-medium mb-4">{item.desc}</p>
                <span className="text-[11px] font-bold text-[#666666] uppercase tracking-widest">{item.tags}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 5. Web Section */}
      <section id="web" className="py-40 px-8 md:px-24 bg-[#050505] text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="mb-24 text-right">
            <span className="text-[#007AFF] font-bold text-xs tracking-[0.4em] uppercase mb-4 block">Section 02</span>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter italic uppercase">Web<br />Development.</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { title: "Logic & SEO Strategy", desc: "論理的な分析に基づき、検索エンジンに評価される構造をNext.jsで構築。Googleの最新指標を網羅し、持続的に集客できる土台を作ります。" },
              { title: "Speed Delivery", desc: "実績あるテンプレートを使用することで高品質を「安く、早く」提供。超高速な表示速度でユーザー離脱を防ぎ、コンバージョンを最大化します。" }
            ].map((card, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="p-12 border border-white/10 bg-[#0A0A0A] hover:border-[#007AFF]/50 transition-all">
                <h3 className="text-3xl font-bold mb-6 italic border-b border-[#007AFF] pb-4 tracking-tighter">{card.title}</h3>
                <p className="text-[#BBBBBB] text-base leading-loose font-medium">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Template Section */}
      <section id="models" className="py-40 px-8 md:px-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto text-white">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter italic uppercase mb-20 text-center">Select Your Template.</h2>
          <div className="grid md:grid-cols-2 gap-12 text-left">
            {[
              { id: 'LEGAL', title: '士業・コンサルタント向け', desc: '信頼感を重視。専門知識を整理して伝え、問い合わせに繋げる論理的な構成です。' },
              { id: 'MEDICAL', title: 'クリニック・医療向け', desc: '清潔感と安心感を追求。予約ボタンへのスムーズな導線とモバイル操作性を重視。' },
              { id: 'FITNESS', title: 'ジム・ヨガスタジオ向け', desc: '入会意欲を刺激する力強いデザイン。ベネフィットを直感的に伝え、体験予約を促進。' },
              { id: 'CAFE', title: '店舗・飲食店向け', desc: '世界観を大切にするブランド設計。メニューの魅力を最大化し、SNS連携を強化。' },
            ].map((model, i) => (
              <motion.div key={i} whileHover={{ scale: 1.02 }} className="group cursor-pointer">
                <div className="aspect-video bg-[#111111] border border-white/10 flex items-center justify-center relative overflow-hidden mb-6">
                  <span className="text-[#222222] font-black text-6xl italic group-hover:text-[#007AFF] transition-colors">{model.id}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 italic tracking-tight">{model.title}</h3>
                <p className="text-[#888888] text-sm leading-relaxed font-medium">{model.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Profile Section */}
      <section id="profile" className="py-40 px-8 md:px-24 bg-[#050505] border-y border-white/10 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="w-full md:w-1/3 aspect-[4/5] bg-[#111111] border border-white/10 flex items-center justify-center relative">
            <span className="text-[#1a1a1a] font-black text-9xl italic">P</span>
          </div>
          <div className="w-full md:w-2/3">
            <span className="text-[#007AFF] font-bold text-xs tracking-[0.4em] uppercase mb-4 block">Founder Profile</span>
            <h2 className="text-5xl md:text-6xl font-black italic uppercase mb-8">Who is Proto?</h2>
            <div className="space-y-6 text-[#BBBBBB] text-base md:text-lg leading-relaxed font-medium">
              <p>1995年生まれ。理系大学・大学院を卒業後、テレビ局にて5年間、報道技術職として現場の最前線で「伝える」技術を磨いてきました。地震の現場など、一分一秒を争う極限状態での映像制作経験が、私のクリエイティブの原点です。</p>
              <p>現在はフリーランスとして、テレビ局仕込みの「圧倒的な視覚表現力」と、論理的な分析力を武器に、ホームページ制作と写真・動画制作を行っています。</p>
              <p>ただ作るだけでなく、なぜそのデザインなのか、どうすれば認知が広がるのか。お客様のサービスが「選ばれる」ための戦略を共に構築します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Blog Section */}
      <section id="blog" className="py-40 px-8 md:px-24 bg-[#050505] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-[#007AFF] font-bold text-xs tracking-[0.4em] uppercase mb-4 block">Latest Knowledge</span>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter italic uppercase">Insights.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { date: '2026.04.28', cat: 'SEO', title: '仙川周辺でホームページ制作を検討中の方へ。集客できるサイトの条件' },
              { date: '2026.04.20', cat: 'Visual', title: 'プロフィール写真一枚で成約率は変わる。TV局で学んだ視覚戦略' },
              { date: '2026.04.15', cat: 'Web', title: 'なぜNext.jsなのか？個人事業主が最新技術を導入すべき理由' },
            ].map((post, i) => (
              <motion.article key={i} whileHover={{ x: 10 }} className="group cursor-pointer border-b border-white/10 pb-8">
                <div className="text-[10px] font-bold text-[#666] mb-4 tracking-widest">{post.date} / <span className="text-[#007AFF]">{post.cat}</span></div>
                <h3 className="text-xl font-bold leading-tight group-hover:text-[#007AFF] transition">{post.title}</h3>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section id="faq" className="py-40 px-8 md:px-24 bg-[#080808] text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter italic uppercase mb-20 text-center">FAQ.</h2>
          <div className="space-y-12">
            {[
              { q: '撮影とWeb制作をセットでお願いできますか？', a: 'はい、可能です。ビジュアルとWebサイトを一貫して制作することで、より強固なブランドイメージを構築できるため、セットでのご依頼を強く推奨しております。' },
              { q: '制作後の修正は可能ですか？', a: '月額管理プランをご契約いただいている場合、月1回までのテキストや写真の差し替え修正を無償で承っております。大幅なレイアウト変更については別途お見積りとなります。' },
              { q: '支払い方法を教えてください。', a: '銀行振込にて承っております。制作費の着手金として50%、納品後に残りの50%をお支払いいただく形が一般的ですが、ご希望があれば柔軟に対応いたします。' },
              { q: 'なぜ制作費が30,000円と安いのですか？', a: '独自にカスタマイズした高品質なテンプレートをベースに制作工程を徹底的に効率化しているため、品質を落とさずにこの価格を実現しています。' },
            ].map((item, i) => (
              <div key={i} className="border-b border-white/10 pb-8">
                <h3 className="text-lg md:text-xl font-bold mb-4 flex gap-4"><span className="text-[#007AFF]">Q.</span>{item.q}</h3>
                <p className="text-[#BBBBBB] text-sm md:text-base leading-loose font-medium pl-8 border-l-2 border-[#007AFF]/30">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Pricing Section - 完全詳細版 */}
      <section id="pricing" className="py-40 px-8 md:px-24 bg-[#080808] border-y border-white/10 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 text-center">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter italic uppercase mb-4">Pricing.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* 撮影プラン */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-10 bg-[#0F0F0F] border border-white/10 flex flex-col">
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
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-10 bg-[#0F0F0F] border border-white/10 flex flex-col">
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
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="p-10 bg-[#0F0F0F] border border-[#007AFF] relative scale-105 z-10 flex flex-col shadow-2xl shadow-blue-900/10">
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

          {/* 追加オプションセクション */}
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

      {/* 11. Contact Section */}
      <section id="contact" className="py-40 px-8 md:px-24 bg-[#050505] text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-7xl font-black italic uppercase mb-8 leading-none tracking-tighter">Contact.</h2>
            <p className="text-[#BBBBBB] mb-8 font-medium">通常、24時間以内にご返信いたします。</p>
            <div className="text-[10px] font-bold text-[#666] tracking-widest uppercase italic border-l-2 border-[#007AFF] pl-4">Based in Sengawa, Tokyo</div>
          </div>
          <form action="https://formspree.io/f/xvzdedod" method="POST" className="space-y-8 bg-[#0A0A0A] p-10 border border-white/10">
            <div className="grid grid-cols-2 gap-8">
              <input type="text" name="name" required placeholder="お名前" className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#007AFF] transition-all" />
              <input type="email" name="email" required placeholder="メールアドレス" className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#007AFF] transition-all" />
            </div>
            <select name="service" defaultValue="" className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#007AFF] text-[#999] appearance-none cursor-pointer">
              <option value="" disabled>お問い合わせ内容を選択</option>
              <option value="Web Production">ホームページ制作</option>
              <option value="Visual Production">写真・動画撮影</option>
              <option value="Hybrid Plan">Hybrid Plan (Web + 撮影)</option>
            </select>
            <textarea name="message" required placeholder="ご相談内容" rows={5} className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#007AFF] resize-none transition-all"></textarea>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full bg-[#007AFF] py-6 text-xs font-black uppercase tracking-widest shadow-xl">Submit Request</motion.button>
          </form>
        </div>
      </section>

      <footer className="py-12 border-t border-white/10 text-center text-[10px] text-[#666] font-bold tracking-widest uppercase italic">
        © 2026 PROTO - VISUAL & DIGITAL STUDIO / Tokyo
      </footer>

      <style jsx global>{` 
        html { scroll-behavior: smooth; overflow-x: hidden; } 
        body { margin: 0; background-color: #050505; }
        ::placeholder { color: #444 !important; }
      `}</style>
    </main>
  );
}
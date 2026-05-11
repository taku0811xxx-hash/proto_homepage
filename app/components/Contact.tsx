'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    // 背景を白に近い薄いグレーにし、全体を明るく
    <section id="contact" className="py-40 px-8 md:px-24 bg-[#F8FAFC] text-[#1A202C]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div>
          <div className="inline-block px-4 py-1 rounded-full bg-[#007AFF]/5 border border-[#007AFF]/10 text-[#007AFF] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
            Get in Touch
          </div>
          <h2 className="text-7xl md:text-8xl font-black italic uppercase mb-8 leading-none tracking-tighter text-[#1A202C]">
            Contact<span className="text-[#007AFF]">.</span>
          </h2>
          <p className="text-[#4A5568] mb-10 font-medium leading-relaxed max-w-sm">
            制作のご依頼、お見積りのご相談など、お気軽にお問い合わせください。通常24時間以内に返信させていただきます。
          </p>
          <div className="flex items-center gap-4 text-[10px] font-bold text-[#A0AEC0] tracking-[0.2em] uppercase italic">
            <span className="w-8 h-[1px] bg-slate-300"></span>
            Based in Sengawa, Tokyo
          </div>
        </div>

        {/* フォーム部分：白背景に柔らかいシャドウで爽やかさを演出 */}
        <form 
          action="https://formspree.io/f/xvzdedod" 
          method="POST" 
          className="space-y-10 bg-white p-10 md:p-14 border border-slate-100 shadow-2xl shadow-slate-200/50 rounded-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group">
              <input 
                type="text" 
                name="name" 
                required 
                placeholder="お名前" 
                className="w-full bg-transparent border-b border-slate-200 py-4 outline-none focus:border-[#007AFF] transition-all placeholder:text-slate-300 font-medium" 
              />
            </div>
            <div className="relative group">
              <input 
                type="email" 
                name="email" 
                required 
                placeholder="メールアドレス" 
                className="w-full bg-transparent border-b border-slate-200 py-4 outline-none focus:border-[#007AFF] transition-all placeholder:text-slate-300 font-medium" 
              />
            </div>
          </div>

          <div className="relative">
            <select 
              name="service" 
              defaultValue="" 
              className="w-full bg-transparent border-b border-slate-200 py-4 outline-none focus:border-[#007AFF] text-[#1A202C] appearance-none cursor-pointer font-medium"
            >
              <option value="" disabled>お問い合わせ内容を選択</option>
              <option value="Web Production">ホームページ制作</option>
              <option value="Visual Production">写真・動画撮影</option>
              <option value="Hybrid Plan">Hybrid Plan (Web + 撮影)</option>
            </select>
            <div className="absolute right-0 bottom-5 pointer-events-none text-slate-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>

          <textarea 
            name="message" 
            required 
            placeholder="ご相談内容" 
            rows={4} 
            className="w-full bg-transparent border-b border-slate-200 py-4 outline-none focus:border-[#007AFF] resize-none transition-all placeholder:text-slate-300 font-medium"
          ></textarea>

          <motion.button 
            whileHover={{ scale: 1.01, backgroundColor: '#1A202C' }} 
            whileTap={{ scale: 0.99 }} 
            type="submit" 
            className="w-full bg-[#007AFF] text-white py-6 text-xs font-black uppercase tracking-[0.3em] shadow-xl shadow-blue-500/20 transition-all rounded-sm"
          >
            Submit Request
          </motion.button>
        </form>
      </div>
    </section>
  );
}
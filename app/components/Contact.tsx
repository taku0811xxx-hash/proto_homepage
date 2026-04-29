'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
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
  );
}
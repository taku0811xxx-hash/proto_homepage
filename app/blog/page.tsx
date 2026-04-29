'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { posts } from './data';

export default function BlogListPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-40 px-8 md:px-24">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-[#666] hover:text-[#007AFF] text-xs font-bold uppercase tracking-widest mb-12 inline-block transition-colors">
          ← Back to Top
        </Link>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter italic uppercase mb-20">Insights.</h1>
        
        <div className="space-y-16">
          {posts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id} className="group block border-b border-white/10 pb-12">
              <div className="text-[10px] font-bold text-[#666] mb-4 tracking-widest">
                {post.date} / <span className="text-[#007AFF] uppercase">{post.cat}</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold group-hover:text-[#007AFF] transition-colors leading-tight mb-4">
                {post.title}
              </h2>
              <p className="text-[#888] text-sm md:text-base line-clamp-2">
                {post.content.substring(0, 100)}...
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
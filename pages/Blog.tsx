
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, User, ArrowUpRight, ArrowRight, BookOpen, Clock, Tag } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Technology', 'Leadership', 'Future of Work', 'Science'];

  const filteredPosts = activeCategory === 'All' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  return (
    <div className="bg-white min-h-screen selection:bg-blue-600 selection:text-white">
      {/* Cinematic Hero */}
      <section className="relative pt-40 pb-32 px-4 overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-zinc-950" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] opacity-30 animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 backdrop-blur-xl text-blue-400 text-[10px] font-black tracking-[0.5em] uppercase mb-12 shadow-2xl">
              <BookOpen size={12} className="animate-pulse" />
              <span>Collective Intelligence Hub</span>
            </div>
            <h1 className="text-7xl md:text-[11rem] font-display font-black mb-10 text-white tracking-tighter leading-none">
              INSIGHTS.
            </h1>
            <p className="text-zinc-400 text-xl md:text-3xl max-w-3xl mx-auto font-medium leading-relaxed mb-20">
              Exploring the convergence of human intuition and autonomous neural systems.
            </p>

            <div className="relative max-w-2xl mx-auto group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-blue-500 transition-colors" size={24} />
              <input 
                type="text" 
                placeholder="Search the archive..." 
                className="w-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full py-7 pl-16 pr-8 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all text-xl font-medium shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Bar */}
      <div className="sticky top-[72px] z-40 bg-white/80 backdrop-blur-xl border-y border-zinc-100 py-6 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center space-x-4 md:space-x-8 min-w-max">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap ${
                activeCategory === cat 
                ? 'bg-zinc-950 text-white shadow-xl scale-105' 
                : 'text-zinc-400 hover:text-zinc-950 hover:bg-zinc-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
        {/* Featured Post - Redesigned as Immersive Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative group mb-32"
        >
          <div className="relative aspect-[21/9] overflow-hidden rounded-[4rem] shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600" 
              alt="Featured" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-12 md:p-20 text-white">
              <div className="max-w-3xl">
                <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Featured Analysis</span>
                <h2 className="text-4xl md:text-7xl font-display font-bold leading-[0.9] mb-8 tracking-tighter">
                  The vanishing barrier between <span className="italic">machine and mind.</span>
                </h2>
                <div className="flex flex-wrap items-center gap-8 text-zinc-300 text-sm font-bold mb-10 uppercase tracking-widest">
                  <div className="flex items-center space-x-2"><Calendar size={18} className="text-blue-500" /> <span>Mar 18, 2025</span></div>
                  <div className="flex items-center space-x-2"><User size={18} className="text-blue-500" /> <span>Tripti Singh</span></div>
                  <div className="flex items-center space-x-2"><Clock size={18} className="text-blue-500" /> <span>12 Min Read</span></div>
                </div>
                <button className="bg-white text-zinc-950 px-12 py-6 rounded-full text-xl font-bold hover:bg-blue-600 hover:text-white transition-all flex items-center group shadow-2xl">
                  Explore Research <ArrowUpRight className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grid of Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, i) => (
              <motion.article
                layout
                key={post.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group cursor-pointer flex flex-col h-full"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[3.5rem] mb-10 shadow-xl group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] transition-all duration-700">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute top-8 left-8">
                    <span className="bg-white/95 backdrop-blur-md text-zinc-950 text-[10px] font-black px-6 py-2.5 rounded-full uppercase tracking-[0.2em] shadow-2xl border border-white/20">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-10 left-10 right-10 text-white translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                    <p className="text-zinc-300 font-bold mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center space-x-2 text-blue-400 font-black uppercase text-[10px] tracking-widest">
                      <span>Read More</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-4xl font-display font-bold mb-6 text-zinc-950 group-hover:text-blue-600 transition-colors leading-[1.1] tracking-tight">
                  {post.title}
                </h3>
                
                <div className="mt-auto flex items-center justify-between text-zinc-400 text-[10px] font-black tracking-[0.3em] uppercase border-t border-zinc-100 pt-8">
                  <span>{post.date}</span>
                  <span className="text-zinc-300 group-hover:text-blue-600 transition-colors">By {post.author.split(' ')[0]}</span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Dynamic Newsletter / Call-to-action */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-48 relative rounded-[5rem] overflow-hidden p-16 md:p-32 bg-zinc-950 text-center"
        >
          <div className="absolute inset-0 z-0">
             <div className="absolute top-0 left-0 w-full h-full opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <Tag className="text-blue-500 mx-auto mb-10" size={48} strokeWidth={1} />
            <h2 className="text-5xl md:text-8xl font-display font-bold mb-8 text-white tracking-tighter leading-none">Decode the <br /> Future.</h2>
            <p className="text-zinc-400 text-xl md:text-2xl mb-16 font-medium leading-relaxed">
              Join 12,000+ engineers, strategists, and pioneers receiving our high-frequency intelligence reports.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-6 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="protocol@intelligence.net" 
                className="flex-grow bg-white/5 border border-white/10 rounded-full py-6 px-10 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all text-white font-bold shadow-2xl text-lg placeholder:text-zinc-600"
              />
              <button className="bg-white text-zinc-950 font-black py-6 px-12 rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-2xl active:scale-95 text-lg uppercase tracking-widest">
                Subscribe
              </button>
            </form>
            
            <p className="mt-12 text-zinc-600 text-xs font-bold uppercase tracking-[0.2em]">Zero noise. Pure protocol. Monthly frequency.</p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Blog;

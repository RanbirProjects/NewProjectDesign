
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, Star, Target, Users, Zap, ArrowRight, Brain, Activity, Compass } from 'lucide-react';
import { PROGRAMS } from '../constants';

const NeuralBackground: React.FC = () => (
  <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
    <div className="absolute top-0 left-0 w-full h-full" style={{ 
      backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.15) 1px, transparent 0)', 
      backgroundSize: '40px 40px' 
    }} />
    <motion.div 
      animate={{ 
        scale: [1, 1.2, 1],
        opacity: [0.1, 0.2, 0.1] 
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"
    />
    <motion.div 
      animate={{ 
        scale: [1.2, 1, 1.2],
        opacity: [0.1, 0.2, 0.1] 
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px]"
    />
  </div>
);

const MindShift: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="bg-white text-zinc-950 min-h-screen selection:bg-blue-600 selection:text-white">
      {/* Immersive Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://video-previews.elements.envatousercontent.com/files/1ca47656-143d-42d1-ab5f-e347210af4cc/video_preview_h264.mp4" type="video/mp4" />
          </video>
          {/* Deep Cinematic Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/40 to-zinc-950" />
          <div className="absolute inset-0 backdrop-blur-[2px]" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center space-x-3 px-6 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 backdrop-blur-xl text-blue-400 text-[10px] font-black tracking-[0.5em] uppercase mb-12 shadow-2xl">
              <Activity size={12} className="animate-pulse" />
              <span>Neural Synchronization Active</span>
            </div>
            
            <h1 className="text-7xl md:text-[12rem] font-display font-black tracking-tighter mb-10 leading-[0.8] text-white">
              REWIRE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">YOUR REALITY.</span>
            </h1>
            
            <p className="text-zinc-400 text-xl md:text-3xl max-w-3xl mx-auto font-medium leading-relaxed mb-16">
              MindShift is the clinical-grade protocol for high-frequency leadership. Upgrade your cognitive architecture.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <button className="group relative bg-blue-600 text-white px-12 py-6 rounded-full text-xl font-bold overflow-hidden transition-all hover:bg-blue-500 shadow-[0_20px_50px_rgba(37,99,235,0.3)] active:scale-95">
                <span className="relative z-10 flex items-center">
                  Start Program <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
              <button className="bg-white/5 backdrop-blur-xl border border-white/10 text-white px-12 py-6 rounded-full text-xl font-bold hover:bg-white/10 transition-all active:scale-95">
                Explore The Science
              </button>
            </div>
          </motion.div>
        </div>

        {/* HUD Decorations */}
        <div className="absolute bottom-12 left-12 hidden lg:block">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-0.5 bg-blue-600/50" />
              <span className="text-[10px] font-black text-blue-500 tracking-[0.3em] uppercase">Cognitive Baseline: 98.4%</span>
            </div>
            <div className="flex items-center space-x-4 opacity-30">
              <div className="w-8 h-0.5 bg-white/50" />
              <span className="text-[10px] font-black text-white tracking-[0.3em] uppercase">Neural Latency: 2ms</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Core Philosophy */}
      <section className="relative py-48 px-4 overflow-hidden">
        <NeuralBackground />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-600 font-black tracking-[0.5em] uppercase text-xs mb-8 block">Methodology</span>
              <h2 className="text-6xl md:text-8xl font-display font-bold mb-12 leading-[0.9] tracking-tighter">
                Beyond <br /> Mastery.
              </h2>
              <p className="text-zinc-500 text-2xl font-medium leading-relaxed mb-12">
                Traditional training focuses on skills. We focus on the <span className="text-zinc-950 italic">substrate</span>. By leveraging IDEN's neural telemetry, we identify cognitive bottlenecks in real-time.
              </p>
              
              <div className="grid grid-cols-2 gap-12 border-t border-zinc-100 pt-12">
                {[
                  { label: 'Decision Speed', val: '+42%', icon: <Zap className="text-blue-600" size={20} /> },
                  { label: 'Stress Threshold', val: '3.4x', icon: <Activity className="text-blue-600" size={20} /> }
                ].map((stat, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex items-center space-x-3">
                      {stat.icon}
                      <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{stat.label}</span>
                    </div>
                    <div className="text-5xl font-display font-black text-zinc-950">{stat.val}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200" 
                  alt="Professional Insight" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              {/* Overlapping Glass Card */}
              <motion.div 
                whileHover={{ x: -20, y: -20 }}
                className="absolute -bottom-10 -left-10 z-20 bg-white/80 backdrop-blur-2xl p-10 rounded-[3rem] shadow-2xl border border-white max-w-xs"
              >
                <Brain className="text-blue-600 mb-6" size={40} />
                <h4 className="text-xl font-bold mb-3 text-zinc-950">Neural Plasticity</h4>
                <p className="text-zinc-500 font-medium text-sm leading-relaxed">Rewiring established patterns for exponential growth.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Protocols Grid */}
      <section className="py-48 bg-zinc-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-blue-600 font-black tracking-[0.5em] uppercase text-xs mb-6 block">The Curriculum</span>
              <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-none">Active Protocols.</h2>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-950 hover:text-white transition-all cursor-pointer">
                <ArrowRight size={20} className="rotate-180" />
              </div>
              <div className="w-12 h-12 rounded-full bg-zinc-950 text-white flex items-center justify-center hover:bg-blue-600 transition-all cursor-pointer">
                <ArrowRight size={20} />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {PROGRAMS.map((program, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -15 }}
                className="group bg-white rounded-[3.5rem] p-12 shadow-sm border border-zinc-100 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] transition-all duration-700 flex flex-col h-full overflow-hidden relative"
              >
                {/* Accent Circle */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-[4] transition-transform duration-1000" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-zinc-950 rounded-[1.5rem] flex items-center justify-center mb-10 group-hover:bg-blue-600 transition-colors duration-500 shadow-xl shadow-zinc-950/20">
                    <Compass className="text-white" size={28} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-4 block group-hover:text-blue-600 transition-colors">
                    {program.duration} Duration
                  </span>
                  <h3 className="text-4xl font-display font-bold mb-6 tracking-tight text-zinc-950">{program.title}</h3>
                  <p className="text-zinc-500 text-lg font-medium leading-relaxed mb-10 flex-grow">
                    {program.description}
                  </p>
                  
                  <div className="space-y-4 mb-12">
                    {program.focus.map((f, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle2 className="text-blue-600" size={18} />
                        <span className="text-zinc-700 font-bold">{f}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-zinc-950 text-white py-6 rounded-2xl font-bold hover:bg-blue-600 transition-all active:scale-95 shadow-xl shadow-zinc-950/10 group-hover:shadow-blue-600/30 flex items-center justify-center group/btn overflow-hidden relative">
                    <span className="relative z-10 flex items-center">
                      Register Now <ArrowRight className="ml-3 group-hover/btn:translate-x-2 transition-transform" />
                    </span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Immersive Testimonial */}
      <section className="py-48 bg-white relative">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-zinc-950 rounded-[4rem] p-16 md:p-32 text-center text-white relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-16 shadow-2xl">
                <Star className="text-white fill-current" size={32} />
              </div>
              <blockquote className="text-4xl md:text-6xl font-display font-bold mb-16 leading-tight tracking-tight">
                "The shift wasn't just in my strategy; it was in the <span className="text-blue-500">fundamental speed</span> of my perception."
              </blockquote>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-white/10 shadow-xl">
                  <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200" alt="Executive" />
                </div>
                <p className="text-white font-black uppercase tracking-[0.4em] text-[10px]">Tripti Singh</p>
                <p className="text-blue-400 font-bold">VP Product, Global Nexus</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-60 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-7xl md:text-[10rem] font-display font-black mb-12 tracking-tighter leading-none text-zinc-950">
              UPGRADE <br /> NOW.
            </h2>
            <p className="text-zinc-500 text-2xl mb-20 max-w-2xl mx-auto font-medium leading-relaxed">
              Admission is by invitation only. Our next synchronization cohort begins in April 2025.
            </p>
            <button className="bg-zinc-950 text-white px-20 py-10 rounded-full text-3xl font-black hover:bg-blue-600 transition-all transform hover:scale-110 shadow-2xl active:scale-95">
              Secure Invite
            </button>
            
            <div className="mt-24 grid grid-cols-3 gap-12 border-t border-zinc-100 pt-16 opacity-30">
              <div>
                <div className="text-3xl font-display font-black text-zinc-950">1,204</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Total Syncs</div>
              </div>
              <div>
                <div className="text-3xl font-display font-black text-zinc-950">99.2%</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Completion</div>
              </div>
              <div>
                <div className="text-3xl font-display font-black text-zinc-950">4.2ms</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Latency</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MindShift;

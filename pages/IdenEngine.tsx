
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Database, Shield, Zap, Globe, Cpu, ArrowRight, Code } from 'lucide-react';

const IdenEngine: React.FC = () => {
  const features = [
    { icon: <Database />, title: 'Contextual AI', desc: 'Processes raw data into actionable insights with human-level nuance.' },
    { icon: <Shield />, title: 'Immutable Trust', desc: 'Hardware-level encryption ensuring complete data sovereignty.' },
    { icon: <Globe />, title: 'Edge Autonomy', desc: 'Localized processing that eliminates latency across global nodes.' },
    { icon: <Cpu />, title: 'Neural Sync', desc: 'Real-time UI adaptation based on user cognitive load metrics.' },
  ];

  return (
    <div className="min-h-screen relative bg-white overflow-hidden">
      {/* Full Page Video Background Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://video-previews.elements.envatousercontent.com/files/1ca47656-143d-42d1-ab5f-e347210af4cc/video_preview_h264.mp4" type="video/mp4" />
          </video>
          {/* High-tech Overlays */}
          <div className="absolute inset-0 bg-zinc-950/40 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/60" />
          
          {/* HUD Grids */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            {...({
              initial: { opacity: 0, y: 50 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] }
            } as any)}
          >
            <div className="inline-flex items-center space-x-3 bg-blue-600/20 backdrop-blur-xl border border-blue-400/30 px-6 py-2 rounded-full mb-10">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-ping" />
              <span className="text-[10px] font-black tracking-[0.5em] text-blue-200 uppercase">System Status: Synchronized</span>
            </div>
            
            <h1 className="text-7xl md:text-[11rem] font-display font-black tracking-tighter text-white mb-10 leading-[0.8]">
              IDEN <span className="text-blue-500">ENGINE.</span>
            </h1>
            
            <p className="text-zinc-300 text-xl md:text-3xl max-w-4xl mx-auto mb-16 leading-relaxed font-medium">
              The world's first purpose-aware cognitive layer. <br className="hidden md:block" />
              Moving beyond execution into the realm of pure machine intent.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <button className="bg-white text-zinc-950 px-12 py-6 rounded-full text-xl font-bold hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 shadow-2xl active:scale-95 flex items-center">
                Review Protocol <ArrowRight className="ml-3" size={24} />
              </button>
              <button className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-12 py-6 rounded-full text-xl font-bold hover:bg-white/20 transition-all transform hover:scale-105 active:scale-95">
                Technical Docs
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Animated HUD Element */}
        <div className="absolute bottom-12 left-12 hidden lg:block">
           <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-4">
                 <div className="h-0.5 w-12 bg-blue-500" />
                 <span className="text-[10px] font-black text-blue-400 tracking-widest uppercase">Latency: 0.002ms</span>
              </div>
              <div className="flex items-center space-x-4 opacity-50">
                 <div className="h-0.5 w-8 bg-zinc-500" />
                 <span className="text-[10px] font-black text-zinc-400 tracking-widest uppercase">Buffer: Cleared</span>
              </div>
           </div>
        </div>
      </section>

      {/* Feature Grid with High Contrast */}
      <section className="py-48 px-4 bg-zinc-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                {...({
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                  whileHover: { scale: 1.05, y: -10 },
                  transition: { 
                    delay: i * 0.1, 
                    duration: 0.8,
                    y: { duration: 0.4, ease: "easeOut" },
                    scale: { duration: 0.4, ease: "easeOut" }
                  },
                  viewport: { once: true }
                } as any)}
                className="group p-10 rounded-[3rem] bg-zinc-900/50 border border-zinc-800 hover:border-blue-500/50 transition-colors duration-500 cursor-default"
              >
                <div className="text-blue-500 mb-8 transform group-hover:scale-110 transition-transform duration-500">
                  {React.cloneElement(f.icon as React.ReactElement<any>, { size: 48, strokeWidth: 1.5 })}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-white">{f.title}</h3>
                <p className="text-zinc-500 leading-relaxed text-lg font-medium">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Large Decorative Text Background */}
        <div className="absolute bottom-0 right-0 text-[20rem] font-black text-white/[0.02] leading-none select-none pointer-events-none translate-y-1/2">
          ENGINE
        </div>
      </section>

      {/* Code / Technical Section */}
      <section className="bg-white py-48 px-4 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            {...({
              initial: { opacity: 0, scale: 0.95 },
              whileInView: { opacity: 1, scale: 1 },
              transition: { duration: 1 },
              viewport: { once: true }
            } as any)}
            className="relative"
          >
            <div className="bg-zinc-950 rounded-[3.5rem] p-12 overflow-hidden shadow-2xl relative">
               <div className="flex space-x-2 mb-8">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
               </div>
               <pre className="text-sm md:text-lg text-blue-400/90 font-mono leading-relaxed select-none">
{`import { IDEN } from '@mindshift/core';

// Initialize context-aware agent
const agent = new IDEN.Agent({
  mode: 'autonomous',
  telemetry: true
});

// Synchronize with human intent
await agent.sync();

agent.on('cognitive_load', (metrics) => {
  return agent.scaleUI(metrics.load);
});`}
               </pre>
               <div className="absolute bottom-8 right-12 flex items-center space-x-4">
                  <Code className="text-zinc-800" size={24} />
                  <div className="text-zinc-800 font-mono text-xs font-bold uppercase tracking-widest">v4.2.0-stable</div>
               </div>
            </div>
          </motion.div>
          
          <div className="space-y-12">
            <h2 className="text-6xl md:text-8xl font-display font-bold leading-none tracking-tighter text-zinc-950">Neural Logic. <br /> Human Context.</h2>
            <p className="text-zinc-500 text-2xl leading-relaxed font-medium">
              IDEN doesn't just execute code. It interprets the cognitive load of the operator and scales infrastructure dynamically.
            </p>
            <div className="grid gap-6">
              {[
                { label: 'Resource Efficiency', val: '99.9%' },
                { label: 'Cognitive Optimization', val: '65%' },
                { label: 'Global Node Latency', val: '0.002ms' }
              ].map((stat, idx) => (
                <div key={idx} className="flex items-center justify-between p-8 rounded-3xl bg-zinc-50 border border-zinc-100 shadow-sm hover:bg-white hover:shadow-xl transition-all group">
                  <span className="text-zinc-400 group-hover:text-zinc-900 transition-colors font-bold uppercase tracking-widest text-xs">{stat.label}</span>
                  <span className="text-blue-600 font-display font-black text-3xl">{stat.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-48 text-center bg-zinc-950 px-4 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <motion.div
             {...({
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.8 },
              viewport: { once: true }
            } as any)}
          >
            <h2 className="text-6xl md:text-[10rem] font-display font-bold mb-12 tracking-tighter text-white leading-none">The Future is <br /> <span className="text-blue-600">Contextual.</span></h2>
            <p className="text-zinc-500 text-2xl mb-16 max-w-2xl mx-auto font-medium leading-relaxed">Join the early access program for developers building the next generation of autonomous human-aware systems.</p>
            <button className="bg-blue-600 text-white px-16 py-8 rounded-full text-2xl font-bold hover:bg-white hover:text-zinc-950 transition-all transform hover:scale-105 shadow-2xl active:scale-95">
              Request API Key
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IdenEngine;

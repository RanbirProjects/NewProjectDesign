
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Activity, Zap, Layers, Share2, Terminal, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const HUDInterface: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 z-10">
      {/* Floating UI Elements */}
      <motion.div
        {...({
          animate: { y: [0, -20, 0], x: [0, 10, 0] },
          transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        } as any)}
        className="absolute top-1/4 left-10 p-4 bg-white/40 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl flex items-center space-x-3"
      >
        <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center">
          <Share2 size={16} className="text-blue-600" />
        </div>
        <div className="space-y-1">
          <div className="w-16 h-1 bg-blue-600/20 rounded" />
          <div className="w-10 h-1 bg-blue-600/10 rounded" />
        </div>
      </motion.div>

      <motion.div
        {...({
          animate: { y: [0, 30, 0], x: [0, -15, 0] },
          transition: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }
        } as any)}
        className="absolute bottom-1/3 right-20 p-4 bg-white/40 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl space-y-2"
      >
        <div className="flex space-x-1">
          <div className="w-2 h-2 rounded-full bg-blue-500" />
          <div className="w-2 h-2 rounded-full bg-zinc-300" />
          <div className="w-2 h-2 rounded-full bg-zinc-300" />
        </div>
        <div className="w-24 h-2 bg-blue-600/10 rounded" />
      </motion.div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-white text-zinc-900">
      {/* Hero Section with Requested Video Background */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Video Background Layer */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-[0.15]"
          >
            <source src="https://video-previews.elements.envatousercontent.com/files/1ca47656-143d-42d1-ab5f-e347210af4cc/video_preview_h264.mp4" type="video/mp4" />
          </video>
          {/* Subtle Graduated Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white" />
        </div>

        <HUDInterface />
        
        <motion.div
          className="relative z-20 max-w-7xl mx-auto text-center"
          {...({
            initial: { opacity: 0, y: 40 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
          } as any)}
        >
          <div className="inline-flex items-center space-x-3 bg-white/50 backdrop-blur-md border border-zinc-100 px-6 py-2.5 rounded-full mb-12 shadow-sm">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse shadow-[0_0_12px_rgba(37,99,235,0.8)]" />
            <span className="text-[10px] font-black tracking-[0.4em] text-zinc-500 uppercase">PROTOCOL: SHARE.STREAM ACTIVE</span>
          </div>
          
          <h1 className="text-7xl md:text-[9rem] font-display font-extrabold tracking-tighter mb-12 leading-[0.85] text-zinc-950">
            Illuminating <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600">
              Human Purpose
            </span>
          </h1>
          
          <p className="text-zinc-600 text-xl md:text-3xl max-w-3xl mx-auto mb-16 leading-relaxed font-medium">
            Bridging the gap between human intuition and neural intelligence through the IDEN engine.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button className="group relative bg-zinc-950 text-white px-12 py-6 rounded-full text-xl font-bold overflow-hidden transition-all hover:scale-105 shadow-[0_20px_50px_rgba(0,0,0,0.15)] active:scale-95">
              <span className="relative z-10 flex items-center">
                Explore Technology
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <Link to="/mindshift" className="text-zinc-950 font-bold text-xl hover:text-blue-600 transition-all flex items-center group px-6 py-3 border border-transparent hover:border-zinc-100 rounded-full">
              MindShift Programs 
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform text-blue-600" />
            </Link>
          </div>
        </motion.div>

        {/* Floating Metrics */}
        <div className="absolute bottom-10 left-0 right-0 z-20 hidden lg:block">
          <div className="max-w-7xl mx-auto px-8 flex justify-between items-end opacity-40">
            <div className="flex flex-col">
              <span className="text-[10px] font-black tracking-widest uppercase text-zinc-400">LATENCY</span>
              <span className="text-2xl font-display font-bold text-blue-600">0.002ms</span>
            </div>
            <div className="flex flex-col text-right">
              <span className="text-[10px] font-black tracking-widest uppercase text-zinc-400">SYNC_STATUS</span>
              <span className="text-2xl font-display font-bold text-blue-600">OPTIMIZED</span>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-48 px-4 relative bg-zinc-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <motion.div
            {...({
              initial: { opacity: 0, x: -50 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 1 }
            } as any)}
            className="relative"
          >
             <div className="aspect-square bg-blue-600/10 rounded-[4rem] absolute -inset-10 blur-3xl -z-10" />
             <img 
               src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" 
               className="rounded-[3.5rem] shadow-2xl border border-white"
               alt="Digital Core"
             />
             <div className="absolute -bottom-12 -right-12 bg-white p-10 rounded-[3rem] shadow-2xl max-w-xs border border-zinc-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center">
                    <Zap className="text-white fill-current" size={24} />
                  </div>
                  <span className="font-display font-black text-2xl">99.9%</span>
                </div>
                <p className="text-zinc-500 font-bold leading-relaxed">System reliability across the SHARE Protocol network.</p>
             </div>
          </motion.div>

          <motion.div
            {...({
              initial: { opacity: 0, x: 50 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 1 }
            } as any)}
          >
            <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter text-zinc-950 mb-10 leading-none">
              The Architecture <br /> of Clarity.
            </h2>
            <p className="text-zinc-500 text-2xl leading-relaxed mb-12 font-medium">
              We build tools that don't just process data—they understand intent. IDEN is the bridge between cognitive science and scalable infrastructure.
            </p>
            <div className="space-y-8">
               <div className="flex items-start space-x-6 group">
                  <div className="w-12 h-12 rounded-full border border-blue-600/20 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors">
                    <Layers className="text-blue-600 group-hover:text-white transition-colors" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-zinc-900 mb-2">Contextual Processing</h4>
                    <p className="text-zinc-500 font-medium">Adapting output based on real-time neural feedback loops.</p>
                  </div>
               </div>
               <div className="flex items-start space-x-6 group">
                  <div className="w-12 h-12 rounded-full border border-blue-600/20 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors">
                    <Globe className="text-blue-600 group-hover:text-white transition-colors" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-zinc-900 mb-2">Global Synchronization</h4>
                    <p className="text-zinc-500 font-medium">Zero-latency coordination across distributed human networks.</p>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-32 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-zinc-400 font-black tracking-[0.4em] uppercase text-[10px] mb-20">Global Partners & Clients</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 opacity-40">
             {['NORTH.CLOUD', 'FORMLESS.XYZ', 'SPINX.DIGITAL', 'DOCSTRIBUTE'].map((name) => (
               <div key={name} className="flex items-center justify-center font-display text-2xl font-black text-zinc-950 tracking-tighter hover:opacity-100 transition-opacity cursor-default">
                 {name}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-48 px-4">
        <motion.div 
          {...({
            initial: { opacity: 0, scale: 0.95 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true },
            transition: { duration: 1.2 }
          } as any)}
          className="max-w-6xl mx-auto bg-zinc-950 rounded-[4rem] p-20 md:p-32 text-center relative overflow-hidden shadow-[0_60px_100px_-20px_rgba(0,0,0,0.4)]"
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b82f6 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
          
          <h2 className="text-6xl md:text-9xl font-display font-bold mb-12 relative z-10 text-white leading-none tracking-tighter">
            Shift the <br /> Perspective.
          </h2>
          <p className="text-zinc-400 text-2xl md:text-3xl mb-16 relative z-10 max-w-2xl mx-auto leading-relaxed">
            Ready to integrate the world's most advanced human-contextual engine?
          </p>
          <button className="bg-white text-zinc-950 px-16 py-8 rounded-full text-2xl font-bold hover:bg-blue-600 hover:text-white transition-all relative z-10 shadow-2xl active:scale-95 transform">
            Get Started
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;

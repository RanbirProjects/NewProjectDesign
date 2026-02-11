import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-8">
              <Zap className="text-blue-600 fill-current" size={40} />
              <span className="text-4xl font-display font-bold tracking-tighter text-zinc-950">
                MIND<span className="text-blue-600">SHIFT</span>
              </span>
            </Link>
            <p className="text-zinc-500 text-lg max-w-md mb-10 leading-relaxed font-medium">
              Illuminating human purpose through neural-synced technology and high-performance cognitive architecture.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-zinc-400 hover:text-blue-600 transition-all hover:scale-110"><Twitter size={24} /></a>
              <a href="#" className="text-zinc-400 hover:text-blue-600 transition-all hover:scale-110"><Linkedin size={24} /></a>
              <a href="#" className="text-zinc-400 hover:text-blue-600 transition-all hover:scale-110"><Github size={24} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-zinc-950 font-black mb-8 text-xs uppercase tracking-[0.3em]">Platform</h4>
            <ul className="space-y-4 text-zinc-500 font-bold">
              <li><Link to="/iden" className="hover:text-blue-600 transition-colors">IDEN Engine</Link></li>
              <li><Link to="/mindshift" className="hover:text-blue-600 transition-colors">Programs</Link></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Enterprise</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Protocol</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-zinc-950 font-black mb-8 text-xs uppercase tracking-[0.3em]">Sitemap</h4>
            <ul className="space-y-4 text-zinc-500 font-bold">
              <li><Link to="/" className="hover:text-blue-600 transition-colors">Landing Page</Link></li>
              <li><Link to="/iden" className="hover:text-blue-600 transition-colors">Core Engine</Link></li>
              <li><Link to="/mindshift" className="hover:text-blue-600 transition-colors">Human Performance</Link></li>
              <li><Link to="/insights" className="hover:text-blue-600 transition-colors">Resource Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-zinc-950 font-black mb-8 text-xs uppercase tracking-[0.3em]">Connect</h4>
            <ul className="space-y-4 text-zinc-500 font-bold">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Partner</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center text-zinc-400 text-sm font-bold uppercase tracking-widest">
          <p>© 2025 MindShift Technologies Inc. Built for the SHARE Protocol.</p>
          <div className="flex space-x-10 mt-6 md:mt-0">
            <a href="#" className="hover:text-zinc-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
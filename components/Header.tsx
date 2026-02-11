
import React, { useState, useEffect } from 'react';
/* Fix: Explicitly importing Link and useLocation from react-router-dom */
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md py-3 shadow-sm border-b border-zinc-100' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20">
              <motion.div
                {...({
                  animate: { 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  },
                  transition: { 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }
                } as any)}
              >
                <Zap className="text-white fill-current" size={24} />
              </motion.div>
              <motion.div 
                className="absolute inset-0 bg-blue-400/20 rounded-lg blur-md -z-10"
                {...({
                  animate: { opacity: [0, 0.5, 0] },
                  transition: { duration: 2, repeat: Infinity }
                } as any)}
              />
            </div>
            <span className="text-2xl font-display font-bold tracking-tight text-zinc-900">
              MIND<span className="text-blue-600">SHIFT</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-bold tracking-wide uppercase transition-colors hover:text-blue-600 ${
                  location.pathname === item.path ? 'text-blue-600' : 'text-zinc-500'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button className="bg-zinc-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-600 transition-all transform hover:scale-105 shadow-xl shadow-zinc-900/10">
              GET STARTED
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-900 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            {...({
              initial: { opacity: 0, y: -20 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -20 }
            } as any)}
            className="absolute top-full left-0 right-0 bg-white border-b border-zinc-100 p-6 flex flex-col space-y-4 md:hidden shadow-2xl"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-xl font-display font-bold text-zinc-800 hover:text-blue-600"
              >
                {item.label}
              </Link>
            ))}
            <button className="bg-blue-600 text-white w-full py-4 rounded-xl text-lg font-bold">
              GET STARTED
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;

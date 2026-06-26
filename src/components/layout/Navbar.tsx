import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FiSun, FiMoon } from 'react-icons/fi';
import { navItems } from '../../data/profile';
import { useScrollSpy, useScrollProgress } from '../../hooks/useScroll';
import type { ThemeMode } from '../../types';

interface NavbarProps {
  theme: ThemeMode;
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useScrollSpy(
    navItems.map(item => item.id),
    120
  );
  const progress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-0.5">
        <motion.div
          className="h-full bg-gradient-to-r from-brand-500 via-accent-500 to-brand-400"
          style={{ width: `${progress}%` }}
        />
      </div>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0.5 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass shadow-lg' : 'bg-transparent'
          }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white font-bold text-sm">
                JR
              </div>
              <span className="font-semibold text-[var(--text-primary)] hidden sm:block">
                Jeremy<span className="text-brand-500">.</span>LP
              </span>
            </motion.button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${activeSection === item.id
                      ? 'text-brand-500'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-brand-500/10 rounded-lg"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">
              {/* Structured Data Link */}
              <a
                href="#/structured-data"
                className="hidden md:inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium border border-brand-500/30 text-brand-500 hover:bg-brand-500/10 transition-colors"
              >
                {'</>'}  JSON-LD
              </a>

              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors cursor-pointer"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.9 }}
                className="md:hidden p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
                aria-label="Toggle menu"
              >
                {isOpen ? <HiX size={20} /> : <HiMenu size={20} />}
              </motion.button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden glass border-t border-[var(--border-color)]"
            >
              <div className="px-4 py-4 space-y-1">
                {navItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${activeSection === item.id
                        ? 'text-brand-500 bg-brand-500/10'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                      }`}
                  >
                    {item.label}
                  </button>
                ))}
                <a
                  href="#/structured-data"
                  className="block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-brand-500 hover:bg-brand-500/10 transition-colors"
                >
                  {'</>'}  Data Terstruktur
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}

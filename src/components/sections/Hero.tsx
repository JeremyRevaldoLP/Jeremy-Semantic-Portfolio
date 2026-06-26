import { motion } from 'framer-motion';
import { FiGithub, FiMail, FiChevronDown } from 'react-icons/fi';
import { personalInfo } from '../../data/profile';

const interests = [
  'Pengembangan Web',
  'Pembelajaran Mesin',
  'Komputasi Awan',
  'Rekayasa Perangkat Lunak',
  'Web Semantik',
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 via-transparent to-accent-500/5" />

        {/* Animated orbs */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-brand-400/5 rounded-full blur-3xl"
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="section-container text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
          <span className="text-sm font-medium text-[var(--text-secondary)] bg-[var(--bg-secondary)] px-3 py-1 rounded-full border border-[var(--border-color)]">
            Terbuka untuk peluang kerja
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
        >
          Halo, Saya{' '}
          <span className="gradient-text">{personalInfo.fullName.split(' ').slice(0, 2).join(' ')}</span>
          <br />
          <span className="text-[var(--text-primary)]">{personalInfo.fullName.split(' ').slice(2).join(' ')}</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl sm:text-2xl text-[var(--text-secondary)] mb-6 font-light"
        >
          {personalInfo.title}
        </motion.p>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-[var(--text-secondary)] max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          {personalInfo.summary}
        </motion.p>

        {/* Interest tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {interests.map((interest, i) => (
            <motion.span
              key={interest}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
              className="badge"
            >
              {interest}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <FiGithub size={18} />
            GitHub
          </a>
          <a href={`mailto:${personalInfo.email}`} className="btn-outline">
            <FiMail size={18} />
            Hubungi Saya
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--text-muted)] cursor-pointer"
        aria-label="Scroll down"
      >
        <FiChevronDown size={24} />
      </motion.button>
    </section>
  );
}

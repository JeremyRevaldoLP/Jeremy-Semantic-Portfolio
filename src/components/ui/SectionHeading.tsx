import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({ title, subtitle, align = 'center' }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-3">
        <span className="gradient-text">{title}</span>
      </h2>
      <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">{subtitle}</p>
      <div
        className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
    </motion.div>
  );
}

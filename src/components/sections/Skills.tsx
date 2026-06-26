import { motion } from 'framer-motion';
import {
  FiCode,
  FiBox,
  FiDatabase,
  FiCloud,
  FiTool,
  FiCpu,
} from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import { skillCategories } from '../../data/profile';

const categoryIcons: Record<string, React.ComponentType<{ size?: number }>> = {
  code: FiCode,
  framework: FiBox,
  database: FiDatabase,
  cloud: FiCloud,
  tools: FiTool,
  other: FiCpu,
};

const levelLabels = {
  beginner: 'Pemula',
  intermediate: 'Menengah',
  advanced: 'Mahir',
};

const levelColors = {
  beginner: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
  intermediate: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  advanced: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
};

const levelWidths = {
  beginner: '33%',
  intermediate: '66%',
  advanced: '100%',
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-container">
        <SectionHeading title="Keahlian Teknis" subtitle="Teknologi dan alat pemrograman yang saya gunakan" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map(category => {
            const Icon = categoryIcons[category.icon] || FiCode;
            return (
              <motion.div key={category.name} variants={cardVariants} className="card">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-brand-500/10 to-accent-500/10 text-brand-500">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-[var(--text-primary)]">{category.name}</h3>
                </div>

                {/* Skills list */}
                <div className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-[var(--text-primary)]">
                          {skill.name}
                        </span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full border ${levelColors[skill.level]}`}
                        >
                          {levelLabels[skill.level]}
                        </span>
                      </div>
                      <div className="h-1.5 bg-[var(--bg-secondary)] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: levelWidths[skill.level] }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.1 + i * 0.05, ease: 'easeOut' }}
                          className="h-full bg-gradient-to-r from-brand-500 to-accent-500 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

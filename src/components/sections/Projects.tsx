import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCheckCircle, FiClock, FiCalendar } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import { projects } from '../../data/profile';

const statusConfig = {
  completed: { icon: FiCheckCircle, label: 'Selesai', color: 'text-emerald-500 bg-emerald-500/10' },
  'in-progress': { icon: FiClock, label: 'Sedang Berjalan', color: 'text-amber-500 bg-amber-500/10' },
  planned: { icon: FiCalendar, label: 'Direncanakan', color: 'text-blue-500 bg-blue-500/10' },
};

const typeGradients = {
  academic: 'from-blue-500/20 to-purple-500/20',
  personal: 'from-emerald-500/20 to-teal-500/20',
  freelance: 'from-amber-500/20 to-orange-500/20',
};

const typeLabels = {
  academic: 'Proyek Akademik',
  personal: 'Proyek Pribadi',
  freelance: 'Proyek Freelance',
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  return (
    <section id="projects" className="bg-[var(--bg-secondary)]">
      <div className="section-container">
        <SectionHeading title="Proyek" subtitle="Sistem dan aplikasi yang telah saya bangun dan kontribusikan" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map(project => {
            const status = statusConfig[project.status];
            const StatusIcon = status.icon;
            return (
              <motion.div
                key={project.name}
                variants={cardVariants}
                className="card group !p-0 overflow-hidden"
              >
                {/* Gradient header */}
                <div
                  className={`bg-gradient-to-br ${typeGradients[project.type]} p-6 relative overflow-hidden`}
                >
                  {/* Decorative shapes */}
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full" />
                  <div className="absolute -right-2 -bottom-6 w-16 h-16 bg-white/5 rounded-full" />

                  <div className="relative">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-[var(--text-primary)]">{project.name}</h3>
                      <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${status.color}`}>
                        <StatusIcon size={12} />
                        {status.label}
                      </div>
                    </div>
                    <span className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider">
                      {typeLabels[project.type]}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                        <FiCheckCircle size={12} className="mt-0.5 text-brand-500 shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-0.5 rounded-md bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-color)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-2 border-t border-[var(--border-color)]">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-[var(--text-secondary)] hover:text-brand-500 transition-colors"
                    >
                      <FiGithub size={14} />
                      Kode Sumber
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-[var(--text-secondary)] hover:text-brand-500 transition-colors"
                    >
                      <FiExternalLink size={14} />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

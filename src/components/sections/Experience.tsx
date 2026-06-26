import { motion } from 'framer-motion';
import { FiBriefcase, FiCode, FiLayers, FiMonitor } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import { experiences } from '../../data/profile';

const typeIcons = {
  internship: FiBriefcase,
  'part-time': FiMonitor,
  freelance: FiCode,
  project: FiLayers,
};

const typeColors = {
  internship: 'from-blue-500 to-cyan-500',
  'part-time': 'from-amber-500 to-orange-500',
  freelance: 'from-emerald-500 to-teal-500',
  project: 'from-purple-500 to-pink-500',
};

const typeLabels = {
  internship: 'Magang',
  'part-time': 'Paruh Waktu',
  freelance: 'Freelance',
  project: 'Proyek Kampus',
};

function formatDate(dateStr: string): string {
  if (dateStr === 'Present') return 'Sekarang';
  const [year, month] = dateStr.split('-');
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agt', 'Sep', 'Okt', 'Nov', 'Des'];
  return `${monthNames[parseInt(month) - 1]} ${year}`;
}

export default function Experience() {
  return (
    <section id="experience" className="bg-[var(--bg-secondary)]">
      <div className="section-container">
        <SectionHeading title="Pengalaman" subtitle="Riwayat karir dan pengalaman profesional saya" />

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="timeline-line" />

          {experiences.map((exp, index) => {
            const Icon = typeIcons[exp.type];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative pl-12 md:pl-0 mb-12 last:mb-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0' : 'md:pl-12 md:ml-auto'
                  }`}
              >
                {/* Card */}
                <div className="card">
                  {/* Header */}
                  <div className={`flex items-start gap-3 mb-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${typeColors[exp.type]} text-white shrink-0`}>
                      <Icon size={18} />
                    </div>
                    <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                      <h3 className="font-bold text-[var(--text-primary)]">{exp.position}</h3>
                      <p className="text-brand-500 font-medium text-sm">{exp.organization}</p>
                    </div>
                  </div>

                  {/* Date & Type */}
                  <div className={`flex items-center gap-3 mb-3 text-xs text-[var(--text-muted)] ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <span>
                      {formatDate(exp.startDate)} – {formatDate(exp.endDate)}
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-white bg-gradient-to-r ${typeColors[exp.type]}`}>
                      {typeLabels[exp.type]}
                    </span>
                  </div>

                  {/* Responsibilities */}
                  <ul className={`space-y-1.5 mb-4 ${index % 2 === 0 ? 'md:text-left' : ''}`}>
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-500 shrink-0" />
                        {resp}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className={`flex flex-wrap gap-1.5 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {exp.technologies.map(tech => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-0.5 rounded-md bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-color)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

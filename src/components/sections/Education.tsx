import { motion } from 'framer-motion';
import { FiMapPin, FiCalendar, FiAward, FiBook } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import { education } from '../../data/profile';

export default function Education() {
  return (
    <section id="education">
      <div className="section-container">
        <SectionHeading title="Pendidikan" subtitle="Riwayat pendidikan akademik saya" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="card !p-0 overflow-hidden">
            {/* Header gradient */}
            <div className="bg-gradient-to-r from-brand-500 to-accent-500 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm shrink-0">
                  <FiBook size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{education.institution}</h3>
                  <p className="text-white/80 text-lg mt-1">{education.degree}</p>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Meta info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                  <FiCalendar size={16} className="text-brand-500" />
                  <span className="text-sm">
                    {education.startYear} – {education.endYear ?? 'Sekarang'}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                  <FiAward size={16} className="text-brand-500" />
                  <span className="text-sm">IPK: {education.gpa} / 4.0</span>
                </div>
                <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                  <FiMapPin size={16} className="text-brand-500" />
                  <span className="text-sm">Kendari, Indonesia</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {education.description}
              </p>

              {/* GPA Bar */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-[var(--text-primary)]">
                    Indeks Prestasi Kumulatif (IPK)
                  </span>
                  <span className="text-sm font-bold text-brand-500">{education.gpa} / 4.0</span>
                </div>
                <div className="h-3 bg-[var(--bg-secondary)] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(education.gpa / 4.0) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-brand-500 to-accent-500 rounded-full"
                  />
                </div>
              </div>

              {/* Coursework */}
              <div>
                <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3">
                  Mata Kuliah Relevan
                </h4>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course, i) => (
                    <motion.span
                      key={course}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="badge"
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

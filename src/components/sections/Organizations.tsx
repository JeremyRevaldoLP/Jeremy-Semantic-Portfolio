import { motion } from 'framer-motion';
import { FiUsers, FiGlobe, FiCalendar, FiStar } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import { organizations } from '../../data/profile';

const typeConfig = {
  'student-org': { icon: FiUsers, gradient: 'from-blue-500 to-indigo-500', label: 'Student Organization' },
  community: { icon: FiGlobe, gradient: 'from-emerald-500 to-teal-500', label: 'Community' },
  event: { icon: FiCalendar, gradient: 'from-amber-500 to-orange-500', label: 'Event' },
  team: { icon: FiStar, gradient: 'from-purple-500 to-pink-500', label: 'Team' },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Organizations() {
  return (
    <section id="organizations">
      <div className="section-container">
        <SectionHeading
          title="Organizations & Activities"
          subtitle="Communities and events I'm involved in"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {organizations.map(org => {
            const config = typeConfig[org.type];
            const Icon = config.icon;

            return (
              <motion.div key={org.name} variants={cardVariants} className="card group">
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${config.gradient} text-white shrink-0 shadow-lg`}
                  >
                    <Icon size={22} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-bold text-[var(--text-primary)] leading-tight">{org.name}</h3>
                    </div>
                    <p className="text-brand-500 text-sm font-medium mb-1">{org.role}</p>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs text-[var(--text-muted)]">{org.period}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full text-white bg-gradient-to-r ${config.gradient}`}>
                        {config.label}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {org.description}
                    </p>
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

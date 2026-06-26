import { motion } from 'framer-motion';
import { FiTarget, FiBookOpen, FiHeart, FiUser } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';

const aboutCards = [
  {
    icon: FiUser,
    title: 'Who I Am',
    description:
      'A dedicated Computer Science student at Universitas Halu Oleo with a passion for technology and innovation. I thrive on solving complex problems and building solutions that make a difference.',
  },
  {
    icon: FiTarget,
    title: 'Career Objectives',
    description:
      'Aspiring to become a full-stack software engineer specializing in intelligent systems. I aim to combine web development expertise with machine learning to create impactful, data-driven applications.',
  },
  {
    icon: FiHeart,
    title: 'Areas of Interest',
    description:
      'Deeply fascinated by the intersection of Web Development, Machine Learning, Cloud Computing, and the Semantic Web. I believe in technology that is both powerful and accessible.',
  },
  {
    icon: FiBookOpen,
    title: 'Continuous Learner',
    description:
      'Always exploring new technologies, frameworks, and methodologies. Currently diving deeper into Semantic Web technologies, structured data, and knowledge graphs for better machine understanding.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="about" className="bg-[var(--bg-secondary)]">
      <div className="section-container">
        <SectionHeading title="About Me" subtitle="Get to know me better" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {aboutCards.map(({ icon: Icon, title, description }) => (
            <motion.div key={title} variants={cardVariants} className="card group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-brand-500/10 to-accent-500/10 text-brand-500 group-hover:from-brand-500/20 group-hover:to-accent-500/20 transition-colors shrink-0">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-2">{title}</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                    {description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

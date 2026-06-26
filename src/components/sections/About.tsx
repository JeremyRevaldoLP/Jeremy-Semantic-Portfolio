import { motion } from 'framer-motion';
import { FiTarget, FiBookOpen, FiHeart, FiUser } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';

const aboutCards = [
  {
    icon: FiUser,
    title: 'Siapa Saya',
    description:
      'Seorang mahasiswa Ilmu Komputer yang berdedikasi di Universitas Halu Oleo dengan hasrat tinggi terhadap teknologi dan inovasi. Saya senang memecahkan masalah kompleks dan membangun solusi yang bermanfaat bagi masyarakat.',
  },
  {
    icon: FiTarget,
    title: 'Tujuan Karir',
    description:
      'Bercita-cita menjadi seorang insinyur perangkat lunak full-stack (full-stack software engineer) yang berspesialisasi dalam sistem cerdas. Saya bertujuan untuk menggabungkan pengembangan web dengan pembelajaran mesin guna menciptakan aplikasi cerdas berbasis data.',
  },
  {
    icon: FiHeart,
    title: 'Bidang Minat',
    description:
      'Sangat tertarik pada titik temu antara Pengembangan Web, Pembelajaran Mesin, Komputasi Awan, dan Web Semantik. Saya percaya pada teknologi yang bertenaga namun tetap mudah diakses.',
  },
  {
    icon: FiBookOpen,
    title: 'Pembelajar Mandiri',
    description:
      'Selalu bersemangat mengeksplorasi teknologi, framework, dan metodologi baru. Saat ini sedang mempelajari lebih dalam teknologi Web Semantik, data terstruktur, dan grafik pengetahuan (knowledge graphs) untuk kecerdasan mesin.',
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
        <SectionHeading title="Tentang Saya" subtitle="Kenali diri saya lebih dekat" />

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

import type {
  PersonalInfo,
  Education,
  Experience,
  SkillCategory,
  Project,
  Organization,
  NavItem,
} from '../types';

// ===== Personal Info =====
export const personalInfo: PersonalInfo = {
  fullName: 'Jeremy Revaldo Latuperisa',
  title: 'Mahasiswa Ilmu Komputer',
  summary:
    'Mahasiswa Ilmu Komputer yang berdedikasi di Universitas Halu Oleo dengan minat yang kuat dalam Pengembangan Web (Web Development), Pembelajaran Mesin (Machine Learning), Komputasi Awan (Cloud Computing), Rekayasa Perangkat Lunak (Software Engineering), dan Teknologi Web Semantik (Semantic Web). Tertarik untuk membangun solusi inovatif yang menjembatani pemahaman manusia dan kecerdasan mesin.',
  email: 'jeremyrevaldo0000@gmail.com',
  github: 'https://github.com/JeremyRevaldoLP',
  linkedin: 'https://www.linkedin.com/in/jeremy-revaldo-a86542410/',
  location: 'Kendari, Sulawesi Tenggara, Indonesia',
  website: 'https://jeremylatuperisa.github.io',
};

// ===== Navigation Items =====
export const navItems: NavItem[] = [
  { id: 'hero', label: 'Beranda' },
  { id: 'about', label: 'Tentang Saya' },
  { id: 'education', label: 'Pendidikan' },
  { id: 'experience', label: 'Pengalaman' },
  { id: 'skills', label: 'Keahlian' },
  { id: 'projects', label: 'Proyek' },
  { id: 'organizations', label: 'Organisasi' },
  { id: 'semantic', label: 'Web Semantik' },
];

// ===== Education =====
export const education: Education = {
  institution: 'Universitas Halu Oleo',
  degree: 'Sarjana Ilmu Komputer (S.Kom.)',
  field: 'Ilmu Komputer',
  startYear: 2023,
  gpa: 3.6,
  coursework: [
    'Pembelajaran Mesin',
    'Pengembangan Web',
    'Sistem Basis Data',
    'Struktur Data & Algoritma',
    'Jaringan Komputer',
    'Rekayasa Perangkat Lunak',
    'Kecerdasan Buatan',
    'Sistem Operasi',
  ],
  description:
    'Sedang menempuh pendidikan Sarjana Ilmu Komputer dengan fokus pada pengembangan perangkat lukan dan sistem cerdas. Aktif terlibat dalam proyek teknologi dan organisasi kemahasiswaan.',
};

export const highSchool = {
  institution: 'SMAN 1 Kendari',
  location: 'Kendari, Sulawesi Tenggara',
};

// ===== Experience =====
export const experiences: Experience[] = [
  {
    position: 'Magang Pengembang Web',
    organization: 'Diskominfo Kota Kendari',
    startDate: '2024-06',
    endDate: '2024-09',
    responsibilities: [
      'Mengembangkan dan memelihara aplikasi web pemerintah untuk layanan publik',
      'Berkolaborasi dengan tim IT untuk menerapkan antarmuka pengguna yang responsif dan aksesibel',
      'Mengoptimalkan kueri basis data yang menghasilkan pemuatan halaman 40% lebih cepat',
      'Berpartisipasi dalam tinjauan kode (code reviews) dan mengikuti praktik pengembangan agile',
      'Membuat dokumentasi teknis untuk sistem web internal',
    ],
    technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Bootstrap', 'Git'],
    type: 'internship',
  },
  {
    position: 'Asisten IT Support',
    organization: 'Universitas Halu Oleo',
    startDate: '2024-01',
    endDate: '2024-05',
    responsibilities: [
      'Menyediakan dukungan teknis untuk infrastruktur IT dan sistem jaringan kampus',
      'Membantu memecahkan masalah perangkat keras dan perangkat lunak bagi dosen dan staf',
      'Memelihara dan mengonfigurasi stasiun kerja laboratorium komputer kampus',
      'Mendokumentasikan prosedur IT dan membuat panduan pengguna untuk masalah umum',
    ],
    technologies: ['Windows Server', 'Networking', 'Hardware Troubleshooting', 'Active Directory'],
    type: 'part-time',
  },
  {
    position: 'Pengembang Web Freelance',
    organization: 'Pekerja Mandiri',
    startDate: '2023-06',
    endDate: 'Present',
    responsibilities: [
      'Merancang dan mengembangkan situs web khusus untuk bisnis lokal dan organisasi',
      'Menerapkan solusi web full-stack menggunakan framework dan teknologi modern',
      'Mengelola hubungan klien, linimasa proyek, dan hasil akhir (deliverables)',
      'Mendeploy dan memelihara situs web di berbagai platform hosting',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TailwindCSS', 'PostgreSQL', 'Vercel'],
    type: 'freelance',
  },
];

// ===== Skills =====
export const skillCategories: SkillCategory[] = [
  {
    name: 'Bahasa Pemrograman',
    icon: 'code',
    skills: [
      { name: 'Python', level: 'advanced' },
      { name: 'JavaScript', level: 'advanced' },
      { name: 'TypeScript', level: 'intermediate' },
      { name: 'PHP', level: 'intermediate' },
      { name: 'Java', level: 'intermediate' },
      { name: 'C++', level: 'beginner' },
      { name: 'SQL', level: 'advanced' },
    ],
  },
  {
    name: 'Framework & Pustaka',
    icon: 'framework',
    skills: [
      { name: 'React', level: 'advanced' },
      { name: 'Next.js', level: 'intermediate' },
      { name: 'Node.js', level: 'intermediate' },
      { name: 'Laravel', level: 'intermediate' },
      { name: 'TailwindCSS', level: 'advanced' },
      { name: 'Express.js', level: 'intermediate' },
      { name: 'Flask', level: 'intermediate' },
    ],
  },
  {
    name: 'Basis Data',
    icon: 'database',
    skills: [
      { name: 'MySQL', level: 'advanced' },
      { name: 'PostgreSQL', level: 'intermediate' },
      { name: 'MongoDB', level: 'intermediate' },
      { name: 'Firebase', level: 'intermediate' },
      { name: 'Redis', level: 'beginner' },
    ],
  },
  {
    name: 'Cloud & DevOps',
    icon: 'cloud',
    skills: [
      { name: 'Docker', level: 'intermediate' },
      { name: 'Google Cloud', level: 'beginner' },
      { name: 'Vercel', level: 'advanced' },
      { name: 'Netlify', level: 'intermediate' },
      { name: 'Linux', level: 'intermediate' },
      { name: 'CI/CD', level: 'beginner' },
    ],
  },
  {
    name: 'Alat Pengembangan',
    icon: 'tools',
    skills: [
      { name: 'Git', level: 'advanced' },
      { name: 'VS Code', level: 'advanced' },
      { name: 'Postman', level: 'intermediate' },
      { name: 'Figma', level: 'intermediate' },
      { name: 'npm/yarn', level: 'advanced' },
    ],
  },
  {
    name: 'Keahlian Teknis Lainnya',
    icon: 'other',
    skills: [
      { name: 'RESTful APIs', level: 'advanced' },
      { name: 'Machine Learning', level: 'intermediate' },
      { name: 'Semantic Web', level: 'intermediate' },
      { name: 'Responsive Design', level: 'advanced' },
      { name: 'Agile/Scrum', level: 'intermediate' },
    ],
  },
];

// ===== Projects =====
export const projects: Project[] = [
  {
    name: 'Network Maintenance Monitoring',
    description:
      'Sistem pemantauan dan pemeliharaan router jaringan cerdas menggunakan analitik prediktif untuk mengantisipasi dan mencegah kegagalan jaringan. Menampilkan pemantauan waktu nyata (real-time), diagnostik otomatis, dan dasbor ramah pengguna untuk administrator jaringan.',
    technologies: ['Python', 'Flask', 'React', 'TensorFlow', 'MQTT', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/JeremyRevaldoLP/Network-Maintenance-Monitoring',
    status: 'completed',
    type: 'academic',
    highlights: [
      'Menerapkan algoritma pemeliharaan prediktif menggunakan machine learning',
      'Membangun dasbor pemantauan real-time dengan koneksi WebSocket',
      'Mengurangi waktu henti (downtime) jaringan sebesar 35% di lingkungan pengujian',
    ],
  },
  {
    name: 'Face Recognition Attendance System',
    description:
      'Sistem pelacakan kehadiran otomatis menggunakan teknologi pengenalan wajah. Sistem menangkap dan memproses data wajah untuk memverifikasi identitas mahasiswa dan merekam kehadiran secara otomatis, menghilangkan absen manual.',
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'Flask', 'SQLite', 'HTML/CSS'],
    githubUrl: 'https://github.com/JeremyRevaldoLP/AI-FaceRecognitionAttendanceSystem',
    status: 'completed',
    type: 'academic',
    highlights: [
      'Mencapai akurasi 95% dalam pengenalan wajah di bawah kondisi pencahayaan yang bervariasi',
      'Memproses umpan video real-time untuk penandaan kehadiran instan',
      'Menerapkan langkah-langkah anti-pemalsuan (anti-spoofing) untuk integritas sistem',
    ],
  },
  {
    name: 'Portofolio Web Semantik',
    description:
      'Website portofolio ini — profil pribadi yang dibangun dengan teknologi Web Semantik. Menunjukkan data terstruktur JSON-LD, markup Schema.org, dan RDF triples untuk membuat informasi profil dapat dibaca oleh mesin dan mesin pencari secara optimal.',
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'JSON-LD', 'Schema.org'],
    githubUrl: 'https://github.com/JeremyRevaldoLP/Jeremy-Semantic-Portfolio',
    status: 'completed',
    type: 'academic',
    highlights: [
      'Menerapkan data terstruktur Schema.org yang komprehensif dengan JSON-LD',
      'Membangun visualisasi interaktif dan demonstrasi Web Semantik',
      'Mencapai skor Lighthouse tinggi untuk performa, aksesibilitas, dan SEO',
    ],
  },
];

// ===== Organizations =====
export const organizations: Organization[] = [
  {
    name: 'Himpunan Mahasiswa Program Studi Ilmu Komputer',
    role: 'Anggota Aktif & Pengembang Web',
    period: '2023 – Sekarang',
    description:
      'Berkontribusi pada asosiasi mahasiswa program studi Ilmu Komputer. Bertanggung jawab atas pengembangan dan pemeliharaan situs web organisasi serta platform digital lainnya.',
    type: 'student-org',
  },
  {
    name: 'Tim Relawan IT Mahasiswa',
    role: 'Relawan Teknis',
    period: '2023 – Sekarang',
    description:
      'Menjadi relawan untuk menyediakan dukungan IT dan pelatihan teknis bagi sesama mahasiswa. Mengadakan pelatihan pemrograman dasar, desain web, dan alat produktivitas.',
    type: 'team',
  },
];

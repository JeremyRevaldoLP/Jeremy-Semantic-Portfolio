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
  title: 'Computer Science Student',
  summary:
    'Passionate Computer Science student at Universitas Halu Oleo with a strong interest in Web Development, Machine Learning, Cloud Computing, Software Engineering, and Semantic Web technologies. Eager to build innovative solutions that bridge the gap between human understanding and machine intelligence.',
  email: 'jeremylatuperisa@gmail.com',
  github: 'https://github.com/jeremylatuperisa',
  linkedin: 'https://linkedin.com/in/jeremylatuperisa',
  location: 'Kendari, Southeast Sulawesi, Indonesia',
  website: 'https://jeremylatuperisa.github.io',
};

// ===== Navigation Items =====
export const navItems: NavItem[] = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'organizations', label: 'Organizations' },
  { id: 'semantic', label: 'Semantic Web' },
];

// ===== Education =====
export const education: Education = {
  institution: 'Universitas Halu Oleo',
  degree: 'Bachelor of Computer Science',
  field: 'Computer Science',
  startYear: 2023,
  gpa: 3.6,
  coursework: [
    'Machine Learning',
    'Web Development',
    'Database Systems',
    'Data Structures & Algorithms',
    'Computer Networks',
    'Software Engineering',
    'Artificial Intelligence',
    'Operating Systems',
  ],
  description:
    'Pursuing a Bachelor\'s degree in Computer Science with a focus on software engineering and intelligent systems. Actively involved in research projects and student organizations.',
};

// ===== Experience =====
export const experiences: Experience[] = [
  {
    position: 'Web Development Intern',
    organization: 'Diskominfo Kota Kendari',
    startDate: '2024-06',
    endDate: '2024-09',
    responsibilities: [
      'Developed and maintained government web applications for public services',
      'Collaborated with the IT team to implement responsive and accessible user interfaces',
      'Optimized database queries resulting in 40% faster page load times',
      'Participated in code reviews and followed agile development practices',
      'Created technical documentation for internal web systems',
    ],
    technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Bootstrap', 'Git'],
    type: 'internship',
  },
  {
    position: 'IT Support Assistant',
    organization: 'Universitas Halu Oleo',
    startDate: '2024-01',
    endDate: '2024-05',
    responsibilities: [
      'Provided technical support for campus IT infrastructure and network systems',
      'Assisted in troubleshooting hardware and software issues for faculty and staff',
      'Maintained and configured campus computer lab workstations',
      'Documented IT procedures and created user guides for common issues',
    ],
    technologies: ['Windows Server', 'Networking', 'Hardware Troubleshooting', 'Active Directory'],
    type: 'part-time',
  },
  {
    position: 'Freelance Web Developer',
    organization: 'Self-Employed',
    startDate: '2023-06',
    endDate: 'Present',
    responsibilities: [
      'Designed and developed custom websites for local businesses and organizations',
      'Implemented full-stack web solutions using modern frameworks and technologies',
      'Managed client relationships, project timelines, and deliverables',
      'Deployed and maintained websites on various hosting platforms',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TailwindCSS', 'PostgreSQL', 'Vercel'],
    type: 'freelance',
  },
  {
    position: 'Student Technology Lead',
    organization: 'Campus Technology Projects',
    startDate: '2023-09',
    endDate: 'Present',
    responsibilities: [
      'Led development teams for campus-wide technology initiatives and projects',
      'Coordinated with student organizations to build digital tools and platforms',
      'Organized and mentored in programming workshops and hackathons',
      'Implemented project management best practices for student-driven tech projects',
    ],
    technologies: ['Python', 'React', 'Firebase', 'Docker', 'Git', 'Figma'],
    type: 'project',
  },
];

// ===== Skills =====
export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming Languages',
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
    name: 'Frameworks & Libraries',
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
    name: 'Databases',
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
    name: 'Development Tools',
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
    name: 'Other Technical Skills',
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
    name: 'Smart Maintenance Router',
    description:
      'An intelligent network router maintenance system that uses predictive analytics to anticipate and prevent network failures. Features real-time monitoring, automated diagnostics, and a user-friendly dashboard for network administrators.',
    technologies: ['Python', 'Flask', 'React', 'TensorFlow', 'MQTT', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/jeremylatuperisa/smart-maintenance-router',
    status: 'completed',
    type: 'academic',
    highlights: [
      'Implemented predictive maintenance algorithms using machine learning',
      'Built real-time monitoring dashboard with WebSocket connections',
      'Reduced network downtime by 35% in testing environment',
    ],
  },
  {
    name: 'Face Recognition Attendance System',
    description:
      'An automated attendance tracking system using facial recognition technology. The system captures and processes face data to verify student identity and automatically record attendance, eliminating manual roll calls.',
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'Flask', 'SQLite', 'HTML/CSS'],
    githubUrl: 'https://github.com/jeremylatuperisa/face-recognition-attendance',
    status: 'completed',
    type: 'academic',
    highlights: [
      'Achieved 95% accuracy in facial recognition under varying lighting conditions',
      'Processed real-time video feed for instant attendance marking',
      'Implemented anti-spoofing measures for system integrity',
    ],
  },
  {
    name: 'Semantic Web Portfolio',
    description:
      'This very website — a personal profile built with Semantic Web technologies. Demonstrates JSON-LD structured data, Schema.org markup, and RDF triples to make personal information machine-readable and searchable.',
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'JSON-LD', 'Schema.org'],
    githubUrl: 'https://github.com/jeremylatuperisa/semantic-portfolio',
    status: 'completed',
    type: 'academic',
    highlights: [
      'Implemented comprehensive Schema.org structured data with JSON-LD',
      'Built interactive Semantic Web visualization and demonstration',
      'Achieved high Lighthouse scores for performance, accessibility, and SEO',
    ],
  },
  {
    name: 'Local Business Directory',
    description:
      'A full-stack web application for discovering and reviewing local businesses in Kendari. Features search, filtering, user reviews, and business owner dashboards with analytics.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'TailwindCSS', 'Vercel'],
    githubUrl: 'https://github.com/jeremylatuperisa/local-business-directory',
    status: 'in-progress',
    type: 'personal',
    highlights: [
      'Designed responsive UI with modern card-based layout',
      'Implemented full-text search with PostgreSQL',
      'Built REST API with authentication and authorization',
    ],
  },
];

// ===== Organizations =====
export const organizations: Organization[] = [
  {
    name: 'Himpunan Mahasiswa Informatika (HIMINFO)',
    role: 'Active Member & Web Developer',
    period: '2023 – Present',
    description:
      'Contributing to the student association for the Computer Science department. Responsible for developing and maintaining the organization\'s website and digital platforms.',
    type: 'student-org',
  },
  {
    name: 'Google Developer Student Club (GDSC)',
    role: 'Core Team Member',
    period: '2023 – Present',
    description:
      'Active participant in Google-sponsored tech community on campus. Organizing workshops on web development, cloud computing, and machine learning for fellow students.',
    type: 'community',
  },
  {
    name: 'Campus Hackathon 2024',
    role: 'Team Lead & Full-Stack Developer',
    period: '2024',
    description:
      'Led a team of 4 to develop an innovative solution during a 48-hour hackathon. Built a prototype for a campus resource management app that won recognition from judges.',
    type: 'event',
  },
  {
    name: 'Student IT Volunteer Team',
    role: 'Technical Volunteer',
    period: '2023 – Present',
    description:
      'Volunteering to provide IT support and technical training to fellow students. Conducting workshops on basic programming, web development, and productivity tools.',
    type: 'team',
  },
];

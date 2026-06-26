import type { RDFTriple, SchemaEntity } from '../types';

// ===== RDF Triples =====
export const rdfTriples: RDFTriple[] = [
  {
    subject: 'Jeremy Revaldo Latuperisa',
    predicate: 'rdf:type',
    object: 'schema:Person',
    subjectType: 'Person',
    objectType: 'Class',
  },
  {
    subject: 'Jeremy Revaldo Latuperisa',
    predicate: 'schema:studiesAt',
    object: 'Universitas Halu Oleo',
    subjectType: 'Person',
    objectType: 'CollegeOrUniversity',
  },
  {
    subject: 'Jeremy Revaldo Latuperisa',
    predicate: 'schema:hasCredential',
    object: 'Sarjana Ilmu Komputer (S.Kom.)',
    subjectType: 'Person',
    objectType: 'EducationalOccupationalCredential',
  },
  {
    subject: 'Jeremy Revaldo Latuperisa',
    predicate: 'schema:hasSkill',
    object: 'Python',
    subjectType: 'Person',
    objectType: 'DefinedTerm',
  },
  {
    subject: 'Jeremy Revaldo Latuperisa',
    predicate: 'schema:hasSkill',
    object: 'JavaScript',
    subjectType: 'Person',
    objectType: 'DefinedTerm',
  },
  {
    subject: 'Jeremy Revaldo Latuperisa',
    predicate: 'schema:hasSkill',
    object: 'React',
    subjectType: 'Person',
    objectType: 'DefinedTerm',
  },
  {
    subject: 'Jeremy Revaldo Latuperisa',
    predicate: 'schema:hasSkill',
    object: 'Pembelajaran Mesin',
    subjectType: 'Person',
    objectType: 'DefinedTerm',
  },
  {
    subject: 'Jeremy Revaldo Latuperisa',
    predicate: 'schema:workedAt',
    object: 'Diskominfo Kota Kendari',
    subjectType: 'Person',
    objectType: 'Organization',
  },
  {
    subject: 'Jeremy Revaldo Latuperisa',
    predicate: 'schema:hasOccupation',
    object: 'Magang Pengembang Web',
    subjectType: 'Person',
    objectType: 'Occupation',
  },
  {
    subject: 'Jeremy Revaldo Latuperisa',
    predicate: 'schema:hasOccupation',
    object: 'Pengembang Web Freelance',
    subjectType: 'Person',
    objectType: 'Occupation',
  },
  {
    subject: 'Jeremy Revaldo Latuperisa',
    predicate: 'schema:created',
    object: 'Smart Maintenance Router',
    subjectType: 'Person',
    objectType: 'SoftwareSourceCode',
  },
  {
    subject: 'Jeremy Revaldo Latuperisa',
    predicate: 'schema:created',
    object: 'Face Recognition Attendance System',
    subjectType: 'Person',
    objectType: 'SoftwareSourceCode',
  },
  {
    subject: 'Jeremy Revaldo Latuperisa',
    predicate: 'schema:memberOf',
    object: 'HIMINFO UHO',
    subjectType: 'Person',
    objectType: 'Organization',
  },
  {
    subject: 'Universitas Halu Oleo',
    predicate: 'rdf:type',
    object: 'schema:CollegeOrUniversity',
    subjectType: 'CollegeOrUniversity',
    objectType: 'Class',
  },
  {
    subject: 'Smart Maintenance Router',
    predicate: 'schema:programmingLanguage',
    object: 'Python',
    subjectType: 'SoftwareSourceCode',
    objectType: 'DefinedTerm',
  },
  {
    subject: 'Face Recognition Attendance System',
    predicate: 'schema:programmingLanguage',
    object: 'Python',
    subjectType: 'SoftwareSourceCode',
    objectType: 'DefinedTerm',
  },
];

// ===== Schema.org Entity Definitions =====
export const schemaEntities: SchemaEntity[] = [
  {
    type: 'Person',
    description: 'Merepresentasikan profil Jeremy Revaldo Latuperisa sebagai individu dengan atribut profesional.',
    properties: {
      name: 'Jeremy Revaldo Latuperisa',
      jobTitle: 'Mahasiswa Ilmu Komputer',
      email: 'jeremyrevaldo0000@gmail.com',
      url: 'https://jeremylatuperisa.github.io',
      sameAs: 'GitHub, LinkedIn',
      knowsAbout: 'Pengembangan Web, Pembelajaran Mesin, Komputasi Awan',
      hasCredential: 'Sarjana Ilmu Komputer (S.Kom.)',
      hasOccupation: 'Magang Pengembang Web, Pengembang Web Freelance',
    },
  },
  {
    type: 'CollegeOrUniversity',
    description: 'Merepresentasikan institusi pendidikan tinggi tempat Jeremy menempuh studinya.',
    properties: {
      name: 'Universitas Halu Oleo',
      address: 'Kendari, Sulawesi Tenggara, Indonesia',
      url: 'https://uho.ac.id',
    },
  },
  {
    type: 'Organization',
    description: 'Merepresentasikan organisasi yang pernah atau sedang diikuti oleh Jeremy.',
    properties: {
      name: 'Diskominfo Kota Kendari',
      type: 'GovernmentOrganization',
      description: 'Dinas Komunikasi dan Informatika Kota Kendari',
    },
  },
  {
    type: 'Occupation',
    description: 'Merepresentasikan pengalaman kerja atau profesi Jeremy.',
    properties: {
      name: 'Magang Pengembang Web',
      occupationLocation: 'Kendari, Indonesia',
      skills: 'PHP, Laravel, MySQL, JavaScript',
    },
  },
  {
    type: 'SoftwareSourceCode',
    description: 'Merepresentasikan proyek perangkat lunak yang dikembangkan oleh Jeremy.',
    properties: {
      name: 'Smart Maintenance Router',
      programmingLanguage: 'Python',
      codeRepository: 'URL Repositori GitHub',
      author: 'Jeremy Revaldo Latuperisa',
    },
  },
  {
    type: 'DefinedTerm',
    description: 'Merepresentasikan istilah keahlian teknis secara spesifik.',
    properties: {
      name: 'Python, JavaScript, React, dll.',
      termCode: 'Kode identifikasi keahlian',
      inDefinedTermSet: 'Keahlian Teknis',
    },
  },
  {
    type: 'EducationalOccupationalCredential',
    description: 'Merepresentasikan kualifikasi atau gelar akademik yang dimiliki.',
    properties: {
      credentialCategory: 'Gelar Sarjana',
      educationalLevel: 'Sarjana (S1)',
      competencyRequired: 'Ilmu Komputer',
      recognizedBy: 'Universitas Halu Oleo',
    },
  },
  {
    type: 'Event',
    description: 'Merepresentasikan kegiatan atau kompetisi teknologi yang diikuti oleh Jeremy.',
    properties: {
      name: 'Campus Hackathon 2024',
      eventAttendanceMode: 'OfflineEventAttendanceMode',
      organizer: 'Universitas Halu Oleo',
    },
  },
];

// ===== Semantic Web Concepts =====
export const semanticConcepts = [
  {
    title: 'Apa itu Web Semantik?',
    description:
      'Web Semantik adalah ekstensi dari World Wide Web yang memungkinkan mesin untuk memahami dan menafsirkan arti (semantik) dari informasi di halaman web. Ini menggunakan format standar untuk menciptakan jaringan data yang dapat diproses langsung oleh mesin.',
    icon: 'globe',
  },
  {
    title: 'Mengapa Data Terstruktur?',
    description:
      'Data terstruktur membantu mesin pencari memahami konten halaman web secara tepat. Dengan menambahkan markup semantik, kita memberikan petunjuk eksplisit tentang arti konten, memungkinkan hasil pencarian kaya (rich results), panel pengetahuan (knowledge panels), dan keterbacaan yang jauh lebih baik.',
    icon: 'data',
  },
  {
    title: 'Cara Kerja Schema.org',
    description:
      'Schema.org menyediakan kosakata (vocabulary) bersama untuk markup data terstruktur. Schema.org mendefinisikan tipe (seperti Person, Organization) dan properti (seperti name, jobTitle) yang dipahami oleh berbagai mesin pencari utama. Data ini disematkan menggunakan format JSON-LD.',
    icon: 'schema',
  },
  {
    title: 'Pemahaman Mesin Pencari',
    description:
      'Ketika mesin pencari merayapi halaman dengan data terstruktur, mereka dapat membuat cuplikan kaya (rich snippets), kartu informasi, dan hasil pencarian interaktif. Ini meningkatkan visibilitas, rasio klik-tayang (CTR), dan kinerja SEO secara keseluruhan.',
    icon: 'search',
  },
];

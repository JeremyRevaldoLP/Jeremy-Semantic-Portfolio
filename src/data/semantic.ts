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
    object: 'Bachelor of Computer Science',
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
    object: 'Machine Learning',
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
    object: 'Web Development Intern',
    subjectType: 'Person',
    objectType: 'Occupation',
  },
  {
    subject: 'Jeremy Revaldo Latuperisa',
    predicate: 'schema:hasOccupation',
    object: 'Freelance Web Developer',
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
    object: 'GDSC UHO',
    subjectType: 'Person',
    objectType: 'Organization',
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
    description: 'Represents Jeremy Revaldo Latuperisa as a person with professional attributes.',
    properties: {
      name: 'Jeremy Revaldo Latuperisa',
      jobTitle: 'Computer Science Student',
      email: 'jeremylatuperisa@gmail.com',
      url: 'https://jeremylatuperisa.github.io',
      sameAs: 'GitHub, LinkedIn profiles',
      knowsAbout: 'Web Development, Machine Learning, Cloud Computing',
      hasCredential: 'Bachelor of Computer Science',
      hasOccupation: 'Web Development Intern, Freelance Web Developer',
    },
  },
  {
    type: 'CollegeOrUniversity',
    description: 'Represents the educational institution where Jeremy studies.',
    properties: {
      name: 'Universitas Halu Oleo',
      address: 'Kendari, Southeast Sulawesi, Indonesia',
      url: 'https://uho.ac.id',
    },
  },
  {
    type: 'Organization',
    description: 'Represents organizations Jeremy has been affiliated with.',
    properties: {
      name: 'Diskominfo Kota Kendari',
      type: 'GovernmentOrganization',
      description: 'Government IT agency in Kendari',
    },
  },
  {
    type: 'Occupation',
    description: 'Represents Jeremy\'s work experience roles.',
    properties: {
      name: 'Web Development Intern',
      occupationLocation: 'Kendari, Indonesia',
      skills: 'PHP, Laravel, MySQL, JavaScript',
    },
  },
  {
    type: 'SoftwareSourceCode',
    description: 'Represents software projects created by Jeremy.',
    properties: {
      name: 'Smart Maintenance Router',
      programmingLanguage: 'Python',
      codeRepository: 'GitHub URL',
      author: 'Jeremy Revaldo Latuperisa',
    },
  },
  {
    type: 'DefinedTerm',
    description: 'Represents individual technical skills.',
    properties: {
      name: 'Python, JavaScript, React, etc.',
      termCode: 'Skill identifier',
      inDefinedTermSet: 'Technical Skills',
    },
  },
  {
    type: 'EducationalOccupationalCredential',
    description: 'Represents academic credentials and qualifications.',
    properties: {
      credentialCategory: 'Bachelor\'s Degree',
      educationalLevel: 'Undergraduate',
      competencyRequired: 'Computer Science',
      recognizedBy: 'Universitas Halu Oleo',
    },
  },
  {
    type: 'Event',
    description: 'Represents technical events and activities.',
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
    title: 'What is the Semantic Web?',
    description:
      'The Semantic Web is an extension of the World Wide Web that enables machines to understand and interpret the meaning of information on web pages. It uses standardized formats and protocols to create a web of data that can be processed by machines.',
    icon: 'globe',
  },
  {
    title: 'Why Structured Data?',
    description:
      'Structured data helps search engines understand the content of web pages. By adding semantic markup, we provide explicit clues about the meaning of content, enabling rich search results, knowledge panels, and better discoverability.',
    icon: 'data',
  },
  {
    title: 'How Schema.org Works',
    description:
      'Schema.org provides a shared vocabulary for structured data markup. It defines types (like Person, Organization) and properties (like name, jobTitle) that search engines understand. Data is typically embedded using JSON-LD format in HTML pages.',
    icon: 'schema',
  },
  {
    title: 'Search Engine Understanding',
    description:
      'When search engines crawl a page with structured data, they can create rich snippets, knowledge cards, and enhanced search results. This improves visibility, click-through rates, and overall SEO performance.',
    icon: 'search',
  },
];

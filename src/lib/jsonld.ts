import { personalInfo, education, experiences, projects, organizations, skillCategories } from '../data/profile';

/**
 * Generate the complete JSON-LD structured data for the website.
 * Includes Person, CollegeOrUniversity, Organization, Occupation,
 * SoftwareSourceCode, DefinedTerm, EducationalOccupationalCredential, and Event.
 */
export function generateJsonLd(): object {
  const allSkills = skillCategories.flatMap(cat =>
    cat.skills.map(skill => ({
      '@type': 'DefinedTerm',
      name: skill.name,
      termCode: skill.name.toLowerCase().replace(/\s+/g, '-'),
      inDefinedTermSet: {
        '@type': 'DefinedTermSet',
        name: cat.name,
      },
    }))
  );

  const occupations = experiences.map(exp => ({
    '@type': 'Occupation',
    name: exp.position,
    occupationLocation: {
      '@type': 'City',
      name: 'Kendari',
    },
    description: exp.responsibilities.join('. '),
    skills: exp.technologies.join(', '),
    estimatedSalary: undefined,
  }));

  const softwareProjects = projects.map(project => ({
    '@type': 'SoftwareSourceCode',
    name: project.name,
    description: project.description,
    programmingLanguage: project.technologies,
    codeRepository: project.githubUrl,
    author: {
      '@type': 'Person',
      name: personalInfo.fullName,
    },
    creativeWorkStatus: project.status === 'completed' ? 'Published' : 'InProgress',
  }));

  const orgEntities = organizations.map(org => ({
    '@type': org.type === 'event' ? 'Event' : 'Organization',
    name: org.name,
    description: org.description,
    ...(org.type === 'event'
      ? { eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode' }
      : {}),
  }));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // Person entity
      {
        '@type': 'Person',
        '@id': personalInfo.website,
        name: personalInfo.fullName,
        givenName: 'Jeremy Revaldo',
        familyName: 'Latuperisa',
        jobTitle: personalInfo.title,
        description: personalInfo.summary,
        email: `mailto:${personalInfo.email}`,
        url: personalInfo.website,
        sameAs: [personalInfo.github, personalInfo.linkedin],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Kendari',
          addressRegion: 'Sulawesi Tenggara',
          addressCountry: 'ID',
        },
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: education.institution,
          url: 'https://uho.ac.id',
        },
        knowsAbout: [
          'Pengembangan Web',
          'Pembelajaran Mesin',
          'Komputasi Awan',
          'Rekayasa Perangkat Lunak',
          'Web Semantik',
        ],
        hasCredential: {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: education.degree,
          educationalLevel: 'Sarjana (S1)',
          competencyRequired: education.field,
          recognizedBy: {
            '@type': 'CollegeOrUniversity',
            name: education.institution,
          },
        },
        hasOccupation: occupations,
        knowsLanguage: ['Indonesia', 'Inggris'],
      },
      // College entity
      {
        '@type': 'CollegeOrUniversity',
        name: education.institution,
        url: 'https://uho.ac.id',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Kendari',
          addressRegion: 'Sulawesi Tenggara',
          addressCountry: 'ID',
        },
      },
      // Work organization
      {
        '@type': 'GovernmentOrganization',
        name: 'Diskominfo Kota Kendari',
        description: 'Dinas Komunikasi dan Informatika Kota Kendari',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Kendari',
          addressCountry: 'ID',
        },
      },
      // Skills as DefinedTerms
      ...allSkills,
      // Projects
      ...softwareProjects,
      // Organizations & Events
      ...orgEntities,
      // Website
      {
        '@type': 'WebSite',
        name: `${personalInfo.fullName} — Portofolio`,
        url: personalInfo.website,
        description: personalInfo.summary,
        author: {
          '@type': 'Person',
          name: personalInfo.fullName,
        },
      },
    ],
  };

  return jsonLd;
}

/**
 * Generate a JSON-LD string for embedding in a <script> tag.
 */
export function getJsonLdScript(): string {
  return JSON.stringify(generateJsonLd(), null, 2);
}

/**
 * Get individual JSON-LD snippets for the Structured Data page display.
 */
export function getJsonLdSnippets(): { label: string; code: string }[] {
  return [
    {
      label: 'Person',
      code: JSON.stringify(
        {
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: personalInfo.fullName,
          jobTitle: personalInfo.title,
          description: personalInfo.summary,
          email: `mailto:${personalInfo.email}`,
          url: personalInfo.website,
          sameAs: [personalInfo.github, personalInfo.linkedin],
          knowsAbout: ['Pengembangan Web', 'Pembelajaran Mesin', 'Komputasi Awan'],
          alumniOf: {
            '@type': 'CollegeOrUniversity',
            name: education.institution,
          },
        },
        null,
        2
      ),
    },
    {
      label: 'EducationalOccupationalCredential',
      code: JSON.stringify(
        {
          '@context': 'https://schema.org',
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: education.degree,
          educationalLevel: 'Sarjana (S1)',
          competencyRequired: education.field,
          recognizedBy: {
            '@type': 'CollegeOrUniversity',
            name: education.institution,
          },
        },
        null,
        2
      ),
    },
    {
      label: 'Organization',
      code: JSON.stringify(
        {
          '@context': 'https://schema.org',
          '@type': 'GovernmentOrganization',
          name: 'Diskominfo Kota Kendari',
          description: 'Dinas Komunikasi dan Informatika Kota Kendari',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Kendari',
            addressCountry: 'ID',
          },
        },
        null,
        2
      ),
    },
    {
      label: 'SoftwareSourceCode',
      code: JSON.stringify(
        {
          '@context': 'https://schema.org',
          '@type': 'SoftwareSourceCode',
          name: 'Smart Maintenance Router',
          description: projects[0].description,
          programmingLanguage: projects[0].technologies,
          codeRepository: projects[0].githubUrl,
          author: {
            '@type': 'Person',
            name: personalInfo.fullName,
          },
        },
        null,
        2
      ),
    },
    {
      label: 'DefinedTerm (Skill)',
      code: JSON.stringify(
        {
          '@context': 'https://schema.org',
          '@type': 'DefinedTerm',
          name: 'Python',
          termCode: 'python',
          inDefinedTermSet: {
            '@type': 'DefinedTermSet',
            name: 'Bahasa Pemrograman',
          },
        },
        null,
        2
      ),
    },
    {
      label: 'Organization',
      code: JSON.stringify(
        {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Himpunan Mahasiswa Program Studi Ilmu Komputer',
          member: {
            '@type': 'Person',
            name: 'Jeremy Revaldo Latuperisa',
            roleName: 'Anggota Aktif & Pengembang Web',
          },
        },
        null,
        2
      ),
    },
  ];
}

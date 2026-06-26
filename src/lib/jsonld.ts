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
      '@type': 'Place',
      name: personalInfo.location,
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
          addressRegion: 'Southeast Sulawesi',
          addressCountry: 'ID',
        },
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: education.institution,
          url: 'https://uho.ac.id',
        },
        knowsAbout: [
          'Web Development',
          'Machine Learning',
          'Cloud Computing',
          'Software Engineering',
          'Semantic Web',
        ],
        hasCredential: {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: education.degree,
          educationalLevel: 'Undergraduate',
          competencyRequired: education.field,
          recognizedBy: {
            '@type': 'CollegeOrUniversity',
            name: education.institution,
          },
        },
        hasOccupation: occupations,
        knowsLanguage: ['Indonesian', 'English'],
      },
      // College entity
      {
        '@type': 'CollegeOrUniversity',
        name: education.institution,
        url: 'https://uho.ac.id',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Kendari',
          addressRegion: 'Southeast Sulawesi',
          addressCountry: 'ID',
        },
      },
      // Work organization
      {
        '@type': 'GovernmentOrganization',
        name: 'Diskominfo Kota Kendari',
        description: 'Government agency for communications and informatics in Kendari',
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
        name: `${personalInfo.fullName} — Portfolio`,
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
          knowsAbout: ['Web Development', 'Machine Learning', 'Cloud Computing'],
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
          educationalLevel: 'Undergraduate',
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
          description: 'Government agency for communications and informatics',
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
            name: 'Programming Languages',
          },
        },
        null,
        2
      ),
    },
    {
      label: 'Event',
      code: JSON.stringify(
        {
          '@context': 'https://schema.org',
          '@type': 'Event',
          name: 'Campus Hackathon 2024',
          eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
          organizer: {
            '@type': 'CollegeOrUniversity',
            name: education.institution,
          },
        },
        null,
        2
      ),
    },
  ];
}

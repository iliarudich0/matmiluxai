export type ProjectSlug = 'rdix' | 'tikdrive';

export type Project = {
  slug: ProjectSlug;
  name: string;
  label: string;
  tagline: { pl: string; en: string; ru?: string };
  shortDescription: { pl: string; en: string; ru?: string };
  description: { pl: string; en: string; ru?: string };
  features: { pl: string[]; en: string[]; ru?: string[] };
  cta: { pl: string; en: string; ru?: string };
  ctaNote?: { pl: string; en: string; ru?: string };
  status: string;
  accent: 'teal' | 'blue';
  hasPrivacy?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'rdix',
    name: 'Rdix',
    label: 'First launch',
    tagline: {
      pl: 'Lokalny marketplace dla uslug, zadan i codziennej pomocy.',
      en: 'A local marketplace for services, tasks, trusted contractors and everyday help.',
      ru: 'Local marketplace for services, tasks, trusted contractors and everyday help.'
    },
    shortDescription: {
      pl: 'Rdix laczy klientow i wykonawcow w jednym prostym marketplace.',
      en: 'Rdix connects clients and workers in one simple marketplace.',
      ru: 'Rdix connects clients and workers in one simple marketplace.'
    },
    description: {
      pl: 'Rdix is planned as the first public product of Milux Tech: a local marketplace for services, tasks, trusted contractors and everyday help. The product is focused on a simple flow for requests, chat, booking and reviews.',
      en: 'Rdix is planned as the first public product of Milux Tech: a local marketplace for services, tasks, trusted contractors and everyday help. The product is focused on a simple flow for requests, chat, booking and reviews.',
      ru: 'Rdix is planned as the first public product of Milux Tech: a local marketplace for services, tasks, trusted contractors and everyday help. The product is focused on a simple flow for requests, chat, booking and reviews.'
    },
    features: {
      pl: [
        'Local services and tasks',
        'Clients and workers in one marketplace',
        'Simple request, chat, booking and review flow'
      ],
      en: [
        'Local services and tasks',
        'Clients and workers in one marketplace',
        'Simple request, chat, booking and review flow'
      ],
      ru: [
        'Local services and tasks',
        'Clients and workers in one marketplace',
        'Simple request, chat, booking and review flow'
      ]
    },
    cta: {
      pl: 'Contact Milux Tech',
      en: 'Contact Milux Tech',
      ru: 'Contact Milux Tech'
    },
    ctaNote: {
      pl: 'In development, planned as the first public product.',
      en: 'In development, planned as the first public product.',
      ru: 'In development, planned as the first public product.'
    },
    status: 'In development, planned as the first public product.',
    accent: 'teal',
    hasPrivacy: false
  },
  {
    slug: 'tikdrive',
    name: 'TikDrive',
    label: 'Next product',
    tagline: {
      pl: 'Marketplace dla lekcji jazdy, instruktorow i szkol jazdy.',
      en: 'A marketplace for driving lessons, instructors and driving schools.',
      ru: 'A marketplace for driving lessons, instructors and driving schools.'
    },
    shortDescription: {
      pl: 'TikDrive helps learners find instructors, book lessons and track learning progress.',
      en: 'TikDrive helps learners find instructors, book lessons and track learning progress.',
      ru: 'TikDrive helps learners find instructors, book lessons and track learning progress.'
    },
    description: {
      pl: 'TikDrive is planned as the second Milux Tech product: a marketplace for driving lessons, instructors and driving schools. The roadmap includes instructor discovery, lesson booking, progress tracking and a future ProgoDrive professional panel for instructors and schools.',
      en: 'TikDrive is planned as the second Milux Tech product: a marketplace for driving lessons, instructors and driving schools. The roadmap includes instructor discovery, lesson booking, progress tracking and a future ProgoDrive professional panel for instructors and schools.',
      ru: 'TikDrive is planned as the second Milux Tech product: a marketplace for driving lessons, instructors and driving schools. The roadmap includes instructor discovery, lesson booking, progress tracking and a future ProgoDrive professional panel for instructors and schools.'
    },
    features: {
      pl: [
        'Find instructors',
        'Book driving lessons',
        'Track learning progress',
        'Future ProgoDrive panel for instructors and schools'
      ],
      en: [
        'Find instructors',
        'Book driving lessons',
        'Track learning progress',
        'Future ProgoDrive panel for instructors and schools'
      ],
      ru: [
        'Find instructors',
        'Book driving lessons',
        'Track learning progress',
        'Future ProgoDrive panel for instructors and schools'
      ]
    },
    cta: {
      pl: 'Contact Milux Tech',
      en: 'Contact Milux Tech',
      ru: 'Contact Milux Tech'
    },
    ctaNote: {
      pl: 'In planning / prototype.',
      en: 'In planning / prototype.',
      ru: 'In planning / prototype.'
    },
    status: 'In planning / prototype.',
    accent: 'blue',
    hasPrivacy: false
  }
];

export const projectBySlug = Object.fromEntries(projects.map((p) => [p.slug, p])) as Record<ProjectSlug, Project>;

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
      pl: 'Lokalny marketplace dla usług, zadań i codziennej pomocy.',
      en: 'A local marketplace for services, tasks, trusted contractors and everyday help.'
    },
    shortDescription: {
      pl: 'Rdix łączy klientów i wykonawców w jednym prostym marketplace.',
      en: 'Rdix connects clients and workers in one simple marketplace.'
    },
    description: {
      pl: 'Rdix jest planowany jako pierwszy publiczny produkt Milux Tech: lokalny marketplace dla usług, zadań, zaufanych wykonawców i codziennej pomocy. Produkt koncentruje się na prostym przepływie zgłoszeń, czatu, rezerwacji i opinii.',
      en: 'Rdix is planned as the first public product of Milux Tech: a local marketplace for services, tasks, trusted contractors and everyday help. The product is focused on a simple flow for requests, chat, booking and reviews.'
    },
    features: {
      pl: [
        'Lokalne usługi i zadania',
        'Klienci i wykonawcy w jednym marketplace',
        'Prosty przepływ zgłoszenia, czatu, rezerwacji i opinii'
      ],
      en: [
        'Local services and tasks',
        'Clients and workers in one marketplace',
        'Simple request, chat, booking and review flow'
      ]
    },
    cta: {
      pl: 'Skontaktuj się z Milux Tech',
      en: 'Contact Milux Tech'
    },
    ctaNote: {
      pl: 'W trakcie rozwoju, planowany jako pierwszy publiczny produkt.',
      en: 'In development, planned as the first public product.'
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
      pl: 'Marketplace dla lekcji jazdy, instruktorów i szkół jazdy.',
      en: 'A marketplace for driving lessons, instructors and driving schools.'
    },
    shortDescription: {
      pl: 'TikDrive pomaga kursantom znaleźć instruktorów, rezerwować lekcje i śledzić postępy nauki.',
      en: 'TikDrive helps learners find instructors, book lessons and track learning progress.'
    },
    description: {
      pl: 'TikDrive jest planowany jako drugi produkt Milux Tech: marketplace dla lekcji jazdy, instruktorów i szkół jazdy. Roadmapa obejmuje wyszukiwanie instruktorów, rezerwację lekcji, śledzenie postępów oraz przyszły profesjonalny panel ProgoDrive dla instruktorów i szkół.',
      en: 'TikDrive is planned as the second Milux Tech product: a marketplace for driving lessons, instructors and driving schools. The roadmap includes instructor discovery, lesson booking, progress tracking and a future ProgoDrive professional panel for instructors and schools.'
    },
    features: {
      pl: [
        'Wyszukiwanie instruktorów',
        'Rezerwacja lekcji jazdy',
        'Śledzenie postępów nauki',
        'Przyszły panel ProgoDrive dla instruktorów i szkół'
      ],
      en: [
        'Find instructors',
        'Book driving lessons',
        'Track learning progress',
        'Future ProgoDrive panel for instructors and schools'
      ]
    },
    cta: {
      pl: 'Skontaktuj się z Milux Tech',
      en: 'Contact Milux Tech'
    },
    ctaNote: {
      pl: 'W planowaniu / prototypie.',
      en: 'In planning / prototype.'
    },
    status: 'In planning / prototype.',
    accent: 'blue',
    hasPrivacy: false
  }
];

export const projectBySlug = Object.fromEntries(projects.map((p) => [p.slug, p])) as Record<ProjectSlug, Project>;

import type { Language } from './i18n';

export const BRAND = {
  name: 'MiLux AI Labs',
  tagline: {
    pl: 'Przenosimy edukację w przyszłość dzięki sztucznej inteligencji.',
    en: 'Bringing education into the future with artificial intelligence.'
  },
  ctaPrimary: { pl: 'Poznaj nasze projekty', en: 'Explore our projects' },
  ctaSecondary: { pl: 'Skontaktuj się', en: 'Contact us' }
} as const;

export const WHY = {
  title: { pl: 'Dlaczego MiLux', en: 'Why MiLux' },
  items: [
    {
      key: 'ai',
      title: { pl: 'Najnowocześniejsza technologia AI', en: 'Cutting-edge AI Technology' },
      text: {
        pl: 'Wykorzystujemy AI najnowszej generacji, aby dopasować edukację do potrzeb każdego użytkownika.',
        en: 'We use next-generation AI to tailor learning to each user.'
      }
    },
    {
      key: 'learn',
      title: { pl: 'Innowacyjne podejście do nauki', en: 'Innovative Learning Approach' },
      text: {
        pl: 'Łączymy naukę z grywalizacją i interaktywnymi doświadczeniami, aby zwiększać zaangażowanie.',
        en: 'We blend education with gamification and interactive experiences.'
      }
    },
    {
      key: 'team',
      title: { pl: 'Doświadczenie i pasja', en: 'Expertise and Passion' },
      text: {
        pl: 'Tworzymy rozwiązania na styku AI i edukacji, oparte o praktykę i research.',
        en: 'We build at the intersection of AI and education, grounded in practice and research.'
      }
    },
    {
      key: 'privacy',
      title: { pl: 'Bezpieczeństwo i prywatność', en: 'Safety and Privacy' },
      text: {
        pl: 'Stawiamy na transparentność, brak reklam i ochronę danych użytkowników.',
        en: 'We focus on transparency, no ads, and strong user-data protection.'
      }
    }
  ]
} as const;

export const ROADMAP = {
  title: { pl: 'Roadmap', en: 'Roadmap' },
  subtitle: {
    pl: 'Plan rozwoju na 12–18 miesięcy — aktualizowany wraz z postępem prac.',
    en: 'A 12–18 month plan — updated as we ship.'
  },
  items: [
    {
      date: 'Q1 2026',
      pl: 'Premiera beta aplikacji Tik-Mathik AI (wąska grupa testerów).',
      en: 'Tik-Mathik AI beta release (limited tester cohort).'
    },
    {
      date: 'Q2 2026',
      pl: 'Oficjalny launch TikDrive na Androida i iOS (Google Play i App Store).',
      en: 'TikDrive official launch on Android and iOS (Google Play and App Store).'
    },
    {
      date: 'Q3 2026',
      pl: 'Prezentacja prototypu TikEveryLang AI i start testów alpha.',
      en: 'TikEveryLang AI prototype showcase and closed alpha testing.'
    },
    {
      date: 'Q4 2026',
      pl: 'Integracja zaawansowanego AI-asystenta we wszystkich aplikacjach; przygotowania do globalnej ekspansji.',
      en: 'Advanced AI assistant integration across apps; global expansion preparations.'
    },
    {
      date: '2027',
      pl: 'Planowane wydanie TikEveryLang AI (1.0) oraz ciągłe usprawnienia Tik-Mathik AI i TikDrive.',
      en: 'Planned TikEveryLang AI 1.0 release and continuous improvements to Tik-Mathik AI and TikDrive.'
    }
  ]
} as const;

export const FAQ = {
  title: { pl: 'FAQ', en: 'FAQ' },
  items: [
    {
      q: {
        pl: 'Czym jest MiLux AI Labs i jakie projekty rozwija?',
        en: 'What is MiLux AI Labs and what projects are you developing?'
      },
      a: {
        pl: 'MiLux AI Labs to innowacyjne laboratorium technologiczne skupione na wykorzystaniu sztucznej inteligencji w edukacji. Rozwijamy trzy projekty: Tik-Mathik AI (matematyka), TikDrive (teoria jazdy) i TikEveryLang AI (języki). Naszym celem jest tworzenie aplikacji, które uczą skuteczniej i ciekawiej dzięki nowoczesnym technologiom.',
        en: 'MiLux AI Labs is an innovative technology lab focused on applying AI to education. We are building three projects: Tik-Mathik AI (mathematics), TikDrive (driving theory), and TikEveryLang AI (languages). Our goal is to make learning more effective and engaging through modern technology.'
      }
    },
    {
      q: {
        pl: 'Kiedy i gdzie będą dostępne wasze aplikacje?',
        en: 'When and where will your apps be available?'
      },
      a: {
        pl: 'Planujemy udostępnić aplikacje na Androida i iOS. Tik-Mathik AI i TikDrive są w fazie beta i wkrótce pojawią się w Google Play i App Store. TikEveryLang AI jest w fazie konceptu; więcej informacji opublikujemy po dopracowaniu pierwszych dwóch projektów.',
        en: 'We plan to release on Android and iOS. Tik-Mathik AI and TikDrive are in beta and will be available on Google Play and the App Store soon. TikEveryLang AI is in concept; we’ll share more after refining the first two projects.'
      }
    },
    {
      q: {
        pl: 'Czy wasze aplikacje będą darmowe? Jak zamierzacie na nich zarabiać?',
        en: 'Will your apps be free? How do you plan to monetize them?'
      },
      a: {
        pl: 'Aplikacje będą darmowe do pobrania. Planujemy model freemium: podstawowe funkcje pozostaną bezpłatne, a opcje premium mogą być dostępne w formie jednorazowych rozszerzeń lub subskrypcji. Nie planujemy reklam; płatności będą obsługiwane przez sklepy.',
        en: 'The apps will be free to download. We plan a freemium model: core features remain free, with premium options as one-time add-ons or subscriptions. We do not plan ads; payments will be handled through the app stores.'
      }
    },
    {
      q: {
        pl: 'W jaki sposób wasze aplikacje wykorzystują sztuczną inteligencję?',
        en: 'How do your apps use artificial intelligence?'
      },
      a: {
        pl: 'AI jest sercem naszych produktów: w Tik-Mathik AI generuje zadania i podpowiada krok po kroku, w TikDrive analizuje wyniki i rekomenduje obszary do poprawy, a TikEveryLang AI będzie symulować rozmowy i korygować wymowę. Dzięki temu nauka jest bardziej dopasowana i angażująca.',
        en: 'AI is at the core: Tik-Mathik AI generates practice and guides step-by-step, TikDrive analyzes results and recommends improvements, and TikEveryLang AI will simulate conversations and correct pronunciation. This makes learning more personalized and engaging.'
      }
    },
    {
      q: {
        pl: 'Czy aplikacje MiLux są bezpieczne dla dzieci? Jak chronicie prywatność użytkowników?',
        en: 'Are MiLux apps safe for children? How do you protect user privacy?'
      },
      a: {
        pl: 'Prywatność i bezpieczeństwo są priorytetem. Nie wymagamy kont ani danych wrażliwych; możemy zbierać wyłącznie anonimowe dane techniczne (np. crash logi) do poprawy jakości. Aplikacje nie zawierają reklam. Rekomendujemy wiek 13+ (ze względu na regulacje) — szczegóły w Polityce prywatności.',
        en: 'Privacy and safety are top priorities. We do not require accounts or sensitive data; we may collect anonymous technical data (e.g., crash logs) to improve quality. No ads. We recommend age 13+ (regulatory reasons) — details in the Privacy Policy.'
      }
    }
  ]
} as const;

export const CONTACT = {
  title: { pl: 'Kontakt', en: 'Contact' },
  text: {
    pl: 'Masz pytania lub sugestie? Skontaktuj się z nami pod adresem',
    en: 'Have questions or feedback? Reach out at'
  },
  email: 'contact@miluxlabs.com'
} as const;

export function pick<T extends { pl: string; en: string }>(lang: Language, obj: T): string {
  return lang === 'pl' ? obj.pl : obj.en;
}

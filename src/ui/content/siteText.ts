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
        pl: 'Wykorzystujemy AI najnowszej generacji, aby dostarczać realną wartość w edukacji, zdrowiu, bezpieczeństwie i produktywności.',
        en: 'We use next-generation AI to deliver real value across education, health, safety, and productivity.'
      }
    },
    {
      key: 'learn',
      title: { pl: 'Innowacyjne podejście do nauki', en: 'Innovative Learning Approach' },
      text: {
        pl: 'Łączymy naukę z grywalizacją i interaktywnymi doświadczeniami, aby zwiększać zaangażowanie i skuteczność.',
        en: 'We blend learning with gamification and interactive experiences to boost engagement and results.'
      }
    },
    {
      key: 'team',
      title: { pl: 'Doświadczenie i pasja', en: 'Expertise and Passion' },
      text: {
        pl: 'Tworzymy rozwiązania na styku AI i realnych potrzeb użytkowników, oparte o praktykę i research.',
        en: 'We build at the intersection of AI and real user needs, grounded in practice and research.'
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
    pl: 'Plan rozwoju na 12–18 miesięcy — naszym celem jest wypuścić wszystkie aplikacje najpóźniej do końca 2026.',
    en: 'A 12–18 month plan — our goal is to launch all apps by the end of 2026.'
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
      pl: 'Ciągłe usprawnienia, nowe funkcje i rozwój ekosystemu MiLux AI Labs.',
      en: 'Continuous improvements, new features, and ecosystem growth for MiLux AI Labs.'
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
        pl: 'MiLux AI Labs to laboratorium technologiczne tworzące praktyczne aplikacje AI. Rozwijamy m.in. Tik-Mathik AI, TikDrive, TikEveryLang AI, TikLawyer AI, SafeZoneX, CarFix AI, HealthSymptom AI, ExplainLikeAI, InterviewCoach AI, MemoryBoost AI, ContractScan AI, StudyPlanner AI, TikPlant AI, TikFinance AI, TikSpaceZ AI i TikDietX AI. Naszym celem jest tworzenie aplikacji, które realnie pomagają ludziom w nauce, pracy i codziennym życiu.',
        en: 'MiLux AI Labs is a technology lab building practical AI apps. We develop Tik-Mathik AI, TikDrive, TikEveryLang AI, TikLawyer AI, SafeZoneX, CarFix AI, HealthSymptom AI, ExplainLikeAI, InterviewCoach AI, MemoryBoost AI, ContractScan AI, StudyPlanner AI, TikPlant AI, TikFinance AI, TikSpaceZ AI, and TikDietX AI. Our goal is to create apps that genuinely help people in learning, work, and everyday life.'
      }
    },
    {
      q: {
        pl: 'Kiedy i gdzie będą dostępne wasze aplikacje?',
        en: 'When and where will your apps be available?'
      },
      a: {
        pl: 'Planujemy udostępnić aplikacje na Androida i iOS. Wypuszczamy kolejne projekty etapami, a naszym celem jest udostępnienie całego portfolio jak najszybciej, najpóźniej do końca 2026.',
        en: 'We plan to release on Android and iOS. We ship projects in stages, and our goal is to make the full portfolio available as soon as possible, no later than the end of 2026.'
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
        pl: 'AI jest sercem naszych produktów: personalizuje naukę (Tik-Mathik AI, TikEveryLang AI), analizuje dane i podpowiada decyzje (TikDrive, TikFinance AI), tłumaczy złożone treści (ContractScan AI, ExplainLikeAI) oraz wspiera bezpieczeństwo (SafeZoneX).',
        en: 'AI is the core of our products: it personalizes learning (Tik-Mathik AI, TikEveryLang AI), analyzes data and recommends decisions (TikDrive, TikFinance AI), explains complex content (ContractScan AI, ExplainLikeAI), and supports safety (SafeZoneX).'
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

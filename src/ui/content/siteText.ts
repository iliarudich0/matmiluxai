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
        pl: 'Budujemy rozwiązania oparte o AI nowej generacji — szybkie, precyzyjne i dopasowane do realnych potrzeb użytkowników.',
        en: 'We build next‑gen AI solutions that are fast, precise, and aligned with real user needs.'
      }
    },
    {
      key: 'learn',
      title: { pl: 'Innowacyjne podejście do nauki', en: 'Innovative Learning Approach' },
      text: {
        pl: 'Łączymy wiedzę z praktyką: interaktywne scenariusze, mikro‑lekcje i testy, które naprawdę przygotowują.',
        en: 'We blend theory with practice: interactive scenarios, micro‑lessons, and tests that truly prepare.'
      }
    },
    {
      key: 'team',
      title: { pl: 'Doświadczenie i pasja', en: 'Expertise and Passion' },
      text: {
        pl: 'Projektujemy z myślą o człowieku — łączymy research, UX i technologię, by aplikacje były naprawdę pomocne.',
        en: 'Human‑first design: we combine research, UX, and tech to make apps genuinely helpful.'
      }
    },
    {
      key: 'privacy',
      title: { pl: 'Bezpieczeństwo i prywatność', en: 'Safety and Privacy' },
      text: {
        pl: 'Bez reklam i z pełną transparentnością — prywatność użytkowników to dla nas fundament.',
        en: 'No ads and full transparency — user privacy is our foundation.'
      }
    }
  ]
} as const;

export const ROADMAP = {
  title: { pl: 'Roadmap', en: 'Roadmap' },
  subtitle: {
    pl: 'Plan rozwoju na 12–18 miesięcy — cel: wypuścić całe portfolio jak najszybciej, najpóźniej do końca 2026.',
    en: 'A 12–18 month plan — goal: ship the full portfolio as soon as possible, no later than end of 2026.'
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
      pl: 'Ciągłe usprawnienia, nowe funkcje i globalna ekspansja ekosystemu MiLux AI Labs.',
      en: 'Continuous improvements, new features, and global expansion of the MiLux AI Labs ecosystem.'
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
        pl: 'MiLux AI Labs tworzy praktyczne aplikacje AI dla edukacji, zdrowia, bezpieczeństwa i produktywności. Nasze projekty obejmują m.in. Tik‑Mathik AI, TikDrive, TikEveryLang AI, TikLawyer AI, SafeZoneX, CarFix AI, HealthSymptom AI, ExplainLikeAI, InterviewCoach AI, MemoryBoost AI, ContractScan AI, StudyPlanner AI, TikPlant AI, TikFinance AI, TikSpaceZ AI, TikDietX AI oraz TipExam AI. Skupiamy się na realnych efektach i użyteczności.',
        en: 'MiLux AI Labs builds practical AI apps for education, health, safety, and productivity. Our projects include Tik‑Mathik AI, TikDrive, TikEveryLang AI, TikLawyer AI, SafeZoneX, CarFix AI, HealthSymptom AI, ExplainLikeAI, InterviewCoach AI, MemoryBoost AI, ContractScan AI, StudyPlanner AI, TikPlant AI, TikFinance AI, TikSpaceZ AI, TikDietX AI, and TipExam AI. We focus on real outcomes and usability.'
      }
    },
    {
      q: {
        pl: 'Kiedy i gdzie będą dostępne wasze aplikacje?',
        en: 'When and where will your apps be available?'
      },
      a: {
        pl: 'Planujemy wydania na Androida i iOS. Projekty wypuszczamy etapami, a cały ekosystem chcemy udostępnić jak najszybciej — najpóźniej do końca 2026.',
        en: 'We plan releases on Android and iOS. Projects ship in stages, and we aim to deliver the full ecosystem as soon as possible — no later than end of 2026.'
      }
    },
    {
      q: {
        pl: 'Czy wasze aplikacje będą darmowe? Jak zamierzacie na nich zarabiać?',
        en: 'Will your apps be free? How do you plan to monetize them?'
      },
      a: {
        pl: 'Tak, aplikacje będą darmowe do pobrania. Stawiamy na model freemium: podstawowe funkcje bez opłat, a profesjonalne moduły i funkcje premium w subskrypcji lub jako rozszerzenia. Bez reklam — monetyzacja wyłącznie przez sklepy aplikacji.',
        en: 'Yes, apps will be free to download. We use a freemium model: core features free, with professional modules and premium features via subscription or add‑ons. No ads — monetization only through app stores.'
      }
    },
    {
      q: {
        pl: 'W jaki sposób wasze aplikacje wykorzystują sztuczną inteligencję?',
        en: 'How do your apps use artificial intelligence?'
      },
      a: {
        pl: 'AI odpowiada za personalizację nauki, analizę wyników, rekomendacje i tłumaczenie złożonych treści. Dzięki temu użytkownik dostaje szybsze odpowiedzi, lepsze ścieżki nauki i realne wsparcie w decyzjach.',
        en: 'AI drives personalization, performance analysis, recommendations, and plain‑language explanations. This gives users faster answers, better learning paths, and practical decision support.'
      }
    },
    {
      q: {
        pl: 'Czy aplikacje MiLux są bezpieczne dla dzieci? Jak chronicie prywatność użytkowników?',
        en: 'Are MiLux apps safe for children? How do you protect user privacy?'
      },
        pl: 'Bezpieczeństwo i prywatność traktujemy priorytetowo. Minimalizujemy dane, nie sprzedajemy informacji i nie wyświetlamy reklam. Jeśli zbieramy dane techniczne, to wyłącznie w celu poprawy jakości. Szczegóły zawsze publikujemy w politykach prywatności.',
        en: 'Safety and privacy come first. We minimize data, never sell information, and do not show ads. If we collect technical data, it’s only to improve quality. Full details are always in our privacy policies.'
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
  email: 'matmiluxai@gmail.com'
} as const;

export function pick<T extends { pl: string; en: string }>(lang: Language, obj: T): string {
  return lang === 'pl' ? obj.pl : obj.en;
}

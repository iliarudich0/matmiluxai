import type { Language } from './i18n';

export const BRAND = {
  name: 'MiLux AI Labs',
  tagline: {
    pl: 'Przenosimy edukację w przyszłość dzięki sztucznej inteligencji.',
    en: 'Bringing education into the future with artificial intelligence.',
    ru: 'Мы переносим образование в будущее с помощью искусственного интеллекта.'
  },
  ctaPrimary: { pl: 'Poznaj nasze projekty', en: 'Explore our projects', ru: 'Посмотреть проекты' },
  ctaSecondary: { pl: 'Skontaktuj się', en: 'Contact us', ru: 'Связаться с нами' }
} as const;

export const WHY = {
  title: { pl: 'Dlaczego MiLux', en: 'Why MiLux', ru: 'Почему MiLux' },
  items: [
    {
      key: 'ai',
      title: { pl: 'Najnowocześniejsza technologia AI', en: 'Cutting-edge AI Technology', ru: 'Передовые технологии ИИ' },
      text: {
        pl: 'Budujemy rozwiązania oparte o AI nowej generacji — szybkie, precyzyjne i dopasowane do realnych potrzeb użytkowników.',
        en: 'We build next‑gen AI solutions that are fast, precise, and aligned with real user needs.',
        ru: 'Мы создаём решения на базе ИИ нового поколения — быстрые, точные и соответствующие реальным потребностям пользователей.'
      }
    },
    {
      key: 'learn',
      title: { pl: 'Innowacyjne podejście do nauki', en: 'Innovative Learning Approach', ru: 'Инновационный подход к обучению' },
      text: {
        pl: 'Łączymy wiedzę z praktyką: interaktywne scenariusze, mikro‑lekcje i testy, które naprawdę przygotowują.',
        en: 'We blend theory with practice: interactive scenarios, micro‑lessons, and tests that truly prepare.',
        ru: 'Мы соединяем теорию и практику: интерактивные сценарии, микро‑уроки и тесты, которые действительно готовят.'
      }
    },
    {
      key: 'team',
      title: { pl: 'Doświadczenie i pasja', en: 'Expertise and Passion', ru: 'Опыт и страсть' },
      text: {
        pl: 'Projektujemy z myślą o człowieku — łączymy research, UX i technologię, by aplikacje były naprawdę pomocne.',
        en: 'Human‑first design: we combine research, UX, and tech to make apps genuinely helpful.',
        ru: 'Дизайн для людей: объединяем исследования, UX и технологии, чтобы приложения были действительно полезными.'
      }
    },
    {
      key: 'privacy',
      title: { pl: 'Bezpieczeństwo i prywatność', en: 'Safety and Privacy', ru: 'Безопасность и приватность' },
      text: {
        pl: 'Bez reklam i z pełną transparentnością — prywatność użytkowników to dla nas fundament.',
        en: 'No ads and full transparency — user privacy is our foundation.',
        ru: 'Без рекламы и с полной прозрачностью — конфиденциальность пользователей для нас основа.'
      }
    }
  ]
} as const;

export const ROADMAP = {
  title: { pl: 'Roadmap', en: 'Roadmap', ru: 'Дорожная карта' },
  subtitle: {
    pl: 'Plan rozwoju na 12–18 miesięcy — cel: wypuścić całe portfolio jak najszybciej, najpóźniej do końca 2026.',
    en: 'A 12–18 month plan — goal: ship the full portfolio as soon as possible, no later than end of 2026.',
    ru: 'План на 12–18 месяцев — цель: выпустить всё портфолио как можно быстрее, не позднее конца 2026.'
  },
  items: [
    {
      date: 'Q1 2026',
      pl: 'Premiera beta aplikacji Tik-Mathik AI (wąska grupa testerów).',
      en: 'Tik-Mathik AI beta release (limited tester cohort).',
      ru: 'Бета‑релиз Tik‑Mathik AI (ограниченная группа тестеров).'
    },
    {
      date: 'Q2 2026',
      pl: 'Oficjalny launch TikDrive na Androida i iOS (Google Play i App Store).',
      en: 'TikDrive official launch on Android and iOS (Google Play and App Store).',
      ru: 'Официальный запуск TikDrive на Android и iOS (Google Play и App Store).'
    },
    {
      date: 'Q3 2026',
      pl: 'Prezentacja prototypu TikEveryLang AI i start testów alpha.',
      en: 'TikEveryLang AI prototype showcase and closed alpha testing.',
      ru: 'Показ прототипа TikEveryLang AI и старт alpha‑тестов.'
    },
    {
      date: 'Q4 2026',
      pl: 'Integracja zaawansowanego AI-asystenta we wszystkich aplikacjach; przygotowania do globalnej ekspansji.',
      en: 'Advanced AI assistant integration across apps; global expansion preparations.',
      ru: 'Интеграция продвинутого AI‑ассистента во все приложения; подготовка к глобальной экспансии.'
    },
    {
      date: '2027',
      pl: 'Ciągłe usprawnienia, nowe funkcje i globalna ekspansja ekosystemu MiLux AI Labs.',
      en: 'Continuous improvements, new features, and global expansion of the MiLux AI Labs ecosystem.',
      ru: 'Непрерывные улучшения, новые функции и глобальная экспансия экосистемы MiLux AI Labs.'
    }
  ]
} as const;

export const FAQ = {
  title: { pl: 'FAQ', en: 'FAQ', ru: 'Вопросы и ответы' },
  items: [
    {
      q: {
        pl: 'Czym jest MiLux AI Labs i jakie projekty rozwija?',
        en: 'What is MiLux AI Labs and what projects are you developing?',
        ru: 'Что такое MiLux AI Labs и какие проекты вы развиваете?'
      },
      a: {
        pl: 'MiLux AI Labs tworzy praktyczne aplikacje AI dla edukacji, zdrowia, bezpieczeństwa i produktywności. Nasze projekty obejmują m.in. Tik‑Mathik AI, TikDrive, TikEveryLang AI, TikLawyer AI, SafeZoneX, CarFix AI, HealthSymptom AI, ExplainLikeAI, InterviewCoach AI, MemoryBoost AI, ContractScan AI, StudyPlanner AI, TikPlant AI, TikFinance AI, TikSpaceZ AI, TikDietX AI oraz TipExam AI. Skupiamy się na realnych efektach i użyteczności.',
        en: 'MiLux AI Labs builds practical AI apps for education, health, safety, and productivity. Our projects include Tik‑Mathik AI, TikDrive, TikEveryLang AI, TikLawyer AI, SafeZoneX, CarFix AI, HealthSymptom AI, ExplainLikeAI, InterviewCoach AI, MemoryBoost AI, ContractScan AI, StudyPlanner AI, TikPlant AI, TikFinance AI, TikSpaceZ AI, TikDietX AI, and TipExam AI. We focus on real outcomes and usability.',
        ru: 'MiLux AI Labs создаёт практичные AI‑приложения для образования, здоровья, безопасности и продуктивности. Среди проектов: Tik‑Mathik AI, TikDrive, TikEveryLang AI, TikLawyer AI, SafeZoneX, CarFix AI, HealthSymptom AI, ExplainLikeAI, InterviewCoach AI, MemoryBoost AI, ContractScan AI, StudyPlanner AI, TikPlant AI, TikFinance AI, TikSpaceZ AI, TikDietX AI и TipExam AI. Мы фокусируемся на реальной пользе и удобстве.'
      }
    },
    {
      q: {
        pl: 'Kiedy i gdzie będą dostępne wasze aplikacje?',
        en: 'When and where will your apps be available?',
        ru: 'Когда и где будут доступны ваши приложения?'
      },
      a: {
        pl: 'Planujemy wydania na Androida i iOS. Projekty wypuszczamy etapami, a cały ekosystem chcemy udostępnić jak najszybciej — najpóźniej do końca 2026.',
        en: 'We plan releases on Android and iOS. Projects ship in stages, and we aim to deliver the full ecosystem as soon as possible — no later than end of 2026.',
        ru: 'Мы планируем релизы на Android и iOS. Проекты выходят поэтапно, а всю экосистему хотим выпустить как можно быстрее — не позднее конца 2026.'
      }
    },
    {
      q: {
        pl: 'Czy wasze aplikacje będą darmowe? Jak zamierzacie na nich zarabiać?',
        en: 'Will your apps be free? How do you plan to monetize them?',
        ru: 'Будут ли ваши приложения бесплатными? Как вы планируете монетизацию?'
      },
      a: {
        pl: 'Tak, aplikacje będą darmowe do pobrania. Stawiamy na model freemium: podstawowe funkcje bez opłat, a profesjonalne moduły i funkcje premium w subskrypcji lub jako rozszerzenia. Bez reklam — monetyzacja wyłącznie przez sklepy aplikacji.',
        en: 'Yes, apps will be free to download. We use a freemium model: core features free, with professional modules and premium features via subscription or add‑ons. No ads — monetization only through app stores.',
        ru: 'Да, приложения будут бесплатными для скачивания. Модель freemium: базовые функции бесплатны, профессиональные модули и премиум‑возможности — по подписке или как расширения. Без рекламы — монетизация только через магазины приложений.'
      }
    },
    {
      q: {
        pl: 'W jaki sposób wasze aplikacje wykorzystują sztuczną inteligencję?',
        en: 'How do your apps use artificial intelligence?',
        ru: 'Как ваши приложения используют искусственный интеллект?'
      },
      a: {
        pl: 'AI odpowiada za personalizację nauki, analizę wyników, rekomendacje i tłumaczenie złożonych treści. Dzięki temu użytkownik dostaje szybsze odpowiedzi, lepsze ścieżki nauki i realne wsparcie w decyzjach.',
        en: 'AI drives personalization, performance analysis, recommendations, and plain‑language explanations. This gives users faster answers, better learning paths, and practical decision support.',
        ru: 'ИИ отвечает за персонализацию обучения, анализ результатов, рекомендации и объяснение сложных тем простым языком. Это даёт пользователям быстрые ответы, лучшие траектории обучения и практическую поддержку решений.'
      }
    },
    {
      q: {
        pl: 'Czy aplikacje MiLux są bezpieczne dla dzieci? Jak chronicie prywatność użytkowników?',
        en: 'Are MiLux apps safe for children? How do you protect user privacy?',
        ru: 'Безопасны ли приложения MiLux для детей? Как вы защищаете приватность?'
      },
      a: {
        pl: 'Bezpieczeństwo i prywatność traktujemy priorytetowo. Minimalizujemy dane, nie sprzedajemy informacji i nie wyświetlamy reklam. Jeśli zbieramy dane techniczne, to wyłącznie w celu poprawy jakości. Szczegóły zawsze publikujemy w politykach prywatności.',
        en: 'Safety and privacy come first. We minimize data, never sell information, and do not show ads. If we collect technical data, it’s only to improve quality. Full details are always in our privacy policies.',
        ru: 'Безопасность и приватность — приоритет. Мы минимизируем данные, не продаём информацию и не показываем рекламу. Если собираем технические данные, то только для улучшения качества. Полные детали всегда есть в политике конфиденциальности.'
      }
    }
  ]
} as const;

export const CONTACT = {
  title: { pl: 'Kontakt', en: 'Contact', ru: 'Контакты' },
  text: {
    pl: 'Masz pytania lub sugestie? Skontaktuj się z nami pod adresem',
    en: 'Have questions or feedback? Reach out at',
    ru: 'Есть вопросы или идеи? Напишите нам на'
  },
  email: 'matmiluxai@gmail.com'
} as const;

export function pick<T extends { pl: string; en: string; ru: string }>(lang: Language, obj: T): string {
  if (lang === 'pl') return obj.pl;
  if (lang === 'ru') return obj.ru;
  return obj.en;
}

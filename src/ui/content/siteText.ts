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
      title: { pl: 'AI, które daje przewagę', en: 'AI that delivers an edge', ru: 'ИИ, который даёт преимущество' },
      text: {
        pl: 'Skupiamy się na jakości i skuteczności — nasze modele są szybkie, precyzyjne i użyteczne w praktyce.',
        en: 'We focus on quality and effectiveness — fast, precise, and practical AI models.',
        ru: 'Мы фокусируемся на качестве и эффективности — быстрые, точные и практичные AI‑модели.'
      }
    },
    {
      key: 'learn',
      title: { pl: 'Praktyka ponad teorię', en: 'Practice over theory', ru: 'Практика важнее теории' },
      text: {
        pl: 'Projektujemy doświadczenia, które uczą szybciej: krótkie moduły, realne scenariusze i jasne wskazówki.',
        en: 'We design faster learning experiences: short modules, real scenarios, and clear guidance.',
        ru: 'Мы проектируем обучение быстрее: короткие модули, реальные сценарии и понятные подсказки.'
      }
    },
    {
      key: 'team',
      title: { pl: 'Zorientowani na ludzi', en: 'Human‑first by design', ru: 'Человек — в центре' },
      text: {
        pl: 'Łączymy research, UX i technologię, żeby aplikacje były proste, piękne i skuteczne.',
        en: 'We combine research, UX, and tech to make apps simple, elegant, and effective.',
        ru: 'Мы соединяем исследования, UX и технологии, чтобы приложения были простыми и эффективными.'
      }
    },
    {
      key: 'privacy',
      title: { pl: 'Prywatność bez kompromisów', en: 'Privacy without compromise', ru: 'Приватность без компромиссов' },
      text: {
        pl: 'Zero reklam, pełna transparentność i minimalizacja danych — bezpieczeństwo to standard.',
        en: 'No ads, full transparency, and data minimization — security as a standard.',
        ru: 'Без рекламы, прозрачность и минимизация данных — безопасность как стандарт.'
      }
    }
  ]
} as const;

export const ROADMAP = {
  title: { pl: 'Roadmap', en: 'Roadmap', ru: 'Дорожная карта' },
  subtitle: {
    pl: 'Cel strategiczny: wypuścić jak najwięcej aplikacji do końca 2026 i rozwijać je w trybie ciągłym.',
    en: 'Strategic goal: release as many apps as possible by end of 2026 and keep improving them continuously.',
    ru: 'Стратегическая цель: выпустить как можно больше приложений до конца 2026 и развивать их постоянно.'
  },
  items: [
    {
      date: 'Q1 2026',
      pl: 'Szybkie iteracje kluczowych aplikacji i testy z użytkownikami.',
      en: 'Rapid iterations of core apps and user testing.',
      ru: 'Быстрые итерации ключевых приложений и тестирование с пользователями.'
    },
    {
      date: 'Q2 2026',
      pl: 'Skalowanie portfolio, nowe wersje beta i pierwsze wdrożenia komercyjne.',
      en: 'Scaling the portfolio, new betas, and first commercial rollouts.',
      ru: 'Масштабирование портфолио, новые беты и первые коммерческие запуски.'
    },
    {
      date: 'Q3 2026',
      pl: 'Globalizacja treści, wielojęzyczne wersje i optymalizacja UX.',
      en: 'Globalization, multi‑language versions, and UX optimization.',
      ru: 'Глобализация, многоязычные версии и оптимизация UX.'
    },
    {
      date: 'Q4 2026',
      pl: 'Maksymalna liczba premier i rozwój funkcji premium.',
      en: 'Maximum number of launches and premium feature expansion.',
      ru: 'Максимальное число релизов и развитие премиум‑функций.'
    },
    {
      date: '2027',
      pl: 'Stały rozwój produktów i skalowanie globalne.',
      en: 'Continuous product growth and global scale‑up.',
      ru: 'Постоянное развитие продуктов и глобальное масштабирование.'
    }
  ]
} as const;

export const TODO = {
  title: { pl: 'Aktualne zadania', en: 'Current tasks', ru: 'Текущие задачи' },
  subtitle: {
    pl: 'Lista rzeczy do zrobienia w najbliższym czasie.',
    en: 'List of things to do in the near future.',
    ru: 'Список дел на ближайшее время.'
  },
  items: [
    {
      task: 'Finalizować AdTikLocker dla Chrome Web Store',
      pl: 'Finalizować AdTikLocker dla Chrome Web Store',
      en: 'Finalize AdTikLocker for Chrome Web Store',
      ru: 'Завершить AdTikLocker для Chrome Web Store'
    },
    {
      task: 'Rozpocząć beta testy Tik-Mathik AI',
      pl: 'Rozpocząć beta testy Tik-Mathik AI',
      en: 'Start beta testing for Tik-Mathik AI',
      ru: 'Начать бета-тестирование Tik-Mathik AI'
    },
    {
      task: 'Przygotować TikDrive do premiery',
      pl: 'Przygotować TikDrive do premiery',
      en: 'Prepare TikDrive for launch',
      ru: 'Подготовить TikDrive к запуску'
    },
    {
      task: 'Dodać więcej języków do aplikacji',
      pl: 'Dodać więcej języków do aplikacji',
      en: 'Add more languages to apps',
      ru: 'Добавить больше языков в приложения'
    },
    {
      task: 'Optymalizować UX w aplikacjach mobilnych',
      pl: 'Optymalizować UX w aplikacjach mobilnych',
      en: 'Optimize UX in mobile apps',
      ru: 'Оптимизировать UX в мобильных приложениях'
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
        pl: 'MiLux AI Labs tworzy praktyczne aplikacje AI dla edukacji, zdrowia, bezpieczeństwa i produktywności. Nasze projekty obejmują m.in. Tik‑Mathik AI, TikDrive, TikLang AI, TikLawyer AI, TikCorporate AI, SafeZoneX, CarFix AI, HealthSymptom AI, ExplainLikeAI, InterviewCoach AI, MemoryBoost AI, ContractScan AI, StudyPlanner AI, TikPlant AI, TikFinance AI, TikSpaceZ AI, TikDietX AI oraz TipExam AI. Skupiamy się na realnych efektach i użyteczności.',
        en: 'MiLux AI Labs builds practical AI apps for education, health, safety, and productivity. Our projects include Tik‑Mathik AI, TikDrive, TikLang AI, TikLawyer AI, TikCorporate AI, SafeZoneX, CarFix AI, HealthSymptom AI, ExplainLikeAI, InterviewCoach AI, MemoryBoost AI, ContractScan AI, StudyPlanner AI, TikPlant AI, TikFinance AI, TikSpaceZ AI, TikDietX AI, and TipExam AI. We focus on real outcomes and usability.',
        ru: 'MiLux AI Labs создаёт практичные AI‑приложения для образования, здоровья, безопасности и продуктивности. Среди проектов: Tik‑Mathik AI, TikDrive, TikLang AI, TikLawyer AI, TikCorporate AI, SafeZoneX, CarFix AI, HealthSymptom AI, ExplainLikeAI, InterviewCoach AI, MemoryBoost AI, ContractScan AI, StudyPlanner AI, TikPlant AI, TikFinance AI, TikSpaceZ AI, TikDietX AI и TipExam AI. Мы фокусируемся на реальной пользе и удобстве.'
      }
    },
    {
      q: {
        pl: 'Jaki jest cel na 2026?',
        en: 'What is the goal for 2026?',
        ru: 'Какова цель на 2026 год?'
      },
      a: {
        pl: 'Naszym celem jest wypuścić jak najwięcej aplikacji do końca 2026 i rozwijać je w trybie ciągłym.',
        en: 'Our goal is to release as many apps as possible by the end of 2026 and keep improving them continuously.',
        ru: 'Наша цель — выпустить как можно больше приложений до конца 2026 и постоянно их развивать.'
      }
    },
    {
      q: {
        pl: 'Na jakich platformach będziecie dostępni?',
        en: 'Which platforms will you support?',
        ru: 'На каких платформах вы будете доступны?'
      },
      a: {
        pl: 'Startujemy od Androida i iOS. W kolejnych etapach rozwijamy wersje webowe i integracje B2B.',
        en: 'We start with Android and iOS, then expand to web and B2B integrations.',
        ru: 'Начинаем с Android и iOS, затем расширяемся на веб и B2B‑интеграции.'
      }
    },
    {
      q: {
        pl: 'Jak zarabiacie, skoro nie ma reklam?',
        en: 'How do you monetize without ads?',
        ru: 'Как вы монетизируете без рекламы?'
      },
      a: {
        pl: 'Stawiamy na model freemium i subskrypcje premium. Podstawowe funkcje są bezpłatne, a zaawansowane moduły dostępne w planach płatnych.',
        en: 'We use a freemium model with premium subscriptions. Core features stay free, advanced modules are paid.',
        ru: 'Мы используем freemium и премиум‑подписки. Базовые функции бесплатны, расширенные — платные.'
      }
    },
    {
      q: {
        pl: 'Czy dbacie o prywatność użytkowników?',
        en: 'Do you protect user privacy?',
        ru: 'Вы защищаете приватность пользователей?'
      },
      a: {
        pl: 'Tak. Minimalizujemy dane, nie sprzedajemy informacji i stawiamy na pełną transparentność. Szczegóły zawsze publikujemy w politykach prywatności.',
        en: 'Yes. We minimize data, never sell information, and stay transparent. Full details are in our privacy policies.',
        ru: 'Да. Мы минимизируем данные, не продаём информацию и действуем прозрачно. Подробности — в политиках конфиденциальности.'
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

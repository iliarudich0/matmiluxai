export type ProjectSlug =
  | 'adtiklocker'
  | 'tik-mathik'
  | 'tikdrive'
  | 'tikeverylang'
  | 'tiklawyer'
  | 'safezonex'
  | 'carfix-ai'
  | 'healthsymptom-ai'
  | 'explainlike-ai'
  | 'interviewcoach-ai'
  | 'memoryboost-ai'
  | 'contractscan-ai'
  | 'studyplanner-ai'
  | 'tikplant-ai'
  | 'tikfinance-ai'
  | 'tikspacez-ai'
  | 'tikdietx-ai'
  | 'tipexam-ai'
  | 'tikcorporate-ai'
  | 'ai-house-redesign'
  | 'taxpilot-ai'
  | 'audio-summariser';

export type Project = {
  slug: ProjectSlug;
  name: string;
  tagline: { pl: string; en: string; ru?: string };
  shortDescription: { pl: string; en: string; ru?: string };
  description: { pl: string; en: string; ru?: string };
  features: { pl: string[]; en: string[]; ru?: string[] };
  cta: { pl: string; en: string; ru?: string };
  ctaNote?: { pl: string; en: string; ru?: string };
  mockScreenshot?: string;
  hasPrivacy?: boolean;
  accent: 'neon-1' | 'neon-2';
};

export const projects: Project[] = [
  {
    slug: 'adtiklocker',
    name: 'AdTikLocker',
    tagline: {
      pl: 'Chrome extension blokujący reklamy jednym lockerem.',
      en: 'Chrome extension that locks ads behind one smart locker.',
      ru: 'Chrome-расширение, скрывающее рекламу через AI-локер.'
    },
    shortDescription: {
      pl: 'Rozszerzenie Chrome, które przejmuje kontrolę nad natrętnymi reklamami i pokazuje tylko treść, którą chcesz czytać.',
      en: 'A Chrome extension that takes over aggressive ads and keeps only the content you want to read.',
      ru: 'Chrome-расширение, которое блокирует навязчивую рекламу и оставляет только полезную страницу.'
    },
    description: {
      pl: 'AdTikLocker to locker typu „tarcza” dla Chrome, który zatrzymuje banery i wideo przed ich wyrenderowaniem i zastępuje je czystym, ciemnym ekranem. Projekt jest obecnie w fazie publikacji w sklepie Chrome â€” dopracowujemy metadane, certyfikaty i wnioski, zanim udostępnimy go użytkownikom. Mock ekranu lockera: /icons/mockscreenshot.jpg',
      en: 'AdTikLocker is a Chrome locker extension that stops banners and video ads before they render, replacing them with a calm, dark overlay. The project is currently in the publication phase for the Chrome Web Store â€” we are polishing metadata, certificates, and filings before shipping it to users. Mock screenshot of the locker overlay: /icons/mockscreenshot.jpg',
      ru: 'AdTikLocker â€” это Chrome-локер, который блокирует баннеры и видеорекламу до их отображения и показывает спокойный тёмный экран. Сейчас проект находится на этапе публикации в Chrome Web Store â€” мы полируем метаданные, сертификаты и документы перед релизом. Макет экрана локера: /icons/mockscreenshot.jpg'
    },
    features: {
      pl: [
        'AI detekuje natrętne reklamy i zamyka je jeszcze zanim pojawią się w witrynie.',
        'Locker w stylu neonowym otacza główną treść i pozostawia ją czytelną.',
        'Jedno kliknięcie odblokowuje reklamę, by sprawdzić źródło lub wybrać wyjątek.',
        'Synchronizacja z profilem Chrome ułatwia zarządzanie whitelistą.',
        'Lekki skrypt w tle z telemetrią wyłączoną domyślnie, ukierunkowany na prywatność.',
        'Panel szybkich akcji pozwala wstrzymać locker, dodać wyjątek lub zgłosić podejrzaną kreację.'
      ],
      en: [
        'AI-driven detection locks down intrusive ads before they ever clutter the page.',
        'A neon-style locker keeps the main content visible while hiding the noise.',
        'One tap unlocks the ad so you can inspect its source or add an exception.',
        'Chrome profile sync makes it easy to manage the whitelist and share rules.',
        'Lightweight background script with telemetry off by default, focused on privacy.',
        'Quick-action panel to pause the locker, whitelist a domain, or report a sketchy creative.'
      ],
      ru: [
        'ИИ-детектор блокирует назойливую рекламу до её появления на странице.',
        'Неоновый локер оставляет основной контент видимым и скрывает шум.',
        'Одно нажатие открывает рекламу, чтобы проверить источник или добавить исключение.',
        'Синхронизация с профилем Chrome упрощает управление белым списком.',
        'Лёгкий фоновой скрипт без телеметрии по умолчанию, конфиденциальность в приоритете.',
        'Панель быстрых действий: пауза, белый список или репорт необычного креатива.'
      ]
    },
    cta: {
      pl: 'Powiadom mnie o publikacji',
      en: 'Notify me at launch',
      ru: 'Сообщите о релизе'
    },
    ctaNote: {
      pl: 'Projekt w fazie publikacji w Chrome Web Store.',
      en: 'Currently in the publication phase for the Chrome Web Store.',
      ru: 'Проект на этапе публикации в Chrome Web Store.'
    },
    mockScreenshot: '/icons/mockscreenshot.jpg',
    hasPrivacy: false,
    accent: 'neon-2'
  },
  {
    slug: 'tik-mathik',
    name: 'Tik-Mathik AI',
    tagline: {
      pl: 'Inteligentny nauczyciel matematyki w Twoim telefonie.',
      en: 'Your AI math tutor in your pocket.',
      ru: 'Ваш AI‑репетитор по математике в кармане.'
    },
    shortDescription: {
      pl: 'Inteligentny nauczyciel matematyki w Twoim telefonie – Tik-Mathik AI tworzy zadania i pomaga zrozumieć rozwiązania, dostosowując się do Twojego poziomu.',
      en: 'Your AI math tutor in your pocket – Tik-Mathik AI generates math problems and guides you through solutions, adapting to your skill level.',
      ru: 'Ваш AI‑репетитор по математике в кармане — Tik‑Mathik AI генерирует задачи и помогает понять решения, подстраиваясь под ваш уровень.'
    },
    description: {
      pl: 'Tik-Mathik AI to futurystyczna aplikacja edukacyjna, która zmienia sposób nauki matematyki. Wykorzystując sztuczną inteligencję, aplikacja generuje nieograniczoną liczbę zadań dopasowanych do użytkownika i udziela interaktywnych podpowiedzi krok po kroku. Ucz się algebraicznych równań, geometrii czy statystyki w tempie, które Ci odpowiada. Wirtualny AI-asystent monitoruje Twoje postępy i personalizuje kolejne zadania, koncentrując się na Twoich słabszych obszarach. To jak posiadanie osobistego nauczyciela matematyki dostępnego 24/7 – idealnego zarówno dla uczniów, jak i dorosłych chcących odświeżyć wiedzę. Dzięki Tik-Mathik AI nauka staje się bardziej angażująca, interaktywna i dopasowana do Ciebie niż kiedykolwiek.',
      en: 'Tik-Mathik AI is a futuristic educational app transforming how you learn mathematics. Powered by artificial intelligence, it generates an unlimited variety of math problems tailored to each learner and provides interactive step-by-step hints for solving them. You can practice anything from algebraic equations to geometry or statistics at your own pace. A virtual AI assistant monitors your progress and personalizes the next challenges, focusing on areas where you need improvement. It’s like having a personal math tutor available 24/7 – perfect for students and adults alike looking to brush up on their skills. With Tik-Mathik AI, learning becomes more engaging, interactive, and personalized than ever before.',
      ru: 'Tik‑Mathik AI — футуристическое образовательное приложение, которое меняет подход к изучению математики. На базе ИИ оно генерирует неограниченное количество задач под конкретного пользователя и даёт интерактивные подсказки шаг за шагом. Изучайте алгебру, геометрию или статистику в удобном темпе. Виртуальный AI‑ассистент отслеживает прогресс и персонализирует следующие задания, фокусируясь на слабых местах. Это как личный репетитор 24/7 — идеально для школьников, студентов и взрослых. С Tik‑Mathik AI обучение становится более вовлекающим, интерактивным и персональным.'
    },
    features: {
      pl: [
        'Generowanie zadań dostosowanych do poziomu użytkownika (od podstawowych po zaawansowane).',
        'AI-asystent udzielający wskazówek i wyjaśnień krok po kroku podczas rozwiązywania zadań.',
        'Personalizowane ścieżki nauki oparte na analizie postępów i wyników użytkownika.',
        'Baza tematów obejmująca arytmetykę, algebrę, geometrię, statystykę i inne dziedziny matematyki.',
        'Tryb wyzwań i quizów pozwalający rywalizować ze znajomymi lub poprawiać własne rekordy.',
        'Zero reklam, przejrzysty interfejs i motyw grywalizacji, który motywuje do regularnej nauki.'
      ],
      en: [
        'AI-generated practice problems tailored to the user’s skill level (from basic arithmetic to advanced topics).',
        'Intelligent assistant providing step-by-step hints and explanations as you work through problems.',
        'Personalized learning paths based on analysis of your progress and performance.',
        'A broad range of topics covering arithmetic, algebra, geometry, statistics, and more.',
        'Challenge and quiz mode to compete with friends or beat your own high scores.',
        'No ads, a clean interface, and gamified experience that motivates regular practice.'
      ],
      ru: [
        'Генерация задач под уровень пользователя (от базовых до продвинутых).',
        'AI‑ассистент с пошаговыми подсказками и объяснениями.',
        'Персональные траектории обучения на основе анализа прогресса.',
        'Темы: арифметика, алгебра, геометрия, статистика и др.',
        'Режим челленджей и квизов для мотивации и соревнования.',
        'Без рекламы, чистый интерфейс и геймификация.'
      ]
    },
    cta: {
      pl: 'Dołącz do beta testów',
      en: 'Join the beta',
      ru: 'Присоединиться к бета‑тесту'
    },
    ctaNote: {
      pl: 'Wkrótce dostępne w Google Play / App Store.',
      en: 'Coming soon to Google Play / App Store.',
      ru: 'Скоро в Google Play / App Store.'
    },
    accent: 'neon-1'
  },
  {
    slug: 'tikdrive',
    name: 'TikDrive',
    tagline: {
      pl: 'Twój wirtualny instruktor nauki jazdy.',
      en: 'Your virtual driving instructor.',
      ru: 'Ваш виртуальный инструктор по теории вождения.'
    },
    shortDescription: {
      pl: 'Twój wirtualny instruktor nauki jazdy – TikDrive pomoże Ci zdać egzamin teoretyczny dzięki interaktywnym testom i inteligentnym wskazówkom.',
      en: 'Your virtual driving instructor – TikDrive helps you ace your driving theory exam with interactive tests and intelligent guidance.',
      ru: 'Ваш виртуальный инструктор по вождению — TikDrive помогает сдать теорию благодаря интерактивным тестам и умным подсказкам.'
    },
    description: {
      pl: 'TikDrive to nowoczesny symulator nauki jazdy, który przenosi przygotowanie do egzaminu teoretycznego na wyższy poziom. Aplikacja zawiera aktualną bazę pytań egzaminacyjnych kategorii prawa jazdy, prezentowanych w dynamicznym, interaktywnym formacie. Tryb nauki umożliwia przeglądanie pytań tematycznych z natychmiastową informacją zwrotną i wyjaśnieniami opartymi na AI – aplikacja analizuje Twoje odpowiedzi i podpowiada, na które zagadnienia warto zwrócić większą uwagę. TikDrive oferuje także realistyczny tryb egzaminu odzwierciedlający warunki prawdziwego testu, łącznie z odliczaniem czasu. Dzięki systemowi punktów i osiągnięć nauka staje się grą, która motywuje do regularnych ćwiczeń. Niezależnie czy jesteś tuż przed egzaminem, czy dopiero zaczynasz kurs, TikDrive sprawi, że poczujesz się pewnie za kierownicą wiedzy.',
      en: 'TikDrive is a next-generation driving theory simulator that takes exam preparation to the next level. The app includes an up-to-date database of driving theory test questions for your license category, presented in a dynamic, interactive format. A learning mode lets you review topic-specific questions with instant feedback and AI-based explanations – the app analyzes your answers and suggests which topics you need to focus on. TikDrive also offers a realistic exam mode mirroring actual test conditions, complete with a countdown timer. A gamified points and achievements system turns learning into a game that motivates you to practice regularly. Whether you\'re about to take your test or just starting your course, TikDrive ensures you’ll feel confident and well-prepared when it\'s time for the real exam.',
      ru: 'TikDrive — современный симулятор подготовки к теоретическому экзамену по вождению. В приложении — актуальная база вопросов по категориям, поданных в интерактивном формате. Учебный режим даёт быстрый фидбек и AI‑объяснения: приложение анализирует ответы и подсказывает, на какие темы обратить внимание. Есть реалистичный режим экзамена с таймером. Геймификация и достижения мотивируют учиться регулярно. Подготовка становится уверенной и системной.'
    },
    features: {
      pl: [
        'Pełna, aktualizowana baza oficjalnych pytań testowych na prawo jazdy (wszystkie kategorie).',
        'Tryb nauki z podziałem na kategorie tematyczne (znaki drogowe, przepisy, pierwsza pomoc itd.) wraz z natychmiastowymi wyjaśnieniami.',
        'Tryb egzaminu symulujący warunki prawdziwego testu (losowy zestaw pytań, limit czasu, punktacja jak w WORD).',
        'System punktów, odznak i statystyk śledzący postępy użytkownika i nagradzający regularną naukę.',
        'Personalizowane rekomendacje obszarów do poprawy na podstawie wyników dotychczasowych testów (AI analizujący błędy).',
        'Brak rozpraszających reklam, czytelny interfejs w stylistyce futurystycznej sprzyjający skupieniu podczas nauki.'
      ],
      en: [
        'A complete, regularly updated pool of official driving test questions (all license categories).',
        'Study mode organized by topic (road signs, rules, first aid, etc.) with instant explanations for each answer.',
        'Exam mode simulating real test conditions (random question sets, time limit, scoring system identical to the official exam).',
        'Gamified points, badges, and statistics system to track progress and reward consistent practice.',
        'Personalized recommendations on which topics to improve based on your performance (powered by an AI module analyzing your mistakes).',
        'No distracting ads, with a clear, futuristic interface to help you stay focused while learning.'
      ],
      ru: [
        'Полная и актуальная база официальных экзаменационных вопросов (все категории).',
        'Учебный режим по темам (знаки, правила, первая помощь) с мгновенными объяснениями.',
        'Экзаменационный режим с таймером и реальным форматом теста.',
        'Система баллов, достижений и статистики прогресса.',
        'Персональные рекомендации тем для улучшения (AI анализирует ошибки).',
        'Без рекламы, чистый футуристический интерфейс для концентрации.'
      ]
    },
    cta: {
      pl: 'Sprawdź premierę wkrótce',
      en: 'Check launch status',
      ru: 'Следить за запуском'
    },
    ctaNote: {
      pl: 'Plan: oficjalny launch Q2 2026.',
      en: 'Planned: official launch in Q2 2026.',
      ru: 'План: официальный запуск в Q2 2026.'
    },
    accent: 'neon-2'
  },
  {
    slug: 'tikeverylang',
    name: 'TikEveryLang AI',
    tagline: {
      pl: 'Uniwersalny tłumacz i nauczyciel językowy w jednym.',
      en: 'A universal translator and language tutor in one.',
      ru: 'Универсальный переводчик и языковой наставник в одном.'
    },
    shortDescription: {
      pl: 'Uniwersalny tłumacz i nauczyciel językowy w jednym – TikEveryLang AI otworzy przed Tobą świat języków dzięki mocy sztucznej inteligencji.',
      en: 'A universal translator and language tutor in one – TikEveryLang AI will open up a world of languages for you, powered by artificial intelligence.',
      ru: 'Универсальный переводчик и языковой наставник в одном — TikEveryLang AI открывает мир языков с помощью ИИ.'
    },
    description: {
      pl: 'TikEveryLang AI to wizja przyszłości nauki języków – aplikacja, która wykorzysta AI, aby uczynić naukę dowolnego języka szybką, wciągającą i dostępną dla każdego. Choć projekt jest na etapie planowania, już teraz zdradzimy, czego można się spodziewać. Aplikacja ma oferować interaktywne konwersacje z AI naśladujące dialog z native speakerem oraz personalizowane lekcje dostosowane do Twoich postępów. Planowane są funkcje rozpoznawania mowy i natychmiastowej korekty wymowy, a także tłumaczenia kontekstowe w locie. TikEveryLang AI będzie wspierać wiele języków – od angielskiego i hiszpańskiego, po chiński czy suahili – wszystko w jednym miejscu. Celem jest przekroczenie barier językowych dzięki technologii: gdziekolwiek jesteś, błyskawicznie porozumiesz się w każdym języku. Więcej informacji już wkrótce – śledź nasze aktualizacje!',
      en: 'TikEveryLang AI is our futuristic vision for language learning – an app that will leverage AI to make learning any language fast, immersive, and accessible to everyone. The project is still in the planning phase, but we can share a glimpse of what\'s to come. The app is set to offer interactive conversations with an AI that simulate talking to a native speaker, as well as personalized lessons tailored to your progress. Planned features include speech recognition with instant pronunciation correction and real-time contextual translations. TikEveryLang AI will support numerous languages – from English and Spanish to Chinese or Swahili – all within one platform. The goal is to break language barriers through technology: wherever you go, you\'ll be able to communicate instantly in any language. More information is coming soon – stay tuned for updates!',
      ru: 'TikEveryLang AI — наше видение будущего изучения языков. Приложение на базе ИИ сделает обучение быстрым, увлекательным и доступным. Планируются интерактивные диалоги с AI, персональные уроки, распознавание речи с мгновенной коррекцией произношения и контекстные переводы в реальном времени. Поддержка многих языков — от английского и испанского до китайского и суахили — в одном месте. Цель — снять языковые барьеры с помощью технологий.'
    },
    features: {
      pl: [
        'Interaktywne rozmowy z AI w wybranym języku, pozwalające ćwiczyć konwersację w realistyczny sposób.',
        'Personalizowane lekcje i quizy dopasowujące się dynamicznie do postępów użytkownika i jego stylu nauki.',
        'Rozpoznawanie mowy z natychmiastową informacją zwrotną na temat wymowy i akcentu.',
        'Kontekstowe tłumaczenia „na żywo” podczas rozmów lub czytania (wbudowany inteligentny tłumacz).',
        'Obsługa wielu języków (docelowo kilkadziesiąt), w tym popularnych i mniej typowych.',
        'Futurystyczny interfejs – w przyszłości możliwe elementy AR/VR dla immersyjnej nauki.'
      ],
      en: [
        'Interactive AI conversations in the chosen language, allowing you to practice speaking in a realistic way.',
        'Personalized lessons and quizzes that dynamically adapt to your progress and learning style.',
        'Speech recognition with instant feedback on pronunciation and accent.',
        'Contextual “live” translations during conversations or reading (an integrated smart translator).',
        'Support for many languages (potentially dozens), including both popular and less common ones.',
        'A futuristic interface — AR/VR-style immersion is a future consideration.'
      ],
      ru: [
        'Интерактивные диалоги с AI на выбранном языке для практики разговорной речи.',
        'Персональные уроки и квизы, адаптирующиеся к прогрессу.',
        'Распознавание речи с мгновенной обратной связью по произношению.',
        'Контекстный перевод «вживую» при разговоре или чтении.',
        'Поддержка многих языков (планируется десятки).',
        'Футуристичный интерфейс с перспективой AR/VR‑возможностей.'
      ]
    },
    cta: {
      pl: 'Projekt w przygotowaniu',
      en: 'Project in preparation',
      ru: 'Проект в подготовке'
    },
    ctaNote: {
      pl: 'Prototyp planowany na Q3 2026.',
      en: 'Prototype planned for Q3 2026.',
      ru: 'Прототип планируется на Q3 2026.'
    },
    accent: 'neon-1'
  },
  {
    slug: 'tiklawyer',
    name: 'TikLawyer AI',
    tagline: {
      pl: 'Osobisty asystent prawny zasilany AI.',
      en: 'Your personal AI-powered legal assistant.',
      ru: 'Ваш персональный юридический ассистент на базе ИИ.'
    },
    shortDescription: {
      pl: 'AI-powered legal assistant providing instant legal information and guidance',
      en: 'AI-powered legal assistant providing instant legal information and guidance',
      ru: 'AI‑ассистент, который быстро дает юридическую информацию и подсказки.'
    },
    description: {
      pl: 'TikLawyer AI to Twój osobisty asystent prawny napędzany zaawansowaną sztuczną inteligencją. Uzyskaj natychmiastowe odpowiedzi na pytania prawne, zrozum skomplikowane dokumenty prawne i otrzymaj wskazówki dotyczące różnych kwestii prawnych - wszystko w prostej, łatwej w użyciu aplikacji mobilnej. Aplikacja została zaprojektowana z myślą o dostarczaniu ogólnych informacji prawnych i ma charakter edukacyjny. TikLawyer AI to idealne narzędzie do zrozumienia swoich praw, uzyskania szybkich odpowiedzi na pytania prawne, nauki o procedurach prawnych oraz analizy dokumentów prawnych. Pamiętaj: TikLawyer AI dostarcza informacji prawnych, NIE porad prawnych. Zawsze konsultuj się z wykwalifikowanym prawnikiem w konkretnych sprawach prawnych.',
      en: 'TikLawyer AI is your personal legal assistant powered by advanced artificial intelligence. Get instant answers to legal questions, understand complex legal documents, and receive guidance on various legal matters - all in a simple, easy-to-use mobile app. The app is designed for educational purposes and general legal information. TikLawyer AI is perfect for understanding your legal rights, getting quick answers to legal questions, learning about legal procedures, and analyzing legal documents. Remember: TikLawyer AI provides legal information, NOT legal advice. Always consult with a qualified attorney for specific legal matters.',
      ru: 'TikLawyer AI — персональный юридический ассистент на базе ИИ. Он помогает получить быстрые ответы на юридические вопросы, понять сложные документы и получить общие рекомендации. Приложение носит образовательный характер и предоставляет общую информацию. Важно: TikLawyer AI не дает юридических консультаций; для конкретных случаев обращайтесь к юристу.'
    },
    features: {
      pl: [
        'AI-asystent prawny – zadaj dowolne pytanie prawne i otrzymaj natychmiastowe, zrozumiałe odpowiedzi.',
        'Analiza dokumentów – prześlij i przeanalizuj dokumenty prawne za pomocą AI.',
        'Baza informacji prawnych – dostęp do kompleksowych informacji prawnych.',
        'Wsparcie wielu języków – dostępne w wielu językach.',
        'Prywatność przede wszystkim – Twoje rozmowy są prywatne i bezpieczne.',
        'Zero reklam, przejrzysty interfejs skoncentrowany na dostarczaniu rzetelnych informacji prawnych.'
      ],
      en: [
        'AI Legal Assistant — Ask any legal question and get instant, understandable answers.',
        'Document Analysis — Upload and analyze legal documents with AI.',
        'Legal Information Database — Access comprehensive legal information.',
        'Multi-language Support — Available in multiple languages.',
        'Privacy First — Your conversations are private and secure.',
        'No ads, clean interface focused on delivering reliable legal information.'
      ],
      ru: [
        'AI‑юридический ассистент — задайте вопрос и получите понятный ответ.',
        'Анализ документов — загрузка и разбор юридических текстов.',
        'База правовой информации.',
        'Поддержка нескольких языков.',
        'Приватность — ваши запросы защищены.',
        'Без рекламы, чистый интерфейс.'
      ]
    },
    cta: {
      pl: 'Pobierz wkrótce',
      en: 'Download soon',
      ru: 'Скоро доступно'
    },
    ctaNote: {
      pl: 'Wkrótce dostępne w Google Play / App Store.',
      en: 'Coming soon to Google Play / App Store.',
      ru: 'Скоро в Google Play / App Store.'
    },
    accent: 'neon-2'
  },
  {
    slug: 'safezonex',
    name: 'SafeZoneX',
    tagline: {
      pl: 'Aplikacja na każdy wypadek - znajdź bezpieczne schronienie.',
      en: 'App for every emergency - find safe shelter.',
      ru: 'Приложение на случай ЧС — найдите безопасное убежище.'
    },
    shortDescription: {
      pl: 'SafeZoneX to aplikacja survival na każdy wypadek - wojny, trzęsienia ziemi, powodzie, globalne katastrofy. Znajdź najbliższe bezpieczne schronienia i przygotuj się na kryzys.',
      en: 'SafeZoneX is a survival app for every emergency - wars, earthquakes, floods, global disasters. Find the nearest safe shelters and prepare for crisis.',
      ru: 'SafeZoneX — приложение для выживания при войнах, землетрясениях, наводнениях и других катастрофах. Найдите ближайшие убежища и подготовьтесь к кризису.'
    },
    description: {
      pl: 'SafeZoneX to rewolucyjna aplikacja survival, która przygotowuje Cię na każdy scenariusz kryzysowy. W erze globalnych zagrożeń - od wojen i konfliktów zbrojnych, przez trzęsienia ziemi i tsunami, aż po ekstremalne warunki pogodowe i katastrofy ekologiczne - SafeZoneX zapewnia natychmiastowy dostęp do aktualnych informacji o bezpiecznych schronieniach. Aplikacja wykorzystuje AI do analizy zagrożeń w czasie rzeczywistym, mapuje bezpieczne strefy i schrony, oraz dostarcza praktyczne wskazówki survival. Funkcje obejmują: alerty o zagrożeniach, mapy ewakuacyjne, listy niezbędnych przedmiotów, komunikację z grupami sąsiedzkimi, oraz integrację z systemami ratunkowymi. SafeZoneX to nie tylko aplikacja - to Twój osobisty przewodnik przetrwania w świecie pełnym niepewności.',
      en: 'SafeZoneX is a revolutionary survival app that prepares you for every crisis scenario. In an era of global threats - from wars and armed conflicts, through earthquakes and tsunamis, to extreme weather conditions and ecological disasters - SafeZoneX provides instant access to current information about safe shelters. The app uses AI to analyze threats in real-time, maps safe zones and shelters, and provides practical survival tips. Features include: threat alerts, evacuation maps, essential items lists, communication with neighborhood groups, and integration with emergency systems. SafeZoneX is not just an app - it\'s your personal survival guide in a world full of uncertainty.',
      ru: 'SafeZoneX готовит к любому кризисному сценарию. ИИ анализирует угрозы в реальном времени, показывает безопасные зоны и убежища, даёт практические советы и чек‑листы. Есть оповещения, карты эвакуации, список необходимых вещей, связь с соседними группами и интеграции с экстренными службами. Это ваш персональный гид по выживанию.'
    },
    features: {
      pl: [
        'AI-powered analiza zagrożeń w czasie rzeczywistym z alertami o niebezpieczeństwach.',
        'Interaktywne mapy bezpiecznych schronień i stref ewakuacyjnych.',
        'Kompleksowe listy przedmiotów niezbędnych do przetrwania różnych scenariuszy.',
        'Komunikacja z grupami sąsiedzkimi i systemami ratunkowymi.',
        'Wskazówki survival dostosowane do konkretnych typów zagrożeń.',
        'Offline mode dla obszarów bez dostępu do internetu.'
      ],
      en: [
        'AI-powered real-time threat analysis with danger alerts.',
        'Interactive maps of safe shelters and evacuation zones.',
        'Comprehensive lists of essential items for surviving different scenarios.',
        'Communication with neighborhood groups and emergency systems.',
        'Survival tips tailored to specific types of threats.',
        'Offline mode for areas without internet access.'
      ],
      ru: [
        'AI‑анализ угроз в реальном времени и оповещения.',
        'Интерактивные карты убежищ и зон эвакуации.',
        'Чек‑листы необходимых вещей для разных сценариев.',
        'Связь с соседскими группами и экстренными службами.',
        'Советы по выживанию под конкретные угрозы.',
        'Офлайн‑режим без интернета.'
      ]
    },
    cta: {
      pl: 'Przygotuj się na kryzys',
      en: 'Prepare for crisis',
      ru: 'Подготовиться к кризису'
    },
    ctaNote: {
      pl: 'Beta testy wkrótce dostępne.',
      en: 'Beta testing coming soon.',
      ru: 'Бета‑тестирование скоро.'
    },
    accent: 'neon-1'
  },
  {
    slug: 'carfix-ai',
    name: 'CarFix AI',
    tagline: {
      pl: 'Szybka diagnoza usterek auta z AI.',
      en: 'Instant car issue diagnosis with AI.',
      ru: 'Быстрая диагностика авто с ИИ.'
    },
    shortDescription: {
      pl: 'Inteligentna aplikacja dla kierowców, która analizuje zdjęcia lub dźwięk samochodu, diagnozuje możliwe usterki i sugeruje kroki naprawcze.',
      en: 'Smart driver app that analyzes photos or car sounds, suggests possible issues, and recommends next repair steps.',
      ru: 'Умное приложение для водителей: анализ фото/звука, возможные неисправности и следующие шаги.'
    },
    description: {
      pl: 'CarFix AI to Twoje mobilne wsparcie techniczne, gdy samochód zaczyna zachowywać się nietypowo. Wystarczy zrobić zdjęcie elementu lub nagrać dźwięk silnika, a AI porówna sygnały z bazą typowych usterek. Otrzymujesz jasne wyjaśnienie możliwych przyczyn, priorytet ryzyka oraz listę bezpiecznych kroków do podjęcia (np. sprawdzenie płynów, filtrów, bezpieczników). Aplikacja została zaprojektowana tak, by pomagać w szybkiej ocenie sytuacji przed wizytą w warsztacie.',
      en: 'CarFix AI is your mobile mechanic helper when something sounds or looks off. Snap a photo of a component or record the engine sound and the AI compares signals against common issue patterns. You get a clear summary of possible causes, a risk priority, and a safe next-step checklist (fluids, filters, fuses, visible leaks). It’s built to help you assess the situation quickly before visiting a mechanic.',
      ru: 'CarFix AI — мобильный помощник, когда машина ведет себя странно. Сфотографируйте деталь или запишите звук двигателя, и ИИ сравнит сигнал с базой типичных неисправностей. Вы получите возможные причины, приоритет риска и безопасный чек‑лист следующих действий.'
    },
    features: {
      pl: [
        'Analiza zdjęć i dźwięku samochodu w celu wykrycia możliwych usterek.',
        'Sugerowane przyczyny problemu wraz z priorytetem bezpieczeństwa.',
        'Checklisty pierwszych kroków (co sprawdzić samodzielnie i kiedy przerwać jazdę).',
        'Historia zgłoszeń i porównań objawów w czasie.',
        'Słownik kodów i objawów w prostym języku.',
        'Tryb „przed wizytą w warsztacie” z pytaniami do mechanika.'
      ],
      en: [
        'Photo and sound analysis to detect possible car issues.',
        'Suggested root causes with safety-priority scoring.',
        'First-step checklists (what to verify yourself and when to stop driving).',
        'Issue history and symptom comparison over time.',
        'Plain-language glossary of codes and symptoms.',
        '“Before the mechanic” mode with key questions to ask.'
      ],
      ru: [
        'Анализ фото и звука для поиска возможных проблем.',
        'Вероятные причины с приоритетом безопасности.',
        'Чек‑листы первых шагов и когда лучше остановиться.',
        'История проблем и сравнение симптомов.',
        'Словарь кодов и симптомов простым языком.',
        'Режим «перед сервисом» с вопросами к механику.'
      ]
    },
    cta: {
      pl: 'Dołącz do testów beta',
      en: 'Join the beta',
      ru: 'Присоединиться к бета‑тесту'
    },
    ctaNote: {
      pl: 'Wersja startowa w przygotowaniu.',
      en: 'Launch version in preparation.',
      ru: 'Стартовая версия в подготовке.'
    },
    accent: 'neon-2'
  },
  {
    slug: 'healthsymptom-ai',
    name: 'HealthSymptom AI',
    tagline: {
      pl: 'Inteligentny analizator objawów dla codziennej profilaktyki.',
      en: 'Smart symptom insights for everyday health.',
      ru: 'Умный анализ симптомов для ежедневной заботы о здоровье.'
    },
    shortDescription: {
      pl: 'Wpisz objawy lub dodaj dane zdrowotne, a AI podpowie możliwe przyczyny i zaleci kolejne kroki — informacyjnie, bez diagnozy medycznej.',
      en: 'Describe symptoms or add health data to get AI-powered insights and next-step recommendations — informational only, not medical diagnosis.',
      ru: 'Опишите симптомы или добавьте данные — ИИ подскажет возможные причины и следующие шаги (информационно, не диагноз).'
    },
    description: {
      pl: 'HealthSymptom AI to praktyczne wsparcie dla osób, które chcą szybko zorientować się w swoich objawach. Aplikacja porządkuje informacje, wskazuje możliwe przyczyny i sugeruje, czy warto skonsultować się z lekarzem. Otrzymujesz też proste wskazówki dotyczące obserwacji, nawodnienia czy odpoczynku. To narzędzie edukacyjne, które pomaga podjąć świadomą decyzję o dalszych krokach.',
      en: 'HealthSymptom AI is a practical tool for quickly making sense of symptoms. It organizes your inputs, highlights possible causes, and suggests whether it may be worth contacting a professional. You’ll also see simple guidance about monitoring, hydration, and rest. It’s an educational assistant that helps you decide what to do next.',
      ru: 'HealthSymptom AI помогает быстро разобраться в симптомах. Приложение структурирует информацию, показывает возможные причины и подсказывает, стоит ли обратиться к специалисту. Также есть простые рекомендации по наблюдению, гидратации и отдыху. Это образовательный помощник для осознанных решений.'
    },
    features: {
      pl: [
        'Analiza objawów i możliwych przyczyn w jasnym języku.',
        'Podpowiedzi dotyczące dalszych kroków i pilności konsultacji.',
        'Dziennik objawów i obserwacji w czasie.',
        'Możliwość dodania podstawowych danych zdrowotnych (np. temperatura).',
        'Edukacyjne wskazówki dotyczące profilaktyki i samopomocy.',
        'Wyraźne komunikaty: aplikacja nie zastępuje lekarza.'
      ],
      en: [
        'Symptom analysis with clear, plain-language explanations.',
        'Suggested next steps and urgency guidance.',
        'Symptom journal to track changes over time.',
        'Optional basic health metrics input (e.g., temperature).',
        'Educational self-care and prevention tips.',
        'Transparent messaging: not a medical diagnosis.'
      ],
      ru: [
        'Анализ симптомов простым языком.',
        'Рекомендации следующих шагов и срочности.',
        'Дневник симптомов с динамикой.',
        'Добавление базовых показателей (например, температура).',
        'Советы по профилактике и самопомощи.',
        'Прозрачное сообщение: это не медицинский диагноз.'
      ]
    },
    cta: {
      pl: 'Wkrótce w wersji testowej',
      en: 'Testing version coming soon',
      ru: 'Тестовая версия скоро'
    },
    ctaNote: {
      pl: 'Planowane otwarte testy w 2026.',
      en: 'Open testing planned for 2026.',
      ru: 'Открытое тестирование в 2026.'
    },
    accent: 'neon-1'
  },
  {
    slug: 'explainlike-ai',
    name: 'ExplainLikeAI',
    tagline: {
      pl: 'Tłumaczenie trudnych tematów krok po kroku.',
      en: 'Complex topics explained step by step.',
      ru: 'Сложные темы простыми словами — шаг за шагом.'
    },
    shortDescription: {
      pl: 'Aplikacja edukacyjna, która tłumaczy trudne pojęcia prostym językiem, z przykładami i analogiami dopasowanymi do Twojego poziomu.',
      en: 'An educational app that breaks down complex topics into simple, personalized explanations with examples and analogies.',
      ru: 'Образовательное приложение, которое объясняет сложные понятия простым языком, с примерами и аналогиями.'
    },
    description: {
      pl: 'ExplainLikeAI to cyfrowy „tłumacz wiedzy”, który rozbija złożone zagadnienia na krótkie, zrozumiałe kroki. Wpisujesz pojęcie, wzór lub temat, a aplikacja generuje objaśnienie dopasowane do Twojego poziomu — od podstaw po warianty zaawansowane. Dzięki przykładom i analogiom łatwiej zapamiętasz to, czego się uczysz. To idealne narzędzie dla uczniów, studentów oraz osób samodzielnie rozwijających kompetencje.',
      en: 'ExplainLikeAI is a digital “knowledge translator” that turns complex topics into clear, bite-sized steps. Enter a concept, formula, or subject and the app generates an explanation tailored to your level — from beginner to advanced. With examples and analogies, concepts become easier to understand and remember. Perfect for students and self-learners.',
      ru: 'ExplainLikeAI — цифровой «переводчик знаний», который разбивает сложные темы на понятные шаги. Введите понятие или формулу — и получите объяснение под ваш уровень, с примерами и аналогиями. Идеально для учеников, студентов и самообучения.'
    },
    features: {
      pl: [
        'Wyjaśnienia w różnych poziomach trudności: od „dla początkujących” po „zaawansowane”.',
        'Przykłady i analogie, które ułatwiają zrozumienie tematu.',
        'Tryb krok-po-kroku z podsumowaniami po każdym etapie.',
        'Słownik pojęć i szybkie definicje.',
        'Możliwość zadawania pytań uzupełniających.',
        'Historia tematów i powtórek.'
      ],
      en: [
        'Difficulty levels from beginner to advanced.',
        'Examples and analogies that clarify meaning.',
        'Step-by-step mode with mini summaries.',
        'Fast glossary and definitions.',
        'Follow-up questions for deeper understanding.',
        'Topic history and review support.'
      ],
      ru: [
        'Уровни сложности: от новичка до продвинутого.',
        'Примеры и аналогии для лучшего понимания.',
        'Пошаговый режим с краткими итогами.',
        'Быстрые определения и словарь.',
        'Уточняющие вопросы для углубления.',
        'История тем и повторений.'
      ]
    },
    cta: {
      pl: 'Poznaj wersję demo',
      en: 'See the demo',
      ru: 'Посмотреть демо'
    },
    ctaNote: {
      pl: 'Wersja demo w przygotowaniu.',
      en: 'Demo version in preparation.',
      ru: 'Демо‑версия в подготовке.'
    },
    accent: 'neon-2'
  },
  {
    slug: 'interviewcoach-ai',
    name: 'InterviewCoach AI',
    tagline: {
      pl: 'Trenuj rozmowy rekrutacyjne z AI.',
      en: 'Practice interviews with AI coaching.',
      ru: 'Тренируй собеседования с AI‑коучем.'
    },
    shortDescription: {
      pl: 'AI symuluje rozmowy kwalifikacyjne, analizuje odpowiedzi i daje feedback, abyś był lepiej przygotowany do prawdziwego interview.',
      en: 'AI simulates interviews, analyzes your answers, and provides feedback to help you prepare for real hiring conversations.',
      ru: 'ИИ симулирует интервью, анализирует ответы и даёт обратную связь для лучшей подготовки.'
    },
    description: {
      pl: 'InterviewCoach AI to wirtualny trener rekrutacyjny, który ćwiczy z Tobą scenariusze rozmów o pracę. Aplikacja zadaje pytania dopasowane do stanowiska i branży, a następnie ocenia treść odpowiedzi, spójność i klarowność. Otrzymujesz konkretne sugestie poprawy: czego unikać, jak lepiej argumentować i jak budować pewność siebie. Idealne narzędzie przed ważną rekrutacją.',
      en: 'InterviewCoach AI is your virtual hiring trainer. It asks role-specific questions, evaluates the clarity and structure of your answers, and suggests improvements: what to avoid, how to argue your strengths, and how to build confidence. A perfect practice tool before important interviews.',
      ru: 'InterviewCoach AI — виртуальный тренер собеседований. Он задаёт вопросы по роли, оценивает ясность ответов и предлагает улучшения: что избегать, как лучше аргументировать и повысить уверенность.'
    },
    features: {
      pl: [
        'Symulacje rozmów dla różnych stanowisk i poziomów doświadczenia.',
        'Feedback jakości odpowiedzi oraz proponowane lepsze sformułowania.',
        'Tryb „pytania behawioralne” i „case study”.',
        'Analiza tempa i długości odpowiedzi (tekst/voice).',
        'Lista mocnych stron i obszarów do poprawy.',
        'Historia sesji i postępów.'
      ],
      en: [
        'Interview simulations for multiple roles and seniority levels.',
        'Answer quality feedback with better phrasing suggestions.',
        'Behavioral and case-study question modes.',
        'Pace and length analysis (text/voice).',
        'Strengths and improvement areas summary.',
        'Session history and progress tracking.'
      ],
      ru: [
        'Симуляции для разных ролей и уровней.',
        'Фидбек по качеству ответов и улучшенные формулировки.',
        'Режимы: поведенческие вопросы и кейсы.',
        'Анализ темпа и длины ответа (текст/голос).',
        'Сильные стороны и зоны роста.',
        'История сессий и прогресса.'
      ]
    },
    cta: {
      pl: 'Dołącz do listy oczekujących',
      en: 'Join the waitlist',
      ru: 'Присоединиться к листу ожидания'
    },
    ctaNote: {
      pl: 'Pierwsze testy wkrótce.',
      en: 'Early tests coming soon.',
      ru: 'Ранние тесты скоро.'
    },
    accent: 'neon-1'
  },
  {
    slug: 'memoryboost-ai',
    name: 'MemoryBoost AI',
    tagline: {
      pl: 'Trenuj pamięć i koncentrację z AI.',
      en: 'Train memory and focus with AI.',
      ru: 'Тренируй память и концентрацию с ИИ.'
    },
    shortDescription: {
      pl: 'Spersonalizowane ćwiczenia pamięciowe, gry i wyzwania, które wzmacniają zapamiętywanie i koncentrację.',
      en: 'Personalized memory exercises, games, and challenges that strengthen recall and focus.',
      ru: 'Персональные тренировки памяти, игры и челленджи для лучшей концентрации.'
    },
    description: {
      pl: 'MemoryBoost AI to aplikacja, która pomaga budować lepszą pamięć dzięki codziennym treningom. AI dobiera zadania do Twojego poziomu i celów, a także monitoruje postępy w czasie. Otrzymujesz krótkie, skuteczne sesje treningowe, które możesz wykonać w kilka minut dziennie. To świetne wsparcie w nauce, pracy i codziennym funkcjonowaniu.',
      en: 'MemoryBoost AI helps you build stronger memory with daily training sessions. The AI selects tasks based on your level and goals, while tracking your progress over time. Short, effective exercises fit into just a few minutes per day. It’s a perfect support for learning, work, and everyday life.',
      ru: 'MemoryBoost AI помогает укреплять память с ежедневными тренировками. ИИ подбирает задания под ваш уровень и цели, отслеживает прогресс. Короткие сессии занимают всего несколько минут в день.'
    },
    features: {
      pl: [
        'Personalizowane ćwiczenia pamięciowe i koncentracyjne.',
        'Tryb powtórek oparty na systemie spaced repetition.',
        'Gry i wyzwania poprawiające szybkość reakcji i zapamiętywanie.',
        'Statystyki postępów oraz tygodniowe cele.',
        'Codzienne mikro-treningi 5–10 minut.',
        'Tryb relaksacyjny wspierający koncentrację.'
      ],
      en: [
        'Personalized memory and focus workouts.',
        'Spaced-repetition review mode.',
        'Games and challenges to improve recall speed.',
        'Progress stats and weekly goals.',
        'Daily micro-sessions (5–10 minutes).',
        'Focus-friendly relaxation mode.'
      ],
      ru: [
        'Персональные тренировки памяти и внимания.',
        'Режим повторения по методике spaced repetition.',
        'Игры и челленджи для скорости и запоминания.',
        'Статистика прогресса и недельные цели.',
        'Ежедневные микро‑тренировки 5–10 минут.',
        'Релакс‑режим для концентрации.'
      ]
    },
    cta: {
      pl: 'Zacznij trenować',
      en: 'Start training',
      ru: 'Начать тренировки'
    },
    ctaNote: {
      pl: 'Wersja beta już wkrótce.',
      en: 'Beta version coming soon.',
      ru: 'Бета‑версия скоро.'
    },
    accent: 'neon-2'
  },
  {
    slug: 'contractscan-ai',
    name: 'ContractScan AI',
    tagline: {
      pl: 'Umowy w prostym języku.',
      en: 'Contracts explained in plain language.',
      ru: 'Договоры простым языком.'
    },
    shortDescription: {
      pl: 'Aplikacja skanuje umowy i tłumaczy je prostym językiem, wskazując ryzykowne zapisy przed podpisaniem.',
      en: 'Scan contracts and get plain-language summaries with risk highlights before signing.',
      ru: 'Сканируйте договоры и получайте простые объяснения с отмеченными рисками.'
    },
    description: {
      pl: 'ContractScan AI pomaga szybciej zrozumieć zapisy w umowach. Wystarczy dodać dokument, a AI streszcza kluczowe punkty, podświetla ryzykowne zapisy i wyjaśnia je prostym językiem. To wsparcie dla osób, które chcą świadomie podpisywać dokumenty, bez żmudnego analizowania długich paragrafów.',
      en: 'ContractScan AI helps you understand contract clauses faster. Upload a document and the AI summarizes key points, highlights risky clauses, and explains them in plain language. It’s support for anyone who wants to sign documents with confidence, without reading long legal text line by line.',
      ru: 'ContractScan AI помогает быстрее понять условия договора. Загрузите документ — ИИ выделит ключевые пункты, рискованные формулировки и объяснит их простым языком.'
    },
    features: {
      pl: [
        'Skan dokumentu i automatyczne streszczenie kluczowych zapisów.',
        'Wykrywanie ryzykownych klauzul oraz alerty.',
        'Tłumaczenie zapisów na prosty język.',
        'Lista punktów do sprawdzenia przed podpisaniem.',
        'Porównanie wersji dokumentów.',
        'Historia analiz i eksport notatek.'
      ],
      en: [
        'Document scan with automatic key-point summary.',
        'Risky clause detection and alerts.',
        'Plain-language explanations.',
        'Checklist of what to verify before signing.',
        'Document version comparison.',
        'Analysis history and note export.'
      ],
      ru: [
        'Скан документа и автоматическое резюме.',
        'Выявление рискованных пунктов и предупреждения.',
        'Пояснения простым языком.',
        'Чек‑лист перед подписанием.',
        'Сравнение версий документов.',
        'История анализов и экспорт заметок.'
      ]
    },
    cta: {
      pl: 'Sprawdź wersję testową',
      en: 'Check the test build',
      ru: 'Посмотреть тестовую версию'
    },
    ctaNote: {
      pl: 'Projekt w trakcie rozwoju.',
      en: 'Project in development.',
      ru: 'Проект в разработке.'
    },
    accent: 'neon-1'
  },
  {
    slug: 'studyplanner-ai',
    name: 'StudyPlanner AI',
    tagline: {
      pl: 'Twój osobisty plan nauki.',
      en: 'Your personal study roadmap.',
      ru: 'Ваш персональный план обучения.'
    },
    shortDescription: {
      pl: 'AI układa spersonalizowane harmonogramy nauki, przypomina o zadaniach i pomaga w przygotowaniu do egzaminów.',
      en: 'AI builds personalized study schedules, sends reminders, and guides you toward exam readiness.',
      ru: 'ИИ строит персональные планы обучения, напоминания и подготовку к экзаменам.'
    },
    description: {
      pl: 'StudyPlanner AI to inteligentny asystent, który organizuje naukę w oparciu o Twój czas, cele i tempo. Aplikacja dzieli materiał na mniejsze etapy, planuje powtórki i monitoruje realizację. Dzięki temu uczysz się systematycznie i bez stresu, a AI koryguje plan, gdy zmienia się Twój harmonogram.',
      en: 'StudyPlanner AI is a smart assistant that organizes your learning based on your time, goals, and pace. It breaks material into smaller steps, schedules reviews, and tracks completion. You learn consistently and with less stress, while the AI adapts the plan as your schedule changes.',
      ru: 'StudyPlanner AI организует обучение по вашему времени, целям и темпу. Делит материал на этапы, планирует повторения и отслеживает выполнение, адаптируя план при изменениях графика.'
    },
    features: {
      pl: [
        'Automatyczne tworzenie planu nauki pod egzaminy lub cele.',
        'System powtórek i priorytetów oparty na postępach.',
        'Przypomnienia i powiadomienia o zadaniach.',
        'Elastyczne dostosowanie planu w razie zmian w grafiku.',
        'Widok kalendarza i listy zadań.',
        'Raporty skuteczności nauki.'
      ],
      en: [
        'Automatic study plan creation for exams or goals.',
        'Progress-based review and priority system.',
        'Task reminders and notifications.',
        'Flexible rescheduling when your calendar changes.',
        'Calendar and task list views.',
        'Study effectiveness reports.'
      ],
      ru: [
        'Автоматическое создание плана обучения.',
        'Система повторений и приоритетов по прогрессу.',
        'Напоминания о задачах.',
        'Гибкое изменение плана при смене графика.',
        'Календарь и список задач.',
        'Отчёты эффективности обучения.'
      ]
    },
    cta: {
      pl: 'Zaplanuj naukę',
      en: 'Plan your study',
      ru: 'Спланировать обучение'
    },
    ctaNote: {
      pl: 'Wersja beta w przygotowaniu.',
      en: 'Beta version in preparation.',
      ru: 'Бета‑версия в подготовке.'
    },
    accent: 'neon-2'
  },
  {
    slug: 'tikplant-ai',
    name: 'TikPlant AI',
    tagline: {
      pl: 'AI opiekun Twoich roślin.',
      en: 'AI care for your plants.',
      ru: 'ИИ‑забота о ваших растениях.'
    },
    shortDescription: {
      pl: 'Rozpoznawanie gatunków, diagnoza chorób i personalizowane wskazówki pielęgnacji dla Twoich roślin.',
      en: 'Plant identification, disease detection, and personalized care tips for healthier growth.',
      ru: 'Определение вида, диагностика болезней и персональные советы по уходу.'
    },
    description: {
      pl: 'TikPlant AI to przyjazny doradca roślinny, który rozpoznaje gatunki ze zdjęcia i podpowiada, jak je pielęgnować. Aplikacja wskazuje problemy (np. szkodniki, niedobory) i doradza, jak poprawić podlewanie, światło czy nawożenie. Dzięki temu Twoje rośliny rosną zdrowiej, a Ty masz pewność, że dbasz o nie właściwie.',
      en: 'TikPlant AI is a friendly plant advisor that identifies species from photos and guides your care routine. It flags potential issues (pests, deficiencies) and recommends improvements in watering, light, and fertilization. Your plants grow healthier while you stay confident about their care.',
      ru: 'TikPlant AI распознаёт растения по фото и подсказывает уход. Приложение выявляет проблемы (вредители, дефициты) и рекомендует полив, свет и питание, чтобы растения росли здоровыми.'
    },
    features: {
      pl: [
        'Rozpoznawanie gatunków roślin na podstawie zdjęcia.',
        'Diagnoza chorób i szkodników z rekomendacjami.',
        'Personalizowane wskazówki podlewania i nawożenia.',
        'Harmonogram pielęgnacji i przypomnienia.',
        'Biblioteka porad dla roślin domowych i ogrodowych.',
        'Tryb „ratunek rośliny” z szybką checklistą.'
      ],
      en: [
        'Plant species identification from photos.',
        'Disease and pest diagnosis with recommendations.',
        'Personalized watering and fertilizing tips.',
        'Care schedules and reminders.',
        'Guides for indoor and garden plants.',
        'Plant rescue mode with quick checklists.'
      ],
      ru: [
        'Распознавание вида по фото.',
        'Диагностика болезней и вредителей с рекомендациями.',
        'Персональные советы по поливу и удобрениям.',
        'График ухода и напоминания.',
        'Библиотека советов для домашних и садовых растений.',
        'Режим «спасение растения» с быстрым чек‑листом.'
      ]
    },
    cta: {
      pl: 'Zadbaj o rośliny',
      en: 'Care for your plants',
      ru: 'Позаботиться о растениях'
    },
    ctaNote: {
      pl: 'Start publicznych testów wkrótce.',
      en: 'Public testing coming soon.',
      ru: 'Публичные тесты скоро.'
    },
    accent: 'neon-1'
  },
  {
    slug: 'tikfinance-ai',
    name: 'TikFinance AI',
    tagline: {
      pl: 'Globalny budżet w Twojej kieszeni.',
      en: 'Global treasury in your pocket.',
      ru: 'Глобальный бюджет в вашем кармане.'
    },
    shortDescription: {
      pl: 'AI pomaga śledzić wydatki, planować budżet i analizować finanse w wielu walutach — przejrzyście i bezpiecznie.',
      en: 'AI helps track spending, plan budgets, and analyze finances across currencies in a clear, secure way.',
      ru: 'ИИ помогает учитывать расходы, планировать бюджет и анализировать финансы в разных валютах.'
    },
    description: {
      pl: 'TikFinance AI to osobisty asystent finansowy, który porządkuje Twoje wydatki i pomaga planować budżet. Aplikacja prezentuje kategorie kosztów, trendy i prognozy, a także podpowiada, gdzie można zoptymalizować wydatki. Działa globalnie — obsługuje wiele walut i ułatwia kontrolę finansów podczas podróży. To narzędzie informacyjne, nie doradztwo inwestycyjne.',
      en: 'TikFinance AI is a personal finance assistant that organizes spending and helps you plan budgets. It shows category breakdowns, trends, and projections, while suggesting areas to optimize. It supports multiple currencies, making it useful when you travel. This is an informational tool, not investment advice.',
      ru: 'TikFinance AI — персональный финансовый помощник. Он структурирует расходы, показывает категории, тренды и прогнозы, а также предлагает, где можно оптимизировать бюджет. Поддерживает многие валюты. Это информационный инструмент, не инвестиционный совет.'
    },
    features: {
      pl: [
        'Automatyczna kategoryzacja wydatków i analiza trendów.',
        'Budżety miesięczne z alertami przekroczeń.',
        'Obsługa wielu walut i konwersji w czasie rzeczywistym.',
        'Prognozy cashflow i podsumowania miesięczne.',
        'Cele oszczędnościowe i śledzenie postępów.',
        'Bezpieczne przechowywanie danych z szyfrowaniem.'
      ],
      en: [
        'Automatic expense categorization and trend analysis.',
        'Monthly budgets with over-limit alerts.',
        'Multi-currency support with real-time conversion.',
        'Cashflow projections and monthly summaries.',
        'Savings goals and progress tracking.',
        'Encrypted, secure data handling.'
      ],
      ru: [
        'Автокатегоризация расходов и анализ трендов.',
        'Месячные бюджеты с уведомлениями о превышении.',
        'Поддержка валют и конвертация в реальном времени.',
        'Прогнозы cash‑flow и месячные отчёты.',
        'Цели накоплений и отслеживание прогресса.',
        'Безопасное хранение с шифрованием.'
      ]
    },
    cta: {
      pl: 'Sprawdź roadmapę',
      en: 'View the roadmap',
      ru: 'Посмотреть дорожную карту'
    },
    ctaNote: {
      pl: 'Funkcje premium planowane na 2026.',
      en: 'Premium features planned for 2026.',
      ru: 'Премиум‑функции планируются на 2026.'
    },
    accent: 'neon-2'
  },
  {
    slug: 'tikspacez-ai',
    name: 'TikSpaceZ AI',
    tagline: {
      pl: 'Kosmos w Twojej dłoni.',
      en: 'The universe in your palm.',
      ru: 'Космос на ладони.'
    },
    shortDescription: {
      pl: 'Identyfikuj gwiazdy i planety, śledź satelity i odkrywaj zjawiska astronomiczne w czasie rzeczywistym.',
      en: 'Identify stars and planets, track satellites, and explore real-time astronomy events.',
      ru: 'Определяйте звёзды и планеты, отслеживайте спутники и события в реальном времени.'
    },
    description: {
      pl: 'TikSpaceZ AI to aplikacja dla miłośników nieba. Wystarczy skierować telefon w stronę nieba, by rozpoznać gwiazdy, planety i konstelacje. Aplikacja podpowiada najlepsze godziny obserwacji, pokazuje aktualne zjawiska i informuje o przelotach satelitów. Idealna dla ciekawych świata, uczniów i fanów astronomii.',
      en: 'TikSpaceZ AI is a sky companion for astronomy lovers. Point your phone at the sky to identify stars, planets, and constellations. The app suggests the best viewing times, highlights current events, and notifies you about satellite passes. Perfect for curious minds and space fans.',
      ru: 'TikSpaceZ AI — помощник для любителей неба. Наведите телефон на небо, чтобы распознать звёзды, планеты и созвездия. Приложение подсказывает лучшие часы наблюдения и сообщает о пролётах спутников.'
    },
    features: {
      pl: [
        'Rozpoznawanie obiektów na niebie w czasie rzeczywistym.',
        'Mapa nieba z konstelacjami i opisami.',
        'Powiadomienia o zjawiskach astronomicznych i przelotach satelitów.',
        'Tryb „nauka” z ciekawostkami i wiedzą o kosmosie.',
        'Tryb nocny przyjazny dla oczu.',
        'Historia obserwacji i ulubione obiekty.'
      ],
      en: [
        'Real-time sky object identification.',
        'Sky map with constellations and info.',
        'Alerts for astronomy events and satellite passes.',
        'Learning mode with space facts.',
        'Eye-friendly night mode.',
        'Observation history and favorites.'
      ],
      ru: [
        'Распознавание объектов на небе в реальном времени.',
        'Карта неба с созвездиями и описаниями.',
        'Оповещения о астрономических событиях и пролётах спутников.',
        'Обучающий режим с фактами о космосе.',
        'Ночной режим, комфортный для глаз.',
        'История наблюдений и избранное.'
      ]
    },
    cta: {
      pl: 'Odkrywaj kosmos',
      en: 'Explore space',
      ru: 'Открывать космос'
    },
    ctaNote: {
      pl: 'Premiera planowana na 2026.',
      en: 'Launch planned for 2026.',
      ru: 'Запуск планируется в 2026.'
    },
    accent: 'neon-1'
  },
  {
    slug: 'tikdietx-ai',
    name: 'TikDietX AI',
    tagline: {
      pl: 'Inteligentny przewodnik dietetyczny.',
      en: 'Your intelligent nutrition guide.',
      ru: 'Ваш умный диетический гид.'
    },
    shortDescription: {
      pl: 'Spersonalizowane plany żywieniowe, przepisy i monitoring postępów – wszystko dopasowane do Twoich celów.',
      en: 'Personalized nutrition plans, recipes, and progress tracking tailored to your goals.',
      ru: 'Персональные планы питания, рецепты и отслеживание прогресса под ваши цели.'
    },
    description: {
      pl: 'TikDietX AI analizuje Twoje cele, preferencje i styl życia, aby zaproponować dopasowany plan żywieniowy. Aplikacja pomaga planować posiłki, liczyć kalorie i monitorować postępy, jednocześnie dbając o wygodę i równowagę. To narzędzie edukacyjne i motywacyjne wspierające zdrowe nawyki.',
      en: 'TikDietX AI analyzes your goals, preferences, and lifestyle to generate a tailored nutrition plan. It helps plan meals, track calories, and monitor progress while focusing on balance and convenience. It’s an educational and motivational tool for building healthy habits.',
      ru: 'TikDietX AI анализирует цели и привычки, чтобы предложить персональный план питания. Помогает планировать приёмы пищи, считать калории и отслеживать прогресс, поддерживая баланс и удобство.'
    },
    features: {
      pl: [
        'Spersonalizowane plany dietetyczne i listy zakupów.',
        'Monitorowanie kalorii, makroskładników i nawodnienia.',
        'Baza przepisów z filtrami (alergie, preferencje).',
        'Cele zdrowotne i śledzenie postępów.',
        'Przypomnienia o posiłkach i nawykach.',
        'Tryb „prosty plan” dla zabieganych.'
      ],
      en: [
        'Personalized meal plans and shopping lists.',
        'Calorie, macro, and hydration tracking.',
        'Recipe database with allergy and preference filters.',
        'Health goals and progress tracking.',
        'Meal and habit reminders.',
        '“Simple plan” mode for busy users.'
      ],
      ru: [
        'Персональные планы питания и списки покупок.',
        'Отслеживание калорий, БЖУ и воды.',
        'База рецептов с фильтрами (аллергии, предпочтения).',
        'Цели здоровья и мониторинг прогресса.',
        'Напоминания о питании и привычках.',
        'Режим «простой план» для занятых.'
      ]
    },
    cta: {
      pl: 'Zacznij zdrowiej jeść',
      en: 'Start eating smarter',
      ru: 'Начать питаться лучше'
    },
    ctaNote: {
      pl: 'Testy użytkowników wkrótce.',
      en: 'User testing coming soon.',
      ru: 'Пользовательские тесты скоро.'
    },
    accent: 'neon-2'
  },
  {
    slug: 'tipexam-ai',
    name: 'TipExam AI',
    tagline: {
      pl: 'Globalna nauka do egzaminów zawodowych.',
      en: 'Global vocational exam preparation.',
      ru: 'Глобальная подготовка к профессиональным экзаменам.'
    },
    shortDescription: {
      pl: 'TipExam AI pomaga przygotować się do egzaminów zawodowych na całym świecie — od szkół branżowych po służby i szkoły policyjne.',
      en: 'TipExam AI helps prepare for vocational exams worldwide — from trade schools to services and police academies.',
      ru: 'TipExam AI помогает готовиться к профессиональным экзаменам по всему миру — от колледжей до полицейских школ.'
    },
    description: {
      pl: 'TipExam AI to platforma do nauki i treningu egzaminów zawodowych w skali globalnej. Aplikacja dobiera materiał do konkretnego kraju, zawodu i programu szkoleniowego, oferując pytania, testy, scenariusze praktyczne oraz krótkie powtórki. Dzięki AI dostajesz personalizowane ścieżki nauki, analizę wyników i rekomendacje, co warto poprawić. To wsparcie dla szkół branżowych, technicznych, kursów certyfikacyjnych oraz szkół służb mundurowych, w tym policyjnych — z naciskiem na realne przygotowanie do egzaminu.',
      en: 'TipExam AI is a global exam-prep platform for vocational qualifications. The app adapts content to a specific country, profession, and curriculum, offering questions, tests, practical scenarios, and quick reviews. With AI personalization, you get tailored study paths, performance analysis, and targeted improvement tips. It supports trade schools, technical programs, certification courses, and uniformed service academies — with a focus on real-world exam readiness.',
      ru: 'TipExam AI — платформа подготовки к профессиональным экзаменам. Материалы подбираются по стране, профессии и программе обучения: тесты, практические сценарии, краткие повторения. ИИ персонализирует обучение, анализирует результаты и подсказывает, что улучшить.'
    },
    features: {
      pl: [
        'Bazy pytań i testów dopasowane do kraju, zawodu i programu nauczania.',
        'Tryby: nauka, test próbny, egzamin na czas, scenariusze praktyczne.',
        'AI analizująca błędy i rekomendująca kolejne kroki nauki.',
        'Szybkie powtórki i fiszki dla kluczowych pojęć zawodowych.',
        'Panel postępów z raportami i celami tygodniowymi.',
        'Wsparcie dla szkół i instruktorów (tryb klasowy w planach).'
      ],
      en: [
        'Question banks tailored to country, profession, and curriculum.',
        'Modes: study, mock test, timed exam, practical scenarios.',
        'AI error analysis with next-step recommendations.',
        'Quick reviews and flashcards for key vocational concepts.',
        'Progress dashboard with reports and weekly goals.',
        'Support for schools and instructors (classroom mode planned).'
      ],
      ru: [
        'Базы вопросов и тестов по стране, профессии и программе.',
        'Режимы: обучение, пробный тест, экзамен на время, практические сценарии.',
        'Анализ ошибок и рекомендации следующих шагов.',
        'Быстрые повторения и карточки по ключевым понятиям.',
        'Панель прогресса с отчётами и недельными целями.',
        'Поддержка школ и инструкторов (классный режим в планах).'
      ]
    },
    cta: {
      pl: 'Dołącz do programu pilotażowego',
      en: 'Join the pilot program',
      ru: 'Присоединиться к пилотной программе'
    },
    ctaNote: {
      pl: 'Cel: globalne wdrożenia w 2026.',
      en: 'Target: global rollouts in 2026.',
      ru: 'Цель: глобальные запуски в 2026.'
    },
    accent: 'neon-1'
  },
  {
    slug: 'tikcorporate-ai',
    name: 'TikCorporate AI',
    tagline: {
      pl: 'Global Business Treasury w Twojej kieszeni.',
      en: 'Global business treasury in your pocket.',
      ru: 'Глобальная корпоративная казна в вашем кармане.'
    },
    shortDescription: {
      pl: 'Inteligentna aplikacja finansowo‑skarbowościowa dla firm, która analizuje cashflow, koszty, podatki i płynność w czasie rzeczywistym.',
      en: 'An intelligent finance and treasury app for companies, tracking cashflow, costs, taxes, and liquidity in real time.',
      ru: 'Интеллектуальное финансово‑казначейское приложение для бизнеса с анализом cashflow, расходов, налогов и ликвидности.'
    },
    description: {
      pl: 'TikCorporate AI to narzędzie dla firm i przedsiębiorców, które upraszcza zarządzanie finansami. Aplikacja monitoruje przychody i wydatki, pomaga planować budżety, kontrolować podatki oraz optymalizować koszty. Dzięki analizie płynności w czasie rzeczywistym daje szybki obraz kondycji firmy. Działa globalnie i wspiera wiele walut, aby decyzje finansowe były możliwe niezależnie od kraju.',
      en: 'TikCorporate AI is a finance and treasury tool for companies and entrepreneurs. It monitors income and expenses, supports budgeting, helps track taxes, and optimizes costs. Real‑time liquidity analysis provides a clear view of company health. It works globally with multi‑currency support so you can make fast, informed decisions anywhere.',
      ru: 'TikCorporate AI — инструмент для компаний и предпринимателей, упрощающий финансы. Приложение отслеживает доходы и расходы, помогает планировать бюджеты, контролировать налоги и оптимизировать издержки. Анализ ликвидности в реальном времени даёт ясную картину состояния бизнеса. Глобальная работа и мультивалютность позволяют принимать быстрые решения в любой стране.'
    },
    features: {
      pl: [
        'Analiza cashflow i płynności w czasie rzeczywistym.',
        'Budżety działów i projektów z alertami odchyleń.',
        'Kontrola podatków i terminów zobowiązań.',
        'Wielowalutowe raporty i konwersje.',
        'Wykrywanie anomalii kosztowych i rekomendacje oszczędności.',
        'Bezpieczne role i dostęp dla zespołu (w planach).' 
      ],
      en: [
        'Real‑time cashflow and liquidity analysis.',
        'Department/project budgets with variance alerts.',
        'Tax tracking and obligations calendar.',
        'Multi‑currency reporting and conversions.',
        'Cost anomaly detection with savings recommendations.',
        'Secure team roles and access (planned).'
      ],
      ru: [
        'Анализ cashflow и ликвидности в реальном времени.',
        'Бюджеты отделов/проектов с уведомлениями об отклонениях.',
        'Контроль налогов и календарь обязательств.',
        'Мультивалютные отчёты и конвертация.',
        'Выявление аномалий расходов и рекомендации по экономии.',
        'Безопасные роли и доступ для команды (в планах).'
      ]
    },
    cta: {
      pl: 'Dołącz do listy firm testowych',
      en: 'Join the business beta',
      ru: 'Присоединиться к бизнес‑бете'
    },
    ctaNote: {
      pl: 'Model subskrypcyjny. Start pilotażu w 2026.',
      en: 'Subscription model. Pilot starts in 2026.',
      ru: 'Подписка. Пилот в 2026.'
    },
    accent: 'neon-2'
  },
  {
    slug: 'ai-house-redesign',
    name: 'AI House Redesign',
    tagline: {
      pl: 'Przeprojektuj swój dom z AI.',
      en: 'Redesign your home with AI.',
      ru: 'Перепроектируйте дом с AI.'
    },
    shortDescription: {
      pl: 'AI House Redesign to aplikacja mobilna oparta na sztucznej inteligencji, która pozwala użytkownikom na przeprojektowanie i wizualizację wnętrz i zewnętrz domu.',
      en: 'AI House Redesign is an AI-powered mobile app that allows users to redesign and visualize home interiors and exteriors.',
      ru: 'AI House Redesign — мобильное приложение на базе ИИ, позволяющее пользователям перепроектировать и визуализировать интерьеры и экстерьеры дома.'
    },
    description: {
      pl: 'AI House Redesign to aplikacja mobilna oparta na sztucznej inteligencji, która pozwala użytkownikom na przeprojektowanie i wizualizację wnętrz i zewnętrz domu. Użytkownicy mogą przesyłać zdjęcia, maski, podpowiedzi i generować redesigny z wykorzystaniem AI.',
      en: 'AI House Redesign is an AI-powered mobile app that allows users to redesign and visualize home interiors and exteriors. Users can upload photos, masks, prompts, and generate AI-powered redesigns.',
      ru: 'AI House Redesign — мобильное приложение на базе ИИ, позволяющее пользователям перепроектировать и визуализировать интерьеры и экстерьеры дома. Пользователи могут загружать фото, маски, подсказки и генерировать redesignы с помощью ИИ.'
    },
    features: {
      pl: [
        'Przesyłanie zdjęć wnętrz i zewnętrz domu.',
        'Generowanie redesignów z AI.',
        'Personalizowane podpowiedzi i maski.',
        'Wizualizacja zmian w czasie rzeczywistym.',
        'Bezpieczne przechowywanie danych.'
      ],
      en: [
        'Upload photos of home interiors and exteriors.',
        'Generate AI-powered redesigns.',
        'Personalized prompts and masks.',
        'Real-time visualization of changes.',
        'Secure data storage.'
      ],
      ru: [
        'Загрузка фото интерьеров и экстерьеров дома.',
        'Генерация redesignов с помощью ИИ.',
        'Персонализированные подсказки и маски.',
        'Визуализация изменений в реальном времени.',
        'Безопасное хранение данных.'
      ]
    },
    cta: {
      pl: 'Dołącz do bety',
      en: 'Join the beta',
      ru: 'Присоединиться к бете'
    },
    accent: 'neon-1'
  },
  {
    slug: 'taxpilot-ai',
    name: 'TaxPilot AI',
    tagline: {
      pl: 'Twój osobisty asystent podatkowy w telefonie.',
      en: 'Your personal tax assistant in your pocket.',
      ru: 'Ваш личный налоговый помощник в кармане.'
    },
    shortDescription: {
      pl: 'TaxPilot AI to inteligentna aplikacja, która zastępuje tradycyjnego księgowego – pomaga w rozliczeniach podatkowych, monitoruje terminy i optymalizuje odliczenia.',
      en: 'TaxPilot AI is an intelligent app that replaces traditional accountants – helps with tax settlements, monitors deadlines, and optimizes deductions.',
      ru: 'TaxPilot AI — интеллектуальное приложение, заменяющее традиционного бухгалтера – помогает с налоговыми расчётами, отслеживает сроки и оптимизирует вычеты.'
    },
    description: {
      pl: 'TaxPilot AI to rewolucyjna aplikacja podatkowa wykorzystująca sztuczną inteligencję do uproszczenia rozliczeń podatkowych. Aplikacja automatycznie analizuje Twoje przychody i wydatki, sugeruje optymalne odliczenia i przypomina o terminach płatności. Dzięki zaawansowanym algorytmom AI możesz mieć pewność, że nie przepłacasz podatków i nie przegapiasz żadnych ulg. TaxPilot AI monitoruje zmiany w przepisach podatkowych i automatycznie dostosowuje rekomendacje do aktualnych regulacji. To jak posiadanie osobistego doradcy podatkowego dostępnego 24/7 – idealne dla przedsiębiorców, freelancerów i wszystkich, którzy chcą mieć pełną kontrolę nad swoimi finansami. Z TaxPilot AI rozliczenia podatkowe stają się prostsze, szybsze i bardziej precyzyjne niż kiedykolwiek.',
      en: 'TaxPilot AI is a revolutionary tax application using artificial intelligence to simplify tax settlements. The app automatically analyzes your income and expenses, suggests optimal deductions, and reminds you of payment deadlines. Thanks to advanced AI algorithms, you can be sure you\'re not overpaying taxes and not missing any benefits. TaxPilot AI monitors changes in tax regulations and automatically adjusts recommendations to current laws. It\'s like having a personal tax advisor available 24/7 – perfect for entrepreneurs, freelancers, and anyone who wants full control over their finances. With TaxPilot AI, tax settlements become simpler, faster, and more accurate than ever before.',
      ru: 'TaxPilot AI — революционное налоговое приложение, использующее искусственный интеллект для упрощения налоговых расчётов. Приложение автоматически анализирует ваши доходы и расходы, предлагает оптимальные вычеты и напоминает о сроках платежей. Благодаря продвинутым AI-алгоритмам вы можете быть уверены, что не переплачиваете налоги и не упускаете льготы. TaxPilot AI отслеживает изменения в налоговом законодательстве и автоматически адаптирует рекомендации к актуальным нормам. Это как личный налоговый консультант 24/7 – идеально для предпринимателей, фрилансеров и всех, кто хочет полный контроль над финансами. С TaxPilot AI налоговые расчёты становятся проще, быстрее и точнее.'
    },
    features: {
      pl: [
        'Automatyczna analiza przychodów i wydatków z inteligentną kategoryzacją.',
        'AI-asystent sugerujący optymalne odliczenia i ulgi podatkowe.',
        'Monitorowanie terminów płatności i automatyczne przypomnienia.',
        'Śledzenie zmian w przepisach podatkowych i dostosowywanie rekomendacji.',
        'Generowanie raportów podatkowych i przygotowywanie deklaracji.',
        'Bezpieczne przechowywanie dokumentów i szyfrowanie danych osobowych.'
      ],
      en: [
        'Automatic income and expense analysis with intelligent categorization.',
        'AI assistant suggesting optimal deductions and tax benefits.',
        'Payment deadline monitoring with automatic reminders.',
        'Tracking tax law changes and adjusting recommendations.',
        'Generating tax reports and preparing declarations.',
        'Secure document storage and personal data encryption.'
      ],
      ru: [
        'Автоматический анализ доходов и расходов с умной категоризацией.',
        'AI-ассистент для оптимальных вычетов и налоговых льгот.',
        'Отслеживание сроков платежей с автоматическими напоминаниями.',
        'Мониторинг изменений в налоговом законодательстве и корректировка рекомендаций.',
        'Генерация налоговых отчётов и подготовка деклараций.',
        'Безопасное хранение документов и шифрование персональных данных.'
      ]
    },
    cta: {
      pl: 'Dołącz do wczesnego dostępu',
      en: 'Join early access',
      ru: 'Присоединиться к раннему доступу'
    },
    ctaNote: {
      pl: 'Aplikacja w fazie rozwoju. Planowany start w 2026.',
      en: 'App in development. Planned launch in 2026.',
      ru: 'Приложение в разработке. Планируемый запуск в 2026.'
    },
    accent: 'neon-2'
  },
  {
    slug: 'audio-summariser',
    name: 'Audio Summariser AI',
    tagline: {
      pl: 'AI do podsumowywania audio — nagrywaj wykłady i myśli, otrzymuj strukturalne streszczenia.',
      en: 'AI-powered audio summarization — record lectures and thoughts, get structured summaries.',
      ru: 'ИИ для суммирования аудио — записывай лекции и мысли, получай структурированные конспекты.'
    },
    shortDescription: {
      pl: 'Włącz diktafon na wykładzie, a na koniec otrzymaj krótki, strukturalny konspekt i zadawaj pytania.',
      en: 'Turn on the recorder during a lecture, and at the end get a short, structured summary and ask questions about it.',
      ru: 'Включи диктофон на лекции, а в конце получи краткий структурированный конспект и задавай вопросы по нему.'
    },
    description: {
      pl: 'Audio Summariser AI to aplikacja, która pozwala nagrywać wykłady lub swoje chaotyczne myśli przez godzinę, a następnie otrzymywać wszystko w uporządkowanym, strukturalnym formacie. Możesz zadawać pytania dotyczące treści, budować plany i organizować wiedzę. Idealne dla studentów, profesjonalistów i wszystkich, którzy chcą efektywnie przetwarzać informacje audio.',
      en: 'Audio Summariser AI is an app that lets you record lectures or your scattered thoughts for an hour, then receive everything in an organized, structured format. You can ask questions about the content, build plans, and organize knowledge. Perfect for students, professionals, and anyone who wants to efficiently process audio information.',
      ru: 'Audio Summariser AI — это приложение, которое позволяет записывать лекции или свои хаотичные мысли в течение часа, а затем получать всё в упорядоченном, структурированном виде. Можно задавать вопросы по содержимому, строить планы и организовывать знания. Идеально для студентов, профессионалов и всех, кто хочет эффективно обрабатывать аудиоинформацию.'
    },
    features: {
      pl: [
        'Nagrywanie wykładów i automatyczne tworzenie konspektów.',
        'Strukturyzacja chaotycznych myśli w plany i notatki.',
        'Możliwość zadawania pytań AI na temat nagrania.',
        'Integracja z kalendarzem i zadaniami.',
        'Prywatność i bezpieczeństwo danych.'
      ],
      en: [
        'Record lectures and automatically create summaries.',
        'Structure scattered thoughts into plans and notes.',
        'Ask AI questions about the recording.',
        'Integration with calendar and tasks.',
        'Privacy and data security.'
      ],
      ru: [
        'Запись лекций и автоматическое создание конспектов.',
        'Структуризация хаотичных мыслей в планы и заметки.',
        'Возможность задавать вопросы ИИ по записи.',
        'Интеграция с календарем и задачами.',
        'Приватность и безопасность данных.'
      ]
    },
    cta: {
      pl: 'Dowiedz się więcej',
      en: 'Learn more',
      ru: 'Узнать больше'
    },
    accent: 'neon-1',
    hasPrivacy: false
  }
];

export const projectBySlug = Object.fromEntries(projects.map((p) => [p.slug, p])) as Record<ProjectSlug, Project>;

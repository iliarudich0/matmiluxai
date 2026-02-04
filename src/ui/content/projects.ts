export type ProjectSlug = 'tik-mathik' | 'tikdrive' | 'tikeverylang' | 'tiklawyer' | 'safezonex';

export type Project = {
  slug: ProjectSlug;
  name: string;
  tagline: { pl: string; en: string };
  shortDescription: { pl: string; en: string };
  description: { pl: string; en: string };
  features: { pl: string[]; en: string[] };
  cta: { pl: string; en: string };
  ctaNote?: { pl: string; en: string };
  accent: 'neon-1' | 'neon-2';
};

export const projects: Project[] = [
  {
    slug: 'tik-mathik',
    name: 'Tik-Mathik AI',
    tagline: {
      pl: 'Inteligentny nauczyciel matematyki w Twoim telefonie.',
      en: 'Your AI math tutor in your pocket.'
    },
    shortDescription: {
      pl: 'Inteligentny nauczyciel matematyki w Twoim telefonie – Tik-Mathik AI tworzy zadania i pomaga zrozumieć rozwiązania, dostosowując się do Twojego poziomu.',
      en: 'Your AI math tutor in your pocket – Tik-Mathik AI generates math problems and guides you through solutions, adapting to your skill level.'
    },
    description: {
      pl: 'Tik-Mathik AI to futurystyczna aplikacja edukacyjna, która zmienia sposób nauki matematyki. Wykorzystując sztuczną inteligencję, aplikacja generuje nieograniczoną liczbę zadań dopasowanych do użytkownika i udziela interaktywnych podpowiedzi krok po kroku. Ucz się algebraicznych równań, geometrii czy statystyki w tempie, które Ci odpowiada. Wirtualny AI-asystent monitoruje Twoje postępy i personalizuje kolejne zadania, koncentrując się na Twoich słabszych obszarach. To jak posiadanie osobistego nauczyciela matematyki dostępnego 24/7 – idealnego zarówno dla uczniów, jak i dorosłych chcących odświeżyć wiedzę. Dzięki Tik-Mathik AI nauka staje się bardziej angażująca, interaktywna i dopasowana do Ciebie niż kiedykolwiek.',
      en: 'Tik-Mathik AI is a futuristic educational app transforming how you learn mathematics. Powered by artificial intelligence, it generates an unlimited variety of math problems tailored to each learner and provides interactive step-by-step hints for solving them. You can practice anything from algebraic equations to geometry or statistics at your own pace. A virtual AI assistant monitors your progress and personalizes the next challenges, focusing on areas where you need improvement. It’s like having a personal math tutor available 24/7 – perfect for students and adults alike looking to brush up on their skills. With Tik-Mathik AI, learning becomes more engaging, interactive, and personalized than ever before.'
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
      ]
    },
    cta: {
      pl: 'Dołącz do beta testów',
      en: 'Join the beta'
    },
    ctaNote: {
      pl: 'Wkrótce dostępne w Google Play / App Store.',
      en: 'Coming soon to Google Play / App Store.'
    },
    accent: 'neon-1'
  },
  {
    slug: 'tikdrive',
    name: 'TikDrive',
    tagline: {
      pl: 'Twój wirtualny instruktor nauki jazdy.',
      en: 'Your virtual driving instructor.'
    },
    shortDescription: {
      pl: 'Twój wirtualny instruktor nauki jazdy – TikDrive pomoże Ci zdać egzamin teoretyczny dzięki interaktywnym testom i inteligentnym wskazówkom.',
      en: 'Your virtual driving instructor – TikDrive helps you ace your driving theory exam with interactive tests and intelligent guidance.'
    },
    description: {
      pl: 'TikDrive to nowoczesny symulator nauki jazdy, który przenosi przygotowanie do egzaminu teoretycznego na wyższy poziom. Aplikacja zawiera aktualną bazę pytań egzaminacyjnych kategorii prawa jazdy, prezentowanych w dynamicznym, interaktywnym formacie. Tryb nauki umożliwia przeglądanie pytań tematycznych z natychmiastową informacją zwrotną i wyjaśnieniami opartymi na AI – aplikacja analizuje Twoje odpowiedzi i podpowiada, na które zagadnienia warto zwrócić większą uwagę. TikDrive oferuje także realistyczny tryb egzaminu odzwierciedlający warunki prawdziwego testu, łącznie z odliczaniem czasu. Dzięki systemowi punktów i osiągnięć nauka staje się grą, która motywuje do regularnych ćwiczeń. Niezależnie czy jesteś tuż przed egzaminem, czy dopiero zaczynasz kurs, TikDrive sprawi, że poczujesz się pewnie za kierownicą wiedzy.',
      en: 'TikDrive is a next-generation driving theory simulator that takes exam preparation to the next level. The app includes an up-to-date database of driving theory test questions for your license category, presented in a dynamic, interactive format. A learning mode lets you review topic-specific questions with instant feedback and AI-based explanations – the app analyzes your answers and suggests which topics you need to focus on. TikDrive also offers a realistic exam mode mirroring actual test conditions, complete with a countdown timer. A gamified points and achievements system turns learning into a game that motivates you to practice regularly. Whether you\'re about to take your test or just starting your course, TikDrive ensures you’ll feel confident and well-prepared when it\'s time for the real exam.'
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
      ]
    },
    cta: {
      pl: 'Sprawdź premierę wkrótce',
      en: 'Check launch status'
    },
    ctaNote: {
      pl: 'Plan: oficjalny launch Q2 2026.',
      en: 'Planned: official launch in Q2 2026.'
    },
    accent: 'neon-2'
  },
  {
    slug: 'tikeverylang',
    name: 'TikEveryLang AI',
    tagline: {
      pl: 'Uniwersalny tłumacz i nauczyciel językowy w jednym.',
      en: 'A universal translator and language tutor in one.'
    },
    shortDescription: {
      pl: 'Uniwersalny tłumacz i nauczyciel językowy w jednym – TikEveryLang AI otworzy przed Tobą świat języków dzięki mocy sztucznej inteligencji.',
      en: 'A universal translator and language tutor in one – TikEveryLang AI will open up a world of languages for you, powered by artificial intelligence.'
    },
    description: {
      pl: 'TikEveryLang AI to wizja przyszłości nauki języków – aplikacja, która wykorzysta AI, aby uczynić naukę dowolnego języka szybką, wciągającą i dostępną dla każdego. Choć projekt jest na etapie planowania, już teraz zdradzimy, czego można się spodziewać. Aplikacja ma oferować interaktywne konwersacje z AI naśladujące dialog z native speakerem oraz personalizowane lekcje dostosowane do Twoich postępów. Planowane są funkcje rozpoznawania mowy i natychmiastowej korekty wymowy, a także tłumaczenia kontekstowe w locie. TikEveryLang AI będzie wspierać wiele języków – od angielskiego i hiszpańskiego, po chiński czy suahili – wszystko w jednym miejscu. Celem jest przekroczenie barier językowych dzięki technologii: gdziekolwiek jesteś, błyskawicznie porozumiesz się w każdym języku. Więcej informacji już wkrótce – śledź nasze aktualizacje!',
      en: 'TikEveryLang AI is our futuristic vision for language learning – an app that will leverage AI to make learning any language fast, immersive, and accessible to everyone. The project is still in the planning phase, but we can share a glimpse of what\'s to come. The app is set to offer interactive conversations with an AI that simulate talking to a native speaker, as well as personalized lessons tailored to your progress. Planned features include speech recognition with instant pronunciation correction and real-time contextual translations. TikEveryLang AI will support numerous languages – from English and Spanish to Chinese or Swahili – all within one platform. The goal is to break language barriers through technology: wherever you go, you\'ll be able to communicate instantly in any language. More information is coming soon – stay tuned for updates!'
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
      ]
    },
    cta: {
      pl: 'Projekt w przygotowaniu',
      en: 'Project in preparation'
    },
    ctaNote: {
      pl: 'Prototyp planowany na Q3 2026.',
      en: 'Prototype planned for Q3 2026.'
    },
    accent: 'neon-1'
  },
  {
    slug: 'tiklawyer',
    name: 'TikLawyer AI',
    tagline: {
      pl: 'Osobisty asystent prawny zasilany AI.',
      en: 'Your personal AI-powered legal assistant.'
    },
    shortDescription: {
      pl: 'AI-powered legal assistant providing instant legal information and guidance',
      en: 'AI-powered legal assistant providing instant legal information and guidance'
    },
    description: {
      pl: 'TikLawyer AI to Twój osobisty asystent prawny napędzany zaawansowaną sztuczną inteligencją. Uzyskaj natychmiastowe odpowiedzi na pytania prawne, zrozum skomplikowane dokumenty prawne i otrzymaj wskazówki dotyczące różnych kwestii prawnych - wszystko w prostej, łatwej w użyciu aplikacji mobilnej. Aplikacja została zaprojektowana z myślą o dostarczaniu ogólnych informacji prawnych i ma charakter edukacyjny. TikLawyer AI to idealne narzędzie do zrozumienia swoich praw, uzyskania szybkich odpowiedzi na pytania prawne, nauki o procedurach prawnych oraz analizy dokumentów prawnych. Pamiętaj: TikLawyer AI dostarcza informacji prawnych, NIE porad prawnych. Zawsze konsultuj się z wykwalifikowanym prawnikiem w konkretnych sprawach prawnych.',
      en: 'TikLawyer AI is your personal legal assistant powered by advanced artificial intelligence. Get instant answers to legal questions, understand complex legal documents, and receive guidance on various legal matters - all in a simple, easy-to-use mobile app. The app is designed for educational purposes and general legal information. TikLawyer AI is perfect for understanding your legal rights, getting quick answers to legal questions, learning about legal procedures, and analyzing legal documents. Remember: TikLawyer AI provides legal information, NOT legal advice. Always consult with a qualified attorney for specific legal matters.'
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
      ]
    },
    cta: {
      pl: 'Pobierz wkrótce',
      en: 'Download soon'
    },
    ctaNote: {
      pl: 'Wkrótce dostępne w Google Play / App Store.',
      en: 'Coming soon to Google Play / App Store.'
    },
    accent: 'neon-2'
  },
  {
    slug: 'safezonex',
    name: 'SafeZoneX',
    tagline: {
      pl: 'Aplikacja na każdy wypadek - znajdź bezpieczne schronienie.',
      en: 'App for every emergency - find safe shelter.'
    },
    shortDescription: {
      pl: 'SafeZoneX to aplikacja survival na każdy wypadek - wojny, trzęsienia ziemi, powodzie, globalne katastrofy. Znajdź najbliższe bezpieczne schronienia i przygotuj się na kryzys.',
      en: 'SafeZoneX is a survival app for every emergency - wars, earthquakes, floods, global disasters. Find the nearest safe shelters and prepare for crisis.'
    },
    description: {
      pl: 'SafeZoneX to rewolucyjna aplikacja survival, która przygotowuje Cię na każdy scenariusz kryzysowy. W erze globalnych zagrożeń - od wojen i konfliktów zbrojnych, przez trzęsienia ziemi i tsunami, aż po ekstremalne warunki pogodowe i katastrofy ekologiczne - SafeZoneX zapewnia natychmiastowy dostęp do aktualnych informacji o bezpiecznych schronieniach. Aplikacja wykorzystuje AI do analizy zagrożeń w czasie rzeczywistym, mapuje bezpieczne strefy i schrony, oraz dostarcza praktyczne wskazówki survival. Funkcje obejmują: alerty o zagrożeniach, mapy ewakuacyjne, listy niezbędnych przedmiotów, komunikację z grupami sąsiedzkimi, oraz integrację z systemami ratunkowymi. SafeZoneX to nie tylko aplikacja - to Twój osobisty przewodnik przetrwania w świecie pełnym niepewności.',
      en: 'SafeZoneX is a revolutionary survival app that prepares you for every crisis scenario. In an era of global threats - from wars and armed conflicts, through earthquakes and tsunamis, to extreme weather conditions and ecological disasters - SafeZoneX provides instant access to current information about safe shelters. The app uses AI to analyze threats in real-time, maps safe zones and shelters, and provides practical survival tips. Features include: threat alerts, evacuation maps, essential items lists, communication with neighborhood groups, and integration with emergency systems. SafeZoneX is not just an app - it\'s your personal survival guide in a world full of uncertainty.'
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
      ]
    },
    cta: {
      pl: 'Przygotuj się na kryzys',
      en: 'Prepare for crisis'
    },
    ctaNote: {
      pl: 'Beta testy wkrótce dostępne.',
      en: 'Beta testing coming soon.'
    },
    accent: 'neon-1'
  }
];

export const projectBySlug = Object.fromEntries(projects.map((p) => [p.slug, p])) as Record<ProjectSlug, Project>;

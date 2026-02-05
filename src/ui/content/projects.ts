export type ProjectSlug =
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
  | 'tipexam-ai';

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
  },
  {
    slug: 'carfix-ai',
    name: 'CarFix AI',
    tagline: {
      pl: 'Szybka diagnoza usterek auta z AI.',
      en: 'Instant car issue diagnosis with AI.'
    },
    shortDescription: {
      pl: 'Inteligentna aplikacja dla kierowców, która analizuje zdjęcia lub dźwięk samochodu, diagnozuje możliwe usterki i sugeruje kroki naprawcze.',
      en: 'Smart driver app that analyzes photos or car sounds, suggests possible issues, and recommends next repair steps.'
    },
    description: {
      pl: 'CarFix AI to Twoje mobilne wsparcie techniczne, gdy samochód zaczyna zachowywać się nietypowo. Wystarczy zrobić zdjęcie elementu lub nagrać dźwięk silnika, a AI porówna sygnały z bazą typowych usterek. Otrzymujesz jasne wyjaśnienie możliwych przyczyn, priorytet ryzyka oraz listę bezpiecznych kroków do podjęcia (np. sprawdzenie płynów, filtrów, bezpieczników). Aplikacja została zaprojektowana tak, by pomagać w szybkiej ocenie sytuacji przed wizytą w warsztacie.',
      en: 'CarFix AI is your mobile mechanic helper when something sounds or looks off. Snap a photo of a component or record the engine sound and the AI compares signals against common issue patterns. You get a clear summary of possible causes, a risk priority, and a safe next-step checklist (fluids, filters, fuses, visible leaks). It’s built to help you assess the situation quickly before visiting a mechanic.'
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
      ]
    },
    cta: {
      pl: 'Dołącz do testów beta',
      en: 'Join the beta'
    },
    ctaNote: {
      pl: 'Wersja startowa w przygotowaniu.',
      en: 'Launch version in preparation.'
    },
    accent: 'neon-2'
  },
  {
    slug: 'healthsymptom-ai',
    name: 'HealthSymptom AI',
    tagline: {
      pl: 'Inteligentny analizator objawów dla codziennej profilaktyki.',
      en: 'Smart symptom insights for everyday health.'
    },
    shortDescription: {
      pl: 'Wpisz objawy lub dodaj dane zdrowotne, a AI podpowie możliwe przyczyny i zaleci kolejne kroki — informacyjnie, bez diagnozy medycznej.',
      en: 'Describe symptoms or add health data to get AI-powered insights and next-step recommendations — informational only, not medical diagnosis.'
    },
    description: {
      pl: 'HealthSymptom AI to praktyczne wsparcie dla osób, które chcą szybko zorientować się w swoich objawach. Aplikacja porządkuje informacje, wskazuje możliwe przyczyny i sugeruje, czy warto skonsultować się z lekarzem. Otrzymujesz też proste wskazówki dotyczące obserwacji, nawodnienia czy odpoczynku. To narzędzie edukacyjne, które pomaga podjąć świadomą decyzję o dalszych krokach.',
      en: 'HealthSymptom AI is a practical tool for quickly making sense of symptoms. It organizes your inputs, highlights possible causes, and suggests whether it may be worth contacting a professional. You’ll also see simple guidance about monitoring, hydration, and rest. It’s an educational assistant that helps you decide what to do next.'
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
      ]
    },
    cta: {
      pl: 'Wkrótce w wersji testowej',
      en: 'Testing version coming soon'
    },
    ctaNote: {
      pl: 'Planowane otwarte testy w 2026.',
      en: 'Open testing planned for 2026.'
    },
    accent: 'neon-1'
  },
  {
    slug: 'explainlike-ai',
    name: 'ExplainLikeAI',
    tagline: {
      pl: 'Tłumaczenie trudnych tematów krok po kroku.',
      en: 'Complex topics explained step by step.'
    },
    shortDescription: {
      pl: 'Aplikacja edukacyjna, która tłumaczy trudne pojęcia prostym językiem, z przykładami i analogiami dopasowanymi do Twojego poziomu.',
      en: 'An educational app that breaks down complex topics into simple, personalized explanations with examples and analogies.'
    },
    description: {
      pl: 'ExplainLikeAI to cyfrowy „tłumacz wiedzy”, który rozbija złożone zagadnienia na krótkie, zrozumiałe kroki. Wpisujesz pojęcie, wzór lub temat, a aplikacja generuje objaśnienie dopasowane do Twojego poziomu — od podstaw po warianty zaawansowane. Dzięki przykładom i analogiom łatwiej zapamiętasz to, czego się uczysz. To idealne narzędzie dla uczniów, studentów oraz osób samodzielnie rozwijających kompetencje.',
      en: 'ExplainLikeAI is a digital “knowledge translator” that turns complex topics into clear, bite-sized steps. Enter a concept, formula, or subject and the app generates an explanation tailored to your level — from beginner to advanced. With examples and analogies, concepts become easier to understand and remember. Perfect for students and self-learners.'
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
      ]
    },
    cta: {
      pl: 'Poznaj wersję demo',
      en: 'See the demo'
    },
    ctaNote: {
      pl: 'Wersja demo w przygotowaniu.',
      en: 'Demo version in preparation.'
    },
    accent: 'neon-2'
  },
  {
    slug: 'interviewcoach-ai',
    name: 'InterviewCoach AI',
    tagline: {
      pl: 'Trenuj rozmowy rekrutacyjne z AI.',
      en: 'Practice interviews with AI coaching.'
    },
    shortDescription: {
      pl: 'AI symuluje rozmowy kwalifikacyjne, analizuje odpowiedzi i daje feedback, abyś był lepiej przygotowany do prawdziwego interview.',
      en: 'AI simulates interviews, analyzes your answers, and provides feedback to help you prepare for real hiring conversations.'
    },
    description: {
      pl: 'InterviewCoach AI to wirtualny trener rekrutacyjny, który ćwiczy z Tobą scenariusze rozmów o pracę. Aplikacja zadaje pytania dopasowane do stanowiska i branży, a następnie ocenia treść odpowiedzi, spójność i klarowność. Otrzymujesz konkretne sugestie poprawy: czego unikać, jak lepiej argumentować i jak budować pewność siebie. Idealne narzędzie przed ważną rekrutacją.',
      en: 'InterviewCoach AI is your virtual hiring trainer. It asks role-specific questions, evaluates the clarity and structure of your answers, and suggests improvements: what to avoid, how to argue your strengths, and how to build confidence. A perfect practice tool before important interviews.'
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
      ]
    },
    cta: {
      pl: 'Dołącz do listy oczekujących',
      en: 'Join the waitlist'
    },
    ctaNote: {
      pl: 'Pierwsze testy wkrótce.',
      en: 'Early tests coming soon.'
    },
    accent: 'neon-1'
  },
  {
    slug: 'memoryboost-ai',
    name: 'MemoryBoost AI',
    tagline: {
      pl: 'Trenuj pamięć i koncentrację z AI.',
      en: 'Train memory and focus with AI.'
    },
    shortDescription: {
      pl: 'Spersonalizowane ćwiczenia pamięciowe, gry i wyzwania, które wzmacniają zapamiętywanie i koncentrację.',
      en: 'Personalized memory exercises, games, and challenges that strengthen recall and focus.'
    },
    description: {
      pl: 'MemoryBoost AI to aplikacja, która pomaga budować lepszą pamięć dzięki codziennym treningom. AI dobiera zadania do Twojego poziomu i celów, a także monitoruje postępy w czasie. Otrzymujesz krótkie, skuteczne sesje treningowe, które możesz wykonać w kilka minut dziennie. To świetne wsparcie w nauce, pracy i codziennym funkcjonowaniu.',
      en: 'MemoryBoost AI helps you build stronger memory with daily training sessions. The AI selects tasks based on your level and goals, while tracking your progress over time. Short, effective exercises fit into just a few minutes per day. It’s a perfect support for learning, work, and everyday life.'
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
      ]
    },
    cta: {
      pl: 'Zacznij trenować',
      en: 'Start training'
    },
    ctaNote: {
      pl: 'Wersja beta już wkrótce.',
      en: 'Beta version coming soon.'
    },
    accent: 'neon-2'
  },
  {
    slug: 'contractscan-ai',
    name: 'ContractScan AI',
    tagline: {
      pl: 'Umowy w prostym języku.',
      en: 'Contracts explained in plain language.'
    },
    shortDescription: {
      pl: 'Aplikacja skanuje umowy i tłumaczy je prostym językiem, wskazując ryzykowne zapisy przed podpisaniem.',
      en: 'Scan contracts and get plain-language summaries with risk highlights before signing.'
    },
    description: {
      pl: 'ContractScan AI pomaga szybciej zrozumieć zapisy w umowach. Wystarczy dodać dokument, a AI streszcza kluczowe punkty, podświetla ryzykowne zapisy i wyjaśnia je prostym językiem. To wsparcie dla osób, które chcą świadomie podpisywać dokumenty, bez żmudnego analizowania długich paragrafów.',
      en: 'ContractScan AI helps you understand contract clauses faster. Upload a document and the AI summarizes key points, highlights risky clauses, and explains them in plain language. It’s support for anyone who wants to sign documents with confidence, without reading long legal text line by line.'
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
      ]
    },
    cta: {
      pl: 'Sprawdź wersję testową',
      en: 'Check the test build'
    },
    ctaNote: {
      pl: 'Projekt w trakcie rozwoju.',
      en: 'Project in development.'
    },
    accent: 'neon-1'
  },
  {
    slug: 'studyplanner-ai',
    name: 'StudyPlanner AI',
    tagline: {
      pl: 'Twój osobisty plan nauki.',
      en: 'Your personal study roadmap.'
    },
    shortDescription: {
      pl: 'AI układa spersonalizowane harmonogramy nauki, przypomina o zadaniach i pomaga w przygotowaniu do egzaminów.',
      en: 'AI builds personalized study schedules, sends reminders, and guides you toward exam readiness.'
    },
    description: {
      pl: 'StudyPlanner AI to inteligentny asystent, który organizuje naukę w oparciu o Twój czas, cele i tempo. Aplikacja dzieli materiał na mniejsze etapy, planuje powtórki i monitoruje realizację. Dzięki temu uczysz się systematycznie i bez stresu, a AI koryguje plan, gdy zmienia się Twój harmonogram.',
      en: 'StudyPlanner AI is a smart assistant that organizes your learning based on your time, goals, and pace. It breaks material into smaller steps, schedules reviews, and tracks completion. You learn consistently and with less stress, while the AI adapts the plan as your schedule changes.'
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
      ]
    },
    cta: {
      pl: 'Zaplanuj naukę',
      en: 'Plan your study'
    },
    ctaNote: {
      pl: 'Wersja beta w przygotowaniu.',
      en: 'Beta version in preparation.'
    },
    accent: 'neon-2'
  },
  {
    slug: 'tikplant-ai',
    name: 'TikPlant AI',
    tagline: {
      pl: 'AI opiekun Twoich roślin.',
      en: 'AI care for your plants.'
    },
    shortDescription: {
      pl: 'Rozpoznawanie gatunków, diagnoza chorób i personalizowane wskazówki pielęgnacji dla Twoich roślin.',
      en: 'Plant identification, disease detection, and personalized care tips for healthier growth.'
    },
    description: {
      pl: 'TikPlant AI to przyjazny doradca roślinny, który rozpoznaje gatunki ze zdjęcia i podpowiada, jak je pielęgnować. Aplikacja wskazuje problemy (np. szkodniki, niedobory) i doradza, jak poprawić podlewanie, światło czy nawożenie. Dzięki temu Twoje rośliny rosną zdrowiej, a Ty masz pewność, że dbasz o nie właściwie.',
      en: 'TikPlant AI is a friendly plant advisor that identifies species from photos and guides your care routine. It flags potential issues (pests, deficiencies) and recommends improvements in watering, light, and fertilization. Your plants grow healthier while you stay confident about their care.'
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
      ]
    },
    cta: {
      pl: 'Zadbaj o rośliny',
      en: 'Care for your plants'
    },
    ctaNote: {
      pl: 'Start publicznych testów wkrótce.',
      en: 'Public testing coming soon.'
    },
    accent: 'neon-1'
  },
  {
    slug: 'tikfinance-ai',
    name: 'TikFinance AI',
    tagline: {
      pl: 'Globalny budżet w Twojej kieszeni.',
      en: 'Global treasury in your pocket.'
    },
    shortDescription: {
      pl: 'AI pomaga śledzić wydatki, planować budżet i analizować finanse w wielu walutach — przejrzyście i bezpiecznie.',
      en: 'AI helps track spending, plan budgets, and analyze finances across currencies in a clear, secure way.'
    },
    description: {
      pl: 'TikFinance AI to osobisty asystent finansowy, który porządkuje Twoje wydatki i pomaga planować budżet. Aplikacja prezentuje kategorie kosztów, trendy i prognozy, a także podpowiada, gdzie można zoptymalizować wydatki. Działa globalnie — obsługuje wiele walut i ułatwia kontrolę finansów podczas podróży. To narzędzie informacyjne, nie doradztwo inwestycyjne.',
      en: 'TikFinance AI is a personal finance assistant that organizes spending and helps you plan budgets. It shows category breakdowns, trends, and projections, while suggesting areas to optimize. It supports multiple currencies, making it useful when you travel. This is an informational tool, not investment advice.'
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
      ]
    },
    cta: {
      pl: 'Sprawdź roadmapę',
      en: 'View the roadmap'
    },
    ctaNote: {
      pl: 'Funkcje premium planowane na 2026.',
      en: 'Premium features planned for 2026.'
    },
    accent: 'neon-2'
  },
  {
    slug: 'tikspacez-ai',
    name: 'TikSpaceZ AI',
    tagline: {
      pl: 'Kosmos w Twojej dłoni.',
      en: 'The universe in your palm.'
    },
    shortDescription: {
      pl: 'Identyfikuj gwiazdy i planety, śledź satelity i odkrywaj zjawiska astronomiczne w czasie rzeczywistym.',
      en: 'Identify stars and planets, track satellites, and explore real-time astronomy events.'
    },
    description: {
      pl: 'TikSpaceZ AI to aplikacja dla miłośników nieba. Wystarczy skierować telefon w stronę nieba, by rozpoznać gwiazdy, planety i konstelacje. Aplikacja podpowiada najlepsze godziny obserwacji, pokazuje aktualne zjawiska i informuje o przelotach satelitów. Idealna dla ciekawych świata, uczniów i fanów astronomii.',
      en: 'TikSpaceZ AI is a sky companion for astronomy lovers. Point your phone at the sky to identify stars, planets, and constellations. The app suggests the best viewing times, highlights current events, and notifies you about satellite passes. Perfect for curious minds and space fans.'
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
      ]
    },
    cta: {
      pl: 'Odkrywaj kosmos',
      en: 'Explore space'
    },
    ctaNote: {
      pl: 'Premiera planowana na 2026.',
      en: 'Launch planned for 2026.'
    },
    accent: 'neon-1'
  },
  {
    slug: 'tikdietx-ai',
    name: 'TikDietX AI',
    tagline: {
      pl: 'Inteligentny przewodnik dietetyczny.',
      en: 'Your intelligent nutrition guide.'
    },
    shortDescription: {
      pl: 'Spersonalizowane plany żywieniowe, przepisy i monitoring postępów – wszystko dopasowane do Twoich celów.',
      en: 'Personalized nutrition plans, recipes, and progress tracking tailored to your goals.'
    },
    description: {
      pl: 'TikDietX AI analizuje Twoje cele, preferencje i styl życia, aby zaproponować dopasowany plan żywieniowy. Aplikacja pomaga planować posiłki, liczyć kalorie i monitorować postępy, jednocześnie dbając o wygodę i równowagę. To narzędzie edukacyjne i motywacyjne wspierające zdrowe nawyki.',
      en: 'TikDietX AI analyzes your goals, preferences, and lifestyle to generate a tailored nutrition plan. It helps plan meals, track calories, and monitor progress while focusing on balance and convenience. It’s an educational and motivational tool for building healthy habits.'
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
      ]
    },
    cta: {
      pl: 'Zacznij zdrowiej jeść',
      en: 'Start eating smarter'
    },
    ctaNote: {
      pl: 'Testy użytkowników wkrótce.',
      en: 'User testing coming soon.'
    },
    accent: 'neon-2'
  },
  {
    slug: 'tipexam-ai',
    name: 'TipExam AI',
    tagline: {
      pl: 'Globalna nauka do egzaminów zawodowych.',
      en: 'Global vocational exam preparation.'
    },
    shortDescription: {
      pl: 'TipExam AI pomaga przygotować się do egzaminów zawodowych na całym świecie — od szkół branżowych po służby i szkoły policyjne.',
      en: 'TipExam AI helps prepare for vocational exams worldwide — from trade schools to services and police academies.'
    },
    description: {
      pl: 'TipExam AI to platforma do nauki i treningu egzaminów zawodowych w skali globalnej. Aplikacja dobiera materiał do konkretnego kraju, zawodu i programu szkoleniowego, oferując pytania, testy, scenariusze praktyczne oraz krótkie powtórki. Dzięki AI dostajesz personalizowane ścieżki nauki, analizę wyników i rekomendacje, co warto poprawić. To wsparcie dla szkół branżowych, technicznych, kursów certyfikacyjnych oraz szkół służb mundurowych, w tym policyjnych — z naciskiem na realne przygotowanie do egzaminu.',
      en: 'TipExam AI is a global exam-prep platform for vocational qualifications. The app adapts content to a specific country, profession, and curriculum, offering questions, tests, practical scenarios, and quick reviews. With AI personalization, you get tailored study paths, performance analysis, and targeted improvement tips. It supports trade schools, technical programs, certification courses, and uniformed service academies — with a focus on real-world exam readiness.'
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
      ]
    },
    cta: {
      pl: 'Dołącz do programu pilotażowego',
      en: 'Join the pilot program'
    },
    ctaNote: {
      pl: 'Cel: globalne wdrożenia w 2026.',
      en: 'Target: global rollouts in 2026.'
    },
    accent: 'neon-1'
  }
];

export const projectBySlug = Object.fromEntries(projects.map((p) => [p.slug, p])) as Record<ProjectSlug, Project>;

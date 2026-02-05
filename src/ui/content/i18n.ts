import { useEffect, useState } from 'react';

export type Language = 'pl' | 'en' | 'ru';

const STORAGE_KEY = 'milux_lang';

export function getInitialLanguage(): Language {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'pl' || saved === 'en' || saved === 'ru') return saved;

  const nav = (navigator.language || '').toLowerCase();
  if (nav.startsWith('pl')) return 'pl';
  if (nav.startsWith('ru')) return 'ru';
  return 'en';
}

export function setLanguage(lang: Language) {
  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.lang = lang;
}

export function useLanguage(): [Language, (lang: Language) => void] {
  const [lang, setLang] = useState<Language>(() => {
    const initial = getInitialLanguage();
    document.documentElement.lang = initial;
    return initial;
  });

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const set = (next: Language) => {
    setLang(next);
    setLanguage(next);
  };

  return [lang, set];
}

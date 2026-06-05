import type { Language } from './i18n';

export const BRAND = {
  name: 'Milux Tech',
  tagline: {
    pl: 'Practical marketplace products.',
    en: 'Practical marketplace products.',
    ru: 'Practical marketplace products.'
  }
} as const;

export const CONTACT = {
  title: { pl: 'Contact', en: 'Contact', ru: 'Contact' },
  text: {
    pl: 'For product questions, partnerships or early access, contact us at',
    en: 'For product questions, partnerships or early access, contact us at',
    ru: 'For product questions, partnerships or early access, contact us at'
  },
  email: 'matmiluxai@gmail.com'
} as const;

export function pick<T extends { pl: string; en: string; ru: string }>(lang: Language, obj: T): string {
  if (lang === 'pl') return obj.pl;
  if (lang === 'ru') return obj.ru;
  return obj.en;
}

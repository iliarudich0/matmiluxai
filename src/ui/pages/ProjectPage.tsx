import React from 'react';
import { Layout } from '../components/Layout';
import { useLanguage } from '../content/i18n';
import type { Project } from '../content/projects';

export function ProjectPage({ project }: { project: Project }) {
  const [lang, setLang] = useLanguage();

  const desc =
    lang === 'pl'
      ? project.description.pl
      : lang === 'ru'
        ? project.description.ru ?? project.description.en
        : project.description.en;
  const features =
    lang === 'pl'
      ? project.features.pl
      : lang === 'ru'
        ? project.features.ru ?? project.features.en
        : project.features.en;
  const privacyHref = `/projects/${project.slug}/privacy.html`;
  const showPrivacy = project.hasPrivacy ?? true;
  const screenshotCaption =
    lang === 'pl'
      ? 'Mockup ekranu lockera AdTikLocker (rozszerzenie Chrome).'
      : lang === 'ru'
        ? 'Макет экрана локера AdTikLocker для Chrome-расширения.'
      : 'Mockup of the AdTikLocker locker overlay (Chrome extension).';
  const placeholderSubtitle =
    lang === 'pl'
      ? 'Placeholder â€” podmień na prawdziwe grafiki, gdy będą dostępne.'
      : lang === 'ru'
        ? 'Заполнитель — замените на реальные визуалы, когда они появятся.'
        : 'Placeholder — replace with real visuals when available.';
  const mockSubtitle = project.mockScreenshot
    ? lang === 'pl'
      ? 'Mockup lockera AdTikLocker poniżej pokazuje, jak rozszerzenie Chrome blokuje reklamy.'
      : lang === 'ru'
        ? 'Макет локера AdTikLocker ниже показывает, как расширение Chrome блокирует рекламу.'
        : 'The mock below shows how the Chrome extension locks ads with the locker overlay.'
    : placeholderSubtitle;

  return (
    <Layout lang={lang} setLang={setLang} mode="project">
      <div className="grid gap-10 lg:grid-cols-12">
        <section className="lg:col-span-7">
          <div className="kicker">{lang === 'pl' ? 'Projekt' : lang === 'ru' ? 'Проект' : 'Project'}</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">{project.name}</h1>
          <p className="p mt-3">
            {lang === 'pl'
              ? project.tagline.pl
              : lang === 'ru'
                ? project.tagline.ru ?? project.tagline.en
                : project.tagline.en}
          </p>

          <div className="card mt-6">
            <div className="text-sm font-semibold">{lang === 'pl' ? 'Opis' : lang === 'ru' ? 'Описание' : 'Overview'}</div>
            <p className="p mt-2 whitespace-pre-line">{desc}</p>
          </div>

          <div className="card mt-6">
            <div className="text-sm font-semibold">{lang === 'pl' ? 'Kluczowe funkcje' : lang === 'ru' ? 'Ключевые функции' : 'Key features'}</div>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="mt-[6px] inline-block h-2 w-2 rounded-full bg-neon-2" aria-hidden="true" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card mt-6">
            <div className="text-sm font-semibold">
              {lang === 'pl' ? 'CTA' : lang === 'ru' ? 'Призыв' : 'CTA'}
            </div>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
              {showPrivacy && (
                <a className="btn btn-primary" href={privacyHref}>
                  {lang === 'pl' ? 'Polityka prywatności' : lang === 'ru' ? 'Политика конфиденциальности' : 'Privacy policy'}
                </a>
              )}
              <a className="btn btn-ghost" href="/#contact">
                {lang === 'pl' ? 'Skontaktuj się' : lang === 'ru' ? 'Связаться' : 'Contact'}
              </a>
            </div>
            <div className="mt-3 text-sm text-muted">
              {lang === 'pl' ? project.cta.pl : lang === 'ru' ? project.cta.ru ?? project.cta.en : project.cta.en}
              {project.ctaNote ? (
                <>
                  <span className="mx-2">•</span>
                  {lang === 'pl'
                    ? project.ctaNote.pl
                    : lang === 'ru'
                      ? project.ctaNote.ru ?? project.ctaNote.en
                      : project.ctaNote.en}
                </>
              ) : null}
            </div>
          </div>

          <div className="mt-6">
            <a className="link" href="/">
              ← {lang === 'pl' ? 'Powrót na stronę główną' : lang === 'ru' ? 'Назад на главную' : 'Back to home'}
            </a>
          </div>
        </section>

        <aside className="lg:col-span-5">
          <div className="card">
            <div className="text-sm font-semibold">{lang === 'pl' ? 'Mockupy / zrzuty ekranu' : lang === 'ru' ? 'Мокапы / скриншоты' : 'Mockups / screenshots'}</div>
            <p className="p mt-2">{mockSubtitle}</p>

            {project.mockScreenshot ? (
              <figure className="mt-4 space-y-3">
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/60 shadow-[0_20px_45px_rgba(0,0,0,0.25)]">
                  <img src={project.mockScreenshot} alt={`${project.name} mock screenshot`} className="h-auto w-full object-cover" />
                </div>
                <figcaption className="text-xs text-muted">{screenshotCaption}</figcaption>
              </figure>
            ) : (
              <div className="mt-4 grid gap-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <svg viewBox="0 0 320 180" className="h-auto w-full" aria-label={lang === 'pl' ? 'Placeholder mockupu' : lang === 'ru' ? 'Плейсхолдер макета' : 'Mockup placeholder'}>
                      <rect x="0" y="0" width="320" height="180" rx="18" fill="rgba(255,255,255,0.04)" />
                      <rect x="24" y="26" width="150" height="14" rx="7" fill="rgba(0,240,255,0.25)" />
                      <rect x="24" y="54" width="260" height="10" rx="5" fill="rgba(255,255,255,0.12)" />
                      <rect x="24" y="72" width="210" height="10" rx="5" fill="rgba(255,255,255,0.10)" />
                      <rect x="24" y="104" width="120" height="32" rx="12" fill="rgba(124,92,255,0.25)" />
                    </svg>
                  </div>
                ))}
              </div>
            )}
          </div>
        </aside>
      </div>
    </Layout>
  );
}

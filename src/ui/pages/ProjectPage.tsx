import React from 'react';
import { Layout } from '../components/Layout';
import { useLanguage } from '../content/i18n';
import type { Project } from '../content/projects';
import { projects } from '../content/projects';
import { otherProjects } from '../content/otherProjects';

export function ProjectPage({ project }: { project: Project }) {
  const [lang, setLang] = useLanguage();
  const isOtherProject = otherProjects.some(p => p.slug === project.slug);

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

          {project.slug === 'adtiklocker' ? (
            <div className="mt-6 rounded-2xl border border-red-500/30 bg-red-500/5 p-6">
              <div className="flex items-center gap-3">
                <div className="text-lg font-bold text-red-400 uppercase">
                  {lang === 'pl' ? 'Niedostępne rozszerzenie' : lang === 'ru' ? 'Недоступное расширение' : 'Unavailable extension'}
                </div>
                <div className="text-sm text-red-300">
                  Chrome • Firefox • Edge
                </div>
              </div>
              <p className="mt-2 text-sm text-red-300">
                {lang === 'pl' ? 'Rozszerzenie jest w trakcie rozwoju i nie jest jeszcze dostępne do pobrania.' : lang === 'ru' ? 'Расширение находится в разработке и пока недоступно для скачивания.' : 'The extension is under development and not yet available for download.'}
              </p>
            </div>
          ) : isOtherProject ? (
            <div className="mt-6 rounded-2xl border border-yellow-500/30 bg-yellow-500/5 p-6">
              <div className="text-lg font-bold text-yellow-400 uppercase">
                {lang === 'pl' ? 'To jest tylko pomysł, nie projekt' : lang === 'ru' ? 'Это только идея, не проект' : 'This is just an idea, not a project'}
              </div>
              <p className="mt-2 text-sm text-yellow-300">
                {lang === 'pl' ? 'Ten pomysł nie został jeszcze zrealizowany. Jeśli jesteś zainteresowany rozwojem tego projektu, skontaktuj się z nami.' : lang === 'ru' ? 'Эта идея ещё не реализована. Если вы заинтересованы в развитии этого проекта, свяжитесь с нами.' : 'This idea has not been implemented yet. If you are interested in developing this project, contact us.'}
              </p>
            </div>
          ) : (
            <div className="mt-6 flex flex-wrap gap-4">
              <button className="flex items-center gap-2 rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-sm font-medium text-white/70 opacity-50 cursor-not-allowed" disabled>
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 15.3414c-.5511 0-.9993-.4482-.9993-.9993s.4482-.9993.9993-.9993.9993.4482.9993.9993-.4482.9993-.9993.9993zm-11.046 0c-.5511 0-.9993-.4482-.9993-.9993s.4482-.9993.9993-.9993.9993.4482.9993.9993-.4482.9993-.9993.9993zM21.6055 6.854c-.332-.331-.859-.331-1.191 0l-1.438 1.437c-.644-.245-1.367-.396-2.129-.396-1.629 0-3.031.571-4.031 1.523-.944.896-1.507 2.189-1.507 3.627 0 1.439.563 2.731 1.507 3.627.969.915 2.302 1.449 3.752 1.523.788.035 1.497-.096 2.086-.396l1.438 1.437c.332.331.859.331 1.191 0s.332-.859 0-1.191l-1.401-1.4c.198-.64.317-1.342.317-2.079s-.119-1.439-.317-2.079l1.401-1.4c.331-.332.331-.859 0-1.191zm-5.6055 6.1464c-1.104 0-1.9993-.8953-1.9993-1.9993s.8953-1.9993 1.9993-1.9993 1.9993.8953 1.9993 1.9993-.8953 1.9993-1.9993 1.9993z"/>
                </svg>
                Google Play
              </button>
              <button className="flex items-center gap-2 rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-sm font-medium text-white/70 opacity-50 cursor-not-allowed" disabled>
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store
              </button>
              <div className="flex items-center text-sm text-muted">
                {lang === 'pl' ? 'Aplikacja niedostępna — wkrótce!' : lang === 'ru' ? 'Приложение недоступно — скоро!' : 'App unavailable — coming soon!'}
              </div>
            </div>
          )}

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

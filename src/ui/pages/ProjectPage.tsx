import React from 'react';
import { Layout } from '../components/Layout';
import { useLanguage } from '../content/i18n';
import type { Project } from '../content/projects';

export function ProjectPage({ project }: { project: Project }) {
  const [lang, setLang] = useLanguage();

  const desc = lang === 'pl' ? project.description.pl : project.description.en;
  const features = lang === 'pl' ? project.features.pl : project.features.en;
  const privacyHref = project.slug === 'tikdrive' ? '/polityka_prywatnosci.html' : '/privacy/';

  return (
    <Layout lang={lang} setLang={setLang} mode="project">
      <div className="grid gap-10 lg:grid-cols-12">
        <section className="lg:col-span-7">
          <div className="kicker">{lang === 'pl' ? 'Projekt' : 'Project'}</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">{project.name}</h1>
          <p className="p mt-3">{lang === 'pl' ? project.tagline.pl : project.tagline.en}</p>

          <div className="card mt-6">
            <div className="text-sm font-semibold">{lang === 'pl' ? 'Opis' : 'Overview'}</div>
            <p className="p mt-2 whitespace-pre-line">{desc}</p>
          </div>

          <div className="card mt-6">
            <div className="text-sm font-semibold">{lang === 'pl' ? 'Kluczowe funkcje' : 'Key features'}</div>
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
            <div className="text-sm font-semibold">CTA</div>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a className="btn btn-primary" href={privacyHref}>
                {lang === 'pl' ? 'Polityka prywatności' : 'Privacy policy'}
              </a>
              <a className="btn btn-ghost" href="/#contact">
                {lang === 'pl' ? 'Skontaktuj się' : 'Contact'}
              </a>
            </div>
            <div className="mt-3 text-sm text-muted">
              {lang === 'pl' ? project.cta.pl : project.cta.en}
              {project.ctaNote ? (
                <>
                  <span className="mx-2">•</span>
                  {lang === 'pl' ? project.ctaNote.pl : project.ctaNote.en}
                </>
              ) : null}
            </div>
          </div>

          <div className="mt-6">
            <a className="link" href="/">
              ← {lang === 'pl' ? 'Powrót na stronę główną' : 'Back to home'}
            </a>
          </div>
        </section>

        <aside className="lg:col-span-5">
          <div className="card">
            <div className="text-sm font-semibold">{lang === 'pl' ? 'Mockupy / zrzuty ekranu' : 'Mockups / screenshots'}</div>
            <p className="p mt-2">
              {lang === 'pl'
                ? 'Placeholder — podmień na prawdziwe grafiki, gdy będą dostępne.'
                : 'Placeholder — replace with real visuals when available.'}
            </p>

            <div className="mt-4 grid gap-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <svg viewBox="0 0 320 180" className="h-auto w-full" aria-label={lang === 'pl' ? 'Placeholder mockupu' : 'Mockup placeholder'}>
                    <rect x="0" y="0" width="320" height="180" rx="18" fill="rgba(255,255,255,0.04)" />
                    <rect x="24" y="26" width="150" height="14" rx="7" fill="rgba(0,240,255,0.25)" />
                    <rect x="24" y="54" width="260" height="10" rx="5" fill="rgba(255,255,255,0.12)" />
                    <rect x="24" y="72" width="210" height="10" rx="5" fill="rgba(255,255,255,0.10)" />
                    <rect x="24" y="104" width="120" height="32" rx="12" fill="rgba(124,92,255,0.25)" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </Layout>
  );
}

import React from 'react';
import { useLanguage } from '../content/i18n';
import { BRAND, CONTACT, FAQ, ROADMAP, WHY, pick } from '../content/siteText';
import { projects } from '../content/projects';
import { Footer } from '../components/Footer';
import { ProjectCard } from '../components/ProjectCard';
import { LanguageToggle } from '../components/LanguageToggle';
import { IconMedal, IconShield, IconSpark, IconUsers } from '../components/Icons';

export function HomePage() {
  const [lang, setLang] = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Futuristic Header Overlay */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-neon-1 via-neon-2 to-neon-3 bg-clip-text text-transparent">
              MiLux AI Labs
            </span>
          </div>
          <div className="flex items-center gap-3">
            <LanguageToggle lang={lang} onChange={setLang} compact />
          </div>
        </div>
      </header>

      {/* Mega Viral Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(https://pl-testdrive.b-cdn.net/miluxailabs/giflogo.gif)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#000000'
          }}
        />

        <div className="absolute inset-0 hero-aurora" />

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/65" />

        {/* Futuristic CTA Button */}
        <div className="relative z-10 text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-4">
              <span className="bg-gradient-to-r from-white via-neon-1 to-neon-2 bg-clip-text text-transparent drop-shadow-2xl">
                MiLux AI Labs
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 font-semibold tracking-wide max-w-3xl mx-auto handwrite">
              {lang === 'pl'
                ? 'Tworzymy pomocne aplikacje i narzędzia IT, które realnie wspierają ludzi.'
                : 'We build helpful apps and IT tools that genuinely support people.'}
            </p>
          </div>

          <a
            className="group inline-flex items-center gap-4 px-12 py-6 rounded-2xl bg-gradient-to-r from-neon-2/20 to-neon-1/20 backdrop-blur-xl border-2 border-neon-2/50 hover:border-neon-2 shadow-2xl hover:shadow-neon-2/50 transition-all duration-500 text-white font-bold text-xl hover:scale-110 hover:bg-neon-2/30"
            href="#projects"
          >
            <span className="relative z-10">
              {lang === 'pl' ? 'Odkryj nasze projekty' : 'Explore our projects'}
            </span>
            <div className="relative">
              <svg className="w-8 h-8 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <div className="absolute inset-0 bg-neon-2/30 rounded-full blur-md group-hover:blur-lg transition-all duration-300" />
            </div>
          </a>
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl px-5 pb-14 pt-10">
        <section id="projects" className="mt-14 scroll-mt-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="kicker">{lang === 'pl' ? 'Projekty' : 'Projects'}</div>
            <h2 className="h2 mt-2">{lang === 'pl' ? 'Wiele aplikacji. Jedna misja.' : 'Many apps. One mission.'}</h2>
            <p className="p mt-2 max-w-3xl">
              {lang === 'pl'
                ? 'Budujemy ekosystem praktycznych aplikacji AI — od edukacji i zdrowia po bezpieczeństwo i produktywność. Chcemy wypuścić je jak najszybciej, najpóźniej do końca 2026.'
                : 'We build a practical AI app ecosystem — from education and health to safety and productivity. Our goal is to release them as soon as possible, no later than the end of 2026.'}
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} lang={lang} />
          ))}
        </div>
      </section>

      <section id="why" className="mt-14 scroll-mt-28">
        <div className="kicker">{pick(lang, WHY.title)}</div>
        <h2 className="h2 mt-2">{lang === 'pl' ? 'Technologia, która uczy.' : 'Technology that teaches.'}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {WHY.items.map((it) => {
            const Icon =
              it.key === 'ai'
                ? IconSpark
                : it.key === 'learn'
                  ? IconMedal
                  : it.key === 'team'
                    ? IconUsers
                    : IconShield;

            return (
              <div key={it.key} className="card">
                <div className="flex items-start gap-3">
                  <Icon className="h-6 w-6 text-neon-2" />
                  <div>
                    <div className="text-base font-semibold">{pick(lang, it.title)}</div>
                    <div className="p mt-1">{pick(lang, it.text)}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="roadmap" className="mt-14 scroll-mt-28">
        <div className="kicker">{pick(lang, ROADMAP.title)}</div>
        <h2 className="h2 mt-2">{lang === 'pl' ? 'Oś czasu rozwoju' : 'Development timeline'}</h2>
        <p className="p mt-2 max-w-3xl">{pick(lang, ROADMAP.subtitle)}</p>

        <ol className="mt-6 space-y-4">
          {ROADMAP.items.map((item) => (
            <li key={item.date} className="card">
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div className="text-sm font-semibold text-neon-2">{item.date}</div>
                <div className="text-sm text-muted md:max-w-4xl">{lang === 'pl' ? item.pl : item.en}</div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="faq" className="mt-14 scroll-mt-28">
        <div className="kicker">{pick(lang, FAQ.title)}</div>
        <h2 className="h2 mt-2">{lang === 'pl' ? 'Najczęstsze pytania' : 'Most common questions'}</h2>

        <div className="mt-6 space-y-3">
          {FAQ.items.map((item, idx) => (
            <details key={idx} className="card group">
              <summary className="cursor-pointer list-none text-sm font-semibold">
                <span>{lang === 'pl' ? item.q.pl : item.q.en}</span>
                <span className="float-right text-muted group-open:text-text" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="p mt-3 text-sm text-muted leading-relaxed">{lang === 'pl' ? item.a.pl : item.a.en}</div>
            </details>
          ))}
        </div>
      </section>

      <section id="contact" className="mt-14 scroll-mt-28">
        <div className="kicker">{pick(lang, CONTACT.title)}</div>
        <h2 className="h2 mt-2">{lang === 'pl' ? 'Porozmawiajmy' : 'Let’s talk'}</h2>
        <p className="p mt-2 max-w-2xl">
          {pick(lang, CONTACT.text)}{' '}
          <a className="link" href={`mailto:${CONTACT.email}`}>
            {CONTACT.email}
          </a>
          .
        </p>

        <form
          className="card mt-6 grid gap-4 md:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = new FormData(form);
            const name = String(data.get('name') || '');
            const message = String(data.get('message') || '');
            const subject = encodeURIComponent(`MiLux AI Labs — ${name || 'Contact'}`);
            const body = encodeURIComponent(message);
            window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
          }}
        >
          <div className="md:col-span-1">
            <label className="block text-sm font-semibold" htmlFor="name">
              {lang === 'pl' ? 'Imię (opcjonalnie)' : 'Name (optional)'}
            </label>
            <input
              id="name"
              name="name"
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-text placeholder:text-muted"
              placeholder={lang === 'pl' ? 'Jak mamy się do Ciebie zwracać?' : 'How should we address you?'}
              autoComplete="name"
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm font-semibold" htmlFor="message">
              {lang === 'pl' ? 'Wiadomość' : 'Message'}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-text placeholder:text-muted"
              placeholder={lang === 'pl' ? 'Napisz, w czym możemy pomóc…' : 'Tell us how we can help…'}
            />
          </div>
          <div className="md:col-span-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <button type="submit" className="btn btn-primary">
              {lang === 'pl' ? 'Wyślij e-mail' : 'Send email'}
            </button>
            <div className="text-xs text-muted">
              {lang === 'pl'
                ? 'Formularz otworzy Twojego klienta poczty — nie przechowujemy treści wiadomości na stronie.'
                : 'This form opens your mail client — the website does not store your message.'}
            </div>
          </div>
        </form>
      </section>

      </div>

      <Footer lang={lang} setLang={setLang} mode="home" />
    </div>
  );
}

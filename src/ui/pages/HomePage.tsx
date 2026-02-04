import React from 'react';
import { useLanguage } from '../content/i18n';
import { BRAND, CONTACT, FAQ, ROADMAP, WHY, pick } from '../content/siteText';
import { projects } from '../content/projects';
import { Layout } from '../components/Layout';
import { ProjectCard } from '../components/ProjectCard';
import { IconMedal, IconShield, IconSpark, IconUsers } from '../components/Icons';

export function HomePage() {
  const [lang, setLang] = useLanguage();

  return (
    <Layout lang={lang} setLang={setLang} mode="home">
      {/* Large MiLux AI Labs Logo Header */}
      <section className="relative w-full overflow-hidden">
        <div 
          className="w-full h-96 md:h-[500px] lg:h-[600px] flex items-end justify-center pb-12"
          style={{
            backgroundImage: `url(/icons/logo.png)`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'rgba(8, 9, 14, 0.95)'
          }}
        >
          {/* Overlay for better button visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* CTA Button */}
          <div className="relative z-10">
            <a 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 text-white font-semibold text-lg shadow-2xl hover:shadow-neon-2/30 hover:scale-105"
              href="#projects"
            >
              {lang === 'pl' ? 'Poznaj nasze projekty' : 'Explore our projects'}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section id="projects" className="mt-14 scroll-mt-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="kicker">{lang === 'pl' ? 'Projekty' : 'Projects'}</div>
            <h2 className="h2 mt-2">{lang === 'pl' ? 'Trzy kierunki. Jedna misja.' : 'Three directions. One mission.'}</h2>
            <p className="p mt-2 max-w-2xl">
              {lang === 'pl'
                ? 'Poznaj nasze kluczowe produkty — każdy zaprojektowany z myślą o skutecznej nauce i świetnym UX.'
                : 'Explore our core products — each designed for effective learning and great UX.'}
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
    </Layout>
  );
}

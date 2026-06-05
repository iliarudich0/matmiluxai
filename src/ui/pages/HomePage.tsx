import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useLanguage } from '../content/i18n';
import { CONTACT } from '../content/siteText';
import { projects } from '../content/projects';

const ecosystemCards = [
  {
    title: 'Milux Core',
    text: 'Shared foundation for identity, safety, messaging, booking, reviews and future payment-ready infrastructure.'
  },
  {
    title: 'Rdix',
    text: 'The first focused product: a local marketplace for services, tasks, contractors and everyday help.'
  },
  {
    title: 'TikDrive',
    text: 'The next product: a marketplace for driving lessons, instructors and driving schools.'
  }
];

const founders = ['Viktor Rudich', 'Ilia Rudich', 'Stanislav Rudich'];

export function HomePage() {
  const [lang, setLang] = useLanguage();

  return (
    <div className="min-h-screen bg-bg text-text">
      <Header lang={lang} setLang={setLang} mode="home" />

      <main>
        <section
          className="relative overflow-hidden border-b border-slate-200 bg-white"
          style={{
            backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.92) 38%, rgba(255,255,255,0.28) 100%), url('/milux-tech-hero.png')",
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
            <div className="max-w-3xl">
              <div className="inline-flex rounded-full border border-teal-200 bg-white/80 px-3 py-1 text-xs font-semibold text-teal-800">
                First launch: Rdix
              </div>
              <h1 className="mt-6 text-4xl font-semibold leading-tight text-slate-950 md:text-6xl">
                Milux Tech builds practical marketplace products.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                We are creating a small ecosystem of focused apps that connect people with real-world services, starting
                with Rdix and TikDrive.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a className="btn btn-primary" href="#products">
                  Explore products
                </a>
                <a className="btn btn-ghost" href="#contact">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="scroll-mt-28 bg-slate-50 py-18 md:py-24">
          <div className="mx-auto max-w-6xl px-5">
            <div className="max-w-2xl">
              <div className="kicker">Products</div>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950 md:text-4xl">Two focused products for now.</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Milux Tech is keeping the public roadmap clear: Rdix launches first, and TikDrive follows as the next
                product in planning.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {projects.map((product) => (
                <article key={product.slug} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800">{product.label}</span>
                    <span className="text-sm font-medium text-slate-500">{product.status}</span>
                  </div>

                  <h3 className="mt-6 text-3xl font-semibold text-slate-950">{product.name}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">{product.tagline.en}</p>

                  <ul className="mt-6 space-y-3">
                    {product.features.en.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm leading-6 text-slate-600">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="ecosystem" className="scroll-mt-28 bg-white py-18 md:py-24">
          <div className="mx-auto max-w-6xl px-5">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <div className="kicker">Ecosystem</div>
                <h2 className="mt-3 text-3xl font-semibold text-slate-950 md:text-4xl">One core, separate products.</h2>
                <p className="mt-5 text-base leading-7 text-slate-600">
                  Milux Tech products should share a common foundation: identity, safety, messaging, booking, reviews and
                  future payment-ready infrastructure. Each app remains focused and easy to understand.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {ecosystemCards.map((card) => (
                  <article key={card.title} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-base font-semibold text-slate-950">{card.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{card.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="founders" className="scroll-mt-28 bg-slate-50 py-18 md:py-24">
          <div className="mx-auto max-w-6xl px-5">
            <div className="max-w-2xl">
              <div className="kicker">Founders</div>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950 md:text-4xl">Co-founders</h2>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {founders.map((founder) => (
                <article key={founder} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-950 text-sm font-semibold text-white">
                    {founder
                      .split(' ')
                      .map((part) => part[0])
                      .join('')}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-950">{founder}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-28 bg-white py-18 md:py-24">
          <div className="mx-auto max-w-6xl px-5">
            <div className="max-w-2xl">
              <div className="kicker">Contact</div>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950 md:text-4xl">Contact Milux Tech</h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                {CONTACT.text.en}{' '}
                <a className="link" href={`mailto:${CONTACT.email}`}>
                  {CONTACT.email}
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} setLang={setLang} mode="home" />
    </div>
  );
}

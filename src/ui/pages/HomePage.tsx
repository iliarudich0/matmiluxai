import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useLanguage } from '../content/i18n';
import { CONTACT } from '../content/siteText';
import { projects, type Project } from '../content/projects';

const ecosystemCards = [
  {
    title: 'Milux Core',
    eyebrow: 'Shared foundation',
    text: 'Identity, safety, messaging, booking, reviews and future payment-ready infrastructure.'
  },
  {
    title: 'Rdix',
    eyebrow: 'First product',
    text: 'A local marketplace for services, tasks, trusted contractors and everyday help.'
  },
  {
    title: 'TikDrive',
    eyebrow: 'Next product',
    text: 'A driving lessons marketplace for learners, instructors and driving schools.'
  }
];

const founders = ['Ilia Rudich', 'Stanislav Rudich'];

function projectHref(project: Project) {
  return `/projects/${project.slug}/`;
}

export function HomePage() {
  const [lang, setLang] = useLanguage();

  return (
    <div className="min-h-screen bg-bg text-text">
      <Header lang={lang} setLang={setLang} mode="home" />

      <main>
        <section className="relative overflow-hidden border-b border-slate-200 bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(20,184,166,0.12),transparent_32%),radial-gradient(circle_at_92%_58%,rgba(14,165,233,0.10),transparent_30%)]" />
          <img
            src="/milux-tech-hero.png"
            alt=""
            className="pointer-events-none absolute inset-x-0 bottom-0 h-full w-full object-cover opacity-[0.045]"
          />

          <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-18 md:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="max-w-3xl">
              <div className="inline-flex rounded-full border border-teal-200 bg-white/85 px-3 py-1.5 text-xs font-semibold text-teal-800 shadow-sm">
                First launch: Rdix
              </div>
              <h1 className="mt-6 text-4xl font-semibold leading-tight text-slate-950 md:text-6xl">
                Milux Tech builds focused marketplace products.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                We are building a small ecosystem of practical apps that connect people with real-world services,
                starting with Rdix and TikDrive.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a className="btn btn-primary" href="#products">
                  Explore products
                </a>
                <a className="btn btn-ghost" href="/projects/rdix/">
                  View Rdix
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white/90 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.10)] backdrop-blur md:p-6">
              <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <div className="text-sm font-semibold text-slate-950">Product system</div>
                  <div className="mt-1 text-xs text-slate-500">Shared core, focused marketplaces</div>
                </div>
                <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold text-white">2026</span>
              </div>

              <div className="mt-6 rounded-lg border border-teal-100 bg-gradient-to-br from-teal-50 to-sky-50 p-5">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white bg-white text-sm font-semibold text-teal-800 shadow-sm">
                  Milux Core
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg border border-white/80 bg-white/85 p-4 shadow-sm">
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">01</div>
                    <div className="mt-2 text-lg font-semibold text-slate-950">Rdix</div>
                    <div className="mt-1 text-sm text-slate-600">First launch</div>
                  </div>
                  <div className="rounded-lg border border-white/80 bg-white/85 p-4 shadow-sm">
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">02</div>
                    <div className="mt-2 text-lg font-semibold text-slate-950">TikDrive</div>
                    <div className="mt-1 text-sm text-slate-600">Next product</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs font-medium text-slate-500">
                <div className="rounded-md bg-slate-50 px-2 py-3">Messaging</div>
                <div className="rounded-md bg-slate-50 px-2 py-3">Booking</div>
                <div className="rounded-md bg-slate-50 px-2 py-3">Reviews</div>
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
                Milux Tech is keeping the public roadmap clear: Rdix is the first launch, and TikDrive follows as the
                next product in planning.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
              {projects.map((product) => {
                const isFirstLaunch = product.slug === 'rdix';
                return (
                  <article
                    key={product.slug}
                    className={`rounded-xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md md:p-8 ${
                      isFirstLaunch ? 'border-teal-200 ring-4 ring-teal-50' : 'border-slate-200'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800">
                        {product.label}
                      </span>
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

                    <a className="btn btn-ghost mt-7" href={projectHref(product)}>
                      View {product.name}
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="ecosystem" className="scroll-mt-28 bg-white py-18 md:py-24">
          <div className="mx-auto max-w-6xl px-5">
            <div className="max-w-3xl">
              <div className="kicker">Ecosystem</div>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950 md:text-4xl">One core, separate products.</h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                Milux Tech products should share a common foundation: identity, safety, messaging, booking, reviews and
                future payment-ready infrastructure. Each app remains focused and easy to understand.
              </p>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {ecosystemCards.map((card, index) => (
                <article key={card.title} className="relative rounded-xl border border-slate-200 bg-slate-50 p-6">
                  {index > 0 ? (
                    <span className="absolute -left-3 top-1/2 hidden h-px w-6 bg-teal-200 lg:block" aria-hidden="true" />
                  ) : null}
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">{card.eyebrow}</div>
                  <h3 className="mt-3 text-xl font-semibold text-slate-950">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="founders" className="scroll-mt-28 bg-slate-50 py-18 md:py-24">
          <div className="mx-auto max-w-6xl px-5">
            <div className="mx-auto max-w-2xl text-center">
              <div className="kicker">Founders</div>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950 md:text-4xl">Co-founders</h2>
            </div>

            <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
              {founders.map((founder) => (
                <article key={founder} className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-slate-950 text-sm font-semibold text-white">
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
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
              <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-center">
                <div>
                  <div className="kicker">Contact</div>
                  <h2 className="mt-3 text-3xl font-semibold text-slate-950 md:text-4xl">Contact Milux Tech</h2>
                </div>
                <p className="text-base leading-7 text-slate-600">
                  Product questions, partnerships or early access:{' '}
                  <a className="link" href={`mailto:${CONTACT.email}`}>
                    {CONTACT.email}
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} setLang={setLang} mode="home" />
    </div>
  );
}

import React from 'react';
import { Layout } from '../components/Layout';
import { useLanguage } from '../content/i18n';
import { CONTACT } from '../content/siteText';

const LAST_UPDATED = '2026-06-05';

export function PrivacyPage() {
  const [lang, setLang] = useLanguage();

  return (
    <Layout lang={lang} setLang={setLang} mode="privacy">
      <section className="mx-auto max-w-3xl py-12">
        <div className="kicker">Privacy Policy</div>
        <h1 className="mt-4 text-4xl font-semibold text-slate-950">Privacy Policy</h1>
        <p className="mt-4 text-sm text-slate-500">Last updated: {LAST_UPDATED}</p>

        <div className="mt-10 space-y-5">
          <Section title="Overview">
            Milux Tech builds focused marketplace products, starting with Rdix and TikDrive. This policy explains how the
            public website handles information.
          </Section>
          <Section title="Data We Collect">
            The public website does not require account registration and does not collect payment details. If you contact us
            by email, we receive the information you choose to send.
          </Section>
          <Section title="Cookies And Local Storage">
            The website may use basic browser storage only for simple site preferences. We do not add analytics scripts,
            advertising trackers or third-party tracking pixels.
          </Section>
          <Section title="How We Use Contact Information">
            Contact information is used to reply to your message, discuss product questions, partnerships or early access,
            and maintain related correspondence.
          </Section>
          <Section title="Contact">
            Email:{' '}
            <a className="link" href={`mailto:${CONTACT.email}`}>
              {CONTACT.email}
            </a>
          </Section>
        </div>
      </section>
    </Layout>
  );
}

function Section({ title, children }: React.PropsWithChildren<{ title: string }>) {
  return (
    <section className="card">
      <h2 className="text-base font-semibold text-slate-950">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-slate-600">{children}</p>
    </section>
  );
}

import React from 'react';
import { useLanguage } from '../content/i18n';
import { Layout } from '../components/Layout';

export function OtherProjectsPage() {
  const [lang, setLang] = useLanguage();

  return (
    <Layout lang={lang} setLang={setLang} mode="other">
      <section className="mx-auto max-w-3xl py-20">
        <div className="kicker">Products</div>
        <h1 className="mt-4 text-4xl font-semibold text-slate-950">Milux Tech is currently presenting two products.</h1>
        <p className="mt-5 text-base leading-7 text-slate-600">
          Rdix is planned as the first public product. TikDrive is the second product in planning / prototype. Other concepts are
          not listed on the public site for now.
        </p>
        <a className="btn btn-primary mt-8" href="/#products">
          View products
        </a>
      </section>
    </Layout>
  );
}

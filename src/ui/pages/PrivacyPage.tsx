import React from 'react';
import { Layout } from '../components/Layout';
import { useLanguage } from '../content/i18n';

const LAST_UPDATED = '2026-01-10';

export function PrivacyPage() {
  const [lang, setLang] = useLanguage();

  return (
    <Layout lang={lang} setLang={setLang} mode="privacy">
      <div className="kicker">
        {lang === 'pl' ? 'Polityka prywatności' : lang === 'ru' ? 'Политика конфиденциальности' : 'Privacy Policy'}
      </div>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
        {lang === 'pl' ? 'Polityka prywatności' : lang === 'ru' ? 'Политика конфиденциальности' : 'Privacy Policy'}
      </h1>
      <p className="p mt-3">
        {lang === 'pl'
          ? `Ostatnia aktualizacja: ${LAST_UPDATED}`
          : lang === 'ru'
            ? `Последнее обновление: ${LAST_UPDATED}`
            : `Last updated: ${LAST_UPDATED}`}
      </p>

      <div className="mt-8 space-y-6">
        {lang === 'pl' ? <PrivacyPL /> : lang === 'ru' ? <PrivacyRU /> : <PrivacyEN />}
      </div>

      <div className="mt-10">
        <a className="link" href="/">
          ← {lang === 'pl' ? 'Powrót na stronę główną' : lang === 'ru' ? 'Назад на главную' : 'Back to home'}
        </a>
      </div>
    </Layout>
  );
}

function Section({ title, children }: React.PropsWithChildren<{ title: string }>) {
  return (
    <section className="card">
      <h2 className="text-base font-semibold">{title}</h2>
      <div className="mt-3 text-sm text-muted leading-relaxed">{children}</div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((it) => (
        <li key={it} className="flex gap-2">
          <span className="mt-[7px] inline-block h-2 w-2 rounded-full bg-neon-2" aria-hidden="true" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

function PrivacyPL() {
  return (
    <>
      <Section title="1. Wprowadzenie">
        <p>
          Niniejsza Polityka prywatności wyjaśnia, w jaki sposób MiLux AI Labs (\"my\", \"nas\", \"nasze\") gromadzi,
          wykorzystuje i chroni dane użytkowników naszych aplikacji mobilnych (Tik-Mathik AI, TikDrive, TikEveryLang AI)
          oraz strony internetowej. Szanujemy Twoją prywatność i dokładamy wszelkich starań, aby chronić Twoje dane.
        </p>
        <p className="mt-3">
          Uwaga: Nasze aplikacje są przeznaczone dla użytkowników w wieku 13 lat i starszych. Użytkowanie przez młodsze
          dzieci powinno odbywać się pod nadzorem rodzica lub opiekuna. Nie kierujemy usług do dzieci poniżej 13 roku życia
          i nie zbieramy świadomie danych osobowych od takich osób.
        </p>
      </Section>

      <Section title="2. Dane jakie zbieramy">
        <p>
          Aktualnie nie gromadzimy żadnych danych osobowych (takich jak imię, nazwisko, adres e-mail, numer telefonu) za
          pośrednictwem naszych aplikacji. Nie wymagamy zakładania konta ani podawania danych identyfikujących.
        </p>
        <p className="mt-3">Możemy natomiast automatycznie zbierać pewne dane techniczne i diagnostyczne:</p>
        <List
          items={[
            'Dane o awariach (crash logs) – informacje o błędach i awariach aplikacji, które pomagają nam wykrywać i naprawiać problemy techniczne.',
            'Dane telemetryczne o użyciu – anonimowe informacje o sposobie korzystania z aplikacji (np. częstotliwość użycia funkcji, ogólne statystyki).'
          ]}
        />
        <p className="mt-3">
          Wszystkie dane tego rodzaju są anonimowe i nie pozwalają na identyfikację użytkownika. Jeśli w przyszłości
          wprowadzimy funkcje zbierające dodatkowe dane, zaktualizujemy politykę oraz poprosimy o zgodę, jeśli będzie
          wymagana.
        </p>
      </Section>

      <Section title="3. Wykorzystywanie danych">
        <p>Zebrane dane techniczne wykorzystujemy wyłącznie do:</p>
        <List
          items={[
            'Poprawy stabilności i bezpieczeństwa aplikacji (na podstawie crash logs).',
            'Doskonalenia funkcjonalności i wygody użytkowania (na podstawie zagregowanych danych telemetrycznych).'
          ]}
        />
        <p className="mt-3">
          Nie udostępniamy tych danych podmiotom trzecim poza usługami potrzebnymi do funkcjonowania aplikacji (np. narzędzia
          analityczne działające na nasze zlecenie), zgodnie z niniejszą polityką.
        </p>
      </Section>

      <Section title="4. Reklamy">
        <p>
          W naszych aplikacjach nie wyświetlamy reklam stron trzecich. Jeśli kiedykolwiek zmienimy tę zasadę, zaktualizujemy
          niniejszy dokument i uzyskamy wymagane zgody.
        </p>
      </Section>

      <Section title="5. Płatności">
        <p>
          Aplikacje mogą oferować zakupy wewnątrz aplikacji. Płatności są realizowane przez Google Play lub Apple App Store.
          Nie przetwarzamy ani nie przechowujemy danych płatniczych — transakcje odbywają się w systemach sklepu.
        </p>
      </Section>

      <Section title="6. Bezpieczeństwo danych">
        <p>
          Stosujemy odpowiednie środki organizacyjne i techniczne, aby chronić dane przed nieautoryzowanym dostępem, utratą
          czy niewłaściwym wykorzystaniem. Ponieważ nie przechowujemy danych osobowych, ryzyko naruszenia prywatności jest
          zminimalizowane.
        </p>
      </Section>

      <Section title="7. Prawa użytkownika">
        <p>
          Ponieważ nie gromadzimy danych osobowych, użytkownicy nie muszą składać wniosków o wgląd, sprostowanie czy usunięcie
          takich danych — po prostu ich nie posiadamy. Jeśli kontaktujesz się z nami (np. e-mail), dane kontaktowe będą użyte
          wyłącznie do odpowiedzi. Możesz zażądać usunięcia korespondencji.
        </p>
      </Section>

      <Section title="8. Kontakt">
        <p className="font-medium text-text">Administrator danych:</p>
        <div className="mt-2">
          <div>MiLux AI Labs</div>
          <div>Adres: [adres firmy / siedziby, jeśli dotyczy]</div>
          <div>
            E-mail ds. prywatności:{' '}
            <a className="link" href="mailto:matmiluxai@gmail.com">
              matmiluxai@gmail.com
            </a>
          </div>
        </div>
        <p className="mt-3">
          Postaramy się odpowiedzieć na wiadomości niezwłocznie, nie później niż w ciągu 30 dni.
        </p>
      </Section>

      <Section title="9. Przechowywanie danych">
        <p>
          Dane techniczne przechowujemy tylko tak długo, jak to konieczne do realizacji celów opisanych wyżej. Crash logi mogą
          być przechowywane przez kilka miesięcy, po czym są usuwane lub anonimizowane. Dane telemetryczne mogą być
          przechowywane w formie zagregowanej bezterminowo (bez powiązania z danymi osobowymi).
        </p>
      </Section>

      <Section title="10. Zmiany w polityce prywatności">
        <p>
          Możemy aktualizować niniejszą politykę wraz z rozwojem aplikacji lub zmianami prawnymi. O zmianach poinformujemy
          poprzez aktualizację daty na górze dokumentu.
        </p>
      </Section>
    </>
  );
}

function PrivacyEN() {
  return (
    <>
      <Section title="1. Introduction">
        <p>
          This Privacy Policy explains how MiLux AI Labs (\"we\", \"us\", \"our\") collects, uses, and protects user data in our
          mobile applications (Tik-Mathik AI, TikDrive, TikEveryLang AI) and website. We respect your privacy and are
          committed to protecting your information.
        </p>
        <p className="mt-3">
          Note: Our apps are intended for users aged 13 and above. Use by younger children should be supervised by a parent
          or guardian. We do not direct our services to children under 13 and do not knowingly collect personal information
          from them.
        </p>
      </Section>

      <Section title="2. Data We Collect">
        <p>
          At present, we do not collect personal data (such as name, email address, phone number) through our apps. We do
          not require account registration or identifying information.
        </p>
        <p className="mt-3">We may automatically collect technical and diagnostic data to improve our products:</p>
        <List
          items={[
            'Crash logs – information about app errors or crashes, helping us identify and fix issues.',
            'Usage telemetry – anonymous information about how the app is used (e.g., feature usage frequency, general statistics).'
          ]}
        />
        <p className="mt-3">
          All such data is anonymous and cannot be used to identify an individual user. If we introduce additional data
          collection in the future, we will update this policy and request consent where required.
        </p>
      </Section>

      <Section title="3. How We Use Data">
        <p>The technical data collected is used only for:</p>
        <List
          items={[
            'Improving the stability and security of our apps (based on crash logs).',
            'Enhancing functionality and user experience (based on aggregated telemetry data).'
          ]}
        />
        <p className="mt-3">
          We do not share this data with third parties except services necessary for operating the apps (e.g., analytics
          services working on our behalf), in line with this policy.
        </p>
      </Section>

      <Section title="4. Advertising">
        <p>
          We do not display third-party advertisements in our apps. If this policy ever changes, we will update this
          document and obtain required consents.
        </p>
      </Section>

      <Section title="5. Payments">
        <p>
          Our applications may offer in-app purchases. Payments are processed through Google Play or the Apple App Store.
          We do not directly process or store payment information — transactions occur within the app store systems.
        </p>
      </Section>

      <Section title="6. Data Security">
        <p>
          We implement appropriate organizational and technical measures to protect data against unauthorized access, loss,
          or misuse. Since we do not store personal user data, privacy risk is minimized.
        </p>
      </Section>

      <Section title="7. User Rights">
        <p>
          Because we do not collect personal information, users do not need to submit requests to access, correct, or delete
          such data — we simply do not have it. If you contact us (e.g., via email), your contact information is used only to
          respond. You may request deletion of that correspondence.
        </p>
      </Section>

      <Section title="8. Contact Information">
        <p className="font-medium text-text">Data controller:</p>
        <div className="mt-2">
          <div>MiLux AI Labs</div>
          <div>Address: [Company address, if applicable]</div>
          <div>
            Privacy contact email:{' '}
            <a className="link" href="mailto:matmiluxai@gmail.com">
              matmiluxai@gmail.com
            </a>
          </div>
        </div>
        <p className="mt-3">We aim to respond promptly, within 30 days at the latest.</p>
      </Section>

      <Section title="9. Data Retention">
        <p>
          Technical data is retained only as long as necessary for the purposes above. Crash logs may be kept for a few
          months for analysis and then deleted or anonymized. Telemetry may be retained in aggregated form without time
          limit (not linked to personal identifiers).
        </p>
      </Section>

      <Section title="10. Changes to This Privacy Policy">
        <p>
          We may update this policy as our apps evolve or legal requirements change. We will notify users by updating the
          date at the top of this document.
        </p>
      </Section>
    </>
  );
}

function PrivacyRU() {
  return (
    <>
      <Section title="1. Введение">
        <p>
          Настоящая Политика конфиденциальности объясняет, как MiLux AI Labs ("мы", "нас") собирает,
          использует и защищает данные пользователей наших мобильных приложений и сайта. Мы уважаем вашу
          приватность и стремимся защищать информацию.
        </p>
        <p className="mt-3">
          Примечание: приложения предназначены для пользователей 13+; использование детьми младше 13 лет
          должно происходить под контролем взрослых. Мы не собираем персональные данные детей.
        </p>
      </Section>

      <Section title="2. Какие данные мы собираем">
        <p>
          Сейчас мы не собираем персональные данные (имя, email, телефон) через приложения и не требуем
          регистрации аккаунта.
        </p>
        <p className="mt-3">Мы можем автоматически собирать технические и диагностические данные:</p>
        <List
          items={[
            'Crash logs — данные о сбоях, помогающие выявлять и устранять проблемы.',
            'Usage telemetry — анонимная статистика использования функций.'
          ]}
        />
        <p className="mt-3">
          Эти данные обезличены и не позволяют идентифицировать пользователя. При добавлении новых типов
          сбора данных мы обновим политику и запросим согласие, если это требуется.
        </p>
      </Section>

      <Section title="3. Как мы используем данные">
        <p>Технические данные используются только для:</p>
        <List
          items={[
            'Повышения стабильности и безопасности приложений.',
            'Улучшения функциональности и пользовательского опыта.'
          ]}
        />
      </Section>

      <Section title="4. Реклама">
        <p>Мы не показываем рекламу третьих сторон. При изменении подхода обновим документ.</p>
      </Section>

      <Section title="5. Платежи">
        <p>
          Приложения могут поддерживать покупки внутри приложения. Платежи обрабатываются Google Play или
          Apple App Store. Мы не храним платежные данные.
        </p>
      </Section>

      <Section title="6. Безопасность данных">
        <p>
          Мы применяем организационные и технические меры защиты. Так как персональные данные не
          сохраняются, риск утечки минимален.
        </p>
      </Section>

      <Section title="7. Права пользователей">
        <p>
          Поскольку персональные данные не собираются, запросы на доступ/удаление обычно не требуются.
          Если вы пишете нам по email, данные используются только для ответа.
        </p>
      </Section>

      <Section title="8. Контакты">
        <p className="font-medium text-text">Администратор данных:</p>
        <div className="mt-2">
          <div>MiLux AI Labs</div>
          <div>Адрес: [адрес компании, если применимо]</div>
          <div>
            Email по вопросам конфиденциальности:{' '}
            <a className="link" href="mailto:matmiluxai@gmail.com">
              matmiluxai@gmail.com
            </a>
          </div>
        </div>
      </Section>

      <Section title="9. Сроки хранения">
        <p>
          Технические данные хранятся только столько, сколько необходимо для целей, указанных выше. Crash
          logs могут храниться несколько месяцев, затем удаляются или обезличиваются.
        </p>
      </Section>

      <Section title="10. Изменения политики">
        <p>Мы можем обновлять политику по мере развития продуктов или изменения законодательства.</p>
      </Section>
    </>
  );
}

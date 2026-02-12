export type OtherProject = {
  name: string;
  focus: {
    pl: string;
    en: string;
    ru: string;
  };
  description: {
    pl: string;
    en: string;
    ru: string;
  };
  status: 'confirmed' | 'unconfirmed';
};

const baseOtherProjects: OtherProject[] = [
  {
    name: 'SafeZoneX',
    focus: {
      pl: 'przetrwaniu w sytuacjach kryzysowych i katastrofach',
      en: 'survival in crisis situations and disasters',
      ru: 'выживании в кризисных ситуациях и катастрофах'
    },
    description: {
      pl: 'Aplikacja w fazie rozwoju - jeszcze niepotwierdzona.',
      en: 'App in development phase - not yet confirmed.',
      ru: 'Приложение на стадии разработки - ещё не подтверждено.'
    },
    status: 'unconfirmed'
  },
];

export const otherProjects: OtherProject[] = [...baseOtherProjects];

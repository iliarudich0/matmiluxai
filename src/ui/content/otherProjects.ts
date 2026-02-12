export type OtherProject = {
  name: string;
  focus: {
    pl: string;
    en: string;
    ru: string;
  };
};

const baseOtherProjects: OtherProject[] = [
  {
    name: 'SafeZoneX',
    focus: {
      pl: 'przetrwaniu w sytuacjach kryzysowych i katastrofach',
      en: 'survival in crisis situations and disasters',
      ru: 'выживании в кризисных ситуациях и катастрофах'
    }
  },
];

export const otherProjects: OtherProject[] = [...baseOtherProjects];

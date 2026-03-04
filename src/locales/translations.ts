const en = {
  terminal: {
    welcome: 'Welcome to my Portfolio',
  },
};

export type Dictionary = typeof en;

const pt: Dictionary = {
  terminal: {
    welcome: 'Bem-vindo ao meu Portfólio',
  },
};

export type Language = 'en' | 'pt';

export const dictionaries: Record<Language, Dictionary> = {
  en,
  pt,
};
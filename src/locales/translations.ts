const en = {
  terminal: {
    welcome: 'Welcome to my {{text-orange-500|Portfolio}}',
  },
};

export type Dictionary = typeof en;

const pt: Dictionary = {
  terminal: {
    welcome: 'Bem-vindo ao meu {{text-orange-500|Portfólio}}',
  },
};

export type Language = 'en' | 'pt';

export const dictionaries: Record<Language, Dictionary> = {
  en,
  pt,
};
const en = {
  terminal: {
    welcome: 'Welcome to my {{text-green-500|Portfolio}}',
  },
};

export type Dictionary = typeof en;

const pt: Dictionary = {
  terminal: {
    welcome: 'Bem-vindo ao meu {{text-green-500|Portfólio}}',
  },
};

export type Language = 'en' | 'pt';

export const dictionaries: Record<Language, Dictionary> = {
  en,
  pt,
};
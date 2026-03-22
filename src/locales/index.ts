import en from './en';
import pt from './pt';

export type Language = 'en' | 'pt';

export const dictionaries: Record<Language, Dictionary> = {
  en,
  pt,
};

export type Dictionary = typeof en;

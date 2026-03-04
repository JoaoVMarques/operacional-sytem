import { create } from 'zustand';
import { dictionaries, Language } from '../locales/translations';

interface LanguageState {
  language: Language
  setLanguage: (lang: Language) => void
  t: (path: string) => string;
}

export const useLanguageStore = create<LanguageState>((set, get) => ({
  language: 'en',

  setLanguage: (lang) => set({ language: lang }),

  t: (path: string) => {
    const keys = path.split('.');

    let current: unknown = dictionaries[get().language];
    for (const key of keys) {
      if (typeof current === 'object' && current !== null && key in current) {
        current = (current as Record<string, unknown>)[key];
      } else {
        return path;
      }
    }

    return typeof current === 'string' ? current : path;
  },
}));
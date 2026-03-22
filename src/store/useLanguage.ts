import { create } from 'zustand';
import { dictionaries, type Language } from '../locales';

interface AppState {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

export const useLanguageStore = create<AppState>((set, get: () => AppState) => ({
  language: 'en',
  setLanguage: (language) => set({ language }),

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

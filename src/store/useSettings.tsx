import { create } from 'zustand';
import { themeColors, ThemeKey } from '../data/Themes';

interface SettingsState {
  currentTheme: ThemeKey;
  setTheme: (theme: ThemeKey) => void;
  themeHexCode: () => string;
}

export const useSettingsStore = create<SettingsState>((set, get) => ({
  currentTheme: 'default',
  themeHexCode: () => { return themeColors[get().currentTheme]; },
  setTheme: (theme) => set({ currentTheme: theme }),
}));
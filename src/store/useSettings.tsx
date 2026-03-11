import { create } from 'zustand';
import { themeColors, ThemeKey } from '../data/Themes';
import { storageLoad, storageSave } from '../utils/storage';

interface SettingsState {
  currentTheme: ThemeKey;
  themeHexCode: () => string;
  setTheme: (theme: ThemeKey) => void;
}

export const useSettingsStore = create<SettingsState>((set, get) => ({
  currentTheme: storageLoad('wallpaper', 'default') as ThemeKey,
  themeHexCode: () => { return themeColors[get().currentTheme]; },
  setTheme: (theme) => {
    storageSave('wallpaper', theme);
    set({ currentTheme: theme });
  },
}));
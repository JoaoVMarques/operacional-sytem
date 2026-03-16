import { create } from 'zustand';
import { themeColors, ThemeKey } from '../data/Themes';
import { storageLoad, storageSave } from '../utils/storage';
interface SettingsState {
  currentTheme: ThemeKey;

  themeHexCode: () => string;

  setTheme: (theme: ThemeKey) => void;
}

const loadTheme = () => {
  const isWallpaper = storageLoad('os-wallpaper');
  return isWallpaper ? isWallpaper : 'default';
};

export const useSettingsStore = create<SettingsState>((set, get) => ({
  currentTheme: loadTheme() as ThemeKey,

  themeHexCode: () => { return themeColors[get().currentTheme]; },

  setTheme: (theme) => {
    storageSave('os-wallpaper', theme);
    set({ currentTheme: theme });
  },
}));
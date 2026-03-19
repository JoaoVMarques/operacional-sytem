import { create } from 'zustand';

interface AppState {
  isMobile: boolean;
  setIsMobile: (isMobile: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isMobile: false,
  setIsMobile: (isMobile) => set({ isMobile }),
}));

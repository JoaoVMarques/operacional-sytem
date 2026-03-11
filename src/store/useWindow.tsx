import { create } from 'zustand';

export type AppId = 'terminal' | 'musics' | 'projects'

interface WindowState {
  windows: Record<AppId, boolean>;
  activeWindow: string | null;
  setActiveWindow: (appName: string) => void;

  openWindow: (id: AppId) => void;
  closeWindow: (id: AppId) => void;
}

export const useWindowStore = create<WindowState>((set) => ({
  activeWindow: null,

  setActiveWindow: (appName) => {set({ activeWindow: appName });},

  windows: {
    terminal: true,
    musics: false,
    projects: false,
  },

  openWindow: (id) => set((state) => {
    set({ activeWindow: id });
    return ({
      windows: { ...state.windows, [id]: true },
    });
  }),

  closeWindow: (id) => set((state) => ({
    windows: { ...state.windows, [id]: false },
  })),
}));
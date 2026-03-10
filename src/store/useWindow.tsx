import { create } from 'zustand';

export type AppId = 'terminal' | 'musics' | 'projects'

interface WindowState {
  windows: Record<AppId, boolean>;

  openWindow: (id: AppId) => void;
  closeWindow: (id: AppId) => void;
}

export const useWindowStore = create<WindowState>((set) => ({
  windows: {
    terminal: true,
    musics: false,
    projects: false,
  },

  openWindow: (id) => set((state) => ({
    windows: { ...state.windows, [id]: true },
  })),

  closeWindow: (id) => set((state) => ({
    windows: { ...state.windows, [id]: false },
  })),
}));
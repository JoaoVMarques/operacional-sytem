import { create } from 'zustand';

type AppId = 'terminal' | 'musics'

interface WindowState {
  windows: Record<AppId, boolean>;

  openWindow: (id: AppId) => void;
  closeWindow: (id: AppId) => void;
}

export const useWindowStore = create<WindowState>((set) => ({
  windows: {
    terminal: true,
    musics: false,
  },

  openWindow: (id) => set((state) => ({
    windows: { ...state.windows, [id]: true },
  })),

  closeWindow: (id) => set((state) => ({
    windows: { ...state.windows, [id]: false },
  })),
}));
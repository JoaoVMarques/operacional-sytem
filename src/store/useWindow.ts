import { create } from 'zustand';
import userIsInMobile from '../utils/mobile';

export type AppId = 'terminal' | 'projects'

interface WindowState {
  Windows: Record<AppId, boolean>;
  focusedWindow: AppId | null;
  openWindow: (id: AppId) => void;
  closeWindow: (id: AppId) => void;
  focusWindow: (id: AppId) => void;
}

export const useWindowStore = create<WindowState>((set) => ({
  Windows: {
    terminal: userIsInMobile() ? false : true,
    projects: false,
  },
  focusedWindow: userIsInMobile() ? null : 'terminal',

  openWindow: (id) => set((state) => ({
    Windows: {
      ...state.Windows,
      [id]: true,
    },
    focusedWindow: id,
  })),

  closeWindow: (id) => set((state) => ({
    Windows: {
      ...state.Windows,
      [id]: false,
    },
  })),

  focusWindow: (id) => set({ focusedWindow: id }),
}));

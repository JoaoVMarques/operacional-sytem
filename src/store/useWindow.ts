import { create } from 'zustand';
import userIsInMobile from '../utils/mobile';

export type AppId = 'terminal'

interface WindowState {
  Windows: Record<AppId, boolean>
  openWindow: (id: AppId) => void;
  closeWindow: (id: AppId) => void;
}

export const useWindowStore = create<WindowState>((set) => ({
  Windows: {
    terminal: userIsInMobile() ? false : true,
  },

  openWindow: (id) => set((state) => ({
    Windows: {
      ...state.Windows,
      [id]: true,
    },
  })),

  closeWindow: (id) => set((state) => ({
    Windows: {
      ...state.Windows,
      [id]: false,
    },
  })),
}));

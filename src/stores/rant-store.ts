import type { Rant } from '@/types/rant.types';
import { create } from 'zustand';

interface States {
  rants: Rant[];
}

interface Actions {
  createRant: (rant: Rant) => void;
}

export const useRantStore = create<States & Actions>((set) => ({
  rants: [],
  createRant: (rant: Rant) =>
    set((state) => ({ rants: [...state.rants, rant] })),
}));

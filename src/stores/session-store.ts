import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SessionStore {
  sessionId: string;
  setSessionId: (sessionId: string) => void;
  reset: () => void;
}

export const useSessionStore = create(
  persist<SessionStore>(
    (set) => ({
      sessionId: '',
      setSessionId: (sessionId: string) => set(() => ({ sessionId })),
      reset: () =>
        set(() => ({
          sessionId: '',
        })),
    }),
    { name: 'session-storage' }
  )
);

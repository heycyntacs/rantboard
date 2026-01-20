import { useSessionStore } from '@/stores/session-store';
import { v4 as uuidv4 } from 'uuid';

export const useSession = () => {
  const sessionId = useSessionStore(({ sessionId }) => sessionId);
  const setSessionId = useSessionStore(({ setSessionId }) => setSessionId);

  const createSessionId = () => {
    if (sessionId) return;

    setSessionId(uuidv4());
  };

  return {
    createSessionId,
  };
};

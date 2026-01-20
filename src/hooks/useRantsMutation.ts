import { addRant } from '@/api/rants';
import { QueryClient, useMutation } from '@tanstack/react-query';

export const useRantMutation = () => {
  return useMutation({
    mutationKey: ['rant'],
    mutationFn: addRant,
    onSuccess: () => {
      const queryClient = new QueryClient();

      queryClient.invalidateQueries({
        queryKey: ['rants'],
      });
    },
  });
};

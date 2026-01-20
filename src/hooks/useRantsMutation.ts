import { addRant } from '@/api/rants';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useRantMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['rant'],
    mutationFn: addRant,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['rants'],
      });
    },
  });
};

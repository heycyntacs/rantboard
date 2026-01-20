import { getRants } from '@/api/rants';
import { useQuery } from '@tanstack/react-query';

export const useRants = () => {
  return useQuery({
    queryKey: ['rants'],
    queryFn: getRants,
  });
};

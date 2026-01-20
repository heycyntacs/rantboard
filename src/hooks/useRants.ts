import { getRants } from '@/api/rants';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useRants = ({ limit }: { limit?: number; page?: number }) => {
  return useInfiniteQuery({
    queryKey: ['rants'],
    queryFn: ({ pageParam }) => {
      return getRants({ limit, page: pageParam });
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage?.pagination?.page + 1;
    },
  });
};

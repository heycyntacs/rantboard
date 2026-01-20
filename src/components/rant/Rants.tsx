import { useRants } from '@/hooks/useRants';
import RantSkeleton from './RantSkeleton';
import type { Rant } from '@/types/rant.types';
import RantCardDialog from './RantCardDialog';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Rants() {
  const { data, isLoading, fetchNextPage, hasNextPage } = useRants({});

  const rants = data?.pages.flatMap((page) => page?.data ?? []) || [];

  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {Array.from({ length: 12 }).map(() => (
          <RantSkeleton />
        ))}
      </div>
    );
  }

  return (
    <InfiniteScroll
      dataLength={rants.length}
      hasMore={hasNextPage}
      next={fetchNextPage}
      loader={null}
      className="grid gap-4 overflow-visible! md:grid-cols-2 md:gap-6 lg:grid-cols-3"
    >
      {rants.map((rant: Rant) => (
        <RantCardDialog key={rant.id} rant={rant} />
      ))}
    </InfiniteScroll>
  );
}

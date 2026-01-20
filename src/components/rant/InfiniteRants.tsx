import type { Rant } from '@/types/rant.types';
import InfiniteScroll from 'react-infinite-scroll-component';
import RantCardDialog from './RantCardDialog';

interface InfiniteRantsProps {
  rants: Rant[];
  hasMore: boolean;
  next: () => void;
}

export default function InfiniteRants({
  rants,
  hasMore,
  next,
}: InfiniteRantsProps) {
  return (
    <InfiniteScroll
      dataLength={rants.length}
      hasMore={hasMore}
      next={next}
      loader={null}
    >
      {rants.map((rant: Rant) => (
        <RantCardDialog key={rant.id} rant={rant} />
      ))}
    </InfiniteScroll>
  );
}

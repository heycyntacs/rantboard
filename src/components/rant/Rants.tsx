import type { Rant, Rant as RantType } from '@/types/rant.types';
import RantCardDialog from './RantCardDialog';
import { useRants } from '@/hooks/useRants';

export default function Rants() {
  const { data, isLoading } = useRants();

  const rants = data?.data;

  if (isLoading) return;

  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
      {rants.length > 0 &&
        rants
          .sort(
            (a: RantType, b: RantType) =>
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime()
          )
          .map((rant: Rant) => <RantCardDialog key={rant.id} rant={rant} />)}
    </div>
  );
}

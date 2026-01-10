import type { Rant as RantType } from '@/types/rant.types';
import Rant from './Rant';
import { useRantStore } from '@/stores/rant-store';

export default function Rants() {
  const rants = useRantStore((state) => state.rants);

  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
      {rants.length > 0 &&
        rants
          .sort(
            (a: RantType, b: RantType) =>
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime()
          )
          .map((rant) => <Rant key={rant.id} rant={rant} />)}
    </div>
  );
}

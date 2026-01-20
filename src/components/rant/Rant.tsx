import type { Rant } from '@/types/rant.types';
import { format } from 'date-fns';

export default function Rant({ rant }: { rant: Rant }) {
  const { title, content, created_at } = rant;
  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-4">
        <p className="text-base">
          {format(created_at, 'MMM d, yyyy · h:mm a')}
        </p>
        <h1 className="text-4xl font-bold md:text-5xl">{title}</h1>
      </div>
      <p className="text-base whitespace-pre-line">{content}</p>
    </div>
  );
}

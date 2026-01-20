import type { Rant } from '@/types/rant.types';
import { format } from 'date-fns';

export default function Rant({ rant }: { rant: Rant }) {
  const { title, content, created_at } = rant;
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p>{format(created_at, 'MMM d, yyyy · h:mm a')}</p>
      <p className="whitespace-pre-line">{content}</p>
    </div>
  );
}

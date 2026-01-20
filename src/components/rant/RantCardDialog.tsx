import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import RantCard from './RantCard';
import type { Rant as RantInterface } from '@/types/rant.types';
import Rant from './Rant';

export default function RantCardDialog({ rant }: { rant: RantInterface }) {
  return (
    <Dialog>
      <DialogTrigger>
        <RantCard rant={rant} />
      </DialogTrigger>
      <DialogContent className="max-h-[80%] min-w-[50%] overflow-y-auto rounded-xl">
        <Rant rant={rant} />
      </DialogContent>
    </Dialog>
  );
}

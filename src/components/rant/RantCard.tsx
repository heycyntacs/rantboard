import type { Rant } from '@/types/rant.types';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
// import { Button } from '../ui/button';
// import { HeartIcon } from '@phosphor-icons/react';
import { formatDistance } from 'date-fns';

export default function RantCard({ rant }: { rant: Rant }) {
  return (
    <Card className="group hover:shadow-primary h-75 cursor-pointer gap-2 p-4 text-left shadow transition-shadow">
      <CardHeader className="p-0">
        <CardTitle className="group-hover:text-primary transition-colors">
          {rant.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="overflow-hidden p-0">
        <p className="line-clamp-8 truncate text-sm leading-relaxed whitespace-pre-line">
          {rant.content}
        </p>
      </CardContent>
      <CardFooter className="mt-auto justify-between border-t p-0! pt-2!">
        <div />
        {/* <Button
          variant="ghost"
          className="text-muted-foreground hover:text-primary flex h-auto items-center rounded-xl py-1 text-sm"
        >
          <HeartIcon size={20} className="mb-0.5" />
          <p>12</p>
        </Button> */}
        <div>
          <p className="text-muted-foreground">
            {formatDistance((new Date(), rant.created_at), new Date(), {
              addSuffix: true,
            })}
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}

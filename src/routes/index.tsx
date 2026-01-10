import DashedGrid from '@/components/DashedGrid';
import Header from '@/components/Header';
import { createFileRoute } from '@tanstack/react-router';
import RantDialog from '@/components/rant/RantDialog';
import Rants from '@/components/rant/Rants';
import { useEffect } from 'react';
import { useSession } from '@/hooks/useSession';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { createSessionId } = useSession();

  useEffect(() => {
    createSessionId();
  }, [createSessionId]);

  return (
    <div className="relative mx-auto min-h-screen w-full max-w-(--breakpoint-2xl)">
      <DashedGrid />
      <div className="relative flex flex-col gap-6 px-4 py-6 lg:p-8">
        <Header />
        <RantDialog />
        <div className="lg:px-10">
          <Rants />
        </div>
      </div>
    </div>
  );
}

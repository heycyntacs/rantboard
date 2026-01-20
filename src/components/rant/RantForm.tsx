import { useRantForm } from '@/hooks/useRantForm';
import { Button } from '../ui/button';

interface RantFormProps {
  closeDialog?: () => void;
}

export default function RantForm({ closeDialog }: RantFormProps) {
  const { form, handleSubmit } = useRantForm();
  const title = form.watch('title');
  const content = form.watch('content');

  const isDisabled = title.length < 2 || content.length < 2;

  return (
    <form
      onSubmit={form.handleSubmit((data) => {
        handleSubmit(data);
        closeDialog?.();
      })}
    >
      <div className="flex h-full flex-col justify-between gap-2 border-none">
        <div className="flex flex-col gap-4">
          <input
            {...form.register('title')}
            className="max-w-[90%] text-lg font-semibold focus:outline-none lg:text-xl"
            placeholder="In today's episode of…."
          />
          <textarea
            {...form.register('content')}
            className="text-sm focus:outline-none lg:text-base"
            placeholder="Go on… we're listening 👀"
            required
            rows={10}
          />
        </div>
        <div className="flex justify-end">
          <Button type="submit" disabled={isDisabled}>
            Post it!
          </Button>
        </div>
      </div>
    </form>
  );
}

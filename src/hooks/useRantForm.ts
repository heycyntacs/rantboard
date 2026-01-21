import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRantMutation } from './useRantsMutation';

const rantFormSchema = z.object({
  title: z.string().min(2, 'Title must have at least 2 characters.'),
  content: z
    .string()
    .min(2, 'Content must have at least 2 characters.')
    .max(10000),
});

export const useRantForm = () => {
  const form = useForm<z.infer<typeof rantFormSchema>>({
    resolver: zodResolver(rantFormSchema),
    defaultValues: {
      title: '',
      content: '',
    },
  });
  const { mutateAsync } = useRantMutation();

  const handleSubmit = (data: z.infer<typeof rantFormSchema>) => {
    const { title, content } = data;

    if (title.length < 2 || content.length < 2) return;

    mutateAsync({ title, content });
  };

  return {
    form,
    handleSubmit,
  };
};

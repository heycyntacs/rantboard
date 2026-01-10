import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRantStore } from '@/stores/rant-store';
import { v4 as uuidv4 } from 'uuid';

const rantFormSchema = z.object({
  title: z.string().min(2, 'Title must have at least 2 characters.'),
  content: z.string().min(2, 'Content must have at least 2 characters.'),
});

export const useRantForm = () => {
  const form = useForm<z.infer<typeof rantFormSchema>>({
    resolver: zodResolver(rantFormSchema),
    defaultValues: {
      title: '',
      content: '',
    },
  });
  const createRant = useRantStore((state) => state.createRant);

  const handleSubmit = (data: z.infer<typeof rantFormSchema>) => {
    const { title, content } = data;

    console.log(data);

    if (content.length < 2) return;

    createRant({
      id: uuidv4(),
      created_at: new Date(),
      title: title,
      content: content,
    });
  };

  return {
    form,
    handleSubmit,
  };
};

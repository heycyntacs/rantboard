import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRantMutation } from './useRantsMutation';
import { MIN_MAX_FORM_LENGTH } from '@/lib/constants';
import { useState } from 'react';

const { TITLE, CONTENT } = MIN_MAX_FORM_LENGTH;

const rantFormSchema = z.object({
  title: z
    .string()
    .min(TITLE.MIN, 'Title must have at least 2 characters.')
    .max(TITLE.MAX),
  content: z
    .string()
    .min(CONTENT.MIN, 'Content must have at least 2 characters.')
    .max(CONTENT.MAX),
});

export const useRantForm = () => {
  const form = useForm<z.infer<typeof rantFormSchema>>({
    resolver: zodResolver(rantFormSchema),
    defaultValues: {
      title: '',
      content: '',
    },
  });
  const [token, setToken] = useState('');
  const { mutateAsync } = useRantMutation();

  const handleSubmit = (data: z.infer<typeof rantFormSchema>) => {
    const { title, content } = data;

    if (
      !token ||
      token === 'error' ||
      token === 'expired' ||
      title.length < TITLE.MIN ||
      content.length < CONTENT.MIN ||
      title.length > TITLE.MAX ||
      content.length > CONTENT.MAX
    )
      return;

    mutateAsync({ title, content, token });
  };

  return {
    form,
    handleSubmit,
    token,
    setToken,
  };
};

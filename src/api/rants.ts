const API_URL = `${import.meta.env.VITE_API_URL}/api/rants`;

export const getRants = async () => {
  const response = await fetch(`${API_URL}/rants?limit=10`);

  return response.json();
};

export const addRant = async ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  if (!title || !content) {
    return {
      error: 'Missing title or content in body',
    };
  }

  try {
    const response = await fetch(`${API_URL}/rant`, {
      method: 'POST',
      body: JSON.stringify({
        created_at: new Date(),
        title: title,
        content: content,
      }),
    });

    const result = await response.json();

    return result;
  } catch (err) {
    console.error(err);
    return {
      error: 'An unkown error occured',
    };
  }
};

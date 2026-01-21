const API_URL = `${import.meta.env.VITE_API_URL}/api/rants`;
const API_KEY = import.meta.env.VITE_API_KEY;

export const getRants = async ({
  limit = 10,
  page = 1,
}: {
  limit?: number;
  page?: number;
}) => {
  try {
    const response = await fetch(
      `${API_URL}/rants?limit=${limit}&page=${page}`,
      {
        headers: {
          'x-api-key': API_KEY,
        },
      }
    );

    if (!response.ok) {
      const error = await response.json();
      return { error: error.error ?? 'Request failed' };
    }

    return response.json();
  } catch (err) {
    console.error(err);
    return {
      error: 'An unknown error occurred',
    };
  }
};

export const addRant = async ({
  title,
  content,
  token,
}: {
  title: string;
  content: string;
  token: string;
}) => {
  try {
    const response = await fetch(`${API_URL}/rant`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
      },
      body: JSON.stringify({
        title: title,
        content: content,
        token: token,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      return { error: error.error ?? 'Request failed' };
    }

    const result = await response.json();

    return result;
  } catch (err) {
    console.error(err);
    return {
      error: 'An unknown error occurred',
    };
  }
};

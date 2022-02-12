import { getJoke } from '../../api';

export const joke = async (): Promise<string> => {
    const joke = await getJoke();
    return `
    Request to the Chuck Norris jokes api resulted in:

    ${joke}
    `;
  };

export const rick = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');

  return `You asked, I delivered.`;
};

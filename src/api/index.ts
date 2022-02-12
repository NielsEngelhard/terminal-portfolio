import axios from 'axios';
import config from '../../config.json';

export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`,
  );

  return data;
};

export const getWeather = async (city: string) => {
  const { data } = await axios.get(`/api/weather/${city}`);

  return data;
};

export const getQuote = async () => {
  const { data } = await axios.get('http://api.quotable.io/random');

  return {
    quote: `“${data.content}” — ${data.author}`,
  };
};

export const getJoke = async () => {
  const { data } = await axios.get('https://api.chucknorris.io/jokes/random');
  return data.value;
}

export const getClientInformation = async () => {
  const { data } = await axios.get('https://ipgeolocation.abstractapi.com/v1/?api_key=1be9a6884abd4c3ea143b59ca317c6b2');
  return data;
}

export const getRandomWord = async () => {
  const { data } = await axios.get('https://random-words-api.vercel.app/word');
  return data;
}

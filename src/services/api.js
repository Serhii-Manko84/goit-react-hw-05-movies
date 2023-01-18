import axios from 'axios';

// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>

export const getTrendingMovies = async () => {
  const URL = `https://api.themoviedb.org/3/trending/all/day`;
  const KEY = 'a43431b6830a1c67f45a08c68d23509d';
  const filter = `?api_key=${KEY}`;

  const { data } = await axios.get(`${URL}${filter}`);

  return data.results;
};

export const getSearchMovies = async (query, page = 1) => {
  const URL = `https://api.themoviedb.org/3/search/movie`;
  const KEY = 'a43431b6830a1c67f45a08c68d23509d';
  const filter = `?api_key=${KEY}&query=${query}&language=en-US&page=${page}&include_adult=false`;

  const { data } = await axios.get(`${URL}${filter}`);

  return data.results;
};

export const getMovieDetails = async movieId => {
  const URL = `https://api.themoviedb.org/3/movie/${movieId}`;
  const KEY = 'a43431b6830a1c67f45a08c68d23509d';
  const filter = `?api_key=${KEY}&language=en-US`;

  const { data } = await axios.get(`${URL}${filter}`);

  return data;
};

export const getMovieCast = async movieId => {
  const URL = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
  const KEY = 'a43431b6830a1c67f45a08c68d23509d';
  const filter = `?api_key=${KEY}&language=en-US`;
  const { data } = await axios.get(`${URL}${filter}`);

  return data.cast;
};

export const getMovieReviews = async movieId => {
  const URL = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
  const KEY = 'a43431b6830a1c67f45a08c68d23509d';
  const filter = `?api_key=${KEY}&language=en-US&page=1`;

  const { data } = await axios.get(`${URL}${filter}`);

  return data.results;
};

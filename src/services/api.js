import axios from "axios";

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTNkNmUzODg2NjliOWI4NDNlMDIzODJjMzZiOGNhZSIsIm5iZiI6MTc0NjA0MDIxMS42NTQsInN1YiI6IjY4MTI3NTkzOGJiYjY5NDJhZWFlYjMzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yU1aX_HS_8kyu0l49GmkzDOUryAhWc60OUQWMVt9Wb4";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers["Authorization"] = `Bearer ${API_TOKEN}`;

const fetchTrendingMovies = async (_, signal) => {
  const response = await axios.get("/trending/movie/day", { signal });
  return response.data.results;
};

const fetchMovieById = async (movieId, signal) => {
  const response = await axios.get(`/movie/${movieId}`, { signal });
  return response.data;
};

const fetchMovieByQuery = async (query, signal) => {
  if (!query) return null;
  const response = await axios.get(`/search/movie?query=${query}`, { signal });
  return response.data.results;
};

const fetchMovieCast = async (movieId, signal) => {
  const response = await axios.get(`movie/${movieId}/credits`, { signal });
  return response.data.cast;
};

const fetchMovieReviews = async (movieId, signal) => {
  const response = await axios.get(`movie/${movieId}/reviews`, { signal });
  return response.data.results;
};

export default {
  fetchTrendingMovies,
  fetchMovieById,
  fetchMovieByQuery,
  fetchMovieCast,
  fetchMovieReviews,
};

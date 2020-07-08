const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "506bcc29a34824139cf50d563d42edd4";
const IMAGE_URL = "http://image.tmdb.org/t/p/";

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}`;

// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = "w1280";
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = "w500";

export {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
};

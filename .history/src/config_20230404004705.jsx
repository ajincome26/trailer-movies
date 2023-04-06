export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "6e2ea33bcf2956646c3705faf6eeb787";
const tmdbBase = "https://api.themoviedb.org/3/movie/";
export const tmdbApi = {
  getMoviesList: (type) => `${tmdbBase}${type}?api_key=${apiKey}`,
  getMoviesDetails: (movieId) => `${tmdbBase}${movieId}?api_key=${apiKey}`,
  getMoviesInfo: (movieId, info) =>
    `${tmdbBase}${movieId}/${info}?api_key=${apiKey}`,
  imageOriginal: (url) => `https://image.tmdb.org/t/p/original${url})`,
};

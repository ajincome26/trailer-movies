export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "6e2ea33bcf2956646c3705faf6eeb787";
// https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}
const tmdbBase = "https://api.themoviedb.org/3/movie/";
export const tmdbApi = {
  getMoviesList: (type) => `${tmdbBase}${type}?api_key=${apiKey}`,
};

import React from "react";
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=
const MovieDetailsPage = () => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=6e2ea33bcf2956646c3705faf6eeb787`,
    fetcher
  );
  const movies = data?.results || [];
  return <div>MovieDetailsPage</div>;
};

export default MovieDetailsPage;

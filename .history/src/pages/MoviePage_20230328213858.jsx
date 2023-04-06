import React from "react";
import MovieList from "../components/movie/MovieList";

const MoviePage = () => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/latest?api_key=6e2ea33bcf2956646c3705faf6eeb787`,
    fetcher
  );
  return (
    <div>
      <MovieList type="latest" />
    </div>
  );
};

export default MoviePage;

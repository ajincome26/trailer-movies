import React from "react";
import MovieList from "../components/movie/MovieList";
import useSWR from "swr";
import { fetcher } from "../config";

const MoviePage = () => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=6e2ea33bcf2956646c3705faf6eeb787`,
    fetcher
  );
  console.log(data);
  return (
    <div>
      <MovieList type="popular" />
    </div>
  );
};

export default MoviePage;

import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../config";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=6e2ea33bcf2956646c3705faf6eeb787`,
    fetcher
  );
  const movie = data || [];
  console.log(movie);
  return <div>MovieDetailsPage</div>;
};

export default MovieDetailsPage;

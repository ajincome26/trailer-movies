import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../config";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
    fetcher
  );
  const movie = data || [];
  const { backdrop_path } = movie;
  return (
    <div>
      <div className="background">{movie}</div>
    </div>
  );
};

export default MovieDetailsPage;

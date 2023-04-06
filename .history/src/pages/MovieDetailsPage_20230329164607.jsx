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
  const { backdrop_path } = data || [];
  return (
    <div>
      <div className="background">
        <img
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
          alt=""
        />
      </div>
    </div>
  );
};

export default MovieDetailsPage;

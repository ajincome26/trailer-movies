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
      <div className="background w-full h-screen bg-[url(`https://image.tmdb.org/t/p/original${backdrop_path}`)] bg-no-repeat bg-cover bg-bottom">
        {/* <img
          src={``}
          alt=""
          className="w-full h-full object-cover"
        /> */}
      </div>
    </div>
  );
};

export default MovieDetailsPage;

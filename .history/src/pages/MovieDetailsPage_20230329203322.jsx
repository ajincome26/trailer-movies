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
    <>
      <div className="background w-full h-[600px] relative">
        <div className="overlay absolute inset-0 bg-black opacity-20"></div>
        <div
          className="w-full h-full bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(
            https://image.tmdb.org/t/p/original${backdrop_path})`,
          }}
        ></div>
      </div>
      <div className="w-full h-[300px]">
        <img
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
          alt="img"
          className="w-[60%] h-full object-cover relative top-[-50%] left-[50%] -translate-x-1/2"
        />
      </div>
    </>
  );
};

export default MovieDetailsPage;

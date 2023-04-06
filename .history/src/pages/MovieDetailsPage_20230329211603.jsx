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
  const { backdrop_path, title, genre_ids } = data || [];
  return (
    <>
      <div className="background w-full h-[600px] relative">
        <div className="overlay absolute inset-0 bg-black opacity-50"></div>
        <div
          className="w-full h-full bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(
            https://image.tmdb.org/t/p/original${backdrop_path})`,
          }}
        ></div>
      </div>
      <div className="w-[60%] h-[400px] mx-auto translate-y-[-50%] -mb-[200px]">
        <img
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
          alt="img"
          className="w-full h-full object-cover relative rounded-xl"
        />
      </div>
      <h1 className="my-10 text-2xl font-semibold text-center">{title}</h1>
      <div className="flex items-center gap-x-5 mb-5">
        {genre_ids?.length > 0 &&
          genre_ids.map((item) => <span>{genre_ids[0]}</span>)()}
      </div>
    </>
  );
};

export default MovieDetailsPage;

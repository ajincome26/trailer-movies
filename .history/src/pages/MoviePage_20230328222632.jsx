import React from "react";
import MovieList from "../components/movie/MovieList";
import useSWR from "swr";
import { fetcher } from "../config";
import MovieCard from "../components/movie/MovieCard";

const MoviePage = () => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=6e2ea33bcf2956646c3705faf6eeb787`,
    fetcher
  );
  const movies = data?.results || [];
  return (
    <div>
      <div className="">
        <div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Type here to search ..."
          />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-x-3 gap-y-5 page-container">
        {movies?.map((item) => (
          <MovieCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MoviePage;

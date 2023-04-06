import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { fetcher } from "../../config";
import useSWR from "swr";
import MovieCard from "./MovieCard";

const MovieList = ({ type }) => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=6e2ea33bcf2956646c3705faf6eeb787`,
    fetcher
  );
  const movies = data?.results || [];
  return (
    <div className="movies-list">
      <Swiper grabCursor="true" spaceBetween={40} slidesPerView="auto">
        {movies?.map((item) => (
          <SwiperSlide key={item.id}>
            <MovieCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieList;

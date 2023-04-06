import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { apiKey, fetcher, tmdbApi } from "../../config";
import useSWR from "swr";
import MovieCard from "./MovieCard";

const MovieList = ({ type }) => {
  const { data, error } = useSWR(tmdbApi.getMoviesList(type), fetcher);
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

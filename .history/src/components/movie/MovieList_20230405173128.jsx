import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { fetcher, tmdbApi } from "@/config";
import useSWR from "swr";
import MovieCard from "./MovieCard";
import CardSkeleton from "../skeleton/CardSkeleton";
import { v4 } from "uuid";

const MovieList = ({ type }) => {
  const { data, error } = useSWR(tmdbApi.getMoviesList(type), fetcher);
  const loading = !data && !error;
  const movies = data?.results || [];
  return loading ? (
    <div className="movies-list">
      <Swiper grabCursor="true" spaceBetween={40} slidesPerView="auto">
        {new Array(4).fill(0).map(() => (
          <SwiperSlide key={v4()}>
            <CardSkeleton />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  ) : (
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

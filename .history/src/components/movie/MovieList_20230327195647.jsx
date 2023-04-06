import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import { fetcher } from "../../config";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const { data, error } = useSWR(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=6e2ea33bcf2956646c3705faf6eeb787",
    fetcher
  );
  return (
    <div className="movies-list">
      <Swiper grabCursor="true" spaceBetween={40} slidesPerView="auto">
        <SwiperSlide>
          <MovieCard />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MovieList;

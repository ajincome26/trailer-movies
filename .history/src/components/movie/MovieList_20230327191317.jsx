import React from "react";
import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";

const MovieList = () => {
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

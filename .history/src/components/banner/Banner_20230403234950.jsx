import React from "react";
import useSWR from "swr";
import { apiKey, fetcher, tmdbApi } from "../../config";
import BannerItem from "./BannerItem";
import { SwiperSlide, Swiper } from "swiper/react";

const Banner = () => {
  const { data, error } = useSWR(
    tmdbApi.getMoviesList("upcoming"),
    // `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`,
    fetcher
  );
  const movies = data?.results;
  return (
    <section className="banner page-container h-[500px] overflow-hidden rounded-lg">
      <Swiper grabCursor="true" slidesPerView="auto">
        {movies?.map((item) => (
          <SwiperSlide key={item.id}>
            <BannerItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;

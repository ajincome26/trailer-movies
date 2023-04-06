import React from "react";
import useSWR from "swr";
import { fetcher, tmdbApi } from "../../config";
import BannerItem from "./BannerItem";
import { SwiperSlide, Swiper } from "swiper/react";

const Banner = () => {
  const { data, error } = useSWR(tmdbApi.getMoviesList("upcoming"), fetcher);
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

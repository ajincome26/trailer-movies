import React from "react";
import useSWR from "swr";
import { fetcher } from "../../config";
import BannerItem from "./BannerItem";
import { SwiperSlide, Swiper } from "swiper/react";

const Banner = () => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=6e2ea33bcf2956646c3705faf6eeb787`,
    fetcher
  );
  const movies = data?.results;
  console.log(movies);
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

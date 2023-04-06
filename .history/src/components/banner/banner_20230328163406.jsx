import React, { useEffect, useState } from "react";
import icons from "../../utils/icons";
import useSWR from "swr";
import { fetcher } from "../../config";
import BannerItem from "./BannerItem";

const { BsFillPlayCircleFill, HiPlus } = icons;

const Banner = () => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=6e2ea33bcf2956646c3705faf6eeb787`,
    fetcher
  );
  const movies = data?.results;
  return (
    <section className="banner page-container h-[500px]">
      <Swiper>
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

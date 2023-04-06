import React, { useEffect, useState } from "react";
import icons from "../../utils/icons";
import useSWR from "swr";
import { fetcher } from "../../config";
import { SwiperSlide, Swiper } from "swiper/react";

const { BsFillPlayCircleFill, HiPlus } = icons;

const Banner = () => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=6e2ea33bcf2956646c3705faf6eeb787`,
    fetcher
  );
  const movies = data?.results;
  console.log(movies);
  return (
    <section className="banner page-container h-[500px]">
      <Swiper>
        <SwiperSlide>
          <BannerItem></BannerItem>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;

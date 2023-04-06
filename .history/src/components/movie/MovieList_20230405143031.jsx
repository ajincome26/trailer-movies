import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { fetcher, tmdbApi } from "@/config";
import useSWR from "swr";
import MovieCard from "./MovieCard";
import CardSkeleton from "../skeleton/CardSkeleton";

const MovieList = ({ type }) => {
  const { data, error } = useSWR(tmdbApi.getMoviesList(type), fetcher);
  const loading = !data && !error;
  const movies = data?.results || [];
  return !loading && <CardSkeleton />;
};

export default MovieList;

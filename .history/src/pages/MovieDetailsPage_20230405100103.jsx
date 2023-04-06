import React from "react";
import { useParams } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import MovieCard from "@/components/movie/MovieCard";
import { fetcher, tmdbApi } from "@/config";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(tmdbApi.getMoviesDetails(movieId), fetcher);
  const { backdrop_path, title, genres, overview } = data || [];
  return (
    <div className="pb-5">
      <div className="background w-full h-[600px] relative">
        <div className="overlay absolute inset-0 bg-black opacity-50"></div>
        <div
          className="w-full h-full bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(
            ${tmdbApi.imageQuality(backdrop_path, "original")})`,
          }}
        ></div>
      </div>
      <div className="w-[60%] mx-auto">
        <div className="w-full h-[400px] translate-y-[-50%] -mb-[200px]">
          <img
            src={tmdbApi.imageQuality(backdrop_path, "original")}
            alt="img"
            className="w-full h-full object-cover relative rounded-xl"
          />
        </div>
        <h1 className="my-10 text-2xl font-semibold text-center">{title}</h1>
        {genres?.length > 0 && (
          <div className="flex items-center gap-x-10 w-full px-10 mb-10 justify-center">
            {genres?.map((item, index) => (
              <span
                key={index}
                className="px-5 py-2 rounded-3xl border border-primary text-primary"
              >
                {item.name}
              </span>
            ))}
          </div>
        )}
        <p className="text-center font-light text-sm tracking-wide w-2/3 mx-auto text-slate-300">
          {overview}
        </p>

        <MovieCredits />
        <MovieTrailer />
      </div>
      <MovieSimilar />
    </div>
  );
};

function MovieMeta(type) {
  const { movieId } = useParams();
  const { data, error } = useSWR(tmdbApi.getMoviesInfo(movieId, type), fetcher);
  const results = (type === "credits" ? data?.cast : data?.results) || [];
  return (
    <>
      {type === "credits" ? (
        <div>
          <h1 className="my-10 text-xl font-semibold text-center">CASTS</h1>
          <div className="grid grid-cols-5 gap-2">
            {results.slice(0, 5)?.map((item) => (
              <div key={item.cast_id} className="text-center h-[220px]">
                <img
                  src={tmdbApi.imageQuality(item?.profile_path, "w500")}
                  alt="actor"
                  className="w-full h-full object-cover rounded-md mb-2"
                />
                <span>{item?.name}</span>
              </div>
            ))}
          </div>
        </div>
      ) : type === "videos" ? (
        <div>
          <h1 className="mb-10 mt-20 text-xl font-semibold text-center">
            VIDEOS
          </h1>
          <div className="flex flex-col gap-10">
            {results.length > 0 &&
              results.slice(0, 3)?.map((item, index) => (
                <div key={index}>
                  <h3 className="px-5 py-3 bg-secondary inline border border-slate-300">
                    {item?.name}
                  </h3>
                  <iframe
                    width="885"
                    height="498"
                    src={`https://www.youtube.com/embed/${item?.key}`}
                    title={item?.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="mt-5"
                  ></iframe>
                </div>
              ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

function MovieCredits() {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    tmdbApi.getMoviesInfo(movieId, "credits"),
    fetcher
  );
  const casts = data?.cast || [];
  return (
    <>
      <h1 className="my-10 text-xl font-semibold text-center">CASTS</h1>
      <div className="grid grid-cols-5 gap-2">
        {casts.slice(0, 5)?.map((item) => (
          <div key={item.cast_id} className="text-center h-[220px]">
            <img
              src={tmdbApi.imageQuality(item?.profile_path, "w500")}
              alt="actor"
              className="w-full h-full object-cover rounded-md mb-2"
            />
            <span>{item?.name}</span>
          </div>
        ))}
      </div>
    </>
  );
}
function MovieTrailer() {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    tmdbApi.getMoviesInfo(movieId, "videos"),
    fetcher
  );
  const videos = data?.results || [];
  return (
    <>
      <h1 className="mb-10 mt-20 text-xl font-semibold text-center">VIDEOS</h1>
      <div className="flex flex-col gap-10">
        {videos.length > 0 &&
          videos.slice(0, 3)?.map((item, index) => (
            <div key={index}>
              <h3 className="px-5 py-3 bg-secondary inline border border-slate-300">
                {item?.name}
              </h3>
              <iframe
                width="885"
                height="498"
                src={`https://www.youtube.com/embed/${item?.key}`}
                title={item?.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="mt-5"
              ></iframe>
            </div>
          ))}
      </div>
    </>
  );
}
function MovieSimilar() {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    tmdbApi.getMoviesInfo(movieId, "similar"),
    fetcher
  );
  const movies = data?.results || [];
  return (
    <>
      <h1 className="mb-10 mt-20 text-xl font-semibold uppercase">
        Movies Similar
      </h1>
      <div className="movies-similar">
        <Swiper grabCursor="true" spaceBetween={40} slidesPerView="auto">
          {movies?.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default MovieDetailsPage;

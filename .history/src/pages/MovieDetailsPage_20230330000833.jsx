import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../config";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
    fetcher
  );
  const { backdrop_path, title, genres, overview } = data || [];
  return (
    <>
      <div className="background w-full h-[600px] relative">
        <div className="overlay absolute inset-0 bg-black opacity-50"></div>
        <div
          className="w-full h-full bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(
            https://image.tmdb.org/t/p/original${backdrop_path})`,
          }}
        ></div>
      </div>
      <div className="w-[60%] mx-auto">
        <div className="w-full h-[400px] translate-y-[-50%] -mb-[200px]">
          <img
            src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
            alt="img"
            className="w-full h-full object-cover relative rounded-xl"
          />
        </div>
        <h1 className="my-10 text-2xl font-semibold text-center">{title}</h1>
        {genres?.length > 0 && (
          <div className="flex items-center gap-x-10 w-full mx-auto px-10 mb-10">
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
    </>
  );
};

function MovieCredits() {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`,
    fetcher
  );
  const casts = data?.cast || [];
  return (
    <div>
      <h1 className="my-10 text-xl font-semibold text-center">CASTS</h1>
      <div className="grid grid-cols-5 gap-2">
        {casts.slice(0, 5)?.map((item) => (
          <div key={item.cast_id} className="text-center h-[220px]">
            <img
              src={`https://image.tmdb.org/t/p/w500${item?.profile_path}`}
              alt="actor"
              className="w-full h-full object-cover rounded-md mb-2"
            />
            <span>{item?.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
function MovieTrailer() {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`,
    fetcher
  );
  console.log(data?.results);
  const videos = data?.results || [];
  return (
    <>
      <h1></h1>
      <div className="mt-20 flex flex-col gap-5">
        {videos.length > 0 &&
          videos.slice(0, 4)?.map((item) => (
            <div>
              <h3 className="">{item?.name}</h3>
              <iframe
                width="885"
                height="498"
                src={`https://www.youtube.com/embed/${item?.key}`}
                title={item?.name}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          ))}
      </div>
    </>
  );
}

export default MovieDetailsPage;

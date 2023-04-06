import React, { useState } from "react";
import icons from "../../utils/icons";
import useSWR from "swr";

const { BsFillPlayCircleFill, HiPlus } = icons;

const Banner = () => {
  const [movies, setMovies] = useState([]);
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=6e2ea33bcf2956646c3705faf6eeb787`,
    fetcher
  );
  useEffect(() => {
    setMovies(data?.results);
  }, [data]);
  return (
    <section className="banner page-container h-[500px]">
      <div className="rounded-xl w-full h-full relative overflow-hidden">
        <div className="w-full h-full relative">
          <div className="overlay inset-0 absolute bg-gradient-to-t from-black"></div>
          <img
            src="https://rare-gallery.com/uploads/posts/318184-Avengers-Endgame-Thanos-4K.jpg"
            alt="banner"
            className="w-full h-full object-cover object-bottom"
          />
        </div>
        <div className="absolute text-white bottom-5 left-5">
          <h2 className="text-3xl font-semibold mb-5">Avengers: Endgame</h2>
          <div className="flex items-center gap-x-3 text-sm mb-5">
            <span className="py-2 px-3 rounded-md border border-[#ccc]">
              Action
            </span>
            <span className="py-2 px-3 rounded-md border border-[#ccc]">
              Adventure
            </span>
            <span className="py-2 px-3 rounded-md border border-[#ccc]">
              Drama
            </span>
          </div>
          <div className="flex items-center gap-x-3">
            <button className="px-10 py-3 bg-primary rounded-xl flex items-center gap-x-2 font-semibold">
              Watch
              <BsFillPlayCircleFill />
            </button>
            <button className="p-3 bg-opacity-90 bg-[#4a4242] rounded-xl font-semibold">
              <HiPlus fontSize={25} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

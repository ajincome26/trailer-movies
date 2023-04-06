import React from "react";
import icons from "../../utils/icons";

const { BsFillPlayCircleFill, HiPlus, AiFillStar } = icons;
const MovieCard = ({ item }) => {
  const { title, release_date, vote_average, poster_path } = item;
  return (
    <div className="movie-item rounded-lg p-2 bg-slate-700 flex flex-col gap-3 select-none">
      <div className="rounded-lg overflow-hidden relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt="captain"
          className="w-full h-[270px] object-cover object-top"
        />
        <button className="p-2 bg-opacity-90 bg-[#4a4242] rounded-xl font-semibold absolute top-2 right-2">
          <HiPlus fontSize={20} />
        </button>
      </div>
      <div className="flex flex-col flex-1">
        <h3 className="font-semibold cursor-pointer" title={title}>
          {title}
        </h3>
        <div className="flex items-center justify-between text-xs mt-2 opacity-80">
          <span>{release_date.split("-")[0]}</span>
          <div className="flex items-center gap-x-1">
            <span>{vote_average}</span>
            <AiFillStar color="yellow" size={18} />
          </div>
        </div>
        <button className="px-10 py-3 bg-primary rounded-xl flex items-center justify-center gap-x-2 font-semibold w-full">
          Watch Now
          <BsFillPlayCircleFill />
        </button>
      </div>
    </div>
  );
};

export default MovieCard;

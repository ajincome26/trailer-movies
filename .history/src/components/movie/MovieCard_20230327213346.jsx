import React from "react";
import icons from "../../utils/icons";

const { BsFillPlayCircleFill, HiPlus, AiFillStar } = icons;
const MovieCard = ({ item }) => {
  return (
    <div className="movie-item rounded-lg p-2 bg-slate-700 flex flex-col gap-3">
      <div className="rounded-lg overflow-hidden relative">
        <img
          src="https://w0.peakpx.com/wallpaper/177/218/HD-wallpaper-captain-america-in-avengers-endgame.jpg"
          alt="captain"
          className="w-full h-[270px] object-cover object-top"
        />
        <button className="p-2 bg-opacity-90 bg-[#4a4242] rounded-xl font-semibold absolute top-2 right-2">
          <HiPlus fontSize={20} />
        </button>
      </div>
      <div>
        <h3 className="font-semibold cursor-pointer truncate-1">
          {item?.title}
        </h3>
        <div className="flex items-center justify-between text-xs mt-2 opacity-80">
          <span>2016</span>
          <div className="flex items-center gap-x-1">
            <span>7.4</span>
            <AiFillStar color="yellow" size={18} />
          </div>
        </div>
      </div>
      <button className="px-10 py-3 bg-primary rounded-xl flex items-center justify-center gap-x-2 font-semibold w-full">
        Watch Now
        <BsFillPlayCircleFill />
      </button>
    </div>
  );
};

export default MovieCard;

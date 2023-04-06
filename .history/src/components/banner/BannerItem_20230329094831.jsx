import React from "react";
import icons from "../../utils/icons";
import { useNavigate } from "react-router-dom";

const { BsFillPlayCircleFill, HiPlus } = icons;
const BannerItem = ({ item }) => {
  const { title, backdrop_path } = item;
  const navigate = useNavigate();
  return (
    <div className="rounded-xl w-full h-full relative overflow-hidden">
      <div className="w-full h-full relative">
        <div className="overlay inset-0 absolute bg-gradient-to-t from-black"></div>
        <img
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
          alt="banner-item"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="absolute text-white bottom-5 left-5">
        <h2 className="text-3xl font-semibold mb-5">{title}</h2>
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
          <button
            className="px-10 py-3 bg-primary rounded-xl flex items-center gap-x-2 font-semibold"
            onClick={() => navigate()}
          >
            Watch
            <BsFillPlayCircleFill />
          </button>
          <button className="p-3 bg-opacity-90 bg-[#4a4242] rounded-xl font-semibold">
            <HiPlus fontSize={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerItem;

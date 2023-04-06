import React from "react";
import icons from "@/utils/icons";
import Button from "@/components/buttons/Button";
import { useNavigate } from "react-router-dom";
import { tmdbApi } from "@/config";

const { HiPlus } = icons;
const BannerItem = ({ item }) => {
  const navigate = useNavigate();
  const { title, backdrop_path, id } = item;
  return (
    <div className="rounded-xl w-full h-full relative overflow-hidden">
      <div className="w-full h-full relative">
        <div className="overlay inset-0 absolute bg-gradient-to-t from-black"></div>
        <img
          src={tmdbApi.imageQuality(backdrop_path, "original")}
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
          <Button title="Watch" onClick={() => navigate(`/movies/${id}`)} />
          <button className="p-3 bg-opacity-90 bg-[#4a4242] rounded-xl font-semibold">
            <HiPlus fontSize={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerItem;

import React from "react";
import icons from "@/utils/icons";

const { BsFillPlayCircleFill } = icons;

const Button = ({ title, onClick, padding }) => {
  return (
    <button
      className={`${
        padding || "px-10 py-3"
      } bg-primary rounded-xl flex items-center justify-center gap-x-2 font-semibold mt-auto`}
      onClick={onClick}
    >
      {title}
      <BsFillPlayCircleFill />
    </button>
  );
};

export default Button;

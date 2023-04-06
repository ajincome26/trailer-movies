import React from "react";
import icons from "../../utils/icons";

const { BsFillPlayCircleFill } = icons;

const Button = ({ onClick, padding }) => {
  return (
    <button
      className={`${
        padding || "px-10 py-3"
      } bg-primary rounded-xl flex items-center justify-center gap-x-2 font-semibold w-full mt-auto`}
      onClick={onClick}
    >
      Watch Now
      <BsFillPlayCircleFill />
    </button>
  );
};

export default Button;

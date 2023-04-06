import React from "react";
import icons from "../../utils/icons";

const { BsFillPlayCircleFill } = icons;

const Button = ({}) => {
  return (
    <button
      className="px-10 py-3 bg-primary rounded-xl flex items-center justify-center gap-x-2 font-semibold w-full mt-auto"
      onClick={() => navigate(`/movies/${id}`)}
    >
      Watch Now
      <BsFillPlayCircleFill />
    </button>
  );
};

export default Button;

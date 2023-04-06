import React from "react";

const Button = () => {
  return (
    <button className="px-10 py-3 bg-primary rounded-xl flex items-center gap-x-2 font-semibold">
      Watch
      <BsFillPlayCircleFill />
    </button>
  );
};

export default Button;

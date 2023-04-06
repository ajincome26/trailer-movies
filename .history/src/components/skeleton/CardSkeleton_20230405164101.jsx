import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = () => {
  return (
    <div className="card-skeleton movie-item rounded-lg p-2 bg-slate-700 flex flex-col gap-3 select-none h-full">
      <Skeleton height={270} />

      <div className="flex flex-col flex-1 gap-3">
        <Skeleton />
        <h3 className="font-semibold cursor-pointer" title={title}>
          {title}
        </h3>
        <div className="flex items-center justify-between text-xs opacity-80">
          <span>{release_date?.split("-")[0]}</span>
          <div className="flex items-center gap-x-1">
            <span>{vote_average}</span>
            <AiFillStar color="yellow" size={18} />
          </div>
        </div>
        <Button title="Watch Now" onClick={() => navigate(`/movies/${id}`)} />
      </div>
    </div>
  );
};

export default CardSkeleton;

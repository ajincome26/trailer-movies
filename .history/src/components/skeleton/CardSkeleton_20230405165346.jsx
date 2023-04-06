import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = () => {
  return (
    <div className="card-skeleton movie-item rounded-lg p-2 bg-slate-700 flex flex-col gap-3 select-none h-full">
      <Skeleton width="100%" height={270} />

      <div className="flex flex-col flex-1 gap-3">
        <Skeleton width="50%" />

        <div className="flex items-center justify-between text-xs opacity-80">
          <Skeleton width="20%" />
          <Skeleton width="10%" />
        </div>
        {/* <Button title="Watch Now" onClick={() => navigate(`/movies/${id}`)} /> */}
      </div>
    </div>
  );
};

export default CardSkeleton;

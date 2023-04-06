import React from "react";
import icons from "@/utils/icons";
import { useNavigate } from "react-router-dom";
import Button from "@/components/buttons/Button";
import { tmdbApi } from "@/config";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";

const { HiPlus, AiFillStar } = icons;
const MovieCard = ({ item }) => {
  const navigate = useNavigate();
  const { title, release_date, vote_average, poster_path, id } = item;
  return (
    <div className="movie-item rounded-lg p-2 bg-slate-700 flex flex-col gap-3 select-none h-full">
      <div className="rounded-lg overflow-hidden relative">
        <img
          src={tmdbApi.imageQuality(poster_path, "w500")}
          alt={title}
          className="w-full h-[270px] object-cover object-top"
        />
        <button className="p-2 bg-opacity-90 bg-[#4a4242] rounded-xl font-semibold absolute top-2 right-2">
          <HiPlus fontSize={20} />
        </button>
      </div>

      <div className="flex flex-col flex-1 gap-3">
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
MovieCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    poster_path: PropTypes.string,
    id: PropTypes.string,
  }),
};
export default withErrorBoundary(MovieCard, {
  fallback: <div>Something went wrong</div>,
});

import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { apiKey, fetcher } from "../config";
import MovieCard from "../components/movie/MovieCard";
import icons from "../utils/icons";
import useDebounce from "../hooks/useDebounce";
import { InfinitySpin } from "react-loader-spinner";

const { HiOutlineSearch } = icons;
const MoviePage = () => {
  const [filterValue, setFilterValue] = useState("");
  const [loading, setLoading] = useState(false);
  const debounceFilter = useDebounce(filterValue, 500);
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
  );
  const handleChangeFilter = (e) => {
    setFilterValue(e.target.value);
  };
  useEffect(() => {
    debounceFilter
      ? setUrl(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${debounceFilter}`
        )
      : setUrl(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
  }, [debounceFilter]);
  const { data, error } = useSWR(url, fetcher);
  const movies = data?.results || [];
  return (
    <div className="page-container w-full flex flex-col gap-5 mt-5 pb-5">
      <div className="flex">
        <div className="w-full">
          <input
            type="text"
            className="w-full p-3 bg-slate-700 outline-none border border-slate-700 focus:border-white transition-all duration-200 ease-linear"
            name="search"
            placeholder="Type here to search ..."
            onChange={handleChangeFilter}
          />
        </div>
        <button className="bg-primary py-2 px-4 outline-none flex-1">
          <HiOutlineSearch size={20} />
        </button>
      </div>
      {loading ? (
        <InfinitySpin width="200" color="#4fa94d" />
      ) : (
        <div className="grid grid-cols-5 gap-x-3 gap-y-5">
          {movies?.map((item) => (
            <MovieCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

{
  /* <InfinitySpin width="200" color="#4fa94d" /> */
}
export default MoviePage;

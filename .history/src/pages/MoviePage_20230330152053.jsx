import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { apiKey, fetcher } from "../config";
import MovieCard from "../components/movie/MovieCard";
import icons from "../utils/icons";
import useDebounce from "../hooks/useDebounce";

const { HiOutlineSearch } = icons;
// https://api.themoviedb.org/3/search/movie?api_key=${apiKey}
const MoviePage = () => {
  const [filter, setFilter] = useState("");
  const debounceFilter = useDebounce(filter, 500);
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
  );
  const handleFilter = (e) => {
    setFilter(e.target.value);
  };
  useEffect(() => {
    if (debounceFilter) {
      setUrl(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}`);
    } else {
      setUrl(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
    }
  }, [debounceFilter]);
  const { data, error } = useSWR(url, fetcher);
  const movies = data?.results || [];
  return (
    <div className="page-container w-full flex flex-col gap-5 mt-5">
      <div className="flex">
        <div className="w-full">
          <input
            type="text"
            className="w-full p-3 bg-slate-700 outline-none border border-slate-700 focus:border-white transition-all duration-200 ease-linear"
            name="search"
            placeholder="Type here to search ..."
            onClick={handleFilter}
          />
        </div>
        <button className="bg-primary py-2 px-4 outline-none flex-1">
          <HiOutlineSearch size={20} />
        </button>
      </div>
      <div className="grid grid-cols-5 gap-x-3 gap-y-5">
        {movies?.map((item) => (
          <MovieCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MoviePage;

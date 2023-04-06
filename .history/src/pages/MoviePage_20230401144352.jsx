import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { apiKey, fetcher } from "../config";
import MovieCard from "../components/movie/MovieCard";
import icons from "../utils/icons";
import useDebounce from "../hooks/useDebounce";
import { InfinitySpin } from "react-loader-spinner";

const {
  HiOutlineSearch,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} = icons;
const pageCount = 5;
const MoviePage = () => {
  const [page, setPage] = useState(1);
  const [filterValue, setFilterValue] = useState("");
  const debounceFilter = useDebounce(filterValue, 500);
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`
  );
  const handleChangeFilter = (e) => {
    setFilterValue(e.target.value);
  };
  useEffect(() => {
    debounceFilter
      ? setUrl(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${debounceFilter}&page=${page}`
        )
      : setUrl(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`
        );
  }, [debounceFilter, page]);
  const { data, error } = useSWR(url, fetcher);
  const movies = data?.results || [];
  const loading = !data && !error;
  console.log(data);
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
        <div className="mx-auto">
          <InfinitySpin width="200" color="#4fa94d" />
        </div>
      ) : (
        <div className="grid grid-cols-5 gap-x-3 gap-y-5">
          {movies?.map((item) => (
            <MovieCard key={item.id} item={item} />
          ))}
        </div>
      )}
      <div className="flex items-center justify-center gap-3 my-5">
        <span className="cursor-pointer" onClick={() => setPage(index - 1)}>
          <MdKeyboardDoubleArrowLeft />
        </span>
        {new Array(pageCount).fill(1).map((item, index) => (
          <span
            className="px-3 py-2 bg-white text-slate-800 leading-none rounded cursor-pointer"
            onClick={() => setPage(index + 1)}
          >
            {index + 1}
          </span>
        ))}
        <span className="cursor-pointer" onClick={() => setPage(index + 1)}>
          <MdKeyboardDoubleArrowRight />
        </span>
      </div>
    </div>
  );
};

export default MoviePage;

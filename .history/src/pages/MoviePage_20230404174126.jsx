import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher, tmdbApi } from "../config";
import MovieCard from "../components/movie/MovieCard";
import useDebounce from "../hooks/useDebounce";
import { InfinitySpin } from "react-loader-spinner";
import ReactPaginate from "react-paginate";
import icons from "@/utils/icons";

const itemsPerPage = 20;

const {
  HiOutlineSearch,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} = icons;
const MoviePage = () => {
  const [curentPage, setCurrentPage] = useState(1);
  const [filterValue, setFilterValue] = useState("");
  const debounceFilter = useDebounce(filterValue, 500);
  const [url, setUrl] = useState(tmdbApi.getMoviesList("popular", curentPage));
  const handleChangeFilter = (e) => {
    setFilterValue(e.target.value);
  };
  useEffect(() => {
    debounceFilter
      ? setUrl(tmdbApi.getMoviesSearch(debounceFilter, curentPage))
      : setUrl(tmdbApi.getMoviesList("popular", curentPage));
  }, [debounceFilter, curentPage]);
  const { data, error } = useSWR(url, fetcher);
  const movies = data?.results || [];
  const loading = !data && !error;

  // PAGINATION
  const [itemOffset, setItemOffset] = useState(0);
  const pageCount = Math.ceil(data?.total_results / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data?.total_results;
    setItemOffset(newOffset);
    setCurrentPage(event.selected + 1);
  };

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
      <ReactPaginate
        breakLabel="..."
        nextLabel={<MdKeyboardDoubleArrowRight />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={<MdKeyboardDoubleArrowLeft />}
        renderOnZeroPageCount={null}
        className="pagination flex justify-center items-center gap-5"
      />
    </div>
  );
};

export default MoviePage;

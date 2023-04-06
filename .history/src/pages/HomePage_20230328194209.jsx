import React from "react";

const HomePage = () => {
  return (
    <>
      <section className="movies-layout page-container">
        <h2 className="capitalize text-2xl font-bold mt-10 mb-5">
          Now Playing
        </h2>
        <MovieList type="now_playing" />
      </section>

      <section className="movies-top-rated page-container">
        <h2 className="capitalize text-2xl font-bold mt-10 mb-5">
          Top Rated Movies
        </h2>
        <MovieList type="top_rated" />
      </section>

      <section className="movies-trending page-container">
        <h2 className="capitalize text-2xl font-bold mt-10 mb-5">Trending</h2>
        <MovieList type="popular" />
      </section>
    </>
  );
};

export default HomePage;

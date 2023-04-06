import { NavLink } from "react-router-dom";
import Banner from "./components/banner/Banner";
import MovieList from "./components/movie/MovieList";

const listNav = [
  {
    id: 1,
    to: "/",
    title: "Home",
  },
  {
    id: 2,
    to: "/movies",
    title: "Movies",
  },
];
function App() {
  return (
    <>
      <div className="header flex items-center justify-center gap-x-5 p-5">
        {listNav.map((item) => (
          <NavLink
            key={item.id}
            to={item.to}
            className={({ isActive }) => (isActive ? "text-primary" : "")}
          >
            {item.title}
          </NavLink>
        ))}
      </div>

      <Banner />

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
}

export default App;

import { NavLink } from "react-router-dom";
import Banner from "./components/banner/Banner";
import MovieList from "./components/movie/MovieList";
import "swiper/scss";
import Header from "./components/layout/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Header />

      <Banner />

      <HomePage />
    </>
  );
}

export default App;

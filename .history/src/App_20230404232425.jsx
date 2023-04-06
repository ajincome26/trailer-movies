import { Fragment, lazy, Suspense } from "react";
import "swiper/scss";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";

const HomePage = lazy(() => import("./pages/HomePage"));

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviePage />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;

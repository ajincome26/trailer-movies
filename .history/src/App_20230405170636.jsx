import { Fragment, lazy, Suspense } from "react";
import "swiper/scss";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import { SkeletonTheme } from "react-loading-skeleton";
// import HomePage from "./pages/HomePage";
// import MoviePage from "./pages/MoviePage";
// import MovieDetailsPage from "./pages/MovieDetailsPage";

const HomePage = lazy(() => import("./pages/HomePage"));
const MoviePage = lazy(() => import("./pages/MoviePage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));

function App() {
  return (
    <Fragment>
      <SkeletonTheme baseColor="#fff" highlightColor="#ccc">
        <Suspense fallback={<></>}>
          <Routes>
            <Route element={<Main />}>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/movies" element={<MoviePage />}></Route>
              <Route
                path="/movies/:movieId"
                element={<MovieDetailsPage />}
              ></Route>
            </Route>
          </Routes>
        </Suspense>
      </SkeletonTheme>
    </Fragment>
  );
}

export default App;

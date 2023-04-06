import "swiper/scss";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import HomePage from "./pages/HomePage";
import Banner from "../components/banner/Banner";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main />}>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <HomePage />
              </>
            }
          ></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;

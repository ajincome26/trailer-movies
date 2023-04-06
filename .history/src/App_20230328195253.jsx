import "swiper/scss";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main />}>
          <Route to="/" element={<HomePage />}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;

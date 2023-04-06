import "swiper/scss";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;

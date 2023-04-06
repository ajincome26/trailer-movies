import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import Header from "./Header";

const Main = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
      {/* <HomePage /> */}
    </Fragment>
  );
};

export default Main;

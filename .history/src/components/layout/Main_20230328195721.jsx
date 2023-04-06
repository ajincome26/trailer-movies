import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import Header from "./Header";

const Main = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  );
};

export default Main;

import React from "react";
import { Link, NavLink } from "react-router-dom";

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
const Header = () => {
  return (
    <div className="header flex items-center p-5">
      <Link to="/" className="text-primary font-bold">
        <span className="text-xl">7</span>
        <span>MOVIES</span>
      </Link>
      <div className="flex items-center justify-center gap-x-5 w-full font-medium">
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
    </div>
  );
};

export default Header;

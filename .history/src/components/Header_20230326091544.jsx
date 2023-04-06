import React from "react";
import { NavLink } from "react-router-dom";

const listNav = [
  {
    id: 1,
    to: "/",
    title: "HOME",
  },
  {
    id: 2,
    to: "/movies",
    title: "MOVIES",
  },
];
const Header = () => {
  return (
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
  );
};

export default Header;

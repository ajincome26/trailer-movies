import React from "react";

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

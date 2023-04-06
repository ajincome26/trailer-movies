import { NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <div className="header flex items-center justify-center gap-x-5 p-5">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
        >
          HOME
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
        >
          MOVIES
        </NavLink>
      </div>
    </>
  );
}

export default App;

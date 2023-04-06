import { NavLink } from "react-router-dom";

const listNav = [
  {
    id: 1,
    to: "/",
    title: "HOME",
  },
];

function App() {
  return (
    <>
      <div className="header flex items-center justify-center gap-x-5 p-5">
        {listNav.map((item) => (
          <NavLink
            key={item.id}
            to={item.to}
            className={({ isActive }) => (isActive ? "text-red-500" : "")}
          >
            {item.title}
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default App;

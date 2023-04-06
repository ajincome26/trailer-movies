import { NavLink } from "react-router-dom";
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
function App() {
  return (
    <>
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
      <section className="banner page-container h-[400px]">
        <div className="rounded-xl w-full h-full relative overflow-hidden">
          <div className="w-full h-full">
            <img
              src="https://w0.peakpx.com/wallpaper/632/50/HD-wallpaper-poster-of-avengers-endgame-movie.jpg"
              alt="banner"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute text-white bottom-5 left-5">
            <h2 className="text-3xl font-semibold mb-5">Avengers: Endgame</h2>
            <div className="flex items-center gap-x-3 text-sm">
              <span className="p-2 rounded-md border-[2px] border-[#ccc]">
                Action
              </span>
              <span className="p-2 rounded-md border-[2px] border-[#ccc]">
                Adventure
              </span>
              <span className="p-2 rounded-md border-[2px] border-[#ccc]">
                Drama
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

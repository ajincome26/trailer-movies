import { NavLink } from "react-router-dom";
import icons from "./untils/icons";

const { BsFillPlayCircleFill, HiPlus } = icons;
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
          <div className="w-full h-full relative">
            <div className="overlay w-full h-full absolute bg-gradient-to-t from-black"></div>
            <img
              src="https://w0.peakpx.com/wallpaper/632/50/HD-wallpaper-poster-of-avengers-endgame-movie.jpg"
              alt="banner"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute text-white bottom-5 left-5">
            <h2 className="text-3xl font-semibold mb-5">Avengers: Endgame</h2>
            <div className="flex items-center gap-x-3 text-sm mb-5">
              <span className="py-2 px-3 rounded-md border border-[#ccc]">
                Action
              </span>
              <span className="py-2 px-3 rounded-md border border-[#ccc]">
                Adventure
              </span>
              <span className="py-2 px-3 rounded-md border border-[#ccc]">
                Drama
              </span>
            </div>
            <div className="flex items-center gap-x-3">
              <button className="px-10 py-3 bg-primary rounded-md flex items-center gap-x-2 font-semibold">
                Watch
                <BsFillPlayCircleFill />
              </button>
              <button className="p-3 bg-opacity-90 bg-[#4a4242] rounded-md font-semibold">
                <HiPlus fontSize={25} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

import { NavLink } from "react-router-dom";
import icons from "./untils/icons";

const { BsFillPlayCircleFill, AiOutlinePlus } = icons;
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
      {/* bg-gradient-to-t from-black to-white */}
      <section className="banner page-container h-[400px]">
        <div className="rounded-xl w-full h-full relative overflow-hidden">
          <div className="w-full h-full bg-gradient-to-t from-black">
            <img
              src="https://w0.peakpx.com/wallpaper/632/50/HD-wallpaper-poster-of-avengers-endgame-movie.jpg"
              alt="banner"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute text-white bottom-5 left-5">
            <h2 className="text-3xl font-semibold mb-5">Avengers: Endgame</h2>
            <div className="flex items-center gap-x-3 text-sm mb-5">
              <span className="py-2 px-3 rounded-md border-[2px] border-[#ccc]">
                Action
              </span>
              <span className="py-2 px-3 rounded-md border-[2px] border-[#ccc]">
                Adventure
              </span>
              <span className="py-2 px-3 rounded-md border-[2px] border-[#ccc]">
                Drama
              </span>
            </div>
            <div className="flex items-center gap-x-3">
              <button className="px-10 py-3 bg-primary rounded-md flex items-center gap-x-3 font-semibold">
                Watch
                <BsFillPlayCircleFill />
              </button>
              <button className="p-4 bg-opacity-90 bg-[#4d4545] rounded-md font-semibold">
                <AiOutlinePlus size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

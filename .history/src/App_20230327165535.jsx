import { NavLink } from "react-router-dom";
import icons from "./untils/icons";

const { BsFillPlayCircleFill, HiPlus, AiFillStar } = icons;
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
      <section className="banner page-container h-[500px]">
        <div className="rounded-xl w-full h-full relative overflow-hidden">
          <div className="w-full h-full relative">
            <div className="overlay inset-0 absolute bg-gradient-to-t from-black"></div>
            <img
              src="https://w0.peakpx.com/wallpaper/473/369/HD-wallpaper-avengers-infinity-war-and-endgame-poster-avengers-endgame-avengers-end-game-avengers-infinity-war-2019-movies-movies-poster.jpg"
              alt="banner"
              className="w-full h-full object-cover object-center"
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
              <button className="px-10 py-3 bg-primary rounded-xl flex items-center gap-x-2 font-semibold">
                Watch
                <BsFillPlayCircleFill />
              </button>
              <button className="p-3 bg-opacity-90 bg-[#4a4242] rounded-xl font-semibold">
                <HiPlus fontSize={25} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="movies-layout page-container">
        <h2 className="capitalize text-2xl font-bold my-5">Now Playing</h2>
        <div className="movies-list grid grid-cols-5 gap-3">
          <div className="movie-item rounded-lg p-2 bg-[#605e5e] flex flex-col gap-3">
            <div className="w-full h-[270px] rounded-lg overflow-hidden relative">
              <img
                src="https://w0.peakpx.com/wallpaper/177/218/HD-wallpaper-captain-america-in-avengers-endgame.jpg"
                alt="captain"
                className="w-full h-full object-cover object-top"
              />
              <button className="p-2 bg-opacity-90 bg-[#4a4242] rounded-xl font-semibold absolute top-2 right-2">
                <HiPlus fontSize={20} />
              </button>
            </div>
            <div>
              <h3 className="font-semibold cursor-pointer truncate-1">
                Captain America: Civil War Captain America: Civil War Captain
                America: Civil War
              </h3>
              <div className="flex items-center justify-between text-xs mt-2">
                <span>2016</span>
                <div className="flex items-center gap-x-1">
                  <span>7.4</span>
                  <AiFillStar color="yellow" size={18} />
                </div>
              </div>
            </div>
            <button className="px-10 py-3 bg-primary rounded-xl flex items-center justify-center gap-x-2 font-semibold w-full">
              Watch Now
              <BsFillPlayCircleFill />
            </button>
          </div>
          <div className="movie-item rounded-lg p-2 bg-[#605e5e] flex flex-col gap-3">
            <div className="w-full h-[270px] rounded-lg overflow-hidden">
              <img
                src="https://w0.peakpx.com/wallpaper/177/218/HD-wallpaper-captain-america-in-avengers-endgame.jpg"
                alt="captain"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <h3 className="font-semibold">Captain America: Civil War</h3>
              <div className="flex items-center justify-between text-xs mt-2">
                <span>2016</span>
                <div className="flex items-center gap-x-1">
                  <span>7.4</span>
                  <AiFillStar color="yellow" size={18} />
                </div>
              </div>
            </div>
            <button className="px-10 py-3 bg-primary rounded-xl flex items-center justify-center gap-x-2 font-semibold w-full">
              Watch Now
              <BsFillPlayCircleFill />
            </button>
          </div>
          <div className="movie-item rounded-lg p-2 bg-[#605e5e] flex flex-col gap-3">
            <div className="w-full h-[270px] rounded-lg overflow-hidden">
              <img
                src="https://w0.peakpx.com/wallpaper/177/218/HD-wallpaper-captain-america-in-avengers-endgame.jpg"
                alt="captain"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <h3 className="font-semibold">Captain America: Civil War</h3>
              <div className="flex items-center justify-between text-xs mt-2">
                <span>2016</span>
                <div className="flex items-center gap-x-1">
                  <span>7.4</span>
                  <AiFillStar color="yellow" size={18} />
                </div>
              </div>
            </div>
            <button className="px-10 py-3 bg-primary rounded-xl flex items-center justify-center gap-x-2 font-semibold w-full">
              Watch Now
              <BsFillPlayCircleFill />
            </button>
          </div>
          <div className="movie-item rounded-lg p-2 bg-[#605e5e] flex flex-col gap-3">
            <div className="w-full h-[270px] rounded-lg overflow-hidden">
              <img
                src="https://w0.peakpx.com/wallpaper/177/218/HD-wallpaper-captain-america-in-avengers-endgame.jpg"
                alt="captain"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <h3 className="font-semibold">Captain America: Civil War</h3>
              <div className="flex items-center justify-between text-xs mt-2">
                <span>2016</span>
                <div className="flex items-center gap-x-1">
                  <span>7.4</span>
                  <AiFillStar color="yellow" size={18} />
                </div>
              </div>
            </div>
            <button className="px-10 py-3 bg-primary rounded-xl flex items-center justify-center gap-x-2 font-semibold w-full">
              Watch Now
              <BsFillPlayCircleFill />
            </button>
          </div>
          <div className="movie-item rounded-lg p-2 bg-[#605e5e] flex flex-col gap-3">
            <div className="w-full h-[270px] rounded-lg overflow-hidden">
              <img
                src="https://w0.peakpx.com/wallpaper/177/218/HD-wallpaper-captain-america-in-avengers-endgame.jpg"
                alt="captain"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <h3 className="font-semibold">Captain America: Civil War</h3>
              <div className="flex items-center justify-between text-xs mt-2">
                <span>2016</span>
                <div className="flex items-center gap-x-1">
                  <span>7.4</span>
                  <AiFillStar color="yellow" size={18} />
                </div>
              </div>
            </div>
            <button className="px-10 py-3 bg-primary rounded-xl flex items-center justify-center gap-x-2 font-semibold w-full">
              Watch Now
              <BsFillPlayCircleFill />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

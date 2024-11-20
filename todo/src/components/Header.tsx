import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../userContext";
import { ModeContext } from "../context/modeContext";

const Header = ({ data, setTodos }) => {
  const [showIn, setShowIn] = useState("");
  const [showOut, setShowOut] = useState("");
  const [, setData] = useContext(UserContext);
  const { mode, setMode } = useContext(ModeContext);
  console.log(mode);
  return (
    <div className="mx-auto mt-6 flex max-w-[1240px] justify-between rounded-full bg-gray-400 p-4 dark:bg-white">
      <div className="flex items-center gap-2">
        <img src="todo.png" alt="todo" className="w-8" />
        <h1 className="text-2xl font-extrabold text-black">TODO</h1>
      </div>
      <div>
        <div className={`cursor-pointer dark:hidden`}>
          <img
            width={30}
            height={30}
            src="https://cdn-icons-png.flaticon.com/512/6714/6714978.png"
            alt="logo"
            onClick={() => setMode("dark")}
          />
        </div>
        <div className={`${mode === "dark" ? "" : "hidden"} cursor-pointer`}>
          <img
            src="https://static-00.iconduck.com/assets.00/mode-light-icon-512x512-yuubs6qt.png"
            alt="logo"
            width={30}
            height={30}
            onClick={() => {
              setMode("");
            }}
          />
        </div>
      </div>
      {data ? (
        <div className={`cursor-pointer`} onClick={() => setShowOut("hidden")}>
          <p
            className={`${showOut} relative w-[max-content] font-mono text-3xl font-bold text-green-400 before:absolute before:inset-0 before:animate-typewriter before:bg-[#0d0d0d]`}
          >
            {data.user.username} 👦
          </p>
          <p
            onClick={() => {
              setData(null);
              setTodos([]);
            }}
            className={` ${showOut == "hidden" ? "" : "hidden"} rounded-md bg-white p-2 font-bold text-black`}
          >
            Sign Out
          </p>
        </div>
      ) : (
        <div className={`cursor-pointer`} onClick={() => setShowIn("hidden")}>
          <button className={`${showIn}`}>
            <img src="profile.png" alt="" width={30} />
          </button>
          <div
            className={`cursor-pointer ${showIn === "hidden" ? "" : "hidden"} rounded-md p-2`}
          >
            <Link to="/signin" className="menu">
              Sign In
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

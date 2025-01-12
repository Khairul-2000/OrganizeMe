import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../userContext";

const Header = ({ data, setTodos }) => {
  const [showIn, setShowIn] = useState("");
  const [showOut, setShowOut] = useState("");
  const [, setData] = useContext(UserContext);

  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-2">
        <img src="todo.png" alt="todo" className="w-8" />
        <h1 className="text-2xl font-extrabold text-white">TODO</h1>
      </div>
      {data ? (
        <div className={`cursor-pointer`} onClick={() => setShowOut("hidden")}>
          <p
            className={`${showOut} before:animate-typewriter relative w-[max-content] font-mono text-3xl font-bold text-green-400 before:absolute before:inset-0 before:bg-[#0d0d0d]`}
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

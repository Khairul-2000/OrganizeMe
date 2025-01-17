import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../userContext";
import { motion } from "framer-motion";

const Header = ({ data, setTodos }) => {
  const [showIn, setShowIn] = useState(false); // Change this line
  const [showOut, setShowOut] = useState(false); // Change this line
  const [, setData] = useContext(UserContext);

  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-2">
        <img src="todo.png" alt="todo" className="w-8" />
        <h1 className="text-2xl font-extrabold text-white">TODO</h1>
      </div>
      {data ? (
        <motion.div
          className={`relative cursor-pointer`}
          onHoverStart={() => setShowOut(true)}
          onHoverEnd={() => setShowOut(false)}
        >
          <div
            className={`w-[max-content] font-mono text-3xl font-bold text-green-400 before:absolute before:inset-0 before:animate-typewriter before:bg-[#0d0d0d]`}
          >
            {data.user.username} 👦
          </div>
          {showOut && (
            <div
              onClick={() => {
                setData(null);
                setTodos([]);
              }}
              className={`absolute left-1 top-9 flex h-[100px] w-[200px] flex-col items-center justify-center rounded-md bg-gradient-to-tr from-cyan-200 to-cyan-600 p-6 text-center text-2xl text-white`}
            >
              Log Out
            </div>
          )}
        </motion.div>
      ) : (
        <motion.div
          className={`relative cursor-pointer`}
          onHoverStart={() => setShowIn(true)}
          onHoverEnd={() => setShowIn(false)}
        >
          <button>
            <img src="profile.png" alt="" width={30} />
          </button>
          {showIn && (
            <div
              className={`absolute -left-12 top-9 flex h-[100px] w-[200px] cursor-pointer flex-col items-baseline justify-center gap-3 rounded-md bg-black p-3 text-xl text-white`}
            >
              <Link to="/signin">Sign In</Link>
              <Link to="/signup">Sign Up</Link>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default Header;

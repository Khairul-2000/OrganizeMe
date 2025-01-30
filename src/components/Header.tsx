import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../userContext";
import { motion } from "framer-motion";

const Header = ({ data, setTodos }) => {
  const [showOut, setShowOut] = useState(false); // Change this line
  const { newuser, setNewUser } = useContext(UserContext);

  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-2">
        <img src="todo.png" alt="todo" className="w-8" />
        <h1 className="text-2xl font-extrabold text-white">TODO</h1>
      </div>
      {data ? (
        <motion.div
          className={`relative cursor-pointer`}
          onClick={() => setShowOut(!showOut)}
        >
          <div
            className={`w-[max-content] font-mono text-3xl font-bold text-green-400 before:absolute before:inset-0 before:animate-typewriter before:bg-[#0d0d0d]`}
          >
            {data.user.username}
          </div>
          {showOut && (
            <div
              onClick={() => {
                setNewUser(null);
                setTodos([]);
              }}
              className={`absolute left-1 top-9 flex h-[100px] w-[200px] flex-col items-center justify-center rounded-md bg-gradient-to-tr from-cyan-200 to-cyan-600 p-6 text-center text-2xl text-white`}
            >
              Log Out
            </div>
          )}
        </motion.div>
      ) : (
        <motion.div>
          <div className="flex flex-row items-center justify-center gap-4">
            <Link to="/newregister">
              <button className="rounded-md bg-green-400 p-2 text-white">
                Get Started
              </button>
            </Link>
            <Link to="/signin">
              <button className="rounded-md bg-green-400 p-2 text-white">
                Sign In
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Header;

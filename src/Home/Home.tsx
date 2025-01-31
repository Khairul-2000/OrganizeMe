import { useState } from "react";
import Todo from "../components/Todo";
import Navbar from "../components/Navbar";
import TalkAI from "../components/TalkAI";

const Home = () => {
  const [path, setPath] = useState("home");
  console.log("Path: ", path);
  return (
    <div className="flex min-h-screen w-full flex-row">
      <Navbar setPath={setPath} />
      <div className="flex min-h-screen w-full flex-col items-center justify-center bg-cyan-600 text-white">
        {path === "home" ? <Todo /> : <TalkAI />}
      </div>
    </div>
  );
};

export default Home;

import Todo from "../components/Todo";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="flex min-h-screen w-full flex-row">
      <Navbar />
      <div className="flex min-h-screen w-full flex-col items-center justify-center bg-cyan-600 text-white">
        <Todo />
      </div>
    </div>
  );
};

export default Home;

import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import UserContext from "../userContext";
import { PiCrosshairFill } from "react-icons/pi";

const SearchPopUp = ({ setSearchShowPopUp }) => {
  const { todos } = useContext(UserContext);
  return (
    <div className="absolute right-0 top-0 z-20 h-screen w-screen bg-black opacity-90">
      <div className="z-30 m-auto mt-[100px] flex h-[500px] w-[800px] flex-col items-start justify-start rounded-xl bg-[#ffffff] p-6 text-xl font-bold">
        <div className="flex w-full flex-row items-center justify-around">
          <input
            type="text"
            className="w-full p-2 text-xl font-bold outline-none"
            placeholder="Search or Ask question"
          />
          <RxCross2
            className="cursor-pointer"
            size={30}
            onClick={() => setSearchShowPopUp(false)}
          />
        </div>
        <hr className="my-4 w-full" />
        <div className="flex flex-col items-start gap-4">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex w-full flex-row items-center gap-4"
            >
              <PiCrosshairFill />
              <span>{todo.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPopUp;

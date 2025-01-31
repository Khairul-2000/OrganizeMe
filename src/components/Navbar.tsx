import { useContext, useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { FaRegEdit } from "react-icons/fa";
import about from "../images/avatar.jpg";
import { CiSearch } from "react-icons/ci";
import { GrHomeRounded } from "react-icons/gr";
import { GoInbox } from "react-icons/go";
import { RiVoiceprintLine } from "react-icons/ri";
import LoginPopUp from "./LoginPopUp";
import { IoIosLink } from "react-icons/io";
import { RiNotionFill } from "react-icons/ri";

import UserContext from "../userContext";
import SearchPopUp from "./SearchPopUp";

const Navbar = ({ setPath }) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [showSearchPopUp, setSearchShowPopUp] = useState(false);
  const { newuser, todos } = useContext(UserContext);

  //   bg-[#f8f8f7]

  return (
    <div className="w-[250px] bg-[#f8f8f7] px-3 text-gray-700">
      <div className="my-4 text-left text-xl">
        <RiNotionFill size={25} />
      </div>

      <div
        className="mb-4 flex cursor-pointer items-center justify-between p-2 hover:rounded-md hover:bg-[#f0f0ef]"
        onClick={() => setShowPopUp(!showPopUp)}
      >
        <div className="flex flex-row items-center justify-center gap-2">
          <div className="flex flex-row items-center justify-center gap-2">
            <img src={about} alt="todo" className="w-4 rounded-sm bg-cover" />
            <span>{newuser.user.username}</span>
          </div>
          <SlArrowDown size={10} />
        </div>
        <FaRegEdit />
      </div>
      {showPopUp && (
        <div className="absolute left-3 top-[80px]">
          <LoginPopUp setShowPopUp={setShowPopUp} />
        </div>
      )}
      {showSearchPopUp && (
        <SearchPopUp setSearchShowPopUp={setSearchShowPopUp} />
      )}
      <div className="space-y-3 p-2">
        <div
          className="flex cursor-pointer flex-row items-center justify-start gap-2"
          onClick={() => setSearchShowPopUp(!showSearchPopUp)}
        >
          <CiSearch />
          <span>Search</span>
        </div>
        <div className="flex cursor-pointer flex-row items-center justify-start gap-2">
          <RiVoiceprintLine />
          <span onClick={() => setPath("ai")}>Talk AI</span>
        </div>
        <div
          className="flex cursor-pointer flex-row items-center justify-start gap-2"
          onClick={() => setPath("home")}
        >
          <GrHomeRounded />
          <span>Home</span>
        </div>
        <div className="flex cursor-pointer flex-row items-center justify-start gap-2">
          <GoInbox />
          <span>Inbox</span>
        </div>
      </div>

      <div>
        <span className="text-gray-600">Private</span>
        <div>
          <div className="flex flex-col gap-2 p-2">
            {todos ? (
              todos.map((todo) => (
                <div className="flex cursor-pointer flex-row items-center justify-start gap-2">
                  <IoIosLink />
                  <span className="">{todo.title}</span>
                </div>
              ))
            ) : (
              <div className="flex cursor-pointer flex-row items-center justify-start gap-2 p-2">
                <IoIosLink />
                <span className="">React and Javascript Course</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

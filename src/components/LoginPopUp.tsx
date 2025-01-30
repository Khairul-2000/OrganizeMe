import about from "../images/avatar.jpg";
import { motion } from "framer-motion";
import { IoSettingsOutline } from "react-icons/io5";
import { RiUserSettingsLine } from "react-icons/ri";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { IoCheckmarkSharp } from "react-icons/io5";
import { useContext } from "react";
import UserContext from "../userContext";
import { useNavigate } from "react-router-dom";

const LoginPopUp = ({ setShowPopUp }) => {
  const { newuser, setTodos, setNewUser } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <motion.div
      className="z-10 h-[300px] w-[300px] rounded-md bg-[#ffffff] text-gray-500 shadow-sm shadow-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="p-3">
        <div className="space-y-4">
          <div className="flex flex-row items-center gap-2">
            <img src={about} alt="todo" className="w-8 rounded-sm bg-cover" />
            <div className="flex flex-col items-start gap-0">
              <span className="text-black">{newuser.user.username} Notes</span>
              <span className="text-sm">Free Plan. 1 member</span>
            </div>
          </div>
          <div className="flex flex-row items-center gap-5">
            <div className="flex flex-row items-center gap-2 rounded-md border border-gray-500 p-1">
              <IoSettingsOutline />
              <span>Settings</span>
            </div>
            <div className="flex flex-row items-center gap-2 rounded-md border border-gray-500 p-1">
              <RiUserSettingsLine />
              <span>Invite members</span>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-1 w-full" />

      <div className="space-y-2 px-3">
        <div className="flex flex-row items-center justify-between">
          <span>{newuser.user.email}</span>
          <PiDotsThreeOutlineFill color="gray" />
        </div>
        <div
          className="flex cursor-pointer flex-row items-center justify-between"
          onClick={() => setShowPopUp(false)}
        >
          <div className="flex flex-row items-center gap-2">
            <img src={about} alt="todo" className="w-5 rounded-sm bg-cover" />
            <span className="text-black">{newuser.user.username} Notes</span>
          </div>
          <IoCheckmarkSharp />
        </div>
      </div>
      <hr className="my-1 w-full" />
      <div className="flex flex-col items-start gap-2 px-3">
        <span
          className="cursor-pointer"
          onClick={() => navigate("/newregister")}
        >
          Create work account
        </span>
        <span className="cursor-pointer">Add another account</span>
        <span
          className="cursor-pointer"
          onClick={() => {
            setTodos([]);
            setNewUser({});
            navigate("/");
          }}
        >
          Log out
        </span>
      </div>
    </motion.div>
  );
};

export default LoginPopUp;

import { FaGithub, FaYoutube } from "react-icons/fa";
import { RiNotionFill } from "react-icons/ri";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <div className="flex flex-col items-center justify-center gap-4 p-8">
        <div className="flex cursor-pointer items-center justify-center gap-2">
          <RiNotionFill size={35} />
          <span className="text-2xl font-bold">Organize Me</span>
        </div>
        <div className="flex flex-row items-center gap-4">
          <FaYoutube size={25} className="hover:text-red-500" />
          <FaGithub size={25} />
        </div>
      </div>
      <div>
        <p className="text-center text-xl text-gray-500">
          &copy; {year} Organize Me. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

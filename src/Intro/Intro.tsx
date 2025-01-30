import { RiNotionFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import home from "../images/preview.png";

const Intro = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="flex w-screen flex-row items-center justify-between p-4">
        <div className="flex cursor-pointer items-center justify-center gap-2">
          <RiNotionFill size={25} />
          <span className="text-xl font-bold">Organize Me</span>
        </div>
        <div className="flex items-center justify-center gap-4 divide-x-2">
          <span
            className="cursor-pointer"
            onClick={() => navigate("/contact-sales")}
          >
            Request a demo
          </span>
          <div className="flex flex-row items-center gap-4 px-4">
            <button onClick={() => navigate("/signin")}>Log in</button>
            <button
              className="flex flex-row items-center justify-center rounded-md bg-black p-1 px-4 font-semibold text-white"
              onClick={() => navigate("/newregister")}
            >
              Get app free
            </button>
          </div>
        </div>
      </nav>
      <div className="mx-auto mt-10 max-w-[1250px]">
        <div className="flex flex-row items-center justify-between p-4">
          <div className="flex flex-col gap-4">
            <h1 className="w-[600px] text-7xl">The happier workspace</h1>
            <p className="w-[600px] text-3xl">
              Write. Plan. Collaborate. With a little help from AI.
            </p>
            <div className="flex flex-row items-center gap-3">
              <button
                className="rounded-lg bg-blue-500 p-2 font-semibold text-white hover:bg-[#045ac3]"
                onClick={() => navigate("/newregister")}
              >
                Get app free
              </button>
              <button
                className="rounded-lg bg-[#ebf5fe] p-2 font-semibold text-[#045ac3] hover:bg-[#d6e1f5]"
                onClick={() => navigate("/contact-sales")}
              >
                Request a demo
              </button>
            </div>
          </div>
          <div className="flex w-[600px] flex-col justify-end">
            <video autoPlay loop muted className="z-10">
              <source
                src="https://www.notion.com/front-static/pages/product/super-duper/hero/hero-illustration.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="my-14">
          <img
            src={home}
            alt="preview image"
            className="shadow-cyan-50o z-10 rounded-lg shadow-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;

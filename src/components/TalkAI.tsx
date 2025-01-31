import { useContext, useState } from "react";
import { VscRobot } from "react-icons/vsc";
import UserContext from "../userContext";
import { GoPaperclip, GoUpload } from "react-icons/go";
import { TypeAnimation } from "react-type-animation";

const TalkAI = () => {
  const { newuser } = useContext(UserContext);
  const [show, setShow] = useState(false);

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-end p-4">
      <div className="mt-16 h-full">
        <p className="w-[600px] text-justify text-lg">
          {show && (
            <TypeAnimation
              splitter={(str) => str.split(/(?= )/)} //
              sequence={[
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat molestiae cumque deserunt quibusdam dolor, id eaque mollitia sapiente ab consequatur?.     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorem, deleniti consequuntur rerum consequatur id totam, consectetur ad ea blanditiis cumque perferendis facilis ex cupiditate et alias corrupti vel? Reprehenderit obcaecati vero, nisi commodi expedita numquam assumenda aliquam, harum consequuntur sapiente voluptatum modi maxime deleniti iusto illum beatae dolores atque!",
                2500,
                "",
              ]}
              speed={{ type: "keyStrokeDelayInMs", value: 30 }}
              omitDeletionAnimation={true}
              style={{ fontSize: "1em", display: "block", minHeight: "200px" }}
              repeat={Infinity}
            />
          )}
        </p>
      </div>
      <div className="flex flex-col items-start justify-start gap-4">
        <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white">
          <VscRobot color="black" size={30} />
        </div>
        <p className="text-xl">
          Hi {newuser.user.username}! How can i help you today?
        </p>
        <div className="relative w-[600px]">
          <input
            type="text"
            placeholder="Ask anything or select"
            className="w-full rounded-full bg-[#ffffff] p-3 text-black outline-none"
          />
          <div className="absolute right-10 top-4 z-10 flex flex-row gap-4">
            <GoPaperclip color="black" className="cursor-pointer" />
            <GoUpload
              color="black"
              className="cursor-pointer"
              onClick={() => setShow(!show)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkAI;

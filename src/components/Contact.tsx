import { RiNotionFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="flex w-screen flex-row items-center justify-between p-4">
        <div
          className="flex cursor-pointer items-center justify-center gap-2"
          onClick={() => navigate("/")}
        >
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
      <div className="mt-28 flex flex-row items-center justify-evenly">
        <div>
          <h1 className="w-[400px] text-6xl">Contact our sales team</h1>
          <p className="w-[500px] text-xl">
            Get help with pricing and plans, schedule a demo, explore use-cases
            for your team, and more.
          </p>
        </div>
        <div>
          <form action="">
            <div className="flex flex-row gap-4">
              <div className="flex flex-col items-start justify-center gap-2">
                <label
                  htmlFor="first_name"
                  className="mt-2 text-lg text-gray-500"
                >
                  First name<sup>*</sup>
                </label>
                <input
                  type="text"
                  id="first_name"
                  placeholder="Ada"
                  className="rounded-md border border-gray-400 p-2"
                  required
                />
              </div>
              <div className="flex flex-col items-start justify-center gap-2">
                <label
                  htmlFor="last_name"
                  className="mt-2 text-lg text-gray-500"
                >
                  Last name<sup>*</sup>
                </label>
                <input
                  type="text"
                  id="last_name"
                  placeholder="Lovelace"
                  className="rounded-md border border-gray-400 p-2"
                  required
                />
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <div className="flex flex-col items-start justify-center gap-2">
                <label htmlFor="email" className="mt-2 text-lg text-gray-500">
                  Work email<sup>*</sup>
                </label>
                <input
                  type="email"
                  id="email"
                  className="rounded-md border border-gray-400 p-2"
                  required
                />
              </div>
              <div className="flex flex-col items-start justify-center gap-2">
                <label htmlFor="number" className="mt-2 text-lg text-gray-500">
                  Phone number<sup>*</sup>
                </label>
                <input
                  type="text"
                  id="number"
                  className="rounded-md border border-gray-400 p-2"
                  required
                />
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <div className="flex flex-col items-start justify-center gap-2">
                <label htmlFor="country" className="mt-2 text-lg text-gray-500">
                  Country<sup>*</sup>
                </label>
                <input
                  type="text"
                  id="country"
                  placeholder="country"
                  className="rounded-md border border-gray-400 p-2"
                  required
                />
              </div>
              <div className="flex flex-col items-start justify-center gap-2">
                <label htmlFor="reason" className="mt-2 text-lg text-gray-500">
                  Reason<sup>*</sup>
                </label>
                <input
                  type="text"
                  id="reason"
                  className="rounded-md border border-gray-400 p-2"
                  required
                />
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-2">
              <label htmlFor="details" className="mt-2 text-lg text-gray-500">
                Provide more details<sup>*</sup>
              </label>
              <textarea
                id="details"
                cols={30}
                rows={10}
                placeholder="How you plan to use the app, what you're looking for help with, etc."
                className="w-full rounded-md border border-gray-400 p-2"
                required
              />
            </div>
            <div className="mt-3 flex flex-row items-center gap-2">
              <input type="checkbox" required />
              <span>
                I agree to receive product updates and other marketing
                communications.
              </span>
            </div>
            <button className="my-4 rounded-md bg-black p-2 text-white">
              Contact Sales
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

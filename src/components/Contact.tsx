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
          <svg
            width="60"
            height="40"
            viewBox="0 0 465 344"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="465" height="344" rx="100" fill="#5448C8" />
            <path
              d="M132.7 247C131.167 247 129.833 246.433 128.7 245.3L108.7 225.3C107.567 224.233 107 222.9 107 221.3V139.3C107 137.767 107.567 136.433 108.7 135.3L128.7 115.3C129.833 114.233 131.167 113.7 132.7 113.7H172C173.6 113.7 174.933 114.233 176 115.3L196 135.3C197.133 136.433 197.7 137.767 197.7 139.3V221.3C197.7 222.9 197.133 224.233 196 225.3L176 245.3C174.933 246.433 173.6 247 172 247H132.7ZM144.5 220.3H160.2C163 220.3 164.4 218.433 164.4 214.7V146C164.4 142.2 163 140.3 160.2 140.3H144.5C141.767 140.3 140.4 142.2 140.4 146V214.7C140.4 218.433 141.767 220.3 144.5 220.3ZM224.148 247C222.482 247 221.648 246.167 221.648 244.5V136C221.648 134.467 222.215 133.133 223.348 132L239.948 115.3C241.082 114.233 242.415 113.7 243.948 113.7H266.848C268.382 113.7 269.715 114.233 270.848 115.3L287.648 132.2H292.348L309.148 115.3C310.282 114.233 311.615 113.7 313.148 113.7H335.948C337.548 113.7 338.882 114.233 339.948 115.3L356.648 132C357.782 133.133 358.348 134.467 358.348 136V244.5C358.348 246.167 357.515 247 355.848 247H327.448C325.782 247 324.948 246.167 324.948 244.5V140.3H306.648V244.5C306.648 246.167 305.815 247 304.148 247H275.848C274.182 247 273.348 246.167 273.348 244.5V140.3H254.948V244.5C254.948 246.167 254.115 247 252.448 247H224.148Z"
              fill="white"
            />
          </svg>
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

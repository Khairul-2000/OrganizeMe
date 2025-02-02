import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../userContext";

import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

const Signin = () => {
  const [loading, setLoading] = useState(false);
  const [showpassword, setShowPassword] = useState(false);
  const { newuser, setNewUser } = useContext(UserContext);
  const navigate = useNavigate();

  async function signIn(data) {
    const user = await fetch(
      "https://todoserver-w74l.onrender.com/user/singin",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    const result = await user.json();

    if (user.ok) {
      console.log("User signed in successfully");
      setNewUser(result);
      localStorage.setItem("user", JSON.stringify(newuser));
      console.log("User i check: ", newuser);
      navigate(`/home/${result.user.id}`);
    } else {
      alert("Invalid username or password");

      navigate("/signin");
    }
  }

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center bg-[#fffefc]">
      <div
        className="absolute left-4 top-4 cursor-pointer"
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
      </div>

      <div className="max-w-[400px] rounded-md p-8 py-8">
        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const form = e.currentTarget;
            const formData = new FormData(form);
            const data = {
              username: formData.get("username"),
              password: formData.get("password"),
            };
            console.log("FormData: ", data);
            setLoading(true);
            signIn(data);

            form.reset();
          }}
        >
          <div className="mb-6 flex flex-row items-center justify-between">
            <div className="flex flex-col items-start justify-center gap-2">
              <h1 className="text-3xl">Think it. Make it. </h1>
              <p className="text-2xl text-[#acabac]">Log in your app account</p>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <label htmlFor="username" className="text-[#acabac]">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              name="username"
              className="rounded-md border border-[#e7e6e4] bg-[#fffefc] p-2 text-black"
              required
            />
            <label htmlFor="password" className="text-[#acabac]">
              Password
            </label>
            <div className="relative">
              <input
                type={showpassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Password"
                className="w-full rounded-md border border-[#e7e6e4] bg-[#fffefc] p-2 text-black"
                required
              />
              {!showpassword ? (
                <FiEye
                  size={25}
                  color="gray"
                  className="absolute right-3 top-2"
                  onClick={() => setShowPassword(!showpassword)}
                />
              ) : (
                <FiEyeOff
                  size={25}
                  color="gray"
                  className="absolute right-3 top-2"
                  onClick={() => setShowPassword(!showpassword)}
                />
              )}
            </div>
          </div>
          <button className="my-[15px] w-full rounded-md bg-blue-400 p-3 font-semibold text-white">
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                Continue...
              </span>
            ) : (
              "Continue"
            )}
          </button>
        </form>
        <div>
          <p className="mt-5 text-center">
            Create an account?
            <Link
              to="/newregister"
              className="cursor-pointer font-semibold text-blue-400"
            >
              {" "}
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;

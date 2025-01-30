import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../userContext";
import { RiNotionFill } from "react-icons/ri";
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
      <RiNotionFill
        size={40}
        className="absolute left-4 top-4 cursor-pointer"
        onClick={() => navigate("/")}
      />
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
              <p className="text-2xl text-[#acabac]">
                Log in your Notion account
              </p>
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
            {loading ? "Continue..." : "Continue"}
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

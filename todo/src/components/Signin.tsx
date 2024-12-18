import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../userContext";

const Signin = () => {
  const [loading, setLoading] = useState(false);
  const [, setNewUser] = useContext(UserContext);
  const navigate = useNavigate();
  async function signIn(data) {
    const user = await fetch("http://localhost:3000/user/singin", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await user.json();
    console.log("User Signin: ", result);

    if (user.ok) {
      setLoading(true);
      setNewUser(result);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      alert("Invalid username or password");

      navigate("/signin");
    }
  }

  return (
    <div>
      <div className="m-auto mt-[25vh] flex max-w-[400px] items-center justify-center rounded-md bg-black p-8 dark:bg-white">
        {loading ? (
          <p className="animate-spin text-7xl"> ⏳</p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const data = {
                username: formData.get("username"),
                password: formData.get("password"),
              };
              console.log("FormData: ", data);

              signIn(data);
              e.target.reset();
            }}
          >
            <div className="mb-6 flex items-center gap-2">
              <img src="todo.png" alt="todo" className="w-8" />
              <h1 className="text-2xl font-extrabold text-green-600">TODO</h1>
            </div>
            <h3 className="font-bold text-green-600">Log in to your account</h3>
            <div className="mt-5 flex flex-col gap-5">
              <input
                type="text"
                id="username"
                placeholder="username"
                name="username"
                className="rounded-sm border border-gray-300 p-2 text-black outline-none"
                required
              />

              <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
                className="rounded-sm border border-gray-300 p-2 text-black outline-none"
                required
              />
            </div>
            <button className="my-[15px] w-full rounded-md bg-blue-400 p-3">
              Sign In
            </button>
          </form>
        )}
      </div>
      <div>
        <p className="mt-5 text-center text-black dark:text-white">
          Don't have an account?
          <Link
            to="/signup"
            className="cursor-pointer font-semibold text-blue-400"
          >
            {" "}
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;

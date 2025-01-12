import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  async function register(data) {
    const user = await fetch("https://todoserver-w74l.onrender.com/user", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await user.json();
    console.log("User Signin: ", result);

    if (user.ok) {
      alert("User created successfully");
      navigate("/signin");
    }
  }
  return (
    <div>
      <div className="m-auto mt-[25vh] flex max-w-[400px] items-center justify-center rounded-md bg-white py-8">
        {loading ? (
          <p className="animate-spin text-7xl"> ⏳</p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const data = {
                username: formData.get("username"),
                email: formData.get("email"),
                password: formData.get("password"),
              };
              console.log("FormData: ", data);

              register(data);
              e.target.reset();
            }}
          >
            <div className="mb-6 flex items-center gap-2">
              <img src="todo.png" alt="todo" className="w-8" />
              <h1 className="text-2xl font-extrabold text-green-600">TODO</h1>
            </div>
            <h1 className="font-bold text-green-600">Create your account</h1>
            <div className="mt-5 flex flex-col gap-5">
              <input
                type="text"
                id="username"
                placeholder="username"
                name="username"
                className="rounded-sm border border-gray-300 p-2 text-black"
                required
              />
              <input
                type="email"
                id="email"
                placeholder="enter your email address"
                name="email"
                className="rounded-sm border border-gray-300 p-2 text-black"
                required
              />

              <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
                className="rounded-sm border border-gray-300 p-2 text-black"
                required
              />
            </div>
            <button className="my-[15px] w-full rounded-md bg-blue-400 p-3">
              Register
            </button>
          </form>
        )}
      </div>
      <div>
        <p className="mt-5 text-center">
          Have an account?
          <Link
            to="/signin"
            className="cursor-pointer font-semibold text-blue-400"
          >
            {" "}
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

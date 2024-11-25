import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("hello guys");
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen ">
      <div className="border-2 p-20 border-emerald-800 rounded-xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="border-2 border-emerald-700 py-3 px-4 text-2xl outline-none bg-transparent rounded-full placeholder:text-gray-500"
            type="email"
            placeholder="Enter your Email"
          />
          <input
            required
            className="border-2 border-emerald-700 py-3 px-4 text-2xl outline-none bg-transparent rounded-full placeholder:text-gray-500 mt-4"
            type="Password"
            placeholder="Enter your Password"
          />
          <button className="border-2 text-white bg-emerald-700 py-3 px-4 text-xl outline-none mt-4 rounded-full placeholder:text-gray-500">
            {" "}
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

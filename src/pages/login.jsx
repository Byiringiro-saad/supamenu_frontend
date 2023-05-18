/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-screen h-screen bg-bright flex">
      <div className="flex flex-1 w-1/2 justify-center items-center">
        <p className="text-7xl font-bold text-black">
          Supa<span className="text-white">Menu</span>
        </p>
      </div>
      <div className="flex flex-1 w-1/2 justify-center items-center">
        <div className="flex flex-col bg-white w-4/5 h-auto px-20 py-10 rounded-md items-center">
          <div className="flex flex-col items-center">
            <p className="text-gray">Welcome</p>
            <p className="text-black text-2xl pt-2 pb-3 font-bold">
              Login to SupaMenu
            </p>
          </div>
          <form className="pt-10 w-full">
            <div className="flex flex-col items-start max-4/5">
              <label htmlFor="email" className="text-gray mb-2">
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="Email address"
                className="w-full rounded focus:outline-none text-sm py-3"
              />
            </div>
            <div className="flex flex-col items-start max-4/5 mt-5">
              <label htmlFor="password" className="text-gray mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full rounded focus:outline-none text-sm py-3"
              />
            </div>
            <button
              type="submit"
              className="bg-bright w-full mt-5 h-12 rounded text-white"
            >
              Login
            </button>
          </form>
          <div className="flex w-full flex-col items-center mt-6">
            <div className="flex">
              <p className="mr-2">Don't have an account!?</p>
              <Link to={`/signup`} className="text-blue font-semibold">
                Signup
              </Link>
            </div>
            <div className="flex mt-5">
              <p className="mr-2">Forgot password!?</p>
              <Link to={`/signup`} className="text-blue font-semibold">
                Reset
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

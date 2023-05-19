/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

//features
import axios from "../features/axios";

//assets
import loader from "../assets/loader.svg";

const Signup = () => {
  //configs
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  //local data
  const [loading, setLoading] = useState(false);

  const handleSignup = (data) => {
    setLoading(true);
    axios
      .post("/users/", {
        fname: data.fname,
        lname: data.lname,
        phone: data.phone,
        email: data.email,
        password: data.password,
      })
      .then(() => {
        toast.success("Welcome to Supamenu", {
          toastId: "123saad",
          position: "top-right",
        });
        setTimeout(() => {
          navigate("/create/one");
        }, 2000);
      })
      .catch(() => {
        toast.error("Invalid information", {
          toastId: "123saad",
          position: "top-right",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

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
            <p className="text-black text-2xl pb-3 font-bold">Signup</p>
          </div>
          <form className="pt-10 w-full" onSubmit={handleSubmit(handleSignup)}>
            <div className="flex flex-col items-start max-4/5">
              <label htmlFor="fname" className="text-gray mb-2">
                First name
              </label>
              <input
                type="text"
                id="fname"
                {...register("fname", { required: true })}
                placeholder="First name"
                className="w-full rounded focus:outline-none text-sm py-3"
              />
            </div>
            <div className="flex flex-col items-start max-4/5 mt-5">
              <label htmlFor="lname" className="text-gray mb-2">
                Last name
              </label>
              <input
                type="text"
                id="lname"
                {...register("lname", { required: true })}
                placeholder="Last name"
                className="w-full rounded focus:outline-none text-sm py-3"
              />
            </div>
            <div className="flex flex-col items-start max-4/5 mt-5">
              <label htmlFor="phone" className="text-gray mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                {...register("phone", { required: true })}
                placeholder="Phone number"
                className="w-full rounded focus:outline-none text-sm py-3"
              />
            </div>
            <div className="flex flex-col items-start max-4/5 mt-5">
              <label htmlFor="email" className="text-gray mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: true })}
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
                {...register("password", { required: true })}
                placeholder="Password"
                className="w-full rounded focus:outline-none text-sm py-3"
              />
            </div>
            <button
              type="submit"
              className="bg-bright w-full mt-5 h-12 rounded text-white flex items-center justify-center"
            >
              {loading ? (
                <img src={loader} alt="loader" className="w-16" />
              ) : (
                <p>Signup</p>
              )}
            </button>
          </form>
          <div className="flex w-full flex-col items-center mt-6">
            <div className="flex">
              <p className="mr-2">Already have an account!?</p>
              <Link to={`/`} className="text-blue font-semibold">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

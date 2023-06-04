import { useState } from "react";
import { useForm } from "react-hook-form";

//icons
import { FaPlay } from "react-icons/fa";

//images
import loader from "../../assets/loader.svg";
import axios from "../../features/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const One = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  //local data
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);
    axios
      .post("/restaurants/one", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("supamenu_token")}`,
        },
      })
      .then((res) => {
        localStorage.setItem("supamenu_restaurant_id", res.data.result._id);
        navigate("/create/two");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong", {
          toastId: "create123",
          position: "top-right",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form className="flex flex-col w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col w-full">
        <div className="flex flex-col w-full">
          <p className="text-black text-lg">Restaurant information</p>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Restaurant name"
            className="w-full mt-5 rounded focus:outline-none text-sm py-3"
          />
          <input
            type="text"
            {...register("full_name", { required: true })}
            placeholder="Restaurant complete name"
            className="w-full mt-5 rounded focus:outline-none text-sm py-3"
          />
        </div>
        <div className="flex flex-col mt-10 w-full h-auto">
          <p className="text-black text-lg">Restaurant contact details</p>
          <div className="flex items-center border border-gray h-14 px-5 mt-5 rounded">
            <div className="flex items-center justify-center pr-3 mr-3 border-r-2 border-gray">
              <p>+250</p>
            </div>
            <input
              type="tel"
              {...register("restaurant_phone", { required: true })}
              placeholder="Mobile number"
              className="w-full rounded outline-none text-sm py-3 border-none"
            />
          </div>
        </div>
        <div className="flex flex-col mt-10 w-full h-auto">
          <p className="text-black text-lg">Restaurant owner details</p>
          <div className="flex items-center border border-gray h-14 px-5 mt-5 rounded">
            <div className="flex items-center justify-center pr-3 mr-3 border-r-2 border-gray">
              <p>+250</p>
            </div>
            <input
              type="tel"
              {...register("owner_phone", { required: true })}
              placeholder="Mobile number"
              className="w-full rounded outline-none text-sm py-3 border-none"
            />
          </div>
          <div className="flex">
            <input
              type="text"
              {...register("owner_name", { required: true })}
              placeholder="Owner name"
              className="w-full mt-5 rounded focus:outline-none text-sm py-3 mr-5"
            />
            <input
              type="text"
              {...register("owner_email", { required: true })}
              placeholder="Owner email"
              className="w-full mt-5 rounded focus:outline-none text-sm py-3"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full h-40 items-center justify-between">
        <div className="flex px-10 py-3 items-center justify-around cursor-pointer">
          {/* <FaPlay className="mr-2" />
          <p>Back</p> */}
        </div>
        <button
          type="submit"
          className="flex px-10 bg-bright py-3 items-center justify-around rounded cursor-pointer"
        >
          {loading ? (
            <img src={loader} alt="loader" className="w-10" />
          ) : (
            <>
              <FaPlay className="mr-2 text-white" />
              <p className="text-white">Next</p>
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default One;

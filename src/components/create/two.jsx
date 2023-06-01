import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

//icons
import { FaPlay } from "react-icons/fa";

//features
import axios from "../../features/axios";

//images
import loader from "../../assets/loader.svg";

const Two = () => {
  //config
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  //local data
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const fileHandler = (e) => {
    setFile(e.target.files[0]);
  };

  const back = () => {
    navigate("/create/one");
  };

  const onSubmit = (data) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("type", data.type);
    formData.append("opening", data.opening);
    formData.append("closing", data.closing);
    formData.append("location", data.location);

    axios
      .post(
        "/restaurants/two/",
        {
          ...formData,
          restaurant: localStorage.getItem("supamenu_restaurant_id"),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("supamenu_token")}`,
          },
        }
      )
      .then(() => {
        navigate("/create/three");
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
          <p className="text-black text-lg">More information</p>
          <select
            type="text"
            {...register("type", { required: true })}
            className="w-full mt-5 rounded focus:outline-none text-sm py-3"
          >
            <option value="Type">Type</option>
            <option value="Pub">Pub</option>
            <option value="Hotel">Hotel</option>
            <option value="Other">Other</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Coffeeshop">Coffeeshop</option>
          </select>
          <select
            type="text"
            {...register("location", { required: true })}
            className="w-full mt-5 rounded focus:outline-none text-sm py-3"
          >
            <option value="Type">Location</option>
            <option value="Rwanda">Rwanda</option>
            <option value="Uganda">Uganda</option>
            <option value="DRC">DRC</option>
            <option value="Tanzania">Tanzania</option>
            <option value="Burundi">Burundi</option>
          </select>
        </div>
        <div className="flex flex-col w-full mt-10">
          <p className="text-black text-lg">More information</p>
          <div className="flex">
            <div className="flex w-3/6 items-center border border-gray h-14 px-5 mt-5 mr-5 rounded">
              <div className="flex items-center justify-center pr-3 mr-3 border-r-2 border-gray">
                <p>From</p>
              </div>
              <input
                type="text"
                {...register("opening", { required: true })}
                placeholder="14:00"
                className="w-full rounded outline-none text-sm py-3 border-none"
              />
            </div>
            <div className="flex w-3/6 items-center border border-gray h-14 px-5 mt-5 rounded">
              <div className="flex items-center justify-center pr-3 mr-3 border-r-2 border-gray">
                <p>To</p>
              </div>
              <input
                type="text"
                placeholder="2:00"
                {...register("closing", { required: true })}
                className="w-full rounded outline-none text-sm py-3 border-none"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mt-10">
          <p className="text-black text-lg">Upload logo/picture</p>
          <input
            type="file"
            onChange={fileHandler}
            className="w-full mt-5 rounded border border-gray px-5 focus:outline-none text-sm py-3"
          />
        </div>
      </div>
      <div className="flex w-full h-40 items-center justify-between">
        <div
          className="flex px-10 py-3 items-center justify-around border rounded border-gray cursor-pointer"
          onClick={back}
        >
          <FaPlay className="mr-2" />
          <p>Back</p>
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

export default Two;

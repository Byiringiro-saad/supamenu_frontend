import { useState } from "react";
import { Outlet, useNavigate } from "react-router";

//components
import Nav from "../../components/nav";

const CreateRestaurant = () => {
  //config
  const navigate = useNavigate();

  //local data
  const [active, setActive] = useState("one");

  const handleActive = (text) => {
    setActive(text);
    navigate("/create/" + text);
  };

  return (
    <div className="flex flex-col">
      <Nav />
      <div className="flex">
        <div className="flex flex-col w-1/5 px-5 py-5 pb-20 h-auto ml-10 mt-10 border border-gray rounded">
          <p className="text-lg font-bold text-black mb-5">
            Create your restaurant profile
          </p>
          <div
            className="flex mt-5 cursor-pointer"
            onClick={() => handleActive("one")}
          >
            <div
              className={`flex rounded-full w-10 h-10 items-center justify-center ${
                active === "one" ? "bg-bright" : "bg-gray"
              } `}
            >
              <p className="text-white">1</p>
            </div>
            <div className="flex flex-col">
              <p className="ml-5 text-base">Restaurant information</p>
              <p className="ml-5 text-gray">
                Restaurant name, address, Details, owner details
              </p>
            </div>
          </div>
          <div
            className="flex mt-5 cursor-pointer"
            onClick={() => handleActive("two")}
          >
            <div
              className={`flex rounded-full w-10 h-10 items-center justify-center ${
                active === "two" ? "bg-bright" : "bg-gray"
              } `}
            >
              <p className="text-white">2</p>
            </div>
            <div className="flex flex-col">
              <p className="ml-5 text-base">Restaurant Types & Timings</p>
              <p className="ml-5 text-gray">
                Establishment & cuisine type, opening hours
              </p>
            </div>
          </div>
          <div
            className="flex mt-5 cursor-pointer"
            onClick={() => handleActive("three")}
          >
            <div
              className={`flex rounded-full w-10 h-10 items-center justify-center ${
                active === "three" ? "bg-bright" : "bg-gray"
              } `}
            >
              <p className="text-white">3</p>
            </div>
            <div className="flex flex-col">
              <p className="ml-5 text-base">Create your menu</p>
              <p className="ml-5 text-gray">Menu, restaurant, food images</p>
            </div>
          </div>
        </div>
        <div className="flex w-4/5 px-5 py-5 h-auto ml-10 mt-10 mr-10 border border-gray rounded">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CreateRestaurant;

import { useState } from "react";
import { Outlet, useNavigate } from "react-router";

//icons
import { FiSearch } from "react-icons/fi";
import { IoMdSettings } from "react-icons/io";
import { AiFillPieChart } from "react-icons/ai";
import { BsLightbulbFill } from "react-icons/bs";
import { IoNotificationsSharp } from "react-icons/io5";
import {
  MdTableRestaurant,
  MdOutlineRestaurantMenu,
  MdAccountCircle,
} from "react-icons/md";

//images
import image from "../../assets/user.png";

const Dashboard = () => {
  //config
  const navigate = useNavigate();

  //local data
  const [active, setActive] = useState("/");

  const handleNavigate = (text) => {
    setActive(text);
    navigate("/dashboard/" + text);
  };

  return (
    <div className="flex w-full">
      <div className="flex flex-col py-10 items-center w-1/5 h-screen bg-black">
        <p className="text-3xl font-bold text-bright">
          Supa<span className="text-white">Menu</span>
        </p>
        <div className="flex w-full flex-col mt-10 items-start">
          <div
            className={`flex items-center w-full h-16 px-10 cursor-pointer text-gray border-l-4 border-l-black ${
              active === "/" && "bg-grayish border-l-4 border-l-gray text-white"
            }`}
            onClick={() => handleNavigate("/")}
          >
            <AiFillPieChart className="text-2xl mr-3" />
            <p>Overview</p>
          </div>
          <div
            className={`flex items-center w-full h-16 px-10 cursor-pointer text-gray border-l-4 border-l-black ${
              active === "tables" &&
              "bg-grayish border-l-4 border-l-gray text-white"
            }`}
            onClick={() => handleNavigate("tables")}
          >
            <MdTableRestaurant className="text-2xl mr-3" />
            <p>Tables</p>
          </div>
          <div
            className={`flex items-center w-full h-16 px-10 cursor-pointer text-gray border-l-4 border-l-black ${
              active === "orders" &&
              "bg-grayish border-l-4 border-l-gray text-white"
            }`}
            onClick={() => handleNavigate("orders")}
          >
            <BsLightbulbFill className="text-2xl mr-3" />
            <p>Orders</p>
          </div>
          <div
            className={`flex items-center w-full h-16 px-10 cursor-pointer text-gray border-l-4 border-l-black ${
              active === "menus" &&
              "bg-grayish border-l-4 border-l-gray text-white"
            }`}
            onClick={() => handleNavigate("menus")}
          >
            <MdOutlineRestaurantMenu className="text-2xl mr-3" />
            <p>Menus</p>
          </div>
        </div>
        <div className="flex w-full flex-col mt-40 items-start">
          <div
            className={`flex items-center w-full h-16 px-10 cursor-pointer text-gray border-l-4 border-l-black ${
              active === "settings" &&
              "bg-grayish border-l-4 border-l-gray text-white"
            }`}
            onClick={() => handleNavigate("settings")}
          >
            <IoMdSettings className="text-2xl mr-3" />
            <p>Settings</p>
          </div>
          <div
            className={`flex items-center w-full h-16 px-10 cursor-pointer text-gray border-l-4 border-l-black ${
              active === "account" &&
              "bg-grayish border-l-4 border-l-gray text-white"
            }`}
            onClick={() => handleNavigate("account")}
          >
            <MdAccountCircle className="text-2xl mr-3" />
            <p>My Account</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-background w-4/5">
        <div className="flex w-full h-20 px-5 items-center justify-between">
          <p className="text-xl font-semibold capitalize">
            {active === "/" ? "Overview" : active}
          </p>
          <div className="flex items-center">
            <div className="flex h-8 items-center border-r-gray border-r-2 mr-5">
              <FiSearch className="text-xl mr-5" />
              <IoNotificationsSharp className="text-xl mr-5" />
            </div>
            <div className="flex items-center">
              <p className="">Byiringiro saad</p>
              <img
                src={image}
                alt="user"
                className="rounded-full border border-gray w-12 h-12 ml-5 p-2"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full px-5 h-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import { useState } from "react";
import { Outlet, useNavigate } from "react-router";

//icons
import { FaPlay } from "react-icons//fa";

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

  const next = () => {
    if (active === "one") {
      setActive("two");
      navigate("/create/two");
    } else if (active === "two") {
      setActive("three");
      navigate("/create/three");
    } else {
      navigate("/create/three");
    }
  };

  const back = () => {
    if (active === "three") {
      setActive("two");
      navigate("/create/two");
    } else if (active === "two") {
      setActive("one");
      navigate("/create/one");
    } else {
      navigate("/create/one");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Nav />
      <div className="flex w-4/6">
        <div className="flex flex-col w-2/5 px-5 py-5 pb-20 h-auto ml-10 mt-10 border border-gray rounded">
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
        <div className="flex w-5/6 px-5 py-5 h-auto ml-10 mt-10 mr-10 border border-gray rounded">
          <Outlet />
        </div>
      </div>
      <div className="flex w-3/6 h-40 items-center justify-between">
        <div
          className="flex px-10 py-3 items-center justify-around border rounded border-gray cursor-pointer"
          onClick={back}
        >
          <FaPlay className="mr-2" />
          <p>Back</p>
        </div>
        <div
          className="flex px-10 bg-bright py-3 items-center justify-around rounded cursor-pointer"
          onClick={next}
        >
          <FaPlay className="mr-2 text-white" />
          <p className="text-white">Next</p>
        </div>
      </div>
    </div>
  );
};

export default CreateRestaurant;

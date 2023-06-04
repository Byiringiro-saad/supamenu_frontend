import { useState } from "react";
import moment from "moment/moment";
import { useQuery } from "react-query";

//icons
import { MdOutlineAdd } from "react-icons/md";

//features
import axios from "../../features/axios";

const Overview = () => {
  const { isLoading, data } = useQuery("overview", () => {
    axios
      .get(`/orders/all/${localStorage.getItem("supamenu_restaurant_id")}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("supamenu_token")}`,
        },
      })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  });

  const [active, setActive] = useState("All");

  const handleActive = (text) => {
    setActive(text);
  };

  return (
    <div className="flex flex-col w-full h-auto">
      <div className="flex">
        <div className="flex flex-col items-center w-60 py-5 bg-white border border-gray rounded mr-5">
          <p className="text-gray mb-5">Guests</p>
          <p className="text-black text-3xl">0</p>
        </div>
        <div className="flex flex-col items-center w-60 py-5 bg-white border border-gray rounded mr-5">
          <p className="text-gray mb-5">Revenues (FRW)</p>
          <p className="text-black text-3xl">0 RWF</p>
        </div>
        <div className="flex flex-col items-center w-60 py-5 bg-white border border-gray rounded mr-5">
          <p className="text-gray mb-5">Orders</p>
          <p className="text-black text-3xl">0</p>
        </div>
      </div>
      <div className="flex bg-white border border-gray rounded mt-8 w-full p-5">
        <div className="flex flex-col">
          <p className="text-black text-xl">Orders</p>
          <p className="text-gray">{moment().format("MMMM Do YYYY, h:mm a")}</p>
        </div>
        <div className="flex flex-col ml-10 w-3/5 items-center">
          <div className="flex w-full h-auto  justify-between mb-10 px-20">
            <div
              className={`flex items-center justify-center border border-bright px-16 py-3 cursor-pointer rounded ${
                active === "Active" ? "bg-bright" : "bg-white"
              }}`}
              onClick={() => handleActive("Active")}
            >
              <p className="text-bright">Active</p>
            </div>
            <div
              className={`flex items-center justify-center border border-bright px-16 py-3 cursor-pointer rounded ${
                active === "Paid" ? "bg-bright" : "bg-white"
              }}`}
              onClick={() => handleActive("Paid")}
            >
              <p className="text-bright">Paid</p>
            </div>
            <div
              className={`flex items-center justify-center border border-bright px-16 py-3 cursor-pointer rounded ${
                active === "Pending" ? "bg-bright" : "bg-white"
              }}`}
              onClick={() => handleActive("Pending")}
            >
              <p className="text-bright">Pending</p>
            </div>
            <div
              className={`flex items-center justify-center border border-bright px-16 py-3 cursor-pointer rounded ${
                active === "All" ? "bg-bright" : "bg-white"
              }}`}
              onClick={() => handleActive("All")}
            >
              <p className="text-bright">All</p>
            </div>
          </div>
          {isLoading ? (
            <div className="flex justify-center items-center w-full h-64">
              <p className="text-gray">Loading...</p>
            </div>
          ) : (
            <>
              {data?.result?.map((item, key) => (
                <div className="flex flex-col w-full px-20 mb-5" key={key}>
                  <div className="flex w-full justify-between p-5 h-28 bg-another rounded">
                    <p className="text-bright w-1/5 text-center text-lg">
                      Order
                    </p>
                    <div className="flex flex-col w-3/5 mr-5 ml-5">
                      <p>Kaffir Lime Vodka, Lemongrass, Ginger, Citrus</p>
                      <p className="font-bold mt-2 mb-2">Tom Yummy | x 2</p>
                      <p>-- Table 1 --</p>
                    </div>
                    <div className="flex flex-col w-1/5 items-center">
                      <p className="text-bright text-lg">Frw 5,000</p>
                      <p className="mt-2">-- Guest --</p>
                      <p>0788784212</p>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        <div className="flex flex-col w-1/5">
          <div className="flex flex-col w-full h-24 items-center justify-center border border-gray rounded mb-2">
            <p className="text-gray mb-2">Pending orders</p>
            <p className="text-lg">0</p>
          </div>
          <div className="flex flex-col w-full h-24 items-center justify-center border border-gray rounded mb-2">
            <p className="text-gray mb-2">Occupied tables</p>
            <p className="text-lg">0</p>
          </div>
          <div className="flex flex-col w-full h-24 items-center justify-center border border-gray rounded mb-2">
            <p className="text-gray mb-2">Order/hour</p>
            <p className="text-lg">0</p>
          </div>
          <div className="flex flex-col w-full h-24 items-center justify-center border border-gray rounded mb-2">
            <p className="text-gray mb-2">Seats</p>
            <p className="text-lg">0</p>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between mt-8">
        {/* <div className="flex flex-col w-2/6">
          <div className="flex flex-col w-full bg-white border border-gray rounded p-5 mb-5">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <p className="text-lg text-black">Drinks</p>
                <p className="text-gray">Sales</p>
              </div>
              <p className="text-bright">View details</p>
            </div>
            <div className="flex justify-between h-12 items-center">
              <p className="text-black">Primus</p>
              <p className="text-gray">4,600</p>
            </div>
            <div className="flex justify-between border-t-2 border-t-gray h-12 items-center">
              <p className="text-black">Whiskey</p>
              <p className="text-gray">1,600</p>
            </div>
          </div>
          <div className="flex flex-col w-full bg-white border border-gray rounded p-5 mb-5">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <p className="text-lg text-black">Drinks</p>
                <p className="text-gray">Sales</p>
              </div>
              <p className="text-bright">View details</p>
            </div>
            <div className="flex justify-between h-12 items-center">
              <p className="text-black">Primus</p>
              <p className="text-gray">4,600</p>
            </div>
            <div className="flex justify-between border-t-2 border-t-gray h-12 items-center">
              <p className="text-black">Whiskey</p>
              <p className="text-gray">1,600</p>
            </div>
          </div>
        </div> */}
        {/* <div className="flex flex-col w-2/6 mr-5 ml-5">
          <div className="flex flex-col w-full bg-white border border-gray rounded p-5 mb-5">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <p className="text-lg text-black">Drinks</p>
                <p className="text-gray">Sales</p>
              </div>
              <p className="text-bright">View details</p>
            </div>
            <div className="flex justify-between h-12 items-center">
              <p className="text-black">Primus</p>
              <p className="text-gray">4,600</p>
            </div>
            <div className="flex justify-between border-t-2 border-t-gray h-12 items-center">
              <p className="text-black">Whiskey</p>
              <p className="text-gray">1,600</p>
            </div>
          </div>
          <div className="flex flex-col w-full bg-white border border-gray rounded p-5 mb-5">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <p className="text-lg text-black">Drinks</p>
                <p className="text-gray">Sales</p>
              </div>
              <p className="text-bright">View details</p>
            </div>
            <div className="flex justify-between h-12 items-center">
              <p className="text-black">Primus</p>
              <p className="text-gray">4,600</p>
            </div>
            <div className="flex justify-between border-t-2 border-t-gray h-12 items-center">
              <p className="text-black">Whiskey</p>
              <p className="text-gray">1,600</p>
            </div>
          </div>
        </div> */}
        <div className="flex flex-col w-full bg-white border border-gray rounded p-5 mb-5">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="text-lg text-black">Create</p>
              <p className="text-gray">Today</p>
            </div>
            <p className="text-bright">View all</p>
          </div>
          <div className="flex justify-between h-16 items-center p-2">
            <p className="text-gray">Create new</p>
            <div className="flex items-center justify-center bg-gray h-8 w-8 rounded-full cursor-pointer">
              <MdOutlineAdd className="text-white" />
            </div>
          </div>
          <div className="flex justify-between h-16 items-center border-t-2 border-t-gray p-2">
            <div className="flex items-center">
              <input type="radio" className="mr-2" />
              <p>Drink</p>
            </div>
            <div className="flex px-4 py-2 rounded-xl bg-bright">
              <p className="text-white">New</p>
            </div>
          </div>
          <div className="flex justify-between h-16 items-center border-t-2 border-t-gray p-2">
            <div className="flex items-center">
              <input type="radio" className="mr-2" />
              <p>Main</p>
            </div>
            <div className="flex px-4 py-2 rounded-xl bg-bright">
              <p className="text-white">New</p>
            </div>
          </div>
          <div className="flex justify-between h-16 items-center border-t-2 border-t-gray p-2">
            <div className="flex items-center">
              <input type="radio" className="mr-2" />
              <p>Dessert</p>
            </div>
            <div className="flex px-4 py-2 rounded-xl bg-gray">
              <p className="text-white">Default</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

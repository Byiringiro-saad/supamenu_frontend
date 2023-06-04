import moment from "moment";
import { useState } from "react";
import { useQuery } from "react-query";

//icons
import { MdOutlineAdd } from "react-icons/md";

//features
import axios from "../../features/axios";

const Orders = () => {
  const { isLoading, data } = useQuery("orders", async () => {
    const res = await axios.get(
      `/orders/all/${localStorage.getItem("supamenu_restaurant_id")}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("supamenu_token")}`,
        },
      }
    );

    return res.data;
  });

  const [active, setActive] = useState("All");

  const handleActive = (text) => {
    setActive(text);
  };

  return (
    <div className="flex w-full flex-col mt-5">
      <div className="flex bg-white border rounded border-gray w-full p-5">
        <div className="flex flex-col w-4/5">
          <div className="flex w-full">
            <div className="flex flex-col w-1/5">
              <p className="text-black text-xl">Orders</p>
              <p className="text-gray">
                {moment().format("MMMM Do YYYY, h:mm a")}
              </p>
            </div>
            <div className="flex h-auto w-4/5 justify-between mb-10 px-20">
              <div
                className={`flex items-center justify-center border border-bright px-16 py-3 cursor-pointer rounded ${
                  active === "New" ? "bg-bright" : "bg-white"
                }`}
                onClick={() => handleActive("New")}
              >
                <p className={active === "New" ? "text-white" : "text-bright"}>
                  New
                </p>
              </div>
              <div
                className={`flex items-center justify-center border border-bright px-16 py-3 cursor-pointer rounded ${
                  active === "Delivered" ? "bg-bright" : "bg-white"
                }`}
                onClick={() => handleActive("Delivered")}
              >
                <p
                  className={
                    active === "Delivered" ? "text-white" : "text-bright"
                  }
                >
                  Delivered
                </p>
              </div>
              <div
                className={`flex items-center justify-center border border-bright px-16 py-3 cursor-pointer rounded ${
                  active === "Rejected" ? "bg-bright" : "bg-white"
                }`}
                onClick={() => handleActive("Rejected")}
              >
                <p
                  className={
                    active === "Rejected" ? "text-white" : "text-bright"
                  }
                >
                  Rejected
                </p>
              </div>
              <div
                className={`flex items-center justify-center border border-bright px-16 py-3 cursor-pointer rounded ${
                  active === "All" ? "bg-bright" : "bg-white"
                }`}
                onClick={() => handleActive("All")}
              >
                <p className={active === "All" ? "text-white" : "text-bright"}>
                  All
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            {isLoading ? (
              <div className="flex justify-center items-center w-full h-64">
                <p className="text-gray">Loading...</p>
              </div>
            ) : (
              <>
                {data?.orders?.map((order, index) => (
                  <div className="flex flex-col w-full px-20 mb-5" key={index}>
                    <div className="flex w-full justify-between p-5 h-28 bg-another rounded">
                      <p className="text-bright w-1/5 text-center text-lg">
                        Order | 1
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
                {data?.orders?.length === 0 && (
                  <div className="flex justify-center items-center w-full h-64">
                    <p className="text-gray">No orders yet</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col w-1/5">
          <div className="flex flex-col w-full h-24 items-center justify-center border border-gray rounded mb-2">
            <p className="text-gray mb-2">Delivered</p>
            <p className="text-lg">0</p>
          </div>
          <div className="flex flex-col w-full h-24 items-center justify-center border border-gray rounded mb-2">
            <p className="text-gray mb-2">Waiting</p>
            <p className="text-lg">0</p>
          </div>
          <div className="flex flex-col w-full h-24 items-center justify-center border border-gray rounded mb-2">
            <p className="text-gray mb-2">Rejected</p>
            <p className="text-lg">0</p>
          </div>
          <div className="flex flex-col w-full h-24 items-center justify-center border border-gray rounded mb-2">
            <p className="text-gray mb-2">All</p>
            <p className="text-lg">0</p>
          </div>
          <div className="flex flex-col w-full h-auto py-4 px-5 items-center justify-center border border-gray rounded mb-2">
            <div className="flex w-full flex-col">
              <p className="text-lg text-black">Add order</p>
              <p className="text-gray">Manually</p>
            </div>
            <div className="flex w-full justify-between h-16 items-center">
              <p className="text-gray">Create new order</p>
              <div className="flex items-center justify-center bg-gray h-8 w-8 rounded-full cursor-pointer">
                <MdOutlineAdd className="text-white" />
              </div>
            </div>
            <div className="flex w-full justify-between h-16 items-center border-t-2 border-t-gray">
              <div className="flex items-center">
                <input type="radio" className="mr-2" />
                <p>Drink</p>
              </div>
              <div className="flex px-4 py-2 rounded-xl bg-bright">
                <p className="text-white">New</p>
              </div>
            </div>
            <div className="flex w-full justify-between h-16 items-center border-t-2 border-t-gray">
              <div className="flex items-center">
                <input type="radio" className="mr-2" />
                <p>Main</p>
              </div>
              <div className="flex px-4 py-2 rounded-xl bg-bright">
                <p className="text-white">New</p>
              </div>
            </div>
            <div className="flex w-full justify-between h-16 items-center border-t-2 border-t-gray">
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
    </div>
  );
};

export default Orders;

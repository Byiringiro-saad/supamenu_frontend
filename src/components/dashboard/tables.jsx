import { useEffect, useState } from "react";
import moment from "moment/moment";
import { useQuery } from "react-query";

//icons
import { MdOutlineAdd } from "react-icons/md";

//features
import axios from "../../features/axios";
import CreateModal from "../modals/seat";

const Tables = () => {
  //local data
  const [tables, setTables] = useState([]);
  const [active, setActive] = useState("Free");
  const [createSeat, setCreateSeat] = useState(false);

  //fetch data
  const { isLoading, data } = useQuery("tables", async () => {
    const res = await axios.get(
      `/seats/all/${localStorage.getItem("supamenu_restaurant_id")}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("supamenu_token")}`,
        },
      }
    );

    return res.data;
  });

  const handleActive = (text) => {
    setActive(text);
  };

  const handleCreateSeat = () => {
    setCreateSeat(!createSeat);
  };

  useEffect(() => {
    if (data) {
      setTables(data?.seats?.filter((seat) => seat?.status === active));
    }
  }, [active, data]);

  return (
    <>
      {createSeat && <CreateModal close={handleCreateSeat} />}
      <div className="flex w-full flex-col mt-5">
        <div className="flex bg-white border rounded border-gray w-full p-5">
          <div className="flex flex-col w-4/5">
            <div className="flex w-full">
              <div className="flex flex-col w-1/5">
                <p className="text-black text-xl">Seats</p>
                <p className="text-gray">
                  {moment().format("MMMM Do YYYY, h:mm a")}
                </p>
              </div>
              <div className="flex h-auto w-4/5 justify-between mb-10 px-20">
                <div
                  className={`flex items-center justify-center border border-bright px-16 py-3 cursor-pointer rounded ${
                    active === "Free" ? "bg-bright" : "bg-white"
                  }`}
                  onClick={() => handleActive("Free")}
                >
                  <p
                    className={active === "Free" ? "text-white" : "text-bright"}
                  >
                    Free
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
                  <p
                    className={active === "All" ? "text-white" : "text-bright"}
                  >
                    All
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`pr-5 ${
                tables?.length > 0 ? "grid grid-cols-3 gap-2" : "flex"
              }`}
            >
              {isLoading ? (
                <div className="flex justify-center items-center w-full h-64">
                  <p className="text-gray text-center">Loading...</p>
                </div>
              ) : (
                <>
                  {tables?.map((seat, index) => (
                    <div
                      className="flex w-full justify-between py-5 h-30 bg-another rounded"
                      key={index}
                    >
                      <p className="text-bright w-2/5 text-center text-lg">
                        Table | {index + 1}
                      </p>
                      <div className="flex flex-col w-3/5 mr-5 ml-5">
                        <p className="font-bold text-lg mb-2 capitalize">
                          {seat?.name}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col items-center">
                            <p>-- Status --</p>
                            <p className="text-bright">{seat?.status}</p>
                          </div>
                          <div className="flex flex-col items-center">
                            <p>-- Guest --</p>
                            {seat?.status === "Taken" ? (
                              <p>0788784212</p>
                            ) : (
                              <p>None</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {tables?.length === 0 && (
                    <div className="flex justify-center items-center w-full h-64">
                      <p className="text-gray">No Seats yet</p>
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
              <p className="text-gray mb-2">Free</p>
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
          </div>
        </div>
        <div className="flex w-full justify-end mt-8 mb-10">
          {/* <div className="flex flex-col w-2/6 bg-white border border-gray rounded p-5 mr-5">
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
        </div> */}
          {/* <div className="flex flex-col w-2/6 bg-white border border-gray rounded p-5 mr-5">
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
        </div> */}
          <div className="flex flex-col w-2/6 bg-white border border-gray rounded p-5">
            <div className="flex justify-between h-16 items-center">
              <div className="flex flex-col">
                <p className="text-gray">Create new table</p>
                <p>Today</p>
              </div>
              <div
                className="flex items-center justify-center bg-gray h-8 w-8 rounded-full cursor-pointer"
                onClick={handleCreateSeat}
              >
                <MdOutlineAdd className="text-white" />
              </div>
            </div>
            <div className="flex justify-between h-12 items-center">
              <p className="text-black">Total number</p>
              <p className="text-gray">0</p>
            </div>
            {/* <div className="flex justify-between border-t-2 border-t-gray h-12 items-center">
            <p className="text-black">Choose location</p>
            <p className="text-gray"></p>
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tables;

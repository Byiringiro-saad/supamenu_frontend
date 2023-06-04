/* eslint-disable no-undef */

import { useState } from "react";
import ReactDOM from "react-dom";

//features
import axios from "../../features/axios";
import { toast } from "react-toastify";

const CreateSeat = ({ close }) => {
  //local data
  const [name, setName] = useState("");
  const [seats, setSeats] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleAdd = () => {
    if (name === "") return;
    setSeats([...seats, name]);
    setName("");
  };

  const handleSave = async () => {
    setLoading(true);

    axios
      .post(
        "/seats",
        {
          seats,
          restaurant: localStorage.getItem("supamenu_restaurant_id"),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("supamenu_token")}`,
          },
        }
      )
      .then(() => {
        toast.success("Tables created successfully", {
          toastId: "seat123",
          position: "top-right",
        });
      })
      .catch(() => {
        toast.error("Something went wrong", {
          toastId: "seat123",
          position: "top-right",
        });
      })
      .finally(() => {
        setLoading(false);
        close();
      });
  };

  return ReactDOM.createPortal(
    <div className="flex w-full h-full fixed items-center justify-center">
      <div className="flex w-4/12 h-auto bg-white z-50 rounded px-5">
        <div className="flex flex-col w-full h-full">
          <div className="flex w-full h-16 items-center justify-between border-b border-gray p-5">
            <p className="text-lg text-black">Create Table</p>
            <p
              className="text-bright cursor-pointer"
              onClick={() => close()}
            ></p>
          </div>
          <div className="grid grid-cols-2 gap-5 mt-5">
            {seats.map((seat, index) => (
              <div
                className="flex w-full h-10 items-center justify-between p-5 bg-another rounded"
                key={index}
              >
                <p className="text-black capitalize">{seat}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col w-full h-full p-5">
            <div className="flex flex-col w-full h-16 items-start justify-between">
              <p className="text-black">Table Name</p>
              <input
                value={name}
                onChange={handleName}
                className="border border-gray rounded w-full h-10 p-2"
              />
            </div>
            <div
              className="flex h-10 w-40 mt-3 bg-bright items-center justify-center rounded cursor-pointer"
              onClick={handleAdd}
            >
              <p className="text-white">Add</p>
            </div>
          </div>
          <div className="flex">
            <div className="flex w-full h-16 items-center justify-center border-t border-gray">
              <p className="text-bright cursor-pointer" onClick={() => close()}>
                Cancel
              </p>
            </div>
            <div className="flex w-full h-16 items-center justify-center border-t border-gray">
              {loading ? (
                <p className="text-bright cursor-pointer">Loading...</p>
              ) : (
                <p className="text-bright cursor-pointer" onClick={handleSave}>
                  Save
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex absolute w-full h-full bg-black opacity-50"
        onClick={() => close()}
      />
    </div>,
    document.querySelector("#modal")
  );
};

export default CreateSeat;

import { useState } from "react";
import ReactDOM from "react-dom";
import { toast } from "react-toastify";

//icons
import { CgClose } from "react-icons/cg";

//features
import axios from "../../features/axios";

const CreateMenu = ({ close }) => {
  const [name, setName] = useState("");
  const [menu, setMenu] = useState([]);
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [ingredients, setIngredients] = useState("");

  const handleAdd = () => {
    setMenu([
      ...menu,
      {
        name: name,
        price: price,
        id: Math.random(),
        category: category,
        ingredients: ingredients,
      },
    ]);

    setName("");
    setPrice("");
    setIngredients("");
  };

  const handleRemove = (id) => {
    setMenu(menu.filter((item) => item?.id !== id));
  };

  const handleSave = () => {
    setLoading(true);

    axios
      .post("/products/many", {
        menu: menu,
        restaurant: localStorage.getItem("supamenu_restaurant_id"),
      })
      .then(() => {
        toast.success("Menu added successfully", {
          toastId: "create123",
          position: "top-right",
        });
        close();
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

  return ReactDOM.createPortal(
    <div className="flex w-full h-full fixed items-center justify-center">
      <div className="flex flex-col w-4/12 h-auto bg-white z-50 rounded px-5">
        <div className="flex w-full h-16 items-center justify-between border-b border-gray p-5">
          <p className="text-lg text-black">Create Menu</p>
          <p className="text-bright cursor-pointer" onClick={() => close()}></p>
        </div>
        {menu?.length > 0 && (
          <div className="flex flex-col mt-10">
            {menu.map((item) => (
              <div
                className="flex w-full h-auto bg-another rounded mb-2"
                key={item?.id}
              >
                <div className="flex w-5/6 p-2">
                  <div className="flex w-2/6 overflow-hidden h-full bg-gray rounded">
                    {/* <img src={item?.preview} alt="item image" /> */}
                  </div>
                  <div className="flex flex-col ml-5 pt-3">
                    <p className="font-bold">{item?.name}</p>
                    <p className="mt-2 mb-2">{item?.ingredients}</p>
                    <p className="text-bright">FRW {item?.price}</p>
                  </div>
                </div>
                <div
                  className="flex w-1/6 items-start justify-end p-5 cursor-pointer"
                  onClick={() => handleRemove(item?.id)}
                >
                  <CgClose className="text-lg" />
                </div>
              </div>
            ))}
          </div>
        )}
        <form className="flex w-full flex-col mt-10">
          <div className="flex flex-col items-start max-4/5">
            <label htmlFor="name" className="text-gray mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Menu name"
              className="w-full rounded focus:outline-none text-sm py-3"
            />
          </div>
          <div className="flex flex-col items-start max-4/5 mt-5">
            <label htmlFor="price" className="text-gray mb-2">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded focus:outline-none text-sm py-3"
            >
              <option value="">Select Category</option>
              <option value="Main">Main</option>
              <option value="Drink">Drink</option>
              <option value="Dessert">Dessert</option>
              <option value="Starter">Starter</option>
              <option value="Appetizer">Appetizer</option>
            </select>
          </div>
          <div className="flex flex-col items-start max-4/5 mt-5">
            <label htmlFor="price" className="text-gray mb-2">
              Price
            </label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="RWF"
              className="w-full rounded focus:outline-none text-sm py-3"
            />
          </div>
          <div className="flex flex-col items-start max-4/5 mt-5">
            <label htmlFor="description" className="text-gray mb-2">
              Menu description
            </label>
            <input
              type="text"
              id="description"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              placeholder="Ingredients"
              className="w-full rounded focus:outline-none text-sm py-3"
            />
          </div>
          <div className="flex flex-col items-start max-4/5 mt-5">
            <label htmlFor="image" className="text-gray mb-2">
              Image
            </label>
            <input
              type="file"
              id="image"
              className="w-full rounded border border-gray px-5 focus:outline-none text-sm py-3"
            />
          </div>
        </form>
        <div className="flex w-full h-20 items-center justify-end">
          <div
            className="flex bg-bright px-14 py-3 rounded cursor-pointer"
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
      <div
        className="flex absolute w-full h-full bg-black opacity-50"
        onClick={() => close()}
      />
    </div>,
    document.querySelector("#modal")
  );
};

export default CreateMenu;

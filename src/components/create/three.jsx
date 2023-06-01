import { useState } from "react";

//icons
import { CgClose } from "react-icons/cg";

const Three = () => {
  //local data
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [menu, setMenu] = useState([]);
  const [file, setFile] = useState(null);
  const [price, setPrice] = useState("");
  const [filename, setFilename] = useState(null);
  const [category, setCategory] = useState("Drink");
  const [ingredients, setIngredients] = useState("");

  const handleAdd = () => {
    setId(id + 1);

    //read file
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {};

    setName("");
    setPrice("");
    setFile(null);
    setFilename(null);
    setIngredients("");
  };

  const handleCategory = (text) => {
    setCategory(text);
  };

  const handleRemove = (id) => {
    console.log(id);
    setMenu([]);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="grid w-full grid-flow-col gap-2 ">
        <div
          className={`flex items-center justify-center py-3 rounded cursor-pointer ${
            category === "Drink" ? "bg-bright" : "border border-gray"
          }`}
          onClick={() => handleCategory("Drink")}
        >
          <p className={category === "Drink" ? "text-white" : "text-bright"}>
            Drink
          </p>
        </div>
        <div
          className={`flex items-center justify-center py-3 rounded cursor-pointer ${
            category === "Starter" ? "bg-bright" : "border border-gray"
          }`}
          onClick={() => handleCategory("Starter")}
        >
          <p className={category === "Starter" ? "text-white" : "text-bright"}>
            Starter
          </p>
        </div>
        <div
          className={`flex items-center justify-center py-3 rounded cursor-pointer ${
            category === "Appetizer" ? "bg-bright" : "border border-gray"
          }`}
          onClick={() => handleCategory("Appetizer")}
        >
          <p
            className={category === "Appetizer" ? "text-white" : "text-bright"}
          >
            Appetizer
          </p>
        </div>
        <div
          className={`flex items-center justify-center py-3 rounded cursor-pointer ${
            category === "Dessert" ? "bg-bright" : "border border-gray"
          }`}
          onClick={() => handleCategory("Dessert")}
        >
          <p className={category === "Dessert" ? "text-white" : "text-bright"}>
            Dessert
          </p>
        </div>
        <div
          className={`flex items-center justify-center py-3 rounded cursor-pointer ${
            category === "Main" ? "bg-bright" : "border border-gray"
          }`}
          onClick={() => handleCategory("Main")}
        >
          <p className={category === "Main" ? "text-white" : "text-bright"}>
            Main
          </p>
        </div>
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
                  <img src={item?.preview} alt="item image" />
                </div>
                <div className="flex flex-col ml-5 pt-3">
                  <p className="font-bold">{item?.name}</p>
                  <p className="mt-2 mb-2">{item?.ingredients}</p>
                  <p className="text-bright">FRW {item?.price}</p>
                </div>
              </div>
              <div
                className="flex w-1/6 items-start justify-end p-5"
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
            value={filename}
            onChange={(e) => {
              setFilename(e.target.value);
              setFile(e.target.files[0]);
            }}
            className="w-full rounded border border-gray px-5 focus:outline-none text-sm py-3"
          />
        </div>
      </form>
      <div className="flex w-full h-20 items-center justify-end mt-5">
        <div
          className="flex bg-bright px-14 py-3 rounded cursor-pointer"
          onClick={handleAdd}
        >
          <p className="text-white">Add</p>
        </div>
      </div>
    </div>
  );
};

export default Three;

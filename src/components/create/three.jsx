const Three = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="grid w-full grid-flow-col gap-2 ">
        <div className="flex border items-center justify-center border-gray py-3 rounded cursor-pointer">
          <p className="text-bright">Drink</p>
        </div>
        <div className="flex border items-center justify-center border-gray py-3 rounded cursor-pointer">
          <p className="text-bright">Starter</p>
        </div>
        <div className="flex border items-center justify-center border-gray py-3 rounded cursor-pointer">
          <p className="text-bright">Appetizer</p>
        </div>
        <div className="flex border items-center justify-center border-gray py-3 rounded cursor-pointer">
          <p className="text-bright">Dessert</p>
        </div>
        <div className="flex border items-center justify-center border-gray py-3 rounded cursor-pointer">
          <p className="text-bright">Main</p>
        </div>
      </div>
      <form className="flex w-full flex-col mt-10">
        <div className="flex flex-col items-start max-4/5">
          <label htmlFor="name" className="text-gray mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
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
            placeholder="RWF"
            className="w-full rounded focus:outline-none text-sm py-3"
          />
        </div>
        <div className="flex flex-col items-start max-4/5 mt-5">
          <label htmlFor="description" className="text-gray mb-2">
            Menu description
          </label>
          <input
            type="number"
            id="description"
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
            className="w-full rounded border border-gray px-5 focus:outline-none text-sm py-3"
          />
        </div>
      </form>
      <div className="flex w-full h-20 items-center justify-center mt-5">
        <div className="flex border border-bright px-14 py-3 rounded cursor-pointer">
          <p>Add more</p>
        </div>
      </div>
    </div>
  );
};

export default Three;

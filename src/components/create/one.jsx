const One = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col w-full">
        <p className="text-black text-lg">Restaurant information</p>
        <input
          type="text"
          placeholder="Restaurant name"
          className="w-full mt-5 rounded focus:outline-none text-sm py-3"
        />
        <input
          type="text"
          placeholder="Restaurant complete name"
          className="w-full mt-5 rounded focus:outline-none text-sm py-3"
        />
      </div>
      <div className="flex flex-col mt-10 w-full h-auto">
        <p className="text-black text-lg">Restaurant contact details</p>
        <div className="flex items-center border border-gray h-14 px-5 mt-5 rounded">
          <div className="flex items-center justify-center pr-3 mr-3 border-r-2 border-gray">
            <p>+250</p>
          </div>
          <input
            type="tel"
            placeholder="Mobile number"
            className="w-full rounded outline-none text-sm py-3 border-none"
          />
        </div>
      </div>
      <div className="flex flex-col mt-10 w-full h-auto">
        <p className="text-black text-lg">Restaurant owner details</p>
        <div className="flex items-center border border-gray h-14 px-5 mt-5 rounded">
          <div className="flex items-center justify-center pr-3 mr-3 border-r-2 border-gray">
            <p>+250</p>
          </div>
          <input
            type="tel"
            placeholder="Mobile number"
            className="w-full rounded outline-none text-sm py-3 border-none"
          />
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="Owner name"
            className="w-full mt-5 rounded focus:outline-none text-sm py-3 mr-5"
          />
          <input
            type="text"
            placeholder="Owner email"
            className="w-full mt-5 rounded focus:outline-none text-sm py-3"
          />
        </div>
      </div>
    </div>
  );
};

export default One;

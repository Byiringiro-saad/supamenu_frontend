//icons
import { AiFillEdit } from "react-icons/ai";
import { MdOutlineAdd } from "react-icons/md";

const Menus = () => {
  return (
    <div className="flex w-full flex-col mt-5">
      <div className="flex flex-col bg-white border rounded border-gray w-full p-5">
        <div className="flex">
          <div className="flex flex-col">
            <p className="text-black text-xl">Menus</p>
            <p className="text-gray">as of 25 May 2022, 09:41 PM</p>
          </div>
          <div className="flex h-auto mb-10 px-20">
            <div className="flex items-center justify-center border border-bright px-16 py-3 cursor-pointer rounded mr-2">
              <p className="text-bright">Drink</p>
            </div>
            <div className="flex items-center justify-center border border-bright px-16 py-3 cursor-pointer rounded mr-2">
              <p className="text-bright">Starter</p>
            </div>
            <div className="flex items-center justify-center border border-bright px-16 py-3 cursor-pointer rounded mr-2">
              <p className="text-bright">Appetizer</p>
            </div>
            <div className="flex items-center justify-center border border-bright px-16 py-3 cursor-pointer rounded mr-2">
              <p className="text-bright">Dessert</p>
            </div>
            <div className="flex items-center justify-center border border-bright px-16 py-3 cursor-pointer rounded mr-2">
              <p className="text-bright">Main</p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col w-4/5 px-10">
            <div className="flex justify-between bg-another w-full h-32 py-3 px-3 rounded mb-5">
              <div className="flex w-full">
                <div className="flex w-1/6 h-full bg-gray rounded"></div>
                <div className="flex flex-col ml-5 pt-3">
                  <p>Kaffir Lime Vodka, Lemongrass, Ginger, Citrus</p>
                  <p className="font-bold mt-2 mb-2">Tom Yummy - 12.5</p>
                  <p className="text-bright text-lg">Frw 5,000</p>
                </div>
              </div>
              <div className="flex h-full items-center pr-5">
                <AiFillEdit className="text-2xl text-bright" />
              </div>
            </div>
            <div className="flex justify-between bg-another w-full h-32 py-3 px-3 rounded mb-5">
              <div className="flex w-full">
                <div className="flex w-1/6 h-full bg-gray rounded"></div>
                <div className="flex flex-col ml-5 pt-3">
                  <p>Kaffir Lime Vodka, Lemongrass, Ginger, Citrus</p>
                  <p className="font-bold mt-2 mb-2">Tom Yummy - 12.5</p>
                  <p className="text-bright text-lg">Frw 5,000</p>
                </div>
              </div>
              <div className="flex h-full items-center pr-5">
                <AiFillEdit className="text-2xl text-bright" />
              </div>
            </div>
            <div className="flex justify-between bg-another w-full h-32 py-3 px-3 rounded mb-5">
              <div className="flex w-full">
                <div className="flex w-1/6 h-full bg-gray rounded"></div>
                <div className="flex flex-col ml-5 pt-3">
                  <p>Kaffir Lime Vodka, Lemongrass, Ginger, Citrus</p>
                  <p className="font-bold mt-2 mb-2">Tom Yummy - 12.5</p>
                  <p className="text-bright text-lg">Frw 5,000</p>
                </div>
              </div>
              <div className="flex h-full items-center pr-5">
                <AiFillEdit className="text-2xl text-bright" />
              </div>
            </div>
            <div className="flex justify-between bg-another w-full h-32 py-3 px-3 rounded mb-5">
              <div className="flex w-full">
                <div className="flex w-1/6 h-full bg-gray rounded"></div>
                <div className="flex flex-col ml-5 pt-3">
                  <p>Kaffir Lime Vodka, Lemongrass, Ginger, Citrus</p>
                  <p className="font-bold mt-2 mb-2">Tom Yummy - 12.5</p>
                  <p className="text-bright text-lg">Frw 5,000</p>
                </div>
              </div>
              <div className="flex h-full items-center pr-5">
                <AiFillEdit className="text-2xl text-bright" />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/5">
            <div className="flex flex-col w-full h-auto py-4 px-5 items-center justify-center border border-gray rounded mb-2">
              <div className="flex w-full flex-col">
                <p className="text-lg text-black">Add item</p>
              </div>
              <div className="flex w-full justify-between h-16 items-center">
                <p className="text-gray">Create new menu item</p>
                <div className="flex items-center justify-center bg-gray h-8 w-8 rounded-full cursor-pointer">
                  <MdOutlineAdd className="text-white" />
                </div>
              </div>
              <div className="flex w-full justify-between h-16 items-center border-t-2 border-t-gray">
                <div className="flex items-center">
                  <input type="radio" className="mr-2" />
                  <p>Drink</p>
                </div>
              </div>
              <div className="flex w-full justify-between h-16 items-center border-t-2 border-t-gray">
                <div className="flex items-center">
                  <input type="radio" className="mr-2" />
                  <p>Main</p>
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
              <div className="flex w-full justify-between h-16 items-center border-t-2 border-t-gray">
                <div className="flex items-center">
                  <input type="radio" className="mr-2" />
                  <p>Appetizer</p>
                </div>
              </div>
              <div className="flex w-full justify-between h-16 items-center border-t-2 border-t-gray">
                <div className="flex items-center">
                  <input type="radio" className="mr-2" />
                  <p>Starter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menus;

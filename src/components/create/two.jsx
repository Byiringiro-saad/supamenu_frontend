import { useDispatch, useSelector } from "react-redux";

//actions
import {
  handleType,
  handleFile,
  handleOpening,
  handleClosing,
  handleLocation,
} from "../../store/reducers/create";

const Two = () => {
  //configs
  const dispatch = useDispatch();

  //data
  const type = useSelector((state) => state.create.type);
  const file = useSelector((state) => state.create.file);
  const opening = useSelector((state) => state.create.opening);
  const closing = useSelector((state) => state.create.closing);
  const location = useSelector((state) => state.create.location);

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col w-full">
        <p className="text-black text-lg">More information</p>
        <select
          type="text"
          defaultValue={type}
          onChange={(e) => dispatch(handleType(e.target.value))}
          placeholder="Type"
          className="w-full mt-5 rounded focus:outline-none text-sm py-3"
        >
          <option value="Type">Type</option>
          <option value="Pub">Pub</option>
          <option value="Hotel">Hotel</option>
          <option value="Other">Other</option>
          <option value="Restaurant">Restaurant</option>
          <option value="Coffeeshop">Coffeeshop</option>
        </select>
        <select
          type="text"
          defaultValue={location}
          onChange={(e) => dispatch(handleLocation(e.target.value))}
          placeholder="Type"
          className="w-full mt-5 rounded focus:outline-none text-sm py-3"
        >
          <option value="Type">Location</option>
          <option value="Pub">Rwanda</option>
          <option value="Hotel">Uganda</option>
          <option value="Coffeeshop">DRC</option>
          <option value="Other">Tanzania</option>
          <option value="Restaurant">Burundi</option>
        </select>
      </div>
      <div className="flex flex-col w-full mt-10">
        <p className="text-black text-lg">More information</p>
        <div className="flex">
          <div className="flex w-3/6 items-center border border-gray h-14 px-5 mt-5 mr-5 rounded">
            <div className="flex items-center justify-center pr-3 mr-3 border-r-2 border-gray">
              <p>From</p>
            </div>
            <input
              type="tel"
              value={opening}
              onChange={(e) => dispatch(handleOpening(e.target.alue))}
              placeholder="14:00"
              className="w-full rounded outline-none text-sm py-3 border-none"
            />
          </div>
          <div className="flex w-3/6 items-center border border-gray h-14 px-5 mt-5 rounded">
            <div className="flex items-center justify-center pr-3 mr-3 border-r-2 border-gray">
              <p>To</p>
            </div>
            <input
              type="tel"
              value={closing}
              onChange={(e) => dispatch(handleClosing(e.target.value))}
              placeholder="2:00"
              className="w-full rounded outline-none text-sm py-3 border-none"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full mt-10">
        <p className="text-black text-lg">Upload logo/picture</p>
        <input
          type="file"
          value={file}
          onChange={(e) => dispatch(handleFile(e.target.files[0]))}
          className="w-full mt-5 rounded border border-gray px-5 focus:outline-none text-sm py-3"
        />
      </div>
    </div>
  );
};

export default Two;

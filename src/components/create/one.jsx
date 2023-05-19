import { useDispatch, useSelector } from "react-redux";

//actions
import {
  handleName,
  handleOwnerTel,
  handleFullname,
  handleOwnerName,
  handleownerEmail,
  handleRestaurantTel,
} from "../../store/reducers/create";

const One = () => {
  //config
  const dispatch = useDispatch();

  //data
  const name = useSelector((state) => state.create.name);
  const full_name = useSelector((state) => state.create.full_name);
  const owner_tel = useSelector((state) => state.create.owner_tel);
  const owner_name = useSelector((state) => state.create.owner_name);
  const owner_email = useSelector((state) => state.create.owner_email);
  const restaurant_tel = useSelector((state) => state.create.restaurant_tel);

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col w-full">
        <p className="text-black text-lg">Restaurant information</p>
        <input
          type="text"
          value={name}
          onChange={(e) => dispatch(handleName(e.target.value))}
          placeholder="Restaurant name"
          className="w-full mt-5 rounded focus:outline-none text-sm py-3"
        />
        <input
          type="text"
          value={full_name}
          onChange={(e) => dispatch(handleFullname(e.target.value))}
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
            value={restaurant_tel}
            onChange={(e) => dispatch(handleRestaurantTel(e.target.value))}
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
            value={owner_tel}
            onChange={(e) => dispatch(handleOwnerTel(e.target.value))}
            placeholder="Mobile number"
            className="w-full rounded outline-none text-sm py-3 border-none"
          />
        </div>
        <div className="flex">
          <input
            type="text"
            value={owner_name}
            onChange={(e) => dispatch(handleOwnerName(e.target.value))}
            placeholder="Owner name"
            className="w-full mt-5 rounded focus:outline-none text-sm py-3 mr-5"
          />
          <input
            type="text"
            value={owner_email}
            onChange={(e) => dispatch(handleownerEmail(e.target.value))}
            placeholder="Owner email"
            className="w-full mt-5 rounded focus:outline-none text-sm py-3"
          />
        </div>
      </div>
    </div>
  );
};

export default One;

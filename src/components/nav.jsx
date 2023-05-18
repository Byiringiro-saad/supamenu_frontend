//images
import image from "../assets/user.png";

const Nav = () => {
  return (
    <div className="flex w-full h-20 border-b border-gray items-center px-10 justify-between">
      <p className="text-2xl font-bold text-black">
        Supa<span className="text-bright">Menu</span>
      </p>
      <div className="flex items-center">
        <p className="">Byiringiro saad</p>
        <img
          src={image}
          alt="user"
          className="rounded-full border border-gray w-12 h-12 ml-5 p-2"
        />
      </div>
    </div>
  );
};

export default Nav;

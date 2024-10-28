import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { RiMenu2Fill } from "react-icons/ri";
import { IoIosCloseCircle } from "react-icons/io";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center mt-5 md:mt-10">
      <div>
        <h3 className="text-3xl font-bold">Peddy</h3>
      </div>
      <div className="hidden md:block">
        <ul className="text text-xl text-gray-700 font-semibold flex  gap-16">
          <li>Home</li>
          <li>Shop</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="">
        <div className="hidden md:block">
          <CiUser className="border rounded-full p-2 text-5xl"></CiUser>
        </div>
      </div>
      <div className="block md:hidden">
        <div onClick={() => setOpen(!open)} className=" text-3xl  relative">
          {open === true ? <IoIosCloseCircle /> : <RiMenu2Fill />}
        </div>
        <div
          className={`block md:hidden absolute right-4 bg-gray-200 py-4 px-6 rounded-xl duration-500  ${
            open === true ? "top-10" : "-top-48"
          }`}
        >
          <ul className="text text-xl text-black font-semibold space-y-1">
            <li className="hover:underline">Home</li>
            <li className="hover:underline">Shop</li>
            <li className="hover:underline">Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

import React from "react";
import logo from "../../assets/assets/food-logo.png";
import DarkMode from "../DarkMode";
import { FaCartShopping } from "react-icons/fa6";

function Navbar() {
  return (
    <div className=" shadow-md bg-white  dark:bg-gray-900  dark:text-white duration-200">
      <div className=" container py-3 sm:py-0">
        <div className="flex justify-center  items-center  font-bold">
          <div>
            <a href="" className="flex justify-center items-center gap-2 text-2xl">
              <img src={logo} className="w-10" alt="" />
              Foodie
            </a>
          </div>
          <div className="flex justify-center gap-4">
            <div>
              <DarkMode />
            </div>
            <ul className=" hidden  sm:flex gap-4">
              <li>
                <a className=" inline-block py-4  px-4 hover:text-primary" href="#">Home</a>
              </li>

              <li>
                <a className="inline-block py-4  px-4 hover:text-primary" href="#">Contact</a>
              </li>

              <li>
                <a className="inline-block py-4  px-4 hover:text-primary" href="#">About</a>
              </li>
            </ul>
            <button>Order
                <FaCartShopping />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

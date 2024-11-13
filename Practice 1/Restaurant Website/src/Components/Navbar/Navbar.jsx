import React from "react";
import logo from "../../assets/assets/food-logo.png";
import {FaCartShopping} from 'react-icons/fa6'
import DarkMode from "../DarkMode";

function Navbar() {
  return (
    <div className=" shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 ">
      <div className="container py-3 sm:py-0   ">
        <div className="flex justify-between  items-center font-bold">
          <div>
            <a
              href="#"
              className="flex justify-center  items-center gap-2 text-2xl sm:text-3xl"
            >
              <img src={logo} alt="foodie zone" className="w-10" /> Foodie
            </a>
          </div>
          <div className="flex  items-center gap-4">
            <div>
                <DarkMode/>
            </div>
            <ul className="hidden sm:flex gap-4">
              <li>
                <a
                  href="#"
                  className="inline-block py-4 px-4 hover:text-primary"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-4 px-4 hover:text-primary"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-4 px-4 hover:text-primary"
                >
                  About
                </a>
              </li>
            </ul>
            <button className="bg-gradient-to-r from-yellow-300 to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300 
            flex item-center gap-3
            ">
              order
              <FaCartShopping className = " text-xl  text-white  drop-shadow-sm cursor-pointer" />
            </button>
          </div>
          </div>
      </div>
    </div>
  );
}

export default Navbar;

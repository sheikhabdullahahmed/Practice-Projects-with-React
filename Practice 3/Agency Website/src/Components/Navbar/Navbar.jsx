import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.jpg";
import { FaBars, FaXmark } from "react-icons/fa6";
import DarkMode from "../DarkMode";

function Navbar() {
  const [ismenu, setIsmenu] = useState(false);
  const [isStrick, setIsStrick] = useState(false);
  const [dark, setDark] = useState(false);

  //set toogle Menu
  const toogleMenu = () => {
    setIsmenu(!ismenu);
  };
  const darkModeHandler = () => {
    setDark(!dark);
  };

  useEffect(() => {
    const handlescroll = () => {
      if (window.scrollY > 100) {
        setIsStrick(true);
      } else {
        setIsStrick(false);
      }
    };
    window.addEventListener("scroll", handlescroll);

    return () => {
      window.addEventListener("scroll", handlescroll);
    };
  });

  // navigate  array

  const navItem = [
    { Link: "Home", path: "home" },
    { Link: "Service", path: "Service" },
    { Link: "About", path: "about" },
    { Link: "Product", path: "product" },
  ];

  return (
    <div>
      <header className=" bg-white md:bg-transparent fixed top-0 left-0 right-0     ">
        <nav
          className={`py-4 lg:px-14 px-4 ${
            isStrick
              ? "isStrick top-0 left-0 right-0 border-b bg-white  duration-300 "
              : ""
          }`}
        >
          <div className="flex justify-between  items-center text-base  gap-8">
            <a
              href=""
              className="text-2xl font-semibold  flex  items-center space-x-3"
            >
              <img
                className="w-20 inline-block items-center"
                src={logo}
                alt=""
              />
              NEXTCENT
            </a>
            {/* nav items */}
            <ul className="md:flex space-x-12 hidden ">
              {navItem.map(({ Link, path }) => (
                <Link
                  to={path}
                  key={path}
                  className=" block  text-base  text-gray-900 hover:text-lime-500 first:font-medium"
                >
                  {Link}
                </Link>
              ))}
            </ul>
            {/* btn for large devices  */}

            <div className="space-x-12  hidden lg:flex items-center  ">
            <DarkMode/>
            
              <a
                href=""
                className="hidden lg:flex items-center text-lime-500 hover:text-gray-900"
              >
                Login
              </a>
              <button className="bg-lime-500 text-white py-2 px-2 transition-all  duration-300 rounded hover:bg-emerald-900">
                Sign up
              </button>
            </div>
            {/* menu btn for only mobile screen */}
            <div className="md:hidden">
              <button
                onClick={toogleMenu}
                className=" focus:text-gray-500 text-gray-500 focus:outline-none"
              >
                {ismenu ? (
                  <FaXmark className="h-6  w-6  text-gray-600 " />
                ) : (
                  <FaBars className="h-6  w-6  text-gray-600 " />
                )}
              </button>
            </div>
          </div>

          {/* nav items for mobile device */}
          <div
            className={`space-y-4 px-4 mt-24 py-7 bg-lime-500 ${
              ismenu ? "block fixed top-0  right-0 left-0" : "hidden"
            }`}
          >
            {navItem.map(({ Link, path }) => (
              <Link
                to={path}
                key={path}
                className=" block   text-base  text-gray-900 hover:text-lime-500 first:font-medium"
              >
                {Link}
              </Link>
            ))}
          </div>
         
        </nav>
      </header>
    </div>
  );
}

export default Navbar;

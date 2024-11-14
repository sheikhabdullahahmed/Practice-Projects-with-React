import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";


function Navbar() {
    const [isopen, setIsOpen] = useState(false)

    
  return (
    <div>
      <nav className="fixed  m-4  top-0 right-0 left-0   z-50">
        <div className="container px-4  flex justify-between bg-white  items-center  h-16">
          <h3 className="text-2xl font-bold ">Travel</h3>
          <div className="  hidden md:flex  space-x-4 text-sm  font-bold  items-center">
            <Link
              to="/"
              className="px-6 py-2 hover:bg-gray-600 hover:text-white"
            >
              Home
            </Link>
            <Link
              to="/gallery"
              className="px-6 py-2 hover:bg-gray-600 hover:text-white"
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2 hover:bg-gray-600 hover:text-white"
            >
              Contact
            </Link>
            <Link
              to="/about"
              className="px-6 py-2 hover:bg-gray-600 hover:text-white"
            >
              About
            </Link>
            <button className="py-2 px-6 border bg-gray-400 ">Login</button>
          </div>
          <div>
            <button className="md:hidden" onClick={() => setIsOpen(!isopen)}>
                {isopen ? (<FaTimes/>) : (<FaBars/>)  }
            </button>
          </div>
        </div>
        {
            isopen && (
                <div className="   md:hidden flex   space-y-6 py-4 flex-col bg-white  items-center">
            <Link
              to="/"
              className="px-6 py-2 hover:bg-gray-600 hover:text-white"
            >
              Home
            </Link>
            <Link
              to="/gallery"
              className="px-6 py-2 hover:bg-gray-600 hover:text-white"
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2 hover:bg-gray-600 hover:text-white"
            >
              Contact
            </Link>
            <Link
              to="/about"
              className="px-6 py-2 hover:bg-gray-600 hover:text-white"
            >
              About
            </Link>
            <button className="py-2 px-6 border bg-gray-400 ">Login</button>
          </div>

            )
        }
      </nav>
    </div>
  );
}

export default Navbar;

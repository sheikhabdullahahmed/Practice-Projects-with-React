import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-gray-800   text-white p-4">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className=" container mx-auto  px-4">
          <h2 className="text-2xl  font-bold mb-4">Travel Agency</h2>
          <p className="mb-4">Your trusted pather for unforgettable travle experices.
            <p>Explore the World with us</p>
          </p>
        </div>
        <div className="flex  flex-col md:items-center ">
            <h2 className="text-lg font-semibold ">Quick Links</h2>
            <div className="flex flex-col mt-4 space-y-2">
            <Link to="/">Home</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact us</Link>
            <Link to="/about">About</Link>
            </div>
            </div>
            <div>
                <h3 className="text-xl font-bold mb-4">Follow us</h3>
                <div>
                    <FaFacebook size={24} className="text-blue-500 hover:scale-600"/>
                    <FaInstagram size={24} className="text-blue-500 hover:scale-600"/>
                    <FaTwitter size={24} className="text-blue-500 hover:scale-600"/>
                    <FaYoutube size={24} className="text-blue-500 hover:scale-600"/>
                </div>
                <form className="flex  items-center  justify-center mt-8 " >
                    <input type="email" className="w-full p-2  rounded-l-lg bg-gray-800  border  border-gray-600" placeholder="Enter Your Email" />
                    <button className="bg-blue-600 text-white px-4  py-2  rounded-">Subscribe</button>
                </form>
            </div>
        
        
        </div>
    </div>
  );
}

export default Footer;

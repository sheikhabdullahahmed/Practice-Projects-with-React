import React from "react";
import { CiVideoOn } from "react-icons/ci";
import Food1 from  '../assets/biryani2.png'

function Hero() {
  return (
    <div className="bg-gray-100    min-h-[549px]">
        <div className="grid grid-cols-1 sm:grid-cols-2">
      <div className="flex flex-col  flex-wrap justify-center gap-4 px-12 mt-1   text-center sm:text-left order-2 sm:order-1">
        <h2>Enjoy Your Healthy </h2>
      <div>
        Delcious Food
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, sunt.
        </p>Odit non sapiente voluptatem officia tempore. 
      </div>
      <div className=''>
                <button className='w-32 text-white  font-xl  h-10 bg-red-700 items-center rounded-full'>Book for Ticket</button>
                <CiVideoOn className="w-10 inline-block bg-red-400 sm:hidden rounded-full ml-7 mt-3 " /><span className="ml-2 mt-2 font-semibold ">Wact Video</span>
            </div>
        </div>
        <div className="order-1 sm:order-2 min-h-[500px] sm:min-h-[450px] flex justify-center items-center relative  ">
            <div className="flex justify-center  items-center h-[450px] sm:h-[500px] overflow-hidden">
                <img src={Food1} alt="" />

            </div>
            </div>
            </div>
    </div>
  );
}

export default Hero;

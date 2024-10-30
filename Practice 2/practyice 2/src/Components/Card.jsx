import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";

function Card() {
  return (
    <div className="w-60 px-8 py-10 text-white relative overflow-hidden h-72 rounded-[50px] bg-zinc-900/90">
      <FaRegFileAlt />
      <p className="text-sm leading-tight  mt-5 font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At corrupti.
      </p>
      <div className="footer absolute bottom-0  w-full px-8  py-3 left-0">
        <div className="flex justify-between items-center">
        <h5>.4mb </h5>
        <LuDownload/> 
        </div>
      </div>
    </div>
  );
}

export default Card;

import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data, reference}) {
  return (
    <motion.div  drag dragConstraints={reference} whileDrag={{scale: 1.2}}  className="w-60 flex-shrink-0 px-8 py-10 text-white relative overflow-hidden h-72 rounded-[50px] bg-zinc-900/90">
      <FaRegFileAlt />
      <p className="text-sm leading-tight  mt-5 font-semibold">
        {data.desc}

      </p>
      <div  className="footer absolute bottom-0  w-full   left-0">
        <div className="flex justify-between items-center px-8 py-3 mb-5">
        <h5>{data.filesize}</h5>
        <span className="w-7 h-5 bg-zinc-600 rounded-full  flex items-center justify-center">
          {data.close ? <IoClose/> : <LuDownload size=".7em" color="#fff" /> }
        </span>
        </div>
        {data.tag.isOpen &&  (
        <div className={`tag w-full py-4 flex items-center justify-center  ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"}`}>
          <h3 className="text-md font-semibold"> {data.tag.tagTitle}</h3>
        </div>
      )}
      </div>
    </motion.div>
  );
}

export default Card;

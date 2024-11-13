import React from "react";
import Food1 from "../../assets/assets/biryani5.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";


function Banner() {
  return (
    <div>
      <div className="min-h-[550px]">
        <div
          data-aos="silde-up"
          data-aos-duration="silde"
          className="container"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* {image section} */}
            <div>
              <img
                className='max-w-[430px] w-full mx-auto "drop-shadow-[10_10px_12px_rgba(0,0,0,0.1)]'
                src={Food1}
                alt=""
              />
            </div>
            {/* {Text- content} */}
            <div className="flex flex-col  justify-center gap-6  sm:pt-5">
              <h1 className="text-3xl sm:text-4xl font-bold">Lorem </h1>
              <p className="text-sm text-gray-500 tracking-wide leading-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
                animi odio molestiae laborum reiciendis voluptatibus non quas
              </p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
              aliquam minima suscipit distinctio sequi nostrum eius quas
              delectus hic!Lorem Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Repellendus et optio itaque nesciunt deleniti.
              Ad possimus totam rerum consectetur   
              <div>
              <button className="bg-gradient-to-r from-yellow-300 to-secondary text-white  px-6 py-3  rounded-full hove:scale-105 duration-200 ">  Oder Now </button>
              </div>
            </div>
            <div className="flex justify-center  gap-9">
                <div>
                    <GrSecure className="text-4xl h-20 w-20 shadow-sm p-5  rounded-full bg-violet-100 dark:bg-violet-400"/>
                </div>
                <div>
                    <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5  rounded-full bg-orange-100 dark:bg-orange-400"/>
                </div>
                <div>
                    <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5  rounded-full bg-green-100 dark:bg-green-400"/>
                </div>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

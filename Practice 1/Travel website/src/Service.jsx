import React from "react";
import { FaConciergeBell, FaHotel, FaPlane, FaUmbrellaBeach } from "react-icons/fa";


function Service() {
  const destination = [
    {icon: <FaPlane className="text-4xl text-blue-500"/>,
      title: "Flight, Booking",
      description: "Karachi is Pakistan's largest city, known for its vibrant culture, bustling markets, and beautiful coastal views along the Arabian Sea. ",
    },
    {
      icon: <FaHotel className="text-4xl text-blue-500"/>,
      title: "Conciegre Services",
      description:
        "Murree is a beautiful, vibrant place filled with the colors of spring, where the morning mist and evening views create a stunning scene.",
    },
    {
      icon:<FaUmbrellaBeach className="text-4xl text-blue-500" />,
      title: "Hotel Booking",
      description:
        "Iskardo is a resilient and adventurous spirit, always ready to take on challenges with determination and creativity.",
    },
    {
        icon:<FaConciergeBell className="text-4xl text-blue-500"/>,
        title: "Beach Tours",
        description:
          "Gilgit is a beautiful mountainous region in northern Pakistan, known for its breathtaking landscapes and vibrant culture.",
      },
  ];
  return (
    <div className="py-12 bg-gray-100">
      <div className=" container mx-auto px-4">
        <h3 className="text-3xl  font-bold  text-center  mb-8 ">
          Our Service
        </h3>
        <div className="grid gap-6  sm:grid-cols-2   lg:grid-cols-3 xl:grid-cols-4">
          {destination.map((city, index) => {
            return (
              <div
                className="bg-white  rounded-lg shadow-md flex flex-col p-4 items-center cursor-pointer transform  transition duration-300 hover:scale-110"
                key={index}
              >
               <div className="mb-4">
                {city.icon}
               </div>
                <div className="p-4">
                    <h3 className="text-xl font-bold mb-2 ">{city.title}</h3>
                    <p className="text-gray-600 font-semibold">{city.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Service;

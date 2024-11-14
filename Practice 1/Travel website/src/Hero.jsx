import React from "react";

function Hero() {
  const destination = [
    {
      image:
        "https://media.gettyimages.com/id/1355867884/photo/charminar-chorangi-karachi-illuminated-with-green-lights.jpg?s=2048x2048&w=gi&k=20&c=sd1nwnYmWcZR5_YkKd8feAMpi5p2Rb4wZrluSK3uN4k=",
      title: "Karchi, Pakistan",
      description: "Karachi is Pakistan's largest city, known for its vibrant culture, bustling markets, and beautiful coastal views along the Arabian Sea. ",
    },
    {
      image:
        "https://paktourismportal.com/wp-content/uploads/2021/03/Faisal-Mosque-Islamabad-1.jpg",
      title: "Murree, Pakistan",
      description:
        "Murree is a beautiful, vibrant place filled with the colors of spring, where the morning mist and evening views create a stunning scene.",
    },
    {
      image:
        "https://www.travelex.ae/wp-content/uploads/2023/01/2022_07_07_18_59_IMG_1480-min-scaled.jpg",
      title: "SKardu",
      description:
        "Iskardo is a resilient and adventurous spirit, always ready to take on challenges with determination and creativity.",
    },
    {
        image:
          "https://explorepakistantours.pk/wp-content/uploads/2024/02/5fc60efe88c8e-600x600.jpg.webp",
        title: "Gilget",
        description:
          "Gilgit is a beautiful mountainous region in northern Pakistan, known for its breathtaking landscapes and vibrant culture.",
      },
  ];
  return (
    <div className="py-12 bg-gray-100">
      <div className=" container mx-auto px-4">
        <h3 className="text-3xl  font-bold  text-center  mb-8 ">
          Popular Destination
        </h3>
        <div className="grid gap-6  sm:grid-cols-2   lg:grid-cols-3 xl:grid-cols-4">
          {destination.map((city, index) => {
            return (
              <div
                className="bg-white  rounded-lg shadow-md overflow-hidden cursor-pointer"
                key={index}
              >
                <img
                  src={city.image}
                  className="w-full h-52  object-cover  transform  transition  duration-300 hover:scale-110"
                  alt=""
                />
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

export default Hero;

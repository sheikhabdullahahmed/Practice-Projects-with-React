import React from "react";
import about from "../../assets/about.svg";
import { AiFillAlert } from "react-icons/ai";
import { AiFillBuild } from "react-icons/ai";
import { AiFillCrown } from "react-icons/ai";
import { AiFillEuroCircle } from "react-icons/ai";


function About() {
  return (
    <div>
      {}
      
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 ">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between  items-center  gap-12">
          <div>
            <img src={about} alt="" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl font-semibold mb-4  md:w-4/5">
              The unseen of spending three Years at Pixelgrades
            </h2>
            <p className="md:w-3/4  text-sm mb-4 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              atque delectus excepturi earum animi, aspernatur explicabo nulla
              quo. Quia ex eaque commodi eligendi voluptatibus cumque quod omnis
              corrupti nisi consequuntur.
            </p>
            <button className="px-7 py-2  bg-lime-500 text-white rounded hover:bg-lime-800 transition-all durtion-300  hover:translate-y-4 ">Learn More</button>
          </div>
        </div>
      </div>
      {}
      <div className="px-4 lg:px-14  max-w-screen-2xl mx-auto  py-16">
        <div className="flex  flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
          <h2 className="text-4xl font-semibold mb-4  md:w-4/5">
              Helping a local <br/> <span className="text-lime-500"> buniness reivent itself </span> 
            </h2>
            <p className="md:w-3/4  text-sm mb-4 ">
            He reach here with our hard work and dedications  
            </p>

          </div>
        

      
      {}
      <div className="md:1/2  mx-auto  flex sm:flex-row flex-col sm:items-center justify-around gap-8">
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <AiFillAlert />
            <div>
              <h4 className=" text-2xl font-semibold ">2, 34, 4561</h4>
              <p>Members</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
           <AiFillBuild />
            <div>
              <h4 className=" text-2xl font-semibold ">2, 34, 4561</h4>
              <p>Members</p>
            </div>
          </div>
          
          
        </div>

        <div className="space-y-8">
          <div className="flex items-center gap-4">
          <AiFillCrown />
            <div>
              <h4 className=" text-2xl font-semibold ">2, 34, 4561</h4>
              <p>Members</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <AiFillEuroCircle/>
            <div>
              <h4 className=" text-2xl font-semibold ">2, 34, 4561</h4>
              <p>Members</p>
            </div>
          </div>
          
          
        </div>
      </div>

      </div>
      </div>
    </div>
  );
}

export default About;

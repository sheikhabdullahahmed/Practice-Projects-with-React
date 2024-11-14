import React from 'react'
import Hero from './Hero'

function Home() {
  return (
    <div>

    <div className=' relative h-screen bg-cover bg-center' style={{backgroundImage: "url('https://youmatter.world/app/uploads/2019/11/travel-world.jpg')"}}>
        <div className=' absolute  inset-0 bg-black bg-opacity-50  flex flex-col  items-center   justify-center '>
            <h1 className='text-4xl md:text-6xl  font-bold  text-white '>Explore the World with us</h1>
            <p className='text-lg md:text-2xl text-white  mb-8 '>Discover amazing places at exculives deals </p>
            <button className='border  text-white px-6 py-2  rounded-full md:text-xl  hover:bg-blue-500 transform  transition  duration-300  hover:scale-105'>Get Started</button>
            
        </div>
    </div>
    <Hero/>
    </div>
  )
}

export default Home
import React from 'react'
import {Carousel} from 'flowbite-react'
import pic1 from '../../assets/undraw.svg'

export default function Hero() {
  return (
    <>
    <div className=''>
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
      <Carousel className='w-full mx-auto'>
        <div className=" my-28 md:my-8 py-12  flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
          <div>
            <img src={pic1} alt="" />
          </div>
          {}
          <div className='md:w-1/2'>
            <h1 className='text-5xl font-semibold mb-4  md:w-3/4 leading-snug  '>Lesson and insight <span className='text-lime-500'>from 8 Years</span>   </h1>
            <p className='  text-base mb-8'> Where to grow Your Buniness as a Developer: </p>
            <button className='px-7 py-2  bg-lime-500 text-white rounded hover:bg-lime-800 transition-all durtion-300  hover:translate-y-4 '>Sign up</button>
          </div>
        </div>
        <div className=" my-28 md:my-8 py-12  flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
          <div>
            <img src={pic1} alt="" />
          </div>
          {}
          <div className='md:w-1/2'>
            <h1 className='text-5xl font-semibold mb-4  md:w-3/4 leading-snug  '> Let's Learn and Earn Money <span className='text-lime-500'>In 4 Months</span>   </h1>
            <p className='  text-base mb-8'> Where to grow Your Buniness as a Developer: </p>
            <button className='px-7 py-2  bg-lime-500 text-white rounded hover:bg-lime-800 transition-all durtion-300  hover:translate-y-4 '>Sign up</button>
          </div>
        </div>
      </Carousel>
    </div>
        

      </div>
    </>
  )
}

import React from 'react'
import pic1 from '../../assets/pic1.svg'

function Hero() {
  return (
    <div>
        <div className='    mx-auto h-screen '>
            <div className='   flex flex-col items-center md:flex-row-reverse justify-between '>
                <div className='w-full  mx-auto'>
                    <img src={pic1 } alt="" />
                </div>
                <div className='md:w-1/2'>
                <h1 className='text-5xl font-semibold md:w-3/4 '>Lesson and insight </h1>
                <h1>Where to grow Your Buniness as a Developer:</h1>

                </div>

            </div>

        </div>
    </div>
  )
}

export default Hero
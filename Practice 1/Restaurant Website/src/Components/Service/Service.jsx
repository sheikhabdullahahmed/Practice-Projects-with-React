import React from 'react'
import Img2 from '../../assets/assets/biryani2.png'


const ServiceData = [
    {
        id: 1,
        img :Img2,
        name : "Biryani",
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi dolores magni illo quis? "
    },
    {
        id: 2,
        img : Img2,
        name : "Chicken Kari",
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi dolores magni illo quis? "
    },  
    {
    id: 3,
    img : Img2,
    name : "Cold Coffe",
    description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi dolores magni illo quis? "
},  
]



function Service() {
  return (
    <div className='py-10'>
        <div className='container'>
            {/* {header section } */}
            <div className='text-center mb-20 max-w-[400px] mx-auto '>
                <p className='text-sm bg-clip-text  text-transparent bg-gradient-to-r bg-yellow-600'>Our Service</p>
                <h1 className='text-3xl  font-bold '>Service</h1>
                <p className='text-xs text-gray-400'>
                    {""}
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Perspiciatis delectus architecto error nesciunt,

                </p>
            </div>
            {/* {header section } */}
            <div>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-14 md:gap-5 place-items-center'>
                {ServiceData.map(({id, img, name, description}) => {
                    return <div key={id} className='max-w-[300px] group  rounde-2xl bg-white dark:bg-gray-800 dark:hover:bg-yellow-400 hover:text-white duration-300 p-4 shadow-xl rounded-lg' >
                        <div className='h-[100px]'>
                            <img src={img} alt="" className='max-w-[200px] mx-auto block transform -translate-y-14 group-hover:scale-105  group-hover:row-6 duration-300:' />
                        </div>
                        <div className='p-4 text-center'>
                            <h1 className='text-xl font-bold'>{name}</h1>
                            <p className='text-gray-500 text-sm duration-300 line-clamp-2 '>{description}</p>
                        </div>
                    </div>
                })}
            </div>
            </div>
        </div>
    </div>
  )
}

export default Service
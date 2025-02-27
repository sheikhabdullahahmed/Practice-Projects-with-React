import React from 'react'
import blog from '../../assets/blog1.avif'
import blog2 from '../../assets/blog2.webp'
import blog3 from '../../assets/blog3.avif'



function Products() {
    const blogs = [
        {
            id:1, title: "Creating StreamLined SafeGurading Process with Onepren ", image: blog,
        },
        {
            id:2, title: "What are you safeguading repnsibilites and how can you manage them ?", image: blog2,
        }, 
        {
            id:3, title: "Revepinng the memeberShip Model with Austrailia ", image: blog3,
        }
    ]

  return (
    <div className='px-4 lg:px-14  max-w-screen-2xl mx-auto my-12 '>
        <div className='text-center md:w-1/2 mx-auto'>
        <h2 className="text-4xl font-semibold mb-4">
              Caring is the new Marketing 
            </h2>
            <p className="text-sm mb-8 md:w-3/4 mx-auto  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              atque delectus excepturi earum animi, aspernatur explicabo nulla
              quo. Quia ex eaque commodi .
            </p>
        </div>
        {/* {Array:} */}
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
            {
                blogs.map((item) => {
                    return <div className='mx-auto  relative mb-12 cursor-pointer' key={item.id}>
                        <div className=' text-sm text-center  px-4 py-8 bg-white  shadow-lg  rounded-md md:w-3/4  mx-auto'>
                        <img src={item.image} alt="" />
                        <h2 >{item.title}</h2>
                        </div>
                    </div>
                })
            }
        </div>


    </div>
  )
}

export default Products
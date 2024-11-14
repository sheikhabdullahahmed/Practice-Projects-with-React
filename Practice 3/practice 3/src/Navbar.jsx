import React from 'react'

function Navbar() {
    const  navitems = [
        {Link: "About", path: "about"},
        {Link: "Mission", path: "mission"},
        {Link: "Product", path: "product"}
    ] 
  return (
    <div className='py-4 px-4 lg:px-14 '>
        <nav className='flex justify-around '>
            <div>
            <h5 className='text-4xl font-semibold text-purple-900 mt-3'>Landy</h5>
            </div>
            <ul className=' space-x-10 mt-6 cursor-pointer text-purple-900   text-xl'>
                {navitems.map(({Link, path}) => <Link to= "path" key={path}>{Link}</Link>)}
            </ul>
            <div>
            <button className='w-44 mt-5  text-lg font-semibold cursor-pointer shadow-xl  text-white h-12 bg-purple-900'>Contact us</button>
            </div>
            </nav>
    </div>
  )
}

export default Navbar
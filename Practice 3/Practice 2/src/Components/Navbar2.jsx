import React from 'react'
import lando from './../assets/lando.png'

function Navbar2() {

    const navItems = [
        {Link: "Home", path: "home"},
        {Link: "Pricing", path: "pricing"},
        {Link: "About", path: "about us"},
        {Link: "Conatct", path: "contact "},

    ]


  return (
    <div>
        <div className='w-full'>
            <nav className='py-4  lg:px-20 '>
        <div className='flex justify-normal  items-center text-base gap-12 '>
            <div>
            <a href="" className='flex items-center '>
                <img className='w-36 inline-block items-center ' src={lando} alt="" />
            </a>
            </div>
            <ul className='space-x-8 md:flex  hidden'>
                {
                    navItems.map(({Link, path}) => <Link to={path} key={path}>{Link}</Link>)
                }
            </ul>
        </div>
        </nav>
        </div>

    </div>
  )
}

export default Navbar2
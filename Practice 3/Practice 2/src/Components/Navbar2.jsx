// import React from 'react'
// import lando from './../assets/lando.png'

// function Navbar2() {

//     const navItems = [
//         {Link: "Home", path: "home"},
//         {Link: "Pricing", path: "pricing"},
//         {Link: "About", path: "about us"},
//         {Link: "Conatct", path: "contact "},

//     ]


//   return (
//     <div>
//         <div className='w-full'>
//             <nav className='py-4  lg:px-20 '>
//         <div className='flex justify-normal  items-center text-base gap-12 '>
//             <div>
//             <a href="" className='flex items-center '>
//                 <img className='w-36 inline-block items-center ' src={lando} alt="" />
//             </a>
//             </div>
//             <ul className='space-x-8 md:flex  hidden'>
//                 {
//                     navItems.map(({Link, path}) => <Link to={path} key={path}>{Link}</Link>)
//                 }
//             </ul>
//         </div>
//         </nav>
//         </div>

//     </div>
//   )
// }

// export default Navbar2










import React, { useState } from 'react'
import logo from '../assets/logo.jpg'
import { GiCrossedSwords } from "react-icons/gi"
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmarksLines } from "react-icons/fa6";

function Navbar() {

    const [burger, setBurger] = useState(false)

    const navitem = [
        {Link: "Home", path: "home"},
        {Link: "About", path: "about"},
        {Link: "Pricing", path: "pricing"},
        {Link: "Phone", path: "phone"},
    ]

    const toogle = () => {
        setBurger(!burger)
    }

    
  return (
    <div className=' py-4 px-4    '>
        <div className='flex  justify-between  items-center       '>
            <div>
                <a href="" className=' text-white text-2xl font-semibold flex items-center'>
                    <img className='w-20 inline-block  items-center' src={logo} alt="" /> Ultra
                </a>
            </div>
            <ul className=' space-x-8 text-white   mt-1 font-semibold  md:flex hidden'>
                {navitem.map(({Link, path}) => <Link to={path} className="mt-1"  key={path}>{Link}</Link>)}
                <button className='bg-blue-700  text-white w-20 h-10 pb-1   '>Sign up  </button>
            </ul>
            <div>
                <button className='md:hidden' onClick={toogle}>
                    {
                        burger ?   <GiHamburgerMenu/> : <FaXmarksLines />
                    }

                </button>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar
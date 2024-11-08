// import React, { useState } from 'react'
// import logo from './../assets/logo.jpg'
// import { FaXmark } from 'react-icons/fa6'
// import { FaBars } from 'react-icons/fa6'


// export default function Navbar() {
//     const [isMenu, setisMenu ] = useState(false)


//     const navItem = [
//         {Link: "Home",  path: "home"},
//         {Link: "Service",  path: "Service"},
//         {Link: "About",  path: "about"},
//         {Link: "Product",  path: "product"},
//         {Link: "Testtimonai",  path: "testtimonai"},
//         {Link: "FAQ",  path: "FAQ"},
//     ]

//     const toogle = () => {
//         setisMenu(!isMenu)


//     }


//   return (
//     <div className='w-full '>
//         <div className={` py-4 lg:px-14`}>
//         <div className='flex justify-between items-center gap-8 text-base '>
//             <a href="" className=' text-2xl flex items-center space-x-3'>
//             <img className='w-20 inline-block  items-center ' src={logo} alt="" /> Next Cola
//             </a>
//             <ul className='md:flex space-x-10 hidden'>
//             {navItem.map(({Link, path}) => {
//                 return <div key={path}>{Link}  </div>
//             })}
//             </ul>
//             <div className='md:hidden'>
//                 <button onClick={toogle}>
//                     {
//                         isMenu ? (<FaXmark/>) : (<FaBars/>)
//                     }
                   
//                 </button>

//             </div>
//             {/* <div className={`space-y-4 px-4 mt-24 py-7 bg-lime-500 ${isMenu ? "block fixed top-0  right-0 left-0" : "hidden"}`}>
//                         {
//                             navItem.map(({Link, path}) =><Link to={path} key={path} className=" block   text-base  text-gray-900 hover:text-lime-500 first:font-medium">{Link  }</Link>)
// }

//                 </div> */}

//                 <div className={`space-y-4 px-4 mt-24 py-7 bg-lime-500  ${isMenu ? "block fixed top-0 right-0 left-0" : "hidden"} `}>
//                     {navItem.map(({Link, path}) => 
//                      <Link to={path} key={path} className="block text-base text-gray-600  first:font-medium">{Link}</Link>   
//                 )}

//                 </div>

//         </div>
//         </div>
//     </div>
//   )
// }


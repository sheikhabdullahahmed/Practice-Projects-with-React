// import React from "react";

// function Navbar() {
//   return (
//     <div className="conainer mx-auto ">
//       <nav className="flex ">
//           <img
//             className="w-30 flex justify-center  items-center gap-2  "
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgw0Ziw96taw0WSOu6VsMvbB3zAHtzKT_k0G3DKGR2-bHsNVDsCGp7VHCdDkG4dCKcuyM&usqp=CAU"
//             alt=""
//           />
//         <div className=" ">
//           <ul>
//             <li>
//               <a href="" className="inline-block px-4 py-4">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="" className=" inline-block ">
//                 About
//               </a>
//             </li>
//             <li>
//               <a href="" className="inline-block px-4 py-4">
//                 Gallery
//               </a>
//             </li>
//             <li>
//               <a href="" className="inline-block px-4 py-4">
//                 Contact
//               </a>
//             </li>
//             <li>
//               <a href="" className="inline-block px-4 py-4">
//                 Agent
//               </a>
//             </li>
//           </ul>
//         </div>
//           <button>Contact us</button>
//           <button>Book a Table</button>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;


import React from 'react'

function Navbar() {
  return (
    <div>
        <div className=" shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 ">
      <div className="container py-3 sm:py-0   ">
        <div className="flex justify-between  items-center font-bold">
          <div>
            <a href="" className=''>
              <img className='w-28  md:w-28 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQynRWjct-irxvN7m38LR5unjUtJq1K3t9LFA&s" alt="" />
              </a>
          </div>
            <ul className="hidden lg:flex gap-3">
              <li>
                <a
                  href="#"
                  className="inline-block py-4 px-4 text-gray-400 font-semibold"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-4 px-4 text-gray-400 font-semibold"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-4 px-4 text-gray-400 font-semibold"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-4 px-4 text-gray-400 font-semibold"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-4 px-4 text-gray-400 font-semibold"
                >
                  About
                </a>
              </li> 
              <button className='text-gray-400 font-semibold '>Oder Now</button>
            </ul>
            <div className='lg:flex hidden'>
                <button className='w-36 text-white  font-semibold  h-10 bg-red-700 items-center rounded-full'>Book for Ticket</button>
            </div>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
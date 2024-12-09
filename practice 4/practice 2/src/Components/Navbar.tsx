import React from 'react'
import { CiLocationArrow1 } from "react-icons/ci";
import pic4 from "./../assets/pic4.png";

function Navbar() {
  return (
    <div>
        <div className='navbar'>
          <div>
          <img src={pic4} alt="" className='logo' />
          </div>
            <ul>
              <li>Home</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Blog</li>
            </ul>
            <div className='nav-right'>
              <select >
                <option value="usd">USD</option>
                <option value="usd">PKR</option>
                <option value="usd">EURO</option>
              </select>
              <button>Sign up <CiLocationArrow1 className='arrow'/></button>

            </div>

        </div>

    </div>
  )
}

export default Navbar
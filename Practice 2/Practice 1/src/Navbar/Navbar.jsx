import React from 'react'
import logo from '../assets/logo.png'

function Navbar() {

    const navitem = [
        {Link: "Home", path: "home"},
        {Link: "About", path: "about"},
        {Link: "Pricing", path: "pricing"},
        {Link: "Phone", path: "phone"},
    ]
  return (
    <div>
        <div className=''>
            <div>
                <a href="">
                    <img src={logo} alt="" /> Ultra
                </a>
            </div>
            <ul>
                {navitem.map(({Link, path}) => <Link to={path} key={path}>{Link}</Link>)}
            </ul>
            <button>Sign up</button>
        </div>
    </div>
  )
}

export default Navbar
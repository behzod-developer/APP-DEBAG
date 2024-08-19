import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <NavLink className={'logo'}>
            <img src="" alt="" />
            <h1>LOGO</h1>
        </NavLink>
        <ul>
            <NavLink>Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Service</NavLink>
            <NavLink>Contact</NavLink>
            <button className='nav-btn-1'>Kirish</button>
            <button className='nav-btn-2'>Ro'yxatdan o'tish</button>
        </ul>
    </nav>
  )
}

export default Navbar
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Navbar() {

  const navigate = useNavigate()

  function Login(){
    navigate('/login')
  }
  function Singup(){
    navigate('/singup')
  }

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
            <button onClick={Login} className='nav-btn-1'>Kirish</button>
            <button onClick={Singup} className='nav-btn-2'>Ro'yxatdan o'tish</button>
        </ul>
    </nav>
  )
}

export default Navbar
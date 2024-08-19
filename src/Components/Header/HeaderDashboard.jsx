import React from 'react'
import './Header.css'
import { IoMdNotificationsOutline } from "react-icons/io";

function HeaderDashboard() {
  return (
    <header className='dashboard-header'>
      <h2>Bosh Sahifa</h2>
      <div className="header-data-search">
        <div className='header-input'>
          <input type="text" />
          <button>search</button>
        </div>
        <IoMdNotificationsOutline className='notification' />
        <select name="" id="">
          <option value="">Uz</option>
          <option value="">Ru</option>
        </select>
      </div>
    </header>
  )
}

export default HeaderDashboard
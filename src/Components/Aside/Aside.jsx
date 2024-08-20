import React, { useContext } from 'react'
import './Aside.css'
import { NavLink } from 'react-router-dom'
import { MdInfoOutline } from "react-icons/md";
import { BsListTask } from "react-icons/bs";
import { IoReorderFour } from "react-icons/io5";
import { FaChartLine } from "react-icons/fa";
import { MdOutlineBubbleChart } from "react-icons/md";
import { Context } from '../../App';

function Aside() {

    const { data_user } = useContext(Context)

    console.log(data_user)


    return (
        <div className='aside'>
            <div className="logo">
                <img src="" alt="" />
                <h1>Logo</h1>
            </div>
            <div className="aside-user">
                <div className="aside-user-color">
                    <img src='https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg' alt="" />
                    <div className="aside-user-title">
                        <h3>  first name last name</h3>
                        <span className='id-number'>ID: <b> id_number </b></span>
                    </div>
                </div>
            </div>
            <div className="aside-menu">
                <NavLink className={'actives'}><MdInfoOutline className='icon' /> Umumiy ma'lumotlar</NavLink>
                <NavLink><BsListTask className='icon' /> Ilmiy Ishlar</NavLink>
                <NavLink><MdOutlineBubbleChart className='icon' />Pedogogik ishlar</NavLink>
                <NavLink><FaChartLine className='icon' /> Mukofotlar</NavLink>
                <NavLink><IoReorderFour className='icon' /> Boshqalar</NavLink>
            </div>
        </div>
    )
}

export default Aside
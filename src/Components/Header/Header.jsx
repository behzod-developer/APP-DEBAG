import React, { useEffect, useState } from 'react'
import Navbar from './Navbar/Navbar'
import './Header.css'
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import axios from 'axios';
import Banner from '../../Container/Banner/Banner';

function Header() {



    return (
        <header>
            <div className="contact-line">
                <div className="header-phone">
                    <IoCall className='icon' />
                    +998333333333
                </div>
                <div className="header-mail">
                    <IoIosMail className='icon' />
                    qwerty@gmail.com
                </div>
            </div>
            <Navbar />
            <div className="header-container">
                <div className="header-text">
                    <h1>Looking For Inspiration</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odit nihil ullam nesciunt quidem iste, Repellendus odit nihil</p>
                    <button>Kirish</button>
                </div>
                <div className="header-image">
                    <img src="https://i.postimg.cc/65QxYYzh/001234.png" alt="" />
                </div>
            </div>
        </header>
    )
}

export default Header
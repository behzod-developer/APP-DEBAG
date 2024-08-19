import React, { useEffect, useState } from 'react'
import Navbar from './Navbar/Navbar'
import './Header.css'
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import header_image from '../../assets/header_image.png'

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
                    <h1>
                        Lessons and insights <br />
                        <span> from 8 years</span>
                    </h1>
                    <p>Where to grow your business as a photographer: site or social media?</p>
                    <button>Ro'yxatdan o'tish</button>
                </div>
                <div className="header-image">
                    <img src={header_image} alt="" />
                </div>
            </div>
        </header>
    )
}

export default Header
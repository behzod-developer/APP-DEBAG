import React from 'react'
import './About.css'
import { FaUserGroup } from "react-icons/fa6";

function About() {
    return (
            <div className='about-container'>
                <div className='about-banner'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vitae fugiat consequatur ab labore impedit, provident non assumenda accusamus expedita similique soluta cumque reprehenderit.s</p>
                </div>
                <div className='about-text'>
                    <h1>127+</h1>
                    <h1><FaUserGroup /> 1485</h1>
                </div>
            </div>
    )
}

export default About
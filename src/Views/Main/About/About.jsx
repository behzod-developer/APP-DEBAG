import React from 'react'
import './About.css'
import { FaUsers } from "react-icons/fa";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { FaHandshakeSimple } from "react-icons/fa6";

function About() {
    return (
        <div className='about-container'>
            <div className='about-title'>
                <h2>Manage your entire community <br /> in a single system</h2>
                <p>Who is Nextcent suitable for?</p>
                <div className='about-text'>
                    <div className="about-child">
                        <FaUsers className='icon' />
                        <h4>Membership <br /> Organisations</h4>
                        <p>Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                    <div className="about-child">
                        <PiBuildingApartmentFill className='icon' />
                        <h4>National <br /> Associations</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias officia ullam id nemo aliquam omnis, dolorem voluptatibus magni amet ipsum?</p>
                    </div>
                    <div className="about-child">
                        <FaHandshakeSimple className='icon' />
                        <h4>Clubs And <br /> Groups</h4>
                        <p>Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
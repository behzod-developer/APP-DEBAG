import React from 'react'
import './About.css'
import second_about_image from '../../../assets/second_about.png'

function SecondAbout() {
    return (
        <div className='second-about-container'>
            <div className="second-about-parent">
                <div className="second-about-image">
                    <img src={second_about_image} alt="" />
                </div>
                <div className="second-about-text">
                    <h4>The unseen of spending three years at Pixelgrade</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                    <div className="second-about-btn">
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondAbout
import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer>
            <div className="footer-parent">
            <div className="footer-contact footer-column">
                    <div className="logo">
                        <img src="" alt="" />
                        <h1>Logo</h1>
                    </div>
                </div>
                <div className="footer-column">
                    <h2>Service</h2>
                    <span>Home</span>
                    <span>About</span>
                    <span>Service</span>
                    <span>Contact</span>
                </div>
                <div className="footer-column">
                    <h2>Contact</h2>
                    <span>+998333333333</span>
                    <span>qwerty@gmail.com</span>
                </div>
               <div className="footer-search">
                <h2>Our Newsletter</h2>
                <span>Subscribe to our newsletter and receive the latest news about our products and services!</span>
                <div className="footer-search-btn">
                    <input type="text" />
                    <button>submit</button>
                </div>
               </div>
            </div>
        </footer>
    )
}

export default Footer
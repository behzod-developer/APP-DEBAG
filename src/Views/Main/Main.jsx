import React from 'react'
import Header from '../../Components/Header/Header'
import './Main.css'
import About from './About/About'
import Banner from '../../Container/Banner/Banner'
import SecondAbout from './About/SecondAbout'
import Category from './Category/Category'
import Footer from '../../Components/Footer/Footer'




function Main() {
    return (
        <div className='main-container'>
            <Header />
            <About />
            <SecondAbout />
            <Category />
            <Banner />
            <Footer />
        </div>
    )
}

export default Main
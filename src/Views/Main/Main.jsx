import React from 'react'
import Header from '../../Components/Header/Header'
import './Main.css'
import About from './About/About'
import Category from './Category/Category'
import Banner from '../../Container/Banner/Banner'




function Main() {
    return (
        <div className='main-container'>
            <Header />
            <About />
            <Category />
            <Banner />
        </div>
    )
}

export default Main
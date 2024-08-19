import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { home } from '../../../Database/home'
import DashboardCard from './DashboardCard'
import './DashboardPage.css'

function DashboardPage() {

    const [landingCategory, setLandingCategory] = useState([])

    useEffect(() => {
        async function fetchCategory() {
            try {
                const res = await axios.get(`${home}`)
                setLandingCategory(res.data.categories)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchCategory()
    }, [])

    console.log(landingCategory)

    return (
        <div className='dashboard-page-container'>
            <div className="dashboard-page-data">
                {
                    landingCategory.map((item) => (
                        <DashboardCard item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default DashboardPage
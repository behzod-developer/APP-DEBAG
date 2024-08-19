import React from 'react'
import Aside from '../../Components/Aside/Aside'
import { Route, Routes } from 'react-router-dom'
import HeaderDashboard from '../../Components/Header/HeaderDashboard'
import './Dashboard.css'
import DashboardPage from '../pages/DashboardPage/DashboardPage'

function Dashboard() {
    return (
        <div className='dashboard'>
            <Aside />
            <div className="dashboard-container">
                <HeaderDashboard />
                <Routes>
                    <Route path='/' element={<DashboardPage />} />
                </Routes>
            </div>
        </div>
    )
}

export default Dashboard
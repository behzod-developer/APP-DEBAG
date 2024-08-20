import React from 'react'
import { HiOutlineNewspaper } from "react-icons/hi2";

function DashboardCard({ item }) {
    return (
        <div className='dashboard-page-card'>
            <div className="dashboard-page-data-card">
                <h4>{item.name_uz}</h4>
                <h1>{item.order}</h1>
                <HiOutlineNewspaper className='card-icon' />
            </div>

        </div>
    )
}

export default DashboardCard
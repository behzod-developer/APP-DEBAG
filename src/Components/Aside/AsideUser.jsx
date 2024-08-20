import React from 'react'

function AsideUser() {
    return (
        <div className="aside-user">
            <div className="aside-user-color">
                <img src='https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg' alt="" />
                <div className="aside-user-title">
                    <h3> {user_data.first_name} <br /> last name</h3>
                    <span>ID:</span>
                </div>
            </div>
        </div>
    )
}

export default AsideUser
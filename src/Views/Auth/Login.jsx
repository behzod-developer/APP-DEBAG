import React, { useState } from 'react'
import './Auth.css'

function Login() {

   

    return (
        <div className='login'>
            <div className='login-container'>
                <h2>Login</h2>
                <form onSubmit={addLoginHandlers} action="">
                    <input
                        type="text"
                        value={phone_number}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button>Submit</button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        </div>
    )
}

export default Login
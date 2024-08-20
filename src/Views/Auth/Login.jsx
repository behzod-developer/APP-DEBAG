import React, { useContext, useState } from 'react'
import './Auth.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { login } from '../../Database/auth';
import { Context } from '../../App';

function Login() {

    const [phone_number, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null);


    const navigate = useNavigate()

    const addLoginHandlers = e => {
        e.preventDefault()

        async function postData() {
            try {
                const response = await axios.post(login, {
                    phone_number, password
                });
                console.log('Response:', response.data);
                navigate('/dashboard')
                const user_data = response.data;

                console.log('Succssessfull data', response.data)


                // Tokenni localStorage yoki sessionStorage'ga saqlash
                localStorage.setItem('user_data', JSON.stringify(user_data));

                console.log('user data saqlandi:', user_data);
            }
            catch (err) {
                console.log('Error:', err);
                setError('telefon raqam yoki parolda xatolik bor');
            }
        }
        postData();
    }




    return (
        <div className='login'>
            <div className='login-container'>
                <h2>Login</h2>
                <form onSubmit={addLoginHandlers} action="">
                    <div className="input">
                        <span>Telefon raqam</span>
                        <input
                            className='login-input'
                            type="text"
                            value={phone_number}
                            placeholder='telefon raqam kiriting'
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input">
                        <span>parol</span>
                        <input
                            className='login-input'
                            type="password"
                            value={password}
                            placeholder='parolni kiriting'
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button>Submit</button>
                </form>
                {error && <p className='error' style={{ color: 'red' }}>{error}</p>}
            </div>
        </div>
    )
}

export default Login
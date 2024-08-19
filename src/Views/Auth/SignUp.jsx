import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { singup } from '../../Database/auth';

function SignUp() {

    const [phone_number, setPhoneNumber] = useState('')
    const [error, setError] = useState(null);

    const navigate = useNavigate()

    const addSignUpHandlers = e => {
        e.preventDefault()

        async function postData() {
            try {
                const response = await axios.post(singup, {
                    phone_number
                });
                console.log('Response:', response.data);
                navigate('/verify-code')
                const token = response.data.token;

                // Tokenni localStorage yoki sessionStorage'ga saqlash
                localStorage.setItem('token', token);
            
                console.log('Token saqlandi:', token);
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
                <h2>Sign Up</h2>
                <form onSubmit={addSignUpHandlers} action="">
                    <div className="input">
                        <span>Telefon raqam</span>
                        <input
                            className='login-input'
                            type="tel"
                            value={phone_number}
                            placeholder='telefon raqam kiriting'
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                        />
                    </div>
                    <button>Submit</button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        </div>
    )
}

export default SignUp
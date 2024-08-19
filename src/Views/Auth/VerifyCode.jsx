import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { verify_code } from '../../Database/auth';

function VerifyCode() {


    const [code, setRegisterCode] = useState(null)
    const [error, setError] = useState(null);

    const navigate = useNavigate()

    const addSignUpHandlers = e => {
        e.preventDefault()

        const token = localStorage.getItem('token');

        async function postData() {
            try {
                const response = await axios.post(verify_code, {
                    code, token
                });
                console.log('Response:', response.data);
                navigate('/register')
                const token2 = response.data.token;

                // Tokenni localStorage yoki sessionStorage'ga saqlash
                localStorage.setItem('token', token2);
            
                console.log('Token saqlandi:', token2);
            }
            catch (err) {
                console.log('Error:', err);
                setError('token yoki kodda xatolik bor');
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
                        <span>code</span>
                        <input
                            className='login-input'
                            type="number"
                            value={code}
                            placeholder='kodnii kiriting'
                            onChange={(e) => setRegisterCode(e.target.value)}
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

export default VerifyCode
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { verify_code } from '../../Database/auth';

function VerifyCode() {

    const [token, setRegisterToken] = useState('')
    const [code, setRegisterCode] = useState()
    const [error, setError] = useState(null);

    const navigate = useNavigate()

    const addSignUpHandlers = e => {
        e.preventDefault()

        async function postData() {
            try {
                const response = await axios.post(verify_code, {
                    token, code
                });
                console.log('Response:', response.data);
                navigate('/dasshboard')
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
                            type="text"
                            value={token}
                            placeholder='token kiriting'
                            onChange={(e) => setRegisterToken(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input">
                        <span>Telefon raqam</span>
                        <input
                            className='login-input'
                            type="number"
                            value={code}
                            placeholder='kodnii kiriting'
                            onChange={(e) => setRegisterCode(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input">
                        <span>Telefon raqam</span>
                        <input
                            className='login-input'
                            type="tel"
                            value={phone_number}
                            placeholder='telefon raqam kiriting'
                            onChange={(e) => setRegisterToken(e.target.value)}
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
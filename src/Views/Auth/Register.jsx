import React, { useState } from 'react';
import axios from 'axios';
import { register } from '../../Database/auth';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate()

    const handleImageChange = (event) => {
        if (event.target.files.length > 0) {
            setImage(event.target.files[0]);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        setSuccess('');

        const token = localStorage.getItem('token');

        // Create FormData object
        const formData = new FormData();
        formData.append('token', token);
        if (firstName) formData.append('first_name', firstName);
        if (lastName) formData.append('last_name', lastName);
        formData.append('password', password);
        if (image) formData.append('image', image);

        try {
            // Make the POST request with FormData
            const response = await axios.post(register, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            setSuccess('Registration successful!');
            navigate('/dashboard')
        } catch (error) {
            setError('Error registering user.');
            console.error('Registration error:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="login">

            <div className="login-container register-container">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            className='login-input'
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            className='login-input'
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            className='login-input'
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className='input-file'>
                        <input
                            type="file"
                            id="image"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </div>
                    <button type="submit">Register</button>
                </form>
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
            </div>
        </div>
    );
};

export default RegisterPage;

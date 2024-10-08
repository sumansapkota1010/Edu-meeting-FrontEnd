import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const LoginPage = () => {
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoggingIn(true);

        try {
            const loginResponse = await axios.post('http://localhost:5000/api/login', userData);
            if (loginResponse.status === 200) {
                const { data: { data: token } } = loginResponse;

                localStorage.setItem('token', token);

                const profileResponse = await axios.get('http://localhost:5000/api/profile', {
                    headers: { Authorization: `Bearer ${token}` }

                });
                console.log(loginResponse)
                console.log(profileResponse.data)

                if (profileResponse.status === 200) {
                    const { role } = profileResponse.data.data;

                    Swal.fire({
                        icon: 'success',
                        title: 'Login Successful',
                        text: 'Redirecting to your dashboard...',
                        timer: 1000,
                        timerProgressBar: true,
                        showConfirmButton: false
                    });

                    setTimeout(() => {
                        if (role === 'admin') {
                            navigate('/admin');
                        } else {
                            navigate('/');
                        }
                    }, 1000);
                }
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: error.response?.data?.message || 'Login Unsuccessful. Please check your credentials and try again.'
            });
        } finally {
            setIsLoggingIn(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={userData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={userData.password}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={isLoggingIn}
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            {isLoggingIn ? 'Logging in...' : 'Login'}
                        </button>
                    </div>
                    <div className="text-sm text-center mt-4">
                        <span className="text-gray-600">Don't have an account? </span>
                        <a href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">Sign Up</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;

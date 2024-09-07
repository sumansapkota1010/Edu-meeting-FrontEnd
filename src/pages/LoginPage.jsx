import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { STATUSES } from '../globals/misc/statuses';
import { loginUser, fetchProfile } from '../../store/authSlice';

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { data, status, token } = useSelector((state) => state.auth);

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    const [hasLoggedIn, setHasLoggedIn] = useState(false);
    const [hasRedirected, setHasRedirected] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(userData));
    };

    useEffect(() => {
        if (token && status === STATUSES.SUCCESS) {
            dispatch(fetchProfile());
        }
    }, [token, status, dispatch]);

    useEffect(() => {
        if (data && data.role && !hasLoggedIn && !hasRedirected) {
            toast.success('Login Successful');
            setHasLoggedIn(true);

            setTimeout(() => {
                if (data.role === 'admin') {
                    navigate('/admin');
                } else {
                    navigate('/');
                }
                setHasRedirected(true);
            }, 1000);
        }
    }, [data, hasLoggedIn, hasRedirected, navigate]);

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
                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Login
                        </button>
                    </div>
                    <div className="text-sm text-center mt-4">
                        <span className="text-gray-600">Don't have an account? </span>
                        <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">Sign Up</Link>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default LoginPage;

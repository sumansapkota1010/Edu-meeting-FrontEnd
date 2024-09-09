import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut } from '../../../../store/authSlice';

const AdminPanel = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(LogOut());
        console.log("logout clicked");

        localStorage.removeItem('token');
        navigate("/login");
    };

    return (
        <div className="flex">
            <div className="w-64 h-screen bg-gray-800 text-white p-5 shadow-lg">
                <h1 className="text-3xl font-bold mb-8 text-center">Admin Dashboard</h1>
                <ul className="space-y-2">
                    <li>
                        <Link
                            to="/admin/meetings"
                            className="block py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                        >
                            Meetings
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/admin/courses"
                            className="block py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                        >
                            Courses
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/admin/contact"
                            className="block py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/admin/user"
                            className="block py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                        >
                            User
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={handleLogout}
                            to="/login"
                            className="block py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                        >
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="flex-1 p-10 bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold mb-4">Welcome to the Admin Dashboard</h2>
                    <p className="text-lg text-gray-600">Manage meetings, courses, and more from here.</p>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;

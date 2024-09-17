import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const AdminUser = () => {
    const [users, setUsers] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://edu-meeting-backend.vercel.app/api/admin/user', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUsers(response.data.data);
                console.log(response.data.data)
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleDelete = async (userId) => {
        if (!userId) {
            console.log("No user id found")
            return
        }
        try {
            await axios.delete(`https://edu-meeting-backend.vercel.app/api/admin/user/${userId}`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            )
            setUsers(users.filter(user => user._id !== userId))

        } catch (error) {
            console.error('Error deleting courses:', error);
        }

    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">User Management</h1>

            {users.length > 0 ? (
                <div className="overflow-x-auto shadow-md rounded-lg">
                    <table className="min-w-full table-auto bg-white">
                        <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Email</th>
                                <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Role</th>
                                <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user._id} className="border-b border-gray-200 hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.userName}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.userEmail}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.role}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <button onClick={() => handleDelete(user._id)} className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 transition">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-center text-gray-500">No users available.</p>
            )}
            <li className='list-none flex justify-center text-center mt-14'>
                <Link
                    to="/admin/"
                    className="  justify-center py-2 items-center rounded-md text-lg font-semibold whitespace-nowrap bg-gray-400 transition-colors"
                >
                    Admin Dashboard
                </Link>
            </li>
        </div >
    );
};

export default AdminUser;

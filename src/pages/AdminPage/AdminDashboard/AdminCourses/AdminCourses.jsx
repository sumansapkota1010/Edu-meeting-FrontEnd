import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import crudBg from '../../../../assets/crud bg.jpg';

const AdminCourses = () => {
    const [courses, setCourses] = useState([]);

    const token = localStorage.getItem('token');

    const fetchCourses = async () => {
        try {
            const response = await axios.get('https://edu-meeting-backend.vercel.app/api/courses/');
            setCourses(response.data.courses);
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    const handleDelete = async (courseId) => {
        if (!courseId) return;

        try {
            await axios.delete(`https://edu-meeting-backend.vercel.app/api/courses/${courseId}`, {
                headers: { 'Authorization': `Bearer ${token}` },
            });
            setCourses(courses.filter(course => course._id !== courseId));
        } catch (error) {
            console.error('Error deleting courses:', error);
        }
    };

    return (
        <div
            style={{ backgroundImage: `url(${crudBg})` }}
            className="p-10 bg-cover min-h-screen flex flex-col items-center justify-center"
        >
            <h2 className="text-4xl font-extrabold mb-8 text-center text-white drop-shadow-lg">
                Manage Courses
            </h2>
            <div className="overflow-x-auto w-full lg:w-3/4 bg-white shadow-xl rounded-lg">
                <table className="min-w-full table-auto text-left">
                    <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                        <tr>
                            <th className="py-4 px-6 text-lg font-semibold">Image</th>
                            <th className="py-4 px-6 text-lg font-semibold">Title</th>
                            <th className="py-4 px-6 text-lg font-semibold">Description</th>
                            <th className="py-4 px-6 text-lg font-semibold">Price</th>
                            <th className="py-4 px-6 text-lg font-semibold">Rating</th>
                            <th className="py-4 px-6 text-lg font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.length === 0 ? (
                            <tr>
                                <td colSpan="6" className="py-6 text-center text-gray-500">No courses available</td>
                            </tr>
                        ) : (
                            courses.map(course => (
                                <tr
                                    key={course._id}
                                    className="border-b hover:bg-gray-50 transition-all duration-200"
                                >
                                    <td className="py-4 px-6">
                                        <img
                                            src={course.courseImage}
                                            alt={course.title}
                                            className="w-24 h-24 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                                        />
                                    </td>
                                    <td className="py-4 px-6 text-gray-900 font-medium text-lg">
                                        {course.title}
                                    </td>
                                    <td className="py-4 px-6 text-gray-600 max-w-xs truncate">
                                        {course.description}
                                    </td>
                                    <td className="py-4 px-6 text-green-500 font-semibold">
                                        ${course.price}
                                    </td>
                                    <td className="py-4 px-6">
                                        <span className="text-yellow-400">{course.rating} ★</span>
                                    </td>
                                    <td className="py-4 px-6 space-x-4">
                                        <Link
                                            to={`/admin/courses/edit/${course._id}`}
                                            className="text-blue-500 hover:text-blue-700 font-semibold transition-colors"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(course._id)}
                                            className="text-red-500 hover:text-red-700 font-semibold transition-colors"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
            <div className="mt-10">
                <Link
                    to="/admin/courses/create"
                    className="bg-purple-700 text-white py-3 px-8 rounded-full text-lg font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
                >
                    Create New Course
                </Link>
                <Link
                    to="/admin/courses/"
                    className=" ml-5 bg-red-500 text-white py-3 px-8 rounded-full text-lg font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
                >
                    Courses
                </Link>
            </div>
        </div>
    );
};

export default AdminCourses;

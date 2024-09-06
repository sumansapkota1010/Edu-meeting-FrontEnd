import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const AdminCourses = () => {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const fetchCourses = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/courses/');
            setCourses(response.data.courses);
            console.log(response.data.courses)
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    const handleDelete = async (courseId) => {
        if (!courseId) {
            console.error('Invalid course ID');
            return;
        }

        try {
            await axios.delete(`http://localhost:5000/api/courses/${courseId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            setCourses(courses.filter(course => course._id !== courseId));
        } catch (error) {
            console.error('Error deleting courses:', error);
        }
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Courses</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 shadow-lg rounded-md">
                    <thead className="bg-blue-600 text-white">
                        <tr>
                            <th className="py-3 px-4 border-b">Image</th>
                            <th className="py-3 px-4 border-b">Title</th>
                            <th className="py-3 px-4 border-b">Description</th>
                            <th className="py-3 px-4 border-b">Price</th>
                            <th className="py-3 px-4 border-b">Rating</th>
                            <th className="py-3 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.length === 0 ? (
                            <tr>
                                <td colSpan="8" className="py-4 text-center text-gray-500">No courses available</td>
                            </tr>
                        ) : (
                            courses.map(course => (
                                <tr key={course._id}>
                                    <td className="py-2 px-4 border-b">
                                        <img
                                            src={course.courseImage}
                                            alt={course.title}
                                            className="w-32 h-32 object-cover rounded-lg shadow-md"
                                        />
                                    </td>
                                    <td className="py-2 px-4 border-b font-medium">{course.title}</td>
                                    <td className="py-2 px-4 border-b">{course.description}</td>
                                    <td className="py-2 px-4 border-b">${course.price}</td>
                                    <td className="py-2 px-4 border-b">{course.rating}</td>
                                    <td className="py-2 px-4 border-b">
                                        <Link
                                            to={`/admin/courses/edit/${course._id}`}
                                            className="text-blue-500 hover:text-blue-700 font-semibold mr-4"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(course._id)}
                                            className="text-red-500 hover:text-red-700 font-semibold"
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
            <div className="flex justify-center items-center py-6">
                <Link
                    to="/admin/courses/create"
                    className="bg-blue-500 text-white py-2 px-6 rounded-md text-lg font-semibold hover:bg-blue-600 transition-colors shadow-md"
                >
                    Create Course
                </Link>
            </div>
        </div>
    );
};

export default AdminCourses;

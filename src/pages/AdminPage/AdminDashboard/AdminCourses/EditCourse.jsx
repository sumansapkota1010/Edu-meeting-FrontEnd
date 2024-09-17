import React, { useEffect, useState } from 'react';

import formbg2 from '../../../../assets/formbg2.jpg';
import formbg from '../../../../assets/formbg.jpg';

import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Editcourse = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
    const { id } = useParams();

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setFormData({
                ...formData,
                [name]: files[0]
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const token = localStorage.getItem('token');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData();
        Object.keys(formData).forEach(key => {
            if (formData[key] !== null && formData[key] !== '') {
                form.append(key, formData[key]);
            }
        });

        try {
            await axios.patch(`https://edu-meeting-backend.vercel.app/api/courses/${id}`, form, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
                },
            });
            Swal.fire({
                icon: 'success',
                title: 'Course Updated Successfully',
                text: 'Redirecting to your courses...',
                timer: 1000,
                timerProgressBar: true,
                showConfirmButton: false
            });
            setTimeout(() => {
                navigate("/admin/courses/managecourses");
            }, 1000);

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Failed to update Courses',
                text: 'Try Again',
                timer: 1000,
                timerProgressBar: true,
                showConfirmButton: false
            });
        }
    };

    const fetchSingleData = async () => {
        try {
            const response = await axios.get(`https://edu-meeting-backend.vercel.app/api/courses/${id}`);
            console.log(response.data.course)
            if (response.data.course.length > 0) {
                setFormData(response.data.course[0]);
            } else {
                console.error('No courses found');
            }
        } catch (error) {
            console.error('Error fetching course data:', error);
        }
    };

    useEffect(() => {
        fetchSingleData();
    }, []);

    return (
        <div
            style={{ backgroundImage: `url(${formbg2})` }}
            className="flex items-center justify-center w-full min-h-screen px-4 bg-cover bg-no-repeat"
        >
            <div className="bg-content  p-8 rounded-lg shadow-lg w-full max-w-4xl mx-auto mt-8 lg:mt-12">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Edit course</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-800 text-sm font-semibold mb-2">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title || ''}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition duration-300"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-800 text-sm font-semibold mb-2">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            rows="4"
                            value={formData.description || ''}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition duration-300"
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="block text-gray-800 text-sm font-semibold mb-2">Price</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={formData.price || ''}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition duration-300"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="rating" className="block text-gray-800 text-sm font-semibold mb-2">Rating</label>
                        <input
                            type="number"
                            id="rating"
                            name="rating"
                            value={formData.rating || ''}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition duration-300"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="courseImage" className="block text-gray-800 text-sm font-semibold mb-2">Course Image</label>
                        <input
                            type="file"
                            id="courseImage"
                            name="courseImage"
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition duration-300"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Editcourse;

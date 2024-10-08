import React, { useEffect, useState } from 'react';

import form from '../../../../assets/form.png';

import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const EditMeeting = () => {
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
            await axios.patch(`http://localhost:5000/api/meetings/${id}`, form, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
                },
            });
            Swal.fire({
                icon: 'success',
                title: 'Meeting Updatad Successfully',
                text: 'Redirecting to your meetings...',
                timer: 1000,
                timerProgressBar: true,
                showConfirmButton: false
            });
            setTimeout(() => {
                navigate("/admin/meetings/managemeetings")
            }, 1000);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Failed to update Meeting',
                text: 'Try Again',
                timer: 1000,
                timerProgressBar: true,
                showConfirmButton: false
            });
        }
    };

    const fetchSingleData = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/meetings/${id}`);
            if (response.data.meetings.length > 0) {
                setFormData(response.data.meetings[0]);
            } else {
                console.error('No meetings found');
            }
        } catch (error) {
            console.error('Error fetching meeting data:', error);
        }
    };

    useEffect(() => {
        fetchSingleData();
    }, []);

    return (
        <div
            style={{ backgroundImage: `url(${form})` }}
            className="flex items-center justify-center w-full min-h-screen px-4 bg-cover bg-no-repeat"
        >
            <div


                className="bg-contain p-8 rounded-lg shadow-lg w-full max-w-4xl mx-auto mt-8 lg:mt-12">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Edit Meeting</h2>
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
                        <label htmlFor="date" className="block text-gray-800 text-sm font-semibold mb-2">Date</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date || ''}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition duration-300"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="hours" className="block text-gray-800 text-sm font-semibold mb-2">Hours</label>
                        <input
                            type="text"
                            id="hours"
                            name="hours"
                            value={formData.hours || ''}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition duration-300"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="location" className="block text-gray-800 text-sm font-semibold mb-2">Location</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={formData.location || ''}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition duration-300"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="bookNow" className="block text-gray-800 text-sm font-semibold mb-2">Book Now</label>
                        <input
                            type="text"
                            id="bookNow"
                            name="bookNow"
                            value={formData.bookNow || ''}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition duration-300"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="category" className="block text-gray-800 text-sm font-semibold mb-2">Category</label>
                        <select
                            id="category"
                            name="category"
                            value={formData.category || ''}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition duration-300"
                            required
                        >
                            <option value="">Select a category</option>
                            <option value="Soon">Soon</option>
                            <option value="Important">Important</option>
                            <option value="Attractive">Attractive</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="meetingImage" className="block text-gray-800 text-sm font-semibold mb-2">Meeting Image</label>
                        <input
                            type="file"
                            id="meetingImage"
                            name="meetingImage"
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

export default EditMeeting;
